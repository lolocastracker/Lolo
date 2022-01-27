import './ReportPage.css'
import Navbar from '../components/navbar/Navbar.js'
import { useState,useEffect,useRef } from 'react'
import MapReport from '../components/map/Map_Report.js'
import { Header, Container, Input, Grid } from 'semantic-ui-react'
import {unstable_batchedUpdates} from 'react-dom';
// for the forms 
import {
    Button,
    Form,
    TextArea,
    Icon
  } from 'semantic-ui-react'

// adding date
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef } from 'react'
import React from "react";
import LocationSearch from '../components/map/LocationSearch.js'


function convertDate(date){
    // date is a Datetime object
    // convert date Object to format YYYY-MM-DD HH:MM:SS
    var mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2),
        hr = ("0" + date.getHours()).slice(-2),
        min=("0" + date.getMinutes()).slice(-2),
        sec = ("0" + date.getSeconds()).slice(-2);
    var d = [date.getFullYear(), mnth, day].join("-");
    var time = [hr, min, sec].join(":");
    return d + " " + time
}

const ReportPage = () =>{

  

    //map
    const [position, setPosition] = useState({"lat":3.5149, "lng":38.2212})


    //searchbox 
    const [value, setValue] = useState("")

  
    
    // getting the date
    const ref = React.createRef();
    const [startDate, setStartDate] = useState("");  // these are the variables for the dates
    const CalendarIcon = forwardRef(({ value, onClick }, ref) => (
        <Icon name="calendar outline" size="big" onClick={onClick} ref={ref}/>
    )); // when you click the icon, it should display the date
    console.log("ReportPage date=" + startDate);
   // setting images
   const [image, setImage]=useState(""); // the image here is the actual image. Calling image.name will give its name
   const [imageName, setImageName]=useState("");
   const imageRef = React.useRef(null);



   function getLocation(){
    navigator.geolocation.getCurrentPosition((position) => {
        setPosition({"lat":position.coords.latitude, "lng":position.coords.longitude});
    });
  }  
  
  async function ReverseGeoCode(){
    let apiKey="NyFYmvaa4CgbDqC850K0l4wku2ua1ZEvS3vXXi_8gqw"
    let url="https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json"
    let place=await fetch(`${url}?prox=${position.lat},${position.lng}&apiKey=${apiKey}&mode=retrieveAddresses`,{
        method: 'GET'
    })
    console.log("Request Info Reverse Geocode",place)
    let resp=await place.json()
    console.log("Reverse Data Reverse Geocode",resp)
    try{
        console.log(resp["Response"]["View"][0]["Result"][0])
        if (resp["Response"]["View"].length>0){
            if(resp["Response"]["View"][0]["Result"].length>0){
                let addr=resp["Response"]["View"][0]["Result"][0]["Location"]["Address"]["Label"]
                unstable_batchedUpdates(() => {
                    updateAddress(addr)
                    setValue(addr)
                  });
            }
            
        }
    }
    catch {
        console.log("Increase Waittime")
    }
  
    

    }

    async function GeoCode(){
        let apiKey="NyFYmvaa4CgbDqC850K0l4wku2ua1ZEvS3vXXi_8gqw"
        let url="https://geocode.search.hereapi.com/v1/geocode"
        let place=await fetch(`${url}?q=${address}&apiKey=${apiKey}`,{
            method: 'GET'
        })
        console.log("Request Info Geocode",place)
        let resp=await place.json()
        console.log("Reverse Data Geocode",resp)
        try{
            if (resp["items"].length>0){
               setPosition(resp["items"][0]["position"])
                
            }
        }
        catch {
            console.log("Increase Waittime")
        }
      
        
    
        }
    


  
  
   function useDisplayImage(){
       const [result, setResult]=useState("");
       function uploader(e){
           const imageFile=e.target.files[0];
           const reader=new FileReader();
           reader.addEventListener("load", (e)=>{
            if (imageFile.size>getMax(10)){
                return
            }
               setResult(e.target.result);
           });
           reader.readAsDataURL(imageFile);
       }
    //    console.log("Image name=" + image.name);
       return {result, uploader};
   }
    const {result, uploader}=useDisplayImage();

   // handling checkbox
   const [locustArr, updatelocustArr] = useState([]); // this is the list of of checkbox
   const checkboxHandler = (e)=>{
       const checked = e.target.checked; // returns true if clicked
       if (checked===true){
            console.log("Add LocustType="+ e.target.name);
            updatelocustArr(prevArr => [...prevArr, e.target.name]);
       }else{
           // not check, then remove the locust
           console.log("Remove LocustType= "+ e.target.name);
           const value = e.target.name;
           updatelocustArr(locustArr.filter(type => type !== value));
       }
       console.log("LocustTypeArray = " + locustArr.toString());

   }

   // handle location input box
   const [address, updateAddress] = useState("");
   // handle comment 
   const [commentBody, updateCommentBody] = useState("");
   // redirect after submit  
   const handleRedirect = (url) => {
        window.location.href = '/report_submit';
    }

    function getMax(t){
        return t*1024*1024
    }
   
   // submit button 
   // must have a date and coordinates
   const SubmitButton = (e)=>{
       e.preventDefault(); // prevent default 
       // limit image size 
       if(position===null || startDate===""){
           alert("Please fill in the coordinates and/or date for the report.");
       } else{
            // get data to send to backend
            const datetime = convertDate(startDate)
            console.log("datetime="+ datetime)
            const sendtoBackend={
                date: datetime,
                latlng: position,
                imgName: imageName,
                img:result, 
                locustType:locustArr,
                comment: commentBody,
                addr: address
            };
            console.log("image name="+image.name);
            console.log("image size="+image.size);
            console.log("Sending data to the backend!");
            console.log(sendtoBackend)
          
            // state for AJAX request
            // const [error, setError] = useState(null);
            // const [message, setMessage]=useState("");
            
            fetch('/api/map/submit', {
                    method: 'POST',
                    headers:{'Content-Type': 'application/json'},
                    body: JSON.stringify(sendtoBackend)
                })
                   .then(async(response)=>{
                        let data=await response.json()
                        console.log("POST Response",data) 
                       
                   }
                    )
                    // .then(() => handleRedirect())
                    .catch((err)=> console.log(err))
                       
       }
   };


  useEffect(() => {
      if (position!==null){
        ReverseGeoCode()
      }

  }, [position]) 

  useEffect(() => {
    if (position===null){
       GeoCode()
    }

}, [address]) 




    return(
        <div>
            <Navbar />
            <Container className='report-page-container' text>
                
                <Grid textAlign="center">
                    <Grid.Row>
                        <Header id='report-page-header' as="h1">REPORT A SIGHTING</Header>
                    </Grid.Row>
                    
                </Grid>
                {/* MapReport will update the coord position if user clicked on the map */}
                <MapReport  position={position} setPosition={setPosition} onPositionChange={(coor)=>setPosition(coor)}/>
                
                <Form>
                    {/* <Form.Field
                        control={Input}
                        label='Location'
                        placeholder='Town, Region, Country'
                        maxLength="200"
                        onChange={(e)=> updateAddress(e.target.value)}
                        value = {address===null?"":address}
                        /> */}
                        <LocationSearch  value={value} setValue={setValue} updateAddress={updateAddress} setPosition={setPosition}/>
                    <Form.Group widths="equal">
                        <Form.Field
                            control={Input}
                            label = "Latitude"
                            placeholder="Click on map"
                            value = {position===null ?"": position.lat}
                        />
                        <Form.Field
                            control={Input}
                            label="Longitude"
                            placeholder="Click on map"
                            value = {position===null ?"": position.lng}
                        />
                        <Button variant="contained" onClick={getLocation}>My Location</Button>

                    </Form.Group>
                    <Form.Field id='date-label' label="Date"/>
                    <Form.Group>
                        {/* <Form.Field label="Date"
                            control={Input}
                            placeholder={startDate ? startDate.toDateString() : "     "}/>                         */}
                        
                        <Form.Field >
                            {/* temporary solution to make input box correspond to the calendar and vice versa */}
                            <DatePicker
                                showTimeSelect
                                placeholderText="MM/DD/YYYY"
                                open={false}
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}/>
                                
                        </Form.Field>
                        <Form.Field>
                            <DatePicker showTimeSelect 
                                        selected={startDate} 
                                        onChange={(date) => setStartDate(date)}
                                        customInput={<CalendarIcon ref={ref}/>}/>
                        </Form.Field>
                    </Form.Group>
                    <Form.Field label="Locust Types (Select all that apply)"/>
                    <Form.Group id='checkbox-label'>
                        <Form.Field label='Eggs' control='input' type='checkbox' name="Eggs" onChange={checkboxHandler}/>
                        <Form.Field label='Adults' control='input' type='checkbox' name="Adults" onChange={checkboxHandler}/>
                        <Form.Field label='Hoppers' control='input' type='checkbox' name="Hoppers" onChange={checkboxHandler}/>
                    </Form.Group>
                    
                    
                    {/* Limit the comment to about 65500 characters because
                        MySQL TEXT allows for 65,535 characters/bytes */}
                    <Form.Field
                        control={TextArea}
                        label='Comment'
                        placeholder='Add a comment...'
                        maxLength="65500"
                        onChange={(e)=> updateCommentBody(e.target.value)}
                        />
                        
                    <Form.Field id='picture-label' label="Picture"/>
                    {/* This is to take in pictures - can change it later  */}
                    <Form.Field>
                        <input
                            id='image-upload-label'
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            onChange={(e)=>{
                                console.log("image="+ e.target.files[0])
                                if (e.target.files[0]===null ||e.target.files[0]===undefined){
                                    // if user upload an image and decide to cancel the upload
                                    // do nothing
                                    console.log("Cancel image upload");
                                }
                                else if (e.target.files[0].size>=getMax(10)){
                                    alert("Image size exceeds 10MB!");
                                }
                                else{
                                    // file is good, now check if it is valid image file
                                    var idxDot = e.target.files[0].name.lastIndexOf(".") + 1;
                                    var extFile = e.target.files[0].name.substr(idxDot, e.target.files[0].name.length).toLowerCase();
                                    if (extFile=="jpg" || extFile=="jpeg" || extFile=="png"){
                                        setImage(e.target.files[0]);
                                        setImageName(e.target.files[0].name);
                                        uploader(e);
                                    }
                                    else{
                                        alert("Image is not in .JPG, .PNG, or JPEG!");
                                    }
                                }
                                
                            }}
                        />
                    </Form.Field>
                    <Form.Field>
                        {/* alt is img description - this is to show the pics on screen*/}
                        {result && <img id='image-preview' ref={imageRef} src={result} alt="" width="400" height="300"/>}
                    </Form.Field>                   
                    
                    {/* Button to the submit sight page */}
                    <Form.Field id='submit-button' control={Button} onClick={SubmitButton}>Submit Sighting</Form.Field>

                </Form>   

            </Container>
        </div>
    ) 
}

export default ReportPage
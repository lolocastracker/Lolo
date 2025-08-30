import './ReportPage.css';
import Navbar from '../components/navbar/Navbar.js';
import { useState, useEffect } from 'react';
import MapReport from '../components/map/Map_Report.js';
import { Header, Container, Input, Grid, Button, Form, TextArea, Icon } from 'semantic-ui-react';
import { unstable_batchedUpdates } from 'react-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef } from 'react';
import React from "react";
import LocationSearch from '../components/map/LocationSearch.js';
import { useHistory } from 'react-router-dom'; // 1. IMPORT useHistory

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
    return d + " " + time;
}

const ReportPage = () => {
    const history = useHistory(); // 2. INITIALIZE the history object

    //map
    const [position, setPosition] = useState({"lat":3.5149, "lng":38.2212});

    //searchbox 
    const [value, setValue] = useState("");

    // getting the date
    const ref = React.createRef();
    const [startDate, setStartDate] = useState("");
    const CalendarIcon = forwardRef(({ value, onClick }, ref) => (
        <Icon name="calendar outline" size="big" onClick={onClick} ref={ref}/>
    ));

    // setting images
    const [image, setImage] = useState("");
    const [imageName, setImageName] = useState("");
    const imageRef = React.useRef(null);

    function getLocation(){
        navigator.geolocation.getCurrentPosition((position) => {
            setPosition({"lat":position.coords.latitude, "lng":position.coords.longitude});
        });
    }  
  
    async function ReverseGeoCode(){
        let url="https://nominatim.openstreetmap.org/reverse";
        let place=await fetch(`${url}?lat=${position.lat}&lon=${position.lng}&format=json`,{
            method: 'GET',
            headers: {
                'User-Agent': 'lolo-app/1.0 (contact@example.com)'
            }
        });
        let resp=await place.json();
        try{
            if (resp && resp.display_name){
                unstable_batchedUpdates(() => {
                    updateAddress(resp.display_name);
                    setValue(resp.display_name);
                });
            }
        }
        catch (e) {
            console.error("Error in Reverse Geocode:", e);
        }
    }

    async function GeoCode(){
        let url="https://nominatim.openstreetmap.org/search";
        let place=await fetch(`${url}?q=${address}&format=json`,{
            method: 'GET',
            headers: {
                'User-Agent': 'lolo-app/1.0 (contact@example.com)'
            }
        });
        let resp=await place.json();
        try{
            if (resp.length > 0){
               setPosition({lat: parseFloat(resp[0].lat), lng: parseFloat(resp[0].lon)});
            }
        }
        catch (e) {
            console.error("Error in Geocode:", e);
        }
    }
    
    function useDisplayImage(){
        const [result, setResult] = useState("");
        function uploader(e){
            const imageFile=e.target.files[0];
            const reader=new FileReader();
            reader.addEventListener("load", (e)=>{
                if (imageFile.size > getMax(10)){
                    return;
                }
                setResult(e.target.result);
            });
            reader.readAsDataURL(imageFile);
        }
        return {result, uploader};
    }
    const {result, uploader} = useDisplayImage();

    // handling checkbox
    const [locustArr, updatelocustArr] = useState([]);
    const checkboxHandler = (e)=>{
        const checked = e.target.checked;
        if (checked === true){
            updatelocustArr(prevArr => [...prevArr, e.target.name]);
        } else {
           const value = e.target.name;
           updatelocustArr(locustArr.filter(type => type !== value));
        }
    };

    // handle location input box
    const [address, updateAddress] = useState("");
    // handle comment 
    const [commentBody, updateCommentBody] = useState("");
    
    function getMax(t){
        return t*1024*1024;
    }
   
    // submit button 
    const SubmitButton = (e)=>{
        e.preventDefault();
        if(position === null || startDate === ""){
            alert("Please fill in the coordinates and/or date for the report.");
        } else {
            const datetime = convertDate(startDate);
            const sendtoBackend={
                date: datetime,
                latlng: position,
                imgName: imageName,
                img: result, 
                locustType: locustArr,
                comment: commentBody,
                addr: address
            };
            
            fetch('/api/map/submit', {
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(sendtoBackend)
            })
            .then(async(response)=>{
                let data=await response.json();
                console.log("POST Response",data); 
                if (data.status === "success"){
                    // 3. USE history.push for client-side redirect in v5
                    history.push('/map');
                } else {
                    alert("Submission failed: " + data.message);
                }
            })
            .catch((err)=> console.log(err));
        }
    };

    useEffect(() => {
        if (position!==null){
            ReverseGeoCode();
        }
    }, [position]);

    useEffect(() => {
        if (address!==""){
            GeoCode();
        }
    }, [address]);

    return(
        <div>
            <Navbar />
            <Container className='report-page-container' text>
                <Grid textAlign="center">
                    <Grid.Row>
                        <Header id='report-page-header' as="h1">REPORT A SIGHTING</Header>
                    </Grid.Row>
                </Grid>
                
                <MapReport  position={position} setPosition={setPosition} onPositionChange={(coor)=>setPosition(coor)}/>
                
                <Form>
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
                        <Form.Field >
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
                    
                    <Form.Field
                        control={TextArea}
                        label='Comment'
                        placeholder='Add a comment...'
                        maxLength="65500"
                        onChange={(e)=> updateCommentBody(e.target.value)}
                    />
                        
                    <Form.Field id='picture-label' label="Picture"/>
                    <Form.Field>
                        <input
                            id='image-upload-label'
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            onChange={(e)=>{
                                if (e.target.files[0]===null ||e.target.files[0]===undefined){
                                    console.log("Cancel image upload");
                                }
                                else if (e.target.files[0].size>=getMax(10)){
                                    alert("Image size exceeds 10MB!");
                                }
                                else{
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
                        {result && <img id='image-preview' ref={imageRef} src={result} alt="Preview of uploaded sighting" width="400" height="300"/>}
                    </Form.Field>                   
                    
                    <Form.Field id='submit-button' control={Button} onClick={SubmitButton}>Submit Sighting</Form.Field>
                </Form>   
            </Container>
        </div>
    ); 
}

export default ReportPage;
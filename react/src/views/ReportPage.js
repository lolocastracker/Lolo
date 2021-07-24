import { useState } from 'react'
import MapReport from '../components/map/Map_Report.js'
import { Header, Container, Input, Grid, Segment } from 'semantic-ui-react'

// for the forms 
import {
    Button,
    Checkbox,
    Form,
    Radio,
    Select,
    TextArea,
    Icon
  } from 'semantic-ui-react'

// adding date
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef } from 'react'
import React from "react";



const ReportPage = () =>{
    //map
    const [position, setPosition] = useState(null)
    console.log("ReportPage: position="+position);
     

    
    // getting the date
    const ref = React.createRef();
    const [startDate, setStartDate] = useState("");  // these are the variables for the dates
    const CalendarIcon = forwardRef(({ value, onClick }, ref) => (
        <Icon name="calendar outline" size="big" onClick={onClick} ref={ref}/>
    )); // when you click the icon, it should display the date
    console.log("ReportPage date=" + startDate);
   // setting images
   const [image, setImage]=useState(""); // the image here is the actual image. Calling image.name will give its name
   const imageRef = React.useRef(null);
   function useDisplayImage(){
       const [result, setResult]=useState("");
       function uploader(e){
           const imageFile=e.target.files[0];
           const reader=new FileReader();
           reader.addEventListener("load", (e)=>{
               setResult(e.target.result);
           });
           reader.readAsDataURL(imageFile);
       }
    //    console.log("Image name=" + image.name);
       return {result, uploader};
   }
    const {result, uploader}=useDisplayImage();
   // create list for the locust types
   
//    const [locustTypesList, setlocustTypeList] = useState([]); // initially emptyList

//    function addLocustType(){
//        setlocustTypeList([locustTypesList, ])
//    }


   // submit button 
   // must have a date and coordinates
   const submitButton = ()=>{
       if(position===null || startDate===""){
           alert("Please fill in the coordinates and/or date for the report.");
       } else{
           // check if users added locust types, comment, pictures
           console.log("Submit Button Success!");
       }
       
   };

    return(
        <div>
            <Container style={{marginTop:'7em'}}>
                
                <Grid textAlign="center">
                    <Grid.Row>
                        <Header as="h1">Report Page</Header>
                    </Grid.Row>
                    
                </Grid>
                {/* MapReport will update the coord position if user clicked on the map */}
                <MapReport onPositionChange={(coor)=>setPosition(coor)}/>
                
                <Form>
                    <Form.Group widths="equal">
                        <Form.Field
                            control={Input}
                            label = "Latitude"
                            placeholder="Input Latitude"
                            value = {position===null?"": position.lat}
                        />
                        <Form.Field
                            control={Input}
                            label="Longtitude"
                            placeholder="Input Longtitude"
                            value = {position===null?"": position.lng}
                        />
                    </Form.Group>
                    <Form.Field label="Date"/>
                    <Form.Group>
                        {/* <Form.Field label="Date"
                            control={Input}
                            placeholder={startDate ? startDate.toDateString() : "     "}/>                         */}
                        
                        <Form.Field >
                            {/* temporary solution to make input box correspond to the calendar and vice versa */}
                            <DatePicker
                                showTimeSelect
                                placeholderText="MM/DD/YY"
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
                    <Form.Group>
                        <Form.Field label='Eggs' control='input' type='checkbox' />
                        <Form.Field label='Adult' control='input' type='checkbox' />
                        <Form.Field label='Hopper' control='input' type='checkbox' />
                    </Form.Group>
                    
                    <Form.Field
                        control={TextArea}
                        label='Comment'
                        placeholder='Add a comment...'
                        />
                        
                    <Form.Field label="Picture"/>
                    {/* This is to take in pictures - can change it later  */}
                    <Form.Field>
                        <input
                            type="file"
                            onChange={(e)=>{
                                setImage(e.target.files[0]);
                                uploader(e);
                            }}
                        />
                    </Form.Field>
                    <Form.Field>
                        {/* alt is img description - this is to show the pics on screen*/}
                        {result && <img ref={imageRef} src={result} alt="" width="300" height="300"/>}
                    </Form.Field>                   
                    
                    {/* Button to the submit sight page */}
                    <Form.Field control={Button} onClick={submitButton}>Submit Sighting</Form.Field>

                </Form>   

            </Container>
        </div>
    ) 
}

export default ReportPage

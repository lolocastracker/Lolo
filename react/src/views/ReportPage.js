import { useState } from 'react'
import Map from '../components/map/Map.js'
import Report from '../components/map/Report.js'
import ReportTable from '../components/map/ReportTable.js'
import { Header, Container, Input, Grid, Segment } from 'semantic-ui-react'
import reports from '../components/map/fakeData.js'

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

// const CalendarIcon = (onClick) => <div className="calendarIcon"><Icon name="calendar outline" onClick={onClick}/></div>; 


const ReportPage = () =>{
    const [curReport, setCurReport] = useState(reports[0])
     // Update the state's current report
    const updateCurReport = (report) => {
        setCurReport(report)
    }
    // getting the date
    const ref = React.createRef();
    const [startDate, setStartDate] = useState("");  // these are the variables for the dates
    const CalendarIcon = forwardRef(({ value, onClick }, ref) => (
        <Icon name="calendar outline" size="big" onClick={onClick} ref={ref}/>
    )); // when you click the icon, it should display the date
    
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
    return(
        <div>
            <Container style={{marginTop:'7em'}}>
                <Grid textAlign="center">
                    <Grid.Row>
                        <Header as="h1">Report Page</Header>
                    </Grid.Row>
                    <Grid.Row>
                        <Map
                        reports={reports}
                        curReport={curReport}
                        onMarkerClick={updateCurReport}
                        />
                    </Grid.Row>
                    
                </Grid>
                <Grid>
                    <Grid.Row>
                        <Header as="h2">Location</Header>
                    </Grid.Row>
                </Grid>
                <Form>
                    <Form.Group widths="equal">
                        <Form.Field
                            control={Input}
                            label = "Latitude"
                            placeholder="Input Latitude"
                        />
                        <Form.Field
                            control={Input}
                            label="Longtitude"
                            placeholder="Input Longtitude"
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
                    <Form.Field control={Button}>Submit Sighting</Form.Field>

                </Form>   

            </Container>
        </div>
    ) 
}

export default ReportPage

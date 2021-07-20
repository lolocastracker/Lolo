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
    
    // const updateDateInputBox = () =>{

    // }
    
    
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
                            <DatePicker
                                showTimeSelect
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                />
                        </Form.Field>
                        <Form.Field>
                            <DatePicker showTimeSelect 
                                        selected={startDate} 
                                        onChange={(date) => setStartDate(date)}
                                        customInput={<CalendarIcon ref={ref}/>}/>
                        </Form.Field>
                    </Form.Group>
                   
                    
                    
                    <Form.Field
                        control={TextArea}
                        label='Comment'
                        placeholder='Add a comment...'
                        />
                    <Form.Field control={Button}>Submit Sighting</Form.Field>

                </Form>

                {/* <Grid>
                    <Grid.Row>
                        <Header as="h2">Location</Header>
                    </Grid.Row>
                </Grid>
                <Grid stackable columns={2}>
                    <Grid.Column>
                        <Header as="h2">Latitude</Header>
                    </Grid.Column>
                    <Grid.Column textAlign='Center'>
                        <Header as="h2">Longtitude</Header>
                    </Grid.Column>
                </Grid>
                <Grid>
                    <Grid.Row>
                        <Header as="h2">Date Seen</Header>
                    </Grid.Row>
                </Grid>
                <Grid>
                    <Grid.Row>
                        <Header as="h2">Comment</Header>
                    </Grid.Row>
                </Grid>
                <Grid>
                    <Grid.Row>
                        <Header as="h2">Media</Header>
                    </Grid.Row>
                </Grid> */}
                
                
            </Container>
        </div>
    ) 
}

export default ReportPage

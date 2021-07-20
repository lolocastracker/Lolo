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
  } from 'semantic-ui-react'

const ReportPage = () =>{
    const [curReport, setCurReport] = useState(reports[0])
     // Update the state's current report
    const updateCurReport = (report) => {
        setCurReport(report)
    }
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
                            placeHolder="Input Latitude"
                        />
                        <Form.Field
                            control={Input}
                            label="Longtitude"
                            placeHolder="Input Longtitude"
                        />
                    </Form.Group>
                    <Form.Field 
                        label='Date' 
                        control={Input} 
                        start='1' end='7' />
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

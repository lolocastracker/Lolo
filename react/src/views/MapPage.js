import { useState } from 'react'
import Map from '../components/map/Map.js'
import Report from '../components/map/Report.js'
import ReportTable from '../components/map/ReportTable.js'
import { Header, Container, Input, Grid, Segment } from 'semantic-ui-react'
import reports from '../components/map/fakeData.js'
import { Button } from 'semantic-ui-react'

const MapPage = () => {
  // Testing, later get these from back-end
  // Do we need to use state?
  // const [reports, setReports] = useState([
  //   { id: 1, gps: [9.05, 39.75] },
  //   { id: 2, gps: [9.02, 39.72] },
  // ])

  // Initialize state: curReport is a report object, setCurReport is a function
  // This should be updated later to use the most recent report
  const [curReport, setCurReport] = useState(reports[0])

  // Update the state's current report
  const updateCurReport = (report) => {
    setCurReport(report)
  }

  // redirect
  const redirect = (url) =>{
    console.log("redirecting to: " + url);
    window.location.href=url;
  }
  return (
    <div>
      <Container style={{ marginTop: '7em' }}>
        <Grid textAlign='center'>
          <Grid.Row>
            <Header as='h1'>DESERT LOCUST MAP</Header>
          </Grid.Row>
          <Grid.Row>
            <Input
              label={{ icon: 'search', color: 'blue' }}
              placeholder='Enter a location...'
            />
          </Grid.Row>
        </Grid>
        <Grid stackable columns={2}>
          <Grid.Column textAlign='center'>
            <Segment>
              <Header as='h2'>Recent Sightings</Header>
              <ReportTable
                reports={reports}
                curReport={curReport}
                onRowClick={updateCurReport}
              />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Map
              reports={reports}
              curReport={curReport}
              onMarkerClick={updateCurReport}
            />
            <Report curReport={curReport} />
          </Grid.Column>
        </Grid>
        <button class="ui button"
              onClick={()=> redirect('/report')}>Report Sighting</button>
      </Container>
      
    </div>
  )
}

export default MapPage

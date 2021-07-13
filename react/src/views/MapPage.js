import { useState } from 'react'
import Map from '../components/map/Map.js'
import { Header, Container, Input, Grid, Segment } from 'semantic-ui-react'

const MapPage = () => {
  // Testing, later get these from back-end
  const reports = [
    { id: 1, gps: [9.05, 39.75] },
    { id: 2, gps: [9.02, 39.72] },
  ]
  // Do we need to use state?
  // const [reports, setReports] = useState([
  //   { id: 1, gps: [9.05, 39.75] },
  //   { id: 2, gps: [9.02, 39.72] },
  // ])

  const [curReportID, setCurReportID] = useState(1)
  // console.log(reports.filter(element => element.id === curReportID))

  const updateCurReportID = (id) => {
    setCurReportID(id)
  }

  return (
    <div>
      <Container text style={{ marginTop: '7em' }}>
        <Grid columns={1}>
          <Grid.Column textAlign='center'>
            <Header as='h1'>DESERT LOCUST MAP</Header>
          </Grid.Column>
          <Grid.Column textAlign='center'>
            <Input
              label={{ icon: 'search', color: 'orange' }}
              placeholder='Enter a location...'
            />
          </Grid.Column>
          <Grid.Column>
            <Map reports={reports} onMarkerClick={updateCurReportID} />
          </Grid.Column>
          <Grid.Column>
            <Segment>
              {/* Lat: {reports[0].gps[0]} Lng: {reports[0].gps[1]} */}
              {/* Lat: {reports[curReportID].gps[0]} Lng:{' '} */}
              {/* {reports[curReportID].gps[1]} */}
              {/* filtered: {reports.filter(element => element.id === curReportID).gps[0]} */}
              {/* filtered:{' '} */}
              {
                reports.filter((element) => element.id === curReportID)[0]
                  .gps[0]
              }
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  )
}

export default MapPage

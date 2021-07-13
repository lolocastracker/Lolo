import { useState } from 'react'
import Map from '../components/map/Map.js'
import { Header, Container, Input, Grid, Segment } from 'semantic-ui-react'

const MapPage = () => {
  // Testing, later get these from back-end
  // const reports = [
  //   { id: 1, gps: [9.05, 39.75] },
  //   { id: 2, gps: [9.02, 39.72] },
  // ]
  // Do we need to use state?
  // const [reports, setReports] = useState([
  //   { id: 1, gps: [9.05, 39.75] },
  //   { id: 2, gps: [9.02, 39.72] },
  // ])
  const reports = [
    {
      id: 1,
      comment: 'Many locusts here',
      date: '1/1/2021',
      time: '14:35',
      location: 'Kenya',
      lat: 9.05,
      long: 39.75,
      type: 'Adult (brown)',
    },
    {
      id: 2,
      comment: 'Locusts hatching',
      date: '3/5/2021',
      time: '8:02',
      location: 'Kenya',
      lat: 9.01,
      long: 39.71,
      type: 'Hoppers',
    },
  ]

  // Initialize state: curReport is a report object, setCurReport is a function
  // This should be updated later to use the most recent report
  const [curReport, setCurReport] = useState(reports[0])

  // Update the state's current report
  const updateCurReport = (report) => {
    setCurReport(report)
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
              label={{ icon: 'search', color: 'blue' }}
              placeholder='Enter a location...'
            />
          </Grid.Column>
          <Grid.Column>
            <Map reports={reports} onMarkerClick={updateCurReport} />
          </Grid.Column>
          <Grid.Column>
            <Segment>
              {/* Make a component to display this data */}
              Date: {curReport.date} Time: {curReport.time} Location:{' '}
              {curReport.location} Lat/Lng: {curReport.lat}/{curReport.long}{' '}
              Type: {curReport.type} Comment: {curReport.comment}{' '}
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  )
}

export default MapPage

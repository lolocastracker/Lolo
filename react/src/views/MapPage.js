import { useState } from 'react'
import Map from '../components/map/Map.js'
import Report from '../components/map/Report.js'
import ReportTable from '../components/map/ReportTable.js'
import { Header, Container, Input, Grid, Segment } from 'semantic-ui-react'
import reports from '../components/map/fakeData.js'

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
  // const reports = [
  //   {
  //     id: 1,
  //     comment:
  //       'Many locusts here. Many locusts here. Many locusts here. Many locusts here.',
  //     date: '1/1/2021',
  //     time: '14:35',
  //     location: 'Kenya (extremely long name right here)',
  //     lat: 9.0501,
  //     long: 39.7501,
  //     type: 'Adult (brown)',
  //     path: 'https://i.ibb.co/smRzRC3/locust-wiki.jpg',
  //   },
  //   {
  //     id: 2,
  //     comment: 'Locusts hatching',
  //     date: '3/5/2021',
  //     time: '8:02',
  //     location: 'Kenya',
  //     lat: 9.0102,
  //     long: 39.7102,
  //     type: 'Hoppers',
  //     path: 'https://i.ibb.co/JvfHJQw/Locusts-feeding-wiki.jpg',
  //   },
  // ]

  // Initialize state: curReport is a report object, setCurReport is a function
  // This should be updated later to use the most recent report
  const [curReport, setCurReport] = useState(reports[0])

  // Update the state's current report
  const updateCurReport = (report) => {
    setCurReport(report)
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
              <ReportTable reports={reports} />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Map reports={reports} onMarkerClick={updateCurReport} />
            <Report curReport={curReport}></Report>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  )
}

export default MapPage

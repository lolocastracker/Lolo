import { useState, useEffect } from 'react'
import Map from '../components/map/Map.js'
import Report from '../components/map/Report.js'
import ReportTable from '../components/map/ReportTable.js'
import { Header, Container, Input, Grid, Segment } from 'semantic-ui-react'
// import reports from '../components/map/fakeData.js'

const MapPage = () => {
  // USE THIS IF USING fakeData.js
  // // initial current report is the most recent
  // // set this after getting the reports
  // const [curReport, setCurReport] = useState(reports[0])

  // initialize state for current report
  const [curReport, setCurReport] = useState(0)

  // Update the state's current report
  const updateCurReport = (report) => {
    setCurReport(report)
  }

  // state for AJAX request
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [reports, setReports] = useState([])

  useEffect(() => {
    // fetch("https://lolo.gq/api/map/reports")
    fetch('/api/map/reports')
      .then((res) => res.json())
      .then(
        (result) => {
          // console.log('in fetch.then.then before isloaded')
          // console.log('in fetch.then.then after isLoaded', reports)
          setReports(result)
          // console.log('in fetch.then.then after setReports', reports)
          updateCurReport(result[0])
          // console.log('in fetch.then.then after updateCurReport', reports)
          setIsLoaded(true) // Must be after setReports and updateCurReport
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log('error')
          setIsLoaded(true)
          setError(error)
        }
      )
  }, []) // [] means run once on mount

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    console.log('else if', reports)
    return <div>Loading...</div>
  } else {
    // console.log('else', reports, curReport)
    return (
      // <div></div>
      // <div>{curReport.address}</div>
      // <div>{reports[0].address}</div>
    // )

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
        </Container>
      </div>
    )
  }
}

export default MapPage
import './MapPage.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Map from '../components/map/Map.js'
import Report from '../components/map/Report.js'
import ReportTable from '../components/map/ReportTable.js'
import Navbar from '../components/navbar/Navbar.js'
import { Loader, Header, Container, Grid, Segment, Button } from 'semantic-ui-react'
// import reports from '../components/map/fakeData.js'
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../assets/reportpics', false, /\.(PNG|JPE?G|SVG)$/));

const MapPage = () => {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }  
  // USE THIS IF USING fakeData.js
  // // initial current report is the most recent
  // // set this after getting the reports
  // const [curReport, setCurReport] = useState(reports[0])

  // Initialize state for current report
  const [curReport, setCurReport] = useState(0)

  // Update the state's current report
  const updateCurReport = (report) => {
    setCurReport(report)
  }

  // State for AJAX request
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [reports, setReports] = useState([])


  useEffect(() => {
    // fetch("https://lolo.gq/api/map/reports")
    fetch('/api/map/reports')
      .then((res) => res.json())
      .then(
        (result) => {
          setReports(result)
          updateCurReport(result[0])
          setIsLoaded(true) // Must be after setReports and updateCurReport
        },
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
    // return <div>Loading...</div>
    return <Loader inline size='large' active />
  } else {
    return (
      <div>
        <Navbar />
        <Container id='map-page-container'>
          <Grid textAlign='center'>
            <Grid.Row>
              <Header id='map-page-header' as='h1'>DESERT LOCUST MAP</Header>
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
              <Report curReport={curReport} images={images} />
            </Grid.Column>
          </Grid>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Link to='/report'>
                  <Button>
                    <Header as='h2' style={{ marginTop: 0 }}>
                      Report Sighting <i className='angle right icon'></i>
                    </Header>
                  </Button>
                </Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default MapPage

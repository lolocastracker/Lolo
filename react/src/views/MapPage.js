import './MapPage.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Map from '../components/map/Map.js';
import Report from '../components/map/Report.js';
import ReportTable from '../components/map/ReportTable.js';
import Navbar from '../components/navbar/Navbar.js';
import { Loader, Header, Container, Grid, Segment, Button } from 'semantic-ui-react';



const MapPage = () => {
  const [curReport, setCurReport] = useState(null);
  const updateCurReport = (report) => {
    setCurReport(report);
  };

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch('/api/map/reports')
      .then((res) => res.json())
      .then(
        (result) => {
          if (typeof result === 'object' && !Array.isArray(result)) {
            setReports([]);
          } else {
            setReports(result);
            if (result.length > 0) {
              updateCurReport(result[0]);
            }
          }
          setIsLoaded(true);
        },
        (error) => {
          console.log('error');
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loader inline size='large' active />;
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
              <Report curReport={curReport} />
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
    );
  }
};

export default MapPage;

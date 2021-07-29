import Navbar from '../components/navbar/Navbar'
import { Container, Image, Header, Grid, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
// import './HomePage.css'
import Thanksbox from '../components/reportsubmit/Thanksbox'
const ReportSubmit = () => {
  return (
    <div>
      <Navbar />
      <Container className='report-page-container' textAlign='center'>
        <Header as='h1'>REPORT A SIGHTING</Header>
        <Thanksbox></Thanksbox>
        <Grid stackable centered columns={2}>
          <Grid.Column width={6}>
            <Link to='/report'>
              <Button>
                <Header as='h2'>
                  Report Another Sighting <i className='angle right icon'></i>
                </Header>
              </Button>
            </Link>
          </Grid.Column>
          <Grid.Column width={6}>
            <Link to='/map'>
              <Button>
                <Header as='h2'>
                  View Reported Sightings <i className='angle right icon'></i>
                </Header>
              </Button>
            </Link>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  )
}

export default ReportSubmit

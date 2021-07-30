import { Container, Image, Header, Grid, Button } from 'semantic-ui-react'
import Navbar from '../components/navbar/Navbar.js'
import './HomePage.css'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const banner_img = require('../assets/banner.png').default
  const view_img = require('../assets/view_homepage.png').default
  const report_img = require('../assets/report_homepage.png').default
  const forum_img = require('../assets/forum_homepage.png').default
  const whatlolo_img = require('../assets/what_is_lo-lo.png').default

  const forumRedirect = () => {
    window.open('https://forum.lolo.gq', '_blank')
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className='banner' style={{ backgroundImage: `url(${banner_img})` }}>
        <Header as='h1' className='mission' inverted>
          LOCATING LOCUSTS
          <br />
          IN EAST AFRICA
        </Header>
      </div>
      <Grid container textAlign='center' stackable columns={3}>
        <div className='orange-box'>
          <Grid.Column>
            <Header as='h1'>VIEW</Header>
            <Image src={view_img} centered />
            <Link to='/map'>
              <Button>
                <Header as='h2'>
                  View Locusts <i className='angle right icon'></i>
                </Header>
              </Button>
            </Link>
          </Grid.Column>
        </div>
        <div className='orange-box'>
          <Grid.Column>
            <Header as='h1'>REPORT</Header>
            <Image src={report_img} centered />
            <Link to='/report'>
              <Button>
                <Header as='h2'>
                  Report Locusts <i className='angle right icon'></i>
                </Header>
              </Button>
            </Link>
          </Grid.Column>
        </div>
        <div className='orange-box'>
          <Grid.Column>
            <Header as='h1'>FORUM</Header>
            <Image src={forum_img} centered />
              <Button onClick={() => forumRedirect()}>
                <Header as='h2'>
                  Learn More <i className='angle right icon'></i>
                </Header>
              </Button>
          </Grid.Column>
        </div>
      </Grid>
      <Container id='about-us-container' textAlign='center'>
        <Header id='what-lolo' as='h1'>
          WHAT IS
          <Image id='what-lolo-img' src={whatlolo_img} />?
        </Header>
        <Header id='about-us-text' as='h2'>
          We are a diverse multi-diciplinary team stemming from a variety of
          geographic and academic backgrounds who have united for the
          InternHacks seven-week long competition. Lo-Lo is a one-stop-shop
          platform for rural East-African farmers to view, report, and discuss
          locust swarms in their area to tackle the threat of invasive species.
        </Header>
      </Container>
    </div>
  )
}

export default HomePage

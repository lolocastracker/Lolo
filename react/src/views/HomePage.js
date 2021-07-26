import AuthButton from '../components/auth/AuthButton.js'
import { Image, Header, Grid, Button } from 'semantic-ui-react'
import './HomePage.css'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const banner_img = require('../assets/banner.png').default
  const view_img = require('../assets/view_homepage.png').default
  const report_img = require('../assets/report_homepage.png').default
  const forum_img = require('../assets/forum_homepage.png').default

  return (
    <div>
      <AuthButton></AuthButton>
      <div className='banner' style={{ backgroundImage: `url(${banner_img})` }}>
        <Header as='h1' className='mission' inverted>
          LOCATING LOCUSTS
          <br />
          IN EAST AFRICA
        </Header>
      </div>
      {/* <div className='banner'>
        <Image src={banner_img} fluid />
        <Header as='h1' className='mission' inverted>
          LOCATING LOCUSTS
          <br />
          IN EAST AFRICA
        </Header>
      </div> */}
      <Grid container textAlign='center' stackable columns={3}>
        <div className='orange-box'>
          <Grid.Column>
            <Header as='h1'>VIEW</Header>
            <Image src={view_img} centered />
            <Link to='/map'>
              <Button basic>
                <Header as='h3'>
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
              <Button basic>
                <Header as='h3'>
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
            <Link to='/forum'>
              <Button basic>
                <Header as='h3'>
                  Learn More <i className='angle right icon'></i>
                </Header>
              </Button>
            </Link>
          </Grid.Column>
        </div>
      </Grid>
    </div>
  )
}

export default HomePage

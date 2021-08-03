import './Navbar.css'
import { Dropdown, Image, Header, Grid } from 'semantic-ui-react'
import AuthButton from '../../components/auth/AuthButton.js'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const home_img = require('../../assets/home_navbar.png').default
  const view_img = require('../../assets/view_navbar.png').default
  const report_img = require('../../assets/report_navbar.png').default
  const forum_img = require('../../assets/forum_navbar.png').default


   const handleLinkClick= (destination) => {
        window.location.href = destination;
    }

  return (
    <div id='nb-div'>
      <Grid verticalAlign='middle' textAlign='center'>
        <Grid.Row columns={5}>
          <Grid.Column id='nb-home'>
            <Link to='/'>
              <Header>
                <Image src={home_img} />
                Home
              </Header>
            </Link>
          </Grid.Column>
          <Grid.Column id='nb-view'>
            <Link to='/map'>
              <Header>
                <Image src={view_img} />
                View
              </Header>
            </Link>
          </Grid.Column>
          <Grid.Column id='nb-report'>
            <Link to='/report'>
              <Header>
                <Image src={report_img} />
                Report
              </Header>
            </Link>
          </Grid.Column>
          <Grid.Column>
          <a href='https://forum.lolo.gq' target='_blank'>
              <Header>
                <Image src={forum_img} />
                Forum
              </Header>
            </a>
          </Grid.Column>
          <Grid.Column textAlign='right'>
            <AuthButton />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {/* Dropdown only displayed on small screens */}
      <Dropdown id='nb-small' icon='sidebar'>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleLinkClick('/')}>
            <h2>Home</h2>
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleLinkClick('/map')}>
            <h2>View</h2>
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleLinkClick('/report')}>
            <h2>Report</h2>
          </Dropdown.Item>
          <Dropdown.Item>
          <a href='https://forum.lolo.gq' target='_blank'>
              <h2>Forum</h2>
            </a>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default Navbar

import './Navbar.css'
import { Container, Image, Header, Grid, Icon } from 'semantic-ui-react'
import AuthButton from '../../components/auth/AuthButton.js'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const home_img = require('../../assets/home_navbar.png').default
  const view_img = require('../../assets/view_navbar.png').default
  const report_img = require('../../assets/report_navbar.png').default
  const forum_img = require('../../assets/forum_navbar.png').default

  return (
    <div id='nb-div'>
      <Grid verticalAlign='middle' textAlign='center'>
        <Grid.Row columns={5}>
          <Grid.Column>
            <Link to='/'>
              <Header id='nb-home'>
                <Image src={home_img} />
                Home
              </Header>
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link to='/map'>
              <Header id='nb-view'>
                <Image src={view_img} />
                View
              </Header>
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link to='/report'>
              <Header id='nb-report'>
                <Image src={report_img} />
                Report
              </Header>
            </Link>
          </Grid.Column>
          <Grid.Column>
            <a href='https://forum.lolo.gq'>
              <Header id='nb-forum'>
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
      <Container>
        <Icon id='nb-small' name='sidebar' />
      </Container>
    </div>
  )
}

export default Navbar

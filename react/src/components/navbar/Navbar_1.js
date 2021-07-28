import './Navbar.css'
import { Container, Image, Header, Grid, Button } from 'semantic-ui-react'
import AuthButton from '../../components/auth/AuthButton.js'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const home_img = require('../../assets/home_navbar.png').default
  const view_img = require('../../assets/view_navbar.png').default
  const report_img = require('../../assets/report_navbar.png').default
  const forum_img = require('../../assets/forum_navbar.png').default

  return (
    <div id='nb-div'>
      <Header id='nb-home'>
        <Image src={home_img} />
        Home
      </Header>
      <Header id='nb-view'>
        <Image src={view_img} />
        View
      </Header>
      <Header id='nb-report'>
        <Image src={report_img} />
        Report
      </Header>
      <Header id='nb-forum'>
        <Image src={forum_img} />
        Forum
      </Header>
      {/* <AuthButton></AuthButton> */}
    </div>
  )
}

export default Navbar

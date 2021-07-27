import { Header, Grid, Segment } from 'semantic-ui-react'
import './Report.css'

const Report = ({ curReport }) => {
  const year = curReport.date.slice(0, 4)

  let photo // image file
  let reportImage // element to display
  // handle image present vs unavailable
  if (curReport.path) {
    photo = require(`../../assets/reportpics/${curReport.path}`).default
    reportImage = (
      <img id='report-image' src={photo} height='171.99' width='245'></img>
    )
  } else {
    photo = null
    reportImage = (
      <Header as='h2'>
        No photo
        <br />
        provided
      </Header>
    )
  }

  return (
    <Segment id='report-segment'>
      <Grid stackable columns={2}>
        <Grid.Column>
          <Header as='h2'>Location: {curReport.address}</Header>
          <div id='report-details'>
            <b>Lat.:</b> {curReport.lat.slice(0, 9)} &nbsp; <b>Long.:</b>{' '}
            {curReport.long.slice(0, 9)}
            <br></br>
            <b>Date:</b> {curReport.date.slice(5, 10).concat('-', year)} &nbsp;{' '}
            <b>Time:</b> {curReport.date.slice(11, 16)}
            <br></br>
            <div id='comment'>{curReport.body}</div>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div id={photo ? 'report-image-box-photo' : 'report-image-box'}>
            {reportImage}
          </div>
          <p id='locust-type'>
            <b>Locust Type: </b> {curReport.type}
          </p>
        </Grid.Column>
      </Grid>
    </Segment>
  )
}

export default Report

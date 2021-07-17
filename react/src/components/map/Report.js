import { Header, Grid, Segment } from 'semantic-ui-react'

const Report = ({ curReport }) => {
  return (
    <Segment>
      <Grid stackable columns={2}>
        <Grid.Column>
          <Header as='h2'>Location: {curReport.location}</Header>
          <p>
            <b>Latitude:</b> {curReport.lat} &nbsp; <b>Longitude:</b>{' '}
            {curReport.long}
            <br></br>
            <b>Date:</b> {curReport.date} &nbsp; <b>Time:</b> {curReport.time}
            <br></br>
            {curReport.comment}
          </p>
        </Grid.Column>
        <Grid.Column>
          <img
            src={curReport.path}
            height='150'
            width='200'
            style={{ maxWidth: 350, height: 'auto', width: '100%' }}
          ></img>
        </Grid.Column>
      </Grid>
    </Segment>
  )
}

export default Report

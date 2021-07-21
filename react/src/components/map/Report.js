import { Header, Grid, Segment } from 'semantic-ui-react'

const Report = ({ curReport }) => {
  const year = curReport.date.slice(0,4)
  return (
    <Segment>
      <Grid stackable columns={2}>
        <Grid.Column>
          <Header as='h2'>Location: {curReport.address}</Header>
          <p style={{ wordBreak: 'break-word' }}>
            <b>Lat.:</b> {curReport.lat.slice(0, 9)} &nbsp;{' '}
            <b>Long.:</b> {curReport.long.slice(0, 9)}
            <br></br>
            <b>Date:</b> {curReport.date.slice(5, 10).concat('-', year)} &nbsp; <b>Time:</b>{' '}
            {curReport.date.slice(11, 16)}
            <br></br>
            {curReport.body}
          </p>
        </Grid.Column>
        <Grid.Column>
          {true && (
            <img
              src={curReport.path}
              height='150'
              width='200'
              style={{ maxWidth: 350, height: 'auto', width: '100%' }}
            ></img>
          )}
          <p>
            <b>Locust Type: </b> {curReport.type}
          </p>
        </Grid.Column>
      </Grid>
    </Segment>
  )
}

export default Report

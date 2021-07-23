import { Header, Grid, Segment } from 'semantic-ui-react'

const Report = ({ curReport }) => {
  const year = curReport.date.slice(0, 4)

  const photo = curReport.path
    ? require(`../../assets/reportpics/${curReport.path}`).default
    : null

  return (
    <Segment style={{ marginTop: '2rem' }}>
      <Grid stackable columns={2}>
        <Grid.Column>
          <Header as='h2'>Location: {curReport.address}</Header>
          <div style={{ wordBreak: 'break-word' }}>
            <b>Lat.:</b> {curReport.lat.slice(0, 9)} &nbsp; <b>Long.:</b>{' '}
            {curReport.long.slice(0, 9)}
            <br></br>
            <b>Date:</b> {curReport.date.slice(5, 10).concat('-', year)} &nbsp;{' '}
            <b>Time:</b> {curReport.date.slice(11, 16)}
            <br></br>
            <div
              style={{
                width: '100%',
                height: '5rem',
                marginBottom: '.7rem',
                overflow: 'auto',
              }}
            >
              {curReport.body}
            </div>
          </div>
        </Grid.Column>
        <Grid.Column>
          {true && (
            <img
              // src='/assets/check.png'
              src={photo}
              height='165'
              width='245'
              // style={{ maxWidth: 350, height: 'auto', width: '100%' }}
              style={{
                // maxWidth: 245,
                maxWidth: '100%',
                maxHeight: 165,
                // maxHeight: '100%',
                height: 'auto',
                // width: '100%',
                width: 'auto',
              }}
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

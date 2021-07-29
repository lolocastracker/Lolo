import './Thanksbox.css'
import React from 'react'
import { Grid, Segment, Image } from 'semantic-ui-react'
// import Checkbox from './Checkbox'
// import people from '../../assets/report_submitted.png' // Tell webpack this JS file uses this image
import thank_you_group from '../../assets/thank_you_group.png' // Tell webpack this JS file uses this image

export default function Thanksbox() {
  return (
    <Grid centered>
      {/* <Grid.Row only='tablet computer' style={{ marginTop: '400px' }}> */}
      <Grid.Row>
        <Grid.Column>
          <Image id='thank-you-img' src={thank_you_group}/>
        </Grid.Column>
      </Grid.Row>

      {/* <Grid.Row
        columns={2}
        centered
        only='mobile'
        style={{ marginTop: '200px' }}
      >
        <Grid.Column>
          <Image src={people} />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={2} centered only='mobile'>
        <Grid.Column>
          <Checkbox></Checkbox>
        </Grid.Column>
      </Grid.Row> */}
    </Grid>
  )
}

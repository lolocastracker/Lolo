import React from "react";
import people from '../../assets/report_submitted.png'; // Tell webpack this JS file uses this image
import { Grid,Segment,Image } from 'semantic-ui-react'



export  const Checkbox = () => (
    <Grid padded>
    <Grid.Row centered columns={3}  only='tablet' style={{marginTop:"400px"}}>
      <Grid.Column style={{marginRight:"-1rem",paddingLeft:"0rem",paddingRight:"0rem"}}>
      <Image src={people}/>
      </Grid.Column>
      <Grid.Column style={{marginLeft:"-1rem",paddingLeft:"0rem",paddingRight:"0rem"}}>
      <Image src={people}/>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row centered columns={3}  only='computer' style={{marginTop:"400px"}}>
      <Grid.Column style={{marginRight:"-1rem",paddingLeft:"0rem",paddingRight:"0rem"}}>
      <Image src={people}/>
      </Grid.Column>
      <Grid.Column style={{marginLeft:"-1rem",paddingLeft:"0rem",paddingRight:"0rem"}}>
      <Image src={people}/>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row centered columns={2} only='mobile' style={{marginTop:"200px"}}>
      <Grid.Column>
        <Image src={people}/>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={2} centered only='mobile'>
      <Grid.Column>
      <Image src={people}/>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  
)


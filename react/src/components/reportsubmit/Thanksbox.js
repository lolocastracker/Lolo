import React from "react";
import { Grid,Segment,Image } from 'semantic-ui-react'
import Checkbox from "./Checkbox";
import people from '../../assets/report_submitted.png'; // Tell webpack this JS file uses this image


export default function Thanksbox(){


  return(
    <Grid centered columns="2">
    <Grid.Row  only='tablet computer' style={{marginTop:"400px"}}>
      <Grid.Column width={4}>
     <Checkbox></Checkbox>
     <Checkbox></Checkbox>
      </Grid.Column>
    </Grid.Row>


    <Grid.Row columns={2} centered only='mobile' style={{marginTop:"200px"}}>
      <Grid.Column>
      <Image src={people}/>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={2} centered only='mobile'>
      <Grid.Column>
      <Checkbox></Checkbox>
      </Grid.Column>
    </Grid.Row>
  </Grid>

  )
}

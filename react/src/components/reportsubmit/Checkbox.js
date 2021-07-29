import React from "react";
import thankYouFull from '../../assets/thankYouFull.png'; // Tell webpack this JS file uses this image
import { Grid,Segment,Image } from 'semantic-ui-react'



export  const Checkbox = () => (
    <Grid padded>
    <Grid.Row centered columns={2}  only='tablet computer' style={{marginTop:"400px"}}>
      <Grid.Column>
      <Image src={thankYouFull}/>
      </Grid.Column>
    </Grid.Row>


    {/* <Grid.Row columns={2} centered only='mobile'>
      <Grid.Column>
      <Image src={people}/>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={2} centered only='mobile'>
      <Grid.Column>
      <Image src={people}/>
      </Grid.Column>
    </Grid.Row> */}
  </Grid>
  
  
)


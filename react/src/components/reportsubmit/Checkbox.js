import React, { Fragment } from "react";
import checkmark from '../../assets/checkmark.png'; // Tell webpack this JS file uses this image
import { Image } from 'semantic-ui-react'



export default function Checkbox(props){
//  let name=props.name
let name="Astante"
 return(
    <Fragment>
    <div style={{"display":"inlineBlock","backgroundColor":"orange","height":"300px","width":"300px"}}>
  
    <div style={{"textAlign": "center","position":"relative","top":"20%"}}>
        <p> <h1>{name}</h1></p>
        <p> <h1>Thanks for</h1></p>
        <p> <h1>reporting a</h1></p>
        <p><h1>sighting</h1></p>
        </div>
    </div>
     <Image src={checkmark} style={{ "position": "relative","bottom":"35em","left":"10em"}}/>
     </Fragment>
  
)

 }
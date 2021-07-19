import React from "react";
import ReactDOM from "react-dom";
import './components/fomantic/dist/semantic.css';
import App from "./App"
import keycloak from './components/auth/Keycloak.js'
import { ReactKeycloakProvider } from '@react-keycloak/web'
async function login(){
  let cookie_test=Object.fromEntries(document.cookie.split('; ').map(c => {
    const [ key, ...v ] = c.split('=');
    return [ key, v.join('=') ];
}));

  
  let exist=cookie_test.mybbuser || null
  if (exist!=null){
    return
  }
  
  let url=`/api/user/forum_login?id=${keycloak.subject}`
  console.log(url)

  let l=await fetch(url)
  let cookie=await l.json()
  cookie=cookie.mybbuser|| null
  if(cookie==null){
    return
  }
  console.log(cookie)
  console.log(`mybbuser=${cookie}`)
  document.cookie=`mybbuser=${cookie}`  
}
const onEvent = (event, error) => {
  if (event=="onAuthSuccess"){
    login()
  }
  else if(event=="onTokenExpired"){
    console.log("dddd")
    document.cookie=`mybbuser=` 
  }

  else if(event=="onAuthRefreshSuccess "){
    console.log("dddsgag")
    login() 
  }
}

ReactDOM.render(
  <ReactKeycloakProvider
  authClient={keycloak}
  onEvent={onEvent}>
 
    <App />
    </ReactKeycloakProvider> 
  ,document.getElementById("root")
);

// src/components/logout-button.js
import './AuthButton.css'
import React from 'react'
import { useKeycloak } from '@react-keycloak/web'
import { Button } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";
const LogoutButton = (props) => {
  const { keycloak, initialized } = useKeycloak()
   const history = useNavigate();
   if(props.data){
    document.cookie=`mybbuser=;domain=lolo.gq`
    keycloak.logout()
  }
  return (
    <Button
      className='authbutton'
      basic
      color='black'
      onClick={() => {
        document.cookie = `mybbuser=`
        keycloak.logout()
      }}>Logout</Button>
  )}
export default LogoutButton

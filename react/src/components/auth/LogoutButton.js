// src/components/logout-button.js
import './AuthButton.css'
import { useKeycloak } from '@react-keycloak/web'
import { Button } from 'semantic-ui-react'
import { useHistory } from "react-router-dom";
import React from 'react'

const LogoutButton = (props) => {
  const { keycloak, initialized } = useKeycloak()
   const history = useHistory();
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
      }}
export default LogoutButton

// src/components/logout-button.js
import './AuthButton.css'
import React from 'react'
import { useKeycloak } from '@react-keycloak/web'
import { Button } from 'semantic-ui-react'

const LogoutButton = () => {
  const { keycloak, initialized } = useKeycloak()
  return (
    <Button
      className='authbutton'
      basic
      color='black'
      onClick={() => {
        document.cookie = `mybbuser=`
        keycloak.logout()
      }}
    >
      Log Out
    </Button>
  )
}

export default LogoutButton

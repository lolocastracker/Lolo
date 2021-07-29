// src/components/logout-button.js
import './AuthButton.css'
import { useKeycloak } from '@react-keycloak/web'

import React from 'react'
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

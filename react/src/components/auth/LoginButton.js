// src/components/login-button.js

import './AuthButton.css'
import React from 'react'
import { useKeycloak } from '@react-keycloak/web'
import { Button } from 'semantic-ui-react'

export default function LoginButton() {
  const { keycloak, initialized } = useKeycloak()
  return (
    <Button
      className='authbutton'
      basic
      color='black'
      onClick={() => keycloak.login()}
    >
      Log In
    </Button>
  )
}

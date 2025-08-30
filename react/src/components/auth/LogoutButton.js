// src/components/logout-button.js
import './AuthButton.css';
import { useKeycloak } from '@react-keycloak/web';
import React from 'react';
import { Button } from 'semantic-ui-react'; // ✅ Add this line

const LogoutButton = () => {
  const { keycloak } = useKeycloak(); // Removed 'initialized' as it wasn't used

  return (
    <Button
      className='authbutton'
      basic
      color='black'
      onClick={() => {
        document.cookie = `mybbuser=`;
        keycloak.logout();
      }}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
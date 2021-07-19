// src/components/logout-button.js
import { useKeycloak } from '@react-keycloak/web';

import React from "react";
const LogoutButton = () => {
  const { keycloak, initialized } = useKeycloak();
  return (
    <button
      className="btn btn-danger btn-block"
      onClick={() =>
        {
          document.cookie=`mybbuser=`
            keycloak.logout()
        }
       
      
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;

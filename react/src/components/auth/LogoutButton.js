// src/components/logout-button.js
import { useKeycloak } from '@react-keycloak/web';
import { useHistory } from "react-router-dom";
import React from "react";
const LogoutButton = (props) => {
  const { keycloak } = useKeycloak();
  const history = useHistory();
  if(props.data){
    document.cookie=`mybbuser=;domain=lolo.gq`
    keycloak.logout()
  }
  return (
    <button
      className="btn btn-danger btn-block"
      onClick={() =>
        {
          document.cookie=`mybbuser=;domain=lolo.gq`
            keycloak.logout()
        }
       
      
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;

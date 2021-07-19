import React from "react";
import ReactDOM from "react-dom";
import './components/fomantic/dist/semantic.css';
import App from "./App"
import keycloak from './components/auth/Keycloak.js'
import { LoginForum } from "./components/auth/LoginForum";
import { ReactKeycloakProvider } from '@react-keycloak/web'


ReactDOM.render(
  <ReactKeycloakProvider
  authClient={keycloak}
  onEvent={LoginForum }>
 
    <App />
    </ReactKeycloakProvider> 
  ,document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import './components/fomantic/dist/semantic.css';
import App from "./App"
import keycloak from './components/auth/Keycloak.js'
import { ReactKeycloakProvider } from '@react-keycloak/web'


console.log(ReactKeycloakProvider)
ReactDOM.render(
  <ReactKeycloakProvider
  authClient={keycloak}>
    <App />
    </ReactKeycloakProvider>,
  document.getElementById("root")
);

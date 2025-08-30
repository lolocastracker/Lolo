import React from "react";
import ReactDOM from "react-dom";
import './components/fomantic/dist/semantic.css';
import App from "./App"
import KeycloakAuth from './components/auth/KeycloakAuth.js'
import LoginForum from "./components/auth/LoginForum.js";
import { ReactKeycloakProvider } from '@react-keycloak/web'
import { BrowserRouter} from "react-router-dom";


ReactDOM.render(
  <ReactKeycloakProvider
  authClient={KeycloakAuth}
  onEvent={(event,error)=> LoginForum(event,error,KeycloakAuth)}>
   <BrowserRouter>
    <App />
    </BrowserRouter>
    </ReactKeycloakProvider> 
      
  ,document.getElementById("root")
);

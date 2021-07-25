import React from "react";
import ReactDOM from "react-dom";
import './components/fomantic/dist/semantic.css';
import App from "./App"
import keycloak from './components/auth/Keycloak.js'
import LoginForum from "./components/auth/LoginForum.js";
import { ReactKeycloakProvider } from '@react-keycloak/web'
import { BrowserRouter,} from "react-router-dom";


ReactDOM.render(
  <ReactKeycloakProvider
  authClient={keycloak}
  onEvent={(event,error)=> LoginForum(event,error,keycloak)}>
   <BrowserRouter>
    <App />
    </BrowserRouter>
    </ReactKeycloakProvider> 
      
  ,document.getElementById("root")
);

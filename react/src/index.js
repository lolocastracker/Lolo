import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,Route,Switch } from "react-router-dom";
import {useState,useEffect} from 'react'
import Profile from './views/ProfilePage.js' 
import TestPage2 from './views/TestPage2.js' 
import MainPageTest from './views/MainPageTest.js' 
import {Redirect,useHistory} from 'react-router-dom';
import Auth0ProviderWithHistory from "./components/auth/Auth0-provider-with-history.js"
import ProtectedRoute from "./components/auth/Protected-Route.js";
function App(){
  return(
      //Profile Page is Protected so login Required, Redirects to Home Page After
     <Switch>
            <ProtectedRoute path="/Profile" component={Profile}/>
            <Route path="/"> 
            <MainPageTest/>
            </Route> 
     </Switch>
  )

}

ReactDOM.render(
  <BrowserRouter>
      <Auth0ProviderWithHistory>
    <App />
    </Auth0ProviderWithHistory>
  </BrowserRouter>,
  document.getElementById("root")
);

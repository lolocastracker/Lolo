import React from "react";
import Auth0ProviderWithHistory from "./components/auth/Auth0-provider-with-history.js"
import ProtectedRoute from "./components/auth/Protected-Route.js";
import { Route,Switch } from "react-router-dom";

//Pages
import Profile from './views/ProfilePage.js' 
import TestPage2 from './views/TestPage2.js' 
import MainPageTest from './views/MainPageTest.js' 


export default function App(){
    return(
        //Profile Page is Protected so login Required, Redirects to Home Page After
        <Auth0ProviderWithHistory>
       <Switch>
              <ProtectedRoute path="/Profile" component={Profile}/>
              <Route path="/"> 
              <MainPageTest/>
              </Route> 
       </Switch>
       </Auth0ProviderWithHistory>
    )
  
  }

import React from "react";
import { Route,Switch } from "react-router-dom";
import { useKeycloak } from '@react-keycloak/web';
import { BrowserRouter} from "react-router-dom";
import { PrivateRoute } from "./components/auth/PrivateRoute.js"
//Pages
import Profile from "./views/ProfilePage.js"
import TestPage2 from "./views/TestPage2.js"
import MainPageTest from "./views/MainPageTest.js"
import MapPage from "./views/MapPage.js"
export default function App(){
  const { keycloak, initialized } = useKeycloak()
 
  if (!initialized) {
      return <h3>Loading ... !!!</h3>;
  }
  console.log(initialized,"this works")
    return(
        //Profile Page is Protected so login Required, Redirects to Home Page After
        <BrowserRouter>
       <Switch>
              <PrivateRoute roles={['user']} path="/Profile" component={TestPage2}/>
                      <Route path="/map">
          <MapPage />
        </Route>
      
                <Route path="/"> 
              <MainPageTest/>
              </Route> 
       </Switch>
      </BrowserRouter>
    )
  
  }


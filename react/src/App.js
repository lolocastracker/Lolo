import React from "react";
import { Route,Switch } from "react-router-dom";
import { useKeycloak } from '@react-keycloak/web';
import { useHistory} from "react-router-dom";
import { PrivateRoute } from "./components/auth/PrivateRoute.js"

//Pages
// import TestPage2 from "./views/TestPage2.js"
import MainPageTest from "./views/MainPageTest.js"
import MapPage from "./views/MapPage.js"
import ProfilePage from "./views/ProfilePage.js";

//logout
import LogoutButton from "./components/auth/LogoutButton.js";
export default function App(){
  const { keycloak, initialized } = useKeycloak()
  let history = useHistory();

  if (!initialized) {
      return <h3>Loading ... !!!</h3>;
  }
    return(
        // Profile Page is Protected so login Required, Redirects to Home Page After
      
       <Switch>
            <PrivateRoute roles={['users']} path="/Profile" component={ProfilePage}/>
                      <Route path="/map">
          <MapPage />
        </Route>
        <PrivateRoute roles={['users']} path="/signout" data={true} component={LogoutButton} /> 
  


              
        <Route path="/"> 
              <MainPageTest/>
              </Route> 
       </Switch>
    
    )
  
  }


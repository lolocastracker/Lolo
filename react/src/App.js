import React from 'react'
import { Route, Switch,BrowserRouter,useHistory } from 'react-router-dom'
import { useKeycloak } from '@react-keycloak/web'
import { PrivateRoute } from './components/auth/PrivateRoute.js'
//Pages
import HomePage from './views/HomePage.js'
import MapPage from './views/MapPage.js'
import ProfilePage from './views/ProfilePage.js'
import ReportPage from './views/ReportPage.js'
export default function App() {
  const { keycloak, initialized } = useKeycloak()
//logout
import LogoutButton from "./components/auth/LogoutButton.js";

export default function App(){
  const { keycloak, initialized } = useKeycloak()
  let history = useHistory();
  if (!initialized) {
    return <h3>Loading ... !!!</h3>
  }
  return (
    // Profile Page is Protected so login Required, Redirects to Home Page After
    <BrowserRouter>
      <Switch>
        <PrivateRoute
          roles={['users']}
          path='/Profile'
          component={ProfilePage}
        />
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/map'>
          <MapPage />
        </Route>
        <Route path='/report'>
          <ReportPage />
        </Route>
        <PrivateRoute 
        roles={['users']} path="/signout" 
        data={true} 
        component={LogoutButton} /> 
      </Switch>
    </BrowserRouter>
  )
}


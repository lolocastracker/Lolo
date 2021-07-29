import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { useKeycloak } from '@react-keycloak/web'
import { BrowserRouter } from 'react-router-dom'
import { PrivateRoute } from './components/auth/PrivateRoute.js'
//Pages
// import TestPage2 from "./views/TestPage2.js"
import MainPageTest from './views/MainPageTest.js'
import HomePage from './views/HomePage.js'
import MapPage from './views/MapPage.js'
import ProfilePage from './views/ProfilePage.js'
import ReportPage from './views/ReportPage.js'
import ReportSubmit from "./views/ReportSubmit.js"
export default function App() {
  const { keycloak, initialized } = useKeycloak()

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
        <Route path='/report_submit'>
          <ReportSubmit />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

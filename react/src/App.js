import React from 'react'
import { Route,  Routes,BrowserRouter,useNavigate } from 'react-router-dom'
import { useKeycloak } from '@react-keycloak/web'
import { PrivateRoute } from './components/auth/PrivateRoute.js'
import { Loader } from 'semantic-ui-react'
//Pages
import HomePage from './views/HomePage.js'
import MapPage from './views/MapPage.js'
import ProfilePage from './views/ProfilePage.js'
import ReportPage from './views/ReportPage.js'
import ReportSubmit from './views/ReportSubmit.js'
import LogoutButton from './components/auth/LogoutButton.js'

export default function App(){
  const { keycloak, initialized } = useKeycloak()
  console.log("KeyCloak Logged In",initialized)
  let history = useNavigate();
  if (!initialized) {
    return <Loader inline size='large' active />
  }
  return (
    // Profile Page is Protected so login Required, Redirects to Home Page After
    // <BrowserRouter>
      < Routes>
   

<Route
element={
  <PrivateRoute 
  roles={['users']}
  path='/Profile'
  component={ProfilePage} />
}

/>
        <Route path='/' exact
        element={<HomePage />}
        />
        
        <Route path='/map' exact
        element={<MapPage />}
       />


<Route path='/report' exact
        element={<ReportPage />}
       />
      <Route path='/report_submit' exact
        element={<ReportSubmit />}
       />

<Route
element={
  <PrivateRoute 
  roles={['users']} path="/signout" 
  data={true} 
  component={LogoutButton} />
}

/>
      </Routes>

    
    // </BrowserRouter>
  )
}


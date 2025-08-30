import React from 'react';
// 1. Import Switch instead of Routes
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import { Loader } from 'semantic-ui-react';

// Import your components
import { PrivateRoute } from './components/auth/PrivateRoute.js';
import HomePage from './views/HomePage.js';
import MapPage from './views/MapPage.js';
import ProfilePage from './views/ProfilePage.js';
import ReportPage from './views/ReportPage.js';
import ReportSubmit from './views/ReportSubmit.js';
import LogoutButton from './components/auth/LogoutButton.js';

export default function App() {
  const { initialized } = useKeycloak();

  if (!initialized) {
    return <Loader inline size='large' active />;
  }

  return (
    <BrowserRouter>
      {/* 2. Use the <Switch> component */}
      <Switch>
        {/* Public Routes use the 'component' prop */}
        <Route path='/' exact component={HomePage} />
        <Route path='/map' exact component={MapPage} />
        <Route path='/report' exact component={ReportPage} />
        <Route path='/report_submit' exact component={ReportSubmit} />

        {/* --- Private Routes --- */}
        {/* 3. PrivateRoute in v5 works just like a regular Route */}
        <PrivateRoute path='/profile' component={ProfilePage} />
        <PrivateRoute path='/signout' component={LogoutButton} />
      </Switch>
    </BrowserRouter>
  );
}
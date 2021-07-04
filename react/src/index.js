import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,Route,Switch } from "react-router-dom";
import {useState,useEffect} from 'react'
import TestPage from './views/TestPage.js' 
import TestPage2 from './views/TestPage2.js' 
import LoginPage from './views/LoginPage.js' 
import {Redirect,useHistory} from 'react-router-dom';
// alittle easier to make a component then pass that to the router,
//this way we can take advantage of hooks
//required elements pass in the return statement
const 
function App(){
  //set token to null on page load
  const [token, setToken] = useState(null);
  // function runs once page loads, then never again
  async function checkLoggedin(){
    let t3=await fetch('/session/check_auth')
      t3= await t3.json()
      return t3
      }


  

  return(
     <Switch>
            <Route path="/login"> 
            {checkLoggedin()==null  ? <LoginPage/>:  <Redirect to="/testpage" /> }
            </Route> 
            <Route path="/testpage">
            {checkLoggedin()!=null  ? <TestPage/>:  <Redirect to="/login" /> }
            </Route>
            <Route path="/">
            <TestPage2></TestPage2>
            </Route>
     </Switch>
  )

}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
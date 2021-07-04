import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,Route,Switch } from "react-router-dom";
import {useState,useEffect} from 'react'
import testpage from './views/testpage.js' 
import LoginPage from './views/LoginPage.js' 

// alittle easier to make a component then pass that to the router,
//this way we can take advantage of hooks
//required elements pass in the return statement
function App(){
  //set token to null on page load
  const [token, setToken] = useState(null);
  // function runs once page loads, then never again
  async function checkLoggedin(){
    let t3=await fetch('/session/check_auth')
      t3= await t3.json()
      //  setToken(null)
       setToken(t3.auth)
      }

      //trigger on page change second arg is empty list, so that is why
      //other whise if we had token or some other state, it would run
      //everytime the state changes
       useEffect(() => {
    checkLoggedin()
  },[]);

  

  return(
     <Switch>
            <Route path="/login"> 
            <LoginPage token={token} setToken={setToken}/> 
            </Route> 
            <Route path="/testpage" component={testpage} />
            <Route path="/" component={testpage} />
           
     </Switch>
  )

}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
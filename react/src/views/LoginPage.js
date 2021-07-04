import React,{useState,useEffect} from 'react'
import {Redirect} from 'react-router-dom';
import LoginForm from "../components/Login/Login.js"
export default function loginPage(props) {
  let token=props.token
  let setToken=props.setToken
  //we need to return something either a component or html/jsx
  if(token==null){
    //pass the state as prop to child component
    return (
      <div className="App">
          <LoginForm token={token} setToken={setToken}></LoginForm>
      </div>
    );

  }

  // once auth is check then redirect
  return  <Redirect to="/testpage" />
 
}
import React,{useState,useEffect} from 'react'
import {Redirect} from 'react-router-dom';
import LoginForm from "../components/Login/LoginBar.js"
export default function LoginPage() {
return (
  <div className="App">
     <LoginForm></LoginForm>
  </div>
)

}


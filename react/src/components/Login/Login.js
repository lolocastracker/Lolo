import React, { Component, useState,useEffect} from 'react'
import {Redirect,useHistory} from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react'


export default function LoginForm(props){
 //end goal here is to have auth checked somehow

 // this is passed as a prop which are more arguments, passed by a parent component
// the prop we are passing is the state of variable and function for auth. 

    async function handleSubmit(){
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      console.log(username,password)
      let testurl=`/session/set_auth?username=${username}&password=${password}`
      let t=await fetch(testurl)
      let t3= await fetch('/session/check_auth')
      t3= await t3.json()
      props.setToken(t3.auth)
    }
    return(
      <Form onSubmit={handleSubmit}>
      <Form.Field>
      <label>Username</label>
      <input placeholder='UserName' id="username" />
      </Form.Field>
      <Form.Field >
      <label>Password</label>
      <input placeholder='Password' id="password" />
      </Form.Field>
      <Form.Field>
      </Form.Field>
      <Button type='submit'>Submit</Button>
      </Form>
    )

    }
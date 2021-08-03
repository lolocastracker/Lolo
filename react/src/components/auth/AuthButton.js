import React from "react";
import { useKeycloak } from '@react-keycloak/web';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";



const AuthButton = () => {

   const { keycloak } = useKeycloak()
  return keycloak.authenticated ?<div><LogoutButton/> </div> :<LoginButton/>
};

export default AuthButton;
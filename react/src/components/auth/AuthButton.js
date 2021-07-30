import React from "react";
import { useKeycloak } from '@react-keycloak/web';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import ProfileButton from "./ProfileButton"


const AuthButton = () => {

   const { keycloak, initialized } = useKeycloak()

  return keycloak.authenticated ?<div><LogoutButton/> </div> :<LoginButton/>
  return keycloak.authenticated ?<div><LogoutButton/> <ProfileButton/></div> :<LoginButton/>
};

export default AuthButton;
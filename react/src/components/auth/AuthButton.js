import React from "react";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import ProfileButton from "./ProfileButton"

import { useAuth0 } from "@auth0/auth0-react";

const AuthButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ?<div><LogoutButton/> <ProfileButton/></div> :<LoginButton/>
};

export default AuthButton;
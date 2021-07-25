// src/components/login-button.js

import React from "react";
import { useKeycloak } from '@react-keycloak/web';

export default function LoginButton() {
  const { keycloak} = useKeycloak()
  return (
    <button
      className="btn btn-primary btn-block"
      onClick={() => keycloak.login()}
    >
      Log In
    </button>
  );
};



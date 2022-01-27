
import React from "react";
import {useNavigate} from 'react-router-dom';
export default function LoginButton() {
  const history=useNavigate()
  return (
    <button
    onClick={() => history.push("/Profile")}
    >
     Profile
    </button>
  );
};


import React from "react";
import {useHistory} from 'react-router-dom';
export default function LoginButton() {
  const history=useHistory()
  return (
    <button
    onClick={() => history.push("/Profile")}
    >
     Profile
    </button>
  );
};

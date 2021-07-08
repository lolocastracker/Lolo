import React from "react";

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Loading } from "../components/misc/Loading.js";

export default function TestPage2() {
  return (
    <div className="App">
        <p>
         This is not protected
        </p>
         
    </div>
  );
}


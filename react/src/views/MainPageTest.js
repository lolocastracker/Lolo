import React, { Fragment } from "react";
import AuthButton from "../components/auth/AuthButton.js"
import { Loader} from 'semantic-ui-react'
export default function MainPageTest() {
  return (
<Fragment>
<Loader className="ui active brown inline loader large">Loading2 </Loader>
  <AuthButton/>
</Fragment>
  );
}



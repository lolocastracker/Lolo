import React, { Fragment } from "react";
import AuthButton from "../components/auth/AuthButton.js"
import { Loader} from 'semantic-ui-react'
export default function MainPageTest() {
  return (
<Fragment>
<Loader active inline className="slow red" />
  <AuthButton/>
</Fragment>
  );
}



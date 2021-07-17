import React, { Fragment } from "react";
import AuthButton from "../components/auth/AuthButton.js"
import { Loader} from 'semantic-ui-react'
import { Card, Icon } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

export default function MainPageTest() {
  const description = [
    'Amy is a violinist with 2 years experience in the wedding industry.',
    'She enjoys the outdoors and currently resides in upstate New York.',
  ].join(' ')
  return (
<Fragment>
  <AuthButton></AuthButton>
<Loader className="ui active brown inline loader large">Loading2 </Loader>
llllllllllllllll
<Button className="red basic">Click Here</Button>
<Card>
    <Card.Content header='About Amy' />
    <Card.Content description={description} />
    <Card.Content extra>
      <Icon name='user' />4 Friends
    </Card.Content>
  </Card>
</Fragment>
  );
}



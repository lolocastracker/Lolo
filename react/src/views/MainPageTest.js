import React, { Fragment } from "react";
import AuthButton from "../components/auth/AuthButton.js"
import { Loader} from 'semantic-ui-react'
import { Card, Icon } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
export default function MainPageTest() {
  const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/))
  const description = [
    'Amy is a violinist with 2 years experience in the wedding industry.',
    'She enjoys the outdoors and currently resides in upstate New York.',
  ].join(' ')
  return (
<Fragment>
{/* <img src={images.banner} alt="Girl in a jacket" width="500" height="600"></img> */}
  <AuthButton></AuthButton>
<Loader className="ui active brown inline loader large">Loading23 </Loader>
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



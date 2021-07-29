
import Keycloak from 'keycloak-js'
 
// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak_config = Keycloak({
    url: 'https://accounts.lolo.gq/auth',
    realm: 'lolo',
    clientId: 'react-app',
  });
export default keycloak_config
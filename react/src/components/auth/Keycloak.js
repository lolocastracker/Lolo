
import Keycloak from 'keycloak-js'
 
// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = Keycloak({
    // url: 'https://accounts.lolo.gq/auth',
    // url: 'localhost:8090',
    url: 'http://localhost:8090/auth',
    realm: 'lolo',
    clientId: 'react-app',
  });
export default keycloak
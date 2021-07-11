import Keycloak from 'keycloak-js'
 
// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = Keycloak({
    url: 'http://localhost:8090/auth',
    realm: 'myrealm',
    clientId: 'react-app',
  });
console.log(keycloak)
console.log("test")
export default keycloak
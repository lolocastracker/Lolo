import { useKeycloak } from '@react-keycloak/web';
const ProfilePage = () => {
  const { keycloak, initialized } = useKeycloak()
let test=keycloak.subject
  return (
  <div>
 <h1> {test}</h1>
 <h2>" this is nothing"</h2>
 </div>

  )
}

export default ProfilePage

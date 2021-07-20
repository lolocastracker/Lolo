
import keycloak from './Keycloak.js'

export async function LoginForum(){
    let cookie_test=Object.fromEntries(document.cookie.split('; ').map(c => {
      const [ key, ...v ] = c.split('=');
      return [ key, v.join('=') ];
  }));
  
    
    let exist=cookie_test.mybbuser || null
    if (exist!=null){
      return
    }
    
    let url=`/api/user/forum_login?id=${keycloak.subject}`
    console.log(url)
  
    let l=await fetch(url)
    let cookie=await l.json()
    cookie=cookie.mybbuser|| null
    if(cookie==null){
      return
    }
    console.log(cookie)
    console.log(`mybbuser=${cookie}`)
    document.cookie=`mybbuser=${cookie}`  
  }
  const onEvent = (event, error) => {
    if (event=="onAuthSuccess"){
      login()
    }
    else if(event=="onTokenExpired"){
      document.cookie=`mybbuser=;domain=lolo.gq` 
    }
  
    else if(event=="onAuthRefreshSuccess "){
      login() 
    }
  }
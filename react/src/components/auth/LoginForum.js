






async function login(keycloak){
    let cookie_test=Object.fromEntries(document.cookie.split('; ').map(c => {
      const [ key, ...v ] = c.split('=');
      return [ key, v.join('=') ];
  }));
  
    
    let exist=cookie_test.mybbuser || null
    if (exist!=null){
      return
    }
    
    let url=`/api/user/forum_login?id=${keycloak.subject}`
  
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
  export default function LoginForum(event,error,keycloak){
  
    
    if(error){
        console.log(error)
    }
    if (event==="onAuthSuccess"){
      login(keycloak)
    }
    else if(event==="onTokenExpired"){
      console.log("dddd")
      document.cookie=`mybbuser=` 
    }
  
    else if(event==="onAuthRefreshSuccess "){
      console.log("dddsgag")
      login(keycloak) 
    }
  }
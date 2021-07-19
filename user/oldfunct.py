#keyloaker function deprechiated

# @app.route("/api/user/create_user")
# def create_user():     
#     token=req.get("http://nginx:3000/api/user/get_token").text
#     newuser={"firstName":"test","lastName":"test","email":"test@su.com","username":"test2002" \
#     , "attributes":{"phone":"17777777777","group": "group1"},"credentials":[{"type":"password","value":"test123","temporary":"false"}]}
#     headers={ 'Content-Type': 'application/json','Authorization': f"Bearer {token}" }
#     url='http://keycloak:8080/auth/admin/realms/lolo/users' 
#     s=req.post(url,data=json.dumps(newuser),headers=headers)
#     app.logger.debug(s.text)
#     return s.text


# @app.route("/api/user/get_id")
# def get_id():     
#     user="test2002"
#     token = request.args.get('token') or req.get("http://nginx:3000/api/user/get_token").text
#     app.logger.debug(token)
#     url=f'http://keycloak:8080/auth/admin/realms/lolo/users/?username={user}' 
#     headers={'Authorization': f"Bearer {token}" }
#     s=req.get(url,headers=headers)
#     return s.text
#     data=json.loads(s.text)
#     for element in data:
#         if element.get("username")==user:
#             return element.get("id")


# @app.route("/api/user/change_pass")
# def changer_pass():     
#     user="test2002"
#     token=req.get(f"http://nginx:3000/api/user/get_token").text
#     id=req.get(f"http://nginx:3000/api/user/get_id?token={token}")
#     url=f"http://keycloak:8080/auth/admin/realms/lolo/users/{id.text}/reset-password"
#     app.logger.debug(url)
#     headers={'Content-Type': 'application/json','Authorization': f"Bearer {token}"}
#     update={"type":"password","value":"test123234","temporary":False}
#     return req.put(url,headers=headers,data=json.dumps(update)).text

# def get_cookie(username,password):
#     url="http://nginx/member.php?action=login"
#     t=req.get(url)
#     soup = BeautifulSoup(t.text, 'html.parser')
#     l=soup.find_all('script')[-2].contents
#     l=re.search('var my_post_key = \".*\"',l[0]).group()
#     l=re.sub("var my_post_key = ","",l)
#     l=re.sub("\"","",l)
#     l=re.sub(" ","",l)
#     form={"username":"test2",
#     "password":"password",
#     "remember":"yes",
#     "action":"do_login",
#     "submit":"Login",
#     "url":"http://localhost:8080/index.php",
#     "my_post_key":l
#     }
#     app.logger.debug(form)
#     submit=req.post(url,data=form,allow_redirects=False)
#     return submit.text
#     return dict(submit.cookies)

# def update_forumpass(username,password,salt):
  #salt=os.urandom(5).hex()
#     connection_objt = t.get_connection()
#     cursor = connection_objt.cursor()
#     saltedh=hashlib.md5(salt.encode('utf-8')).hexdigest()
#     normalh=hashlib.md5(password.encode('utf-8')).hexdigest()
#     hash=hashlib.md5(saltedh.encode('utf-8')+normalh.encode('utf-8')).hexdigest()
#     query = ("UPDATE mybb_users " 
#         "SET password=%s,salt=%s "
#          "WHERE username = %s")
#     cursor.execute(query,(hash,salt,username))
#     myresult = cursor.fetchall()
#     if len(myresult)==0:
#         return ""
#     for user in myresult[0]:
#         if user==username:
#             return username
#     t.close()
#     return ""
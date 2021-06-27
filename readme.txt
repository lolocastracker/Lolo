Networks
     -Just a way to connect dockers together
     - You CANNOT use the name localhost server side when caling another docker
     - This is because 2 docker containers would have different ips internal, even if made from same image
     - The way to get arouund this is to use container_name:internal_port_second container
     -
     
     The nginx file listens on a port we choose in a config file in the nginx folder.
     This is passed to the docker image for nginx
     
     nginx is basically for routing request to a webserver, it's a lot more then that but that will be how we can use it for the project. 
     listen on ? when the user enters this port then take action
     
     the location are modifiers base on combabination of port and route then nginx will take action
     
     I have /api/ go to express
     * I believe any route that begins with api so /api/test/test would work
     the base url goes to react
     
     
     Theoritically we could all have are own react servers, and db server but the thing would be making sure the routes are different
     
 
     
 

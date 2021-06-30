Networks
     -Just a way to connect dockers together
     - You CANNOT use the name localhost server side when caling another docker
     - This is because 2 docker containers would have different ips internal, even if made from same image
     - The way to get arouund this is to use container_name:internal_port_second container
     -
     
     The nginx file listens on a port we choose in a config file in the nginx folder.
     This is passed to the docker image for nginx
     
     nginx is basically for routing request to a webserver, it's a lot more then that but that will be how we can use it for the project. 
     listen on a port when the user enters the external output of the port then it will take action
     
    
 

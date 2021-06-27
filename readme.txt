Networks
     -Just a way to connect dockers together
     - You CANNOT use the name localhost server side when caling another docker
     - This is because 2 docker containers would have different ips internal, even if made from same image
     - The way to get arouund this is to use container_name:internal_port_second container
     - 
 

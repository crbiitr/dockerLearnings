# Docker

Here I am writing some scripts, just for learnings.

Happy learning :)


##### Build docker image
docker build .

##### Run docker container
docker run <build_image_id>

##### Image tagging
docker build -t <docker_id>/<project_name>:<version> .

example: docker build -t crbiitr/redis:latest .

##### Run docker with tagging and port mapping
example docker run -p 9081:9081 crbiitr/nodejsapp

##### Run bash inside container
docker run -it crbiitr/nodejsapp sh

##### Executing bash inside container
docker exec -it <container_id> sh

##### Running container into background
docker run -d <image_name>

##### Stop container
docker stop <container_id>

# Docker Compose

##### Build and Run docker compose
docker-compose up --build

##### Running docker compose 
docker-compose up 

##### Launch into background
docker-compose up -d

##### Stopping docker compose 
docker-compose down



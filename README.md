# Docker

Here I am writing some scripts, just for learnings.

Happy learning :)


# Build docker image
docker build .

# Run docker container
docker run <container_id>

# Image tagging
docker build -t <docker_id>/<project_name>:<version> .

example: docker build -t crbiitr/redis:latest .

# Run docker with tagging and port mapping
example docker run -p 9081:9081 crbiitr/nodejsapp

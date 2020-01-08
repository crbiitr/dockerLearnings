# Using an existing docker image as a base
FROM alpine

# Download and install the dependencies
RUN apk add --update redis
RUN apk add --update gcc


# Tell the image what to do when run as a container
CMD ["redis-server"]
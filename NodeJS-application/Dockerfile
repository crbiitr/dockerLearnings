# Defining a Base image
FROM node:7

# Initializing working directory
WORKDIR /usr/app

# Coping everything from working directory to container
COPY ./ ./

# installing npm
RUN npm install


# Default command
CMD node index.js
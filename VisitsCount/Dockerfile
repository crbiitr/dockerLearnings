# Defining a Base image
FROM node:7

# Initializing working directory
WORKDIR /app

# Coping everything from working directory to container
COPY package.json .

# installing npm
RUN npm install

# Coping everything from working directory to container
COPY . .

# Default command
#CMD node index.js
CMD ["npm","start"]
# Build image
docker build -t crbiitr/nodejsapp .

# Run container
docker run -p 9081:9081 crbiitr/nodejsapp

# Run on browser
http://localhost:9081/
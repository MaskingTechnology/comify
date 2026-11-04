# Run me from the project root !!

VERSION=$(node -p "require('./package.json').version")

docker build -t "localhost:5000/comify:$VERSION" -f deployment/docker/Dockerfile .
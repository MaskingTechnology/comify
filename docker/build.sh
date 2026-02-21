VERSION=$(jq -r '.version' package.json)

docker build -t "localhost:5000/comify:$VERSION" -f docker/Dockerfile .
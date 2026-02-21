VERSION=$(jq -r '.version' package.json)

docker push "localhost:5000/comify:$VERSION"
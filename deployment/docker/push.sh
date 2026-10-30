# Run me from the project root !!

VERSION=$(node -p "require('./package.json').version")

docker push "localhost:5000/comify:$VERSION"
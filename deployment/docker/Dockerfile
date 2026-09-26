# Comify Docker Image
# Build this image from the project root directory

FROM node:24.12-alpine3.22

# Init root
RUN mkdir /opt/app
COPY package.json /opt/app/package.json
COPY package-lock.json /opt/app/package-lock.json

# INIT configs
COPY deployment/jitar.prod.json /opt/app/jitar.json
COPY deployment/services/demonstration/social.json /opt/app/service.json

# Init dist
RUN mkdir /opt/app/dist
COPY artifacts/dist /opt/app/dist

WORKDIR /opt/app

RUN npm ci --omit=dev

USER node

CMD ["npm", "run", "containerd"]
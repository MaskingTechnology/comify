# TimeTrap Docker Image
# Build this image from the project root directory

FROM node:24.12-alpine3.22

# Init root
RUN mkdir /opt/app
COPY package.json /opt/app/package.json
COPY package-lock.json /opt/app/package-lock.json
COPY jitar.json /opt/app/jitar.json 

# Init dist
RUN mkdir /opt/app/dist
COPY dist /opt/app/dist

# Init services
RUN mkdir /opt/app/services
COPY services/standalone.json /opt/app/services/standalone.json

WORKDIR /opt/app

RUN npm ci --omit=dev

USER node

CMD ["npm", "run", "production"]
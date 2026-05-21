# Comify

Hi there, and welcome to Comify. 👋

<img width="1102" alt="explainer" src="https://github.com/MaskingTechnology/comify/assets/108156553/25d88eca-0221-41f6-bd6c-a8b93bda9ff4">

Comify is an open source social media platform that leverages comics for communication. The idea is simple: take or upload a picture, add speech bubbles and share with others. These others can be related or unrelated users, depending on the view you're looking at. Comics can be liked, and users can react with a comment or another comic.

## Project goals

Its intent is not to disrupt the social-media space, but to learn and improve building future-proofed applications that can grow. Besides that, it's also a demo project for our distributed runtime [Jitar](https://jitar.dev).

## Current state

We're working hard to get the MVP done. To document the project we started writing articles about every step we take. You can read them and follow us on our [LinkedIn page](https://www.linkedin.com/company/maskingtechnology/).

## How to run

The project requires [Node.js](https://nodejs.org/) version 22+ to run the application and [Docker](https://www.docker.com/) for the additional services.

You need to set up the configuration first by copying the `example.env` file to a `development.env` file. Copying the file is enough for the first run. Then you can run the following command to start Docker:

```bash
npm run docker-up
```

This will start a [Keycloack](https://www.keycloak.org/) instance for account management, a [MongoDB](https://www.mongodb.com/) instance for data storage and a [SeaweadFS](https://seaweedfs.github.io/) instance for storing the comic images.

Next you can build and start the application with the following commands:

```bash
npm install
npm run build
npm run dist
npm run demo
```

This will start the social application at port 3000.

## How to use

Click on the `Get in` button to be redirected to the Keycloak login page. Here you can create your own account and log in directly. If you want to use any of the social options, you need to configure them in `development.env` file. Don't forget to restart Docker afterwards.

Once you're in it should be pretty straightforward. You should be able to comic! If not, please let us know by starting a discussion or creating an issue.

## Contributing

This project is not open for code contributions. However, if you have any questions or suggestions, we would love to hear from you at [comify\@masking.tech](mailto:comify@masking.tech?subject=Comify%20question), or post a message in the discussion section of this repository.

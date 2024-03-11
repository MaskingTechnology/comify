# Comify

Hi there, and welcome to Comify. This project is a web application that allows you to convert your images into comics. It is set up as a social media platform, so you can create content, follow creators and engage with content of others.

The project is a demo of how to use [Jitar](https://jitar.dev) to build a highly scalable web application. It's also a project to show the vision of [Masking Technology](https://masking.tech) on how to build future-proof (web) applications. The project is open-source so you can see and learn about the techniques we've used to build a future-proof application. It can also be used as a reference for building your own web application.

# Future-proofing vision



# How to run

To run the project, you need to have [Docker](https://www.docker.com/) installed. The runtime configuration of the database, keycloak and minio is done using an environment file. You need to copy the example.env file to a development.env file before docker can be started. Then, you can run the following command to start the external services:

```bash
npm run docker-compose up
```

This will start a keycloack instance for account management, a mongodb instance for data storage and a miniofs instance for storing the comic images. Then, to start the application, you can run the following commands:

```bash
npm install
npm run build
npm run standalone
npm run dev
```

This will start the application as a monolith on port 3000 and a Vite dev server on port 5173. You can then navigate to http://localhost:5173 to see the application.

# How to use

When you click on the `Get in` button, you will be redirected to the Keycloak login page. The social login is not configured in the example.env file. If you have your own social login, you can add the details to the development.env file and restart the docker-compose. Then you can login with your social account. Otherwise you'll have to create a local user in Keycloak by using the user creation form.

# Project documentation
The documentation of the project is also part of this repository. In the future we will add a `docs` folder with all the documentation. For now, the documentation is not yet available.

# Contributing
This project is not open for code contributions. However, if you have any questions or suggestions, feel free to contact us at [comify\@masking.tech](mailto:comify@masking.tech?subject=Comify%20question), or post a message in the discussion section of this repository.

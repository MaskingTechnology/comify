# Generate the login and registration pages for Keycloak

To generate the login and registration pages for Keycloak, we use the [keycloakify](https://www.keycloakify.dev/) project.

The files in this `src` directory are the only files we modified in the keycloakify-starter-main project. To regenerate the login and registration pages, you need to clone the project from github using the following command:

```bash
git clone https://github.com/keycloakify/keycloakify-starter
cd keycloakify-starter
npm install
npx keycloakify add-story #login.ftl
npm run storybook
```

Then copy all the files from this directory to the `keycloakify-starter-main/src/login` directory. Import the `main.css` in the `KcPage.tsx`.

Don't forget the change the name of the theme to `comfiy` in the `vite.config.ts` file.

These steps are also documented in the keycloakify [documentation](https://docs.keycloakify.dev/#quick-start).

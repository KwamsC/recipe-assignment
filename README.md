# recipes-app

This template should help get you started developing with Vue 3 in Vite.

## Choices

- Chosen Vue3 as that is the framework used internally at ABN. the screens with actual
- Folder structure src: using a structure related to Model View Controller.
  - assets: contains images and css base css files for the application
  - components: includes reusable components such as logo, search, and recipe card which are self contained
  - router: The navigation setup for the application
  - services: here the recipe api calls were made
  - utils: utility functions that could be used througout the application
  - views: the pages with route names
- Lint: @vue/eslint-config-airbnb as it an ESLint specifically for Vue which handles aliases for imports
- Search: I used a debouncer to limit the api calls for the fetch on every key stroke
- Login: I used firebase sdk for authentication. In order to test the application, the email and password is hard set to authenticate the user
- API rquests: Used Axios to fetch the data for its ease of use as the response data is JSON by default

## Recommended IDE Setup

## Project Setup

```sh
cd recipes-app && yarn
```

In order to run the webapp

```sh
yarn run dev
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn run lint
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

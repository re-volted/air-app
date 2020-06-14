# air-app

Simple weather checking app build with Vue.js + Typescript. Includes integration of Google Autocomplete API for looking for places to check weather.

App uses free version of `openweathermap API`, can be found [here](https://home.openweathermap.org/).

## Tutorial

On page enter, it asks for localization, if agreed - instantly shows the current weather. Data is fetched from API and stored in custom Vuex `weather module`.

User can get more information about forecast for current location by clicking `more` button. It shows then forecast till the end of the current day, in 3 hours steps (free API version).

Any time user can look for forecast for any new city that is available in API. For autocompletion locations in case, that some place doesn't have information about city, app has a fallback and fetches weather info by coordinates. In other cases, returns information about the error, below weather panel.

App also supports two most popular temperature units: Celsius and Fahrenheit. User can toggle them by clicking on current temperature on the main page. Information about it is kept in store, so details page also formats temperature the same way. Page could be easily improved by keeping information about users choice in LocalStorage or Cookie and remember it even on page reload.

Version without autocompletion for input can be found on branch `dev-no-autocomplete` and [online](https://re-volted.github.io/air-app/)!

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

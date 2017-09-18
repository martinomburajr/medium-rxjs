// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: "AIzaSyDlDQPIdcQUAbcasLXp07C6x5XJEZFVe0k",
      authDomain: "medium-rxjs.firebaseapp.com",
      databaseURL: "https://medium-rxjs.firebaseio.com",
      projectId: "medium-rxjs",
      storageBucket: "medium-rxjs.appspot.com",
      messagingSenderId: "256449444434"
    }
};

# Introduction

Provides fast start for the Angular 4+ project with [Material Design](https://material.angular.io/). 

`ng-material-starter` provides the following features:

- Material Design(+ Material Icons, Roboto Fonts).
- Responsive design for:
    + mobile < 768px
    + desktop > 768px
- Project was generated with [Angular CLI](https://github.com/angular/angular-cli).


## Offline enhancement
Need to create servise-worker.js and application will work offline.

### Generete and use service-worker

Generator config `/sw-precache-config.js`. To generate and use service-worker.js you will need proceed next steps:

1. Run `ng build --prod`;
2. Run `npm run sw`, that catch all files from `\dist` and generate the `\dist\assets\service-worker.js` file;
3. Copy `\dist\assets\service-worker.js` to `\src\assets\service-worker.js`;
4. Run `npm start`

### Running with ng-serve
If you running the project on `localhost` then you can skip this step.

1. Go to `@angular/cli/tasks/serve.js`, find `run()` function then find `webpackDevServerConfiguration` variable than add to it next properties:

```
cert: fs.readFileSync(this.project.root+ '/ssl/local.mat-cli-start.com.crt', 'utf8'),
key: fs.readFileSync(this.project.root+ '/ssl/local.mat-cli-start.com.key', 'utf8'),
https: true,
```

2. Run `ng serve --ssl 1 --ssl-key "ssl/local.mat-cli-start.com.key" --ssl-cert "ssl/local.mat-cli-start.com.crt" --host 0.0.0.0 --port 4200`


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

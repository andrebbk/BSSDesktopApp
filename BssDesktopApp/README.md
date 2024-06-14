# BssDesktopApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.



## SETUP PROJECT

1. Run ng new [app-name] --no-standalone

2. Clear html preset index page, validate base href="./" and update outputPath with [app-name] inside angular.json

3. Run npm install --save-dev electron@latest

4. Create and configure an app.js file

5. Create a new file a preload.js file 

6. Configure preload.js to expose protected methods that allow the renderer process to use the ipcRenderer without exposing the entire object (communication between electronjs and the angular app)

7. Update package.json with the main and start commands

8. Validate assets path inside angular.json

9. Run npm install knex --save-dev

10. Create a .db file within the public folder

11. Create a new angular service to get the window object to allow access to the "api"

12. Run npm i bootstrap --save-dev

13. Update angular.json build scripts and styles sections with bootstrap files (bootstrap.bundle.min.js, bootstrap.min.css) 

14. Update angular.json configurations budgets sections, set "type": "initial", "maximumWarning": "4MB", "maximumError": "5MB" (removes bootstrap caused warning)

15. Update angular.json production configurations section with 
"optimization": {
  "scripts": true,
  "styles": {
    "minify": true,
    "inlineCritical": false
  },
  "fonts": true
}

16. Import `../node_modules/bootstrap/dist/css/bootstrap.css` inside styles.scss
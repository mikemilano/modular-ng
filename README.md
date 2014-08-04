A Modular Oriented AngularJS Seed
=================================

This project was inspired by best practices research based on reports
by those who've been in the trenches with AngularJS, then implemented
with my own opinion based on team development, maintainability, and integration.

## Setup
```
git clone git@github.com:mikemilano/modular-ng.git
cd modular-ng/
bower install
npm install
```

## Run
This will build the project, run it in a server, and load it in your browser.

If you have the live reload chrome plugin enabled, it will reload when you save a file.
```
grunt
```

## Build dist
This will build the project, including minifying the code.
```
SERVER_BASE=dist grunt build
```

## Testing
```
cd test/
protractor protractor.conf.js
```

## Modules

The idea behind modules is to organize routes, controllers,
services, directives, partials, and tests of a similar context, into
their own directory.

The naming conventions for files are as follows:

- Module directory: Use the module name
- Module file(s): `<module name>.js` may contain routes, controllers, services,
etc... or you may break logic out into multiple files. i.e. `<module name>.controllers.js`.
- Partials: These may be placed directly in the module directory or in a
subdirectory of the module.

## Grunt Tasks
- JS files is run trough jshint, then concatenated into app.min.js
- AngularJS templates are transformed into JS in templates.js
- Sourcemaps are made so JS can be debugged relative to their file names using the source tab of Chrome dev tools
- Bootstrap and custom styles are compiled with less into style.css
- Images are optimized with imagemin

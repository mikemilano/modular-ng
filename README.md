A Modular Oriented AngularJS Seed
=================================

This project was inspired by best practices research based on reports
by those who've been in the trenches with AngularJS, then implemented
with my own opinion based on team development, maintainability, and integration.

The idea is that routes, controllers, directives, tests, templates etc... of a
common context are organized within the same directory.

```
.
├── index.html
└── js
    ├── app.js
    └── modules
        └── main
            ├── main.html
            ├── main.js
            └── test
                └── e2e
                    └── main.spec.js
```

Grunt does a lot of work to build that into something like this:
```
.
├── index.html
└── js
    ├── app.min.js
    └── templates.js
```


## Setup
```
git clone git@github.com:mikemilano/modular-ng.git
cd modular-ng/
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

## Add dependencies
Install a dependency with bower:
```
bower install lodash --save
```
Then, add the path to the dependency in `files.js.vendor.src` array of `Gruntfile.js`.

## Testing
By default, the protractor config is setup to look for all tests defined in `tests/e2e`,
as well as tests defined in modules.
```
cd test/
protractor protractor.conf.js
```

## Modules

The idea behind modules is to organize routes, controllers,
services, directives, partials, and tests of a similar context, into
their own directory.

The naming conventions for files are as follows:

- Module directory: Use the module name. i.e. `src/modules/notes`
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

## Great Resources
- Advanced Design Patterns and Best Practices: http://trochette.github.io/Angular-Design-Patterns-Best-Practices/ - Tommy Rochette
- GruntJS Course: http://frontendmasters.com/ - David Mosher
- AngularJS Course: http://frontendmasters.com/ - Lukas Ruebbelke
- AngularJS Videos: https://egghead.io/ - John Lindquist

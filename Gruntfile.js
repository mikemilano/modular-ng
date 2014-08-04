module.exports = function(grunt) {
  var dist = '' + (process.env.SERVER_BASE || 'dist_dev');
  var config = {
    pkg: grunt.file.readJSON('package.json'),
    banner: "/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - " +
      "<%= grunt.template.today(\"yyyy-mm-dd\") %>\n" +
      "<%= pkg.homepage ? \"* \" + pkg.homepage + \"\\n\" : \"\" %>" +
      "* Copyright (c) <%= grunt.template.today(\"yyyy\") %> <%= pkg.author.name %>" +
      " Licensed <%= _.pluck(pkg.licenses, \"type\").join(\", \") %> */\n",
    files: {
      html: {
        src: 'src/index.html'
      },
      js: {
        vendor: [
          'bower_components/angular/angular.js',
          'bower_components/angular-route/angular-route.js',
          'bower_components/lodash/dist/lodash.js',
          'bower_components/angular-bootstrap/ui-bootstrap.js'
        ],
        src: [
          'src/js/modules/*/*.js',
          'src/js/app.js'
        ]
      },
      less: {
        src: [
          'src/css/style.less',
          'bower_components/bootstrap/less/bootstrap.less'
        ]
      }
    },
    bower: {
      install: {
      }
    },
    newer: {
      timestamps: dist + '/timestamps'
    },
    jshint: {
      all: ['Gruntfile.js', '<%= files.js.src %>']
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'src/img',
          src: ['{,*/}*.{png,jpg,jpeg}'],
          dest: dist + '/img'
        }]
      }
    },
    less: {
      options: {
        paths: ['src/css'],
        ieCompat: false
      },
      dev: {
        src: '<%= files.less.src %>',
        dest: dist + '/css/style.css'
      },
      dist: {
        options: {
          cleancss: true,
          compress: true
        },
        src: '<%= files.less.src %>',
        dest: dist + '/css/style.css'
      }
    },
    ngtemplates: {
      app:          {
        cwd: 'src',
        src: 'js/**/*.html',
        dest: dist + '/js/templates.js',
        options:    {
          htmlmin:  { collapseWhitespace: true, collapseBooleanAttributes: true }
        }
      }
    },
    concat: {
      js: {
        src: ['<%= files.js.vendor %>', '<%= files.js.src %>'],
        dest: dist + '/js/app.min.js'
      }
    },
    concat_sourcemap: {
      options: {
        sourcesContent: true
      },
      app: {
        src: ['<%= files.js.vendor %>', '<%= files.js.src %>'],
        dest: dist + '/js/app.min.js'
      }
    },
    watch: {
      options: {
        livereload: true
      },
      html: {
        files: ['<%= files.html.src %>'],
        tasks: ['copy']
      },
      js: {
        files: ['<%= files.js.src %>'],
        tasks: ['concat']
      },
      less: {
        files: ['<%= files.less.src %>'],
        tasks: ['less:dev']
      }
    },
    copy: {
      main: {
        files: [
          {src: ['src/index.html'], dest: dist + '/index.html'}
        ]
      }
    },
    serve: {
      base: dist,
      web: {
        port: 8000
      }
    },
    clean: {
      workspaces: ['dist', 'dist_dev']
    },
    open: {
      dev: {
        path: "http://localhost:<%= serve.web.port %>"
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.js.dest %>',
        dest: dist + '/js/app.min.js'
      }
    }
  };

  // initialize task config
  grunt.initConfig(config);

  // load local tasks
  grunt.loadTasks('tasks');

  // loads all grunt-* tasks based on package.json definitions
  require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);

  // create workflows
  grunt.registerTask('default', ['bower', 'newer:jshint', 'newer:imagemin', 'less:dev', 'ngtemplates', 'concat_sourcemap', 'copy', 'serve', 'open', 'watch']);
  grunt.registerTask('build', ['clean', 'bower', 'jshint', 'imagemin', 'less:dist', 'ngtemplates', 'concat', 'uglify', 'copy']);
  grunt.registerTask('prodsim', ['build', 'serve', 'open', 'watch']);
};
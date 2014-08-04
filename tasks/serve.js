module.exports = function(grunt) {
  var express = require('express'),
    errorhandler = require('errorhandler'),
    compression = require('compression');

  grunt.registerTask('serve', 'static file development server', function() {
    var app, webPort, webRoot;
    webPort = grunt.config.get('serve.web.port') || 8000;
    webRoot = grunt.config.get('serve.base') || 'dist';

    app = express();
    app.use(compression());
    app.use(express.static('' + (process.cwd()) + '/' + webRoot));
    app.use(errorhandler());
    app.listen(webPort);

    grunt.log.writeln('Starting express web server in "' + webRoot + '"');

    return app;
  });
}
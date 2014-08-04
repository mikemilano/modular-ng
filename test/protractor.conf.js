exports.config = {
  specs: [
    './e2e/**/*.spec.js',
    '../src/js/modules/*/test/e2e/**/*.spec.js'
  ],
  baseUrl: 'http://localhost:8000'
};
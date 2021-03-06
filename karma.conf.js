// Karma configuration
// Generated on Fri Oct 30 2015 22:10:10 GMT+0900 (JST)

module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'karma-typescript'],

    // list of files / patterns to load in the browser
    files: ['tests/**/*.ts'],

    // list of files to exclude
    exclude: ['tests/**/*.d.ts'],

    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-typescript',
      'karma-chrome-launcher',
      'karma-nyan-reporter',
      'karma-htmlfile-reporter',
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'tests/**/*.ts': 'karma-typescript',
    },
    karmaTypescriptConfig: {
      tsconfig: './tsconfig.spec.json',
      transformPath: function (filepath) {
        return filepath.replace(/\.(ts|tsx)$/, '.js');
      },
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'nyan', 'html'],
    htmlReporter: {
      outputFile: 'tests/units.html',

      // Optional
      pageTitle: 'ZLYT-GL test',
      subPageTitle: 'A sample project description',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true,
      showOnlyFailed: false,
    },
    nyanReporter: {
      // suppress the error report at the end of the test run
      suppressErrorReport: true, // default is false

      // suppress the red background on errors in the error
      // report at the end of the test run
      suppressErrorHighlighting: true, // default is false

      // increase the number of rainbow lines displayed
      // enforced min = 4, enforced max = terminal height - 1
      numberOfRainbowLines: 100, // default is 4

      // only render the graphic after all tests have finished.
      // This is ideal for using this reporter in a continuous
      // integration environment.
      renderOnRunCompleteOnly: true, // default is false
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeHeadless'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity,
  });
};

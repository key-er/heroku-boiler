// Karma configuration
// Generated on Mon Aug 13 2018 10:35:38 GMT-0700 (PDT)


// module.exports = function(config) {
//   config.set({

//     // base path that will be used to resolve all patterns (eg. files, exclude)
//     basePath: '',


//     // frameworks to use
//     // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
//     frameworks: ['mocha', 'chai'],


//     // list of files / patterns to load in the browser
//     files: [
//       'test/**/*.js',
//        'react-client/src/*.js'
//     ],


//     // list of files / patterns to exclude
//     exclude: [
//     ],


//     // preprocess matching files before serving them to the browser
//     // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
//     preprocessors: {
//         'react-client/src/*.js' : 'coverage'
//     },


//     // test results reporter to use
//     // possible values: 'dots', 'progress'
//     // available reporters: https://npmjs.org/browse/keyword/karma-reporter
//     reporters: ['mocha', 'progress', 'coverage'],


//     // web server port
//     port: 9876,


//     // enable / disable colors in the output (reporters and logs)
//     colors: true,


//     // level of logging
//     // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
//     logLevel: config.LOG_INFO,


//     // enable / disable watching file and executing tests whenever any file changes
//     autoWatch: true,


//     // start these browsers
//     // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
//     browsers: ['Chrome'],


//     // Continuous Integration mode
//     // if true, Karma captures browsers, runs the tests and exits
//     singleRun: false,

//     // Concurrency level
//     // how many browser should be started simultaneous
//     concurrency: Infinity,


//     coverageReporter: {
//       type : 'html',
//       dir : 'coverage/'
//     }

//     })
// }



// **************************************
// **************************************
// **************************************
// **************************************
// **************************************
// **************************************





// var path = require('path');
// var SRC_DIR = path.join(__dirname, '../react-client/src');
// var DIST_DIR = path.join(__dirname, '../react-client/dist');

// var webpack = require('webpack')
// module.exports = function (config) {
//   config.set({
//     browsers: [ 'Chrome' ],
//     // karma only needs to know about the test bundle
//     files: [
//       // 'tests.bundle.js',
//       { pattern: 'test/**/*.js', watched: false },
//       { pattern: 'react-client/src/*.js', watched: true},
//       { pattern: 'react-client/src/**/*.spec.js', watched: true},
//     ],

//     frameworks: [ 'chai', 'mocha' ],
//     // plugins: [
//     //   'karma-chrome-launcher',
//     //   'karma-chai',
//     //   'karma-mocha',
//     //   'karma-sourcemap-loader',
//     //   'karma-webpack',
//     // ],
//     // run the bundle through the webpack and sourcemap plugins
//     preprocessors: {
//       'test/**/*.js': ['babel', 'webpack'],
//       'react-client/**/*.js': 'coverage',
//       'react-client/src/**/*.spec.js' : ['webpack', 'babel'],
//       'react-client/src/**/*.jsx' : ['webpack', 'babel']
//     },

//     reporters: ['mocha', 'progress', 'coverage'],

//     coverageReporter: {
//       type : 'html',
//       dir : 'coverage/'
//     },

//     // Concurrency level
//     // how many browser should be started simultaneous
//     concurrency: Infinity,

//     // web server port
//     port: 9876,


//     // enable / disable colors in the output (reporters and logs)
//     colors: true,


//     singleRun: false,
//     // webpack config object

//     webpack: {
//       // devtool: 'inline-source-map',
//       module: {
//       loaders : [
//         {
//           test : /\.jsx?/,
//           include : '/react-client/src',
//           loader : 'babel-loader',
//           query: {
//             presets: ['react', 'es2015']
//          }
//         }
//       ],

//       }
//     },



//     // webpack: {
//     //   entry: `${SRC_DIR}/index.jsx`,
//     //   output: {
//     //     filename: 'bundle.js',
//     //     path: DIST_DIR
//     //   },
//     //   module : {
//     //     loaders : [
//     //       {
//     //         test : /\.jsx?/,
//     //         include : SRC_DIR,
//     //         loader : 'babel-loader',
//     //         query: {
//     //           presets: ['react', 'es2015']
//     //        }
//     //       }
//     //     ]
//     //   }
//     // },

//     webpackMiddleware: {
//       noInfo: true,
//     }
//   });
// };









// ***********************************************
// ***********************************************
// ***********************************************
// **************************************
// **************************************



var webpackConfig = require('./webpack.config.js')

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ], //run in Chrome
    singleRun: true, //just run once by default
    frameworks: [ 'mocha' , 'chai'], //use the mocha test framework
    files: [
      // 'tests/clientSpecs/List.js' //just load this file
      { pattern: 'tests/clientSpecs/**/*.js', watched: true }
    ],
    preprocessors: {
      'tests/clientSpecs/**/*.js': [ 'webpack'], //preprocess with webpack and our sourcemap loader

    },
    reporters: [ 'dots' ], //report results in this format
    webpack: webpackConfig,

    reporters: ['mocha', 'progress', 'coverage'],

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },


    webpackServer: {
      noInfo: false //please don't spam the console when running in karma!
    },

    singleRun: true,
  });
};


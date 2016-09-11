'use strict';
/* eslint-env node */

const Merge = require('broccoli-merge-trees');
const Sass = require('broccoli-sass-source-maps');
const LiveReload = require('broccoli-inject-livereload');
const Autoprefixer = require('broccoli-autoprefixer');
const CssOptimizer = require('broccoli-csso');
const Funnel = require('broccoli-funnel');
const Babel = require('broccoli-babel-transpiler');
const mv = require('broccoli-stew').mv;
const rm = require('broccoli-stew').rm;
const log = require('broccoli-stew').log;
const browserify = require('broccoli-browserify-cache');

let pubFiles = new LiveReload('public');

if (process.env.EMBER_ENV === 'production') {
  pubFiles = 'public';
}

const stylePaths = [
  'app/styles',
  'node_modules',
];
const appNoSass = rm('app', '**/*.scss');

const babelScript = new Babel(appNoSass);

const appScript = browserify(babelScript, {
  entries: ['./index'],
  outputFile: 'app.js',
});

const compiledSass = new Sass(stylePaths, 'app.scss', 'app.css', {});
const optimizedCSS = new CssOptimizer(compiledSass);
const styles = new Autoprefixer(optimizedCSS);

if (process.env.EMBER_ENV === 'test') {
  const testHTML = new Funnel('tests', {
    files: ['test.html'],
  });

  const testTree = new Merge([
    mv(babelScript, 'app'),
    mv(new Babel('tests'), 'tests'),
  ]);

  const testJs = browserify(testTree, {
    entries: ['./tests/index-test'],
    outputFile: 'tests.js',
  });

  module.exports = new Merge([pubFiles, styles, appScript, testJs, testHTML]);
} else {
  module.exports = new Merge([pubFiles, styles, appScript]);
}

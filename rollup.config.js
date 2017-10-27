const sourcemaps = require('rollup-plugin-sourcemaps');
const vue = require('rollup-plugin-vue');
const babel = require('rollup-plugin-babel');

module.exports = {
  input: 'src/main.js',
  output: {
    file: 'index.js',
    format: 'cjs',
    sourcemap: true
  },
  sourcemapFile: 'index.js.map',
  plugins: [
    sourcemaps(),
    vue(),
    babel()
  ]
};

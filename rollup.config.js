const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const replace = require('rollup-plugin-replace');
const { terser } = require('rollup-plugin-terser');

module.exports = {
  input: 'src/index',
  output: [
    {
      file: 'public/bundle.js',
      format: 'esm',
      sourcemap: true,
    }
  ],
  plugins: [
    babel({ exclude: 'node_modules/**' }),
    commonjs(),
    resolve(),
    terser(),
  ],
}
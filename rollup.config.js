const path = require('path');
const resolve = require('@rollup/plugin-node-resolve').default;
const ts = require('rollup-plugin-typescript2');
const json = require('@rollup/plugin-json');
const commonjs = require('@rollup/plugin-commonjs');
const nodePolyfills = require('rollup-plugin-node-polyfills');
const { terser } = require('rollup-plugin-terser');
import babel from 'rollup-plugin-babel';
import del from 'rollup-plugin-delete';

const pkg = require(path.resolve('./package.json'));

const name = pkg.name;
const config = {
  input: path.resolve('./src/index.ts'),
  output: [
    {
      file: path.resolve(`./dist/${name}.js`),
      format: 'umd',
      name: name
    },
    {
      file: path.resolve(`./dist/${name}.es.js`),
      format: 'es'
    },
    {
      file: path.resolve(`./dist/${name}.cjs.js`),
      format: 'cjs'
    }
  ],
  plugins: [
    nodePolyfills(),
    del({ targets: 'dist/*' }),
    resolve(),
    ts({
      tsconfig: path.resolve('./tsconfig.json'),
      useTsconfigDeclarationDir: true
    }),
    commonjs(),
    json(),
    process.env.NODE_ENV === 'production' && terser(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};

module.exports = [config];

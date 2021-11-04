import typescript from 'rollup-plugin-typescript2';
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import pkg from './package.json';
import { defineConfig } from "rollup";

const banner = `/**
 * Vue 3 WaterMark ${pkg.version}
 * (c) ${new Date().getFullYear()}
 * @license MIT
 */`;

const rollOpts = [];

const rollObj = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: 'VueWaterMark',
      banner,
      globals: {
        vue: 'Vue',
      },
    },
    {
      file: pkg.module,
      format: 'es',
      banner,
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    typescript(),
    terser(),
  ],
};

rollOpts.push(rollObj);

rollOpts.push({
  input: 'src/index.ts',
  plugins: [dts()],
  output: {
    file: pkg.types,
    format: "es",
  },
})

export default defineConfig(rollOpts)
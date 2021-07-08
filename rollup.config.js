import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import cleanup from 'rollup-plugin-cleanup';
import pkg from './package.json';
const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * ${pkg.homepage}
 * Copyright (c) ${(new Date(process.env.SOURCE_DATE_EPOCH ? (process.env.SOURCE_DATE_EPOCH * 1000) : new Date().getTime())).getFullYear()}, Imesh Chamara. All rights reserved.
 * Released under the ${pkg.license} License
 */`;

export default [
	{
		input: './src/main-esm.js',
		output: [
			{ banner, format: 'esm', file: './build/ic-app.js' },
			{ banner, format: 'esm', file: './build/ic-app.min.js', plugins: [terser()] }
		],
		plugins: [cleanup(), babel({exclude: 'node_modules/**'}), resolve(), commonjs()]
	},
	{
		input: './src/main-cjs.js',
		output: [
			{ banner, format: 'cjs', file: './build/ic-app.cjs.js' },
			{ banner, format: 'cjs', file: './build/ic-app.cjs.min.js', plugins: [terser()] }
		],
		plugins: [cleanup(), babel({exclude: 'node_modules/**'}), resolve(), commonjs()]
	}
]

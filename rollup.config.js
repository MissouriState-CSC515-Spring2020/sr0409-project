import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";

const NODE_ENV = process.env.NODE_ENV || "development";
export default {
	input: 'src/recent.js',
	output: {
		file: 'public/bundle.js',
		format: 'iife', 
		sourcemap: false
	},
	plugins: [
		replace({
		  "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
		}),
		babel({
		  exclude: "node_modules/**"
		}),
		resolve(),
		commonjs()
	  ]
};

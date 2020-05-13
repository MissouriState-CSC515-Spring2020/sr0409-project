import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";

const NODE_ENV = process.env.NODE_ENV || "development";
export default {
	input: 'src/index.js',
	output: {
		dir: 'public/dist',
		format: 'esm', 
		sourcemap: true
	},
	plugins: [
		replace({
		  "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
		}),
		babel({
		  exclude: "node_modules/**"
		}),
		resolve(),
		commonjs({
			include: 
			  'node_modules/**'
			,
			exclude: 
			  'node_modules/process-es6/**'
			,
			namedExports: {
			  'node_modules/react/index.js': ['Children', 'isValidElementType', 'Component', 'PropTypes', 'createElement', 'lazy', 'Suspense'],
			  'node_modules/react-dom/index.js': ['render', 'Component','ReactDOM'],
			  'node_modules/react-is/index.js': ['render', 'Component', 'isValidElementType'],
			  'node_modules/react-router-dom/esm/react-router-dom.js': ['ReactDOM']
			}
		  })
	  ]
};

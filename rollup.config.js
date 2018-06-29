import {terser} from "rollup-plugin-terser";
import {version} from "./package.json";

const copyright = `// @observablehq/array v${version} Copyright ${(new Date).getFullYear()} Observable, Inc.`;

function config(options) {
  return {
    input: "src/index.js",
    ...options
  };
}

export default [
  config({
  	plugins: [
      terser({
        toplevel: true,
        output: {
        	preamble: copyright
        }
      })
    ],
    output: {
	    format: "es",
	    file: "dist/array.es.js"
    }
  }),
  config({
  	output: {
  		banner: copyright,
	    format: "cjs",
	    file: "dist/array.cjs.js"
  	}
  }),
  config({
  	plugins: [
      terser({
        output: {
        	preamble: copyright
        }
      })
    ],
    output: {
	    format: "umd",
	    name: "O_array",
	    file: "dist/array.umd.js"
    }
  })
];

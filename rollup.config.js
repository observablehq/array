import {terser} from "rollup-plugin-terser";

const copyright = `// @observablehq/array Copyright ${(new Date).getFullYear()} Observable, Inc.`;

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

import { createRequire } from "module";

const require = createRequire(import.meta.url);
const hljsVersion = require("highlight.js/package.json").version;
const banner = `/*! \`jaiava\` grammar built and tested with Highlight.js ${hljsVersion} */\n`;

export default {
    input: "src/languages/jaiva.js",
    output: [
        {
            file: "dist/jaiva.es.js",
            format: "es",
            banner,
        },
        {
            file: "dist/jaiva.cjs",
            format: "cjs",
            exports: "default",
            banner,
        },
        {
            file: "dist/jaiva.js",
            format: "iife",
            name: "hljsJaiva",
            banner,
            footer: 'hljs.registerLanguage("jaiva", "hljsJaiva");',
        },
    ],
};

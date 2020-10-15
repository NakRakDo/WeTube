//여기선 바벨노드를 못써서 옛날 자바스크립트로 작성
const path = require("path");
const ExtractCSS = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");
const MODE = process.env.WEBPACK_ENV;

//__dirname -> 현재 프로젝트 디렉토리 이름
// 어디에서나 접근가능한 node.js 전역변수
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
    devtool: "cheap-module-source-map",
    entry: ["@babel/polyfill", ENTRY_FILE],
    mode: MODE,
    module: {
        rules: [
            //Rules For Js
            {
                test: /\.(js)$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            //Rules For Css
            {
                test: /\.(scss)$/, //regex |로 여러가지가능,
                use: ExtractCSS.extract([
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins() {
                                    return [autoprefixer({
                                        browsers: "cover 99.5%"
                                    })];
                                }
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    },
                ])
            }
        ]
    },
    output: {
        path: OUTPUT_DIR,
        filename: "[name].js"
    },
    plugins: [new ExtractCSS("styles.css")]
    
};

module.exports = config;
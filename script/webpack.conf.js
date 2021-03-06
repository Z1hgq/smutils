const webpack = require("webpack");
const path = require("path");

const rootPath = path.resolve(__dirname, "../");

const config = {
    mode: "production",
    entry: path.resolve(rootPath, "src", "index.js"),
    output: {
        filename: `gqutils.min.js`,
        path: path.resolve(rootPath, "min"),
        library: `gqutils`,
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            }
        ]
    }
};

module.exports = config;

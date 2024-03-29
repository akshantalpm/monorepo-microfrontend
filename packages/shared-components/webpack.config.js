const path = require("path")

module.exports = {
    mode: "production",
    entry: {
        index: { import: "./src/index.js" }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },
    output: {
        filename: "components.bundle.min.js",
        library: 'shared-components',
        libraryTarget: 'umd',
        clean: true
    },
}
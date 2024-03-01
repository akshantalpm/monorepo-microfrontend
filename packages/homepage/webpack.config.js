const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");


module.exports = {
    entry: {
        "index": "./src/index",
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        sourceMapFilename: '[name].[hash:8].map',
        chunkFilename: '[id].[hash:8].js',
        publicPath: '/'
    },
     module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [["@babel/preset-env"], ["@babel/preset-react", {"runtime": "automatic"}], ["@babel/preset-flow"], ['@babel/preset-typescript', {allowNamespaces: true}]],
                        },
                    },
                ],
                resolve: {
                    fullySpecified: false, // disable the behaviour
                }
            },
             {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
             {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new NodePolyfillPlugin(),
    ]
    // ... other webpack configurations
};
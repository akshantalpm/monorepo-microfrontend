const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        "index": "./src/index",
        "product-page/index": "./packages/product-page/src/index",
        "homepage/index": "./packages/homepage/src/index",
        "checkout/index": "./packages/checkout/src/index",
    },
    stats: {warnings:false},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash:8].js',
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
        new HtmlWebpackPlugin({
            template: "./packages/product-page/public/index.html",
            filename: "product-page.html",
            chunks: ['product-page/index']
        }),
        new HtmlWebpackPlugin({
            template: "./packages/homepage/public/index.html",
            filename: "homepage.html",
            chunks: ['homepage/index']
        }),
        new HtmlWebpackPlugin({
            template: "./packages/checkout/public/index.html",
            filename: "checkout.html",
            chunks: ['checkout/index']
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
            chunks: ['index']
        }),
    ],
    devServer: {
        client: {
            overlay: false,
        },
        historyApiFallback: {
            disableDotRule: true,
            rewrites: [
                {from: '/', to: '/index.html'},
                {from: '/checkout', to: '/checkout.html'},
                {from: '/homepage', to: '/homepage.html'},
                {from: '/product-page', to: '/product-page.html'},
            ],
        },
    }
    // ... other webpack configurations
};
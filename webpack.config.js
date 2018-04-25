const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/app.js', //bundle entry point from ./src/
        vendor: './src/vendor.js', // seperate vendor code from app
    },
    output: {
        path: path.resolve(__dirname, 'dist'), //output directory
        filename: '[name].js', // name of generated bundle
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html', // from src
            inject: 'body',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
        }),
    ],
};

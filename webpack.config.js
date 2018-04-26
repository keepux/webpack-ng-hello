const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    resolve: {
        extensions: ['.js', '.ts'],
    },
    entry: {
        polyfills: './src/pollyfills.ts',
        main: './src/app.ts', //bundle entry point from ./src/
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
            {
                test: /\.ts$/,
                enforce: 'pre', //enforce pre-processing ts files
                loader: 'awesome-typescript-loader',
            },
            {
                test: /\.sass/,
                loader: [
                    'style-loader',
                    'css-loader?sourceMap',
                    'sass-loader?sourceMap',
                ],
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
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
    },
};

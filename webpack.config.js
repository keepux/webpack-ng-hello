const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app.js', //bundle entry point
    output: {
        path: path.resolve(__dirname, 'dist'), //output directory
        filename: '[name].js', // name of generated bundle
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body',
        }),
    ],
};

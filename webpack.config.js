const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js', //bundle entry point from ./src/
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
    ],
};

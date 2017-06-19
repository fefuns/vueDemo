var htmlWebpackPlugin = require('html-webpack-plugin');
var openBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'webpack-demos',
            filename: 'index.html'
        }),
        new openBrowserPlugin({
            url: 'http://localhost:8080'
        })
    ]
};
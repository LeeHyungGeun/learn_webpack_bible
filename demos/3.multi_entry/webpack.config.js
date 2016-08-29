var path = require('path');
var webpack = require('webpack');

// optimization treats it as more important to initial chunk
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');

// npm install webpack webpack-dev-server babel-loader babel-core --save-dev 

module.exports = {
    context: path.resolve('js'),
    entry: {
        index: './app.js',
        about: './about.js'
    },
    plugins: [commonsPlugin],
    output: {
        path: path.resolve('build/js/'),
        publicPath: path.resolve('/public/assets/js/'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: 'public'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.es6']
    },
    watch: true
};
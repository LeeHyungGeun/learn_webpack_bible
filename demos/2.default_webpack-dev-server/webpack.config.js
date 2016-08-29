var webpack = require('webpack');
var path = require('path');

// npm install webpack webpack-dev-server babel-loader babel-core --save-dev 

module.exports = {
    context: path.resolve('js'),    //path.resolve('js'),    // base context path
    entry: './app',  // entry JavaScript file
    output: {
        path: path.resolve('build/js/'),    // resolve path
        publicPath: '/public/assets/js/',    // public path for web
        filename: 'bundle.js'   // a file name of output
    },

    // devServer is a little node.js Express server.
    devServer: {
        contentBase: 'public'   // path of static files
    },

    // module to use a webpack
    module: {
        loaders: [  // loaders for a variety type of files
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'   // JavaScript Babel
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.es6'] // Which extension do not use without
    },
};
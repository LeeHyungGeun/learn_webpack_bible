var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.resolve('js'),    // base context path
    entry: './app.js',  // entry JavaScript file
    output: {
        path: path.resolve('build/js/'),    // resolve path
        publicPath: '/public/assets/js',    // public path for web
        filename: 'bundle.js'   // a file name of output
    }
}


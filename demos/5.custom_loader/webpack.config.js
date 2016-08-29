var path = require('path');

// npm install webpack webpack-dev-server json-loader strip-json-comments --save-dev

module.exports = {
    context: path.resolve('js'),
    entry: './app.js',
    output: {
        path: path.resolve('build/assets/'),
        publicPath: path.resolve('/public/assets/'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: 'json-loader!' + path.resolve('loaders/strip')
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.es6']
    },
    watch: true
};
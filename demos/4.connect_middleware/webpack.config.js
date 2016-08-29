var path = require('path');

// npm install webpack webpack-dev-server babel-loader babel-core raw-loader webpack-dev-middleware express morgan --save-dev

module.exports = {
    context: path.resolve('public/js'),
    entry: './app.js',
    output: {
        path: path.resolve('build/'),
        publicPath: path.resolve('/public/assets/'),
        filename: 'bundle.js'
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
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'raw-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.es6']
    },
    watch: true
}
var path = require('path');

// npm install babel-loader babel-core react react-dom babel-preset-es2015 babel-preset-react --save-dev

module.exports = {
    context: path.resolve('js'),
    entry: './app.js',
    output: {
        path: path.resolve('/build/'),
        publicPath: path.resolve('/public/assets/'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: 'public'
    },
    module: {
        loaders: [
            {
                test: /\.(es6|js)$/,
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
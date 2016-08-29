var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

// npm install webpack style-loader css-loader less less-loader autoprefixer-loader url-loader file-loader extract-text-webpack-plugin --save-dev 

module.exports = {
    context: path.resolve('js'),
    entry: './app.js',
    output: {
        path: path.resolve('build/bundle/'),
        publicPath: path.resolve('/public/assets/'),
        filename: 'bundle.js'
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ],  
    devServer: {
        contentBase: 'public'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'autoprefixer-loader')
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'autoprefixer-loader', 'less-loader')
            },
            {
                test: /\.(png|jpg|ttf|eot)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=10000'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.es6']
    }
};
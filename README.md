# learn_webpack_bible
You can get a sample of webpack from basic to react and angular environments

## Demos
# 1. webpack
```
webpack
``` 

# 2. webpack-dev-server
```
webpack-dev-server
```

# 3. multi entries
```
webpack.optimize.CommonsChunkPlugin
```

# 4. webpack-dev-middleware
```
node server
```

# 5. custom-loader
```
json-loader strip-json-comments 
```

# 6. CSS LESS Images
```
style-loader css-loader url-loader file-loader 
```

# 7. Tools
```
ProvidePlugin BannerPlugin timestamp-webpack-plugin
```

# 8. react
```
react react-dom
```

# 9. angular
```
angular
```

# Example
```javascript
var path = require('path');

// npm install babel-loader babel-core raw-loader angular --save-dev

module.exports = {
    context: path.resolve('js'),
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
                test: /\.(es6|js)$/,
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

};
```

# References
```
- Webpack Fundamentals<br>
https://www.pluralsight.com/courses/webpack-fundamentals
```
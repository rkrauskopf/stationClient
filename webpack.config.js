var webpack = require('webpack');
var path = require('path');

var webpackConfig = {
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    entry: {
        html: './app/index.html',
        javascript: './app/app.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: 'app.js'
    },
    //devServer: {
    //    contentBase: './build/js/',
    //    hot: true
    //},
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader']
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            },
        ]
    }
};

module.exports = webpackConfig;
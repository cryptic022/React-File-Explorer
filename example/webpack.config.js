'use strict';

var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/only-dev-server',
        './example/app.js'
    ],
    output: {
        path: __dirname,
        filename: 'main.js',
        publicPath: '/assets/'
    },
    cache: true,
    debug: false,
    devtool: false,
    stats: {
        colors: true,
        reasons: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        preLoaders: [{
            test: /\.js$/,
            exclude: [/node_modules/],
            loader: 'eslint-loader'
        }],
        loaders: [{
            test: /\.js$/,
            exclude: [/node_modules/],
            loaders: ['react-hot', 'babel-loader']
        },
        {
            test: /\.(ttf|eot|woff|woff2|svg)$/,
            loader: "url-loader?limit=50000"
        },
        {
          test: /\.(png|jpg|gif)$/,
          loader: "file-loader?name=img/img-[hash:6].[ext]"
        }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

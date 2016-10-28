'use strict';
module.exports = {
    cache: true,
    devtool: 'inline-source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: [/node_modules/],
            loaders: ['babel-loader?stage=0']
        },
        {
            test: /\.(ttf|eot|woff|woff2|svg)$/,
            loader: "url-loader?limit=50000"
        }],
        postLoaders: [{
            test: /\.js$/,
            exclude: [/test\/*/, /node_modules/],
            loader: 'istanbul-instrumenter'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
const webpack = require( 'webpack' ); // eslint-disable-line
const stylelint = require('stylelint'); // eslint-disable-line
const path = require('path');

module.exports = {
    resolve: {
        extensions: ['', '.jsx', '.js', '.css', '.less' ]
    },
    entry: {
        app: './app/app.jsx',
    },
    output: {
        path: './../web/assets/build/',
        publicPath: '/assets/build/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /(\.js|\.jsx)$/, exclude: /node_modules/, loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    }
};
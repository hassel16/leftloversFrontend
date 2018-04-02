const webpack = require("webpack");

module.exports = {
    //devtool: 'source-map', //hinzugefügt
    entry: {
        //main: 'babel-polyfill', // eingefügt, entsprechend auch in packagejson, das polyfill rausnhemen
        index:  './dist/scripts/index.js',//alt: ./index.js
        signin: './dist/scripts/signin.js',
        login:  './dist/scripts/login.js',
        search: './dist/scripts/search.js'
    },
    output: {
        path: __dirname + '/dist/assets/',
        filename: '[name].bundle.js',  //'bundle.js'
        //sourceMapFileName: 'bundle.map' // evtl bundle.js.map
    },
    devtool: 'source-map', // '#' weggemacht
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'es2015', 'react'], //es2015, react früher
                },
            },
        ],
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            warnings: true, //war mal false
            mangle: true
        }),
    ],
};

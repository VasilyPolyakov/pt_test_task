const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    context: __dirname + '/app',
    entry: {
        app: "./app.js",
    },
    output: {
        path: __dirname + "/public/js",
        filename: "[name].js",
        publicPath: '/js/'
    },
    watch: true,

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: "source-map",

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new CleanWebpackPlugin(['public'], {
            root: __dirname,
            verbose: true,
            dry: false,
            exclude: ['index.html', 'api']
        })
    ],
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },

            {
                test: /\.(ttf|eot|svg|png|jpg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader?name=[path][name].[ext]"
            },
        ]
    },
    devServer: {

        host: 'localhost', // default
        port: 8080, // default
        contentBase: __dirname + '/public'

    }
};
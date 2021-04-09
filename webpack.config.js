const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: './src/js/App.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/[name].[contenthash].js",
        assetModuleFilename: 'images/[hash][ext]',
        clean: true,
    },
    // devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: "./template.html"
        }),
        new MiniCssExtractPlugin({
            // filename: 'styles/[name].[contenthash].css'
        }),
    ],

    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: "all"
                }
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 150 * 1024 // 100kb
                    }
                },
                generator: {
                    filename: "static/[name][ext][query]",
                }
            },

            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: "font/[name][ext]",
                }
            }
        ]
    }
}
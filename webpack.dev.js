const { merge } =  require( 'webpack-merge'),
    common = require('./webpack.common'),
    path = require('path')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '/dist'),
        hot: true,
    }
})

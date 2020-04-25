const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');

module.exports = env => {
    return {
        entry: {
            app: path.join(__dirname, 'src', 'index.tsx')
        },
        module: {
            rules: [
                {
                    exclude: '/node_modules/',
                    test: /\.tsx?$/,
                    use: 'ts-loader'
                }
            ],
        },
        output: {
            filename: 'bundle.min.js',
            path: path.resolve(__dirname, 'build')
        },
        plugins: [
            new Dotenv(),
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'public', 'index.html')
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV)
            })
        ],
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            plugins: [new TsConfigPathsPlugin()]
        },
    }

}
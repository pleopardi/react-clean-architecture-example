const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
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
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        plugins: [new TsConfigPathsPlugin()]
    },
}
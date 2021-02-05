const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

module.exports = (env) => {

    const plugins = [
        new HtmlWebpackPlugin({
            template: './src/main/html/templates/index.html',
            favicon: './src/main/html/templates/favicon.png',
        }),
        new CleanWebpackPlugin(),
        new webpack.ContextReplacementPlugin(
          /highlight\.js\/lib\/languages$/,
          new RegExp(`^./(${['yaml', 'plaintext'].join('|')})$`),
        ),
    ];

    if (env && env.analyzeModules) {
        plugins.push(new BundleAnalyzerPlugin());
    }

    return {
        mode: "development",
        entry: './src/main/js/index.jsx',
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
        },
        output: {
            path: path.join(__dirname, '../server', 'src/main/resources/public'),
            filename: 'bundle.min.js',
        },

        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules)/,
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"]
                        }
                    }]
                },
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
            ]
        },
        plugins: plugins,
        devServer: {
            compress: false,
            port: 9001,
            proxy: {
                '/api': 'http://localhost:8080'
            }
        },
    };
};
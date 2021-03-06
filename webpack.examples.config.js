var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var es3ifyPlugin = require('es3ify-webpack-plugin');

var extractLess = new ExtractTextPlugin({
    filename: "bundle[chunkHash].css",
    disable: false,
    allChunks: true
});
var extractCss = new ExtractTextPlugin({
    filename: "vendor[chunkHash].css",
    disable: false
});

var debug = process.env.NODE_ENV !== 'production';

var config = {
    entry: {
        app: './examples/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][chunkHash].js',
        library: 'index',
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            include: [
                path.resolve(__dirname, 'index.ts'),
                path.resolve(__dirname, 'koumei-util.ts'),
                path.resolve(__dirname, 'components'),
                path.resolve(__dirname, 'examples')
            ],
            loader: 'ts-loader',
            options: { appendTsSuffixTo: [/\.md$/] }
        }, {
            test: /\.less$/,
            include: [
                path.resolve(__dirname, 'styles'),
                path.resolve(__dirname, 'components'),
                path.resolve(__dirname, 'examples/components')
            ],
            use: extractLess.extract({
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }]
            })
        }, {
            test: /\.css$/,
            include: [
                path.resolve(__dirname, 'components'),
                path.resolve(__dirname, 'examples/components'),
                path.resolve(__dirname, 'node_modules')
            ],
            use: extractCss.extract({
                use: [{
                    loader: 'css-loader'
                }]
            })
        }, {
            test: /\.html$/,
            include: [
                path.resolve(__dirname, 'components'),
                path.resolve(__dirname, 'examples/components')
            ],
            use: [
                {
                    loader: 'raw-loader'
                }, {
                    loader: 'string-replace-loader',
                    query: {
                        multiple: [
                            { search: '\r', replace: '', flags: 'g' }
                        ]
                    } 
                }
            ]
        }, {
            test: /\.(svg|png|gif)\w*/,
            include: [
                path.resolve(__dirname, 'components'),
                path.resolve(__dirname, 'examples/components'),
                path.resolve(__dirname, 'node_modules')
            ],
            loader: 'file-loader',
            query: {
                limit: 1,
                name: 'assets/img/[name].[ext]'
            }
        }, {
            test: /\.(eot|otf|ttf|woff|woff2)\w*/,
            include: [
                path.resolve(__dirname, 'components'),
                path.resolve(__dirname, 'examples/components'),
                path.resolve(__dirname, 'node_modules')
            ],
            loader: 'file-loader',
            query: {
                limit: 1,
                name: 'assets/fonts/[name].[ext]'
            }
        }, {
            test: /\.md$/,
            include: [
                path.resolve(__dirname, 'README.md'),
                path.resolve(__dirname, 'CHANGELOG.md'),
                path.resolve(__dirname, 'components'),
                path.resolve(__dirname, 'examples/docs')
            ],
            use: [
                { loader: 'koumei-markdown-loader', options: { highlight: false } }
            ]
        }]
    },
    resolve: {
        mainFields: ['browser', 'main'],
        extensions: ['.js', '.ts', '.less', '.md'],
        alias: {
            koumei: path.resolve(__dirname, "index.ts")
        }
    },
    watch: true,
    plugins: [
        extractLess,
        extractCss,
        new HtmlWebpackPlugin({
            template: 'examples/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        watchOptions: {
            ignored: /node_modules/
        // },
        // proxy: {
        //     '/api': {
        //         target: 'https://www.easy-mock.com/mock/58ff1b7c5e43ae5dbea5eff3',
        //         secure: false
        //     }
        }
    },
    devtool: 'inline-source-map'
};

module.exports = function (env) {
    if (env && env.production) {
        config.plugins.unshift(new es3ifyPlugin());
        config.watch = false;
        delete config.devtool;
    }
    return config;
};
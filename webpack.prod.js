const HtmlWebPackPlugin       = require('html-webpack-plugin'); 
const MiniCssExtractPlugin    = require('mini-css-extract-plugin');
// const OptimizeCssAssetsPlugin =   require('optimize-css-assets-webpack-plugin');
// const MinifyPlugin            = require('babel-loader');
// const { CleanWebpackPlugin }  = require('clean-webpack-plugin');

// const CopyPlugin              = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    // optimization: {
    //     minimizer: [ new OptimizeCssAssetsPlugin() ]
    // },
    output: {
        filename: 'main.[contenthash].js'
    },
    module: {
        rules: [
            // {
            //     test: /\.m?js$/,
            //     exclude: /node_modules/,
            //     use: {
            //       loader: "babel-loader",
            //       options: {
            //         presets: ['@babel/preset-env']
            //       }
            //     }
            //   },
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: false
                },
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            emitFile: true,
                            esModule: false,
                            name: 'assets/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            ignoreOrder: false
        }),
        // new MinifyPlugin(),
        // new CleanWebpackPlugin(),

        // new CopyPlugin([
        //     { from: 'src/assets', to: 'assets/' },
        // ]),
    ]

}


const HtmlWebPackPlugin       = require('html-webpack-plugin'); 
const MiniCssExtractPlugin    = require('mini-css-extract-plugin');
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// const CopyPlugin              = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    // optimization: {
    //     minimizer: [ new OptimizeCssAssetsPlugin() ]
    // },
    module: {
        rules: [
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
                            esModule: false,
                            name: 'assets/[name].[ext]'
                        }
                    }
                   
                ]
            } 
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({//lo copia en la carpeta de distribucions
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({//lo copia en la carpeta de distribucion
            filename: '[name].css',
            ignoreOrder: false
        }),
        // new CopyPlugin([//lo copia en la carpeta de distribucion
        //     { from: 'src/assets', to: 'assets/' },
        // ]),
    ]

}


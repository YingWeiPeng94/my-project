var { CleanWebpackPlugin } = require('clean-webpack-plugin')
var MinCssExtractPlugin = require('mini-css-extract-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        index: './src/js/meituan-index.js',
        info: './src/js/meituan-info.js'
    },
    output: {
        filename:'[name]-[hash:5].js',
        path: __dirname + '/out'
    },
    module: {
        rules: [
            //匹配js,处理js,解析es6语法
            {test:/(\.js)$/,use:['babel-loader']},
            // css style mini-css
            {test:/(\.css)/,use:[MinCssExtractPlugin.loader,'css-loader']},
            // 处理图片
            {test: /(\.jpg|png|jpeg|eot|svg|ttf|woff)$/,use:['url-loader?limit=1000&name=./[name].[ext]']}
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MinCssExtractPlugin({
            filename:'[name]-[hash:5].css'
        }),
        
        new HtmlWebpackPlugin({
            template:'./meituan-index.html',
            filename:'index.html',
            // 引入对应的打包完的js对应的文件 包
            chunks: ['index'],
            minify: {
                removeComments:true
            }
            // 自动引入script插件
        }),
        new HtmlWebpackPlugin({
            template:'./meituan-info.html',
            filename:'info.html',
            // 引入对应的打包完的js对应的文件 包
            chunks: ['info'],
            minify: {
                removeComments:true,//移除注释
            }
            // 自动引入script插件
        })
    ],
    mode: 'development',
    devServer: {
        port: '9191'
    }
}
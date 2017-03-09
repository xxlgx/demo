
let htmlplugin =require('html-webpack-plugin');
var autoprefixer = require('autoprefixer')
module.exports = {
    // 入口文件
    entry: ['./src/main.js'],
    // 出口文件
    output: {
        // 出口文件路径
        path: './build',
        // 出口文件名
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|bmp)$/,
                // loader:'url-loader?limit=8192&name=images/[name].[ext]'
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.styl(us)?$/,
                loader: 'style-loader!css-loader!postcss-loader!stylus-loader'
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]'
            },
        ]
    },
    vue: {
        // use custom postcss plugins
        postcss: [autoprefixer({browsers: ['last 2 versions','last 2 Explorer versions','last 3 Safari versions','Firefox >= 20','> 5%']})]
    },
    postcss:[autoprefixer({browsers: ['last 2 versions','last 2 Explorer versions','last 3 Safari versions','Firefox >= 20','> 5%']})],
    babel:{
        presets: ['es2015'],
        plugins: ['transform-runtime']  //这句代码就是为了解决打包.vue文件不报错
    },
    plugins:[
        new htmlplugin({
            title:'index',
            filename:'index.html',
            template:'xx.html'
        })
    ],
    // devServer: {
    //     host: '192.168.0.102',
    //     port: 8080,
    //     contentBase: 'dist/',
    //     historyApiFallback: true,
    // }
};
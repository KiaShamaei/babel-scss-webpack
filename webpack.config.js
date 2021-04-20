const path = require('path') ;


module.exports = {
    entry : './src/index' , 
    output : {
        path : path.resolve(__dirname, 'public/script'),
        filename : 'bundle.js'
},   
module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use:  ['babel-loader']
            
        } , 
        {
            test: /\.(scss|css)$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        }
    ]
}
}

module.exports = {
    // Arquivo principal que é escrito com es6, es7, es8 e por ai vai
    entry: ['@babel/polyfill', './src/main.js'],
    // Pra onde mandar o  o arquivo convertido
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
};
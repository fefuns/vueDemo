module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }, {
                    loader: 'autoprefixer-loader',
                    options: {
                        browsers: ['Android >= 2.1', 'iOS >= 6.0'],
                    }
                }]
            }
        ]
    }
}
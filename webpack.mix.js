const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);

mix
.options({
    processCssUrls: false,
    polyfills: [
        'Promise'
    ]
})

.webpackConfig({
    plugins: [
        new HardSourceWebpackPlugin()
    ],
    module: {
        rules: [
            { // scssでワイルドカードでのimportを可能にする。
                test: /\.scss$/,
                loader: 'import-glob-loader'
            },
            { // jsでワイルドカードでのimportを可能にする。//require()では使えないので注意。import()のみ。
                test: /\.js$/,
                loader: 'import-glob-loader'
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
});

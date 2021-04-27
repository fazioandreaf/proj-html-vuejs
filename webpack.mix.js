let mix = require('laravel-mix');

mix
.copy('src/index.html','dist')
.sass('src/style.scss','').options({
    processCssUrls: false})
.js('src/app.js', '')
.setPublicPath('dist');
const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

let productionSourceMaps = false;

mix.sass('resources/sass/main.scss', 'public/css').sourceMaps(productionSourceMaps, 'source-map');
mix.js('resources/js/app.js', 'public/js')
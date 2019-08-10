const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const purgecss = require('@fullhuman/postcss-purgecss');
const tailwind = require('tailwindcss');

module.exports = (ctx) => {
  const isProd = ctx.env !== 'dev';
  const plugins = [tailwind, autoprefixer];
  const purgeCssPlugin = purgecss({
    content: ['./src/static/**/*.html'],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  });

  isProd && (plugins.concat([purgeCssPlugin, cssnano]));

  return {plugins};
}

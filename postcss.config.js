const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const purgecss = require('@fullhuman/postcss-purgecss');
const tailwind = require('tailwindcss');

module.exports = (ctx) => {
  const isProd = ctx.env !== 'dev';

  const purgeCssPlugin = purgecss({
    content: ['./src/static/**/*.html'],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  });

  const plugins = isProd
    ? [tailwind, autoprefixer, purgeCssPlugin, cssnano]
    : [tailwind, autoprefixer];

  return {plugins};
}

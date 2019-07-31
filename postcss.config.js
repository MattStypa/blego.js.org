const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const purgecss = require('@fullhuman/postcss-purgecss');
const tailwind = require('tailwindcss');

const purgeContent = ['./src/static/**/*.html'];
const tailwindExtractor = content => content.match(/[A-Za-z0-9-_:/]+/g) || [];

module.exports = {
  plugins: [
    tailwind,
    autoprefixer,
    purgecss({
      content: purgeContent,
      defaultExtractor: tailwindExtractor,
    }),
    cssnano,
  ],
};

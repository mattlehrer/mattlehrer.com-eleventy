const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    require('postcss-import'),
    postcssPresetEnv({
      /* use stage 3 features + css nesting rules */
      // stage: 3,
      features: {
        'nesting-rules': true,
      },
    }),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};

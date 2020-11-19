const path = require('path')

module.exports = {
  plugins: [
    require('postcss-hash')({
      // algorithm: "sha512", // default = "md5"
      trim: 20,
      manifest: './_data/manifest.json',
      name: ({dir, name, hash, ext}) => path.join(dir, name + '-' + hash + ext)
    }),
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-preset-env')({ stage: 1 }),
    require('postcss-clean'),
  ],
}
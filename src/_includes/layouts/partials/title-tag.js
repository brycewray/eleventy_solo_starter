module.exports = function (eleventyConfig) {

  eleventyConfig.addShortcode('titleTag', function (data) {
    return `
    <title>${data.title} | brycewray.com</title>
    `
  })
}

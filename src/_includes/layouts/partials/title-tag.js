module.exports = function (eleventyConfig) {

  eleventyConfig.addShortcode('titleTag', function (data) {
    return /*html*/ `
    <title>${data.title} | brycewray.com</title>
    `
  })
}

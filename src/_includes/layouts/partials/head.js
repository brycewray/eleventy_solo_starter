module.exports = function(eleventyConfig) {

  eleventyConfig.addShortcode('headTag', function(data) {

    return `
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=10"><!-- due to IE 11 issue with TWCSS -->
    <meta name="generator" content="Eleventy - 11ty - https://11ty.dev - v${require(`@11ty/eleventy/package.json`).version}" />        
    ${
      (data.title == "Home page")
      ? `
      <title>${data.siteparams.siteTitle}</title> 
      <meta property="og:title" content="${data.siteparams.siteTitle}" />
      `
      : `
      <title>${data.title} | ${data.siteparams.siteTitle}</title>
      <meta property="og:title" content="${data.title} | ${data.siteparams.siteTitle}" />
      `
    }

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="description" content="${data.description
      ? `${data.description}`
      : `${data.siteparams.siteDescription}`
    }" />

    <meta name="og:description" content="${data.description
      ? `${data.description}`
      : `${data.siteparams.siteDescription}`
    }" />

    <meta property="og:url" content="${data.page.url
      ? `${data.page.url}`
      : `${data.siteparams.siteURLforOG}`
    }" />

    <link rel="icon" type="image/png" sizes="96x96" href="/images/icons/favicon.png">

    <link rel="preload" as="style" href="/css/${data.csshash['index.css']}" />
    <link rel="stylesheet" href="/css/${data.csshash['index.css']}" type="text/css" />
    <style>@-moz-document url-prefix() {.lazy:-moz-loading {visibility:hidden;}}.ieOnly {display: none;}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {.ieOnly {display: block;}.notInIE{display: none;}}</style>

    <noscript>
      <!-- Dark mode for Twitter items if browser blocks JS at bottom; it’s debatable whether it’s needed since non-JS Twitter is pretty spare and mostly adheres to other CSS, but we’ll do it just to be consistent -->
      <meta name="twitter:widgets:theme" content="dark">
      <meta name="twitter:widgets:link-color" content="#00bbff">
    </noscript>

  </head>
    `

  })

}
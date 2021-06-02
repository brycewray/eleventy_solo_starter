const fs = require('fs')
var internalCSS = ''
var internalCSSPath = 'src/_includes/css/index.css'
if (process.env.NODE_ENV === 'production') {
  if(fs.existsSync(internalCSSPath)) {
    internalCSS = fs.readFileSync(internalCSSPath)
  }  
}

module.exports = function(eleventyConfig) {

  // restructuring for easier reading/typing
  // ... https://wesbos.com/destructuring-objects
  eleventyConfig.addShortcode('headTag', function({ siteparams, page, description, title }) {
    const { siteTitle, siteDescription, siteURLforOG } = siteparams
    const { url } = page

    return /*html*/ `
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="generator" content="Eleventy - 11ty - https://11ty.dev - v${require(`@11ty/eleventy/package.json`).version}" />        
    ${
      (url == "/")
      ? /*html*/ `
      <title>${siteTitle}</title> 
      <meta property="og:title" content="${siteTitle}" />
      `
      : /*html*/ `
      <title>${title} | ${siteTitle}</title>
      <meta property="og:title" content="${title} | ${siteTitle}" />
      `
    }

    <meta name="description" content="${description
      ? `${description}`
      : `${siteDescription}`
    }" />

    <meta name="og:description" content="${description
      ? `${description}`
      : `${siteDescription}`
    }" />

    <meta property="og:url" content="${url
      ? `${url}`
      : `${siteURLforOG}`
    }" />

    <link rel="icon" type="image/png" href="/images/icons/Eleventy-favicon-16x16.png" sizes="16x16" />
    <link rel="icon" type="image/png" href="/images/icons/Eleventy-favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="/images/icons/Eleventy-favicon-96x96.png" sizes="96x96" />

    ${ process.env.NODE_ENV === 'production' 
      ? /*html*/ `<link rel="preload" href="/css/{{ csshash['index.css'] }}" as="style" />
      <link rel="stylesheet" href="/css/{{ csshash['index.css'] }}" type="text/css" />`
      : /*html*/ `<link rel="stylesheet" href="/css/index.css" type="text/css"  />`
    }

  </head>
    `
  })
}
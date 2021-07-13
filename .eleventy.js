const { DateTime } = require('luxon')
const htmlmin = require('html-minifier')
const jstheme = require('./src/_includes/jstheme.js')
const ErrorOverlay = require('eleventy-plugin-error-overlay')
const path = require ('path')
const Image = require('@11ty/eleventy-img')

async function imageShortcode(src, alt) {
  let sizes = "(min-width: 1024px) 100vw, 50vw"
  let srcPrefix = `./src/assets/images/`
  // ... so you don't have to enter path info for each ref,
  //     but also means you have to store them there
  //     --- which probably is best (IMHO)
  src = srcPrefix + src
  console.log(`Generating image(s) from:  ${src}`)
  if(alt === undefined) {
    // Throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`)
  }  
  let metadata = await Image(src, {
    widths: [600, 900, 1500],
    formats: ['webp', 'jpeg'],
    urlPath: "/images/",
    outputDir: "./_site/images/",
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src)
      const name = path.basename(src, extension)
      return `${name}-${width}w.${format}`
    }
  })  
  let lowsrc = metadata.jpeg[0]
  let highsrc = metadata.jpeg[metadata.jpeg.length - 1]
  return `<picture>
    ${Object.values(metadata).map(imageFormat => {
      return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map(entry => entry.srcset).join(", ")}" sizes="${sizes}">`
    }).join("\n")}
    <img
      src="${lowsrc.url}"
      width="${highsrc.width}"
      height="${highsrc.height}"
      alt="${alt}"
      loading="lazy"
      decoding="async">
  </picture>`
}

module.exports = function(eleventyConfig) {
  
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode)
  eleventyConfig.addLiquidShortcode("image", imageShortcode)
  // === Liquid needed if `markdownTemplateEngine` **isn't** changed from Eleventy default
  eleventyConfig.addJavaScriptFunction("image", imageShortcode)

  // theming -- based on Reuben Lillie's code (https://gitlab.com/reubenlillie/reubenlillie.com/)
  jstheme(eleventyConfig)

  eleventyConfig.setQuietMode(true)

  eleventyConfig.addPassthroughCopy('robots.txt')
  eleventyConfig.addPassthroughCopy('favicon.ico')
  eleventyConfig.addPassthroughCopy('./src/assets/js')
  eleventyConfig.addPassthroughCopy('./src/images/icons')

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy")
  })

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat('MMMM d, yyyy')
  })

  eleventyConfig.addFilter('dateStringISO', dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat('yyyy-MM-dd')
  })

  eleventyConfig.addFilter('dateFromTimestamp', timestamp => {
    return DateTime.fromISO(timestamp, { zone: 'utc' }).toJSDate()
  })

  eleventyConfig.addFilter('dateFromRFC2822', timestamp => {
    return DateTime.fromJSDate(timestamp).toISO()
  })

  eleventyConfig.addFilter('readableDateFromISO', dateObj => {
    return DateTime.fromISO(dateObj).toFormat('LLL d, yyyy h:mm:ss a ZZZZ')
  })

  eleventyConfig.addFilter('pub_lastmod', dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('MMMM d, yyyy')
  })

  // https://www.11ty.dev/docs/layouts/
  eleventyConfig.addLayoutAlias("base", "layouts/_default/base.11ty.js")
  eleventyConfig.addLayoutAlias("singlepost", "layouts/posts/singlepost.11ty.js")
  eleventyConfig.addLayoutAlias("index", "layouts/_default/index.11ty.js")

  /* Markdown plugins */
  // https://www.11ty.dev/docs/languages/markdown/
  // --and-- https://github.com/11ty/eleventy-base-blog/blob/master/.eleventy.js
  // --and-- https://github.com/planetoftheweb/seven/blob/master/.eleventy.js
  let markdownIt = require("markdown-it")
  let markdownItFootnote = require("markdown-it-footnote")
  let markdownItPrism = require('markdown-it-prism')
  let markdownItBrakSpans = require('markdown-it-bracketed-spans')
  let markdownItLinkAttrs = require('markdown-it-link-attributes')
  let markdownItOpts = {
    html: true,
    linkify: false,
    typographer: true
  }
  const markdownEngine = markdownIt(markdownItOpts)
  markdownEngine.use(markdownItFootnote)
  markdownEngine.use(markdownItPrism)
  markdownEngine.use(markdownItBrakSpans)
  markdownEngine.use(markdownItLinkAttrs, {
    pattern: /^https:/,
    attrs: {
      target: '_blank',
      rel: 'noreferrer noopener'
    }
  })
  // START, de-bracketing footnotes
  //--- see http://dirtystylus.com/2020/06/15/eleventy-markdown-and-footnotes/
  markdownEngine.renderer.rules.footnote_caption = (tokens, idx) => {
    let n = Number(tokens[idx].meta.id + 1).toString()
    if (tokens[idx].meta.subId > 0) {
      n += ":" + tokens[idx].meta.subId
    }
    return n
  }
  // END, de-bracketing footnotes
  eleventyConfig.setLibrary("md", markdownEngine)

  eleventyConfig.addWatchTarget("src/**/*.js")
  eleventyConfig.addWatchTarget("./src/assets/css/*.css")
  eleventyConfig.addWatchTarget("./src/**/*.md")

  eleventyConfig.setBrowserSyncConfig({
    ...eleventyConfig.browserSyncConfig,
    files: [
      "src/**/*.js",
      "src/assets/css/*.css",
      "src/**/*.md",
    ],
    ghostMode: false,
    port: 3000,
  })

  eleventyConfig.addPlugin(ErrorOverlay)

  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if( outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      })
      return minified
    }
    return content
  })

  /* === START, prev/next posts stuff === */
  // https://github.com/11ty/eleventy/issues/529#issuecomment-568257426

  eleventyConfig.addCollection("posts", function(collection) {
    const coll = collection.getFilteredByTag("post")
    for(let i = 0; i < coll.length; i++) {
      const prevPost = coll[i-1]
      const nextPost = coll[i+1]
      coll[i].data["prevPost"] = prevPost
      coll[i].data["nextPost"] = nextPost
    }
    return coll
  })

  /* === END, prev/next posts stuff === */
  
  /* pathPrefix: "/"; */
  return {
    dir: {
      input: 'src', // <--- everything else in 'dir' is relative to this directory! https://www.11ty.dev/docs/config/#directory-for-includes
      data: '../_data',
      includes: '_includes'
    },
    templateFormats: [
      'html',
      'md',
      'njk',
      '11ty.js'
    ],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
  }
}
module.exports = function(eleventyConfig) {

  eleventyConfig.addShortcode('siteFooter', function(data) {

    return `
    <footer class="text-center pb-6">
      <div class="w-5/6 md:w-3/4 lg:w-2/3 mx-auto">
        <p class="text-xs inline-flex mt-4 mb-4"><em>Everything you see here at the bottom is in <code>/src/_includes/layouts/partials/footer.js</code>.</em></p>
        <p class="text-xs inline-flex mt-4 mb-4">Any social icons, links, <em>etc.</em> go here.</p>
        <p class="text-xs">
          Any legalese (copyright notices and the like will go here).
        </p>
      </div>
    </footer>    
    `

  })

}
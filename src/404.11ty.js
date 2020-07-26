exports.data = {
  locale: 'en',
  title: '404 - Page not found',
  layout: 'layouts/_default/base.11ty.js',
  permalink: '404.html'
}

// following (as opposed to 'module.exports = `` without 'data') needed to work with above front matter
exports.render = data => `
  <main>
    <h1 class="text-center mt-8">Page not found</h1>
    <div class="post-line"></div>
    <p class="text-center mt-8;">Sorry, that page isn&rsquo;t on this site.</p>
    <p class="text-center m-40">Please use the navigation menu, above, to find another&nbsp;page.</p>
  </main>
`

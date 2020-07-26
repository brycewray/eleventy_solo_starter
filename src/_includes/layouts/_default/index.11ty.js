const stringtoRet = require('../../../assets/utils/lazy-picture.js')

exports.data = {
  layout: 'layouts/_default/base.11ty.js'
}

exports.render = function (data) {
  return `
  <main>
    <div class="w-full height-hero pt-12">
      ${stringtoRet(data.featured_image, data.featured_image_alt, "index")}
    </div>
    ${
      (data.featured_image_caption)
      ? `<p class="text-center text-xs tracking-normal mt-1">${data.featured_image_caption}</p>`
      : ``
    }
    <div class="container px-8 lg:grid lg:grid-cols-5 lg:gap-16 xb:gap-32 lg:w-3/4 xb:w-7/12 mr-auto ml-auto">
      <div class="col-span-3 home-colOne">
        ${data.content}
      </div>
      <div class="col-span-2 border-black border-t lg:border-0 pt-4 lg:pt-0">
        <h2 class="h1 mb-4">Recent <a href="/posts/">posts</a></h2>
        ${
          data.collections.post.slice(0, 5).map(post =>
          `
        <div>
          <h2 class="h4 not-italic tracking-tight"><a href="${post.url}">${post.data.title}</a></h2>
          <p class="font-bold text-base mt-2 mb-0 leading-5">${post.data.subtitle}</p>
          <p class="text-xs tracking-normal mt-0 mb-1">
            Published: <time style="display: inline;" datetime="${this.pub_lastmod(post.date)}}">${this.pub_lastmod(post.date)}<span style="font-variant: small-caps;">&nbsp;utc</span></time>
            ${
              post.data.lastmod
              ? `
            <br />Last modified: <time style="display: inline;" datetime="${this.pub_lastmod(post.data.lastmod)}">${this.pub_lastmod(post.data.lastmod)}<span style="font-variant: small-caps;">&nbsp;utc</span></time>
              `
              : ``
            }
          </p>
          <p class="text-sm mt-2 mb-3">
            ${post.data.description}
          </p>
        </div>
          ` 
        ).join('')}

        <p><a href="/posts/"><strong>All ${data.collections.post.length} posts</strong></a> <span class="text-sm"><em>(listed five per page)</em></span></p>
      </div>
    </div>
  </main>
  `
}

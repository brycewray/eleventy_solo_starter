const stringtoRet = require('../../../assets/utils/lazy-picture.js')

exports.data = {
  layout: 'layouts/_default/base.11ty.js'
}

exports.render = function (data) {
  return /*html*/ `
  <main>
    <div class="w-full height-hero">
      ${stringtoRet(data.featured_image, data.featured_image_alt, "index")}
    </div>
    ${
      (data.featured_image_caption)
      ? /*html*/ `<p class="text-center font-sans text-xs tracking-normal mt-1">${data.featured_image_caption}</p>`
      : ``
    }
    <div class="container px-8 lg:grid lg:grid-cols-5 lg:gap-16 xb:gap-32 lg:w-3/4 xb:w-7/12 mr-auto ml-auto">
      <div class="col-span-3 home-colOne">
        <h1>Welcome.</h1>
        <p class="font-sans text-xs tracking-normal mt-1 mb-0 dateInfo" style="line-height: 1.5 !important;">
        Published: ${this.pub_lastmod(data.page.date)}
        ${
          data.lastmod !== null && data.lastmod !== undefined
          ? /*html*/ `<br />Last modified: ${this.pub_lastmod(data.lastmod)}`
          : /*html*/ `&nbsp;`
        }
      </p>
        ${data.content}
      </div>
      <div class="col-span-2 border-black border-t lg:border-0 pt-4 lg:pt-0">
        <h2 class="h1 mb-4">Recent <a href="/posts/">posts</a></h2>
        ${
          data.collections.post.reverse().slice(0, 5).map(post => /*html*/ `
        <div class="font-sans">
          <h2 class="h4 not-italic tracking-tight"><a href="${post.url}">${post.data.title}</a></h2>
          <p class="font-bold text-base mt-2 mb-0 leading-5">${post.data.subtitle}</p>
          <p class="text-xs tracking-normal mt-0 mb-1">
            Published: <time style="display: inline;" datetime="${this.pub_lastmod(post.date)}}">${this.pub_lastmod(post.date)}</time>
            ${
              post.data.lastmod
              ? /*html*/ `
            <br />Last modified: <time style="display: inline;" datetime="${this.pub_lastmod(post.data.lastmod)}">${this.pub_lastmod(post.data.lastmod)}</time>
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

        <p class="font-sans"><a href="/posts/"><strong>All ${data.collections.post.length} posts</strong></a> <span class="text-sm"><em>(listed five per page)</em></span></p>
      </div>
    </div>
  </main>
  `
}

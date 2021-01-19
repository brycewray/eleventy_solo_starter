const stringtoRet = require('../../../assets/utils/lazy-picture.js')


exports.data = {
  layout: 'layouts/_default/base.11ty.js'
}

exports.render = function (data) {
  return /*html*/ `
<main class="pt-12">
  <div class="background-hero-image-div">
    ${stringtoRet(data.featured_image, data.featured_image_alt, "posts")}
    <div class="background-hero-title-block-fit font-sans">
      <div class="background-hero-title-text">
      <h1 class="text-center text-4xl md:text-left md:text-5xl lg:text-6xl xb:text-8xl tracking-tight leading-tight mb-6 px-4 md:px-0 text-white">${data.title}</h1>
      <h2 class="text-center text-2xl md:text-left md:text-3xl lg:text-5xl xb:text-6xl leading-tight tracking-tight px-6 md:px-0 text-white">
          ${
            data.subtitle
              ? data.subtitle
              : /*html*/ `&nbsp;`
          }
        </h2>
        <p class="hidden not-italic md:block md:text-2xl xb:text-4xl tracking-tight md:mt-8 mb-6 text-white">${data.description}</p>
        <p class="text-sm md:text-base xb:text-lg text-center px-4 md:text-right md:px-0 mt-4 md:mt-0 mb-0 text-white">
          <span style="font-variant: small-caps;">published:</span>&nbsp; <strong>${this.pub_lastmod(data.page.date)}</strong><br />
          <span class="text-xs md:text-sm">
          ${
            data.lastmod !== null && data.lastmod !== undefined
            ? /*html*/ `<span style="font-variant: small-caps;">last modified:</span>&nbsp;${this.pub_lastmod(data.lastmod)}`
            : /*html*/ `&nbsp;`
          }
          </span>
        </p>
        <p class="font-sans text-center text-white text-xs mt-4 mb-0 md:mb-1 pb-1">
        ${data.featured_image_caption
          ? `${data.featured_image_caption}`
          : /*html*/ `&nbsp;`
        }
        </p>
      </div>
    </div>
  </div>

  <div class="sm:w-5/6 md:w-4/5 xl:w-1/2 xb:w-5/12 mt-10 mr-auto ml-auto px-6 lg:px-16">
    <article>
      ${data.content}
    </article>
  </div>
  
  ${data.title != "The About Me page"
    ? /*html*/ `<div class="font-sans w-full px-8 md:px-0 bg-blue-700 align-middle mt-10 mb-10">
    <h3 class="text-center text-3xl tracking-normal mb-2 pt-2"><a href="/posts" class="border-transparent text-blue-100 hover:text-white">Other posts</a></h3>
    ${data.nextPost && data.nextPost.url !== null
      ? /*html*/ `<p class="text-center my-2 text-xl text-white leading-tight tracking-tight">
        <strong>Next</strong>: 
        <a class="border-transparent text-blue-100 hover:text-white hover:border-blue-100" href="${data.nextPost.url}">${data.nextPost.data.title}</a>
      </p>`
      : ``
    }
    ${data.prevPost && data.prevPost.url !== null
      ? /*html*/ `<p class="text-center pb-4 my-2 text-xl text-white leading-tight tracking-tight">
        <strong>Previous</strong>: 
        <a class="border-transparent text-blue-100 hover:text-white hover:border-blue-100" href="${data.prevPost.url}">${data.prevPost.data.title}</a>
      </p>`
      : /*html*/ `<p class="text-xs my-0 py-0 leading-tight">&nbsp;</p>`
    }
    </div>`
    : ``
  }
</main>
`
}
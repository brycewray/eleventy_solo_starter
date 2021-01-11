const { svgFirstPageIcon, svgPrevPageIcon, svgNextPageIcon, svgLastPageIcon } = require( '../assets/svg/svgs.js')

exports.data = {
  layout: 'layouts/_default/base.11ty.js',
  tags: ['nav'],
  navtitle: 'Posts',
  title: 'Posts',
  pagination: { 
    data: 'collections.post',
    size: 5,
    reverse: true,
    alias: 'posts'
  }
}

exports.render = function (data) {
  const pagerThing = `
  <p class="text-center text-sm mt-2 mb-2">
    ${
      data.pagination.href.previous === null 
        ? `${svgFirstPageIcon}${svgFirstPageIcon}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${svgFirstPageIcon}</span>`
        : `<a href="${data.pagination.href.first}" class="border-transparent" aria-label="First page">${svgPrevPageIcon}${svgPrevPageIcon}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="${data.pagination.href.previous}" class="border-transparent" aria-label="Previous page">${svgPrevPageIcon}</a>`      
    }
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ${
      data.pagination.href.next === null
        ? `<span class="text-gray-500">${svgLastPageIcon}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${svgLastPageIcon}${svgLastPageIcon}</span>`
        : `<a href="${data.pagination.href.next}" class="border-transparent" aria-label="Next page">${svgNextPageIcon}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="${data.pagination.href.last}" class="border-transparent" aria-label="Last page">${svgNextPageIcon}${svgNextPageIcon}</a>` 
    }
  </p>
`
  return `
  <main class="py-16">
	<div class="px-10 w-full md:w-2/3 lg:w-1/2 mx-auto">
		<h1 class="text-center tracking-tight">Posts</h1>
    <div class="post-line"></div>
    <div class="font-sans">
      ${pagerThing}
      <hr class="mt-2 mb-6" />
      ${
        data.pagination.items.map(post =>
        `
        <div>          
          <h2 class="text-xl mb-1 leading-tight tracking-tight"><a href="${post.url}">${post.data.title}</a><br />
          <span class="text-base tracking-tight">${post.data.subtitle}</span></h2>
          <p class="text-sm dateInfo" style="margin-top: 0;">
            Published: <time style="display: inline;" datetime="${this.pub_lastmod(post.date)}}">${this.pub_lastmod(post.date)}</time>
            ${
              post.data.lastmod
              ? `<br />Last modified: <time style="display: inline;" datetime="${this.pub_lastmod(post.data.lastmod)}">${this.pub_lastmod(post.data.lastmod)}`
              : ``
            }
          </p>
          <p class="text-sm mt-2 mb-10">
            ${post.data.description}
          </p>
        </div>
        `
        ).join('')
      }
      <hr class="mt-6" />
      ${pagerThing}
		</div>
	</div>

</main>  
  `
}

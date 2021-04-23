const { svgFirstPageIcon, svgPrevPageIcon, svgNextPageIcon, svgLastPageIcon } = require( '../assets/svg/svgs.js')

exports.data = {
  layout: 'base',
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

  // restructuring for easier reading/typing...
  // https://wesbos.com/destructuring-objects
  // https://stackoverflow.com/questions/65565806/destructure-object-properties-inside-array-prototype-map

  const { previous, next, first, last } = data.pagination.href
  const { items } = data.pagination
  
  const pagerThing = /*html*/ `
  <p class="text-center text-sm mt-2 mb-2">
    ${
      previous === null 
        ? `${svgFirstPageIcon}${svgFirstPageIcon}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${svgFirstPageIcon}</span>`
        : `<a href="${first}" class="border-transparent" aria-label="First page">${svgPrevPageIcon}${svgPrevPageIcon}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="${previous}" class="border-transparent" aria-label="Previous page">${svgPrevPageIcon}</a>`      
    }
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ${
      next === null
        ? /*html*/ `<span class="text-gray-500">${svgLastPageIcon}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${svgLastPageIcon}${svgLastPageIcon}</span>`
        : /*html*/ `<a href="${next}" class="border-transparent" aria-label="Next page">${svgNextPageIcon}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="${last}" class="border-transparent" aria-label="Last page">${svgNextPageIcon}${svgNextPageIcon}</a>` 
    }
  </p>
`
  return /*html*/ `
<main>
  <div class="font-sans text-center px-10 w-full md:w-2/3 lg:w-1/2 mx-auto">
    <h1 class="tracking-tight pt-8 lg:pt-10 2xl:pt-12 text-5xl">Posts</h1>
    <div class="post-line"></div>
    <div class="font-sans">
      ${pagerThing}
      <hr class="mt-2 mb-6" />
      ${
        items.map(
          ({url,
            date,
            data: {
              title,
              subtitle,
              lastmod,
              description
            },
          }) => /*html*/ `
        <div>          
          <h2 class="text-2xl lg:text-3xl 2xl:text-4xl mb-1 leading-tight tracking-tight"><a href="${url}">${title}</a><br />
          <span class="text-lg lg:text-xl 2xl:text-2xl tracking-tight">${subtitle}</span></h2>
          <p class="text-sm dateInfo mt-0">
            <time class="inline" datetime="${this.pub_lastmod(date)}}"><strong>${this.pub_lastmod(date)}</strong></time>
            ${
              lastmod
              ? /*html*/ `<br />Last modified <time class="inline" datetime="${this.pub_lastmod(lastmod)}">${this.pub_lastmod(lastmod)}`
              : ``
            }
          </p>
          <p class="text-sm mt-2 mb-10">
            ${description}
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

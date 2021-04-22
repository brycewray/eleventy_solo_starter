exports.data = {
  layout: 'base'
}

exports.render = function (data) {
  return /*html*/ `
<main class="pt-12">
  ${this.billBoard(data)}
  <div class="mt-8 lg:mt-12 2xl:mt-16 border-blue-700 dark:border-white mx-auto my-auto w-1/5 border-solid border-b-4"></div>
  <div class="sm:w-5/6 md:w-4/5 xl:w-1/2 2xl:w-5/12 mt-10 mr-auto ml-auto px-6 lg:px-0">
    <article>
      ${data.content}
    </article>
  </div>
  
  ${data.page.url !== "/about/"
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
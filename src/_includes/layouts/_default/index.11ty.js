
exports.data = {
  layout: 'base',
}

exports.render = function (data) {
  // restructuring for easier reading/typing...
  // https://wesbos.com/destructuring-objects
  // https://stackoverflow.com/questions/65565806/destructure-object-properties-inside-array-prototype-map

  const { content, collections } = data
  const { length } = collections.post

  return /*html*/ `
  <main class="p-0">
    <div class="pt-6 lg:pt-12 lg:flex w-full mr-auto ml-auto">
      <div class="bg-transparent lg:bg-gradient-to-b lg:from-blue-800 lg:via-blue-400 lg:to-white lg:dark:bg-gradient-to-b lg:dark:from-black lg:dark:via-blue-700 lg:dark:to-black lg:w-5/12 px-8 lg:pl-16 lg:pr-16 pt-16 lg:text-white text-center lg:text-right">
        <h1 class="lg:leading-normal text-3xl lg:text-4xl 2xl:text-6xl lg:pt-10">Home page</h1>
        <p class="font-sans">This sentence comes from the template.</p>
        <div class="font-sans">${content}</div>
      </div>
      <div class="text-center lg:text-left lg:w-7/12 lg:pl-16 lg:pt-16">
        <div class="mt-8 border-blue-700 dark:border-white mx-auto my-auto w-3/5 border-solid border-b-4 lg:hidden"></div>
        <h2 class="h1 mt-4 lg:mt-0 mb-4 lg:mb-10 text-3xl lg:text-5xl 2xl:text-7xl">Latest <a href="/posts/">posts</a></h2>
        ${
          collections.post.slice(-3).reverse().map(
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
          <h2 class="not-italic tracking-tight text-2xl lg:text-3xl 2xl:text-4xl"><a href="${url}">${title}</a></h2>
          <p class="font-sans font-bold mt-1 mb-0 leading-5 text-xl lg:text-2xl 2xl:text-3xl">${subtitle}</p>
          <p class="font-sans text-sm tracking-normal mt-1 mb-0 dateInfo">
            <time class="inline" datetime="${this.pub_lastmod(date)}}"><strong>${this.pub_lastmod(date)}</strong></time>
            ${
              lastmod
              ? /*html*/ `
            <br />Last modified <time class="inline" datetime="${this.pub_lastmod(lastmod)}">${this.pub_lastmod(lastmod)}</time>
              `
              : ``
            }
          </p>
          <p class="font-sans text-base mt-1 mb-4 lg:mb-10">
            ${description}
          </p>
        </div>
          ` 
        ).join('')}

        <p class="font-sans"><a href="/posts/"><strong>All ${length} posts</strong></a> <span class="text-sm"><em>(listed five per page)</em></span></p>
      </div>
    </div>
  </main>
  `
}

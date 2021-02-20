module.exports = function(eleventyConfig) {

  eleventyConfig.addShortcode('billBoard', function(data) {

    return /*html*/ `
    <div class="text-center pt-12 lg:pt-20 font-sans">
      <h1 class="text-3xl lg:text-6xl 2xl:text-8xl">${data.title}</h1>
      <h2 class="mt-6 lg:mt-8 2xl:mt-12 text-2xl lg:text-4xl 2xl:text-5xl">
          ${
            data.subtitle
              ? data.subtitle
              : /*html*/ `&nbsp;`
          }
      </h2>
      <p class="font-sans mt-8 lg:mt-12 2xl:mt-16 text-xl lg:text-2xl 2xl:text-3xl">${data.description}</p>
      <p class="font-sans mt-4 lg:mt-6 2xl:mt-8"><strong>${this.pub_lastmod(data.page.date)}</strong><br />
        <span class="text-base">
        ${
          data.lastmod !== null && data.lastmod !== undefined
          ? /*html*/ `Last modified ${this.pub_lastmod(data.lastmod)}`
          : /*html*/ `&nbsp;`
        }
        </span>
      </p>
    </div>   
    `

})

}
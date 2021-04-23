module.exports = function(eleventyConfig) {

  // restructuring for easier reading/typing
  // ... https://wesbos.com/destructuring-objects

  eleventyConfig.addShortcode('billBoard', function({ title, subtitle, description, page, lastmod }) {
    const { date } = page

    return /*html*/ `
    <div class="text-center pt-12 lg:pt-20 font-sans">
      <h1 class="text-3xl lg:text-6xl 2xl:text-8xl">${title}</h1>
      <h2 class="mt-6 lg:mt-8 2xl:mt-12 text-2xl lg:text-4xl 2xl:text-5xl">
          ${
            subtitle
              ? subtitle
              : /*html*/ `&nbsp;`
          }
      </h2>
      <p class="font-sans mt-8 lg:mt-12 2xl:mt-16 text-xl lg:text-2xl 2xl:text-3xl">${description}</p>
      <p class="font-sans mt-4 lg:mt-6 2xl:mt-8"><strong>${this.pub_lastmod(date)}</strong><br />
        <span class="text-base">
        ${
          lastmod !== null && lastmod !== undefined
          ? /*html*/ `Last modified ${this.pub_lastmod(lastmod)}`
          : /*html*/ `&nbsp;`
        }
        </span>
      </p>
    </div>   
    `

})

}
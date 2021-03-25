const lazyloadFile = 'lazyload_17-3-0.min.js'

module.exports = function (data) {
  return /*html*/ `
<!DOCTYPE html>
<html lang="en" class="font-body dark:bg-black">
  ${this.headTag(data)}
  <body>
    ${this.siteHeader(data)}
    ${data.content}
    ${this.siteFooter(data)}
    <script src="/assets/js/${lazyloadFile}"></script>
    <script>
      var lazyLoadInstance = new LazyLoad({
        threshold: 150,
      })
    </script>
  </body>
</html>
  `
}
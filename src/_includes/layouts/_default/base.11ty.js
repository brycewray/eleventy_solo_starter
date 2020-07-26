module.exports = function (data) {
  return `
<!DOCTYPE html>
<html lang="en" class="font-body dark:bg-black">
  ${this.headTag(data)}
  <body>
    ${this.siteHeader(data)}
    ${data.content}
    ${this.siteFooter(data)}
    <script src="/assets/js/twitterMeta.min.js" defer></script>
    <script src="/assets/js/lazyload.min.js"></script>
    <script>
      var lazyLoadInstance = new LazyLoad({
        threshold: 150,
      })
    </script>
  </body>
</html>
  `
}
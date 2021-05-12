# Eleventy starter set

This is a starter set for the [Eleventy](https://11ty.dev) [static site generator (SSG)](https://staticgen.com); its appearance is based on the appearance of my website at [brycewray.com](https://www.brycewray.com).

See the [online demo](https://eleventy-solo-starter-alpha.vercel.app/).

*This starter set uses JavaScript templating (.11ty.js). For a version that uses Nunjucks templating, see the [eleventy_solo_starter_njk repo](https://github.com/brycewray/eleventy_solo_starter_njk).*

## How to use

1. Clone this to a local repo.
2. Make appropriate changes to `/_data/metadata.json` and `_data/siteparams.json` to conform to your site’s parameters.
3. Run `npm install` to load all the dependencies in `package.json`, which includes Eleventy.
4. Run `npm run start` from your terminal app. You can then view the site in [http://localhost:3000](http://localhost:3000) on your computer.
5. Read the sample posts and their Markdown files to see how everything works.
6. Edit the content to make it your own!
7. When ready, [deploy the site](https://www.11ty.dev/docs/tutorials/#put-it-on-the-web) to your chosen host.

## What’s under the hood

- Lazy-loading of some images through use of [lazyload](https://github.com/verlok/vanilla-lazyload).
- Responsive images through the [`eleventy-img` plugin](https://www.11ty.dev/docs/plugins/image/) and an `image` shortcode.
- [PostCSS](https://postcss.org) and [Tailwind CSS](https://tailwindcss.com). As of version 2.1.0, Tailwind includes the still-in-preview **[@tailwindcss/jit](https://github.com/tailwindlabs/tailwindcss-jit) library**; read more about it in [this announcement](https://blog.tailwindcss.com/just-in-time-the-next-generation-of-tailwind-css).
- [Alpine.js](https://github.com/alpinejs/alpine) for the nav menu.
- Internal CSS in production mode, which is better for performance scores because it means one fewer [render-blocking resource](https://web.dev/render-blocking-resources/). In development mode, the CSS comes from a locally called `index.css` file.
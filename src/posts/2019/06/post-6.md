---
layout: layouts/posts/singlepost.11ty.js
tags: post
title: "Post 6 with its UNIQUE title" # Quotation marks allow colons, semicolons, etc.
subtitle: "The UNIQUE Post 6 subtitle" # Quotation marks allow colons, semicolons, etc.
description: "The UNIQUE description for Post 6." # Quotation marks allow colons, semicolons, etc.
author: Your name goes here
date: 2019-06-08T20:25:00 # This would be 8:25 PM (2025) UTC on June 8, 2019
lastmod: 2019-07-25T19:05:00 # Comment-out this line with a # if content is unchanged
featured_image: MailMate_screen_cap_1619x720.jpg # Or whatever image you want to use
featured_image_alt: Screen capture of the MailMate app # Always include an ALT tag for accessibility
featured_image_caption: "Image: Screen capture of MailMate, with its Latin-displaying “distortion mode” engaged for privacy’s sake" # Quotation marks allow colons, semicolons, etc.
---

Your opening text goes here.

## In-article heading --- it's an H2 because your title is the H1

And after another paragraph or two or three, you may want to add a subheading, which would be an H3, so it would be like the following.[^fnExample]

[^fnExample]: Also, if you want to do footnotes in Markdown, this is how it's done. There's code in the `.eleventy.js` file to handle it properly (including **not** encasing the body copy's footnote reference numbers in brackets, thus overriding what unfortunately is the typical behavior with the usual plugin for the `markdown-it` parser.)

### Subheading (H3)

Text here.

Maybe you want a code block to illustrate something. Here's one:

{% raw %}
```js

/* =========
This is some simple JavaScript, 
just so you can see how Eleventy handles 
a code block (with the help of PrismJS).
It doesn't **do** anything here, of course.
Helpful on a dev blog, eh?
========= */

var i, j
for(i = 0; i < 10; i++) {
  j = i
  console.log(j)
}

/* ========= 
When run, the above would output:

0
1
2
3
4
5
6
7
8
9
========= */

```
{% endraw %}

Closing text. That ends Post 6!
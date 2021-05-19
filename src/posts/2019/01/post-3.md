---
layout: singlepost
tags: post
title: "Post 3 with its UNIQUE title" # Quotation marks allow colons, semicolons, etc.
subtitle: "The UNIQUE Post 3 subtitle" # Quotation marks allow colons, semicolons, etc.
description: "The UNIQUE description for Post 3." # Quotation marks allow colons, semicolons, etc.
author: Your name goes here
date: 2019-01-19T09:25:00 # This would be 9:25 AM (0925) UTC on Jan. 19, 2019
lastmod: 2019-10-06T19:00:00 # Comment-out this line with a # if content is unchanged
---

Your opening text goes here.

## In-article heading --- it's an H2 because your title is the H1

And after another paragraph or two or three, you may want to add a subheading, which would be an H3, so it would be like the following.[^fnExample]

[^fnExample]: Also, if you want to do footnotes in Markdown, this is how it's done. There's code in the `.eleventy.js` file to handle it properly (including **not** encasing the body copy's footnote reference numbers in brackets, thus overriding what unfortunately is the typical behavior with the usual plugin for the `markdown-it` parser.)

### Subheading (H3)

Text here.

And here's an example of how to use the `image` shortcode (which uses the `eleventy-img` plugin):

{% image "screen-cap-from-Pippin-Williamson-s-page-builders-review_986x482.jpg", "Screen capture showing shortcodes from a WordPress page builder" %}

Closing text. That ends Post 3!
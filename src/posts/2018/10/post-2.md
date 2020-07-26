---
layout: layouts/posts/singlepostherofit.11ty.js
tags: post
title: "Post 2 with its UNIQUE title" # Quotation marks allow colons, semicolons, etc.
subtitle: "The UNIQUE Post 2 subtitle" # Quotation marks allow colons, semicolons, etc.
description: "The UNIQUE description for Post 2." # Quotation marks allow colons, semicolons, etc.
author: Your name goes here
date: 2018-10-25T07:40:00 # This would be 7:40 (0740) AM UTC on Oct. 25, 2018
lastmod: 2020-06-13T13:10:00 # Comment-out this line with a # if content is unchanged
featured_image: computer-1869236_1920x1440.jpg # Or whatever image you want to use
featured_image_alt: Backlit computer keyboard # Always include an ALT tag for accessibility
featured_image_caption: "Image: Pixabay" # Quotation marks allow colons, semicolons, etc.
---

**Note**: Want to put some note here about *why* you updated it? That's what the CSS `yellowBox` class is for, and you can easily add it in Markdown as shown in the .md file thanks to the `markdown-it-attrs` plugin.{.yellowBox}

Your opening text goes here.

## In-article heading --- it's an H2 because your title is the H1

And after another paragraph or two or three, you may want to add a subheading, which would be an H3, so it would be like the following.

### Subheading (H3)

Text here.

And here's an example of how to use the `lazypicture` shortcode in `/src/utils/lazy-picture.js`:

{% lazypicture "Early-Web-font-grfx-1-2018-10-16_1218x1296.jpg", "Image from Apple website in 1999 showing graphic elements as text" %}

Closing text. That ends Post 2!
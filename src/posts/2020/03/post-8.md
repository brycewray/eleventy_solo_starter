---
layout: layouts/posts/singlepostherofit.11ty.js
tags: post
title: "Post 8 with its UNIQUE title" # Quotation marks allow colons, semicolons, etc.
subtitle: "The UNIQUE Post 8 subtitle" # Quotation marks allow colons, semicolons, etc.
description: "The UNIQUE description for Post 8." # Quotation marks allow colons, semicolons, etc.
author: Your name goes here
date: 2020-03-10T09:50:00 # This would be 9:50 AM (0950) UTC on March 10, 2020
#lastmod: TBD # As with the other posts, use this only if the content has changed since original date
featured_image: door-bear-for-newborn-Kennedy-Beck_edit_1280x720.jpg # Or whatever image you want to use
featured_image_alt: "Hospital room “door bear” to commemorate birth of Kennedy Beck" # Always include an ALT tag for accessibility --  Quotation marks allow colons, semicolons, etc.
#featured_image_caption: # Commented-out because there was no caption for this particular featured image
---

Your opening text goes here.

## In-article heading --- it's an H2 because your title is the H1

And after another paragraph or two or three, you may want to add a subheading, which would be an H3, so it would be like the following.

### Subheading (H3)

Text here.

And here are some examples of how to use the `lazypicture` shortcode in `/src/utils/lazy-picture.js`:

{% lazypicture "Mom-and-Dad-admire-Kennedy-first-night__1008x756.jpg", "Brad and Sarah Beck (the latter is our daughter) admire their new child, Kennedy, less than an hour after her arrival" %}

Our daughter and son-in-law, Sarah and Brad, admire their new baby, less than an hour after she arrived.{.lazypicturecaption}

{% lazypicture "BW-holding-Kennedy-first-night__crop_1008x712.jpg", "Bryce Wray holds his new granddaughter, Kennedy Beck, on the night of her birth" %}

Your faithful correspondent holds his first grandchild for the first time, on the first night of her life. Enough "firsts" for you there?{.lazypicturecaption}

{% lazypicture "Kennedy-goes-home__crop_1008x1021.jpg", "Kennedy Beck, a newborn baby, rests in a car seat as she goes home for the first time" %}

Despite her slightly early arrival, Kennedy checked out just fine over the next couple of days, and Mom and Dad got to take her home when she was a bit over <span class="nobrk">forty-three hours old</span>.{.lazypicturecaption}

Closing text. That ends Post 8!
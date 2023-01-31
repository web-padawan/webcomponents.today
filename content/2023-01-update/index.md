---
tags: post
title: 2023 January Update
layout: layout
templateEngineOverride: md
eleventyNavigation:
  key: 2023 Update №1
  order: 3
---

Today it's time for the first monthly update in 2023 — and it's been quite an eventful month for Web
Components! I'm excited to share with you some highlights from the community. A few of them got way
less attention than they deserved, that's why I decided to challenge myself with publishing regular
updates. So, let's see what new for Web Components in January 2023.

### Safari TP 162

Yes, you got it right: Safari is the main news maker for Web Components this month! Meet the brand new
[Technology Preview 162](https://webkit.org/blog/13703/release-notes-for-safari-technology-preview-162/)
with a bunch of improvements, including two notable features for Web Components: form associated Custom
Elements and declarative shadow DOM support. I mentioned both in the [2022 Year in Review](/2022-review/)
blog post, happy to see the progress!

Are you wondering what does this mean in practice? This [CodePen](https://codepen.io/calebdwilliams/pen/xxJjNgr)
is quite a good demo of the new additions to the Custom Elements standard. By the way, its creator
[Caleb Williams](https://twitter.com/calebwilliams12/status/1618693139996491778) also maintains a
polyfill for `ElementInternals` which you can find under [Polyfills](/polyfills-and-shims/). And if
you are looking for an in-depth overview, check out also [Form Participation](/form-participation/)
and [Proposals](/proposals/).

### Declarative Shadow DOM

This proposal deserves its own mention, as there are even more good news. In addition to Chrome and Safari,
there is now an [update](https://github.com/mozilla/standards-positions/issues/335#issuecomment-1404996929)
from Firefox team: the position has changed from "neutral" to "positive". While adding new features
to browsers takes time, there is still hope that Shadow DOM streaming and proper SSR might become a
reality sooner than later.

By the way, Elliott Marques from the Lit team [published](https://mstdn.social/@techytacos/109779899255671612)
a small example for testing declarative shadow DOM streaming, which at the time of writing is also
available in Chrome Canary (the new implementation didn't land in Chrome stable yet). The demo is
quite small, [check it out](https://lit.dev/playground/#gist=d2540b636f7d9d420c2dd8ddd8436c81) if you
are interested to see the new attribute on the `<template>` element in action.

### Web Components Guide

Launched just recently, this [project](https://webcomponents.guide) is already invaluable for anyone
who wants to learn writing Custom Elements from scratch, without a need for any libraries or tools.
The work done by [Keith Cirkel](https://github.com/keithamus) is really impressive. The Web Components
community was definitely in need of such a detailed guide, and I was happy to update my own project
with add a bunch of links to it.

That said, this project is still in its early days, and I'm curious to observe how it evolves. Some
parts are marked as incomplete, which is a chance to contribute. I'd like to recommend a tutorial on
how to create a [Mastodon Toot Embed](https://webcomponents.guide/tutorials/mastodon-toot-embed/) by
[Kristján Oddsson](https://github.com/koddsson): it's a very well written and clear guide. Creating
such learning content for beginners is often harder than it seems.

### HTML With Superpowers

Speaking of learning content for Web Components, here's another resource worth checking out:
[HTML With Superpowers](https://htmlwithsuperpowers.netlify.app). This website is a guidebook for
the [Frontend Masters](https://twitter.com/FrontendMasters) course about Web Components, open sourced
by its creator [Dave Rupert](https://twitter.com/davatron5000/status/1611070142670331906) on January 5.
While I haven't had a chance to take that course yet, the level of detail makes me feel like it's
a good idea.

The section I like the most is Frequently Asked Questions: in my opinion, Web Components were lacking
this before. Especially, the [Accessibility](https://htmlwithsuperpowers.netlify.app/faq/accessibility.html)
part is great: first it briefly outlines the problem and then points to further reading. However, I'm
a bit biased due to the fact that [Routing](https://htmlwithsuperpowers.netlify.app/faq/routing.html)
section that recommends [Vaadin Router](https://github.com/vaadin/router): it is a project that I
used to work on in the past :)

### Shoelace 2.0 Stable

Have you heard about [Shoelace](https://shoelace.style)? It's a great library of Web Components built
by Cory LaViska. While it's not the only example of a successful one-man show, Shoelace is unique:
even React developers [like it](https://css-tricks.com/shoelace-component-frameowrk-introduction/),
and that's a bit unusual for Web Components, isn't it? Furthermore, last year we heard some huge news:
Shoelace and Cory LaViska [joined Font Awesome](https://blog.fontawesome.com/shoelace-joins-font-awesome/).

One thing that was special about Shoelace due to the past two years was its infinite beta stage. If
you remember Babel 7, then you probably understand what I'm talking about — except that Shoelace had
88 (!) beta releases. From an outsider's perspective, it's been quite a journey. If you don't trust
me, check the [Git diff](https://github.com/shoelace-style/shoelace/compare/v2.0.0-beta.1..v2.0.0)
between the first beta and the stable release.

### New Bookmarks Additions

After all the awesome news above, I'd like to also share some of my personal highlights. After a short
holidays break I continued to work on Web Components bookmarks. Notable changes that landed this month
include [navigation improvements](https://github.com/web-padawan/webcomponents.today/pull/12) and
the [Home page redesign](https://github.com/web-padawan/webcomponents.today/pull/30). To be honest,
design skills aren't among my strengths, but I always try to do my best.

On top of that, I published two new categories: the [Beginner's Guide](/beginners-guide/) with a bunch of
articles for newcomers, and the collection of [Testing Helpers](/testing-helpers/) with some utilities
that make testing Shadow DOM easier among other things. Overall, there were 32 new additions to this
website in January, including Standalone Elements, Frameworks Recipes, Talks and Recordings, and more.

### Closing Words

That's a wrap for Web Components in January 2023. It's been a great start of the year, and of course
we can't be sure that the next update will be equally awesome. Nevertheless, I really hope that we'll
still have some good news around this topic in the upcoming months. If you are working on something
that might deserve a mention next time, let's get in touch.

Thank you for reading! I hope you like the idea of this project and the monthly update. If so, please
[give it a star](https://github.com/web-padawan/webcomponents.today/stargazers) on GitHub. Also,
contributions are always welcome and super simple: after all, this is just a static website built with
[Eleventy 2.0 beta](https://github.com/web-padawan/webcomponents.today/pull/23)). My goal is to make
it a great place for anyone passionate about Web Components, so improvement ideas are appreciated.

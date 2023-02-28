---
tags: post
title: 2023 February Update
layout: layout
templateEngineOverride: md
eleventyNavigation:
  key: 2023 Update №2
  order: 4
---

The second monthly update in 2023 is not as fancy as the [previous one](/2023-01-update/) — if you
haven't seen that one yet, do check it out! Today I'm really pleased to share with you a follow-up
on some topics covered earlier. On top of that, there have been quite a few other positive news and
discussions around Web Components lately. My today's post is a just a brief overview.

### Safari 16.4 beta

[Safari 16.4 beta](https://developer.apple.com/documentation/safari-release-notes/safari-16_4-release-notes)
is now available for downloading on supported platforms. Feature wise this release is really great,
even though it isn't specifically about Web Components, but the web platform in general, including
HTML, CSS, JavaScript, forms, and more. Two great features have been included to this beta release,
alongside with official introduction on WebKit blog:

- [Form Associated Custom Elements](https://webkit.org/blog/13711/elementinternals-and-form-associated-custom-elements/)
- [Declarative Shadow DOM](https://webkit.org/blog/13851/declarative-shadow-dom/)

Also, Safari 16.4 beta comes with the [Imperative Slot API](https://github.com/whatwg/html/pull/6561)
recently added to the [HTML Living Standard](https://html.spec.whatwg.org/multipage/scripting.html#the-slot-element).
In practice this means a new `.assign()` method available on the `<slot>` element. The purpose of this
API is to make DOM composition and manipulating assigned nodes easier, especially in cases where the
`slot` attribute is not the best solution.

### Composed Selection

One of the pain points of using Shadow DOM so far has been using `getSelection()`, which behaves
differently depending on the browser engine. In case of WebKit, strong encapsulation introduces
challenges for building rich text editors that work when placing inside a shadow root. It took quite
some time for our team to figure out a [workaround](https://github.com/vaadin/quill/pull/2) that
worked reasonably well.

Based on recent discussions, it looks like there is finally an agreement around the shadow selection
API and a [corresponding draft](https://w3c.github.io/selection-api/#dom-selection-getcomposedrange)
that comes with `getComposedRanges()` method being added to the `Selection` object prototype. And it
is already [prototyped](https://github.com/WebKit/WebKit/commit/e29577b1a051a4c2cbec70904df6e2f7cf8b5102)
by the WebKit team! I'm excited to finally see this coming after more than four years since my own
[research](https://github.com/webcomponents/polyfills/issues/66#issuecomment-427066346) on this topic.

### Interop 2023

At this point, you might be wondering about such a notable progress around Web Components. While some
groundwork has been prepared over the past few years, there's actually a good reason. In case you
missed it, there's an ongoing project called [Interop 2023](https://github.com/orgs/web-platform-tests/projects/2)
aiming to help developers build a better web by providing new APIs, polishing existing features and
fixing bugs.

Speaking about Web Components, the table linked above includes quite a few focus areas marked as
accepted. Check out [Custom Elements](https://github.com/web-platform-tests/interop/issues/231) and
[Shadow DOM](https://github.com/web-platform-tests/interop/issues/230) related tickets for more detail.
One notable exception is [Customized Built'in Elements](https://github.com/web-platform-tests/interop/issues/234)
API, already added to the standard and covered with Web Platform tests, but lacking agreement
despite being [actively discussed](https://github.com/WebKit/standards-positions/issues/97).

### React and Custom Elements

As some of you know, React has its own architectural decisions related to handling DOM. As a result,
it [doesn't play well](https://custom-elements-everywhere.com/#react) with Custom Elements API, more
specifically custom events and passing non-primitive data. If you'd like to learn more, please check
out [Frameworks Recipes](/frameworks-recipes/): these problems are quite well described by engineers
who have real world React experience.

In React 18, there is already an internal logic intended to partially address these issues. Up until
it was behind the flag without any ETA. But now there is a chance that this will actually land in a
future release, according to the [comment](https://github.com/facebook/react/issues/11347#issuecomment-1438789227)
by Dan Abramov. This is huge for the Web Components community, and especially for companies using
both React and Web Components.

### Closing Words

There are not so much to add on my behalf this month. Because of various personal reasons, I wasn't
able to spend enough time maintaining this project and adding new resources. However, by the end of
the month I managed to put together a few useful additions. In particular, the new [API Design](/api-design/)
section provides decent guides on advanced topics that might not be so obvious.

Same as before, I appreciate any feedback and suggestions regarding content, as well as any other ideas.
Your [stars](https://github.com/web-padawan/webcomponents.today/stargazers) on GitHub are also welcome,
and any help with spreading the word about Web Components bookmarks keeps me motivated. One last thing:
the project is now using [Eleventy 2.0](https://github.com/web-padawan/webcomponents.today/pull/36)
stable and it works like a charm. Feel free to fork and contribute!

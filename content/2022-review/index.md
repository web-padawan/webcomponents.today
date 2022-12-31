---
tags: post
title: 2022 in Review
layout: layout
templateEngineOverride: md
---

Today marks one month since this project's launch! I'm incredibly proud to be able to share it with
you. Despite the russian missile strikes, including the one on New Year's Eve, during the major power
outages and rolling blackouts in my city, I managed to keep this website updated since December 1 up
until the Christmas day. The [#WebComponentsAdvent](https://fosstodon.org/tags/WebComponentsAdvent)
turned out to be quite a challenge though.

After taking a short break, I'm fully committed to moving this project forward next year. Stay tuned
for regular updates with new awesome content, as I already have quite a few items on my backlog! I'm
also planning to publish blog posts on a monthly basis. And in the meantime, check out a brief recap
of notable Web Components improvements and fixes that landed in the browsers this year.

- [**Firefox 96**](https://developer.mozilla.org/docs/Mozilla/Firefox/Releases/96) landed on January 11
added the WebDriver:GetElementShadowRoot command to retrieve the shadow root (open or closed) hosted
by a given element.
- [**Firefox 101**](https://developer.mozilla.org/docs/Mozilla/Firefox/Releases/101) released on May 31
enabled support for constructable stylesheets. After long discussions on the API shape, this proposal
finally reached the consensus.
- **WebKit** added support for ElementInternals interface — a great [contribution](https://github.com/WebKit/WebKit/pull/2690)
by Alexey Shvayka. This API is a foundation for a few [features](/proposals-and-drafts/), including
form associated Custom Elements.
- **WebKit** fixed a bunch of issues related to CSS selectors like `:host()`, `:focus`, `:focus-within`,
and `:lang` when used with Shadow DOM in [Safari TP 150](https://webkit.org/blog/13066/release-notes-for-safari-technology-preview-150/).
- **WebKit** added support for “Get Element Shadow Root”, “Find Element From Shadow Root”, and “Find
Elements From Shadow Root” commands in [Safari TP 151](https://webkit.org/blog/13093/release-notes-for-safari-technology-preview-151/).
- **WebKit** updated Shadow DOM focusing to the latest spec, including some improvements to `delegatesFocus`
mechanism. Related [change](https://github.com/WebKit/WebKit/pull/2828) also landed in Safari TP 151.
- **WebKit** engineer Ryosuke Niwa [prototyped](https://github.com/WebKit/WebKit/pull/4693) support
for declarative Shadow DOM. This resulted in a new discussion and some updates to the proposal by
Mason Freed from Google.
- **WebKit** implemented [ARIA id-ref reflection for ElementInternals](https://github.com/WebKit/WebKit/pull/4452).
This change in [Safari TP 156](https://webkit.org/blog/13394/release-notes-for-safari-technology-preview-156/)
is an important part of the Accessibility Object Model (AOM) proposal.
- **WebKit** [enabled](https://github.com/WebKit/WebKit/pull/4903) support for constructable stylesheet
objects, including `adoptedStyleSheets`. This was a yet another Web Components improvement that landed
in Safari TP 156.
- **Chrome** published [intent to prototype](https://groups.google.com/a/chromium.org/g/blink-dev/c/Ovz-6Dte-qA/m/ABaUFnt3CQAJ)
streaming declarative shadow DOM. This will introduce differences compared to the original implementation
added in Chrome 90.
- **WebKit** has a [PR by Alexey Shvayka](https://github.com/WebKit/WebKit/pull/4988) to implement
form associated Custom Elements currently in review. This feature might land in Safari Technology
Preview early next year.
- **WebKit** also has a [PR by Ryosuke Niwa](https://github.com/WebKit/WebKit/pull/7798) to enable
declarative shadow DOM by default. At the time of writing this PR is also in review, hopefully it
will be merged soon.
- **Firefox** expressed interest in declarative Shadow DOM proposal too. Henri Sivonen from the Gecko
team [commented](https://github.com/whatwg/html/pull/5465) about some plans to take a closer look
after the holidays.

That's a wrap for Web Components in 2022 — and in my opinion, it has been quite a productive year for
browser vendors and standards advancement. I'm really excited about the progress on declarative shadow
DOM, and constructable stylesheets getting close to stable. In my opinion, both specs are very valuable
additions to the set of Web Components standards.

Finally, I want to say thank you to everyone who helped to spread the word about this project and to
boost my posts on Mastodon and Twitter. Staying focused and getting this website done became my own
recipe to relieve anxiety and stress from the russian war against my country. Happy New Year to everyone
in Ukraine and to all our supporters! Please [stand with Ukraine](https://stand-with-ukraine.pp.ua) in 2023.

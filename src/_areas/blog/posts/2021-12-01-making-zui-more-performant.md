---
layout: blog
type: blogPost
title: Making ZUI more performant
description: Reducing the bloat of ZUI to improve load times for your apps
date: 2021-12-10T01:46:29.942Z
hideToc: false
tags:
  - Engineering
  - Web
---
## Origin of "the bundle"

Anecdote time!

Back in March 2019, we released our [first iteration of ZUI 4 components](https://gitlab.com/zywave/devkit/zui/zui/-/tags/@zywave%2Fzui-components-all@4.0.0). We delivered our code as standard* ES modules, which had two major issues: 

1. Not all browsers that Zywave supported at the time could consume ES modules (looking at you, Internet Explorer 11)
2. Our import statements were in the form of "bare import specifiers" (e.g. `import moment from "moment";`), which are not valid URIs or paths.

These two problems meant that for teams to consume ZUI, no matter what technology they were using, they had to use some build tooling that could transform these modules into things that could work in the browsers they supported. Typically, this would result in some very janky webpack or rollup code that most teams might not have understood (if you've ever tried debugging a bad webpack config file, you know what I mean).

As a result of the build tooling pain, the ZUI project took over the hard work for teams. And thus [@zywave/zui-bundle](https://www.npmjs.com/package/@zywave/zui-bundle/v/4.0.2) was born in June 2019.

Fast forward a little bit, and the browser landscape has changed significantly:
- All browsers Zywave supports not only support [static imports](https://caniuse.com/mdn-javascript_statements_import), but also [dynamic imports](https://caniuse.com/es6-module-dynamic-import).
- We ship an evergreen version of ZUI to all teams via npm dist-tags (e.g. [@latest](https://cdn.zywave.com/@zywave/zui-bundle@latest)). 
- [We don't support Internet Explorer 11](https://support.zywave.com/s/article/Zywave-browser-recommendations)!

## The "bundle problem"
The bundle has undoubtedly been a very successful addition to our toolkit. However, the unfortunate bit here is that all of the history has forced us to support an ever-growing, bloated bundle (as of this post, ~500kB) that might include code that a team doesn't need. Want just a button? Too bad, you get the whole kitchen sink!

"Is 500kB really that bad?", you might ask.  

Yes. That 500kB is required to completely load before your application can properly render, as ZUI contains a good portion of your application's render. As we fold all applications under the "One Zywave" umbrella, jarring load times as you go from one application to another to access different features really has a noticeable negative impact on your users. And ZUI doesn't want to be in the way at all.

## The "bundle solution"
More bundles!

But seriously, more, but smaller bundles.

We intend to ship two "core" bundles:
- Form controls
  - These represent all of the ZUI components that likely will be used in the creation of a form (one of the most common page functions you'll see at Zywave). 
  - This includes components like checkboxes, inputs, etc.
- App components
  - These represent all of the ZUI components that are required for [Zywave Shell](https://booster.zywave.dev/application-framework/components/shell/) to render
  - This includes components like icons, shell, logo, etc.


All other components (wells, notifiers, dialogs) are available à la carte, via a new components directory in the bundle package (e.g. zui-bundle/dist/components/dialog.js).

We believe this approach is a reasonable compromise behind the developer experience of simple installs and end-user experience with more performant page loads.

We intend to monitor utilization, and if we see other ways to offer small bundles that satisfy common scenarios, we'll definitely address those.
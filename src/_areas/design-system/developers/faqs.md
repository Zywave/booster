---
layout: documentation
title: FAQs
subtitle: Busting common myths and lore about our design system.
---

## General

### What does "ZUI" stand for?

ZUI is an acronym that stands for <bold>Z</bold>ywave <bold>U</bold>ser <bold>I</bold>nterface. It's the standardization of the look and feel of the entire Zywave suite, across all Clouds. Its purpose is to enforce consistency, improve efficiency, and help design our brand.

### I hear "ZAPI" sometimes. What is that?

ZAPI is another acronym that stands for <bold>Z</bold>ywave <bold>API</bold> Toolkit. It is a series of components&mdash;driven by APIs&mdash;that enable building applications faster, often by using ZUI under the hood.

For example: "ZUI Shell" vs "Zywave/ZAPI Shell".

ZUI Shell is our standard around how the entire shell should look and behave, but the data underlying it is completely left out. For example, a 3rd party could build a Zywave-looking application, with their own navigation structure and user info component.

Zywave/ZAPI Shell is built with ZUI Shell and our own public APIs to enforce not just the consistency of look and feel, but also the actual data underlying the shell (e.g., Universal Navigation).

The goal of ZAPI is to further enforce consistency of user experience in our products, as well as expose a more "plug-n-build" type experience for engineers to build features that belong to "One Zywave".

### What does "next" and "latest" mean in ZUI?

Unlike most Zywave systems, ZUI does not distribute on a "per environment" basis. We simply release new versions of packages of code to an ecosystem known as NPM, a common package management system for the front end community at large. **next** and **latest** in that context correlate to what we consider to be active development, unstable ZUI (next) and stable ZUI ready for production consumption (latest).

Our deployment model has been more apps to consume what we call an "unpinned version" of ZUI, so that the ZUI team can deploy new code to all of our applications, without any other deployments. That means awareness of these channels, and which are in use in production is paramount to the stability of our products.

<hr />

## Using ZUI

### I think I found an issue with ZUI. What should I do?

If you think you've found a bug in ZUI, the first thing you should do is check: is anyone else seeing this issue? We're working on making this more easy to find, but currently you can go to JIRA, and search for bugs in the ZUI project.

Next, we would really recommend you try to reproduce the issue in a framework-less way. Too often, we've found people have issues with ZUI that aren't caused by ZUI, but by the framework or technology they use and its interop with ZUI. We have a pretty awesome [CodePen template](https://codepen.io/pen?template=ZEQEQwN) that comes preloaded with the our active development ZUI (e.g. @next). CodePen is a free service that lets you quickly whip up some plain old CSS, JS, and HTML, which is great for helping to find actual ZUI issues. If you can reproduce it in a vanilla way, then it's probably us, and not you.

If you've made it this far, then you probably have a bug. There are numerous ways you can debug ZUI (although we are always open for ideas on how to improve your experience there), but the best thing we can recommend currently is to reproduce the issue in the labs. Conveniently, if you did the CodePen bit earlier, you can easily just copy/paste that into the corresponding component lab!

Finally, and hopefully not as common, there are sometimes issues that aren't with the raw ZUI Toolkit, but rather the bundle we all know and love. If you think you've encountered a bundle issue, we have some further documentation for debugging that and finding issues [here](https://gitlab.zywave.com/zui/zui/-/blob/dev/packages/misc/zui-bundle/README.md).

### I've been told to use a component or pattern in my feature, but I do not see it in the Toolkit. What should I do?

Great question! There are a number of ways you can go about this, and we are actively working on increasing the transparency of what ZUI _says_ to use versus what is _readily available_ for use in the Toolkit.

1. Let your designer/team know that that option isn't available in the Toolkit yet. Sometimes, it's as simple as a conversation to find an alternative solution that won't require you to be blocked by the Toolkit.

   - Example alternatives include:
     - Using an alternative design to solve the problem (e.g. a multipicker instead of a dropdown)
     - Using a third-party component that is acceptable (extra points if it can or already looks like a ZUI component)
   - If you opt for this direction, please still document that the need for something in the Toolkit wasn't there, so we can work to prioritize it. This can currently be done in the form of JIRA Ideas, although we are actively working to improve this, as well. If the Idea already exists, please comment on it and up the count.

1. Help us by building a prototype in your feature! As long as you go into building your component as a typical component, no matter the framework, we can always take what you've learned and convert it in the future. You get a component that looks like ZUI today, and we get a boost up when we start building the component into the Toolkit!

1. ZUI is an "open source"-like project. While there are people more dedicated to maintaining it than others, we appreciate any contribution. The fastest way to get something into the Toolkit is to add it to the Toolkit yourself! We have documentation for how to contribute in the repository and are constantly trying to make it easier to get started.
   - **Note:** While we want to highly encourage more contribution, be careful with timelines and ZUI. ZUI has a strict release cycle to try to ensure no changes cause odd side effects in our apps. A lot of people are using ZUI in ways we can't always account for, and we want to ensure as much quality as we can in our releases. We are improving this release process with more automated testing, but that's not currently our reality.

### What is the process behind deprecating a feature?

There's no "one-size fits all" solution to deprecation, unfortunately. However, there is one principle behind deprecation that we use as our north star, and it's ensuring backwards compatibility for as long as we need to. That being said, code bloat is a real problem. So, we do ask that you help us help you and maintain your features. Our process is roughly as follows:

#### For design deprecation

1. Design has identified a component or usage of a component that we should no longer recommend or use.
1. Design works with Engineering to document that deprecation and create tasks to start the deprecation process in the Toolkit.
1. Design also provides recommended alternatives for this deprecation (e.g. no longer use success wells, but you can replace those with success toasts if needed.)
1. Mark the component / feature as deprecated in a prominent way, with links to additional documentation if necessary
   - **Note** We are actively working on the best way to make this information prominent. We currently do not have a solution in our documentation.

#### For toolkit deprecation

1. Engineering will create a [GitGud](https://gitgud.zywave.com/) deprecation notice. This is intended to act as a reminder for engineers to avoid a component or feature of the Toolkit.
1. Engineering will work on the Toolkit, and decide on two different strategies:
   1. Remove the feature altogether
      - We will only do this if: we believe the utilization is low; we know this will not cause errors in our systems; we know this will not break existing designs
   1. Mark the feature as deprecated (`@deprecated` in JSDoc comments), work on backwards compatibility if there is an alternative that we can easily hook into
      - We will start a clock for when we will completely remove the deprecated feature. This should be added to the `@deprecated` JSDoc comment

### What is my part in deprecating a feature?

We really want to keep the amount of JavaScript we deliver as low as we can, and unfortunately backwards compatibility requires more code, not less. If you see a feature of yours that is using a deprecated feature, please remove it and replace it with our upgrade strategy.

If you're not an engineer, you can still help! If you notice something in your products, please let your team know so they can prioritize working on it. We work extra hard to ensure that upgrading / replacing ZUI components is as straightforward as possible.

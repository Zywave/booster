---
layout: documentation
title: FAQs
subtitle: Busting common myths and lore about our design system.
---
## General

### Who is Booster for?

Booster Zywave's set of UI standards that were built to help us create a cohesive and unified suite of products. These UI standards are meant to be used by every development team across the company. Not only does Booster house our design documentation and best practices, but it also provides support Toolkits to help teams adhere to the UI standards. 

### What is "ZUI"?

ZUI is an acronym that stands for **Z**ywave **U**ser **I**nterface. It was what we former name given to Booster. While we are in the process of renaming everything as Booster, you may see or hear the name ZUI from time to time.

### I also heard the term "ZAPI". What is that?

ZAPI is another acronym that stands for **Z**ywave **API** Toolkit. It is a series of components driven by APIs that enable building applications faster, often by using Booster under the hood.

For example: "ZUI Shell" vs "Zywave/ZAPI Shell".

ZUI Shell is our standard around how the entire shell should look and behave, but the data underlying it is completely left out. For example, a 3rd party could build a Zywave-looking application, with their own navigation structure and user info component.

Zywave/ZAPI Shell is built with ZUI Shell and our own public APIs to enforce not just the consistency of look and feel, but also the actual data underlying the shell (e.g., Universal Navigation).

The goal of ZAPI is to further enforce consistency of user experience in our products, as well as expose a more "plug-n-build" type experience for engineers to build features that belong to "One Zywave".

### What does "next" and "latest" mean?

Unlike most Zywave systems, Booster does not distribute on a "per environment" basis. We simply release new versions of packages of code to an ecosystem known as NPM, a common package management system for the front end community at large. **next** and **latest** in that context correlate to what we consider to be active development, unstable Booster (next) and stable Booster ready for production consumption (latest).

Our deployment model has been more apps to consume what we call an "unpinned version" of Booster, so that the Booster team can deploy new code to all of our applications, without any other deployments. That means awareness of these channels, and which are in use in production is paramount to the stability of our products.

### I have a question. Where should I go to find an answer?

We have started using Jira to track and answer questions. You can[ review existing questions](https://zywave-rd.atlassian.net/issues/?filter=10378) to see if anyone else has already asked the same thing. Or you can [submit a new question](https://zywave-rd.atlassian.net/jira/software/c/projects/BOOSTER/form/38) by filling out our form. These questions are also visible on the Booster Teams channel so that anyone can view and respond to them. 



<hr />

## Using Booster

### I think I found an issue with Booster. What should I do?

If you think you've found a bug in Booster, the first thing you should do is check: is anyone else seeing this issue? You can view [previously logged bugs in Jira](https://zywave-rd.atlassian.net/issues/?filter=10376) to see if something has already been mentioned about the issue you've encountered. If you're not seeing it, then we ask that you please [create a bug](https://zywave-rd.atlassian.net/jira/software/c/projects/BOOSTER/form/37). 

Next, we highly recommend you try to reproduce the issue in a framework-less way. Too often, we've found people have issues with Booster that aren't caused by Booster, but rather by the framework or technology they use and its interop with Booster. We have a pretty awesome [CodePen template](https://codepen.io/pen?template=ZEQEQwN) that comes preloaded with the our active development Booster (e.g. @next). CodePen is a free service that lets you quickly whip up some plain old CSS, JS, and HTML, which is great for helping to find actual Booster issues. If you can reproduce it in a vanilla way, then it's probably us, and not you.

If you've made it this far, then you probably have a bug. There are numerous ways you can debug Booster ***(although we are always open for ideas on how to improve your experience)***, but the best thing we can recommend currently is to reproduce the issue in the labs. Conveniently, if you did the CodePen bit earlier, you can easily just copy/paste that into the corresponding component lab!

Finally, and hopefully not as common, there are sometimes issues that aren't with the raw Booster Toolkit, but rather the bundle we all know and love. If you think you've encountered a bundle issue, we have some further documentation for debugging that and finding issues [here](https://gitlab.zywave.com/zui/zui/-/blob/dev/packages/misc/zui-bundle/README.md).

### I've been told to use a component or pattern in my feature, but I do not see it in the Toolkit. What should I do?

Great question! There are a number of ways you can go about this, and we are actively working on increasing the transparency of what Booster has documented versus what is *readily available* for use in the Toolkit.

1. Booster is an innersource project and we appreciate any contribution. The fastest way to get something into the Toolkit is to add it to the Toolkit yourself! We have documentation for how to contribute in the repository and are constantly trying to make it easier to get started.
2. Help us by building a prototype in your feature! As long as you go into building your component as a typical component, no matter the framework, we can always take what you've learned and convert it in the future. You get a component that looks like Booster today, and we get a boost up when we start building the component into the Toolkit.
3. Let your designer/team know that that option isn't available in the Toolkit yet. Sometimes, it's as simple as a conversation to find an alternative solution that won't require you to be blocked by the Toolkit

* Example alternatives include:

  * Using an alternative design to solve the problem (e.g. a multipicker instead of a dropdown)
  * Using a third-party component that is acceptable (extra points if it can or already looks like a Booster component)
* If you opt for this direction, please still document that the need for something in the Toolkit wasn't there, so we can work to prioritize it. This can currently be done in the form of JIRA Ideas, although we are actively working to improve this, as well. If the Idea already exists, please comment on it and up the count.



### What is the process behind deprecating a feature?

There's no "one-size fits all" solution to deprecation, unfortunately. However, there is one principle behind deprecation that we use as our north star, and it's ensuring backwards compatibility for as long as we need to. That being said, code bloat is a real problem. So, we do ask that you help us help you and maintain your features. Our process is roughly as follows:

#### For design deprecation

1. Design has identified a component or usage of a component that we should no longer recommend or use.
2. Design works with Engineering to document that deprecation and create tasks to start the deprecation process in the Toolkit.
3. Design also provides recommended alternatives for this deprecation (e.g. no longer use success wells, but you can replace those with success toasts if needed.)
4. Mark the component / feature as deprecated in a prominent way, with links to additional documentation if necessary

   * **Note** We are actively working on the best way to make this information prominent. We currently do not have a solution in our documentation.

#### For toolkit deprecation

1. Engineering will create a [GitGud](https://gitgud.zywave.com/) deprecation notice. This is intended to act as a reminder for engineers to avoid a component or feature of the Toolkit.
2. Engineering will work on the Toolkit, and decide on two different strategies:

   1. Remove the feature altogether

      * We will only do this if: we believe the utilization is low; we know this will not cause errors in our systems; we know this will not break existing designs
   2. Mark the feature as deprecated (`@deprecated` in JSDoc comments), work on backwards compatibility if there is an alternative that we can easily hook into

      * We will start a clock for when we will completely remove the deprecated feature. This should be added to the `@deprecated` JSDoc comment

### What is my part in deprecating a feature?

We really want to keep the amount of JavaScript we deliver as low as we can, and unfortunately backwards compatibility requires more code, not less. If you see a feature of yours that is using a deprecated feature, please remove it and replace it with our upgrade strategy.

If you're not an engineer, you can still help! If you notice something in your products, please let your team know so they can prioritize working on it. We work extra hard to ensure that upgrading / replacing ZUI components is as straightforward as possible.
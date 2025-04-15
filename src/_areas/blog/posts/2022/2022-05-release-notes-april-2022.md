---
layout: blog
type: blogPost
title: Release Notes - April 2022
description: Data is king, baby!
date: 2022-05-03T17:37:59.464Z
hideToc: false
tags:
  - Release Notes
---
This month's release is a unique one in that it's mostly focused around enabling...well, us! We know, a bit selfish, but this will enable us in future releases to prioritize work that will improve your apps; whether by removing unused components or finding opportunities to improve your workflows.

There are three goodies in this release for you, so we'll start with those.

<docs-spacer></docs-spacer>

## ZUI's newest addition, ZUI Tag!

A couple years ago, we decided to leave it up to engineers to follow design specs and code their own tags within their apps because it's "just a DIV with some colors". However, today we have several apps that have their own custom tags that are all slightly different from each other. With the increased usage of tags, this was the opportune time to create a custom web component to ensure consistency across all apps.

We have 9 tag colors, based on our Zywave color palette:

![examples of zui-tag](/images/tags-example.png)

<details><summary>Get the code</summary>

```html
<div class="container">
  <zui-tag color="red">apples</zui-tag>
  <zui-tag color="yellow">bananas</zui-tag>
  <zui-tag color="green">pears</zui-tag>
  <zui-tag color="blue">blueberries</zui-tag>
  <zui-tag color="aqua">some undiscovered aqua fruits</zui-tag>
  <zui-tag color="purple">grapes</zui-tag>
  <zui-tag color="rose">lychees</zui-tag>
  <zui-tag color="orange">oranges</zui-tag>
  <zui-tag color="gray">inedible garbage</zui-tag>
</div>
<style>
  .container {
    margin: 5rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }

  zui-tag {
    display: inline-block;
  }
</style>
```

</details>

<docs-spacer size="small"></docs-spacer>

<docs-note>Documentation for how to use these tags, such as when to use certain tag colors, is [still in the works](/design-system/components/tags/). We'll be updating this page with more in the days to come.</docs-note>

<docs-spacer></docs-spacer>

## Dialog's footer gets sticky

In March, we refactored the Dialog component to use the native `<dialog>` element under the surface. With that enhancement, we were finally able to complete a key feature to scrolling within Dialogs: sticky the footer so actions are always visible to users as they scrolled down a Dialog with lots of content. We also took the opportunity to style the scrollbar to be less intrusive by making it narrower and minimal in design. This scrollbar style can be seen throughout our components that have the possibility of scrolling, such as in the Dropdown multi-select and Dropdown select components.

![Example of a Booster Dialog with a stickied footer when the content exceeds the height of the Dialog and a scrollbar appears](/images/dialog-sticky-footer-example.gif)

There are no changes that consumers of this Dialog component need to make. Win!

<docs-spacer></docs-spacer>

## Enforcing consistent form label layout

One of the primary goals of `<zui-formfield>` is to ensure all form labels are consistently placed. During an assessment of form consistency across our apps, we found that a majority of forms have been implementing labels stacked above form fields; contrary to how we set up `<zui-formfield>`. We reassessed our guidelines and agreed it made more sense to adhere to what our apps are already doing.

![Before and after form label updates](/images/zui-formfield-updates.png)

This change shouldn't break functionality in apps, but we do encourage you to double check and make sure the design and layout of your current forms utilizing `<zui-formfield>` aren't broken.

<docs-spacer></docs-spacer>

## Tracking utilization

Continuing on our objective to gain insights to what components are being utilized, we are now beginning to track the utilization of all ZUI and ZAPI components. 

For applications that use `<zywave-analytics>`, we will be sending information to Heap for tracking the number of instances our components are on each page. We'll be using some control mechanisms to make sure we aren't too chatty and getting in the way of critical performances, and won't grab any analytics at all if on worse connection types, where a user might be using mobile data.

<docs-spacer></docs-spacer>

## Monitoring to improve bundle performance

A goal of ours in the recent months has been to attempt reducing the footprint ZUI has on the initial load times of Zywave's applications. Given that ZUI is a critical component of most features, it's unfair for us to take up as much bandwidth as we currently are with our standard bundle. As we work to decrease this footprint, we realized we needed some monitoring in place to see just how much we're affecting change in our bundle.

To start, our merge requests have been configured to present the difference in bundle size between the target branch and the source branch. We'll likely continue to enhance this and have some follow up blog posts in the future to share what we do as we believe others should do this as well.

![Example of metrics reports on GitLab merge requests](/images/zui-gitlab-metrics.png)

In addition to the metrics report, we also included a visualizer to see which modules are taking up the most space in our monorepo. This will give us a better idea of what to improve in order to minimize our bundle's footprint.

![Metrics visualizer of ZUI monorepo](/images/zui-metrics-visualizer.png)

<docs-spacer></docs-spacer>

## Full changelog

As always, if you want to see all of the activity that went into this release, feel free to [check out the milestone in GitLab](https://gitlab.com/groups/zywave/devkit/-/milestones/22#tab-issues).
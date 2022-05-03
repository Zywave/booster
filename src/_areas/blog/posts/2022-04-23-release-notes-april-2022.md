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

A couple years ago, we decided to leave it up to engineers to follow design specs and code their own tags within their apps because it's just a DIV with some colors. Today, we have several apps that have their own custom tags but when looked at all together, each app's tags are slightly different from each other. With the increased usage of tags, this was the opportune time to create a custom web component to ensure consistency across all apps.

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

<docs-note>Documentation for how to use these tags, such as when to use certain tag colors, is still in the works. Stay tuned for that!</docs-note>

<docs-spacer></docs-spacer>

## Dialog's footer gets sticky

In March, we refactored the Dialog component to use the native `<dialog>` element under the surface. With that enhancement, we were finally able to complete a key feature to scrolling within Dialogs: sticky the footer so actions are always visible to users as they scrolled down a Dialog with lots of content. We also took the opportunity to style the scrollbar to be less intrusive by making it narrower and minimal in design. This scrollbar style can be seen throughout our components that have the possibility of scrolling, such as in the Dropdown multi-select and Dropdown select components.

![Example of a Booster Dialog with a stickied footer when the content exceeds the height of the Dialog and a scrollbar appears](/images/dialog-sticky-footer-example.png)

There are no changes that consumers of this Dialog component need to make. Win!

<docs-spacer></docs-spacer>

## Enforcing consistent form label layout

One of the primary goals of `<zui-formfield>` is to ensure all form labels are consistently placed. During an assessment of form consistency across our apps, we found that a majority of them have been implementing forms with the labels stacked above form fields. We reassessed our

<docs-spacer></docs-spacer>

## Tracking utilization

Continuing on our objective to gain insights to what components are being utilized, we are now beginning to track the utilization of all ZUI and ZAPI components. 

For applications that use `<zywave-analytics>`, we will be sending information to Heap tracking number of instances of our components on each page. This will be controlled via a feature flag, as we intend to only roll this out to a subset of users initially. We additionally will only be tracking this data on devices that are connected to WiFi or Ethernet and have not indicated via their device settings to reduce data usage, as we do not want to incur penalties on our users. If you're curious how we are accomplishing this, check out the *somewhat* unstable [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API).

<docs-spacer></docs-spacer>

## Monitoring to improve bundle performance

TODO @hudson
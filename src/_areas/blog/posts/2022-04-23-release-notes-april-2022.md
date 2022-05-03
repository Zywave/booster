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

## ZUI's newest addition, ZUI Tag!

A couple years ago, we decided to leave it up to developers to follow design specs and code their own tags within their apps because it's just a DIV with some colors. Today, we have several apps that have their own custom tags but when looked at all together, each app's tags were slightly different from each other. With the increased usage of tags, this was the opportune time to 

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

## Dialog's footer gets sticky

TODO @xiong

## Enforcing consistent form label layout

TODO @hudson

## Tracking utilization

Continuing on our objective to gain insights to what components are being utilized, we are now beginning to track the utilization of all ZUI and ZAPI components. 

For applications that use `<zywave-analytics>`, we will be sending information to Heap tracking number of instances of our components on each page. This will be controlled via a feature flag, as we intend to only roll this out to a subset of users initially. We additionally will only be tracking this data on devices that are connected to WiFi or Ethernet and have not indicated via their device settings to reduce data usage, as we do not want to incur penalties on our users. If you're curious how we are accomplishing this, check out the _somewhat_ unstable [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API).

## Monitoring to improve bundle performance

TODO @hudson
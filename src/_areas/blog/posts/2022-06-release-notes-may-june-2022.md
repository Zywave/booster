---
layout: blog
type: blogPost
title: Release Notes - May / June 2022
description: "!!! ADD A DESCRIPTION L8R"
date: 2022-06-30T01:00:00.000Z
hideToc: false
tags:
  - Release Notes
---
!!! Add intro paragraph here...

<docs-spacer></docs-spacer>

## Improved component utilization tracking

![Footprints in the snow](/images/footprint-in-snow2.jpg)

Shell API was enhanced to allow for Heap analytics tracking of component utilization for specific users and domains that were not supported. Previously ZUI/ZAPI component instances weren't able to track for users who were either:

1. not logged in using Zywave's authentication
2. on domain that wasn't approved as an "allowed source" 

With this release we are now able to collect data from these contexts with apps using `<zywave-analytics>`.

<docs-spacer></docs-spacer>

## Now you can programatically clear options in `zui-select-dropdown`'s

![An empty room](/images/empty-room.jpg)

A new method allows consumers to clear their users selected options in dropdowns:

```typescript
const ZuiSelectDropdown = document.querySelector('zui-select-dropdown');
ZuiSelectDropdown.clear();
```

<docs-spacer></docs-spacer>

## Polymer's bags are packed, departing soon

![Luggage at the airport](/images/airport-luggage.jpg)

Next release will hopefully be the farewell to ZUI's current dependency on Polymer. It is a heavy weight for what it currently provides.

Efforts this sprint were made to:

1. rewrite `zui-tabs` independent of any third party library, looking to pre-release this in early July to allow ample testing time
2. conversations and plans were made with teams consuming `zui-pages`, to refactor codebases to sever ties with this component; the updates are quite easy and painless

<docs-spacer></docs-spacer>

## More ZUI form controls

Say hello to the ZUI toolkit's latest component: `zui-textarea`. The choice to create this component versus enhancing our existing input component to handle `zui-input type="textarea"` was driven by how browsers define these elements, i.e. `textarea` and `input` respectively. This component is to be used for multi-line text entries.

![zui-textarea demo example](/images/zui-textarea.jpg)

<docs-spacer></docs-spacer>

## Full changelog

As always, if you want to see all of the activity that went into this release, feel free to [check out the milestone in GitLab](https://gitlab.com/groups/zywave/devkit/-/milestones/23#tab-issues).
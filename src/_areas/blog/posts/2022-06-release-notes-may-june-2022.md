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

## Now you can programmatically clear options in `zui-select-dropdown`'s

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

## Shelling out more code examples

To better assist consumers of `zui-shell`, we've hashed out several more robust code examples to help people relying on Booster to get the most out of ZUI! The updated demo's include more thoroughly setup samples with a strong consideration for all the sub components and variants that exist to customize the look, feel and function of shell.

Check out the:  [](https://booster.zywave.dev/design-system/components/shell/?tab=demos)<a href="<https://booster.zywave.dev/design-system/components/shell/?tab=demos>">updated Shell demos tab</a>

<docs-spacer></docs-spacer>

## Going on Safari with `zui-dialog`

Zywave's stance on support for Safari is a bit of a gray area but this sprint we've worked to fix some presentational bugs with `zui-dialog` in Safari:

1. it was not horizontally centering dialogs, some small visual enhancements were made to *better* the look in Safari although it still isn't perfect

2. in Safari 14 or <, the backdrop color wasn't applying correctly

**Pre update ugliness:**

![Ugly Safari zui-dialog pre fix](/images/dialog-safari-broken.jpg)

<docs-spacer></docs-spacer>

**Post updated enhanced beauty:**

*Mobile fixed*

![Safari zui-dialog mobile beautified](/images/dialog-safari-mobile.png)



*Desktop fixed*

![Safari zui-dialog desktop beautified](/images/dialog-safari-desktop.jpg)

<docs-spacer></docs-spacer>

## `Zywave-shell app-name enhancement`

Now `zywave-shell` if it isn't given an `app-name` value it will not render this piece, effectively making the "app bar" colorized portion of `zui-shell-topbar` a thin stripe. However, when an `app-name` value is provided the "app bar" will grow in size to accommodate the text.

**App bar with no `app-name`:**

![zywave-shell with no app-name value](/images/zywave-shell-no-app-name.jpg)

<docs-spacer></docs-spacer>

**App bar with an `app-name`:**

![zywave-shell with app-name value set](/images/zywave-shell-w-app-name.jpg)

<docs-spacer></docs-spacer>

## Full changelog

As always, if you want to see all of the activity that went into this release, feel free to [check out the milestone in GitLab](https://gitlab.com/groups/zywave/devkit/-/milestones/23#tab-issues).
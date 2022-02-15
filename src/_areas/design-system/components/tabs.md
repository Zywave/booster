---
api: https://cdn.zywave.com/@zywave/zui-tabs@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-tabs@next/docs/demo.html
mainComponentName: zui-tabs
includedElements: []
title: Tabs
subtitle: Provide the user a way of viewing a subset of the information in a given section of content.
---

## Best practices

- Tabs provide the user a way of viewing a subset of the information in a given section of content.
- Tabs can be used to display alternate views of the same content.
- Tabs can break up a long workflow or page of information into separate buckets.
- Tab labels should generally be short and sweet—one to two words—and parallel in nature.
- Tabs can be used as a form of tertiary navigation when necessary.

---

## States

Tabs have three states—selected, unselected, and hover. When a tab is selected, the bar slides over to the selected tab.

<Grid>
<GridCol col="span-3">

**Selected**

- Font weight: bold
- Font color: ZUI Blue 500
- Bar color: ZUI Blue 500

**Unselected**

- Font weight: regular
- Font color: ZUI Gray 700

**Hover**

- Font weight: regular
- Font color: ZUI Gray 700
- Bar color: ZUI Gray 200

</GridCol>
<GridCol col="span-9">
<Spacer/>

![Tab states image](/images/components/tabs/tab_States.svg)

</GridCol>
</Grid>

---

## Sizing and spacing

The width of a tab depends on the number of characters in the tab label, so try to keep the labels no more than one or two words long.

![sizing and spacing](/images/components/tabs/tab_Spacing.svg)

Tab size: tab label + 20px padding on all sides

Bar width: length of the text + padding  
Bar height: 4px

---

## Behavior and interaction

Tabs are responsive to the screen size. If there isn't enough horizontal room for all of the tabs to appear on the screen, right and left arrows appear so the user can scroll horizontally through the available tabs.

It is recommended to try and avoid the need for horizontal scrolling on desktop screen sizes.

<Grid>
<GridCol col="span-6">

![tabs right scroll](/images/components/tabs/right_Scroll.svg)

</GridCol>
<GridCol col="span-6">

![right left scroll](/images/components/tabs/right_Left_Scroll.svg)

</GridCol>
</Grid>

<Spacer size="small" />

When navigating to a page that contains tabs, the first available tab should be selected.

When a user hovers over a tab the gray bar appears below the label text.
When a user has selected a tab a blue bar appears below the label text and the label text becomes ZUI blue 500 and bold.

On click, the "burst" animation will appear from the position on the tab that the user clicked. The burst will use the color of the app bar.

---

## Types of tabs

There are a variety of different ways tabs can appear based on the page layout you are using.

<Spacer size="small" />

**Full-width tabs, full width-content**

![full width tabs](/images/components/tabs/full-width_White.svg)

Both the tabs and the content stretch the full-width of the page. These tabs can be used on both page layouts with white or gray backgrounds. For more information on page width, [view the guidelines for content area](/design-system/components/shell?tab=usage)

<Spacer size="small" />

**Fixed width tabs, fixed width content**

![fixed width tabs](/images/components/tabs/fixed-width_White.svg)

Both the tabs and content can adhere to a fixed-width page layout. These tabs can be used on both white or gray background layouts. For more information on fixed-width layouts [view the content area guidelines](/design-system/components/shell?tab=usage)

<Spacer size="small" />

**Gray background, tabs with card**

![tabs with card](/images/components/tabs/with_Card.svg)

On layouts that use a gray background, tabs can appear with a card. The tabs will be just above the card and the contents within the card are associated with the selected tab.  
This should be used when the contents are text-based to enhance readability or to show separation between the items within the tabbed section and other elements on the page.

<Spacer size="small" />

**Gray background, tabs without card**

![tabs without card](/images/components/tabs/without_Card.svg)

If the contents within the tabs do not contain large amounts of text and there are no other elements on the page not contained within the tabs, then use the gray background with no card.
This will increase contrast so elements like input fields will stand out more against the background.

<Spacer size="small" />

**Full-width tabs, fixed width content**

![full-width tabs and fixed width content](/images/components/tabs/tab_Navigation.svg)

Tabs can stretch the full width of the page with their contents adhering to a fixed-width. This is a great option when using tabs as a tertiary level of navigation.

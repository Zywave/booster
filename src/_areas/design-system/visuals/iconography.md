---
layout: documentation
title: Iconography
subtitle: null
---
## Icon Overview

Icons are one half of our visual library within ZUI. Icons can be broken up into two main categories: Navigation and System.

<Spacer size="small"/>

## Navigation Icons

Navigation icons provide our users with an easily recognizable visual for parent-level items within the Sidenav or Topbar. Combined with their text labels, they will speed up recognition and processing of the link text. 

<!--StartFragment-->

### Principles

#### **Bold over basic**

Our nav icons are meant to stand out. Since they will always be paired with their descriptive text in the navigation, focus on icons that make a significant statement and are more unique than system icons.

#### **Modern over mature**

Nav icon design should follow more modern patterns. Focus on current design trends including rounded corner and a sense of delight.

#### **Balance over biased**

Nav icon design should have an equitable balance between being professional and playful. Focus on be professional but with delight.

#### **Clarity over consistency**

The guides are flexible when necessary to best represent the metaphor or parts of it. Use your best judgement as a designer.

#### **Style**

* visually interesting but professional
* more unique than system icons

## Anatomy

![Nav icons - anatomy](/images/anatomy-navicon.png)

1. **Bounding area**: 24x24px
2. **Stroke weight**: 1px
3. **Counter fill:** 20% tint of stroke color
4. **Stroke cap:** rounded
5. **Angles:** increments of 45 degrees



![Nav icons - grid](/images/navicon-keyline-grid.png)

Insert description.



## Best Practices

</docs-spacer>

### S﻿ample title #1

Insert description.

<docs-grid columns="2">

<div>

![](/images/do-1.png)

<docs-do>
Insert description.


</docs-do>

</div>

<div>

![Avoid using icons that are not left chevrons, such as forward slash "/", dash "-", and etc.](/images/navicon-don-t-1.png)

<docs-do-not>
Insert description.


</docs-do-not>

</div>

</docs-grid>

<docs-spacer>

</docs-spacer>

### S﻿ample title #2

Insert description.

<docs-grid columns="2">

<div>

![](/images/do-2.png)

<docs-do>
Insert description.


</docs-do>

</div>

<div>

![Avoid using icons that are not left chevrons, such as forward slash "/", dash "-", and etc.](/images/navicon-don-t-2.png)

<docs-do-not>
Insert description.


</docs-do-not>

</div>

</docs-grid>

<docs-spacer>

</docs-spacer>

### S﻿ample title #3

Insert description.

<docs-grid columns="2">

<div>

![](/images/do-3.png)

<docs-do>


Insert description.


</docs-do>

</div>

<div>

![Avoid using icons that are not left chevrons, such as forward slash "/", dash "-", and etc.](/images/navicon-don-t-3.png)

<docs-do-not>
Insert description.


</docs-do-not>

</div>

</docs-grid>

<docs-spacer>

</docs-spacer>

<!--EndFragment-->

- - -

## System Icons

Our system icons are a set of line icons that can be used throughout the UI to draw more attention to a specific element or action. Typically our system icons are used to the left of the text label within buttons to help draw more attention to them. Or, if the icon is easily identifiable, the icon can be used alone within a button in order to save space.

### File system icons

All file system icons have a default color to help users make connections with other, non-Zywave systems. Grayscale is available for edge case scenarios, and should be used rarely.

### System icon usage guidelines

System icons can be used a few different ways within our product:

1. Alongside content to add emphasis and visual interest
2. Within buttons, either independently or with supporting text
3. As a status/type indicator
4. Independently as an easily identifiable replacement for text when space is limited

<Spacer size="small"/>

### System icon color guidelines

In the toolkit, our icons are set to inherit the text color (ZUI Gray 800), and typically when used as a visual element alongside text they should remain that color. When an icon is used within a button, it should adopt the color of the text in the button (Blue 500 or white, and in cases of destructive actions Red 500). However, there are some cases where different colors can be applied to an icon to add additional meaning, even if the icon is not clickable.

<center>

![system icon colors](/images/foundations/icons/Table_icon_button.svg)

</center>
<Spacer size="small"/>

### Status indicator icons

Colored status indicator icons can be used to visually notify the user when an action is successful, unsuccessful, or unavailable. Our status indicator icons should adopt ZUI Green 500 (success) and ZUI Red 500 (backslash and failure).

<Grid>

<GridCol col="span-6">
<center>

![Status Indicator Do](/images/foundations/icons/Status_do.svg)

</center>
<Do />

  </GridCol>

  <GridCol col="span-6">
  <center>

![Status Indicator Do Not](/images/foundations/icons/Status_do-not.svg)

</center>
<DoNot />

</GridCol>
</Grid>

<Spacer size="small"/>

### Type indicator icons

Our message delivery systems can use colored icons to convey the type of message being delivered. For example warning icons can be Yellow 500, error icons can be Red 500, informative icons can be Blue 500, and success icons can be Green 500.

<center>

![Messaging type icons](/images/foundations/icons/Messaging_type.svg)

</center>
<Spacer size="small"/>

### Interactive icons

Aside from icon buttons, there are a few instances that are clickable or on hover will trigger a Tooltip or Popover. These icons should be ZUI Blue 500 in order to indicate that they are interactive and draw more attention to them. Typically these icons are represented by our help icon or our info circle icon.

<center>

![interactive icons](/images/foundations/icons/Interactive.svg)

</center>
<Spacer size="small"/>

### Close or dismiss icons

The zui-close icon is used to signify when a component can be closed or dismissed. Depending on where it is being used it will either be ZUI Gray 800 or white. It is used in dialogs, dismissible wells, notifiers, and popovers like the ones shown below.

<center>

![close icons](/images/foundations/icons/Dismiss.svg)

</center>
<Spacer size="small"/>

### Remove or delete icons

There are two icons that may be used to signify something that can be removed/deleted: zui-delete and zui-remove.\
The zui-delete icon (trash can) should be used sparingly and is often associated with a more permanent delete. We recommend using this in situations where there is only one delete action on the page. It appears most often alongside text within a button, but it can also be used alone within an icon button. This icons should be ZUI Red 500 to indicate a destructive action when clicked, and should never be ZUI Gray 800 when used in this context.\
The zui-remove (X) icon is used more frequently and can indicate the ability to remove or permanently delete something. Zui-remove is the preferred icon when there is one or more delete/remove action on the page. For example, it is often seen in tables to delete a row or to remove filters and selections in a dropdown. Consider using ZUI Red 500 to indicate a destructive action when clicked.

<center>

![delete icons](/images/foundations/icons/Remove_delete.svg)

</center>
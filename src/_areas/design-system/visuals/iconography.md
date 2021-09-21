---
layout: documentation
title: Iconography
subtitle:
---

## Icon Overview

Icons are one half of our visual library within ZUI. Icons can be broken up into two main categories: Navigation and System.

<Spacer size="small"/>

## Navigation Icons

Navigation icons provide our users with an easily recognizable visual for parent-level items within the Sidenav or Topbar. Combined with their text labels, they will speed up recognition and processing of the link text. Navigation icons are especially important when the user has collapsed the Sidenav as they are the only item immediately visible to the user.

Our Navigation icons fit into two groups: canonized and generic. Most of our icons are canonized and have a consistent meaning. Any time a user sees a canonized icon they should know exactly what page they will be taken to. On the contrary, when a generic icon is used, the page a user is taken to may differ slightly based on the product they are accessing it from.

### Canonized icons

Canonized icons should never be reused to represent more than one feature or tool.

### Generic icons

Generic icons have a more general meaning and can be used to represent more than one feature or tool.

### Shell icons

These icons are used specifically in Shell's 2 core sections: topbar and sidenav. Shell icons help identify major navigational features and different user states in applications.

---

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

There are two icons that may be used to signify something that can be removed/deleted: zui-delete and zui-remove.  
The zui-delete icon (trash can) should be used sparingly and is often associated with a more permanent delete. We recommend using this in situations where there is only one delete action on the page. It appears most often alongside text within a button, but it can also be used alone within an icon button. This icons should be ZUI Red 500 to indicate a destructive action when clicked, and should never be ZUI Gray 800 when used in this context.  
The zui-remove (X) icon is used more frequently and can indicate the ability to remove or permanently delete something. Zui-remove is the preferred icon when there is one or more delete/remove action on the page. For example, it is often seen in tables to delete a row or to remove filters and selections in a dropdown. Consider using ZUI Red 500 to indicate a destructive action when clicked.

<center>

![delete icons](/images/foundations/icons/Remove_delete.svg)

</center>

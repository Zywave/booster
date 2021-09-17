---
api: https://cdn.zywave.com/@zywave/zui-dialog@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-dialog@next/demo/index.html
mainComponentName: zui-dialog
includedElements: []
title: Dialogs
subtitle: Display a message or content on a layer above the current page.
---

## Introduction

Dialogs are used to display a message or content on a layer above the current page. Content inside a dialog can vary greatly. Usually, a dialog is centered around a specific action that a user must take. Saving a setting or a permanent delete are examples of when dialogs are useful.

Best practice is to avoid including forms within a dialog.

---

## Anatomy

<br>

![Dialog Anatomy](images/components/dialogs/dialog_Anatomy.svg)

<br>

### Title

H1 title should not span more than 1 line.

<br><br>

### Conent area

Content area should be a minimum of 120px tall.

Content area width of 415 on SMALL dialogs, 615 on STANDARD dialogs, and 815 on LARGE dialogs.

![Dialog Content Area](images/components/dialogs/dialog_Minimum_Height.svg)

<br><br>

### Actions area

1. **Primary action**  
   Primary actions are right aligned at the bottom of the dialog 30px below the content area.  
   The primary action should always appear on the far right.

2. **Secondary actions**  
   Secondary actions appear to the left of the primary action, 30px below the content area

3. **Tertiary action**  
   Tertiary actions or help text appear left aligned 30px below the content

![Dialog Actions](images/components/dialogs/dialog_Action_Areas.svg)

---

## Sizing and Spacing

<br>

**Typographic heirarchy**

Title should be H1.

Contents should follow body copy guidelines.
<br><br>

### Padding

- 36px padding around entire perimeter.
- 15px padding between Title and main content area.
- 30px padding between main content area and actions area.

![Dialog Padding](images/components/dialogs/dialog_Padding.svg)

If the dialog is taller than the viewport, 36px padding will be applied between the dialog and the viewport. If the dialog is shorter than the viewport, then it will be centered vertically.  
Dialogs will always be centered horizontally within the viewport.

---

## Variations

### Small

Commonly used to interrupt the user with messaging you need them to confirm, such as delete and loss of data if navigating to a different page.

![Small dialog](images/components/dialogs/dialog_Small.svg)
<br><br>

### Standard

Standard dialogs should be used for messages that are longer in length, such as legal jargon.

![Standard dialog](images/components/dialogs/dialog_Standard.svg)
<br><br>

### Large

Use a large dialog when there is a more functionality, like a table.

![Large dialog](images/components/dialogs/dialog_Large.svg)

---

## Interaction

### Closing a dialog

There are two ways that a dialog can be closed and the one that you choose depends on the type of content that it contains. Most dialogs will have more than one way to close them.

1. **Clicking into the darkness** - Standard functionality for closing a dialog; this is best used when the user isn't filling out any data within the dialog. Since we prefer to avoid including forms within a dialog, this functionality will be very common and will be enabled automatically when using ZUI dialog. If your dialog includes data entry please make sure you disable this functionality.

2. **Clicking a footer button** - A footer button should be provided that allows users to close the dialog, especially when clicking into the darkness has been disabled.  

<br>

### Scrolling

Best practice is to avoid the need for a dialog to scroll. When scrolling is required, the entire dialog screen will scroll. Remember the to keep 36px padding between the viewport and the dialog when it first appears to the user.

Background contents that are underneath the dark overlay will remain static while the dialog scrolls.

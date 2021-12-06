---
title: Dialogs
subtitle: Display an important message or decision in it's own window in front
  of the current page
api: https://cdn.zywave.com/@zywave/zui-dialog@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-dialog@next/demo/index.html
mainComponentName: zui-dialog
includedElements: []
---
## Usage

A Dialog interrupts the current page to display an important message or decision in a window in front of all the other content on the page. This window disables all other functionality of the current page until a required action is taken or the Dialog is dismissed. 

- - -

## Anatomy

A Dialog is made up of 3 main areas and the dark overlay that covers the remainder of the page. 

\[INSERT IMAGE]

1. **Title:** Ideally, the H1 title in a Dialog should not span more than one line. The title gives the user an understanding of the message or decision they are being presented with. 
2. **Content area:** The detailed message is contained within the content section of a Dialog. This section is a minimum of 120px tall and has varying widths for the different types of Dialogs.
3. **Footer:** The footer is where all the actions are located within a Dialog.

* Primary actions are located on the far right
* Secondary actions are to the left of the primary action
* Tertiary actions are located on the far left 

4.  **Overlay:** The dark overlay covers the remainder of the page. Clicking into the darkness is one way a user can dismiss a Dialog. 

---

## Types and states
There are 3 sizes of Dialogs, small, standard and large.

### Small Dialog
Small Dialogs have a width of 475px. They are most commonly used to interrupt the user with a short confirmation message, such as a delete confirmation or warning of data loss if navigating away from a page. 

### Standard Dialog
Standard Dialogs have a width of 675px. Standard Dialogs are used for messages that are longer in length, such as legal jargon. 

### Large Dialog
A large Dialog has a width of 875px and is often reserved for when there is more functionality that needs to be contained within, such as a table. 

---

## Behavior  

### Closing a Dialog
There are two ways that a Dialog can be closed and the recommended option depends on the type of content contained within a Dialog. Most Dialogs will have more than one way to close them. 

1. ** Clicking into the darkness:** This is standard functionality that is enabled automatically when using the Dialog component. This functionality should be disabled when a Dialog contains data entry so that accidental clicks do not result in data loss. 

2. ** Clicking a button: ** The Dialog should close after clicking on the provided actions within the footer area. Even for short messages we recommend providing the user with a "Close" button. 

<docs-spacer size="small"></docs-spacer>

### Scrolling


## Best practices

## Alternate considerations
---
title: Dialogs
subtitle: Display an important message or decision in its own window in front of
  the current page
api: https://cdn.zywave.com/@zywave/zui-dialog@latest/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-dialog@latest/docs/demo.html
mainComponentName: zui-dialog
includedElements: []
---
## Usage

A Dialog interrupts the current page to display an important message or decision in a window in front of all the other content on the page. This window disables all other functionality of the current page until a required action is taken or the Dialog is dismissed. 

![Example of a Dialog](/images/dialog_usage.svg)

- - -

## Anatomy

A Dialog is made up of 3 main areas and the dark overlay that covers the remainder of the page. 

![Dialog anatomy highlighting different areas of a Dialog](/images/dialog_anatomy.svg)

</br> 

1. **Title:** Ideally, the H1 title in a Dialog should not span more than one line. The title gives the user an understanding of the message or decision they are being presented with. 
2. **Content area:** More detailed information is contained within the content section of a Dialog. This section is a minimum of 120px tall and has varying widths for the different types of Dialogs.  
3. **Footer:** The footer is where all the actions are located within a Dialog. Optionally, the footer may remain sticky when the length of the Dialog exceeds the height of the viewport so that the available actions remain visible to the user at all times. More information on scrolling and sticky footers can be found in behavior and best practices.

   * Primary actions are located on the far right
   * Secondary actions are to the left of the primary action
   * Tertiary actions are located on the far left\
     <br>
     <docs-note>The option for the footer to remain sticky has yet to be added to the Dialog in the toolkit. You can track our progress [here](https://gitlab.com/zywave/devkit/zui/zui/-/issues/399).</docs-note>
       </br>
4. **Overlay:** The dark overlay covers the remainder of the page. Clicking into the darkness is one of the ways a user can dismiss a Dialog. 

- - -

## Layout

Dialogs should always be horizontally centered within the viewport.  

When the Dialog is shorter than the viewport it should be centered vertically. In situations where the Dialog exceeds the height of the viewport, 36px padding should be applied between the Dialog and the top of the viewport when it first appears to the user. The entire Dialog then scrolls while the content underneath remains static.

![A Dialog centered horizontally on the page with 36px of padding between it and the top of the page.](/images/dialog_layout.svg)

- - -

## Types and states

There are 3 sizes of Dialogs: small, standard and large.

### Small Dialog

Small Dialogs have a width of 475px. They are most commonly used to interrupt the user with a short confirmation message, such as a delete confirmation or warning of data loss if navigating away from a page. 

![Small dialog example](/images/dialog_small.svg)

<docs-spacer size="small"></docs-spacer>

### Standard Dialog

Standard Dialogs have a width of 675px. Standard Dialogs are used for messages that are longer in length, such as legal jargon. 

![Standard dialog example](/images/dialog_medium.svg)

<docs-spacer size="small"></docs-spacer>

### Large Dialog

A large Dialog has a width of 875px and is often reserved for when there is more functionality that needs to be contained within, such as a table. 

![Large Dialog example](/images/dialog_large.svg)

- - -

## Behavior

### Closing a Dialog

There are two ways that a Dialog can be closed and the recommended option depends on the type of content contained within a Dialog. Most Dialogs will have more than one way to close them. 

1. **Clicking into the darkness:** This is standard functionality that is enabled automatically when using the Dialog component. This functionality should be disabled when a Dialog contains data entry so that accidental clicks do not result in data loss. 
2. **Clicking a button:**  The Dialog should close after clicking on the provided actions within the footer area. Even for short messages we recommend providing the user with a "Close" button. 

<docs-spacer size="small"></docs-spacer>

### Scrolling

When the contents of a Dialog exceed the height of the viewport for the user, scrolling will be necessary. 

* The entire Dialog screen scrolls, not just the contents within. 
* The background contents remain static as the Dialog scrolls.
* 36px of padding should be applied to the top and bottom of the Dialog. 

![A Dialog whose content exceeds the height of the viewport](/images/dialog_scrolling.svg)

- - -

## Best practices

* Avoid scrolling by keeping the messages brief and limiting the functionality within the Dialog. 
* Avoid including forms in a Dialog
* Keep titles short so that they do not wrap onto more than one line. 
* Implement a sticky footer area if scrolling is necessary and the user is not likely to need to scroll to view the actions. 

![Example of a sticky footer on a Dialog](/images/dialog_fixed-footer.svg)

<docs-spacer size="small"></docs-spacer>

<docs-note>The option for the footer to remain sticky has yet to be added to the Dialog in the toolkit. You can track our progress [here](https://gitlab.com/zywave/devkit/zui/zui/-/issues/399).</docs-note>

- - -

## Alternate considerations

* Consider a separate page when the content begins to exceed the height of the viewport in order to avoid scrolling. 
* Consider using a separate page with a focused state when there are form fields.
* Consider a [Popover](/design-system/components/popovers/) or [Well](/design-system/components/wells/) for shorter messages that do not interrupt the user's workflow.
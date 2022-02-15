---
api: https://cdn.zywave.com/@zywave/zui-button@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-button@next/docs/demo.html
mainComponentName: zui-button
includedElements: ["zui-button"]
title: Buttons
subtitle: Create clickable buttons.
---

## What is a link? What is a button? - Best practices

Links and buttons are different technically, but they can look the same.

**What is a link?**  
The technical definition of a "link" `<a>` is an element that triggers a context switch. Meaning, it will take the user away from their current workflow and to a new location. For example: when we provide the users with a link to the help site, this takes them out of their current workflow and to a new location/workflow.

Typically, you will see these links appear as a text link (plain, underlined text). However, there are instances where we may prefer to have a link displayed using one of our button styles. For example, we may have a link that we want to draw more attention to. This link might be styled as a button, but would take the user to a new workflow.

**What is a button?**  
The technical definition of a "button" `<button>` is an element that keeps the user within the same context. This action will keep the user within the same workflow.

Typically, buttons will look like one of the various button styles we have listed below. In certain circumstances it may make more sense to have a button element styled to look like a text link. One great example of this is an action within a well. These actions could be defined as a link or a button depending on the circumstance, but they will always be styled to look like text regardless.

**Best practices - should it look like a button or should it look like a text link?**  
In MOST cases it should look like a text link when it appears within a body of text, and it should look like a button when it appears as an action independent of a body of text.

If you run into a situation where you are not sure, your decision should be based off the hierarchy of elements on the page. If a link element is very important and needs to stand out more, then consider styling it like a button. If a button element shouldn't be drawing attention to itself, then perhaps a text link style would be best.

---

## Anatomy

![button anatomy](/images/components/buttons/Button_anatomy.svg)

For detailed documentation on our button anatomy, view the [ZUI button design specs](https://xd.adobe.com/spec/73e1b206-1ffc-4568-5ccf-945d90c5161e-05d0/).

**Sizing and spacing**

- Button height will always be 36px, button length is determined by the length of text.
- 8px padding above and below the text
- 15px padding to left and right of text
- 10px margin between buttons  
  <br/>

**Font**

- System font, size 14px, semibold  
  <br/>

**Rounded corners**

- The corners should always be rounded to create a half-circle effect. 50px corner radius should be used.
  <br/>

---

## Style Variations

**Primary button**

![primary button](/images/components/buttons/Primary_button.svg)

- A primary button is used to call attention to the main action a user should take on the page.
- Avoid using standard buttons within tables.
- Avoid using more than 1 primary button on a page if possible.

<Spacer size="small" />

**Secondary button**

![secondary button](/images/components/buttons/Secondary_button.svg)

- A secondary button is used to represent a secondary action on a page.
- Secondary buttons can be used sparingly within tables.

<Spacer size="small" />

**Link button**

![link button](/images/components/buttons/link_Button.svg)

Link buttons can also be used to represent a secondary action on a page. At first glace these will appear as text, but the button shape will appear on hover/focus. This button shape will add extra padding around the text that isn't noticeable at first. Because of this, we recommend trying to avoid using link buttons when they are left-aligned.

<Spacer/>

**Icon button**

![icon buttons](/images/components/buttons/icon_Button.svg)

- Icon buttons can be used where text is not necessary to describe the action. The pencil icon for edit, trash can icon for delete, or printer icon for print are great examples of where an icon button would be appropriate.
- Icon buttons can appear in both primary, secondary and link button styles. Follow the guidelines for the button styles above to determine which one you should use.
- Icons should be sized to 16x16px with 10px padding around the icon to create a perfect circle.

<Spacer size="small" />

**Adding an icon to a button - when to use this option**

![icon and text buttons](/images/components/buttons/Icon_text_button.svg)

In some cases it makes sense to include an icon with your text in a button. This should be used sparingly and only where drawing some extra attention to the button is appropriate. + Add is a great example.

Icons should be sized to 16x16px and will always appear to the left of the text within the button. The margin between the icon and the text should be 10px.
15px padding should remain on the left and right side of the button.

<Spacer size="small" />

**Block-level buttons**

![block level button example](/images/components/buttons/block-level_Buttons.svg)

Block-level buttons can be used to expand to the width of it's containing element. These should be used when the containing element doesn't span the full width of the page. Block-level buttons can be used to show more visual separation between elements or draw more attention to a smaller button that may otherwise be overlooked.
The height should still remain 36px and font size should remain 14px.

<Spacer size="small" />

**Loading button**  
A loading button appears when the action does not take the user away from the current page, but the process that is kicked off prevents the user from taking additional action on the page.
Other actions that cannot be taken while the process is loading should become disabled buttons.

_IN PROGESS New design/animation coming soon!_

<Spacer size="small" />

**Text links**  
Text links, unlike link buttons, will appear as underlined text with no padding.

![text link examples](/images/components/buttons/text_Links.svg)

---

## Button States

![button states](/images/components/buttons/Button_States.svg)

**Normal**  
Normal state is the initial state of the button when the page first loads and before any action is taken.  
<br/>

**Hover**  
Hover state occurs when the user hovers over a button or link with their mouse.  
<br/>

**Focus**  
Focus state appears when the button is currently selected and awaiting action. This commonly occurs when using a keyboard to navigate.  
<br/>

**Pressed**  
Pressed state occurs when a user clicks (or hits enter on a keyboard). This state only appears briefly while the page/action is loading.  
<br/>

**Disabled**  
Disable state occurs when an action currently isn't available.
Disabled buttons should only be used when an action can be taken within the current UI to enable the button. IF no action can be taken to enable the button, then the button should be hidden instead of disabled.

We have added the CSS property pointer-events: none; to this button style that will further prevent users from clicking a disabled button.
<br/>

<Spacer size="small" />

### Blue background button states

![blue background button states](/images/components/buttons/button-blue-bkg.svg)

<Spacer size="small" />

### Dark mode button states

![dark mode button states](/images/components/buttons/button-dark-mode.svg)

---

## Button style best practices

- Try to avoid using more than one primary button per page.
- If there are 3 buttons next to each other, try to only use 2 styles (for example: 1 primary and 2 link buttons)
  Primary buttons should never be used within a table.
- The preferred button style to use within a table is the link button.

![buttons in a table](/images/components/buttons/Button_table.svg)

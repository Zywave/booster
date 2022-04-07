---
title: Radio buttons
subtitle: ""
api: https://cdn.zywave.com/@zywave/zui-radio@latest/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-radio@latest/docs/demo.html
mainComponentName: zui-radio
includedElements: []
---
## What are radio buttons?

Most commonly appearing in forms, Radio Buttons are selection controls that allow the user to make a single selection in a radio group. Unlike other selection controls, Radio Buttons display all options, so the user has a chance to decide before making a selection.

<hr>

## Usage

Radio Buttons should be used when the user must select a single option from a radio group of 10 or fewer related options. Once an option is selected, the previously selected option will be deselected.

<br>

### When to use radio buttons

Use a radio button when the user must select a single option from a list of mutually exclusive options less than 10. Meaning that a user can choose only one option, and once an option is selected, the previous option deselects.

<hr>

## Types

![Types of radio buttons](/images/type.svg)

<br>

### Standard Radio Button

Standard Radio Buttons are the most common types of Radio Buttons. They allow users to make a selection and quickly move on to the next task.

* Use when the number of options is easy for the user to process, generally fewer than 10.
* Radio buttons are small by nature, and they can be hard to click or tap. To help users make easier selections, make sure the clickable area includes both the radio button and its label.

<br>

### Inline Radio Button

Inline Radio Buttons are more prominently styled than Standard Radio Buttons. They often feature a system icon (24x24 pixels), and they’re designed to emphasize the selection being made.

<br>

### Gallery Radio Button

Gallery Radio Buttons are more prominent than both standard and inline Radio Buttons. They often feature an icon and take up a great deal of space on the page.

* Since Gallery Radio Buttons can be significantly larger in size than Standard Radio Buttons, they should generally be reserved for when that selection is the only one the user can make on that page.
* Spot illustrations are optional to use inside Gallery Radio Buttons. They are used to both emphasize the selection and reinforce the contrast between the options.

<hr>

## Anatomy

For a more detailed breakdown of spacing and sizing, *[view the design specs.](https://xd.adobe.com/view/8eb4bcb4-1a69-4f34-ad25-b9171d366435-dbe7/grid)*

![Standard radio button](/images/anatomy-standardradio.svg)

### Standard Radio Button

1. Option: the combination of a radio button and a label
2. Radio button: an input type where only one can be selected at a time in a given radio group
3. Label: a text description of the option

<br>

![Inline radio button](/images/anatomy-inlineradio.svg)

### Inline Radio Button

1. Option: the combination of a radio button and a label
2. Icon (optional): emphasizes the option and reinforces the contrast between different options
3. Label: a text description of the option

<br>

![Gallery radio button](/images/anatomy-galleryradio.svg)

### Gallery Radio Button

1. Radio button:  an input type where only one can be selected at a time in a given radio group
2. Label: a text description of the option
3. Spot illustration(optional): emphasizes the option and reinforces the contrast between different options

<hr>

## States

![standard radio buttons states](/images/radio_states_standard.svg)

Standard Radio Button states

![inline radio buttons states](/images/inlineradio_states.svg)

Inline Radio Button states

![Gallery Radio Buttons states](/images/gallery-radio-button-states-no-illustrations.svg)

Gallery Radio Button states

![Gallery Radio Buttons states - with illustrations](/images/gallery-radio-button-states.svg)

Gallery Radio Button states - with illustrations

<br>

### Normal

Normal state is how a Radio Button looks by default before any interaction or action is taken.

### Hover

Hover state occurs when the user hovers over the Radio Buttons with their mouse.

### Focus

Focus state appears when the Radio Button is currently selected and awaiting action. This commonly occurs when using a keyboard to navigate.

### Disabled

Disabled state occurs when an action currently isn’t available. Disabled Radio Buttons should only be used when an action can be taken within the current UI to enable the Radio Button. If no action can be taken to enable the Radio Button, then it should be hidden instead of disabled.

<hr>

## Best Practices

<docs-grid columns="2">

<div>

![Radio Buttons should be used when a user must select one option from a list of 2-10 options.](/images/do1.svg)

<docs-do>  
Radio Buttons should be used when a user must select one option from a list of 2-10 options.

</docs-do>

</div>

<div>

![Do not use a Radio Button when there is only one option available to the user.](/images/don-t1.svg)

<docs-do-not>

Do not use a Radio Button when there is only one option available to the user.

</docs-do-not>

</div>

</docs-grid>

<Spacer size="small" />

<docs-grid columns="2">

<div>

![A radio group should always have at least one radio button selected by default.](/images/components/radio-buttons/Assets_02-20/radioselection_do_outline.svg)

<docs-do>  

A radio group should always have at least one radio button selected by default.

</docs-do>

</div>

<div>

![A radio group should never be shown without a default selection.](/images/components/radio-buttons/Assets_02-20/radioselection_dont_outline.svg)

<docs-do-not>

A radio group should never be shown without a default selection.

</docs-do-not>

</div>

</docs-grid>

<Spacer size="small" />

<docs-grid columns="2">

<div>

![Radio Buttons should always have a label.](/images/components/radio-buttons/Assets_02-20/radiolabel_do_outline.svg)

<docs-do>  

Radio Buttons should always have a label.

</docs-do>

</div>

<div>

![A Radio Button without a label is unusable; users would have a hard time knowing what selection they are making without context.](/images/components/radio-buttons/Assets_02-20/radiolabel_dont_outline.svg)

<docs-do-not>

A Radio Button without a label is unusable; users would have a hard time knowing what selection they are making without context.

</docs-do-not>

</div>

</docs-grid>

<Spacer size="small" />

<hr>

## Alternate considerations

Use a *[dropdown select](/design-system/components/dropdown-selects/)* if only one option can be selected and and the list is larger than 10 items.

Use a [*toggle* ](/design-system/components/toggles/)if the options are two opposing states such as a yes or no and on or off. 

Use *[checkboxes](/design-system/components/checkboxes/)* if zero or more options can be selected for lists smaller than 10 items

Use a *[dropdown multi-select](/design-system/components/dropdown-multi-selects/)* if one or more options can be selected and the list is larger than 10 items.

<hr>

For more information on selection controls and keyboard accessibility [view form standards](/design-system/patterns/forms/).
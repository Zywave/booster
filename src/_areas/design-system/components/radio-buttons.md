---
title: Radio buttons
subtitle: ""
api: https://cdn.zywave.com/@zywave/zui-radio@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-radio@next/demo/index.html
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



## Anatomy

For a more detailed breakdown of spacing and sizing, *[view the design specs.](https://xd.adobe.com/view/8eb4bcb4-1a69-4f34-ad25-b9171d366435-dbe7/grid)*

![Standard radio button](/images/standardradio.png)

### **Standard Radio Button**

1. Option: the combination of a radio button and a label
2. Radio button: an input type where only one can be selected at a time in a given radio group
3. Label: a text description of the option

<br>

![Inline radio button](/images/inlineradio.png)

### **Inline Radio Button**

1. Option: the combination of a radio button and a label
2. Icon (optional): emphasizes the option and reinforces the contrast between different options
3. Label: a text description of the option

<br>

![Gallery radio button](/images/anatomy-gallery.png)

### **Gallery Radio Button**

1. Radio button:  an input type where only one can be selected at a time in a given radio group
2. Label: a text description of the option
3. Icon (optional): emphasizes the option and reinforces the contrast between different options

<br>



<hr>



## Types

![Types of radio buttons](/images/type.png)

<br>

**Standard Radio Button**

Standard Radio Buttons are the most common Radio Buttons, and they allow the user to make a selection and quickly move on to the next task.

<br>

**Inline Radio Button**

Inline Radio Buttons are more prominently styled than standard Radio Buttons. They often feature a system icon (24 pt x 24 pt), and they’re designed to emphasize the selection being made.

<br>

**Gallery Radio Button**

Gallery Radio Buttons are more prominent than both standard and inline Radio Buttons. They often feature an icon and take up a great deal of space on the page.



<hr>



## States

![standard radio buttons states](/images/radio_states_standard.png)

Standard Radio Button states

![inline radio buttons states](/images/inlineradio_states.png)

Inline Radio Button states

![Gallery radio buttons states](/images/galleryradio_states.png)

Gallery Radio Button states

<br>



### **Normal**

Normal state is how a Radio Button looks by default before any interaction or action is taken.

### **Hover**

Hover state occurs when the user hovers over the Radio Buttons with their mouse.

### **Focus**

Focus state appears when the Radio Button is currently selected and awaiting action. This commonly occurs when using a keyboard to navigate.

### **Disabled**

Disabled state occurs when an action currently isn’t available. Disabled Radio Buttons should only be used when an action can be taken within the current UI to enable the Radio Button. If no action can be taken to enable the Radio Button, then it should be hidden instead of disabled.



<hr>



## Best Practices

<Grid>

<GridCol col="span-6">

![Card Width Do](/images/components/radio-buttons/Assets_02-20/radiogroup_do_outline.svg)

<Do />

Radio buttons should always be used when there is a list of two or more options, up to 10, and the user must select only one.

</GridCol>

<GridCol col="span-6">

![Card Width Don't](/images/components/radio-buttons/Assets_02-20/radiogroup_dont_outline.svg)

<DoNot />

A single radio button should never be used alone.

</GridCol>

</Grid>

<Spacer size="small" />

<Grid>

<GridCol col="span-6">

![Card Width Do](/images/components/radio-buttons/Assets_02-20/radioselection_do_outline.svg)

<Do />

Radio buttons should always have at least one option selected as default.

</GridCol>

<GridCol col="span-6">

![Card Width Don't](/images/components/radio-buttons/Assets_02-20/radioselection_dont_outline.svg)

<DoNot />

A group of radio buttons should never be shown without a default selection.

</GridCol>

</Grid>

<Spacer size="small" />

<Grid>

<GridCol col="span-6">

![Card Width Do](/images/components/radio-buttons/Assets_02-20/radiolabel_do_outline.svg)

<Do />

Radio buttons should always have a label.

</GridCol>

<GridCol col="span-6">

![Card Width Don't](/images/components/radio-buttons/Assets_02-20/radiolabel_dont_outline.svg)

<DoNot />

A radio button without a label is unusable; the user will not know what selection they are making without text.

</GridCol>

</Grid>

<hr>

For more information on selection controls and keyboard accessibility [view form standards](/design-system/patterns/forms/).





<hr>



### Alternate considerations

* Use a [dropdown multi-select](/design-system/components/dropdown-multi-selects/) if zero or more options can be selected and for lists larger than 10 items.
* Use a [dropdown select](/design-system/components/dropdown-selects/) if only one option can be selected and for lists larger than 10 items.
* Use a [checkbox](/design-system/components/checkboxes/) if zero or more options can be selected or for lists smaller than 10 items.
* Use a [toggle](/design-system/components/toggles/) if the options are two opposing states such as a yes or no, on or off.
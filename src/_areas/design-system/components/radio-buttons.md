---
api: https://cdn.zywave.com/@zywave/zui-radio@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-radio@next/demo/index.html
mainComponentName: zui-radio
includedElements: []
title: Radio buttons
subtitle: A selection control that allows the user to make a single selection.
---

## What are radio buttons?

A radio button is a selection control that allows the user to make a single selection. Unlike some other selection controls, radio buttons display all of the options, so the user has a chance to see all options before making a selection. They most commonly appear in forms.

<hr>

## When to use radio buttons

Use a radio button when the user must select a single option from a list of mutually exclusive options less than 10. Meaning that a user can choose only one option, and once an option is selected, the previous option deselects.

### Alternate considerations

- Use a [dropdown multi-select](http://zui.zywave.comcomponents/dropdown-multi-select/) if zero or more options can be selected and for lists larger than 10 items.
- Use a [dropdown select](http://zui.zywave.comcomponents/dropdown-select/) if only one option can be selected and for lists larger than 10 items.
- Use a [checkbox](http://zui.zywave.comcomponents/checkboxes/) if zero or more options can be selected or for lists smaller than 10 items.
- Use a [toggle](http://zui.zywave.comcomponents/toggles/) if the options are two opposing states such as a yes or no, on or off.

<!-- ###### Developer Documentation

*   [GitLab wiki](https://gitlab.zywave.com/zui/zui-core/wikis/home)
*   [View in GitLab](https://gitlab.zywave.com/zui/zui-core)

###### Alternative Considerations

*   [Dropdown Select](/#components/dropdown-select)
*   [Pickers](/#components/pickers)
*   [Toggles](/#components/toggles) -->

<hr>

## Style variations

### Standard radio button

![Image of a standard radio button](images/components/radio-buttons/Assets_02-20/standardradio_small_outline.svg)

Standard radio buttons are the most common. They allow the user to make a selection and quickly move on to the next task.

- Use when the number of options is easy for the user to process, generally fewer than 10.
- Unless you want to emphasize the selection, this is usually the radio button you should use.

<Spacer size="small" />

### Inline radio button

![Image of an inline radio button](images/components/radio-buttons/Assets_02-20/inlineradio_small_outline.svg)

Inline radio buttons are more prominently styled than standard radio buttons. They often feature an icon, and they’re designed to emphasize the selection being made.

- Reserve for especially important selections.
- Limit the number of options to what can fit on a single line.
- Use an icon, if appropriate, to further emphasize the importance of the selection.
- Don't use multiple groups of inline radio buttons on the same page.

<Spacer size="small" />

### Gallery radio button

![Image of a gallery radio button](images/components/radio-buttons/Assets_02-20/galleryradio_small_outline.svg)

Gallery radio buttons are more prominent than both standard and inline radio buttons. They often feature an icon and take up a great deal of space on the page.

- Because they're so large, they should generally be reserved for when there is only one selection the user can make on that page.
- Icons both emphasize the selections and reinforce the contrast between the options.

<hr>

## Anatomy

![Image of all radio buttons](images/components/radio-buttons/Assets_02-20/radiobutton_anatomy.svg)

For detailed documentation on our radio button anatomy, view the [ZUI radio button design specs](https://xd.adobe.com/view/e2ecbbb0-c8a2-4009-6f25-de65bcda7cf1-94dd/grid).

### Standard radio buttons

- Radio button height and width will always be 24px
- Clickable area of the radio button will always be 36px, and include the label if applicable
- System font, size 14px, regular

### Inline radio buttons

- Radio button height will always be 42px, button width is determined by the length of the text
- 0px margin between radio buttons, the buttons should be connected and added to the right of the first
- System font, size 14px, semibold

### Gallery radio buttons

- Radio button height and width is determined by height and width of text
- System font, size 14px, semibold

<hr>

## Radio button states

![Image of standard radio button states](images/components/radio-buttons/Assets_02-20/radiobutton_states_standard.svg)

### Normal

Normal state is the initial state of the radio button when the page first loads and before any action is taken.

### Hover

Hover state occurs when the user hovers over the radio button with their mouse.

### Focus

Focus state appears when the radio button is currently selected and awaiting action. This commonly occurs when using a keyboard to navigate.

### Disabled

Disabled state occurs when an action currently isn’t available. Disabled radio buttons should only be used when an action can be taken within the current UI to enable the radio button. If no action can be taken to enable the radio button, then the radio button should be hidden instead of disabled.

<hr>

## Radio button best practices

<Grid>

<GridCol col="span-6">

![Card Width Do](images/components/radio-buttons/Assets_02-20/radiogroup_do_outline.svg)

<Do />

Radio buttons should always be used when there is a list of two or more options, up to 10, and the user must select only one.

</GridCol>

<GridCol col="span-6">

![Card Width Don't](images/components/radio-buttons/Assets_02-20/radiogroup_dont_outline.svg)

<DoNot />

A single radio button should never be used alone.

</GridCol>

</Grid>

<Spacer size="small" />

<Grid>

<GridCol col="span-6">

![Card Width Do](images/components/radio-buttons/Assets_02-20/radioselection_do_outline.svg)

<Do />

Radio buttons should always have at least one option selected as default.

</GridCol>

<GridCol col="span-6">

![Card Width Don't](images/components/radio-buttons/Assets_02-20/radioselection_dont_outline.svg)

<DoNot />

A group of radio buttons should never be shown without a default selection.

</GridCol>

</Grid>

<Spacer size="small" />

<Grid>

<GridCol col="span-6">

![Card Width Do](images/components/radio-buttons/Assets_02-20/radiolabel_do_outline.svg)

<Do />

Radio buttons should always have a label.

</GridCol>

<GridCol col="span-6">

![Card Width Don't](images/components/radio-buttons/Assets_02-20/radiolabel_dont_outline.svg)

<DoNot />

A radio button without a label is unusable; the user will not know what selection they are making without text.

</GridCol>

</Grid>

<hr>

For more information on selection controls and keyboard accessibility [view form standards](http://zui.zywave.com/patterns/forms/).

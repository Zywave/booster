---
layout: component
api: https://cdn.zywave.com/@zywave/zui-checkbox/@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-checkbox/@next/demo/index.html
mainComponentName: zui-checkbox
includedElements: []
title: Checkboxes
subtitle: Selection controls that allow the user to make multiple selections from a list of options.
---

## What are checkboxes?

Checkboxes are selection controls that allow the user to make multiple selections from a list of options. Unlike some other selection controls, checkboxes display all of the options, so the user has a chance to see all options before and while making their selections. They most commonly appear in forms.

<hr>

## When to use checkboxes

A checkbox should be used when selecting zero, one, or more independent options from a list or to show a list of sub-selections. A standalone checkbox can also be used to select a single option in certain environments and situations.

### Alternate considerations

- Use a [dropdown multi-select](components/dropdown-multi-select/) if zero or more options can be selected and for lists larger than 10 items.
- Use a [dropdown select](components/dropdown-select/) if only one option can be selected and for lists larger than 10 items.
- Use a [radio button](components/radio-buttons/) if only one option can be selected and for lists smaller than 10 items.
- Use a [toggle](components/toggles/) if the options are two opposing states such as a yes or no, on or off.

<hr>

## Style variations

### Standard checkbox

![Image of a standard checkbox](images/components/checkboxes/Assets_03-20/standardcheck_small.svg)

Standard checkboxes are the most common. They allow the user to make selections and quickly move on to the next task.

- Use when the number of options is easy for the user to process, generally fewer than 10.
- Unless you want to emphasize the selection, these are usually the checkboxes you should use.

<Spacer size="small" />

### Gallery checkbox

![Image of a gallery checkbox](images/components/checkboxes/Assets_03-20/gallerycheck_small.svg)

Gallery checkboxes are more prominent than standard checkboxes. They often feature an icon and take up a great deal of space on the page. They are generally used when they control the only selection the user can make on that page.

- Because they’re so large, they should generally be reserved for when that selection is the only one the user can make on that page.
- Icons both emphasize the selection and reinforce the contrast between the options.

<hr>

## Anatomy

![Image of all checkboxes](images/components/checkboxes/Assets_03-20/checkbox_anatomy.svg)

For detailed documentation on our checkbox anatomy, view the [ZUI checkbox design specs](https://xd.adobe.com/view/93be6c9d-e5f1-40af-7116-323e57943237-e58f/grid).

### Standard checkbox

- Checkbox height and width will always be 24px
- Clickable area of the checkbox will always be 36px, and include the label if applicable
- System font, size 14px, regular

### Gallery checkbox

- Checkbox height and width is determined by height and width of text
- System font, size 14px, semibold

<hr>

## Checkbox states

![Image of standard checkbox states](images/components/checkboxes/Assets_03-20/checkbox_states_standard.svg)

### Normal

Normal state is the initial state of the checkbox when the page first loads and before any action is taken.

### Hover

Hover state occurs when the user hovers over the checkbox with their mouse.

### Focus

Focus state appears when the checkbox is currently selected and awaiting action. This commonly occurs when using a keyboard to navigate.

### Disabled

Disabled state occurs when an action currently isn’t available. Disabled checkboxes should only be used when an action can be taken within the current UI to enable the checkbox. If no action can be taken to enable the checkbox, then the checkbox should be hidden instead of disabled.

<hr>

## Checkbox best practices

<Grid>

<GridCol col="span-6">

![Checkbox Label Do](images/components/checkboxes/Assets_03-20/checklabel_do.svg)

<Do />

Checkboxes should always have a label.

</GridCol>

<GridCol col="span-6">

![Checkbox Label Don't](images/components/checkboxes/Assets_03-20/checklabel_dont.svg)

<DoNot />

A checkbox without a label is unusable; the user will not know what selection they are making without text.

</GridCol>

</Grid>

<hr>

For more information on selection controls and keyboard accessibility [view form standards](http://zui.zywave.com/patterns/forms/).

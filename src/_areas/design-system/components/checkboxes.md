---
title: Checkboxes
subtitle: ""
api: https://cdn.zywave.com/@zywave/zui-checkbox@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-checkbox@next/demo/index.html
mainComponentName: zui-checkbox
includedElements: []
---
## What are checkboxes?

Checkboxes are selection controls that allow the user to make multiple selections from a list of options. Unlike some other selection controls, checkboxes display all of the options, so the user has a chance to see all options before and while making their selections. They most commonly appear in forms.

<hr>

## Usage

A checkbox should be used when selecting zero, one, or more independent options from a list or to show a list of sub-selections. A standalone checkbox can also be used to select a single option in certain environments and situations.



<hr>



## Anatomy

For detailed documentation on our checkbox anatomy, view the [ZUI checkbox design specs](https://xd.adobe.com/view/93be6c9d-e5f1-40af-7116-323e57943237-e58f/grid).

![Image of Standard Checkbox](/images/anatomy-standard.png)



### Standard Checkbox

* Checkbox height and width will always be 24px
* Clickable area of the checkbox will always be 36px, and include the label if applicable
* System font, size 14px, regular



![Image of Gallery Checkbox](/images/anatomy-gallery.png)

### Gallery Checkbox

* Checkbox height and width is determined by height and width of text
* System font, size 14px, semibold

<hr>

## Styles



![Image of a standard checkbox](/images/checkbox-styles.png)

<br>

### Standard Checkboxes

Standard checkboxes are the most common. They allow the user to make selections and quickly move on to the next task.

* Use when the number of options is easy for the user to process, generally fewer than 10.
* Unless you want to emphasize the selection, these are usually the checkboxes you should use.

<br>

### Gallery Checkbox

Gallery checkboxes are more prominent than standard checkboxes. They often feature an icon and take up a great deal of space on the page. They are generally used when they control the only selection the user can make on that page.

* Because they're so large, they should generally be reserved for when that selection is the only one the user can make on that page.
* Icons both emphasize the selection and reinforce the contrast between the options.

<hr>

## States

![Image of standard checkbox states](/images/standard-checkbox-states.png)

Standard Checkbox states

![Image of gallery checkbox states](/images/gallery-checkbox-states.png)

Gallery Checkbox states

### Normal

Normal state is the initial state of the checkbox when the page first loads and before any action is taken.

### Hover

Hover state occurs when the user hovers over the checkbox with their mouse.

### Focus

Focus state appears when the checkbox is currently selected and awaiting action. This commonly occurs when using a keyboard to navigate.

### Disabled

Disabled state occurs when an action currently isn't available. Disabled checkboxes should only be used when an action can be taken within the current UI to enable the checkbox. If no action can be taken to enable the checkbox, then the checkbox should be hidden instead of disabled.

<hr>

## Checkbox best practices

<docs-grid columns="2">

<div>

![Checkbox Label Do](/images/components/checkboxes/Assets_03-20/checklabel_do.svg)

<docs-do>
  Checkboxes should always have a label.
</docs-do>

</div>

<div>

![Checkbox Label Don't](/images/components/checkboxes/Assets_03-20/checklabel_dont.svg)

<docs-do-not>
  A checkbox without a label is unusable; the user will not know what selection they are making without text.
</docs-do-not>

</div>

</docs-grid>

<hr>



## Alternate considerations

* Use a [dropdown multi-select](/design-system/components/dropdown-multi-selects/) if zero or more options can be selected and for lists larger than 10 items.
* Use a [dropdown select](/design-system/components/dropdown-selects/) if only one option can be selected and for lists larger than 10 items.
* Use a [radio button](/design-system/components/radio-buttons/) if only one option can be selected and for lists smaller than 10 items.
* Use a [toggle](/design-system/components/toggles/) if the options are two opposing states such as a yes or no, on or off.

<hr>

For more information on selection controls and keyboard accessibility [view form standards](/design-system/patterns/forms/).
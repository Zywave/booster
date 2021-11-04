---
api: https://cdn.zywave.com/@zywave/zui-select@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-select@next/demo/index.html
mainComponentName: zui-select-dropdown
includedElements: ["zui-select-dropdown", "zui-option", "zui-option-group"]
title: Dropdown multi-selects
subtitle: Type of input field in which a user fills an input box with one or many items from a list of acceptable inputs.
---

## What is a dropdown multi-select?

A dropdown multi-select is a type of input field in which a user fills an input box with one or many items from a list of acceptable inputs.

---

## When to use

Appropriate for lists larger than 2 options that may require a user to select more than 1 option.

### Alternate considerations

- Use [checkboxes](/design-system/components/checkboxes/) for lists smaller than 3 items.
- Use a [dropdown select](/design-system/components/dropdown-selects/) if users can only select 1 option.
- Use a [multi-picker](/design-system/components/pickers/) when the user needs to search for specific items and select them from a list with more than 7 – 10 items.

---

## Anatomy

<Grid>

<GridCol col="span-4">

### Label

Text that defines what type of options are in the list.

[See labeling best practices](/design-system/patterns/forms/)

### Input

The field designated for selecting an individual option from a grouping of related options.

### Selection

Once an option is chosen, it becomes a selection. Selections are visually defined by the encapsulation of the text in a gray rectangle.

### Dropdown chevron

The chevron arrow, within the input suggesting that there are items to select within a dropdown.

### Selected option

An option that is visibly selected.

### Options list

The grouping of related input options.

### Option

A unique input option.

### Option checkbox

A selectable checkbox beside an option.

[See base design specs](https://xd.adobe.com/view/92759d6f-effe-410f-b096-7076edaecf0b-c726/grid)

</GridCol>

<GridCol col="span-8">

![Anatomy of a dropdown multi-select](/images/components/dropdown-multi-select/multi_select_label.svg)

The anatomy of a dropdown select.

</GridCol>

</Grid>

---

## Sizing and Spacing

Use the following links to find exact pixel specs for dropdowns multi-select.

[Design specs](https://xd.adobe.com/view/92759d6f-effe-410f-b096-7076edaecf0b-c726/grid)

---

## Organizing the list

Sort the list in a logical order. For instance, put the most selected option(s) at the top. In many cases we recommend alphabetical order.

<Grid>

<GridCol col="span-6">

### Grouping

![Spatial specs for options lists with grouping](/images/components/dropdown-multi-select/multiselect_grouping_specs.svg)

- Sometimes you'll need to add grouping to a long list of options. Titles can break up options into groups to help users more easily locate them.

[See grouping design specs](https://xd.adobe.com/view/92759d6f-effe-410f-b096-7076edaecf0b-c726/screen/c12aa28c-727d-406a-bd44-5bcec364f935/)

</GridCol>

<GridCol col="span-6">

### Icons

![Spatial specs for options lists with icons next to options](/images/components/dropdown-multi-select/multiselect_icon_specs.svg)

- Use icons to distinguish between options.
- Often icons are used when you have two different types of options in a list.

[See icon design specs](https://xd.adobe.com/view/92759d6f-effe-410f-b096-7076edaecf0b-c726/screen/ccefcc03-0603-4624-94b5-8f40c1f6969a/)

</GridCol>

</Grid>

---

## Behavior

<Grid>

<GridCol col="span-6">

### Open / close

- Normal behavior is to reveal the list down when placement of the select input is high enough within the viewport. When select input is lower on the screen the list will reveal up.
- Dropdrown chevron icon: rotates 180 degrees clockwise when opened, when closed spins back 180 degrees counter clockwise, returning to the original position.

</GridCol>

<GridCol col="span-6">

### Scrolling

- If the options can be displayed within the viewport it is ideal to not have a scroll bar. Scroll bars should appear when an options list exceeds the height of the screen but should not be taller than 300px.
- Note options lists will appear below or above select inputs depending on where they sit within the viewport (see Open / close).

</GridCol>

<GridCol col="span-6">

### Typeahead

- Present in all dropdown selects, streamlines experience for users.
- Typeahead is relevant only to options in the list, it will not return group names. Grouping headers are not seen when using typeahead.

[See typeahead](/design-system/patterns/typeahead/)

</GridCol>

<GridCol col="span-6">

### Defaulting a selection

- A dropdown select shouldn't default a selected option. If you're confident users will likely choose an option you may consider defaulting to a selection.
- Sometimes choosing 'none' as an option is necessary, if none of the options are applicable to the user. None should appear at the top of the list.

</GridCol>

<GridCol col="span-6">

### Input states

![The various states of an input](/images/components/dropdown-multi-select/multiselect_states.svg)

[See input states design specs](https://xd.adobe.com/view/92759d6f-effe-410f-b096-7076edaecf0b-c726/screen/7b6c4ddd-55fa-4521-8598-7e5b280b5aec/)

</GridCol>

<GridCol col="span-6">

### Option list states

![The various states of an option list](/images/components/dropdown-multi-select/multiselect_list_states.svg)

[See option list states design specs](https://xd.adobe.com/view/92759d6f-effe-410f-b096-7076edaecf0b-c726/screen/c6b9b274-0fab-4b09-895a-28d141fe96ca/)

</GridCol>

<GridCol col="span-6">

### Selection wrapping

- When multiple options are selected in a multi-select list, selections will populate the input and eventually will have to wrap, in order to fit.

[See selection wrapping design specs](https://xd.adobe.com/view/92759d6f-effe-410f-b096-7076edaecf0b-c726/screen/38048d13-2726-4db4-84aa-54048de9c1f1/)

</GridCol>

<GridCol col="span-6">

![Removing a selection from an input](/images/components/dropdown-multi-select/tag_specs.svg)

</GridCol>

</Grid>

### Removing the selection

- After a user has chosen an option it turns into a selection within the input. Users can remove a selection by using one of three methods.
- Selections can be removed by clicking on the X icon within the selection.
- Backspacing over a selection in the input removes it.
- By deselecting the checkbox within an option list will also remove the selection.

---

## Responsiveness

### Mobile

Users on mobile and touch devices should not see our styling; instead the default styles native to the device should override ours, as these typically provide a better UX as they're designed for use on that particular device.

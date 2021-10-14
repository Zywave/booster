---
title: Dropdown selects
subtitle: Type of input field in which a user fills an input box with an item
  from a list of acceptable items.
api: https://cdn.zywave.com/@zywave/zui-select@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-select@next/demo/index.html
mainComponentName: zui-select-dropdown
includedElements:
  - zui-select-dropdown
  - zui-option
  - zui-option-group
---
## What is a dropdown select?

A dropdown select is a type of input field in which a user fills an input box with an item from a list of acceptable items. Dropdown selects allow only one option to be chosen.

- - -

## Usage

Use a dropdown select to organize a list of options a user can select from.

![Dropdown select usage](/images/select_usage.svg)

- - -

## Anatomy

The anatomy of a dropdown select.

![Dropdown select anatomy](/images/select_anatomy.svg)

1. **Input:** The field designated for selecting an individual option from a grouping of related options.
2. **Chevron:** The chevron arrow, within the input suggesting that there are items to select within a dropdown.
3. **Option list:** The grouping of related input options.
4. **Option:** A unique input option.
5. **Scrollbar**: A bar used to scroll to view more options

<docs-spacer size="small"></docs-spacer>

See the [Design specs](https://xd.adobe.com/view/14c0f042-a5d0-446b-8baf-d47fd0be4e76-4193/) for detailed sizing and spacing information

- - -

## Organizing the list

Sort the list in a logical order. For instance, put the most selected option(s) at the top. In many cases we recommend alphabetical order.

<Grid>

<GridCol col="span-6">

#### Grouping

![Spatial specs for options lists with grouping](/images/components/dropdown-select/select_grouping_specs.svg)

* Sometimes you'll need to add grouping to a long list of options. Titles can break up options into groups to help users more easily locate them.

[See grouping design specs](https://xd.adobe.com/view/1d1827c1-f08e-480d-806a-647a41a328bd-484b/screen/f7960c25-618f-451f-9750-c9e8c43b7117/)

</GridCol>

<GridCol col="span-6">

#### Icons

![Spatial specs for options lists with icons next to options](/images/components/dropdown-select/select_icon_specs.svg)

* Icons may be used beside select options; they should assist by making selection easier for users.
* Use icons to distinguish between options.
* Often icons are used when you have two different types of options in a list.

[See icon design specs](https://xd.adobe.com/view/1d1827c1-f08e-480d-806a-647a41a328bd-484b/screen/277ba58c-7470-4a65-be8b-28165b71ff7a/)

</GridCol>

</Grid>

- - -

## Behavior

<Grid>

<GridCol col="span-6">

### Open / close

* Normal behavior is to reveal the list down when placement of the select input is high enough within the viewport. When select input is lower on the screen the list will reveal up.
* Dropdown chevron icon: Rotates 180 degrees clockwise when opened, when closed spins back 180 degrees counter clockwise, returning to the original position.

</GridCol>

<GridCol col="span-6">

### Scrolling

* If the options can be displayed within the viewport it is ideal to not have a scroll bar. Scroll bars should appear when options lists exceed the height of the screen but should not be taller than 300px.
* Note options lists will appear below or above select inputs depending on where they sit within the viewport (see Open / close).

</GridCol>

<GridCol col="span-6">

### Typeahead

* Present in all dropdown selects, streamlines experience for users.
* Typeahead is relevant only to options in the list, it will not return group names. Grouping headers are not seen when using typeahead.

[See typeahead](/design-system/patterns/typeahead/)

</GridCol>

<GridCol col="span-6">

### Defaulting a selection

* A dropdown select shouldn't default a selected option. If you're confident users will likely choose an option you may consider defaulting to a selection.

</GridCol>

<GridCol col="span-6">

</GridCol>

<GridCol col="span-6">

</GridCol>

<GridCol col="span-6">

### Input states

![The various states of an input](/images/components/dropdown-select/select_states.svg)

[See input states design specs](https://xd.adobe.com/view/1d1827c1-f08e-480d-806a-647a41a328bd-484b/screen/6fe28f1b-27e1-4e5d-95c4-3063f89fa66e/)

</GridCol>

<GridCol col="span-6">

### Option list states

![The various states of an options list](/images/components/dropdown-select/select_list_states.svg)

[See option list states design specs](https://xd.adobe.com/view/1d1827c1-f08e-480d-806a-647a41a328bd-484b/screen/39e06ddc-ebd3-4e1c-9745-945f9245b3fd/)

</GridCol>

</Grid>

<!-- <a class="scroll-to-top u-semi-bold">Back to top</a> -->

- - -

## Responsiveness

### Mobile

Users on mobile and touch devices should not see our styling; instead the default styles native to the device should override ours, as these typically provide a better UX as they're designed for use on that particular device.

<Spacer/>

- - -

## Alternate considerations

* Use a [dropdown multi-select](/design-system/components/dropdown-multi-selects/) if two or more options can be selected - not necessarily required.
* Use [radio buttons](/design-system/components/radio-buttons/) when there's fewer than 3 options.
* Use a [toggle](/design-system/components/toggles/) if the options are a yes or no.
* Use a [picker](/design-system/components/pickers/) when the user needs to search for a specific item and select it from a list that is pageable.
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

<br>

See the [Design specs](https://xd.adobe.com/view/ef2f902b-219f-4e41-8bba-2bf079fc5969-ba7c/grid) for detailed sizing and spacing information

- - -

## Types

#### Grouping

* Titles can break up options into logical groups to help users scan the options more easily.

![Dropdown select grouping](/images/select_grouping_specs.svg)

<br>

#### Icons

* Use icons to distinguish between options.

![Dropdown select icons](/images/select_icon_specs.svg)

- - -

## States

#### Input states

Dropdown select can display the following states: unselected, hover, focused, active, selected and disabled.

![Dropdown select states](/images/select_states.svg)

#### Option list states

Dropdown select option list can display the following states: selected, hover and disabled.

![Dropdown select list states](/images/select_list_states.svg)

- - -

## Behavior

Sort the list in a logical order. For instance, put the most selected option(s) at the top. In many cases we recommend alphabetical order.

#### Open / close

* Normal behavior is to reveal the list down when placement of the select input is high enough within the viewport. When select input is lower on the screen the list will reveal up.
* Dropdown chevron icon: Rotates 180 degrees clockwise when opened, when closed spins back 180 degrees counter clockwise, returning to the original position.
* The dropdown will close automatically after making a selection.

#### Scrolling

* If the options can be displayed within the viewport it is ideal to not have a scroll bar. Scroll bars should appear when options lists exceed the height of the screen but should not be taller than 300px.
* Note options lists will appear below or above select inputs depending on where they sit within the viewport (see Open / close).

#### Typeahead

* Present in all dropdown selects, streamlines experience for users.
* Typeahead is relevant only to options in the list, it will not return group names. Grouping headers are not seen when using typeahead.

[See typeahead](/design-system/patterns/typeahead/)

#### Defaulting a selection

* A dropdown select shouldn't default a selected option. If you're confident users will likely choose an option you may consider defaulting to a selection.

- - -

## Responsiveness

#### Mobile

Users on mobile and touch devices should not see our styling; instead the default styles native to the device should override ours, as these typically provide a better UX as they're designed for use on that particular device.

- - -

## Best practices

* Every input should have a label. Label text is used to inform users as to what information is requested for a dropdown.

- - -

## Alternate considerations

* Use a [dropdown multi-select](/design-system/components/dropdown-multi-selects/) if two or more options can be selected - not necessarily required.
* Use [radio buttons](/design-system/components/radio-buttons/) when there's fewer than 3 options.
* Use a [toggle](/design-system/components/toggles/) if the options are a yes or no.
* Use a [picker](/design-system/components/pickers/) when the user needs to search for a specific item and select it from a list that is pageable.
---
title: Dropdown selects
subtitle: Type of form control where a user is presented with a list of options
  to choose one items from.
api: https://cdn.zywave.com/@zywave/zui-select@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-select@next/docs/demo.html
mainComponentName: zui-select-dropdown
includedElements:
  - zui-select-dropdown
  - zui-option
  - zui-option-group
---
## Usage

A form control used when there are more than 2 options and may require a user to select 1 option.

![Dropdown select usage](/images/select_usage.svg)

- - -

## Anatomy

The anatomy of a dropdown select.

![Dropdown select anatomy](/images/select_anatomy.svg)

1. **Select:** The form field where the user can select one option from a list
2. **Chevron:** The chevron icon indicates there are options available in a dropdown list
3. **Option list:** The grouping of related input options
4. **Option:** A unique input option
5. **Scrollbar**: A bar used to scroll to view more options 

<br>

See the [Design specs](https://xd.adobe.com/view/ef2f902b-219f-4e41-8bba-2bf079fc5969-ba7c/grid) for detailed sizing and spacing information

- - -

## Types

#### Grouping

* Grouping options with proper group labels can help users scan the list more easily.

![Dropdown select grouping](/images/select_grouping_specs.svg)

<br>

#### Icons

* Use icons to distinguish between options.

![Dropdown select icons](/images/select_icon_specs.svg)

- - -

## States

#### Select states

Dropdown selects can display the following states: unselected, hover, focus, active, and disabled.

![Dropdown select states](/images/select_states.svg)

#### Option states

Within Dropdown select option lists, options can display the following states: selected, hover, and disabled.

![Dropdown select list states](/images/select_list_states.svg)

- - -

## Behavior

Sort the option list in a logical order. For instance, alphabetize or put the most selected option(s) at the top.

#### Open / close

* Normal behavior is to reveal the option list below the select box when there is sufficient space within the viewport to display it entirely. When lower in the viewport, the option list should reveal above the select box.
* Chevron behavior: When the option list is opened, the chevron rotates 180 degrees clockwise. When the option list is closed, the chevron spins back 180 degrees counter clockwise, returning to its original position.
* The option list will close automatically after making a selection or when the user clicks outside of the Dropdown select component.

#### Scrolling

* If all options can be displayed within the viewport, it is ideal to not have a scroll bar. Scroll bars should appear when option lists exceed the height of the screen, but should not be taller than 300px.
* Note: option lists will appear below or above the select boxes depending on where they sit within the viewport. (See Open / close)

#### Typeahead

* Present in all dropdown selects, streamlines experience for users.
* Typeahead is relevant only to options in the list; it will not return group labels. Group labels are not seen when using typeahead.

[See typeahead](/design-system/patterns/typeahead/)

#### Defaulting a selection

* A Dropdown select shouldn't default a selected option. Defaulting a selection only makes sense after a user's selection has been saved and they revisit to update their choice.
* Sometimes choosing "None" as an option is necessary if no options are applicable to the user when a Dropdown multi-select is required. "None" should appear at the top of the list.

- - -

## Responsiveness

#### Mobile

Users on mobile and touch devices should have a larger touchpoint than desktop users. The row height on the option increases from 36px to 42px.

![](/images/select_responsiveness.svg)

- - -

## Best practices

#### Labeling

<docs-grid columns="2">

<div>

![Labeling do](/images/select_bestpractices-–-do.svg)

<docs-do>
Use clear and concise labeling. Label text is used to inform users as to what information is requested for a dropdown. 
</docs-do>

</div>

<div>

![Labeling don't](/images/select_bestpractices-–-donot.svg)

<docs-do-not>
Avoid using sentences or long phrases for label text. 
</docs-do-not>

</div>

</docs-grid>

<docs-spacer>

</docs-spacer>

#### Required fields

<docs-grid columns="2">

<div>

![Required fields do](/images/select_bestpractices-–-do-–-2.svg)

<docs-do>
Make it clear to the user which fields are required by using a red asterisk in the label.
</docs-do>

</div>

<div>

![Required fields don't](/images/select_bestpractices-–-donot-–-2.svg)

<docs-do-not>
Avoid assuming the user knows which fields are required and which are optional.
</docs-do-not>

</div>

</docs-grid>

<docs-spacer>

</docs-spacer>

#### Validation

<docs-grid columns="2">

<div>

![Validation do](/images/select_bestpractices-–-do-–-3.svg)

<docs-do>
Indicate errors or invalid inputs with clear messages describing the validation error.
</docs-do>

</div>

<div>

![Validation don't](/images/select_bestpractices-–-donot-–-3.svg)

<docs-do-not>
Avoid not drawing attention to a dropdown select with a validation error.
</docs-do-not>

</div>

</docs-grid>

<docs-spacer>

</docs-spacer>

- - -

## Alternate considerations

* Use a [dropdown multi-select](/design-system/components/dropdown-multi-selects/) if two or more options can be selected - not necessarily required.
* Use [radio buttons](/design-system/components/radio-buttons/) when there's fewer than 3 options.
* Use a [toggle](/design-system/components/toggles/) if the options are a yes or no.
* Use a [picker](/design-system/components/pickers/) when the user needs to search for a specific item and select it from a list that is pageable.
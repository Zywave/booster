---
title: Dropdown multi-select
subtitle: Type of form control where a user is presented with a list of options
  to choose one or many items from.
api: https://cdn.zywave.com/@zywave/zui-select@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-select@next/demo/index.html
mainComponentName: zui-select-dropdown
includedElements:
  - zui-select-dropdown
  - zui-option
  - zui-option-group
---
## Usage

A form control used when there are more than 2 options and may require a user to select more than 1 option.

![Dropdown multi-select usage](/images/multi_select_usage.svg)

- - -

## Anatomy

The anatomy of a dropdown multi-select.

![Dropdown multi-select anatomy](/images/multi_select_anatomy.svg)

1. **Select:** The form field where the user can select one or more options from a list
2. **Selection tag**: Once an option is chosen, it becomes a selection. Selections are visually defined by the encapsulation of the text in a gray rectangle.
3. **Chevron:** The chevron icon indicates there are options available in a dropdown list.
4. **Option list:** The grouping of related input options.
5. **Option:** A unique input option.
6. **Option checkbox:** A selectable checkbox beside an option.
7. **Scrollbar**: A bar used to scroll to view more options.

<br>

See the [](https://xd.adobe.com/view/ef2f902b-219f-4e41-8bba-2bf079fc5969-ba7c/grid)[Design specs](https://xd.adobe.com/view/630718e2-ca07-4189-961b-2a655245666d-3654/grid) for detailed sizing and spacing information

- - -

## Types

#### Grouping

* Titles can break up options into logical groups to help users scan the options more easily.

![Dropdown multi-select grouping](/images/multiselect_grouping_specs.svg)

<br>

#### Icons

* Use icons to distinguish between options.

![Dropdown multi-select icons](/images/multiselect_icon_specs.svg)

- - -

## States

#### Input states

Dropdown multi-select can display the following states: unselected, hover, focused, active, selected focused, selected and disabled.

![Dropdown multi-select states](/images/multiselect_states.svg)

<br>

#### Option list states

Dropdown multi-select option list can display the following states: selected, hover and disabled.

![Dropdown multi-select list states](/images/multiselect_list_states.svg)

- - -

## Behavior

Sort the list in a logical order. For instance, alphabetical order or put the most selected option(s) at the top.

#### Open / close

* Normal behavior is to reveal the list down when placement of the select input is high enough within the viewport. When select input is lower on the screen the list will reveal up.
* Dropdrown chevron icon: rotates 180 degrees clockwise when opened, when closed spins back 180 degrees counter clockwise, returning to the original position.
* The dropdown will need to be closed manually after making selections.

#### Scrolling

* If the options can be displayed within the viewport it is ideal to not have a scroll bar. Scroll bars should appear when an options list exceeds the height of the screen but should not be taller than 300px.
* Note options lists will appear below or above select inputs depending on where they sit within the viewport (see Open / close).

#### Typeahead

* Present in all dropdown selects, streamlines experience for users.
* Typeahead is relevant only to options in the list, it will not return group names. Grouping headers are not seen when using typeahead.

[See typeahead](/design-system/patterns/typeahead/)

#### Defaulting a selection

* A dropdown select shouldn't default a selected option. If you're confident users will likely choose an option you may consider defaulting to a selection.
* Sometimes choosing 'none' as an option is necessary, if none of the options are applicable to the user. None should appear at the top of the list.

#### Selection wrapping

* When multiple options are selected in a multi-select list, selections will populate the input and eventually will have to wrap, in order to fit.

![Tags selection wrapping](/images/tag_specs.svg)

#### Removing the selection

* After a user has chosen an option it turns into a selection within the input. Users can remove a selection by using one of three methods.
* Selections can be removed by clicking on the X icon within the selection.
* Backspacing over a selection in the input removes it.
* By deselecting the checkbox within an option list will also remove the selection.

- - -

## Responsiveness

#### Mobile

Users on mobile and touch devices should not see our styling; instead the default styles native to the device should override ours, as these typically provide a better UX as they're designed for use on that particular device.

- - -

## Best practices

#### Labeling

<docs-grid columns="2">

<div>

![Labeling do](/images/multiselect_bestpractices-–-do.svg)

<docs-do>
Use clear and concise labeling. Label text is used to inform users as to what information is requested for a dropdown. 
</docs-do>

</div>

<div>

![Labeling don't](/images/multiselect_bestpractices-–-donot.svg)

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

![Required fields do](/images/multiselect_bestpractices-–-do-–-2.svg)

<docs-do>
Make it clear to the user which fields are required by using a red asterisk in the label.
</docs-do>

</div>

<div>

![Required fields don't](/images/multiselect_bestpractices-–-donot-–-2.svg)

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

![Validation do](/images/multiselect_bestpractices-–-do-–-3.svg)

<docs-do>
Indicate errors or invalid inputs with clear messages describing the validation error.
</docs-do>

</div>

<div>

![Validation don't](/images/multiselect_bestpractices-–-donot-–-3.svg)

<docs-do-not>
Avoid not drawing attention to a dropdown select with a validation error.
</docs-do-not>

</div>

</docs-grid>

<docs-spacer>

</docs-spacer>



- - -

## Alternate considerations

* Use [checkboxes](/design-system/components/checkboxes/) for lists smaller than 3 items.
* Use a [dropdown select](/design-system/components/dropdown-selects/) if users can only select 1 option.
* Use a [multi-picker](/design-system/components/pickers/) when the user needs to search for specific items and select them from a list with more than 7 – 10 items.
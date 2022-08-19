---
title: Button dropdowns
subtitle: Buttons that reveal a list of three or more actionable options.
api: https://cdn.zywave.com/@zywave/zui-button@latest/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-button@latest/docs/demo.html
mainComponentName: zui-button-dropdown
includedElements:
  - zui-button-dropdown
---
## Usage

Button Dropdowns are used when there is a set of closely related actions available to the user, or as a solution to consolidate the number of actions that appear on the screen. Clicking the Button Dropdown opens an option list where the user can select an action or shift focus off the button to close the list. They are commonly seen within tables due to space restrictions.

![Standard and selected Button Dropdown states](/images/button-dropdown_usage.svg)

<docs-spacer size="small"></docs-spacer>

#### When to use Button Dropdowns

* When three or more actions are available
* When space is limited - such as within a table  

- - -

## Anatomy

A  Button Dropdown consists of a Button and a list of actions. 

![Button Dropdown anatomy](/images/button-dropdown_anatomy.svg)

1. **Button:** See [Button documentation](/design-system/components/buttons) for more details on button styles
2. **Chevron:** Text buttons contain a chevron to indicate that there are options available
3. **Action list:** A grouping of actions, appears after the button is clicked
4. **Action:** Clicking will execute the action

<docs-spacer size="small"></docs-spacer>

The width of the action list is, at minimum, 150px wide. The width of the list can expand, maintaining 15px padding on each side, should one of the options exceeds the 150px minimum.   

![Button Dropdown minimum and expanded option list widths](/images/button-dropdown_list_width.svg)

<br>

See the [Design specs](https://xd.adobe.com/view/61a11ada-118e-4ab7-bd11-62fa9a6f436a-34f2/grid) for detailed sizing and spacing information

- - -

## Types

#### Standard Button Dropdown

* Button with a chevron icon to the right of the text label
* Can be primary, secondary or link styles (see Buttons for details on types)
* Once active, a dropdown opens to display options  

<docs-grid columns="2">
  <div>

![Do Button Dropdown label](/images/standard_do.svg)

<docs-do>
Use a clear, actionable umbrella term for all options available in the dropdown

</docs-do>
  </div>
  <div>

![Do not Button Dropdown label](/images/standard_donot.svg)

<docs-do-not>
Use a term that it too vague and does not provide clarity about the options available in the dropdown 

</docs-do-not>
  </div>
  
</docs-grid>

<docs-spacer size="small"></docs-spacer>

#### Icon Button Dropdown

* Icon button, (most commonly the more icon)
* Can be primary, secondary or link styles
* Once active, a dropdown opens to display options 

<docs-grid columns="2">
  <div>

![Do icon Button Dropdown](/images/icon_do.svg)

<docs-do>

Use icons that are easily recognizable and clearly represent the option list 

</docs-do>
  </div>
  <div>

![Do not icon Button Dropdown](/images/icon_donot.svg)

<docs-do-not>
Use icons that are unclear or are unrelated to the list of options  

</docs-do-not>
  </div>
  
</docs-grid>

<docs-spacer size="small"></docs-spacer>

#### Option list with icons

* Pair icons with text labels for clear and easy recognition of actions in the dropdown
* Icons appear to the left of the text label within the dropdown

<docs-grid columns="2">
  <div>

![Do options list Button Dropdown](/images/options_do.svg)

<docs-do>

Include icons with all or none of the options in the dropdown list

</docs-do>
  </div>
  <div>

![Do not option list Button Dropdown](/images/options_donot.svg)

<docs-do-not>
Include icons on only one or some of the options 

</docs-do-not>
  </div>
  
</docs-grid>

- - -

## States

Buttons Dropdowns follow Button states with the exception of the selected state, which opens the dropdown to display the list of options available to the user. 

The options dropdown also has normal, hover and disabled states as shown below. 

![Option list states](/images/option_states.svg)

- - -

## Responsiveness

Users on mobile and touch devices should have a larger touchpoint than desktop users. The touch target increases from 36px to 42px for users on mobile or touch devices.

For more information about mobile and touch device breakpoints, see the [](https://xd.adobe.com/view/ef2f902b-219f-4e41-8bba-2bf079fc5969-ba7c/grid)[breakpoints table](https://booster.zywave.dev/design-system/developers/css-guide/#breakpoints).

![Dropdown select responsiveness](/images/button-dropdown_responsiveness.svg)

- - -

## Alternate considerations

* [Buttons](/design-system/components/buttons) should be used when there are 2 or fewer actions available 
* [Buttons](/design-system/components/buttons) or [Button Groups](/design-system/components/button-groups) should be used when choices should be immediately visible to users
* [Dropdown Select](/design-system/components/dropdown-select) should be used if the user is making a selection instead of executing an action

- - -

## Behavior

* Depending on the placement of the Button Dropdown and the space available, the option list can appear either left-aligned or right-aligned.
* The option list should always open below the button.
* The option list should appear above any components in z-space. It should not push items downwards on the page when open.
* The option list should not be confined to the container in which it was triggered, meaning it can go over the edge of the card or table in which it was triggered. 

![Button Dropdown behavior](/images/behavior.svg)
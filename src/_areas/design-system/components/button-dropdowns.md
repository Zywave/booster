---
title: Button dropdowns
subtitle: Buttons that reveal a list of three or more actionable options.
api: https://cdn.zywave.com/@zywave/zui-button@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-button@next/demo/index.html
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

1. **Button:** See Button documentation for more details on button styles
2. **Chevron:** Text buttons contain a chevron to indicate that there are options available
3. **Action list:** A grouping of actions, appears after the button is clicked
4. **Action:** Clicking will execute the action
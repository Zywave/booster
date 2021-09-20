---
api: https://cdn.zywave.com/@zywave/zui-button@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-button@next/demo/index.html
mainComponentName: zui-button-dropdown
includedElements: ["zui-button-dropdown"]
title: Button dropdowns
subtitle: Buttons that reveal a list of three or more actionable options.
---

## What are button dropdowns?

Button dropdowns are buttons that reveal a list of three or more actionable options.

---

## Usage

Button dropdowns are used when there is a set of closely related actions available to the user, or as a solution to consolidate the number of actions that appear on the screen. Clicking the button dropdown opens an option list. The option list remains open until the user either clicks off of the component or clicks an action in the option list. They are most commonly seen within tables due to space restrictions, but they are not limited to tables.

#### Button dropdowns should be used

- When there are more than three actions in a component.
- In a table actions column where there is limited space.

#### Alternate considerations

- Use [buttons](/design-system/components/buttons/) if you have a smaller number of options and also want to present choices to users without hiding options.
- Use a [dropdown select](/design-system/components/dropdown-selects/) if an option is not an action. A button dropdown should be used to execute an action, **not** to make a selection from a list.

---

## Anatomy

A button dropdown consists of two main parts:

- The button reveals the options list when clicked.
- The list of options where a user can select an action.

Button dropdowns share the same style variations as [buttons](/design-system/components/buttons/) (primary, secondary, link, etc.).

![Anatomy of a button dropdown](images/components/button-dropdowns/anatomy.svg)

1. Icon button: The action icon that, when clicked, reveals the options list.
2. Options list: The grouping of related actions the user can select.
3. A unique action a user can select.

[See design specs](https://xd.adobe.com/view/045ad3c3-398d-4b4e-b4ce-d2135418cd29-5109/)

![Anatomy of a button dropdown 2](images/components/button-dropdowns/anatomy2.svg)

1. Button: The shape that encloses the label and chevron. Follow the [buttons](/design-system/components/buttons/) guidelines for style variations, sizing, and spacing specifications.
2. Button label: Text that defines what type of options are in the list.
3. Chevron: Indicates that an options list can be revealed (pointing down) or concealed (pointing up) when the button is clicked.
4. Options list: The grouping of related actions the user can select.
5. Option: A unique action a user can select.

[See design specs](https://xd.adobe.com/view/045ad3c3-398d-4b4e-b4ce-d2135418cd29-5109/screen/694a22d3-01a3-407a-8c5e-d801fc0a3054)

---

## Organizing the list

Sort the list in a logical order. For instance, put the most selected option(s) at the top.

#### Using icons

- Use icons to make actions clearer for users to understand.
- Icons should only be used when it make sense to pair them with actions.
- It is preferred to either pair all text with icons or to use no icons at all.
- In some cases you may use icons for only some of the actions to put emphasis on an important action.

![Using icons](images/components/button-dropdowns/button2.svg)

[See design specs](https://xd.adobe.com/view/045ad3c3-398d-4b4e-b4ce-d2135418cd29-5109/screen/9a6e8257-bd26-4034-be80-4f0c9a172bc6)

![Using icons 2](images/components/button-dropdowns/button.svg)

[See design specs](https://xd.adobe.com/view/045ad3c3-398d-4b4e-b4ce-d2135418cd29-5109/screen/4d78aa9f-0c45-401d-811e-a155e2d3138f)

---

## Labeling

<Grid>
<GridCol col="span-8">

- The button label should be an actionable umbrella term or category that encompasses all options in the list. After reading a label, the dropdown options should meet a user's expectations.
- Use action verbs and clear verb phrases for your labels. For example, **"Save to"** indicates additional options are available, while **"Save"** does not.

#### Using icons as labels

- Use a button dropdown without a label to minimize footprint.
- Ideally, button dropdowns should be clearly labeled. If there are circumstances that prevent that from happening, use an icon that clearly and unambiguously represents its list.

[See design specs](https://xd.adobe.com/view/045ad3c3-398d-4b4e-b4ce-d2135418cd29-5109/screen/1c80d35b-d1c2-4f1a-83e9-778bab4b4347)

</GridCol>
<GridCol col="span-4">

![Button labeling](images/components/button-dropdowns/labeling.svg)

</GridCol>
</Grid>

---

## Behavior

#### Interaction behavior

Button dropdowns follow the same [guidelines](/design-system/components/buttons) as regular buttons when it comes to behavior and interaction.

<Spacer size="small" />

**Option list states**

![The various states of an options list](images/components/button-dropdowns/states_list.svg)

[See option list states design specs](https://xd.adobe.com/view/045ad3c3-398d-4b4e-b4ce-d2135418cd29-5109/screen/3d9950dd-2e3f-4351-a78e-ccaef7d8689d)

</GridCol>

</Grid>

<Spacer/>

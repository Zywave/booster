---
api: https://cdn.zywave.com/@zywave/zui-button@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-button@next/demo/index.html
mainComponentName: zui-button-group
includedElements: ["zui-button-group"]
title: Button groups
subtitle: Three or more buttons grouped together on a single line.
---

## What are button groups?

A button group is 3 or more buttons grouped together on a single line.

---

## Usage

Combining a few related actions into a button group can be useful for a feature. Button labels should be short and self-explanatory; for example: **Add**, **Edit**, **Import**, etc. The order of buttons and/or button dropdowns in a button group should be ordered logically, either by usage or importance.

#### Alternate Considerations

- Use [individual buttons](https://zui.zywave.comcomponents/buttons/) when the buttons are not related.
- Use [radio buttons](https://zui.zywave.comcomponents/radio-buttons/) when labels require more text, or you need a segmented control that emphasizes a selection being made.
- Use [tabs](https://zui.zywave.comcomponents/tabs/) when you need tertiary navigation on a page.
- Use [toggle buttons](https://zui.zywave.comcomponents/toggles/) when a feature needs to be enabled or disabled.

---

## Anatomy

Button groups follow the same anatomy rules as a button. For more information on these states, see [buttons](https://zui.zywave.comcomponents/buttons/).

![Anatomy of a button group](images/components/button-groups/anatomy.svg)

1. Button: The shape that encloses the label. Follow the [buttons](https://zui.zywave.comcomponents/buttons/) guidelines for style variations, sizing, and spacing specifications.
2. Dividers: The line that separates the buttons.

For detailed documentation on our button group anatomy, view the [design specs](https://xd.adobe.com/view/f1da7e56-5f40-48b1-9502-c3da540a7068-a489/specs/).

---

## Types

#### Secondary

A secondary button group is used to represent secondary actions on a page.

![secondary button group](images/components/button-groups/secondary.svg)

#### Primary

A primary button group is used to call attention to the main actions a user should take. This type should be used sparingly since it is rare you would have more than one primary action on a page.

![primary button group](images/components/button-groups/primary.svg)

#### Adding icons

![button group icons](images/components/button-groups/icons2.svg) ![button group icons](images/components/button-groups/icons.svg)

If you have to omit labels due to lack of space, use an icon that clearly and unambiguously represents the action.

![button group icons](images/components/button-groups/icons3.svg)

For detailed documentation on adding icons to button groups, view the [design specs](https://xd.adobe.com/view/f1da7e56-5f40-48b1-9502-c3da540a7068-a489/screen/0221f047-f6ae-4f88-92d0-29d69d4be97b/specs/).

<br>

#### Using button dropdowns

Button dropdowns are acceptable in button groups. For more information about button dropdowns, see [button dropdowns](https://zui.zywave.comcomponents/button-dropdowns/).

![button group dropdowns](images/components/button-groups/buttondropdown.svg)

Arrange primary actions on the left, followed by a button dropdown as the last button in a group.

The `zui-more` icon indicates a button dropdown within a button group. A button label with a chevron may also be used to indicate a button dropdown within a button group when more specificity is desired.

For detailed documentation on using button dropdowns in button groups, view the [design specs](https://xd.adobe.com/view/f1da7e56-5f40-48b1-9502-c3da540a7068-a489/screen/aae0de17-ab8f-4713-b765-53f512169cd7/specs/).

<br>

Dropdowns can be placed anywhere in a button group as long as the buttons are ordered logically, either by usage or importance.

![button group dropdowns](images/components/button-groups/buttondropdown2.png)

---

## States

![button group states](images/components/button-groups/states.svg)

The focused state for button groups uses an internal borderline. All of the other states follow regular [buttons](https://zui.zywave.comcomponents/buttons/) guidelines.

<br>

#### Normal

Normal state is the initial state of the button group when the page first loads and before any action is taken.

#### Hover

Hover state occurs when the user hovers over a button or button dropdown with their mouse.

#### Focus

Focus state appears when the button or button dropdown is currently selected and awaiting action. This commonly occurs when using a keyboard to navigate.

#### Pressed

Pressed state occurs when a user clicks (or hits enter on a keyboard). This state only appears briefly while the page/action is loading.

#### Disabled state

Disabled state occurs when an action currently isn't available. Disabled button groups should only be used when an action can be taken within the current UI to enable the button. If no action can be taken to enable the button group, then the button group should be hidden instead of disabled.

A single button in a button group can be disabled as well as the entire button group.

For detailed documentation on our button groups states, view the [design specs](https://xd.adobe.com/view/f1da7e56-5f40-48b1-9502-c3da540a7068-a489/screen/e977216b-4526-4bc5-9899-bdbaa4141307/specs/).

<br>

#### Icons button group states

![button group icon states](images/components/button-groups/states2.svg)

For detailed documentation on our button groups states, view the [design specs](https://xd.adobe.com/view/f1da7e56-5f40-48b1-9502-c3da540a7068-a489/screen/20cde077-f0e1-4e45-8e99-cc2e77a332a7/specs/).

---

## Best-practices

Button groups should follow the best practices outlined in the [button](https://zui.zywave.comcomponents/buttons/) component and guidelines for the [button dropdown](https://zui.zywave.comcomponents/button-dropdowns/) component when included.

<br>

#### Buttton arrangement

<Grid>

<GridCol col="span-6">

<Do />

- Arrange primary actions on the left, followed by secondary actions, and tertiary actions as the last button in a group.
- When using 2 buttons, one as a primary and one as a dropdown, place them as separate buttons.

</GridCol>

<GridCol col="span-6">

<DoNot />

Arrange tertiary actions as the first button in a group or have secondary actions before primary actions.

</GridCol>

</Grid>

<spacer size="small" />

#### Button styling

<Grid>

<GridCol col="span-6">

<Do />

Always use the same button and button dropdown style variation in a button group for a consistent style. For example, all actions have the primary button style.

</GridCol>

<GridCol col="span-6">

<DoNot />

Avoid combining primary and secondary buttons in the same button group.

</GridCol>

</Grid>

<spacer size="small" />

#### Button labeling

<Grid>

<GridCol col="span-6">

<Do />

Use action labels that are 1-3 short words.

</GridCol>

<GridCol col="span-6">

<DoNot />

Use action labels that are long or more than 3 words.

</GridCol>

</Grid>

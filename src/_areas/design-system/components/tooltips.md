---
title: Tooltips
subtitle: Unobtrusive messages that provide the user with simple information
  when interacting with an interface element.
api: https://cdn.zywave.com/@zywave/zui-tooltip@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-tooltip@next/demo/index.html
mainComponentName: zui-tooltip
includedElements: []
---
## Usage

Tooltips are user-triggered messages that help provide additional information to the page element during the user's workflow. It is usually activated by a mouse-hover action or keyboard-hover action. 

* Tooltips can be paired with any page element, such as icons, buttons, texts etc.
* These messages should not be critical for the user to read and there should be no action included within them.
* Tooltips trigger on hover and remain active until the user is no longer hovering over that page element. A 200ms dissolve transition fades tooltips on and off the page.



- - -

## Types

With an icon

With a text 

- - -

## Anatomy

![Tooltip anatomy](/images/components/tooltips/tooltips-anatomy.svg)

1. Body - Centered above page element
2. Text - Centered within Tooltip

- - -

## Positioning

![Tooltip positioning](/images/components/tooltips/tooltips-positioning.svg)

* The tooltip positioning will default to the top of whatever page element is being hovered.
* Special use cases may arrive in which the bottom, right, and left tooltip positions may be used if there is not sufficient space to display the tooltip, such as a top bar tooltip.

- - -

## Behavior

### Mouse-hover gesture



### Keyboad-hover gesture

When using a keyboard, users can \[tab] through page elements to select and complete actions. Users can view Tooltip messages when a page element is in its keyboard focus state. 

- - -

## Best practices

* Use a tooltip to help users understand unknown or unfamiliar objects that are not described directly on the page.
* Use a tooltip when a control does not have a text label to explain it.
* Always make sure the arrow is pointing at the paired page element and is centered on the tooltip message

![Tooltip best practices](/images/components/tooltips/tooltips-bestpractice.svg)

* Tooltips should include short, descriptive text that is succinct enough to remain on one line.
* In special cases, this text may flow onto a second line within the tooltip. However, if the text is too complex or an action needs to be taken, you may need to consider a different delivery option for this information.
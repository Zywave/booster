---
layout: component
api: https://cdn.zywave.com/@zywave/zui-tooltip/@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-tooltip/@next/demo/index.html
mainComponentName: zui-tooltip
includedElements: []
title: Tooltips
subtitle: Unobtrusive messages that provide the user with simple information when hovering over a page element.
---

## What are tooltips?

- Tooltips are unobtrusive messages that provide the user with simple information when hovering over a page element.

- Tooltips are anchored to the page element in which they are referencing.

- These messages should not be critical for the user to read and there should be no action included within them.

- Tooltips trigger on hover and remain active until the user is no longer hovering over that page element. A 200ms dissolve transition fades tooltips on and off the page.

---

## When to use tooltips

- Use a tooltip to help users understand unknown or unfamiliar objects that are not described directly on the page.

- To provide information to users when they need it, and to help free up screen space

- Use a tooltip when a control does not have a text label to explain it.

---

## Tooltip anatomy

![Tooltip anatomy](images/components/tooltips/tooltips-anatomy.svg)

1. Body - Centered above page element
2. Text - Centered within Tooltip

---

## Positioning

![Tooltip positioning](images/components/tooltips/tooltips-positioning.svg)

- The tooltip positioning will default to the top of whatever page element is being hovered.
- Special use cases may arrive in which the bottom, right, and left tooltip positions may be used if there is not sufficient space to display the tooltip, such as a top bar tooltip.

---

## Best practices

![Tooltip best practices](images/components/tooltips/tooltips-bestpractice.svg)

- Tooltips should include short, descriptive text that is succinct enough to remain on one line.
- In special cases, this text may flow onto a second line within the tooltip. However, if the text is too complex or an action needs to be taken, you may need to consider a different delivery option for this information.

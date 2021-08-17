---
layout: component
api: https://cdn.zywave.com/@zywave/zui-toggle/@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-toggle/@next/demo/index.html
mainComponentName: zui-toggle
includedElements: []
title: Toggles
subtitle: A page element used to enable or disable an associated setting or feature.
---

## What are toggles?

A toggle is a page element used to enable or disable an associated setting or feature. For the most effective toggle usage, consider these toggle best practices:

- Toggle settings should take effect immediately without the need for a confirm or save, just as a light switch is immediate.

- Subsequent changes to the UI from the change of a toggle setting&mdash;such as hiding, showing, enabling, or disabling content&mdash;are not only acceptable but expected.

- Labeling should generally be kept inline, to the left of a toggle and should imply the on/off or yes/no states.

- If necessary, on/off labels should be kept next to a toggle rather than inside the component itself.

---

## When to use toggles

Use a toggle when the user must select a single option from a set of two opposing states such as a yes or no, on or off. Toggles should be used sparingly&mdash;there are few situations in which a toggle is truly the best component choice. If you are questioning whether or not a toggle is the component you need to use, you may want to consider one of the following options instead.

### Alternate considerations

- Use a [dropdown multi-select](components/dropdown-multi-select/) if zero or more options can be selected and for lists larger than 10 items.
- Use a [dropdown select](components/dropdown-select/) if only one option can be selected and for lists larger than 10 items.
- Use a [radio button](components/radio-buttons/) if only one option can be selected and for lists smaller than 10 items.
- Use a [checkbox](components/checkboxes/) if zero or more options can be selected and for lists smaller than 10 items.

---

## Styling and anatomy

![Toggles](images/components/toggles/toggles.svg)

- Toggle height will always be 24px and width will always be 48px
- Clickable area of the radio button will always be 36px

---

## Toggle states

![Toggle States](images/components/toggles/toggles_states.svg)

### Normal

Normal state is the initial state of the toggle when the page first loads and before any action is taken. Toggles are always in a selected state&mdash;on or off&mdash;and can be enabled or, less commonly, disabled.

### Hover

Hover state occurs when the user hovers over the toggle with their mouse.

### Focus

Focus state appears when the toggle is currently selected and awaiting action. This commonly occurs when using a keyboard to navigate.

### Disabled

Disabled state occurs when an action currently isn't available. Disabled toggles are locked into their current state and should only be used when an action can be taken within the current UI to enable the toggle. If no action can be taken to enable the toggle, then the toggle should be hidden instead of disabled.

---

## Behavior and interaction

### Enabled

The handle is flush to one side or the other of the background. When the handle or the background is clicked, the handle slides smoothly, becoming flush with the opposite side of the background.

### Disabled

When a toggle is locked, the handle is still flush to one side or the other of the background depending on what state the toggle is locked in. However, when the handle or background is clicked, the handle will wiggle in its current position, indicating that the click was received, but the toggle state cannot be changed.

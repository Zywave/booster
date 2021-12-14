---
title: Tooltips
subtitle: Unobtrusive messages that provide the user with supplementary
  information when interacting with an interface element.
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

![Image for Tooltip usage](/images/usage.svg)

- - -

## Types

![Image for Tooltip anatomy](/images/tooltip-info.svg)

### Tooltip on icons

Tooltip message is paired with a page element. Users can activate the Tooltip by hovering over the page element. Tooltip will dismiss when users hover away from the element.

![Image for Tooltip anatomy](/images/tooltip-terminology.svg)

### Tooltip on terminology

Tooltip message is paired with a text element to help explain the terminology. Users can activate the Tooltip by hovering over the related text. Tooltip will dismiss when users hover away from the text element.

- - -

## Anatomy

For a more detailed breakdown of spacing and sizing, view the design specs.

![Image for Tooltip anatomy](/images/anatomy.svg)

1. **Tooltip:** showing a brief and concise message to help understand the page element
2. **Page element:** paired with Tooltips to indicate additional information is available on hover/focus state

- - -

## Positioning

![Tooltip positioning](/images/positioning.svg)

* The tooltip positioning will default to the top of whatever page element is being hovered.
* Depends on the page element's location, Tooltip messages can be placed at either bottom, right, or left of the element if there is not sufficient space to display the tooltip, such as a top bar tooltip.

- - -

## Behavior

### Mouse-hover gesture

Show Tooltips when users hover mouse over the page element. When mouse moves away from the element, Tooltips dismiss. 

### Keyboad-hover gesture

When using a keyboard, users can \[tab] through page elements to select and complete actions. Users can view Tooltip messages when a page element is in its keyboard focus state. When 

- - -

## Best practices

<docs-grid columns="2">

<div>

![Consider using ellipses from the second item onwards. Always leave the first Breadcrumb item visible to provide a clear starting point of the page hierachy.](/images/2-1.png)

<docs-do>
Keep Tooltip messages format text only.
</docs-do>

</div>

<div>

![Avoid placing ellipses at the beginning of a breadcrumb trail as it is beneficial for users to know the origin of the page structure, especially if they are directed from an external link](/images/2-2.png)

<docs-do-not>
Avoid placing actionable items on the Tooltip messages, such as buttons or link texts. Users will not be able to interact with these items because the message will disappear as users move the mouse away from the page elements.
</docs-do-not>

</div>

</docs-grid>

<docs-spacer>

</docs-spacer>

<docs-grid columns="2">

<div>

![Consider using ellipses from the second item onwards. Always leave the first Breadcrumb item visible to provide a clear starting point of the page hierachy.](/images/2-1.png)

<docs-do>
Tooltip messages must provide helpful information.
</docs-do>

</div>

<div>

![Avoid placing ellipses at the beginning of a breadcrumb trail as it is beneficial for users to know the origin of the page structure, especially if they are directed from an external link](/images/2-2.png)

<docs-do-not>
Tooltip messages should not repeat what's already visiable on the screen.
</docs-do-not>

</div>

</docs-grid>

<docs-spacer>

</docs-spacer>

<docs-grid columns="2">

<div>

![Consider using ellipses from the second item onwards. Always leave the first Breadcrumb item visible to provide a clear starting point of the page hierachy.](/images/2-1.png)

<docs-do>
Tooltips should be placed close to but not disrupting the related content. 
</docs-do>

</div>

<div>

![Avoid placing ellipses at the beginning of a breadcrumb trail as it is beneficial for users to know the origin of the page structure, especially if they are directed from an external link](/images/2-2.png)

<docs-do-not>
Ensure Tooltips do not block related page content. This will disturb users' workflow and cause repetitive actions (close Tooltips to view page element, hover and see Tooltips again, then close Tooltips and interact on the page).
</docs-do-not>

</div>

</docs-grid>

<docs-spacer>

</docs-spacer>

### Additional guidlines

* Use a tooltip when a UI element has little or no descriptive text label but uses may need a brief explaination to understand how to interact.
* Always make sure that the Tooltip arrow is pointing at the related page content and is centered on the tooltip message
* Use colors on page elements to call out for attention
* Keep Tooltips short and concise. In certain scenarios, this text may flow onto a second line within the tooltip. However, if the text is too complex or an action needs to be taken, you may need to consider a different delivery option for this information.
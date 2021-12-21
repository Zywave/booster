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

![Image for Tooltip usage](/images/usage.svg)

- - -

## Anatomy

For a more detailed breakdown of spacing and sizing, view the design specs.

![Image for Tooltip anatomy](/images/anatomy.svg)

1. **Container:** the container of the Tooltip
2. **Page element:** paired with Tooltips to indicate additional information is available on hover/focus state
3. **label:** displays a brief message that helps user interact with the page element
4. **Tip:** an arrow pointing from the Tooltip container to the related page element

- - -

## Placement

Depends on the page element's location, Tooltips can be placed at either top, bottom, right, or left of the related page element. 

![Tooltip positioning](/images/positioning.svg)

- - -

## Behavior

### Mouse-hover gesture

Tooltips trigger on hover and remain active until the user is no longer hovering over that page element. A 200ms dissolve transition fades tooltips on and off the page.

### Keyboad-hover gesture

When using a keyboard, users can \[tab] through page elements to select and complete actions. Tooltips appear when an element is in its keyboard focus state. 

- - -

## Best practices

<docs-grid columns="2">

<div>

![Keep Tooltips simple by only including texts.](/images/do.svg)

<docs-do>
Keep Tooltips simple by only including texts.
</docs-do>

</div>

<div>

![Avoid placing actionable items on the Tooltip messages, such as buttons or link texts. Users will not be able to interact with these items because the message will disappear as users move the mouse away from the page elements.](/images/don-t.svg)

<docs-do-not>
Avoid placing actionable items on the Tooltip messages, such as buttons or link texts. Users will not be able to interact with these items because the message will disappear as users move the mouse away from the page elements.
</docs-do-not>

</div>

</docs-grid>

<docs-spacer>

</docs-spacer>

<docs-grid columns="2">

<div>

![Tooltip messages must provide helpful information.](/images/do-–-1.svg)

<docs-do>
Tooltip messages must provide helpful information.
</docs-do>

</div>

<div>

![Tooltip messages should not repeat what's already visiable on the screen.](/images/don-t-–-1.svg)

<docs-do-not>
Tooltip messages should not repeat what's already visiable on the screen.
</docs-do-not>

</div>

</docs-grid>

<docs-spacer>

</docs-spacer>

<docs-grid columns="2">

<div>

![Tooltips should be placed close to but not disrupting the related content.](/images/do-–-2.svg)

<docs-do>
Tooltips should be placed close to but not disrupting the related content. 
</docs-do>

</div>

<div>

![Ensure Tooltips do not block related page content. This will disturb users' workflow and cause repetitive actions (close Tooltips to view page element, hover and see Tooltips again, then close Tooltips and interact on the page).](/images/don-t-–-2.svg)

<docs-do-not>
Ensure Tooltips do not block related page content. This will disturb users' workflow and cause repetitive actions (close Tooltips to view page element, hover and see Tooltips again, then close Tooltips and interact on the page).
</docs-do-not>

</div>

</docs-grid>

<docs-spacer>

</docs-spacer>

<docs-grid columns="2">

<div>

![Use a dotted blue underline as an alternative to trigger Tooltips on terminologies, or short phrases when additional explaination is needed.](/images/do-–-3.svg)

<docs-do>
Use a dotted blue underline as an alternative to trigger Tooltips on terminologies, or short phrases when additional explaination is needed.
</docs-do>

</div>

<div>

![Ensure Tooltips do not block related page content. This will disturb users' workflow and cause repetitive actions (close Tooltips to view page element, hover and see Tooltips again, then close Tooltips and interact on the page).](/images/do-–-4.svg)

<docs-do-not>
Avoid using icons to initiate Tooltips when the page element/text is not right next to it because this may confuse users on what this Tooltip is associated with.
</docs-do-not>

</div>

</docs-grid>

<docs-spacer>

</docs-spacer>

### Additional guidlines

* Always make sure that the Tooltip arrow is pointing at the related page content and is centered on the tooltip message
* Use colors on page elements to call out for attention
* Keep Tooltips short and concise. In certain scenarios, this text may flow onto a second line within the tooltip. However, if the text is too complex or an action needs to be taken, you may need to consider a different delivery option for this information.
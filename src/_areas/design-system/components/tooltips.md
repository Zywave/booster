---
title: Tooltips
subtitle: Unobtrusive messages that provide supplementary information
api: https://cdn.zywave.com/@zywave/zui-tooltip@latest/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-tooltip@latest/docs/demo.html
mainComponentName: zui-tooltip
includedElements: []
---
## Usage

Tooltips are user-triggered messages that help provide additional information to a page element. They are usually activated by a mouse hover, keyboard focus, or tap.

* Tooltips can be paired with any page element, such as icons, buttons, text, etc.
* Tooltip messages should not be critical for the user to read.
* There should be no action included within tooltips.

![Image for Tooltip usage](/images/usage.svg)

- - -

## Anatomy

For a more detailed breakdown of spacing and sizing, view the [design specs](https://xd.adobe.com/view/60ad1798-1756-4ac9-b083-76c368b0cd13-35fe/).

![Image for Tooltip anatomy](/images/anatomy.svg)

1. **Container:** the container of the Tooltip
2. **Page element:** paired with Tooltips to indicate additional information is available on hover/focus state
3. **Label:** a brief message that provides additional information to users
4. **Tip:** an arrow pointing from the Tooltip container to the related page element

- - -

## Placement

Depending on the location, Tooltips can be placed at the top, bottom, right, or left of the related page element.

![Tooltip positioning](/images/placement.svg)

- - -

## Behavior

### Mouse hover action

Tooltips appear on hover and remain active until the user's cursor is no longer hovering over the associated page element. A 200ms fade transitions the visibility of Tooltips.

### Keyboard focus

When using a keyboard, users can use \[tab] key to go through and select page elements. Tooltips appear when an element is in its keyboard focus state. 

### Tap gesture

For mobile devices such as cellphones and tablets, mouse-hover and keyboard focus states are not accessible for users. Tooltips are activated by tapping on the page element, and tap again to deactivate Tooltips.

- - -

## Best practices

<docs-grid columns="2">

<div>

![Keep Tooltips simple by only including concise texts.](/images/do-1.svg)

<docs-do>
Keep Tooltips simple by only including concise text.
</docs-do>

</div>

<div>

![Avoid placing actionable items in Tooltips, such as buttons and text links. Users will not be able to interact with them because the message will disappear as soon as the users move their cursor away from the page elements.](/images/don-t-1.svg)

<docs-do-not>
Avoid placing actionable items in Tooltips, such as buttons and text links. Users will not be able to interact with them because the message will disappear as soon as they move their cursors away from the page elements.
</docs-do-not>

</div>

</docs-grid>

<docs-spacer>

</docs-spacer>

<docs-grid columns="2">

<div>

![Tooltip messages must provide helpful information.](/images/do-–-2.svg)

<docs-do>
Tooltip messages must provide helpful information.
</docs-do>

</div>

<div>

![Tooltip messages should not repeat what's already visiable on the screen.](/images/don-t-–-2.svg)

<docs-do-not>

Tooltip messages should not repeat what's already visible on the screen.

</docs-do-not>

</div>

</docs-grid>

<docs-spacer>

</docs-spacer>

<docs-grid columns="2">

<div>

![Tooltips should be placed close to related content without being disruptive.](/images/do-–-3.svg)

<docs-do>
Tooltips should be placed close to related content without being disruptive.
</docs-do>

</div>

<div>

![Ensure Tooltips do not block related page content. This will disrupt users' workflow and cause repetitive actions.](/images/don-t-–-3.svg)

<docs-do-not>
Ensure that Tooltips do not block related page content. This will disrupt users' workflow and cause repetitive actions.
</docs-do-not>

</div>

</docs-grid>

<docs-spacer>

</docs-spacer>

<docs-grid columns="2">

<div>

![Use a dotted blue underline as an alternative to trigger Tooltips on terminologies, or short phrases when additional explaination is needed.](/images/do-–-4.svg)

<docs-do>
Use a dotted blue underline as an alternative to trigger Tooltips on terminologies or short phrases when additional explanation is needed.
</docs-do>

</div>

<div>

![Ensure Tooltips do not block related page content. This will disturb users' workflow and cause repetitive actions (close Tooltips to view page element, hover and see Tooltips again, then close Tooltips and interact on the page).](/images/don-t-–-4.svg)

<docs-do-not>
Avoid using icons to initiate Tooltips when the page element/text is not right next to it because this may confuse users on what this Tooltip is associated with.
</docs-do-not>

</div>

</docs-grid>

<docs-spacer>

</docs-spacer>

<docs-grid columns="2">

<div>

![Use the info icon for all Tooltips.](/images/do-6.svg)

<docs-do>
Use the info icon for all Tooltips.
</docs-do>

</div>

<div>

![Avoid using the help icon for Tooltips. This icon has been depreciated. ](/images/don-t-6.svg)

<docs-do-not>
Avoid using the help icon for Tooltips. This icon has been depreciated. 
</docs-do-not>

</div>

</docs-grid>

<docs-spacer>

</docs-spacer>

<docs-grid columns="2">

<div>

![Use broswers' native title attributes to represent advisory information related to the element](/images/do-–-5.svg)

<docs-do>
Use browsers' native title attributes to represent advisory information related to the element. If there is no visible name for the element you can reference, use aria-label to provide the user with a recognizable accessible name.
</docs-do>

</div>

<div>

![Avoid using Tooltips the same way as title attributes](/images/don-t-–-5.svg)

<docs-do-not>
Avoid using Tooltips the same way as title attributes.
</docs-do-not>

</div>

</docs-grid>

<docs-spacer>

</docs-spacer>

### Additional guidelines

* Always make sure that the Tooltip arrow is pointing at the associated page content and is vertically or horizontally centered based on the tooltip message
* Keep Tooltips brief and concise. In certain scenarios, this text may flow onto a second line within the Tooltip. If the text is too complex or an action needs to be taken, you may need to consider a different delivery option for this information.
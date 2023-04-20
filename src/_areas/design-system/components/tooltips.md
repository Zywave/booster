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

* Tooltips can be paired with any trigger, such as icons, buttons, text, etc...
* Tooltip messages should not be critical for the user to read
* There should be no action included within tooltips

![Image for Tooltip usage](/images/usage.svg)

- - -

## Anatomy

For a more detailed breakdown of spacing and sizing, view the [design specs](https://xd.adobe.com/view/60ad1798-1756-4ac9-b083-76c368b0cd13-35fe/).

![Image for Tooltip anatomy](/images/anatomy.svg)

1. **Container:** the container of the Tooltip
2. **Trigger:** indicate additional information is available via Tooltip on hover/focus
3. **Label:** a brief message that provides additional information to users
4. **Tip:** an arrow pointing from the Tooltip container to the related page element - always make sure that the Tooltip arrow is pointing at the associated page content and is vertically or horizontally centered based on the tooltip message 

- - -

## Placement

Depending on the location, Tooltips can be placed at the top, bottom, right, or left of the related page element.

![Tooltip positioning](/images/placement.svg)

- - -

## Behavior

### Mouse hover action

Tooltips appear on hover and remain active until the user's cursor is no longer hovering over the associated trigger. A 200ms fade transitions the visibility of Tooltips.

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

![Place actionable items in Tooltips, such as buttons and text links. Users will not be able to interact with them because the message will disappear as soon as the users move their cursor away from the page elements.](/images/don-t-1.svg)

<docs-do-not>
Place actionable items in Tooltips, such as buttons and text links. Users will not be able to interact with them because the message will disappear as soon as the users move their cursor away from the page elements.
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

![Do not block related page content or important functionality of the page.](/images/don-t-–-3.svg)

<docs-do-not>
Do not block related page content or important functionality of the page.
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

![Only use the info icon when an icon is used as the trigger for a Tooltip.](/images/do-6.svg)

<docs-do>
Only use the info icon when an icon is used as the trigger for a Tooltip.
</docs-do>

</div>

<div>

![The help icon should not be used as a trigger for a Tooltip. The help icon can be used with [Popovers](/design-system/components/popovers/) when a link to more helpful information might be necessary.](/images/don-t-6.svg)

<docs-do-not>
The help icon should not be used as a trigger for a Tooltip. The help icon can be used with [Popovers](https://booster.zywave.dev/design-system/components/popovers/) when a link to more helpful information might be necessary.
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
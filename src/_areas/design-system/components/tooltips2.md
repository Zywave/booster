---
title: Global alert banner
subtitle: A banner at the top of a page to communicate critical messages to users
api: https://cdn.zywave.com/@zywave/zui-tooltip@latest/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-tooltip@latest/docs/demo.html
mainComponentName: zui-tooltip
includedElements: []
---
## Usage

Alert banners are employed to communicate critical messages regarding billing issues or service outages, which directly impact the user's ability to utilize the product.

* Only one alert banner should ever display at a time
* Alert banners push all content below down the page
* Alert banners should only be used to display critical messaging about billing or disruptions that effects the user's ability to use the product. Do not use alert banners for marketing messages, feature announcements, user tips, etc...

- - -

## Anatomy

![](/images/anatomy-–-2.png)

1. **Container:** solid background color. Either Red 500 or Yellow 500 - depending on the severity of the alert
2. **Icon:** use the solid fill warning icon (fill #31313A), positioned 10px the left of the alert content
3. **Action (optional):** A link to a call to action or next steps. Link is underlined and #31313A
4. **Dismiss button (optional):** banner alerts are dismissible if the alert is notifying user of an issue, alerts are persistent if the user must take action on the alert.

- - -

## Placement

![](/images/anatomy-–-1.png)

* Alert banners appear on every page within production, unless dismissed by user or taken down
* The alert banner sits on top of ZUI Shell and pushes all content down
* Alert banners span the full width of the page
* Always at the very top of the page
* Max 50px high... ***does this expand on smaller screen sizes? what if message goes on 2 lines?
  mocks***

- - -

## Behavior

### Dismissing alert

* Alerts are dismissible if the alert is only notifying a user of an issue
* Alerts are *not* dismissible if the user needs to take action

### Background color

The background color of the alert changes from Yellow 500 to Red 500 when the deadline of the user action is within **30** days. 

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
Place actionable items in Tooltips, such as buttons and text links. Users will not be able to interact with them because the message will disappear as soon as the users move their cursor away from the associated trigger.
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

![The help icon should not be used as a trigger for a Tooltip. The help icon can be used with Popovers when a link to more helpful information might be necessary.](/images/don-t-6.svg)

<docs-do-not>
The help icon should not be used as a trigger for a Tooltip. The help icon can be used with <a href="/design-system/components/popovers/">Popovers</a> when a link to more helpful information might be necessary.
</docs-do-not>

</div>

</docs-grid>

<docs-spacer>

</docs-spacer>

<docs-grid columns="2">

<div>

![Use the HTML global attribute title to represent advisory information related to the element.](/images/do-–-5.svg)

<docs-do>
Use the HTML global attribute title to represent advisory information related to the element. If there is no visible name for the element you can reference, use aria-label to provide the user with a recognizable accessible name.
</docs-do>

</div>

<div>

![Avoid using Tooltips the same way as the HTML global attribute title.](/images/don-t-–-5.svg)

<docs-do-not>
Avoid using Tooltips the same way as the HTML global attribute title.
</docs-do-not>

</div>

</docs-grid>

<docs-spacer>

</docs-spacer>
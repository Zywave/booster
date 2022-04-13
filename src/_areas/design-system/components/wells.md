---
title: Wells
subtitle: ""
api: https://cdn.zywave.com/@zywave/zui-well@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-well@next/demo/index.html
mainComponentName: zui-well
includedElements: []
---
![Well usage](/images/well_usage-–-1.svg)

<docs-spacer size="small"><docs-spacer>

## Usage

Wells are delivery mechanisms for providing Zywave system-generated or user-initiated feedback. Wells should be used when the message requires more attention than uncontained text without shifting the focus away from the current page.

The Well color and icon add emphasis to the message while visually indicating the type of message contained within. Typically, Wells are present on page load, but in rare cases they may animate in to draw more attention to the message.

<docs-note>For more information on when a Well is the appropriate delivery system, [see messages.](/design-system/voice-and-tone/messages/)</docs-note>

- - -

## Anatomy

![An image of a Well with numbers pointing to the different parts that make up its anatomy](/images/well_anatomy-–-1.svg)

A Well is broken up into six distinct parts:

1. **Sidebar:** A block of color that defines the type of message contained within the Well. Blue for info, yellow for warning, and red for error.
2. **Icon:** A visual representation of the type of message contained within the Well⁠—info, warning, or error.  
3. **Header (optional):** An H3, one-line header that briefly describes the message in 65 characters or less.
4. **Action (optional):** A single action associated with the contents of the message, such as "View document."
5. **Body text:** The main message of the Well, spanning three lines or less with a max-width of 65 characters per line without spaces.
6. **Close (optional):** For dismissible Wells, the X allows the user to close the message. 

<docs-note>For detailed documentation on our well anatomy, view the [ZUI well design specs](https://xd.adobe.com/view/6f1e7711-b6ef-4f78-b179-700ddde71e4a-3a4d/).</docs-note>

<hr>

## Types

Wells can contain three different types of messages signified by their color and icon. These visual differences also indicate the importance of the message to the user. Aside from the different messaging types, Wells can also be broken up into default, dismissible and banner types. 

<docs-spacer size="small"></docs-spacer>

### Info well

![Info well](/images/info_well-–-1.svg)

<br> 

Info Wells are blue and contain the `zui-info` icon. Info Wells provide additional information or context that a user might find helpful.

<docs-spacer size="small"></docs-spacer>

### Warning well

![Warning well](/images/warning_well-–-1.svg)

<br>

Warning Wells are yellow and contain the `zui-warning` icon. Warning Wells inform the user of potentially undesirable or destructive outcomes of an action, or that something has occurred that may have a negative impact on their experience.

<docs-spacer size="small"></docs-spacer>

### Error well

![Error well](/images/error_well-–-1.svg)

<br>

Error Wells are red and contain the `zui-error` icon. Error Wells tell the user that an attempted action or product feature has failed. 

<docs-spacer size="large"></docs-spacer>

### Default Well (static)

By default, Wells appear on page load and remain static on the page regardless of the actions a user takes. These default Wells are the most common type of Wells used. 

<docs-spacer size="small"></docs-spacer>

### Dismissible Well

![Dismissible info Well](/images/dismissible_well-–-1.svg)

<br>

On some occasions, a Well does not need to remain present on the screen at all times. Dismissible Wells should still appear on page-load, but the user has the ability to close the message. Dismissible Wells should be used for reminders, messages that have minimal impact, or messages that appear frequently but do not impede the user's workflow. 

We recommend that the application remember when a Well is dismissed to prevent it from reappearing should the user refresh or return to the page using the back button.

The close Button uses hover, focus and pressed states of Icon Link Buttons. For more information on these states see the [Buttons guidelines](/design-system/components/buttons/).

<docs-spacer size="small"></docs-spacer>

### Banner well

![Full-width banner Well](/images/banner_well-–-1.svg)

<br>

A banner Well spans the entire width of a page. Banner Wells are used to deliver site-wide messages, messages that appear across multiple pages within a workflow, or important messages that should be reviewed prior to taking action on the page. 

A banner Well should always appear on page load and never animate in to prevent the contents of the page from shifting. 

<hr>

## Behavior

### Well animation

![Animated GIF of an Error Well appearing](/images/well-animation-loop.gif)

<br>

To call attention to a Well, it may be animated as it appears on the page. A Well should only be animated after the user takes an action to trigger its appearance. Because the animation will cause the Well to push content down on the page, it should be used sparingly. 

<docs-spacer size="small"></docs-spacer>

### Positioning

By default, Wells should be positioned at the top-left of the page or near the content that it's associated with. However, if the Well is triggered by an action on the page, it should be closely associated with the action. 

- - -

## Best-practices

### Message length

<docs-grid columns="2">
<div>

![Info Well with a message that spans two lines](/images/message-length_do-–-1.svg)

<docs-do>

Use concise language to keep Well messages between 1 and 3 lines.

</docs-do>
</div>
<div>

![Warning Well with a very short and vague message.](/images/message-length_do-not-–-1.svg)

<docs-do-not>

Do not use messages that span beyond 3 lines or are too short to provide proper context.

</div>
</docs-do-not>
</docs-grid>

<docs-spacer size="small"></docs-spacer>

### Multiple wells

In some situations it may be necessary for more than one Well to appear on a page at one time. This would occur when a Well appears on page load, and another Well appears after a user completes an action on the page. 

<docs-grid columns="2">
<div>

![An error Well placed above buttons that triggered it](/images/multiple_do-–-1.svg)

<docs-do>

Closely associate additional Wells on a page with the content that triggered them. 

</docs-do>
</div>
<div>

![Two Wells stacked on top of each other](/images/multiple_do-not-–-1.svg)

<docs-do-not>

Do not display multiple Wells on page load. 

</docs-do-not>
</div>
</docs-grid>

<docs-spacer size="small"></docs-spacer>

### Actions

<docs-grid columns="2">
<div>

![An info Well with one action](/images/action_amount_do-–-1.svg)

<docs-do>

Include only one action within a Well. 

</docs-do>
</div>
<div>

![An action Well with more than one action](/images/action_amount_do-not-–-1.svg)

<docs-do-not>

Do not include more than 1 action within a Well. 

</docs-do-not>
</div>
<div>

![A Well with the action color matching the color of the Well](/images/action_color_do-–-1.svg)

<docs-do>

Use a text link that matches the color of the Well sidebar

</docs-do>
</div>
<div>

![A Well with an action that is a different color than the color of the Well](/images/action_color_do-not-–-1.svg)

<docs-do-not>

Do not use a Button as an action in a Well.

</docs-do-not>
</div>
<div>

![A Well containing a descriptive action](/images/action__do-–-1.svg)

<docs-do>

Use descriptive, actionable text for the action.

</docs-do>
</div>
<div>

![A Well containing a vague action](/images/action_do-not-–-1.svg)

<docs-do-not>

Do not use vague, non-actionable text such as "Details".

</docs-do-not>
</div>
</docs-grid>
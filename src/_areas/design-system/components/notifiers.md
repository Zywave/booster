---
title: Notifiers
subtitle: An unobtrusive alert that provides feedback
api: https://cdn.zywave.com/@zywave/zui-notifier@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-notifier@next/demo/index.html
mainComponentName: zui-notifier
includedElements: []
---
## Usage

Notifiers are unobtrusive alerts that provide a short feedback message. Notifiers can be either Zywave system generated or user-initiated.

</br>

![Example of a Notifier](/images/notifier-usage.svg)

</br>

Notifiers should be used to:

* provide general information about the current process
* alert and inform about something that happened in the system
* inform about server-side issues or errors
* provide a timely alert that does not interfere with the current workflow

For more information on when a Notifier is the appropriate delivery component, see [messages](/design-system/voice-and-tone/messages/).

- - -

## Anatomy

![Notifier anatomy](/images/notifier-anatomy.svg)

Notifiers consist of an opaque background, drop shadow, icon, text, and close button to dismiss the message.

* **Top bar:** Defines the type of Notifier by color: info (blue), success (green), error (red).
* **Icon:** Defines the type of Notifier by an icon: info, success, error.
* **Header:** Briefly describes the message to the user. The header should be H3 and remain on one line, with a max-width of 50 characters.
* **Body text:** Provides supporting content for the header. The body text should be kept straightforward and span no longer than 3 lines.
* **Action (optional):** A single action associated with the message, such as 'View details.'
* **Close:** A close button allows the user to dismiss the message.

For detailed documentation on our Notifier anatomy, view the [ZUI Notifier design specs](https://xd.adobe.com/view/759fc73f-c8df-44b6-adb5-b600e2badaf3-20cc/grid/).

- - -

## Types

The three types of available Notifier types are identified by the different colors and icons. These identifying features allow someone to know, at a glance, the type and importance of the message contained within.

<docs-spacer size="small"></docs-spacer>

### Info Notifier

Used to provide general information about the product or current process.



![Info Notifier](/images/notifier-type-info.svg)

<docs-spacer size="small"></docs-spacer>

### Success Notifier

Used to provide information that an action or workflow has been completed successfully.

![Success Notifier](/images/notifier-type-success.svg)



<docs-spacer size="small"></docs-spacer>

### Error Notifier

Used to alert the user of server-side issues or errors or that an error was encountered while performing an action or workflow.

![Error Notifier](/images/notifier-type-error.svg)



- - -

## Behavior

### Positioning

Notifiers are anchored to the top right of the viewport above all other content in z-space, including Dialogs.

![Notifier positioning](/images/notifier-positioning.svg)

<docs-spacer size="small"></docs-spacer>

### Timing

By default, Notifiers will be on a timer and disappear on their own without the need for interaction. The Notifier must also include a close button in the upper right corner for manual dismissal of the message.  When a Notifier includes an action, timing should be disabled to prevent the message from disappearing before the action can be clicked or tapped. 

The timer ***should be*** used in cases where the Notifier includes non-crucial information, for example:

* when there is general information about the product or current process, such as syncing, that does not require the user to take action.
* when there is an action or workflow that has been completed successfully, such as the user successfully adding an account.

The timer ***should not be*** used in cases where the Notifier includes an action or error, for example:

* when there is an action that the user may choose to explore, such as viewing details on an imported file.
* when the Notifier contains an error message

The default length of time a Notifier will remain on the screen after animating in is 5 seconds. This time can be adjusted based on the length of the message. We recommend not reducing the time for shorter messages, but longer messages can be extended — an additional 1 second for every 120 characters is a good rule of thumb.

### Animation

Notifiers slide up and fade in as they appear on the screen, and slide down and fade out as they disappear.

<center>

![Notifier animation](/images/components/notifier/zui-notifier-animation-demo.gif)

</center>

- - -

## Responsive layout

![Mobile notifier](/images/notifier-responsive.svg)

While the behavior remains unchanged, the location of Notifiers is different on mobile devices with viewports smaller than 720px. The Notifiers on mobile devices should be pinned to the bottom of the screen to make it easier to dismiss while holding the device.

\[INSERT NOTE] The responsive behavior for Notifiers is not yet available in the toolkit.

- - -

## Best practices

<Docs-grid columns="2">
<div>

![Keep Notifier information general](/images/do-notifier-action.svg)


<docs-do>
Use a Notifier to give the user general information, such as notifying the user of a document ready for review.
</docs-do>

</div>

<div>

![Do not include required actions](/images/donot-notifier-action.svg)

<docs-do-not>

A Notifier should not be used to give the user in-depth information that requires more emphasis or to remain on the page, a well or dialog should be used in this case.

</docs-do-not>
</div>
</docs-grid>

<docs-spacer size="small">
</docs-spacer>

<docs-grid columns="2">
<div>

![Success Notifier after workflow is complete](/images/do-notifier-frequency.svg)

<docs-do>

Use a Notifier to alert the user that their action was successful, such as informing the user that their import is complete.
</docs-do>

</div>

<div>

![Do not use a Notifier for every action on a page](/images/donot-notifier-frequency.svg)

<docs-do-not>

A Notifier should not be used to alert the user that every action is successful, this should be used for larger actions such as import or the completion of a larger workflow.
</docs-do-not>

</div>
</docs-grid>

<docs-spacer size="small"></docs-spacer>

### Actions

![Notifier actions](/images/notifier-action.svg)

Notifiers can include a single action associated with the message. Notifier actions are styled similar to text links, but are the same color as the Notifier top bar.

Actions should only be used when there is more information associated with the message that may be explored further. When the action is pressed, the Notifier is dismissed and the user is routed to the correct location. Consider a different delivery method for required actions.

Examples of when actions could be used:

* In an informational Notifier about a new enhancement as a link for further information.
* In a success Notifier about a successful import as a link to view the import details.

If the action must remain visible to is required, a [well](/design-system/components/wells/) or [dialog](/design-system/components/dialogs/) may be the appropriate delivery component.
<docs-spacer size="small"></docs-spacer>

<docs-grid columns="2">
<div>

![Notifier action is the same color as the top bar](/images/do-notifier-color.svg)

<docs-do>
Use the same action color as the Notifier color.
</docs-do>
</div>

<div>

![Notifier action is not the same blue as link colors](/images/donot-notifier-color.svg)

<docs-do-not>
An action should not use a different color than the Notifier.
</docs-do-not>
</div>
</docs-grid>

<docs-spacer size="small"></docs-spacer>

### Multiple notifiers

![Multiple notifiers](/images/components/notifier/notifier-multiple.svg)

When multiple Notifiers appear at one time on the screen, they should vertically stack so that all messages can be seen at once and further action can be taken if necessary.

There should not be more than three Notifiers on the screen at one time. A Notifier must be dismissed or allowed to time out before a new Notifier may appear.

Multiple Notifiers should be used sparingly and only be seen in certain circumstances, for example:

* multiple errors occurring on the same page.
* multiple notifications appearing from the same workflow.

\[INSERT NOTE] The ability to have more than 1 Notifier on a screen is not yet in the toolkit. 

- - -

## Alternate considerations

In the case of messaging:

* A [well](/design-system/components/wells/) may be the appropriate component if the message needs moderate emphasis or an action should remain visible to the user without a timed dismissal.
* A [dialog](/design-system/components/dialogs/) may be the appropriate component if the message needs high emphasis or a specific action the user must take.

In the case of errors:

* A [banner well](/design-system/voice-and-tone/error-messages/) may be the appropriate component when a feature or resource error occurs, such as a 404 resource not found error.
* An [error page](/design-system/voice-and-tone/error-messages/) may be the appropriate component when a critical system error occurs, such as a 500 internal server error.

For more information on when a Notifier is the appropriate delivery component, see [messages](/design-system/voice-and-tone/messages/).
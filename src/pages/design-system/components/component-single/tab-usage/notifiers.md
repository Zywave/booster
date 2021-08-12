---
title: Notifiers
parentIdentifier: components
permalink: design-system/components/notifiers/usage/
---

## Usage

Notifiers are unobtrusive messages that provide the user with a simple feedback alert.  Notifiers can be either Zywave system generated or user-initiated.

Notifiers should be used:

- to give the user general information about the product or current process.
- to alert the user and inform them that something happened in the system.
- to inform the user of server-side issues or errors that are not at the fault of the user.
- to provide a timely alert that does not interfere with the current actions of the user.

For more information on when a notifier is the appropriate delivery component, see [messages](/communications/messages/).

---

## Anatomy

![Notifier anatomy](images/components/notifier/notifier_anatomy.svg)

Notifiers consist of an opaque background, drop shadow, icon, text, and close button to dismiss the notifier.

- **Top bar:** Defines the type of notifier by color: info (blue), success (green), error (red).
- **Icon:** Defines the type of notifier by an icon: info, success, error.
- **Header:** Briefly describes the message to the user. The header should be H3 and remain on one line, with a max-width of 50 characters without spaces.
- **Body text:** Provides supporting content for the header. The body text should be kept simple and span no longer than 3 lines.
- **Action (optional):** A single action typically associated with the message, such as 'View details.'
- **Close:** A close button allows the user to dismiss the message.

For detailed documentation on our notifier anatomy, view the [ZUI notifier design specs](https://xd.adobe.com/view/759fc73f-c8df-44b6-adb5-b600e2badaf3-20cc/grid/).

---

## Types

We have three types of notifiers to help convey a message and each is color-coded with a unique icon. These features allow a user to know, at a glance, how important the message in that notifier is.

### Info notifier

![Info notifier](images/components/notifier/info_notifier.svg)

Used to give the user general information about the product or current process.

### Success notifier

![Success notifier](images/components/notifier/success_notifier.svg)

Used to inform the user that an action or workflow has been completed successfully.

### Error notifier

![Error notifier](images/components/notifier/error_notifier.svg)

Used to alert the user of server-side issues or errors that are not at the fault of the user.

---

## Responsive layout (WIP)

![Mobile notifier](images/components/notifier/mobile-notifier.svg)

While the behavior remains unchanged, the location of Notifiers is different on mobile devices with viewports smaller than 720px. The Notifiers on mobile devices should be pinned to the bottom of the screen instead of the top. This makes it easier for the user to dismiss the message or click the action contained within.

---

## Behavior

### Positioning

Notifiers are anchored to the top right of the viewport, above all content in z-space.

For example, if the user is within a dialog and triggers a notifier, the notifier will appear in the top right of the viewport, above all content on the screen, including the dialog.

![Notifier positioning](images/components/notifier/notifier_placement.svg)

### Timing

By default, notifiers will be on a timer and disappear on their own without interaction from the user. The notifier must also still include a close button in the upper right corner that will allow the user to manually dismiss the message.  When a notifier includes an action, timing should be disabled so that the user has a chance to click the action it contains.

A timer _should be_ used in cases where the notifier includes non-crucial information, for example:

- when there is general information about the product or current process, such as syncing that does not require the user to take action.
- when there is an action or workflow that has been completed successfully, such as the user successfully adding an account.

A timer _should not be_ used in cases where the notifier includes an action or error, for example:

- when there is an action that the user may choose to explore, such as viewing details on an imported file.
- when a server-side issue or error that is not at the fault of the user has occurred, such as a lost connection.

The default length of time a notifier will remain on the screen, after animating in, is 5 seconds. This time can be adjusted based on the length of the message. We recommend not reducing the time for shorter messages, but longer messages can be extended&mdash;an additional 1 second for every 120 characters is a good rule of thumb.

### Animation

Notifiers slide up and fade in as they appear on the screen, and slide down and fade out when they disappear.

![Notifier animation](images/components/notifier/zui-notifier-animation-demo.gif)

---

## Best practices

<Grid>

<GridCol col="span-6">

![Notifier information do](images/components/notifier/do_general.svg)

<Do />

Use a notifier to give the user general information, such as notifying the user of a document ready for review.

</GridCol>

<GridCol col="span-6">

![Notifier information do not](images/components/notifier/donot_indepth.svg)

<DoNot />

A notifier should not be used to give the user in-depth information that requires more emphasis or to remain on the page, a well or dialog should be used in this case.

</GridCol>

</Grid>

<Spacer size="small" />

<Grid>

<GridCol col="span-6">

![Notifier success do](images/components/notifier/do_success.svg)

<Do />

Use a notifier to alert the user that their action was successful, such as informing the user that their import is complete.

</GridCol>

<GridCol col="span-6">

![Notifier success do not](images/components/notifier/donot_overuse.svg)

<DoNot />

A notifier should not be used to alert the user that every action is successful, this should be used for larger actions such as import or the completion of a larger workflow.

</GridCol>

</Grid>

<Spacer size="small" />

### Actions

![Notifier actions](images/components/notifier/notifier_action.svg)

Notifiers can include a single action associated with the message. Notifier actions are styled similar to text links, but are the same color as the notifier top bar.

Actions should only be used when there is more information associated with the message that the user may choose to explore. When the action is pressed, the notifier is dismissed and the user is routed to the correct location.

Examples of when actions could be used:

- in an informational notifier with a message about a new enhancement and a link to more information.
- in a success notifier with a message that an import was successful and a link to view the import.

If the action must remain visible to the user or is critical for the user to take, a [well](components/wells/) or [dialog](components/dialogs/) may be the appropriate delivery component.

<Grid>

<GridCol col="span-6">

![Notifier action do](images/components/notifier/do_actioncolor.svg)

<Do />

Use the same action color as the notifier color.

</GridCol>

<GridCol col="span-6">

![Notifier action do not](images/components/notifier/donot_actioncolor.svg)

<DoNot />

An action should not use a different color than the notifier.

</GridCol>

</Grid>

<Spacer size="small" />

### Multiple notifiers (WIP)

![Multiple notifiers](images/components/notifier/notifier-multiple.svg)

When multiple notifiers appear at one time on the screen, they should vertically stack to allow the user to see all messages at once and dismiss or choose an action as needed.

There should not be more than three notifiers on the screen at one time, one of the three current notifiers must be dismissed or allowed to time out before a new notifier may appear.

Multiple notifiers should be used sparingly and only seen in certain circumstances, for example:

- multiple errors occurring on the same page.
- multiple notifications appearing from the same workflow.

---

## Alternate considerations

In the case of messaging:

- A [well](components/wells/) may be the appropriate component if the message needs moderate emphasis or an action should remain visible to the user without a timed dismissal.
- A [dialog](components/dialogs/) may be the appropriate component if the message needs high emphasis or a specific action the user must take.

In the case of errors:

- A [banner well](/communications/error-messages/) may be the appropriate component when a feature or resource error occurs, such as a 404 resource not found error.
- An [error page](/communications/error-messages/) may be the appropriate component when a critical system error occurs, such as a 500 internal server error.

For more information on when a notifier is the appropriate delivery component, see [messages](/communications/messages/).

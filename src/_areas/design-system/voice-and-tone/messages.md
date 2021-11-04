---
layout: documentation
title: Messages
subtitle: A message is a textual communication that tells the user what's going on within our product.
---

## What is a message?

A message is a communication with the user&mdash;one that's supposed to convey ideas and evoke a positive emotional response. When thinking about messages, it's essential to think about the content of that communication first, before considering the proper way to style it.

In other words, messages consist of two components. First, there's the message type, which refers to the kind of content the message needs to convey. Then, there's the delivery system, which refers to the design element used to present that content.

In order to build an effective message, think about what the user needs to know, when they need to know it, and what delivery systems are available to convey the message.

<hr>

## Delivery systems

Delivery systems are the vehicles we use to convey a message to the user. Remember, the message type&mdash;the information conveyed, the audience, the context on the page, etc.&mdash;should determine the type of delivery system used, not the other way around.

<Grid>
<GridCol col="span-4">

### <span id="wells">Wells</span>

A non-dismissible container with text. For more information, see [Wells](/design-system/components/wells/).

</GridCol>
<GridCol col="span-4">

### <span id="notifiers">Notifiers</span>

An unobtrusive, dismissible piece of text in a window element. For more information, see [Notifiers](/design-system/components/notifiers/).

</GridCol>
<GridCol col="span-4">

### <span id="dialogs">Dialogs</span>

Text displayed in a content box layered above the current page. For more information, see [Dialogs](/design-system/components/dialogs/).

</GridCol>
<GridCol col="span-4">

### <span id="tooltips">Tooltips</span>

A short, helpful piece of text produced by hovering, often an icon next to the field it is referencing. For more information, see [Tooltips](/design-system/components/tooltips/).

</GridCol>
<GridCol col="span-4">

### <span id="popovers">Popovers</span>

Text displayed in a content box adjacent to the form field or page section it applies to, that opens and closes with a click.

</GridCol>

<GridCol col="span-4">

### <span id="uncontained-text">Uncontained text</span>

Any text without styling around it. Uncontained text is available on screen at all times to give direction and context to the page or section.

</GridCol>

</Grid>

<hr>

## Message types

The message type refers to the specific content the message needs to convey. In addition to the information that the message contains, message type also considers the importance of the message as well as the tone of the message.

### General instruction

General instructions are basic page instructions or page section descriptions. General instruction messages provide context, letting the user know where they are or what they can do.

#### Delivery systems

[Uncontained text](#uncontained-text)

### Guidance

Guidance text offers the user additional information, instruction or context, and usually applies to a specific page element or action. Unlike alerts, guidance precedes the user's action and shouldn't interrupt a workflow. In other words, guidance may be helpful, but shouldn't be <strong>necessary</strong> for a user to complete their desired action.

There are three general kinds of guidance messages&mdash;suggestions, information and warnings. The boundaries between these kinds of messages may not always be distinct, and often the same set of facts could be conveyed in more than one kind of guidance message. That's why it might be helpful to think of these kinds of message as being on a continuum.

The importance of the message and desired tone will ultimately determine whether we think of a message as a suggestion, a piece of information, or a warning. That will also help determine the best the type of delivery system for the message.

![Guidance spectrum](/images/voice-and-tone/messages/guidance-spectrum.png)

<Grid>

<GridCol col="span-4">

#### Suggestion

A suggestion conveys a best practice, ideal workflow or other supplemental information. Suggestions offer specific tips that could make actions easier for many users, but may not apply to all users, and are not strictly necessary to complete the actions at hand.

##### Delivery systems

- [Wells](#wells)
- [Uncontained text](#uncontained-text)

</GridCol>

<GridCol col="span-4">

#### Information

Information guidance gives the user additional information or context that they might find useful. Unlike a suggestion, which mentions best practices or ideal workflows, information takes a neutral stance and does not necessarily advocate for a specific course of action.

##### Delivery systems

- [Wells](#wells)
- [Tooltips](#tooltips)
- [Popovers](#popovers)
- [Uncontained text](#uncontained-text)

</GridCol>

<GridCol col="span-4">

#### Warning

Warning guidance informs the user of the potentially undesirable outcome of a future action. Unlike warning alerts&mdash;which interrupt the user's workflow and require additional action before proceeding&mdash;the user does not have to acknowledge or otherwise interact with warning guidance. The severity of the potential harm will often determine whether warning guidance or a warning alert is appropriate.

##### Delivery systems

- [Wells](#wells)

</GridCol>

</Grid>

### Alerts

<Grid>

<GridCol col="span-4">

Alerts inform the user about the outcome of an action—either an action taken by the user or an action that's the result of a system process. Unlike guidance, alerts may interrupt a user's workflow and require additional action to be taken before allowing the user to proceed. Often, alerts inform the user of the outcome of a validation check.

</GridCol>

<GridCol col="span-8">

![Alerts infographic](/images/voice-and-tone/messages/alerts-infographic.png)

</GridCol>

<GridCol col="span-3">

#### Information alert

Information alerts tell the user that something has happened as the result of an action, but not necessarily as the result of an action that the user has taken.

##### Delivery systems

- [Notifiers](#notifiers)
- [Dialogs](#dialogs)

</GridCol>

<GridCol col="span-3">

#### Success alert

A success alert tells the user that an attempted action has succeeded.

##### Delivery systems

- [Notifiers](#notifiers)
- [Uncontained text](#uncontained-text)

</GridCol>

<GridCol col="span-3">

#### Warning alert

A warning alert tells the user about a risk of irreversible destruction to data. Warning alerts are more emphatic than warning guidance messages are and require user action.

##### Delivery systems

- [Dialogs](#dialogs)

</GridCol>

<GridCol col="span-3">

#### Fail alert

A fail alert tells the user that an attempted action or product feature has failed.

##### Delivery systems

- [Notifiers](#notifiers)
- [Wells](#wells)
- [Uncontained text](#uncontained-text)

</GridCol>

</Grid>

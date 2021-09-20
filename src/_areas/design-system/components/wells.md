---
api: https://cdn.zywave.com/@zywave/zui-well@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-well@next/demo/index.html
mainComponentName: zui-well
includedElements: []
title: Wells
subtitle: Messages that provide the user with feedback.
---

## Usage

Wells are messages that provide the user with feedback. They can either be Zywave system-generated or user-initiated.

Wells provide a container and give emphasis to text. They should be used to attract the users attention to a message, more than just uncontained text. They are typically always present but in rare cases can animate in.

For more information on when a well is the appropriate delivery system, see [messages.](/design-system/voice-and-tone/messages)

<hr>

## Anatomy

![Anatomy](images/components/well/well_anatomy.svg)

We use the following terminology to refer to the parts of a well:

1. **Sidebar:** Defines the type of well by color: info (blue), warning (yellow), error (red).
2. **Action (optional):** A single action typically associated with the message, such as "View details."
3. **Icon:** Defines the type of well by an icon: info, warning, error.
4. **Header (optional):** Briefly describes the message to the user. The header should be H3 and remain on one line, with a max-width of 65 characters without spaces.
5. **Close:** Allows the user to close a dismissible well.
6. **Body text:** Provides the main content for the well. The body text should be three lines or less, with a max-width of 65 characters per line without spaces.

For detailed documentation on our well anatomy, view the [ZUI well design specs](https://xd.adobe.com/view/6f1e7711-b6ef-4f78-b179-700ddde71e4a-3a4d/).

<hr>

## Types

We differentiate wells by both color and icon. These features allow a user skimming the page to know, at a glance, the importance of the message. We have three types of wells which are each color-coded with a unique icon to help convey the criticality of the message within.

### Info well

![Info well](images/components/well/well_info.svg)

Gives the user additional information or context that they might find useful.

<br>

### Warning well

![Warning well](images/components/well/well_warning.svg)

Informs the user of the potentially undesirable outcome of a future action.

<br>

### Error well

![Error well](images/components/well/well_error.svg)

Tells the user that an attempted action or product feature has failed.

<br>

For detailed documentation on our well anatomy, view the [ZUI well design specs](https://xd.adobe.com/view/053e23bf-3a9c-4524-a302-25c2a431d5e3-506d/).

<hr>

## Types

#### Default well (static)

Default wells are best used when the message should be present, regardless of the user's actions.

<br>

#### Dismissible well

![Anatomy](images/components/well/well_dismissible.svg)

Sometimes a well doesn't need to be present on the screen at all times. A dismissible well allows the user to close it. Our recommendation is to use dismissible wells for reminders and minimal-impacting messages that appear frequently, but do not impede the user's workflow.

When a well is dismissed, we recommend the application remember the user's choice and not show the well again after a page refresh or the back button is pressed to get back to the previous page.

The close icon button follows the same state rules as a button. For more information on these states, see [buttons](/design-system/components/buttons).

<br>

#### Banner well

![Anatomy](images/components/well/well_banner.svg)
<small>An example where a banner well would be used is when an employee is reviewing forms before sending to an administrator.</small>

A banner well spans across the entire width of the page. It can be used to deliver site-wide messages; messages that appear on more than one page; or messages that appear in a single workflow.

We recommend you always make banner wells static so they don't make the page content jump around.

<hr>

## Behavior

#### Animated well

![Anatomy](images/components/well/zui-well-animation-final.gif)

A well can be animated to call attention to it, but only after a user takes action to trigger its appearance. Our recommendation is to use animated wells sparingly and only when a message is triggered by the user.

Note: animating a well will push content down on the page, causing a jarring user experience.

<br>

#### Positioning

By default, wells are always either anchored to the top-left of the page or near the content that it's associated with. Whereas, user-initiated wells should appear by the action that triggered it.

<br>

#### Multiple

![Actionable well](images/components/well/well_actionable.svg)

Multiple wells should be used sparingly and only seen in certain circumstances. For example, a well appears on the screen and a user-initiated well is triggered.

If there are multiple wells on a page, they should be the same width, with the exception of banner wells appearing with default wells.

<hr>

## Best-practices

#### Adding actions to wells

![Anatomy](images/components/well/well_actionable.svg)

Wells can include a single action associated with the message. Actions in wells are styled like text links and are the same color as the well sidebar. This contrasts the action against the well message and calls additional attention to it.

To not confuse users, we recommend calling out one action per well.

Well action buttons are styled similar to text links but are the same color as the well sidebar. For more information on these states, see the [ZUI well design specs](https://xd.adobe.com/view/053e23bf-3a9c-4524-a302-25c2a431d5e3-506d/).

<br>

#### Lines of text (default well)

<Grid>

<GridCol col="span-6">

<Do />

- Use concise language and keep it to one paragraph.
- Use 1-3 lines of text (just right).

</GridCol>

<GridCol col="span-6">

<DoNot />

- Avoid multi-paragraph wells.
- Avoid using only 1-5 words (too short).

</GridCol>

</Grid>

<spacer size="small" />

#### Multiple wells

<Grid>

<GridCol col="span-6">

<Do />

- Use default wells that are the same length.
- Use of a default well and a banner well on the same page is ok.

</GridCol>

<GridCol col="span-6">

<DoNot />

- Avoid setting default wells at different lengths.
- Avoid setting a banner well to the same width as a default well when both appear on the same page.

</GridCol>

</Grid>

<spacer size="small" />

#### Well actions (number of actions)

<Grid>

<GridCol col="span-6">

<Do />

Use one action.

</GridCol>

<GridCol col="span-6">

<DoNot />

Avoid using more than one action.

</GridCol>

</Grid>

<spacer size="small" />

#### Well action style

<Grid>

<GridCol col="span-6">

<Do />

Match the text link action color to the well sidebar color.

</GridCol>

<GridCol col="span-6">

<DoNot />

Avoid using the primary and secondary ZUI buttons as the action.

</GridCol>

</Grid>

<spacer size="small" />

#### Labeling well actions

<Grid>

<GridCol col="span-6">

<Do />

Use an actionable label such as "View details."

</GridCol>

<GridCol col="span-6">

<DoNot />

Avoid using a non-actionable label such as "Details."

</GridCol>

</Grid>

<spacer size="small" />

#### Banner wells behavior

<Grid>

<GridCol col="span-6">

<Do />

Use a static banner well.

</GridCol>

<GridCol col="span-6">

<DoNot />

Avoid animating the banner well.

</GridCol>

</Grid>

<spacer size="small" />

#### Positioning of wells

<Grid>

<GridCol col="span-6">

<Do />

Default info wells appear before or after something.

</GridCol>

<GridCol col="span-6">

<DoNot />

Do not position a default info well at the very bottom of the page when its association is further up the page.

</GridCol>

</Grid>

---
api: 
demo: 
mainComponentName: 
includedElements: []
title: Popovers
subtitle: Unobstrusive messages that the user with more details.
---

## Usage

Popovers are unobtrusive messages that provide the user with more detailed information when clicking on a page element. Popovers are anchored to the page element in which they are referencing and should not be critical for the user to read. Unlike tooltips, there may be actions included within popovers such as close, next, back, and text links. Popovers also trigger on click and remain active until the user either clicks off of the page element or clicks close on the popover.

Popovers should be used:

- to help users understand unknown or unfamiliar controls, features, or workflows that are not described directly on the page.
- to provide information to users when they need it, and to help free up screen space.
- when more detailed information is needed, such as a header and multiple lines of body text.
- to provide more actions to the user, such as a walkthrough or text link.
- when the content needs to remain open without being moused over.

### Alternate considerations

A [tooltip](http://zui.zywave.comcomponents/tooltips/) may be the appropriate component if the message is a small text hint explaining the anchored element, if the message needs to only be visible on hover, and if the message can disappear when the user moves away from the element.

<hr>

## Anatomy

![Image of popover](images/components/popovers/popover_anatomy.svg)

Popovers consist of a shape background, shadow, text, and can include a variety of components. For detailed documentation on our popover anatomy, view the [ZUI popover design specs](https://xd.adobe.com/view/35952280-c758-4fd8-6dc4-07f88b1fe619-43a4/grid).

### Required

Popovers must always include a blue top bar, a close button in the top right, and either header text or body text to provide information.

### Optional

Popovers can include primary and secondary buttons for walkthroughs, and text links to link users to more information.

<hr>

## States

![Image of popover states](images/components/popovers/popover_states.svg)

### Normal

Normal state is the initial state of the popover when it first appears and before any action is taken.

### Hover

Hover state occurs when the user hovers over the action with their mouse.

### Focus

Focus state appears when the action is currently selected and awaiting activity. This commonly occurs when using a keyboard to navigate.

### Pressed

Pressed state occurs when a user clicks (or hits enter on a keyboard). This state only appears briefly while the page/action is loading.

<hr>

## Positioning

![Image of popover positioning](images/components/popovers/popover_positioning.svg)

- The popover positioning will default to the right of whatever page element is being clicked.
- Special use cases may arrive in which the bottom, top, and left tooltip positions may be used if there is not sufficient space to display the popover, such as a top bar popover.

<hr>

## Best practices

<Grid>

<GridCol col="span-6">

![Popover Do](images/components/popovers/popover_do.svg)

<Do />

A popover can hold more detailed information and multiple lines of text.

</GridCol>

<GridCol col="span-6">

![Popover Don't](images/components/popovers/popover_dont.svg)

<DoNot />

A tooltip should not contain detailed information and multiple lines of text.

</GridCol>

</Grid>

---
title: Popovers
subtitle: Unobtrusive messages that provide the user with more details.
api: https://cdn.zywave.com/@zywave/zui-popover@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-popover@next/demo/index.html
mainComponentName: zui-popover
includedElements: []
---
## Usage

Popovers are used to help users understand unknown or unfamiliar controls, features, or workflows that are not described directly on the page.

Popovers are also used:

* to provide information to users when they need it, and to help free up screen space.
* when more detailed information is needed, such as a header and multiple lines of body text.
* to provide more actions to the user, such as a walkthrough or text link.
* when the content needs to remain open without being moused over.

![Popover usage](/images/popover_usage.svg)

<hr>

## Anatomy

Popovers consist of a shape background, shadow, text, and can include a variety of components. Unlike tooltips, there may be actions included within popovers such as close, next, back, and text links.

![Popover anatomy](/images/popover_anatomy.svg)

<br>

#### Required

Popovers must always include a blue top bar, a close button in the top right, and either header text or body text to provide information.

#### Optional

Popovers can include primary and secondary buttons for walkthroughs, and text links to link users to more information.

<br>

See the [](https://xd.adobe.com/view/ef2f902b-219f-4e41-8bba-2bf079fc5969-ba7c/grid)[Design specs](https://xd.adobe.com/view/b5414570-9452-427d-9b19-a96778f43874-e012/grid) for detailed sizing and spacing information

- - -

## Types

![Popover types](/images/popover_types.svg)

#### Header/action

Header/action provides actions to the user, such as a walkthrough.

#### Header/body

Header/body provides information to the user such as a header and multiple lines of body text or a text link.

#### Header/body/action

Header/body/action provides actions to the user, such as a walkthrough. It also provides information to the user such as a header and multiple lines of body text or a text link.

- - -

## Behavior

Popovers trigger on click and remain active until the user either clicks off of the page element or clicks close on the popover.

<br>

#### Positioning

Popovers are anchored to the page element in which they are referencing and should not be critical for the user to read.

* The popover positioning will default to the right of whatever page element is being clicked.
* Special use cases may arrive in which the bottom, top, and left tooltip positions may be used if there is not sufficient space to display the popover, such as a top bar popover.

![Image of popover positioning](/images/select_positioning.svg)

- - -

## Best practices

<Grid>

<GridCol col="span-6">

![Popover Do](/images/popover_do.svg)

<docs-do>

A popover can hold more detailed information and multiple lines of text.

</docs-do>

</GridCol>

<GridCol col="span-6">

![Popover Don't](/images/popover_dont.svg)

<docs-do-not>

A tooltip should not contain detailed information and multiple lines of text.

</docs-do-not>

- - -

## Alternate considerations

* A [tooltip](/design-system/components/tooltips/) may be the appropriate component if the message is a small text hint explaining the anchored element, if the message needs to only be visible on hover, and if the message can disappear when the user moves away from the element.
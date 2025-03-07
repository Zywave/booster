---
title: Popovers
subtitle: Unobtrusive messages that provide the user with more details.
api: ""
demo: ""
mainComponentName: ""
includedElements: []
---
## Usage

Popovers are small overlay windows used to display important information or additional context that is not shown or does not fit within the content on the main page. 

Popovers can be used:

* to free up screen space while still providing the user with important information when it is most valuable.
* to provide more actions to the user, such as a walkthrough or text link.
* when the content within the overlay needs to remain open without needing to hover over a trigger.

![Popover usage](/images/popover_usage.svg)

<hr>

## Anatomy

Popovers are small overlay windows that contain content and, unlike Tooltips, they may also contain text links or Buttons. 

![Popover anatomy](/images/popover_anatomy.svg)

<br>

#### Required

Popovers must always include a 10px blue top bar, a close button in the top right corner, and body copy to provide information.  The message within should not be critical for the user to read in order to complete the task at hand. Text within a Popover has a max-width of 75ch and can wrap onto as many lines as necessary. 

#### Optional

Popovers may include optional header text as well as text links and Buttons.

<br>

See the [](https://xd.adobe.com/view/ef2f902b-219f-4e41-8bba-2bf079fc5969-ba7c/grid)[Design specs](https://www.figma.com/design/n8TDqimJp8aATTFH2UHGjZ/Booster-Design-System?m=auto&node-id=3723-150) for detailed sizing and spacing information

- - -

## States

### Direction

* Popovers are triggered by clicking on a page element near the content they are supporting.
* The positioning (up, down, left or right) will be determined by the amount of space available around the trigger. 



![Popover states](/images/popover-states-1.svg)

### Contents

![Popover types](/images/popover-states-2.svg)

#### Body copy only

Popover can be simple and contain only body copy which provides the user with more information. 

#### Header and body copy

Sometimes it may be beneficial to include a header, especially if the body copy is lengthy, to quickly inform the user what the Popover contents are about. 

#### Actions

If there is additional supporting content you may consider including a text link within the body copy. Or, if there is another step in a walkthrough or additional action the user can take, consider using Buttons. 

- - -

## Behavior

### Opening and closing popovers

Popovers can be triggered by clicking on page elements such as icons or text links. They should remain open allowing the user to view the remainder of the page until the user clicks the close button or elsewhere on the page. 

- - -

## Best practices

#### Content

<docs-grid columns="2">
  <div>

![Popover Do](/images/popover_do.svg)

<docs-do>

A Popover should always contain body copy. 

</docs-do>

  </div>

  <div>

![Popover Don't](/images/popover-dont-1.svg)

<docs-do-not>

Do not only include header copy within a Popover.

</docs-do-not>

  </div>

<br>

</docs-grid>

<br>

#### Popover positioning

<docs-grid columns="2">

   <div>

![Popover Do](/images/popover-do-2.svg)

<docs-do>

A Popover should open in a direction that ensures the entire message is visible. 

</docs-do>

   </div>

   <div>

![Popover Don't](/images/popover-dont-2.svg)

<docs-do-not>

Do not open the Popover in a direction that would cut off the message 

</docs-do-not>

   </div>
</docs-grid>

- - -

## Alternate considerations

* Consider a [Tooltip](/design-system/components/tooltips/) for shorter messages that are best triggered on hover such as hint text on an element.
* Consider a [Notifier](/design-system/components/notifiers/) for messages that are system generated based off an action that a user has taken.
* Consider a [Dialog](/design-system/components/dialogs/) for more messages that need to be more intrusive or require a user's full attention such as confirmation messages or forms.
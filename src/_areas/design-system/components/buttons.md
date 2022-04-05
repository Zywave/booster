---
title: Buttons
subtitle: Create clickable buttons.
api: https://cdn.zywave.com/@zywave/zui-button@latest/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-button@latest/demo/index.html
mainComponentName: zui-button
includedElements: []
---
## Usage

Buttons are an essential element in an effective user experience to execute an action and drive user behaviors. 

![](/images/button-docs-usage.png)

#### When to use Buttons

* Use Buttons when you need to perform an action.
* Buttons communicate which action will occur and allow users to complete a task.   
* Buttons should not be navigational.  Use a link when navigating somewhere else.

- - -

## Anatomy

![](/images/button-docs-anatomy.png)

A Button consists of the following elements:

1. Touch target
2. Icon (optional)
3. Label (required, unless it's an icon button)

See the [design specs](https://xd.adobe.com/view/d4670059-5de0-416c-b731-d180acd93a00-8134/) for detailed sizing and spacing information. 

- - -

## Button types

#### Primary Button

A Primary Button is used for the most common, or most important, action on the page. Avoid using more than one Primary Button on a page to help direct users to the main action. 

![](/images/button-docs-primarybutton.png)

A destructive Primary Button is used when the action being taken will cause permanent changes to the system, such as deleting data.

![](/images/button-docs-destructiveprimary.svg)

#### Secondary Button

A Secondary Button is used to represent a secondary action on a page. A page can consist of many Secondary Buttons.

![](/images/button-docs-secondarybutton.png)

A destructive Secondary Button is used when the action being taken will cause permanent changes to the system but is not the primary action on the page.

![](/images/button-docs-destructivesecondary.svg)

#### Link button

A Link Button is used for a less important or uncommon action. At first glace these will look similar to a text link but the button shape will appear on hover/focus. The button shape will add extra padding around the text that isn't noticeable at first. Because of this, we recommend trying to avoid using Link Buttons when they are left-aligned.

![](/images/button-docs-linkbutton.png)

A destructive Link Button is used when the action being taken will cause permanent changes to the system and is used in tables.

![](/images/button-docs-destructivelink.svg)

#### Icon Button

* Icon Buttons can be used where text is not necessary to describe the action or there isn't space for a button label.  Only use icons that are easily recognizable when presented alone.  Great examples of where an icon button would be appropriate are the pencil icon for edit; trash can icon for delete; and printer icon for print.
* Icon Buttons can appear in both primary, secondary and link button styles. Follow the guidelines for the button styles above to determine which one you should use.

![](/images/button-docs-iconbutton.png)

In some cases, it makes sense to include an icon with your button label. This should be used to add some extra attention to the button with an easily recognizable icon.

![](/images/button-docs-button-icon.png)

#### Button Dropdown

A Button Dropdown shows all the available actions when clicked. They are found most often in tables, where there is limited space.  For more information, see [Button Dropdowns](https://booster.zywave.dev/design-system/components/button-dropdowns/?tab=usage). 

![](/images/button-docs-overflowicon.png)

#### **Full-width Button**

Full-width Buttons can be used to expand to the width of their containing elements. These should be used when the containing element doesn't span the full width of the page. Full-width Buttons can be used to show more visual separation between elements or draw more attention to buttons that may otherwise be overlooked. 

![](/images/button-docs-block-level-button.png)

#### **Loading state**

Sometimes it is necessary for Buttons to have a loading state to showcase an action is in progress as a result of the user clicking the Button. While the action is in progress, the Button will remain in its loading state. The Button becomes disabled and a loading spinner appears inside of it. Disabling the Button prevents the user from clicking it multiple times during the action's progress. The loading spinner is a visual representation of the action in progress to ensure the user that something is happening behind the scenes. After the action is complete, the loading state will no longer be in effect and the Button will go back to its normal state.

![](/images/button-docs-loadingstate.png)

- - -

## Button states

![](/images/button-docs-states.png)

#### **Normal**

Normal state is how a button looks by default before any interaction or action is taken.

#### **Hover**

Hover state occurs when the user hovers over a button or link with their mouse.

#### **Focus**

Focus state appears when the button is currently selected and awaiting action. This commonly occurs when using a keyboard to navigate.

#### **Pressed**

Pressed state occurs when a user clicks or taps the button, or hits enter on a keyboard while the button is focused. This state only appears briefly while the page/action is loading.

#### **Disabled**

Disable state occurs when an action currently isn't available. Disabled buttons should only be used when an action can be taken within the current UI to enable the button. If no action can be taken to enable the button, then the button should be hidden instead of disabled.

Note: We have added the CSS property `pointer-events: none;` to this button style that will further prevent users from clicking a disabled button.

#### Blue background button states

Used in the Shell Action Bar. For more information, see [Shell documentation](https://booster.zywave.dev/design-system/components/shell/?tab=usage).

![](/images/button-docs-states-bluebg.png)

- - -

## Best practices

* Avoid using more than one Primary Button on a page if possible.
* Link Buttons are preferred to use within a table.
* If there are three Buttons next to each other, try to only use two styles (for example, one Primary and two Link Buttons) or combine them into a Button Group.

#### Button labeling

* You can add a label, icon, or both to a button.
* Be straightforward, use labels that describe what actually happens when people use the button. 
* Use sentence casing. 
* Don’t use punctuation.
* Start label with a verb.
* Consider using two words (verb + noun = Create report / Add user / Send email).  This adds clarity when there are multiple different actions on a page.  In some situations, a simple "Edit" "Save" or "Cancel" is just fine.
* Icons can be used to add more visual weight and identity to the action.

- - -

## Alternate considerations

* Use a Text Link for actions that are navigational and take the user to another place. 
* Use a [Button Group](https://booster.zywave.dev/design-system/components/button-groups/?tab=usage) when 3 or more buttons are grouped together on a single line.
* Use a [Button Dropdown](https://booster.zywave.dev/design-system/components/button-dropdowns/?tab=usage) to reveal a list of three or more actionable options.
* Use a [Dropdown Select](https://booster.zywave.dev/design-system/components/dropdown-selects/?tab=usage) if the user is making a selection instead of executing an action.
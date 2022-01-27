---
title: Button groups
subtitle: A Button Group is 3 or more Buttons grouped together on a single line.
api: https://cdn.zywave.com/@zywave/zui-button@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-button@next/docs/index.html
mainComponentName: zui-button-group
includedElements:
  - zui-button-group
---
## Usage

Combining related actions into a Button Group can save space and reduce the visual clutter of multiple actions on a page. Button Group labels should be short and self-explanatory; for example: export, edit, duplicate. The actions available in a Button Group should be ordered logically, either by usage or importance from left to right.

![Button group example](/images/button-group_usage.svg)

- - -

## Anatomy

The individual Buttons within a Button Group follow the anatomy guidelines for Buttons except that only the far right and left Buttons have rounded corners to create the appearance of one button. 

![Button Group anatomy](/images/button-group_anatomy.svg)

1. **Button:** The shape that encloses the label. Follow the [Buttons documentation](/design-system/components/buttons) for style variations, sizing and spacing specifications.
2. **Dividers:** The appearance of lines that show division between the individual Buttons. 

For detailed documentation on our Button Group anatomy, view the [design specs](https://xd.adobe.com/view/42fe9ab5-9034-4b68-b1a5-ce3827ec5560-17ad/).  

- - -

## Types

Primary and secondary are the two main types of Button Groups available. These types of Button Groups visually indicate to the user that the actions are grouped together. The two types should never be mixed within one Button Group, meaning you cannot have one primary action and 2 secondary actions within one group.\
<docs-spacer size="small"></docs-spacer>

#### Secondary

Because there should only be one primary action on a page, a secondary type is highly recommended for Button Groups.  

![Secondary style Button Group](/images/button-group_secondary.svg)

<docs-spacer size="small"></docs-spacer>

#### Primary

In rare cases, a primary Button Group may be used. Primary Button Groups should appear within more complex pages that may have additional secondary actions outside of the group.  

![Primary style Button Group](/images/button-group_primary.svg)

<docs-spacer size="small"></docs-spacer>

#### Adding icons

Icons can be added to assist in quickly identifying actions. Ideally, Button Groups should be clearly labeled.
Text labels can be omitted to conserve space, but only icons that clearly represent their actions should be used.

![Button Group with icons](/images/button-group_icons.svg)

</br>
</br>

For detailed documentation on adding icons to Button Groups, view the [design specs](https://xd.adobe.com/view/42fe9ab5-9034-4b68-b1a5-ce3827ec5560-17ad/).

<docs-spacer size="small"></docs-spacer>

#### Using Button Dropdowns

Button Dropdowns can be used within Button Groups. They can be placed anywhere in a Button Group as long as the buttons are ordered logically, either by usage or importance. For more information, see [Button Dropdowns](/design-system/components/button-dropdowns).

![Button Group containing a Button Dropdown](/images/button-group_dropdown.svg)

</br>
</br>

For detailed documentation on using Button Dropdowns in Button Groups, view the [design specs](https://xd.adobe.com/view/42fe9ab5-9034-4b68-b1a5-ce3827ec5560-17ad/).  

- - -

## States

![States of Button Groups](/images/button-group_states.svg)

The focused state for Button Groups uses an internal borderline. All of the other states follow regular [Button guidelines](/design-system/components/buttons). 

<docs-spacer size="small"></docs-spacer>

#### Normal

Normal state is how the Button Group looks by default before any interaction or action is taken.

<docs-spacer size="small"></docs-spacer>

#### Hover

Hover state occurs when the user hovers over a button or button dropdown with their cursor.   

<docs-spacer size="small"></docs-spacer>

#### Focus

Focus state appears when the button or button dropdown is currently selected and awaiting action. This commonly occurs when using a keyboard to navigate.  

<docs-spacer size="small"></docs-spacer>  

#### Pressed

Pressed state occurs very briefly when the button is being activated by the user when pressing down on the mouse button.  

<docs-spacer size="small"></docs-spacer>  

#### Disabled state

Disable state occurs when an action currently isn't available within a Button Group.

Disabled Button Groups should only be used when an action can be taken within the current UI to enable them. If no action can be taken to enable the Button Group, then the Button Group should be hidden instead of disabled.  

We have added the CSS property <code>pointer-events: none;</code> to this Button Group style that will further prevent users from clicking a disabled Button Group.

- - -

## Best practices

Button Groups should follow the best practices outlined in the [Button](/design-system/components/buttons) component and guidelines for the [Button Dropdown](/design-system/components/button-dropdowns) component when included.

<docs-spacer size="small"></docs-spacer>  

#### Button order

<docs-grid columns="2">
  <div>
     <docs-do> 
     Arrange actions in order of importance with the most important/most clicked action on the left.
     </docs-do>

  </div>
  <div>
    <docs-do-not> 

Reverse the order of the actions or disregard importance of actions when determining their order within the group.  

</docs-do-not>

  </div>
  
</docs-grid>

<docs-spacer size="small"></docs-spacer>  

#### Button styling

<docs-grid columns="2">
  <div>

![Do Button Group styling](/images/button-group_styling-do.svg)

 <docs-do>  
Always use the same Button style variation in a Button Group for a consistent style. For example, all actions have the secondary Button style.

</docs-do>

  </div>
  <div>

![Do not Button Group styling](/images/button-group_styling-do-not.svg)

   <docs-do-not>

Avoid combining primary and secondary buttons in the same Button Group.

   </docs-do-not>

  </div>
  
</docs-grid>

<docs-spacer size="small"></docs-spacer>  

#### Button labeling

<docs-grid columns="2">
  <div>

![Do Button Group labels](/images/button-group_labeling-do-–-1.svg)

 <docs-do>  

Use action labels that are 1-3 short words.

</docs-do>

  </div>
  <div>

![Do not Button Group labels](/images/button-group_labeling-do-not-–-1.svg)

   <docs-do-not>

Use action labels that are long or more than 3 words.

   </docs-do-not>

  </div>
  
</docs-grid>

- - -

## Alternate considerations

* Use individual [Buttons](/design-system/components/buttons) when the buttons are not closely related, have varying levels of priority, or are fewer.
* Use  [Radio Buttons](/design-system/components/radio-buttons) when labels require more text, or you need a segmented control that emphasizes a selection being made.
* Use [Tabs](/design-system/components/tabs) when you need tertiary navigation on a page.
* Use [Toggles](/design-system/components/toggles) when a feature needs to be enabled or disabled.
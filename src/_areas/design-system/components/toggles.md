---
title: Toggles
subtitle: A page element used to enable or disable an associated setting or feature.
api: https://cdn.zywave.com/@zywave/zui-toggle@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-toggle@next/demo/index.html
mainComponentName: zui-toggle
includedElements: []
---
## Usage

![Two Toggles stacked on top of each other. The top Toggle is switched off and the bottom Toggle is switched on. ](/static/images/toggle_usage.svg "Toggle usage")

Toggles are used:

* to turn an item on or off.
* when the action is immediately applied without the need to save. 

- - -

## Anatomy

![The different areas of the toggle are highlighted.](/static/images/toggle_anatomy.svg "Toggle anatomy")

1. **Switch** - The small circular indicator that slides to the other side of the track upon interaction
2. **Track** - The rounded rectangle in which the switch slides back and forth

- - -

## Layout

![A communications settings page with different settings that use Toggles to turn them on and off. ](/static/images/toggle_layout.svg "Toggle page layout")

Toggles should be placed to the right of the label that they are enabling or disabling. The size of the label and positioning in relation to the Toggle is determined by hierarchy and the page layout. 

![A table with Toggles in the right column to turn different items in a row on and off.](/static/images/toggle_layout-table.svg "Toggle table layout")

When using a Toggle in a Table, always place the Toggle in the far right column. That column should also have a very clear header to inform the user what that Toggle will do.  

- - -

## Toggle states

A Toggle can either be in the on or off position. 

![Toggles in the on and off position](/static/images/toggle_on-off.svg "Toggles on and off")

**On**

* The switch is positioned on the right side of the track
* The track is Blue 500

**Off**

* The switch is positioned on the left side of the track
* The track is Gray 400

In addition to on and off, Toggles also have default, hover, focus and disabled states.

![The different states of Toggles](/static/images/toggle_states.svg "Toggle states")

**Default**

* The state of a Toggle (on or off) when a user is not interacting with it

**Hover**

* The hover state occurs when a user hovers over the Toggle using their cursor

**Focus** 

* The focus state occurs when the Toggle is currently selected and awaiting interaction from the user. This state most often occurs when using a keyboard to navigate. 

**Disabled**

* The disabled state occurs when the Toggle is locked into it's current position (on or off) because selection currently isn't available. The disabled state should only be used when an action can be taken within the current UI to enable the Toggle. 

- - -

## Behavior

When a user interacts with the Toggle by mouse-click or pressing the enter key, the switch slides smoothly to the other side of the track. 

![The animation of a toggle sliding from the off position to the on position. ](/static/images/toggle-on.gif "Toggle switching behavior")

In a situation where the Toggle is in a disabled state and the user attempts to interact with it, the switch will "wiggle" in it's current position to indicate the interaction was received, but the state cannot change.


![A disabled Toggle in the on position. ](/static/images/toggle-on-disabled.gif "Disabled on Toggle behavior") 

![A disabled Toggle in the off position](/static/images/toggle-off-disabled.gif "Disabled off Toggle behavior")


- - -

## Best practices

* A Toggle's settings should take effect immediately without the need for a confirm or save, just as a light switch is immediate.
* Changes to the UI from interacting with a Toggle setting, such as hiding, showing, enabling or disabling of content, are acceptable and expected in some cases. 
* Labeling should be kept in-line with the Toggle

- - -

## Alt considerations

Use [Radio Buttons](components/radio-buttons) when only one item can be selected from the list of options

Use [Checkboxes](components/checkboxes) as an alternative to Toggles when the selection is not applied immediately.
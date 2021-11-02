---
api: https://cdn.zywave.com/@zywave/zui-input@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-input@next/demo/index.html
mainComponentName: zui-input
includedElements: ["zui-input"]
title: Text inputs
subtitle: A single-line box that the user can enter text into.
---
## General
### See also

[forms](/design-system/patterns/forms/)
<br>
<br>

### Sizing & spacing

The length of the input should be as close to the intended length of content as possible. This also applies to other form controls of a similar shape, like drop-down selects and text areas.

![Text Input Sizing](/images/components/text-input/text-input--sizing-spacing.svg)

[See design specs](https://xd.adobe.com/spec/4fa1ccc1-86e0-4fd1-47cb-666d634ce145-3990/grid)

<hr>

## Behavior

Use different states to help show the user how they can interact with Text Inputs.
<br>
<br>

### Normal

Text Input is blank with nothing entered, no non-standard colors.

![Normal Text Input](/images/components/text-input/text-input--normal.svg)
<br>
<br>

### Focused

The user has clicked into the input, it's outlined blue and the blinking text cursor appears.

![Focused Text Input](/images/components/text-input/text-input--focused.svg)
<br>
<br>

### Disabled

The input appears grayed out and cannot currently be filled out. Disabled fields should only be used if there is an action the user can take on the page that will enable the field. It may also be beneficial to provide the user with help to explain why the field is disabled.

If the field is not made enabled when submitting, then the information shown in the disabled field should not be submitted with the rest of the fields on the page.

![Disabled Text Input](/images/components/text-input/text-input--disabled.svg)
<br>
<br>

### Read only

The input is not editable at this time. Read-only text fields should be used when there is no action the user can take on the page to enable the field. The benefit of using the read-only input field over a body of text is it still has a focused state, meaning the user can navigate to it using their keyboard.

It may be frustrating or confusing to users when an input field is read-only. You may consider using a tool-tip that informs them where they may be able to go to change the information that appears in a read-only input.

![Read Only Text Input](/images/components/text-input/text-input--read-only.svg)
<br>
<br>

### Success

Text Input is outlined in green. Success message may appear nearby.

![Success Text Input](/images/components/text-input/text-input--success.svg)
<br>
<br>

### Error

Text Input is outlined in red. Error message with details on the error will appear nearby.

![Error Text Input](/images/components/text-input/text-input--error.svg)
<br>
<br>

### Loading

A loading icon appears on the right side of the input to indicate that something is happening.

![Loadng Text Input](/images/components/text-input/text-input--loading.svg)

<hr>

## Text Area

A Text Area is a subset of the text input specifically used for entering multiple sentences of information because of this, the input size is larger (width and length) than a standard input area. Text areas can also use a scroll bar and expander tab in the bottom right corner, if necessary.

![Text area](/images/components/text-input/text-area.svg)

We recommend capping the max height of a text area so it doesn't grow too large for the UI it's in, then use a scrollbar for viewing text not within the viewing area. 150px is typically enough to get a good sense of the text within, but not blow out your screen.

![Text area](/images/components/text-input/text-area--withscroll.svg)

<hr>

## Labels

The label elements helps bring proper context to your inputs to let the user know what data to enter.

### Form labels

Generally, a single label element should be present for a single control. For general form element labeling standards [see our forms labeling documentation.](/design-system/patterns/forms/)

<br>
<br>

### Place holder text

Place holder text appears inside of the input field, prior to entering data into it, and disappears. It is always used in conjunction with labels, never instead of a label. It provides an example of what you should enter in that field, and the format of that information when appropriate. An example would be phone number: (555) 555-5555.

![Error Text Input](/images/components/text-input/text-input--placeholder-text.svg)
<br>
<br>

### Input prefix

Added to front of the input field to specify what should be entered, like a dollar sign. To add more attention a container can be added to the styling. An example would be a magnifying glass to show that the input field is a type-ahead search filter. These labels are typically an icon.

![Text Input Label Prefix](/images/components/text-input/text-input--label-prefix.svg)
<br>
<br>
![Text Input Label Prefix](/images/components/text-input/text-input--label-prefix-contained.svg)
<br>
<br>

### Input suffix

Added to front of the input field to specify what should be entered, like a percentage symbol. To add more attention a container can be added to the styling. These labels are typically an icon.

![Error Text Input](/images/components/text-input/text-input--label-suffix.svg)
<br>
<br>

### Input prefix & suffix

![Text Input Label Prefix](/images/components/text-input/text-input--label-prefix+suffix.svg)

<hr>

## Text inputs with actions

On rare occasions, you can put the button next to the input, which is often seen in search. While there's nothing especially wrong with putting the button below the input, putting it next to it saves space and looks a bit neater. But, do not do this on standard forms that happen to have just 1 field. It's inconsistent and unconventional. The button should be labeled with text unless there is a very clear and deliberate icon that can be used.

![Text Input Primary Action](/images/components/text-input/text-input--primary-action.svg)

![Text Input Primary Action + Icon](/images/components/text-input/text-input--secondary-action.svg)

![Text Input Secondary Action + Icon](/images/components/text-input/text-input--secondary-action-icon.svg)

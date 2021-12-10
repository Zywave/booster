---
title: Text inputs
subtitle: A single-line box that the user can enter text into.
api: https://cdn.zywave.com/@zywave/zui-input@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-input@next/demo/index.html
mainComponentName: zui-input
includedElements:
  - zui-input
---
## Usage

A form control allows the user to enter text into a UI. They typically appear in forms and dialogs.

![Text input usage](/images/textinput_usage.svg)

- - -

## Anatomy

The anatomy of a text input.

![Text input anatomy](/images/textinput_anatomy.svg)

1. **Label:** Text to inform users as to what information is requested
2. **Text input:** The form field where the user can input information
3. **Placeholder text** (optional): Text that provides an example of what the user should enter into the text input

<br>

#### Sizing & spacing

The length of the input should be as close to the intended length of content as possible. This also applies to other form controls of a similar shape, like drop-down selects and text areas.

![Text Input sizing and spacing](/images/textinput_sizingandspacing.svg)

See the [Design specs](https://xd.adobe.com/view/ef2f902b-219f-4e41-8bba-2bf079fc5969-ba7c/grid) for detailed sizing and spacing information

- - -

## States

Text inputs can display the following states: unselected, hover, focus, entered, and disabled.

![Text input states](/images/textinput_states.svg)

- - -

## Types

#### Success

Text Input is outlined in green. Success message may appear nearby.

![](/images/textinput_success.svg)

<br>

#### Error

Text Input is outlined in red. Error message with details on the error will appear nearby.

![](/images/textinput_error.svg)

<br>

#### Text inputs with actions

On rare occasions, you can put the button next to the input, which is often seen in search. While there's nothing especially wrong with putting the button below the input, putting it next to it saves space and looks cleaner. But, do not do this on standard forms that happen to have just 1 field. It's inconsistent and unconventional. The button should be labeled with text unless there is a very clear and deliberate icon that can be used.

![Text Input actions](/images/textinput_actions.svg)

<br>

#### Read only

The input is not editable at this time. Read-only text fields should be used when there is no action the user can take on the page to enable the field. The benefit of using the read-only input field over a body of text is it still has a focused state, meaning the user can navigate to it using their keyboard.

It may be frustrating or confusing to users when an input field is read-only. You may consider using a tool-tip that informs them where they may be able to go to change the information that appears in a read-only input.

![Text input read only](/images/textinput_readonly.svg)

#### Text Area

A Text Area is a subset of the text input specifically used for entering multiple sentences of information because of this, the input size is larger (width and length) than a standard input area. Text areas can also use a scroll bar and expander tab in the bottom right corner, if necessary.

![Text input text area](/images/textinput_textarea.svg)

We recommend capping the max height of a text area so it doesn't grow too large for the UI it's in, then use a scrollbar for viewing text not within the viewing area. 150px is typically enough to get a good sense of the text within, but not blow out your screen.

![Text input text area scroll](/images/textinput_textarea_scroll.svg)

- - -

## Behavior

#### Loading

A loading icon appears on the right side of the input to indicate that something is happening.

![Text input loading](/images/textinput_loading.svg)

<br>

- - -

## Best practices

#### Place holder text

Place holder text appears inside of the input field, prior to entering data into it, and disappears. It is always used in conjunction with labels, never instead of a label. It provides an example of what you should enter in that field, and the format of that information when appropriate. An example would be phone number: (555) 555-5555.

![Error Text Input](/images/components/text-input/text-input--placeholder-text.svg)
<br>

#### Input prefix

Added to front of the input field to specify what should be entered, like a dollar sign. To add more attention a container can be added to the styling. An example would be a magnifying glass to show that the input field is a type-ahead search filter. These labels are typically an icon.

![Text Input Label Prefix](/images/components/text-input/text-input--label-prefix.svg)
<br>
![Text Input Label Prefix](/images/components/text-input/text-input--label-prefix-contained.svg)
<br>

#### Input suffix

Added to front of the input field to specify what should be entered, like a percentage symbol. To add more attention a container can be added to the styling. These labels are typically an icon.

![Error Text Input](/images/components/text-input/text-input--label-suffix.svg)
<br>
<br>

#### Input prefix & suffix

![Text Input Label Prefix](/images/components/text-input/text-input--label-prefix+suffix.svg)



![Text Input Secondary Action + Icon](/images/components/text-input/text-input--secondary-action-icon.svg)
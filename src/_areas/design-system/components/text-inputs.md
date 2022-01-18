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

A form control allows the user to enter text into a UI. They typically appear in forms.

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

See the [Design specs](https://xd.adobe.com/view/4bf410a7-cbe1-4642-9756-529baa10276d-1ea7/grid) for detailed sizing and spacing information

- - -

## States

Text inputs can display the following states: unselected, hover, focus, and disabled.

![Text input states](/images/textinput_states.svg)

<br>

#### Read only

The input is not editable at this time. Read-only text fields should be used when there is no action the user can take on the page to enable the field. The benefit of using the read-only input field over a body of text is it still has a focused state, meaning the user can navigate to it using their keyboard.

It may be frustrating or confusing to users when an input field is read-only. You may consider using a tool-tip that informs them where they may be able to go to change the information that appears in a read-only input.

- - -

## Types

#### Validation

A success text Input is outlined in green. Success message may appear nearby.

![](/images/textinput_success.svg)

<br>

An error text Input is outlined in red. Error message with details on the error will appear nearby.

![](/images/textinput_error.svg)

For more information on validation, [see forms documentation on validation](https://booster.zywave.dev/design-system/patterns/forms/#validation).

<br>

#### Text Area

A Text Area is a subset of the text input specifically used for entering multiple sentences of information because of this, the input size is larger (width and length) than a standard input area. Text areas can also use a scroll bar and expander tab in the bottom right corner, if necessary.

![Text input text area](/images/textinput_textarea.svg)

We recommend capping the max height of a text area so it doesn't grow too large for the UI it's in, then use a scrollbar for viewing text not within the viewing area. 150px is typically enough to get a good sense of the text within, but not blow out your screen.

![Text input text area scroll](/images/textinput_textarea_scroll.svg)

<br>

#### Text inputs with actions

On rare occasions, you can put the button next to the input, which is often seen in search. While there's nothing especially wrong with putting the button below the input, putting it next to it saves space and looks cleaner. But, do not do this on standard forms that happen to have just 1 field. It's inconsistent and unconventional. The button should be labeled with text unless there is a very clear and deliberate icon that can be used.

![Text Input actions](/images/textinput_actions.svg)

<br>

For more information on Search, [see Search documentation](https://booster.zywave.dev/design-system/components/search/?tab=usage).

<br>

#### Input prefix

Added to front of the input field to specify what should be entered, like a dollar sign. To add more attention a container can be added to the styling. These labels are typically an icon.

![Text Input input prefix](/images/textinput_input_prefix.svg)

<br>

#### Input suffix

Added to back of the input field to specify what should be entered, like a percentage symbol. These labels are typically an icon.

![Text Input input suffix](/images/textinput_input_suffix.svg)

<br>

#### Input prefix & suffix

Added to front and back of the input field to specify what should be entered, like a dollar sign and a decimal number to represent a dollar amount.

![Text Input input prefix and suffix](/images/textinput_input_prefixandsuffix.svg)

- - -

## Best practices

#### Labeling

<docs-grid columns="2">

<div>

![Text input labeling do](/images/textinput_labeling_do.svg)

<docs-do>
Use clear and concise labeling. Label text is used to inform users as to what information is requested for a text input. 
</docs-do>

</div>

<div>

![Labeling don't](/images/textinput_labeling_dont.svg)

<docs-do-not>
Avoid using sentences or long phrases for label text. 
</docs-do-not>

</div>

</docs-grid>

<docs-spacer>

</docs-spacer>

#### Place holder text

<docs-grid columns="2">

<div>

![Text input placeholder text do](/images/textinput_placeholder_do.svg)

<docs-do>
Use placeholder text to inform users as to what information is requested for a dropdown. It provides an example of what you should enter in that field, and the format of that information when appropriate.
</docs-do>

</div>

<div>

![Text input placeholder text don't](/images/textinput_placeholder_dont.svg)

<docs-do-not>
Avoid repeating the same text used for the label as it is redundant information and does not inform the user of the format of information requested.
</docs-do-not>

</div>

</docs-grid>

<docs-spacer>

</docs-spacer>

#### Input length

<docs-grid columns="2">

<div>

![Text input placeholder text do](/images/textinput_size_do.svg)

<docs-do>
Use an input size that is properly proportional to the expected user input
</docs-do>

</div>

<div>

![Text input placeholder text don't](/images/textinput_size_dont.svg)

<docs-do-not>
Avoid using an input size that hides information or allows for excessive white space.
</docs-do-not>

</div>

</docs-grid>

<docs-spacer>

</docs-spacer>
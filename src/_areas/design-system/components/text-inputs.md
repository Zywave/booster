---
title: Text inputs
subtitle: An input field in which a user can enter text.
api: https://cdn.zywave.com/@zywave/zui-input@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-input@next/docs/index.html
mainComponentName: zui-input
includedElements:
  - zui-input
---
## Usage

A Text Input is a form control that allows the user to enter text into a UI. They typically appear in forms.

![Text input usage](/images/textinput_usage.svg)

- - -

## Anatomy

A Text Input consists of three areas.

![Text input anatomy](/images/textinput_anatomy.svg)

1. **Label:** Text to inform users as to what information is requested
2. **Text input:** The form field where the user can input information
3. **Placeholder text** (optional): Text that provides an example of what the user should enter into the Text Input. In many situations the placeholder can be left blank since the label indicates what information should be entered but it is useful when formatting of information is important.

<br>

#### Sizing & spacing

The length of the input should be as close to the intended length of content as possible.

![Text Input sizing and spacing](/images/textinput_sizingandspacing.svg)

<docs-note>See the [Design specs](https://xd.adobe.com/view/4bf410a7-cbe1-4642-9756-529baa10276d-1ea7/grid) for detailed sizing and spacing information.</docs-note>

- - -

## States

Text Inputs can display the following states: unselected, hover, focus, and disabled.

![Text input states](/images/textinput_states.svg)

<br>

#### Read only

Read-only Text Inputs should be used when there is no action the user can take on the page to enable the field. The benefit of using the read-only input field over a body of text is it still has a focused state, meaning the user can navigate to it using their keyboard.

Read-only Text Inputs may cause frustration or confusion. You may consider using a [Tooltip](/design-system/components/tooltip) that informs them where they may be able to go to change the information that appears in the read-only Text Input.

- - -

## Types

#### Validation

A success Text Input is outlined in green. A success message may appear below or next to the input.

![](/images/textinput_success.svg)

<br>

An error text Input is outlined in red. Error message with details on the error will appear nearby.

![](/images/textinput_error.svg)

<docs-note> For more information on validation, [see Forms documentation on validation](https://booster.zywave.dev/design-system/patterns/forms/#validation). </docs-note>

<br>

#### Text Area

A Text Area is a subset of the Text Input specifically used for entering multiple lines of information. The input size is larger (width and length) than a standard Text Input. Text Areas can also include a scroll bar and expander tab in the bottom right corner, if necessary.

![Text input text area](/images/textinput_textarea.svg)

We recommend capping the max-height of a Text Area so it doesn't use too much space within a UI. If it expands beyond the max-height, then a scroll bar can be used to view text that is not visible in the Text Area. We recommend starting with a max-height of 150px.  

![Text input text area scroll](/images/textinput_textarea_scroll.svg)

<br>

#### Text inputs with actions

In rare occasions, a Button can be placed directly next to the Text Input, most commonly seen on search fields. The close proximity of this Button saves space in the UI and ties an action directly to a Text Input. The button should have a text label or use a very clear and deliberate icon. This button placement should be used rarely and should not be used for most single Text Inputs or on Forms. 

![Text Input actions](/images/textinput_actions.svg)

<br>

For more information on Search, [see the guidelines](https://booster.zywave.dev/design-system/components/search/?tab=usage).

<br>

#### Input prefix

An input prefix can be added to front of the Text Input to specify what should be entered, such as a dollar sign. To add more attention a container can be added to the styling. These labels are typically an icon.

![Text Input input prefix](/images/textinput_input_prefix.svg)

<br>

#### Input suffix

An input suffix can be added to back of the Text Input to specify what should be entered, such as a percentage symbol. These labels are typically an icon.

![Text Input input suffix](/images/textinput_input_suffix.svg)

<br>

#### Input prefix & suffix

An input prefix and suffix can be added to front and back of the Text Input to specify what should be entered, such as a dollar sign and a decimal number to represent a dollar amount.

![Text Input input prefix and suffix](/images/textinput_input_prefixandsuffix.svg)

- - -

## Best practices

#### Labeling

<docs-grid columns="2">

<div>

![Text input labeling do](/images/textinput_labeling_do.svg)

<docs-do>
Use clear and concise labels to inform users as to what information they should enter in a Text Input.
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

Use placeholder text when demonstrating format may be helpful
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
Use an input width that is proportional to the expected user input
</docs-do>

</div>

<div>

![Text input placeholder text don't](/images/textinput_size_dont.svg)

<docs-do-not>
Avoid using an input width that will cut-off information or allows for excessive white space.
</docs-do-not>

</div>

</docs-grid>

- - -

## Alternate considerations

* If the user should be presented with a list of supported or known values to choose from, consider one of the following:

  * [Dropdown select](https://booster.zywave.dev/design-system/components/dropdown-selects/)
  * [Dropdown multi-select](https://booster.zywave.dev/design-system/components/dropdown-multi-selects/)
  * [Picker](https://booster.zywave.dev/design-system/components/pickers/)
  * [Multi-picker](https://booster.zywave.dev/design-system/components/pickers/)
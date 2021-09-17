---
layout: documentation
title: Forms
subtitle:
---

Forms allow users to enter data that is used by the application. The point of all forms is to collect error-free data while placing as little burden on users as possible. Well-designed forms make entering this data straight forward and easy.

<hr>

##### Table of contents

- [Form elements](#form-elements)
- [Form layout and structure](#form-layout)
- [Form actions](#form-actions)
- [Indicators and contextual help](#form-help)
- [Validation](#validation)
- [Keyboard accessibility](#keyboard-accessibility)

<hr>

<div id="form-elements"></div>

## Form elements

The following are the basic building blocks for creating forms. These elements allow users to provide data for your form.
<br>
<br>

#### Text input

A single-line box that the user can enter text into. They automatically move with their content to the left as the text input cursor reaches the right edge of the input field. See below for more detailed documentation on field sizes and statuses. For more information see [text-input documentation.](/components/text-input)

![Text field](images/components/text-input/text-input--normal.svg)

<Spacer size="small"/>

#### Drop-down select

Use this control when you need to pick just one item from a list. For more information see [dropdown-select documentation.](/components/dropdown-select)

![Dropdown select](images/components/dropdown-select/dropdown-select.svg)

<Spacer size="small"/>

#### Radio button

A one at a time selection. Only one button can be selected from a group. If you select another, the previously selected input is deselected. For more information see [radio-button documentation.](/components/radio-buttons)

![Radio buttons](images/components/radio-buttons/radio-button.svg)

<Spacer size="small"/>

#### Checkbox

This type of input is used when you need users to answer a question with a yes or no response. More than one can be selected. For more information see [checkboxes documentation.](/components/checkboxes)

![Checkbox](images/components/checkboxes/checkbox.svg)

<Spacer size="small"/>

#### Toggle

Cross between a button and checkbox. An on/off or true/false data input, used for a binary flip. For more information see [toggles documentation.](/components/toggles)

![Toggle](images/components/toggles/toggle-on.svg)

<Spacer size="small"/>

#### Datepicker

Appears as a standard text input but with calendar icon and date format as ghost text. You can type the date in the input field or click in the input field to get a calendar to appear to select a date from. <!-- For more information see [datepicker documentation.](/components/datepicker)-->

![Datepicker](images/components/datepicker/datepicker.svg)

<Spacer size="small"/>

#### File input

The file input component allows the user to select one or many files from a user's file system, either natively using a file input or drag and drop. For more information see [file input documentation.](/components/file-input)

![File input](images/components/file-input/singlefile_do_action.svg)

<hr>

<div id="form-layout"></div>

## Form layout & structure

Putting all the pieces together in the right order and layout is essential for a user to add information quickly and easily. The user must understand exactly what is needed of them and why. If they run into issues, help must be obvious. This includes:

- Form Layout
- Titling the Form
- Labeling Elements
- Margins & Gutters
- Contextual Help
- Form Actions
- Required Field Indication
- Validation

###### General rules

- All forms need a title, form elements and actions.
- Form elements need labels so the user knows what type of data to add.
- Whenever possible keep your form elements to one column.
- Communicate what you want through size, make each element the size of what data you are collecting.

###### Multi-step

A multi-step form is a long form that is broken into multiple pieces. They're used to make long forms less intimidating. By allowing users to complete their information in smaller chunks, you create a positive user experience and increase the chance of form completion. Consider using a [step flow](/patterns/step-flow) for multi-step forms.

<Spacer size="small" />

### Titling the form

In most cases you'll want to give your form a clear title that helps users understand exactly what they should expect by filling out the form. 'Add an account' for example.

<Spacer size="small" />

### Labeling elements

The label helps bring proper context to your inputs to let the user know what data to enter. Labels should be semi-bold and the same color as our default text (gray 600). Generally a single label element should be present for a single control.

<Spacer size="small" />

#### Label alignment

Top aligned labels are prefered for shorter forms. They are easier to read, requiring less eye movement and making it easier to read the label and see its corresponding field. Consider available space and number of fields when determining which label alignment to use.

![Top Aligned Label](images/patterns/forms/forms--label-top.svg)

<Spacer size="small" />

Left aligned labels are preffered for long forms with many inputs. Right justifying the label text helps with its relationship to the input field and readability. Consider available space and number of fields when determining which label alignment to use.

![Left Aligned Label](images/patterns/forms/forms--label-left.svg)

<Spacer size="small" />

Left aligned labels should line up with the text of the element.

![Left Aligned Label](images/patterns/forms/label--input-alignment.svg)

<Spacer size="small" />

### Margins & gutters

Always keep consistent margins between form labels, inputs, and actions.

![Forms Spacing](images/patterns/forms/forms--spacing.svg)

1. **30px** margin between title and elements
2. **10px** margin between labels and elements
3. **20px** margin between elements
4. **30px** margin between elements and actions

<br>

When errors happen the form needs to make space for the proper validation indicators and notifications.

![Forms Spacing](images/patterns/forms/forms--spacing--withvalidation.svg)

1. **20px** margin between elements
2. **30px** margin between elements and notifications
3. **30px** margin between notifications and actions

<Spacer size="small" />

For left aligned labels, keep a consistent gutter between the label and the element. Shorter gutter distances make it easier for the user to use the form. Long labels that need to wrap should keep the defined form margin or gutter. We recommend 40px.

![Left Aligned Label](images/patterns/forms/label--left-margin.svg)

<Spacer size="small" />

### Grouping elements with cards

In many cases it is reccomended to group related fields together using a card as their container. This helps the user understand the relationship between elements by forming a visual relationship. To help emphasise the relationship it's recommended to add group titles and instrutions..

![Forms Spacing](images/patterns/forms/forms--oncards.svg)

<hr>

<div id="form-actions"></div>

## Form actions

#### Action hierarchy

Forms typically have Primary and Cancel actions, but they could also have a secondary save action. Primary actions are buttons in a form that perform essential 'final' functionality, such as 'Save' or 'Submit'. For more information see [button documentation.](/components/buttons)

![contexutal help info icon](images/patterns/forms/forms--actions-heirarchy.svg)

<Spacer size="small" />

Sometimes having multiple buttons are necessary. A form may need Primary, Secondary and Cancel actions. In those cases line up the buttons based on their importance. Secondary actions, such as 'Save' are directly related to the form but should be treated as less important. 'Cancel' buttons should be treated as link buttons.
![contexutal help info icon](images/patterns/forms/forms--actions-hierarchy-with-secondary-action.svg)
<br/>
<br/>

#### Action positioning

###### Place actions inline with form fields

Form actions should appear where the user is likely to look first after completing a form. This is typically directly below the form itself in line with the inputs.

![form actions inline ](images/patterns/forms/forms--actions-inline.svg)

![form actions inline ](images/patterns/forms/forms--actions-inline2.svg)
<br>
<br>

###### Place back buttons at the top

In Multi-step forms some people want to go back to check or change their answers. In these cases use a back button at the top of the form. [Breadcrumbs](/components/breadcrumbs) work very well in these cases.

![form actions inline ](images/patterns/forms/forms--actions-back.svg)
<br>
<br>

###### Place actions in a modal dialog footer

To comply with modal standards the form actions should be placed in the footer of the modal.

![form actions inline ](images/patterns/forms/forms--actions-dialog.svg)
<br>
<br>

###### Actions on the right side of a page

When the action will take you to another page align the action to the bottom right of the page. Usually this is used in a multi-step process. See [Step Flow documentation.](/patterns/step-flow)

<hr>

<div id="form-help"></div>

## Indicators and contextual help

### Required field indication

Field indicators help the user understand what is necessary for them to complete the form, setting expectations and enabling them to fill out the form more quickly and accurately.

![form optional required](images/patterns/forms/forms--indicators.svg)

###### Form instructions

Every form should include a note at the start of the form that explains what fields are required in the form. This helps prevent errors and minimizes workload. How you communicate this depends on the specific mix of field types your form has. If all fields are required, you don't need indicators on every field, but in the notes let the user know that all questions must be answered.

###### Required indicators

They should be used whenever a field is required. Use a red asterisk next to the label.

###### Optional indicators

Occasionally, all of the fields are required except one or two. In these times it's ok to use an optional indicator. For this use light gray text that says (optional). This can be under the label, to the right of it, or potentially in the ghost text, depending on available space.

![form optional indicator](images/patterns/forms/forms--indicator-optional.svg)

<Spacer/>

In some cases a label isn't enough and we need provide additional help. Contextual help should appear directly on a form page so that users can easily find help when they look for it. This can take many appearances, such as constantly visible helper text below or to the right of the field, or a [tooltip](/components/tooltips) or popover icon. All of these are suitable options and will depend on structure and complexity of the form.

![Contexutal help examples](images/patterns/forms/contextual-help--examples.svg)

<hr>

<div id="validation"></div>

## Validation

Users dislike when they go through the entire process of filling up the forms and have to wait for clicking the submit button to understand what went wrong. If possible, validation should be inline: meaning, as soon as the user has finished filling in the element, an indication should appear if the field contains an error, or is valid, if validation is necessary. If an element is in an error state, when the user meets the requirements of the input it should revalidate, removing the error.

In many cases inline validation isn't possible. When those situations arise, consider a combination of element validation and helpful messaging. This can be helpful to make sure the error is seen and easily corrected by the user.

<br>
<br>

#### Element validation

When something goes wrong, it's important to highlight each element that has an error and add a clear message of what needs to be done to pass validation, this way a user can easily find what they need to fix. Input elements, like text inputs, dropdown selects and date pickers show validation by changing to their error state and showing the validation message below. Elements that don't have error states, like checkboxes, radio buttons and toggles only show the validation message below the element.

![forms validation error](images/patterns/forms/forms--validation-error.svg)

In some cases it is appropriate to give the user a success validation message to increase their confidence in moving forward.

![forms validation success](images/patterns/forms/forms--validation-success.svg)

#### Validation notification

When the form action button is pressed, if there are errors an error notification should show letting the user know something needs to be done before completion. Proper messaging is important for the user to know how to move forward quickly. Be direct on what to fix and use plain and simple language.

![forms validation message](images/patterns/forms/forms--validation-message.svg)

###### Notification placement

- If there wasn't a reload of the page – show the message directly above the submit/save button.
- If there was a reload of the page – show the message at the top of the page, usually under the form title so the user doesn't need to scroll to see it.

<hr>

<div id="keyboard-accessibility"></div>

## Keyboard accessibility

To ensure our forms are usable for everyone it's important to build forms that are accessible. To that point, consider the following keyboard interactions.

### Common keystrokes

- **Arrows** - Navigates the user to the next element and focuses that element.
- **Tab** - Navigates the user to the next element and focuses that element.
- **Shift+Tab** - Navigates backwards to the previous element and focuses that element.
- **Spacebar** - Selects an element.
- **Enter** - When focused enter will perform the action of the element.

### Navigation order

As a keyboard user navigates through the page, the order in which interactive items receive keyboard focus is important. The default keyboard navigation order must be logical and intuitive.

### Interacting with elements

- **Text input** - When focused add text using the keyboard, then tab or use arrows to move between elements.
- **Checkbox** - When focused use the 'spacebar' to toggle on or off, then tabbing or arrows to move between elements. For a list of checkboxes, use the spacebar to select the items you want and arrows to move to the next item. In this case all or none of the elements can be selected at once.
- **Radio button** - When focused use the 'spacebar' to toggle on or off, then tabbing or arrows to move between elements. For a list of radio, use the spacebar to select the items you want and arrows to move to the next item. In this case only one of the elements can be selected at once.
- **Dropdown select** - When focused use 'spacebar' or enter to open the dropdown, then arrows to cycle through options, then tab or enter to select and move to the next element.
- **Toggle** - When focused use the 'spacebar' to toggle on or off, then tabbing or arrows to move between elements.
- **Datepicker** - When focused use 'spacebar' or 'enter' to open the dropdown, then arrows to cycle through options, then tab to select and move to the next element.
- **Button** - When focused hitting 'enter' will perform the action of the link.
- **Links** - When focused hitting 'enter' will perform the action of the link.
- **Dialog** - When open hitting 'esc' will close the dialog.

### Special interactions

- **Submitting a form** - When there are two or fewer elements, hitting 'enter' will perform the primary action of the form. (i.e. a login screen) When the form has more than two elements, enter will do nothing until they have focus on the form actions.

<Spacer/>

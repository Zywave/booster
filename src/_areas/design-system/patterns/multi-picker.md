---
layout: documentation
title: Multi-picker
hideToc: false
---
A Multi-picker allows users to make multiple selections by searching for specific items in a list. It is made up of other components to make selecting multiple options easy and fast.

![Multi-picker - selected](/images/multipicker.svg)

<br>

## Usage

Appropriate for lists larger than 7-10 options that may require a user to add and remove multiple options. The Multi-picker allows a user to search through a large organized list to find and select multiple options. It makes the selections clear and easy to remove.

<hr>

## Components

The following are the basic components for creating a Multi-picker. For detailed documentation on our Multi-picker, view the [](https://xd.adobe.com/view/5de56467-92d7-4c5c-8514-3bea26b21b1b-08b6/grid)[Multi-picker design specs](https://xd.adobe.com/view/a3a6fa71-a1f0-4665-8eeb-20ee68e11de7-f6f5/grid).

<br>

#### **Dialog (optional)**

A Dialog can be used as the base to display all of the components within a Multi-picker. For more information, see [Dialog documentation](/design-system/components/dialogs/).

![Multi-picker - dialog box](/images/multipicker_dialog.svg)

<br>

#### **Displaying results after confirming selections in a Multi-picker dialog**

There are some scenarios where it makes sense to display the results of selections made within a Multi-picker.

Display the result if few selections were made.

![Multi-picker - results](/images/multipicker_results.svg)

<br>

If selections get too long or wrap to a new line, we recommend truncating the results to only show one selection and have an overflow indicator with the number of truncated selections represent the rest.

![Multi-picker - results 2](/images/multipicker_results-–-2.svg)

<br>

Use a Tooltip to display the rest of the results on hover. If the results are longer than 45 characters, remove the Tooltip and only allow the user to view the results in the Multi-picker. For more information, see [Tooltip documentation](/design-system/components/tooltips/).

![Multi-picker - results 3](/images/multipicker_results-–-3.svg)

<br>

#### **Text input: Search**

Use Search to filter a long list of options. Typeahead is optional, but recommended, to provide suggestions for a more efficient experience. For more information, see [Search documentation](/design-system/components/search/) and [Typeahead documentation](/design-system/patterns/typeahead/).

![Multi-picker - search](/images/multipicker_search.svg)

<br>

#### **Tags (exception to available components)**

Once an option is checked, it becomes a selection. Selections are visually defined by the encapsulation of the label in a gray rectangle accompanied by the remove button (X icon). Selections can be removed by clicking the remove button.

![Multi-picker - tags](/images/multipicker_tags.svg)

Out of all the available components listed to create a Multi-picker, tags are the exception and should be custom. View the Multi-picker design specs for [tabs design specs](https://xd.adobe.com/view/a3a6fa71-a1f0-4665-8eeb-20ee68e11de7-f6f5/screen/ce7b0a4f-51c0-44ba-a074-95d78d60b687/specs/).

<br>

#### **List of options**

Checkboxes are used to represent options in a Multi-picker list. More than one option can be checked. To remove a selection, uncheck the checkbox. For more information, see [Checkbox documentation](/design-system/components/checkboxes/).

![Multi-picker - list of options](/images/multipicker_checkboxes.svg)

<br>

#### **Pager (optional)**

Use a pager when the list of options is larger than 20 options in a two-column list. Use your judgment as the height of the list of options will vary based on screen size. For information, see [Pager documentation](/design-system/components/pagers/).

![Multi-picker - pager](/images/multipicker_pager.svg)

<hr>

## Layout & Structure

Putting all of the components together in the right order and layout is essential for a user to search, add, and remove options efficiently. This includes:

* **Title**
* **Selections**
* **Search**
* **List**
* **Actions**

For detailed documentation on our Multi-picker, view the [Multi-picker design specs](https://xd.adobe.com/view/a3a6fa71-a1f0-4665-8eeb-20ee68e11de7-f6f5/grid).

<br>

#### **Title**

Give your Multi-picker a clear, actionable title that will help users understand what exactly they need to do. For example: Add accounts.

<br>

#### **List**

Display the list of options in two columns when the list exceeds 10 options. If the option labels are very long, use one column instead. Use a pager when the list of options in two columns exceeds 20 options. As the screen size reduces, the two-column list should reduce to just one column.

#### Two-column list with pager

![Multi-picker - two-column list](/images/multipicker_unselected.svg)

<br>

#### Actions

To comply with Dialog standards, the Multi-picker actions should be placed in the footer of the Dialog.

![Multi-picker - actions](/images/multipicker_actions.svg)

<hr>

## Behavior

#### **Removing selections**

After a user has checked at least one option, they will appear as selections between the selections counter and the search bar. The "Remove all" action should appear disabled until there is at least one selection made.

Users can remove a selection using one of two methods:

* Clicking on the remove button (X icon) within the selection.
* Unchecking the checkbox in the list of options.

![Multi-picker - removing selections](/images/multipicker_removing-selections.svg)

<br>

#### **Selecting all options**

A "Select all" button provides an efficient way for the user to add all of the options into the selection list.

![Multi-picker - select all button](/images/multipicker_select-all-button.svg)

<br>

#### **Remove all options**

A "Remove all" button provides an efficient way for the user to remove all selections, which will simultaneously uncheck all options in the list.

![Multi-picker - remove all button](/images/multipicker_remove-all-button.svg)

<hr>

# Responsiveness

When on a mobile device (breakpoint ≤480px), the Multi-picker option list reduces to just one column.

![Multi-picker - mobile](/images/multipicker_mobile.svg)

<br>

Selections will wrap to the next line. If a user has made a large number of selections, the page should scroll.

![Multi-picker - mobile selected](/images/multipicker_mobile_selected.svg)

<hr>

## Alternative considerations

* Use [Checkboxes ](/design-system/components/checkboxes/)for lists smaller than 7-10 items.
* Use a [Dropdown multi-select](/design-system/components/dropdown-multi-selects/) for lists larger than 10 options that may require a user to select more than 1 option.
* Use [Radio buttons](/design-system/components/radio-buttons/) if users can only select 1 option from a list of 3 or fewer options.
* Use a [Dropdown select](/design-system/components/dropdown-selects/) if users can only select 1 option from lists larger than 2 options.
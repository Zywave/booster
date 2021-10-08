---
layout: documentation
title: Multi-picker
hideToc: false
---
<!--StartFragment-->

A Multi-picker allows users to make multiple selections by searching for specific items in a list. It is made up of other components to make selecting multiple options easy and fast.

![Multi-picker - selected](/images/multipicker_selected.png)

<br>

## Usage

Appropriate for lists larger than 7-10 options that may require a user to add and remove multiple options. The Mutli-picker allows a user to search through a large organized list to find and select multiple options. It makes the selections clear and easy to remove.

<hr>

## Components

The following are the basic elements for creating a Multi-picker. For detailed documentation on our Multi-picker, view the [Multi-picker design specs](https://xd.adobe.com/view/5de56467-92d7-4c5c-8514-3bea26b21b1b-08b6/grid).

<br>

### **Dialog (optional)**

A Dialog can be used as the base to display all of the components within a multi-picker. For more information see [Dialog documentation](https://zui.zywave.com/components/dialogs/).

![Dialog box](/images/dialog-box.png)

<br>

### **Displaying results after confirming selections in a Multi-picker dialog**

There are some scenarios where it makes sense to display the results of selections made within a Multi-picker.

Display the result if few selections were made.

![Multi-picker - results](/images/multipicker_results.png)

<br>

If selections get too long or wrap to a new line, we recommend truncating the results to only show one selection and have an overflow pill with the number of truncated selections represent the rest.

![Multi-picker - results 2](/images/multipicker_results-–-2.png)

<br>

Use a Tooltip to display the rest of the results on hover. If the results are longer than 45 characters, remove the tooltip and only allow the user to view the results in the multi-picker.

![Multi-picker - results 3](/images/multipicker_results-–-3.png)

<br>

### **Text input: Search**

Use a search to filter a long list of options. Typeahead is optional, but recommended, to provide suggestions for a more efficient experience. For more information [Typeahead documentation](https://zui.zywave.com/patterns/typeahead/).

![Search](/images/multipicker_search.png)

<br>

### **Tag (exception of components)**

Once an option is checked, it becomes a selection. Selections are visually defined by the encapsulation of the label in a gray rectangle accompanied by the remove button (X icon). Selections can be removed by clicking the remove button.

![Tag](/images/multipicker_tags.png)

<br>

### **List of options**

Checkboxes are used to represent options in a Multi-picker list. More than one option can be checked. To remove a selection, uncheck the checkbox. For more information see [Checkbox documentation](https://zui.zywave.com/components/checkboxes/).

![List of options](/images/multipicker_checkboxes.png)

<br>

### **Pager (optional)**

Use a pager when the list of options is larger than 20 options in a two-column list. Use your judgment as the height of the list of options will vary based on screen size.

![Pager](/images/multipicker_pager.png)

<hr>

## Layout & Structure

Putting all of the elements together in the right order and layout is essential for a user to search, add, and remove options efficiently. This includes:

* Title
* Selections
* Search
* List
* Actions

For detailed documentation on our Multi-picker, view the [Multi-picker design specs](https://xd.adobe.com/view/5de56467-92d7-4c5c-8514-3bea26b21b1b-08b6/grid).

<br>

<!--StartFragment-->

### **Title**

Give your Multi-picker a clear, actionable title that will help users understand what exactly they need to do. For example: Add accounts.

<br>

### **Selections**

Display the list of option

<br>

### **List**

Display the list of options in two columns when the list exceeds 10 options. If the option labels are very long, use one column instead. Use a pager when the list of options in two columns exceeds 20 options. As the screen size reduces, the two-column list should reduce to just one column.

# IMAGE

<br>

### Actions

To comply with Dialog standards, the Multi-picker actions should be placed in the footer of the Dialog.

# IMAGE

<br>

When the Multi-picker does not use a dialog, the actions should appear at the top right of the page aligned with the title.

# IMAGE

<hr>

## Behavior

### **Removing selections**

After a user has checked at least one option, they will appear as selections between the selections counter and the search bar. The "Remove all" action should appear disabled until there is at least one selection made.

Users can remove a selection using one of two methods:

* * Clicking on the remove button (X icon) within the selection.
  * Unchecking the checkbox in the list of options.

# IMAGE

<br>

### **Selecting all options**

A "Select all" button provides an efficient way for the user to add all of the options into the selection list.

# IMAGE

<br>

### **Remove all options**

A "Remove all" button provides an efficient way for the user to remove all selections, which will simultaneously uncheck all options in the list.

<hr>

# Responsiveness

When on a mobile device (breakpoint ≤480px) the Multi-picker option list reduces to just one column.

# IMAGE

<br>

Selections will wrap to the next line. If a user has made a large number of selections, the page should scroll.

# IMAGE

<hr>

<!--StartFragment-->

## Alternative considerations

* Use [checkboxes ](https://zui.zywave.com/components/checkboxes/)for lists smaller than 7-10 items.
* Use a [dropdown multi-select](https://zui.zywave.com/components/dropdown-multi-select/) for lists larger than 10 options that may require a user to select more than 1 option.
* Use [radio buttons](https://zui.zywave.com/components/radio-buttons/) if users can only select 1 option from a list of 3 or fewer options.
* Use a [dropdown select](https://zui.zywave.com/components/dropdown-select/) if users can only select 1 option from lists larger than 2 options.

<!--EndFragment-->

<!--EndFragment-->
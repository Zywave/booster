---
layout: documentation
title: Typeahead
subtitle:
---

## What is typeahead?

Typeahead is a method of translating intention between user and software, by prompting suggestions for an input field. It's such a common feature, it's easy to overlook how often we use this in our own day-to-day interactions with technology. Most commonly used for searching, there are two basic forms of typeahead—auto-complete and auto-suggest.

<Spacer size="small"/>

<Grid>

<GridCol col="span-6">

### Auto-complete

Returns exact query results that start with the characters typed. Dropdown options are pulled from a controlled, finite list.

_Example: a list of states that begin with 'al.'_
<br><br>

![Image example of what auto-complete looks like](images/components/typeahead/auto_Complete.svg)

</GridCol>

<GridCol col="span-6">

### Auto-suggest

Guides a user by returning a list of related keywords or phrases based on the characters typed, but that don't necessarily match an exact query string.

_Example: a list of names that include the letters combination 'ad.'_

![Image example of what auto-suggest looks like](images/components/typeahead/auto_Suggest.svg)

</GridCol>

</Grid>

---

## Best practices

To ensure the best user experience possible, keep in mind the following best practices when adding typeahead to a product feature:

- Keep the dropdown manageable and useful by trying to show seven or fewer results at once and avoiding scroll bars.
- Bold the unique text of each dropdown item.
- Provide suggestions when the second or third character is entered, and continue narrowing suggestions as more characters are typed.
- Keep the dropdown and text box design clean and organized.

---

## Styling & specs

<Grid>

<GridCol col="span-4">

#### Dropdown

- Unique text font weight: 700
- Hover color: ZUI Gray 50
- Dropshadow
  - Color: Black at 16%
  - X-Axis: 0px
  - Y-Axis: 1px
  - Blur radius: 3px
  - Spread radius: 1px

</GridCol>

<GridCol col="span-8">

![Typeahead styling specs](images/components/typeahead/styling_Specs.svg)

_All values are in pixels._

</GridCol>

</Grid>

<hr>

## Additional display options

Depending on the context of the typeahead feature and what's technically feasible, you may want to consider using search categories or displaying a user's previous entries/searches.
<Spacer size="small"/>

#### Recent entries

Recently typed searches or entries are shown in a dropdown the moment the cursor is put into the search field, and disappear as the first character is typed.

![Image example of what auto-complete looks like](images/components/typeahead/recent_Searches.svg)

<Spacer size="small"/>

#### Search categories

Using category headers, labels, or icons can help narrow down search suggestions by organizing items in the dropdown. If you decide to use search categories, remember that they are meant to consolidate results and make the list of suggestions easier to read. Labels should be concise, and icons must be clear and distinct.

<Spacer size="small"/>

#### Header label

- Color: ZUI Gray 300
- Font size: 12px
- Font weight: 700
- Text case: uppercase

![header label](images/components/typeahead/header_Label.svg)

<Spacer size="small"/>

#### Inline label

- Color: ZUI Gray 300
- Font size: 12px

![inline label](images/components/typeahead/inline_Label.svg)

#### Icons

- Color: ZUI Gray 300
- Size: 16px

![icon label](images/components/typeahead/icon_Label.svg)

---

## Behavior & interaction

<Grid>

<GridCol col="span-4">
Typeahead suggestions will display in a dropdown, typically after the third character is typed into the text box. Users may hover over a typeahead suggestion with their mouse, or arrow down to highlight a suggestion. To select a specific suggestion, uses may either click the suggestion with their mouse, or choose Enter when the suggestion is highlighted.
<br><br>

[View a live example](http://zui.zywave.com-knockout-typeahead/)

</GridCol>

<GridCol col="span-4">

**Focused state**

![focused state](images/components/typeahead/focused_State.svg)

</GridCol>

<GridCol col="span-4">

**Hover state**

![hover state](images/components/typeahead/hover_State.svg)

</GridCol>

</Grid>

---

## Rare situations

In rare situations, you may want to consider adding additional identifying information to typeahead suggestions. For example, AMC typeahead brings back results under the traditional categories of _Account_ and _Contact_, but includes the account location and contact account for each suggestion. This extra bit of information helps a user recognize and identify a suggestion more quickly and accurately.

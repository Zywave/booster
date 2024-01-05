---
title: Tables
subtitle: Sets of data displayed in a grid-like format of rows and columns
hideToc: false
api: https://cdn.zywave.com/@zywave/zui-table@latest/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-table@latest/docs/demo.html
mainComponentName: zui-table
includedElements: []
entryPointURI: https://cdn.zywave.com/@zywave/zui-bundle@latest/dist/components/table.js
statusOverride: null
---
## Usage

A table is designed to visually organize data, allowing users to quickly scan and derive insights. In cases where applicable, it also enables users to take informed actions based on the presented information.

![Base image of a table](/images/table-usage.svg "Base image of a table")

<hr>

## Anatomy

Tables always use cards as their container(s).

![Anatomy of a table](/images/table-anatomy.svg "Anatomy of a table")

1. **Table header** (optional): The container that can include search, filters, actions, number of results
2. **Column headers** (required): The title for data within each row
3. **Content rows** (required): The containers for cell data
4. **Summary row** (optional): The container that displays a grand total of values
5. **Table footer** (optional): The container that can include pagination

### Vertical column dividers

Add vertical columns if extra clarity is needed to differentiate between columns. Vertical columns are also helpful when the table has many columns.

![Example of a table with vertical column dividers. ](/images/table-columndividers.svg "Example of a table with vertical column dividers. ")

### Cell data alignment

Text should always be aligned left and dollar amounts right, this allows values to be compared and calculated.

#### Data alignment best practices

* Text should not be justified
* Year, date, and time should be right aligned
* Align headings with their data
* Be consistent with the decimal point, if you choose to show two decimal values, always display them
* Align the $ symbol next to the value, unless the table uses vertical column dividers, then align the $ symbol to the left of the cell and the value to the right 

![Example of typical cell data alignment, text left aligned / numbers right aligned.](/images/table-dataalignment-base.svg "Example of typical cell data alignment, text left aligned / numbers right aligned.")

*Example of typical cell data alignment, text left aligned / numbers right aligned.*

![Example of monetary values in cells with vertical column dividers, aligning the $ symbol to the left of the cell.](/images/table-dataalignment-dividers.svg "Example of monetary values in cells with vertical column dividers, aligning the $ symbol to the left of the cell.")

*Example of monetary values in cells with vertical column dividers, aligning the $ symbol to the left of the cell.*

<hr>

## Types

### Basic table

A﻿ basic table should be used to show the user data that is not actionable, searchable, or sortable. A﻿ basic table must contain the following:

* **Column headers**: The title for data within each row
* **Content rows**: The containers for cell data

![Example of a table with a results counter. ](/images/table-basictable.svg "Example of a table with a results counter. ")

### Banded table

Add row banding if the rows become hard to follow, when the data is complex, when there is considerable space between columns, or the table requires horizontal scrolling.

Row banding can distort the meaning of the data by highlighting every other row to the detriment of neighboring rows and can cause user distraction.

If the table uses row banding, it does not need row dividers.

![Example of a table with row banding. ](/images/table-rowbanding.svg "Example of a table with row banding. ")

### T﻿opbar table

A﻿dd a topbar to a table when the user will need to either search or view the number of results. 

* The search input should always be left-aligned. 
* T﻿he results counter should always be right-aligned, when in the topbar.
* W﻿hen there are actions present, the results counter will remain to the left of the action buttons. 

![Example of a table with a results counter. ](/images/table-topbar.svg "Example of a table with a results counter. ")

### Actions table

Add actions to the table when the user can take an action on either all data or individual data. 

* For actions affecting all data, place the action button in the topbar.
* F﻿or actions affecting individual data in rows, place the action button in the last column of the row.

![Example of a table with a results counter. ](/images/table-withactions.svg "Example of a table with a results counter. ")

### Summary table

A﻿dd a summary row to the table when a user needs to know the total amount from a column of data. 

* The summary row should be placed at the bottom of the table and right-aligned with the amount column. 

![Example of a table with a results counter. ](/images/table-summary.svg "Example of a table with a results counter. ")

### Results counter table

Display the current number of results shown in the table to the left of the action in the table header.

* If you need to add more actions to the table, push the results counter to the left in the table header. 
* If the table header is not present, show the results counter below the table, aligned with the first column header.

*T﻿his feature is not available yet in Toolkit.*

![Example of a table with a results counter. ](/images/table-counter.svg "Example of a table with a results counter. ")

### Sortable table

Allow users to organize rows by a specific category and follow these best practices: 

* Any column can be ordered alphabetically, by date, or numerically by clicking the sort icon next to the column label.
* Whenever a column is selected for sort, sort by that column only
* To indicate columns than have been sorted, the ZUI-chevron-up or ZUI-chevron-down icon will be highlighted in blue 
* *Sorting by the column in ascending order is indicated with a ZUI-chevron up*
* *Sorting by the column in descending order is indicated with a ZUI-chevron down*
* When helpful, a column can be displayed sorting by default
* The entire column header is clickable to trigger sorting

![Example of a table with sorting. ](/images/table-sorting.svg "Example of a table with sorting. ")

<hr>

## Behavior 

#### Search

When the user needs to find a record in the table, add a search input field.  The search bar is placed on the left side of the table header. 

* D﻿epending on the size and type of data, the search may happen as the user types or after the hit enter.
* A spinner is recommended for displaying the loaded content.

![Example of a table with search.](/images/table-searching-base.svg "Example of a table with search.")

##### Results

After performing a search, the content rows should reflect the search parameters and the number of results updated.

![Example of a table with search results.](/images/table-searching-results.svg "Example of a table with search results.")

##### No results

If there are no results returned from a search, inform the user with a message, view [Empty states](https://booster.zywave.dev/design-system/patterns/empty-states/). 

![Example of a table with no search results.](/images/table-searching-noresults.svg "Example of a table with no search results.")

#### Actions

##### Table level actions

Actions that directly impact the table, such as "Add", can be located in the table header.

* Actions in the header should be located on the right side of the header area following the 20px padding of the table
* When there are 1-2 actions they can remain as separate buttons
* When there are 3+ consider using a button dropdown or a button group when appropriate
* Buttons in the header should follow our normal button style hierarchy

![Example of a table with table level actions.](/images/table-tablelevelactions.svg "Example of a table with table level actions.")

##### Row level actions

* When actions are contained within cells they should follow our Link Button style.
* The actions column should be pinned to the right of the table.
* To align the action column header with the action buttons in each row, add an action attribute to the action column header. This applies extra left padding/margin for text alignment.

![Example of a table with row level actions.](/images/table-columnlevelactions.svg "Example of a table with row level actions.")

### Bulk selection

The bulk selection workflow becomes available when the user needs to select more than one option in a table and complete an action on them.

* Checkboxes will appear in the left-most column, one for each row
* When an item is selected, a blue action bar will take the place of the column headers
* When actions are selected, but not all, the checkbox in the action bar will be in a indeterminate state
* When all actions are selected, the checkbox in the action bar will be in a checked state
* The user will be able to check or uncheck the checkbox in the action bar, which will select or deselect all options in the table
* Actions, such as delete or add, will be on the right side of the actions bar

![Example of a table with bulk selection. ](/images/table-bulk.svg "Example of a table with bulk selection. ")

### Pagination & Infinite scrolling

Infinite scrolling is the preferred method of handling tables that contain enough data to require loading a smaller portion of data at one time.

* It is preferred that the scrolling happen on the browser viewport, not the table itself. (However, if the page has more than 1 table in the UI, then the scrolling should happen independently in each table.)

#### Infinite scrolling

* The consumer should determine the number of table rows available to the user initially (Zywave standard starts at 10 rows, but it can be larger)
* As the user scrolls down through the table, an additional set of rows should begin loading when they reach the bottom of the table
* If the user scrolls back up, the loaded rows should remain and not need to be loaded again
* Depending on the time necessary to load additional rows, a loading experience may be necessary
* A﻿ spinner is the preferred method for a loading experience

![Example of a table with infinite scrolling.](/images/table-infinitescroll.svg "Example of a table with infinite scrolling.")

#### Standard pagination

When infinite scrolling is not an option, a[ pager](https://booster.zywave.dev/design-system/components/pagers/?tab=usage) may be used to allow the user to navigate through the table.

* The pager should indicate the page the user is currently viewing and provide them with 5 other pages to click on including the last page. This will also give the user an indication of how many pages there are total
* The user should be able to click on a page number to view that page or use the arrows to navigate to a page
* The input field to the right of the pages allows the user to type in the page number they want to view
* If possible, provide the user a way to change the number of rows that are visible in the table at a time (defaulted at 10)
* * This should be a dropdown aligned with the right edge of the table
  * Typical values are 10, 25, 50, 100
* When there are 5 or fewer pages, the pager may be simplified to only show the 5 pages and not require the input field to navigate to a specific page

#### Minimal pagination

Use the minimal pager when a more simplistic pager is required, such as on mobile devices.

* The minimal pager should show the page number that the user is currently viewing as well as the last page to indicate to the user how many total pages there are
* Arrows to the left and right allow the user to easily navigate through the pages one at a time
* The input to the right of the pages allows the user to easily enter the page number they wish to navigate too
* W﻿hen the user is trying to find something specific,  such as an account, a pager is ideal
* W﻿hen the user is browsing, such as a content search, infinite scroll may be ideal
* F﻿or mobile, infinite scrolling is ideal
* If the user navigates to a page from within the table, then uses breadcrumbs to navigate back, we should try to remember the location

![Example of a table with standard and minimal pagination. ](/images/table-pagination.svg "Example of a table with standard and minimal pagination. ")

### Wrapping and truncation

Based on the space available and the amount of data contained within the table, wrapping or truncation may be necessary to display all of the available columns. The data contained within the table should drive the decision on whether to truncate or wrap. 

#### Wrapping data

The benefits of wrapping data is that all of the information is visible to the user and it works well with very detailed information such as plan names.

The negative of wrapping data is that wrapping on more than two lines can add a lot of height to the rows within a table, which can actually harm readability of some data like numbers.

![Example of a table with wrapping.](/images/table-wrapping.svg "Example of a table with wrapping.")

#### Truncating data

The benefit of truncation is that the table height remains compact and all row heights will remain equal. 

The negative of wrapping data is that important information may be hidden.

![Example of a table with truncation.](/images/table-truncation.svg "Example of a table with truncation.")

#### Things to consider

* When truncating data a tooltip may be used on hover to show the full length
* Wrapping to a certain number of lines before truncating may be appropriate
* Move to a full-width table when many columns start wrapping, but consider how this will behave at different browser sizes

### Filtering

Based on the data in the table, the user may be able to add filters to narrow down the data available.

* Unlike other table-level actions, the filter button should be placed directly next to the Search input, 10px apart
* When the filter button is clicked, a dropdown or modal should open with filter options

  * Use a filter dropdown when there are just a few filter options
  * Use a filter modal when there are multiple filter options or filter categories
* Once filters are selected, they will remain visible in the table header using Tags
* The filters can be removed directly on the tags, which will reload the results in the table automatically 
* Filters can also be applied through headers or a filter panel, when these methods are used, the Filter button next to Search should be removed

![Example of a table with filters. ](/images/table-filters.svg "Example of a table with filters. ")

<hr>

## Responsiveness

When on a mobile device (breakpoint ≤480px), the table reduces to cards.

* Each row, and all column data associated with that row, will appear on a single card. 
* Row-level actions will be place below a separator line on the bottom-right of each card
* Each card should be full width to the edge of the screen and have 10px above and below

![Example of a responsive table.](/images/table-mobile.svg "Example of a responsive table.")

<hr>

## Best practices

<docs-grid columns="2">
  <div>

![Do Table row level actions](/images/table-do-buttons.svg)

<docs-do>
Use link or icon buttons in table row level actions

</docs-do>
  </div>
  <div>

![Do not Table row level actions](/images/table-donot-buttons.svg)

<docs-do-not>

Use primary or secondary buttons in table row level actions

</docs-do-not>
  </div>
  
</docs-grid>

<docs-spacer size="small"></docs-spacer>

<docs-grid columns="2">
  <div>

![Do Table row level actions](/images/table-do-space.svg)

<docs-do>

Use table columns sized according to the data they contain

</docs-do>
  </div>
  <div>

![Do not Table row level actions](/images/table-donot-space.svg)

<docs-do-not>

Use columns that are too small for data if there is room for more space

</docs-do-not>
  </div>
  
</docs-grid>

<docs-spacer size="small"></docs-spacer>

<hr>

## Alternative considerations

* Consider using Cards when there is less than two columns of information and the user will not be sorting, filtering, or taking row actions.
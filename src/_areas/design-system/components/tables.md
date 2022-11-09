---
title: Tables
subtitle: ""
hideToc: false
api: https://cdn.zywave.com/@zywave/zui-table@latest/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-table@latest/docs/demo.html
mainComponentName: zui-table
includedElements: []
entryPointURI: https://cdn.zywave.com/@zywave/zui-bundle@latest/dist/components/table.js
statusOverride: null
---
## Usage

Used to help users visualize, organize and understand their data to derive insights and take informed action.

![Base image of a table](/images/table-usage.svg "Base image of a table")

## Anatomy

![Anatomy of a table](/images/table-anatomy.svg "Anatomy of a table")

Tables typically use cards as their container(s).

* **Table header** (optional): The container that can include search, filters, actions, number of results
* **Column headers** (required): The title for data within each row
* **Content rows** (required): The containers for cell data
* **Table footer** (optional): The container that can include pagination and a summary row that displays a grand total of values

## Types

### Vertical column dividers

Add vertical column dividers minimally, only if extra clarity is required or there are many columns and too close together.

![Example of a table with vertical column dividers. ](/images/table-columndividers.svg "Example of a table with vertical column dividers. ")

### Row banding

Add row banding minimally, only if the rows become hard to follow, when the data is complex, there is considerable space between columns, or the user is required to scroll horizontally.

Row banding can distort the meaning of the data by highlighting every other row to the detriment of neighboring rows and can cause user distraction.

If the table uses row banding, it does not need row dividers.

![Example of a table with row banding. ](/images/table-rowbanding.svg "Example of a table with row banding. ")

### Cell data alignment

Text should always be aligned left and numbers right, this allows values to be easily compared and calculated. 

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

## Behavior 

### Table header

The table header can include search, filters, actions, and number of results.

#### Search

When the user needs to find a record in the table, add a search input field.  The search bar is placed on the left side of the table header. 

![Example of a table with search.](/images/table-searching-base.svg "Example of a table with search.")

##### Results

After performing a search, the content rows should reflect the search parameters and the number of results updated.

![Example of a table with search results.](/images/table-searching-results.svg "Example of a table with search results.")

##### No results

If there are no results returned from a search, inform the user with a message.

![Example of a table with no search results.](/images/table-searching-noresults.svg "Example of a table with no search results.")

#### Actions

##### Table level actions

Actions that directly impact the table, such as "Add", can be located in the table header.

* Actions in the header are vertically centered and located on the right side of the header area following the 20px padding of the table
* When there are 1-2 actions they can remain as separate buttons
* When there are 3+ consider using a button dropdown or a button group when appropriate
* Buttons in the header should follow our normal button style hierarchy

![Example of a table with table level actions.](/images/table-tablelevelactions.svg "Example of a table with table level actions.")

##### Row level actions

* When actions are contained within cells they should follow our Link Button style.
* The actions column should be pinned to the right of the table.

![Example of a table with row level actions.](/images/table-columnlevelactions.svg "Example of a table with row level actions.")

#### Results counter

Display the current number of results shown in the table to the left of the action in the table header.

* If you need to add more actions to the table, push the results counter to the left in the table header. 
* If the table header is not present, show the results counter below the table, aligned with the first column header.

![Example of a table with a results counter. ](/images/table-counter.svg "Example of a table with a results counter. ")

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

* The consumer should determine the number of table rows available to the user initially (Zywave standard starts at 10 rows, but it can be larger).
* As the user scrolls down through the table, an additional set of rows should begin loading when they reach the bottom of the table.
* If the user scrolls back up, the loaded rows should remain and not need to be loaded again.
* Depending on the time necessary to load additional rows, a loading experience may be necessary.

![Example of a table with infinite scrolling.](/images/table-infinitescroll.svg "Example of a table with infinite scrolling.")

#### Standard pagination

When infinite scrolling is not an option, a pager may be used to allow the user to navigate through the table.

* Pagers are located 10px directly below the table
* The pager should indicate the page the user is currently viewing and provide them with 5 other pages to click on including the last page. This will also give the user an indication of how many pages there are total.
* The user should be able to click on a page number to view that page or use the arrows to navigate to a page
* The input field to the right of the pages allows the user to type in the page number they want to view
* If possible, provide the user a way to change the number of rows that are visible in the table at a time (defaulted at 10).
* * This should be a dropdown aligned with the right edge of the table.
  * Typical values are 10, 25, 50, 100.
* When there are 5 or fewer pages, the pager may be simplified to only show the 5 pages and not require the input field to navigate to a specific page.  

#### Minimal pagination

Use the minimal pager when a more simplistic pager is required, such as on mobile devices.

* The minimal pager should show the page number that the user is currently viewing as well as the last page to indicate to the user how many total pages there are.
* Arrows to the left and right allow the user to easily navigate through the pages one at a time.
* The input to the right of the pages allows the user to easily enter the page number they wish to navigate too.

![Example of a table with standard and minimal pagination. ](/images/table-pagination.svg "Example of a table with standard and minimal pagination. ")

#### Things to consider

If the user navigates to a page from within the table, then uses breadcrumbs to navigate back, we should try to remember the location.

### Wrapping and truncation

Based on the space available and the amount of data contained within the table, wrapping or truncation may be necessary to display all of the available columns. The data contained within the table should drive the decision on whether to truncate or wrap. 

![Example of a table with wrapping and truncation.](/images/table-wrappingandtruncation.svg "Example of a table with wrapping and truncation.")

#### Wrapping data

The benefits of wrapping data is that all of the information is visible to the user and it works well with very detailed information such as plan names

The negative of wrapping data is that wrapping on more than two lines can add a lot of height to the rows within a table, which can actually harm readability of some data like numbers

#### Truncating data

The benefit of truncating data is that it can keep the table compact in terms of height

The negative of wrapping data is that important information may be hidden

#### Things to consider

* When truncating data a tooltip may be used on hover to show the full length
* Wrapping to a certain number of lines before truncating may be appropriate
* Move to a full-width table when many columns start wrapping, but consider how this will behave at different browser sizes

### Sorting

![Example of a table with sorting. ](/images/table-sorting.svg "Example of a table with sorting. ")

Allow users to organize rows by a specific category and follow these best practices: 

* Any column can be ordered alphabetically or numerically by clicking the sort icon next to the column label.
* Whenever a column is selected for sort, sort by that column only.
* To help users sort information, a column can be displayed sorting by default. To indicate which column is sorted by default, place a ZUI-chevron up or ZUI-chevron down icon to the right of the column header’s name. 
* *Sorting by the column in ascending order is indicated with a ZUI-chevron up.*
* *Sorting by the column in descending order is indicated with a ZUI-chevron down.*
* The clickable area to trigger sort, is the whole column header. 

### Filtering

Based on the data in the table, the user may be able to add filters to narrow down the data available.

* Unlike other table-level actions, the filter button should be placed directly next to the Search input, 10px apart
* When the filter button is clicked, a modal should open with filter options
* Once filters are selected, they will remain visible in the table header using Tags
* The filters can be removed directly on the tags, which will reload the results in the table automatically 

![Example of a table with filters. ](/images/table-filters.svg "Example of a table with filters. ")

## Responsiveness

When on a mobile device (breakpoint ≤480px), the table reduces to cards.

* Each row, and all column data associated with that row, will appear on a single card. 
* Row-level actions will be place below a separator line on the bottom-right of each card
* Each card should be full width to the edge of the screen and have 10px above and below

![Example of a responsive table.](/images/table-mobile.svg "Example of a responsive table.")

## Best practices

* Tables should not be stretched, unless the data within the table requires it. In general, use the fixed width (1000px) page layout.
* Table columns should be sized according to the data they contain.
* Unless it helps with readability, remove everything in the design which is not data or white space.

## Alternative considerations

* Consider using Cards when there is less than two columns of information and the user will not be sorting, filtering, or taking row actions.
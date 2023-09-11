---
title: Tags
subtitle: Visual elements that categorize content and facilitate easy
  organization of information
hideToc: false
api: https://cdn.zywave.com/@zywave/zui-tag@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-tag@next/docs/demo.html
mainComponentName: zui-tag
includedElements:
  - zui-tag
statusOverride: unstable
---
## Usage

Tags are colorful, versatile UI element that serve several purposes. Tags can be used to

* Categorize and label objects, making it easier to identify and filter relevant information
* Streamline navigation and filtering by allowing users to click on Tags to find related content
* Display filters that have been applied and allow for easy removal of those filters

![A table containing account information where the Lines of Business are shown using the Tags component](/images/usage-tag.png)

- - -

## Anatomy

Tags consist of two parts, a background and text. Filter tags also contain a remove icon.

![Anatomy of a Tag](/images/anatomy-tag.png)

![Anatomy of a Filter Tag](/images/anatomy-–-filter-tag.png)

* **Background:** 9 standard colors that are used for the background
* **Text:** Labels match the color selected for the background and should be around 20ch or less in length
* **Remove icon:** An X symbol indicates to the user that the filter can be removed

F﻿or a more detailed breakdown of sizing and spacing, view the Tags design specs.

- - -

## Types

There are two types of Tags. Usually Tags can be used as a visual label for an object or to display filters.

### Tags

Tags are most commonly seen within a list or table to either categorize or highlight information about the item they are associated with. Tags come in 9 standard color combinations and should not be customized unless absolutely necessary. 

### Filter Tags

Filter Tags are used to display actively applied filters and allow the user to easily remove the filter by clicking them.

- - -

## Layout

When displaying more than one, 10px of space should separate each Tag.

![A layout showing distance between two Tags](/images/layout-tag.png)

- - -

## Best practices

<docs-grid columns="2">
<div>


![A blue Tag with short and concise text that says Custom](/images/do-length.png)

<docs-do>
Keep text labels clear and concise
</docs-do>
</div>

<div>


![A blue Tag with length text that says Custom Medical Plan](/images/do-not-length.png)

<docs-do-not>
Use lengthy text labels or more than two words
</docs-do-not>
</div>
</docs-grid>

<docs-spacer size="large">
</docs-spacer>

<docs-grid columns="2">
<div>


![A red Tag that says Overdue](/images/do-colors.png)

<docs-do>
Be mindful of connotations when selecting colors for Tags
</docs-do>
</div>

<div>


![A green tag that says Overdue](/images/do-not-colors.png)

<docs-do-not>
Select colors like red to indicate success or blue to indicate urgency
</docs-do-not>
</div>
</docs-grid>

- - -

## Alternate considerations

When there are too  many Tag options for one object, the Tags become less effective in organizing information. Consider using plain text labels in table columns when there are more options available than Tag colors. These labels can still be filterable in the table and this application can prevent the UI from becoming too busy.

Other visuals such as Icons or color-coded elements may be used when not many options need to be shown and space is limited. 

![A table using a star icon to indicate favorites and a yellow dot to indicate plans that need underwriting as alternatives to a tag](/images/alternate-consideration-tag.png)
---
layout: blog
type: blogPost
title: Introducing the Table web component
description: zui-table enters the chat
date: 2021-12-09T15:07:26.025Z
hideToc: false
tags:
  - Web Components
---
After a few years of retreating into the darkness out of fear at the slightest whisper of the word "table," we finally mustered the courage to summon the legendary beast `<zui-table>`.

We punted on building our own Table component for so long because there are a lot of requirements. From years of implementing hundreds of native HTML and third-party tables in our Zywave applications, we identified several functionalities that are musts:
- **Searching:** refine data in a table to match certain keywords
- **Filtering:** narrow results based on criteria(s)
- **Sorting:** sort a column in ascending or descending order
- **Editable table cells:** allow values within cells to be modified
- **Bulk actions:** apply mass changes to all or a difinite selection of table rows
- **Loading view:** visual indication that table and/or table data are loading
- **No results view:** communicate to users when the table has no data or their search/filter yields no results



In order to get `<zui-table>` into the hands of consumers faster, we are releasing it in stages. The first stage introduces Table to our design system with basic features and styles.

## First stage - basic Table

Starting today, you can implement `<zui-table>` in its simplist form:
```html
<zui-table>
  <zui-table-row>
    <zui-table-cell>Honeycrisp</zui-table-cell>
    <zui-table-cell>Red</zui-table-cell>
    <zui-table-cell>Sweet</zui-table-cell>
  </zui-table-row>
  <zui-table-row>
    <zui-table-cell>Honeycrisp</zui-table-cell>
    <zui-table-cell>Red</zui-table-cell>
    <zui-table-cell>Sweet</zui-table-cell>
  </zui-table-row>
</zui-table>
```

Thanks to the advancement (and wide adoption) of Web Components and CSS Grid, we finally felt well-equipped to build our own framework-agnostic Table component. Without these two web technologies, building `<zui-table>` would be more complicated than it already is. Most of the layout shifting logic is taken care of by CSS Grid and all features are scoped to the component thanks to the shadow DOM made available in Web Components.


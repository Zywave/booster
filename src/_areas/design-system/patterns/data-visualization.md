---
layout: documentation
title: Data visualization
subtitle: Data visualizations represents information in graphical form to tell a
  story. They surface patterns in data that aim to provide an answer to one
  specific question.
hideToc: false
---
## Usage

Data visuals are designed to make it easy to compare data and use it to tell a story – both of which can help users in decision-making. This allows users to digest, visualize and see trends in their data.

I﻿MAGE

- - -

## Principles

The data visualization process always begins with a set of data, a question, and an analysis of the data to find the answer. Each visualization should focus on answering a single question about the dataset. For example, “What are my sales over time?”

Data visualizations should be approached by:

<docs-spacer size="small"></docs-spacer>

#### Solving a problem

Have a clear question that needs to be answered. If multiple answers to multiple questions are illustrated in a single visualization, it will become over complicated and hard to understand. If one graph is too complex to represent a certain dataset, the data should be represented in multiple, simple graphs.

#### Simplicity

Keep the visual elements as simple as possible. Only necessary information such as labels, values, and bars or lines should be present. A key or legend should be provided for more complex data that may have multiple colors or types of information. Colors and other visual elements should always be kept to a minimum when possible.

#### Designing with real data

Designing with real data will reveal the effectiveness of the visualization. Also test when there are a few data points (one or two) or many data points (100 or more). Adapt data visualizations for different device sizes, while anticipating user needs on data depth and complexity

- - -

## Types

The following are the basic types of data visualizations. For detailed documentation on Data visualization, view the `Data visualization design specs.`

Booster supports`vertical column`, `line`, `vertical bar`, `display`, `pie`, `donut `and `heatmap `charts.

When choosing a chart type, consider your data set and what you want to convey about the data.

<docs-spacer size="small"></docs-spacer>

#### Changes over time

A change over time, comparisons, and trends, consider a line or vertical column chart.

Common use cases include:

* Quote volume in the past 90 days
* Sales closed per agent

I﻿MAGE

#### Category & ranking comparison

A comparison between distinct categories, consider a horizontal bar or horizontal grouped bar chart.

Common use cases include:

* Quote volume by office
* Top-selling products

I﻿MAGE

#### Part to whole

A comparison of proportions of a whole or how partial elements add to a total, consider a donut, pie or stacked chart.

Common use cases include:

* Bridged to bound quotes

I﻿MAGE

#### Display

A quantifiable measure that is used to track and display the status of a specific process. Examples include a sum, an average, or a movement in a positive or negative direction, consider a display metric.

Common use cases include:

* Total quote volume

I﻿MAGE

#### Spatial

A visualization to quickly understand data across both space and time on a geographic region, consider a choropleth.

Common use cases include:

* Geographical: Quote volume by zip code

I﻿MAGE

- - -

## Layout & structure

Putting all of the components together in the right layout is essential for a user to digest and analyze the data efficiently. This includes:

1. **Title:** A clear, actionable title that will help users understand what exactly they looking at. Example: Quote volume by office - Top 10.
2. **Subtitle** (optional): Provides context for the title.
3. **Data visual:** Consider your data set and what you want to convey about the data when selecting a data visual.
4. **Axis:** All charts have 2 axis lines which should be used as a guideline yet be unobtrusive.
5. **Axis labels:** Axis lines should be labeled for clarity.
6. **Controls** (optional): Charts can have various controls. Example: Favorite, Expand, filter
7. **Annotation** (optional): Highlights data points and data outliers
8. **Legend** (optional): Some chart elements may need more context with labels

I﻿MAGE

For detailed documentation on Data visualization, view the `Data visualization design specs`.

- - -

## Line charts

Line charts are used to show change over time, comparisons, and trends. Use line charts when the number of data points is more than 30. For detailed documentation on line charts, view the `Data visualization design specs`.

I﻿MAGE

#### Legend

Be sure to include a categorical color legend if comparing more than one data point. Sometimes direct labeling can be used if data is less dense. On desktop, a legend should be positioned below a chart. On mobile, place the legend above the chart to keep it visible during interactions.

I﻿MAGE

#### Annotation

Highlight data points, data outliers, and any noteworthy content.

I﻿MAGE

#### Best-practices

<docs-grid columns="2">
  <div>

I﻿MAGE

<docs-do>

Use categorical colors when there are multiple data points to compare unless highlighting an area of focus. See *Areas of focus* section for more details.

</docs-do>
  </div>
  <div>

I﻿MAGE

<docs-do-not>

Use more than four lines

</docs-do-not>
  </div>
  
</docs-grid>
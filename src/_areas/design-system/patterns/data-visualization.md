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

- - -

## Principles

The data visualization process always begins with a set of data, a question, and an analysis of the data to find the answer. Each visualization should focus on answering a single question about the dataset. For example, “What are my sales over time?”

Data visualizations should be approached by:

<docs-spacer size="small"></docs-spacer>

### Solving a problem

Have a clear question that needs to be answered. If multiple answers to multiple questions are illustrated in a single visualization, it will become over complicated and hard to understand. If one graph is too complex to represent a certain dataset, the data should be represented in multiple, simple graphs.

<docs-spacer size="small"></docs-spacer>

### Simplicity

Keep the visual elements as simple as possible. Only necessary information such as labels, values, and bars or lines should be present. A key or legend should be provided for more complex data that may have multiple colors or types of information. Colors and other visual elements should always be kept to a minimum when possible.

<docs-spacer size="small"></docs-spacer>

### Designing with real data

Designing with real data will reveal the effectiveness of the visualization. Also test when there are a few data points (one or two) or many data points (100 or more). Adapt data visualizations for different device sizes, while anticipating user needs on data depth and complexity

- - -

## Types

The following are the basic types of data visualizations. For detailed documentation on Data visualization, view the `Data visualization design specs.`

Booster supports`vertical column`, `line`, `vertical bar`, `display`, `pie`, `donut`and `heatmap`charts.

When choosing a chart type, consider your data set and what you want to convey about the data.

<docs-spacer size="small"></docs-spacer>

### Changes over time

A change over time, comparisons, and trends, consider a line or vertical column chart.

Common use cases include:

* Quote volume in the past 90 days
* Sales closed per agent

<docs-grid columns="2">
  <div>

Line

![line chart](/images/line-chart.svg "line chart")

</docs-do>
  </div>
  <div>

Bar

![Bar chart](/images/bar-chart.svg "Bar chart")

</docs-do-not>
  </div>
  
</docs-grid>

<docs-spacer size="small"></docs-spacer>

### Category & ranking comparison

A comparison between distinct categories, consider a horizontal bar or horizontal grouped bar chart.

Common use cases include:

* Quote volume by office
* Top-selling products

<docs-grid columns="2">

<div>

B﻿ar

![Bar chart](/images/bar-chart.svg "Bar chart")

</div>

<div>

G﻿rouped bar

![G﻿rouped bar chart](/images/grouped-bar-chart.svg "G﻿rouped bar chart")

</div>

</docs-grid>

<docs-spacer size="small"></docs-spacer>

### Part to whole

A comparison of proportions of a whole or how partial elements add to a total, consider a donut, pie or stacked chart.

Common use cases include:

* Bridged to bound quotes

<docs-grid columns="2">
  <div>

Donut

![Donut chart](/images/donut.svg "Donut chart")

</docs-do>
  </div>
  <div>

Pie

![Pie chart](/images/pie.svg "Pie chart")

S﻿tacked bar

![Stacked bar chart](/images/stacked-bar.svg "Stacked bar chart")

</docs-do-not>
  </div>
  
</docs-grid>

<docs-spacer size="small"></docs-spacer>

### Display

A quantifiable measure that is used to track and display the status of a specific process. Examples include a sum, an average, or a movement in a positive or negative direction, consider a display metric.

Common use cases include:

* Total quote volume

<docs-grid columns="2">
  <div>

Display

![Display](/images/display.svg "Display")

</docs-do>
  </div>
  
</docs-grid>

<docs-spacer size="small"></docs-spacer>

### Spatial

A visualization to quickly understand data across both space and time on a geographic region, consider a heatmap

Common use cases include:

* Geographical: Quote volume by zip code

<docs-grid columns="2">
  <div>

Heatmap

![Heatmap](/images/heatmap.svg "Heatmap")

</docs-do>
  </div>
  
</docs-grid>

- - -

## Layout & structure

Putting all of the components together in the right layout is essential for a user to digest and analyze the data efficiently. This includes:

1. **Title:** A clear, actionable title that will help users understand what exactly they looking at. Example: Quote volume by office - Top 10.
2. **Data visual:** Consider your data set and what you want to convey about the data when selecting a data visual.
3. **Axis:** Most charts should have at least 1 axis line which should be used as a guideline yet be unobtrusive (optional)
4. **Axis labels:** Axis lines should be labeled for clarity.
5. **Controls** (optional): Charts can have various controls. Example: Favorite, Expand, filter
6. **Annotation** (optional): Highlights data points and data outliers.

![Layout and structure](/images/layout-and-structure.svg "Layout and structure")

<docs-spacer size="small"></docs-spacer>

1. **Subtitle** (optional): Provides context for the title.
2. **Legend** (optional): Some chart elements may need more context with labels.

![Layout and structure](/images/layout-and-structure-2.svg "Layout and structure")

For detailed documentation on Data visualization, view the `Data visualization design specs`.

- - -

## Line charts

Line charts are used to show change over time, comparisons, and trends. Use line charts when the number of data points is more than 30. For detailed documentation on line charts, view the `Data visualization design specs`.

I﻿MAGE

<docs-spacer size="small"></docs-spacer>

### Legend

Be sure to include a categorical color legend if comparing more than one data point. Sometimes direct labeling can be used if data is less dense. On desktop, a legend should be positioned below a chart. On mobile, place the legend above the chart to keep it visible during interactions.

![line chart legend](/images/line-chart-legend.svg "line chart legend")

<docs-spacer size="small"></docs-spacer>

### Annotation

By hovering over data points, we emphasize key data points, data outliers, and any noteworthy content, allowing for quick access to valuable insights.

![line chart annotation](/images/line-chart-annotation.svg "line chart annotation")

<docs-spacer size="small"></docs-spacer>

### Use categorical colors and line style

Each line should have a unique color and line style. Limit the number of colors and line styles (dimension values) to no more than 4. Review `Color for data visualization` for more about choosing colors for line charts. 

![line chart color](/images/line-chart-color.svg "line chart color")

<docs-spacer size="small"></docs-spacer>

The lines should be applied in sequence strictly as described below. The sequence is carefully curated to maximize contrast between neighboring lines to help with visual differentiation.

![line chart color sequence](/images/line-chart-color-sequence.svg "line chart color sequence")

<docs-spacer size="small"></docs-spacer>

### Best-practices

<docs-grid columns="2">
  <div>

![line chart do](/images/line-chart-do.svg "line chart do")

<docs-do>

Use categorical colors when there are multiple data points to compare unless highlighting an area of focus. See *Areas of focus* section for more details.

</docs-do>
  </div>
  <div>

![line chart don't](/images/line-chart-dont.svg "line chart don't")

<docs-do-not>

Use more than four lines

</docs-do-not>
  </div>
  
</docs-grid>

- - -

## Bar charts

Line charts are used to compare different values that are hierarchically equivalent. In bar graphs each variable should consistently be represented using one color. Multiple colors can be used if there is more than one variable, but each variable has its own color. For detailed documentation on bar charts, view the `Data visualization design specs`.

### Vertical column charts

Vertical column charts are used to show change over time, trends, and individual data points. Use column charts for when the number of data points is fewer than 30, or else use a line chart.

![vertical bar chart](/images/bar-chart-vertical.svg "vertical bar chart")

<docs-spacer size="small"></docs-spacer>

### Horizontal bar charts

Vertical column charts are used to show change over time, trends, and individual data points. Use column charts when the number of data points is fewer than 30, or else use a line chart.

![vertical bar chart](/images/bar-chart-horizontal.svg "vertical bar chart")

<docs-spacer size="small"></docs-spacer>

### Stacked bar charts

Stacked bar charts use color to show an additional dimension. To do this, each bar is split into a set of dimension items, distinguished by color, while maintaining the total bar height. Review `Color for data visualization` for more about choosing colors for stacked bar charts.

![stacked bar chart](/images/stacked-bar-chart.svg "stacked bar chart")

<docs-spacer size="small"></docs-spacer>

### Annotation

By hovering over data points, we emphasize key data points, data outliers, and any noteworthy content, allowing for quick access to valuable insights.

![bar chart annotation](/images/bar-chart-annotation.svg "bar chart annotation")

<docs-spacer size="small"></docs-spacer>

### Best-practices

<docs-grid columns="2">
  <div>

![bar chart do](/images/bar-chart-do.svg "bar chart do")

<docs-do>

Use one color for the bars

</docs-do>
  </div>
  <div>

![bar chart don't](/images/bar-chart-dont.svg "bar chart don't")

<docs-do-not>

Use more than one color for the bars

</docs-do-not>
  </div>
  
</docs-grid>

<docs-grid columns="2">
  <div>

![bar chart do](/images/bar-chart-do-–-2.svg "bar chart do")

<docs-do>

Make the width of each bar about twice as wide as the space between them.

</docs-do>
  </div>
  <div>

![bar chart don't](/images/bar-chart-dont-–-2.svg "bar chart don't")

<docs-do-not>

Make the bars too skinny

</docs-do-not>
  </div>
  
</docs-grid>

- - -

## **Donut and pie charts**

Donut and pie charts express portions of a whole, using arcs or angles within a circle Use donut and pie charts for showing partial elements that add up to a total. They can become difficult to understand when they include many segments. Try to use 2-3 segments if possible, and no more than 5. For detailed documentation on donut and pie charts, view the `Data visualization design specs`.

![donut chart](/images/donut-chart.svg "donut chart")

<docs-spacer size="small"></docs-spacer>

### Legend

Be sure to include a categorical color legend. Sometimes direct labeling can be used if data is less dense. A legend should be positioned to the right of a donut chart, but if there is not enough horizontal space, it can be placed below the chart.

![donut chart](/images/donut-chart-–-legend.svg "donut chart")

<docs-spacer size="small"></docs-spacer>

### Annotation

By hovering over data points, we emphasize key data points, data outliers, and any noteworthy content, allowing for quick access to valuable insights.

![donut chart annotation](/images/donut-chart-–-annotation.svg "donut chart annotation")

<docs-spacer size="small"></docs-spacer>

### Best-practices

<docs-grid columns="2">
  <div>

![Donut chart do](/images/donut-chart-do.svg "Donut chart do")

<docs-do>

Use categorical colors for each segment. Review `Color for data visualization` for more about choosing colors for donut charts.

</docs-do>
  </div>
  <div>

![Donut chart don't](/images/donut-chart-don-t.svg "Donut chart don't")

<docs-do-not>

Use the same color shade for each segment unless highlighting an area of focus.

</docs-do-not>
  </div>
  
</docs-grid>

<docs-grid columns="2">
  <div>

![Donut chart do](/images/donut-chart-do.svg "Donut chart do")

<docs-do>

Use 2-3 segments if possible. Donut charts become difficult to understand they include many segments.

</docs-do>
  </div>
  <div>

![Donut chart don't](/images/donut-chart-don-t-–-2.svg "Donut chart don't")

<docs-do-not>

Use more than 5 segments.

</docs-do-not>
  </div>
  
</docs-grid>

- - -

## **Display metrics**

Display metrics are used to show a single value with a base unit. Metrics should be scoped to indicate the timeline of the data. Consider including a comparison indicator such as a comparison to the previous time or average. For detailed documentation on display metrics, view the `Data visualization design specs`.

![Donut chart don't](/images/display-metrics.svg "Donut chart don't")

<docs-spacer size="small"></docs-spacer>

### Movement

Display metrics are usually combined with other visual elements for clearer communication. These can include bar charts, line charts, icons, and deltas.

![Donut chart don't](/images/display-metrics-–-movement.svg "Donut chart don't")

- - -

## **Heatmap**

Heatmaps associate a color to a value over a geographic region rather than a strict grid such as a heatmap. Metrics should be scoped to indicate the timeline of the data. Consider including a comparison indicator such as a comparison to the previous time or average. For detailed documentation on heatmap charts, view the `Data visualization design specs`.

![Donut chart don't](/images/heatmap-2.svg "Donut chart don't")

- - -

## **Dashboards**

In addition to choosing the right chart type, it's important to consider the layout of your dashboard. Dashboards can better help communicate a story rather than one complex chart. Dashboards are a collection of multiple separate charts on a screen. For detailed documentation on dashboards, view the `Data visualization design specs`.

![dashboard](/images/dashboard.svg "dashboard")

<docs-spacer size="small"></docs-spacer>

### Designing a dashboard

A dashboard's purpose should be reflected in its layout. The design of the dashboard should suit how it will be used, whether it's a tool for deeply exploring data or answering predefined questions. The layout plays a critical role in conveying information effectively. To ensure that users can quickly grasp the key insights while still having access to supporting data, follow these best practices for arranging your dashboard elements:

1. **Emphasized data:** The dashboard layout should emphasize critical information by positioning charts with significant relevance at the top. This could encompass attention-worthy elements or provide a summarized overview.
2. **Supporting Data:** The subsequent layer can incorporate deeper insights and underlying factors that substantiate the emphasized data.
3. **Supplementary Data:** The final layer may encompass more specific data that provides additional reinforcement for the information presented at the top.

![dashboard](/images/dashboard-layout.svg "dashboard")

<docs-spacer size="small"></docs-spacer>

Here are some best practices for creating effective data visualization layouts:

* **Group related charts together:** Place charts that are related or have a similar purpose close to each other.
* **Use hierarchy to portray significance:** Place charts with high importance but less specificity towards the top and charts with less importance but more specificity towards bottom.
* **Use consistent colors and typography:** Use the design system's color and typography guidelines to ensure consistency and readability.
* **Consider the user's workflow:** Design the layout to match the user's workflow and the tasks they need to accomplish.
* **Provide context:** Provide additional context or explanations for complex data points, so that users can understand the meaning behind the data.

- - -

## **Behavior**

### Drilling down

Drilling down into information means allowing users to interact and explore the data in more detail. For detailed documentation on drilling down, view the `Data visualization design specs`.

I﻿MAGE

Here are some best practices for implementing drilling down:

1. **Keep it simple:** Don't overwhelm the user with too many options or levels of detail.
2. **Provide context:** Make sure the user understands where they are and what they are looking at before offering the option to drill down.
3. **Use breadcrumbs:** Provide a clear path for the user to follow back to the original view.
4. **Offer clear labels and descriptions:** Use descriptive labels and tooltips to help the user understand what they are looking at.

<docs-spacer size="small"></docs-spacer>

### Filtering

The placement of the filters on the dashboard depends on the specific use case and the number of charts on the page.

The decision on where to place the filters should be based on the needs and preferences of the users, as well as the overall design and layout of the dashboard. The goal is to make the filters easily accessible and intuitive to use, so users can quickly adjust them and get the insights they need. For detailed documentation on filtering, view the `Data visualization design specs`.

#### Global filters

Global filters allow users to adjust the filters for all charts at once. They should appear at the top of the page.

IMAGE

#### **Individual chart filters**

Individual chart filters allow users to adjust the filters for a specific chart without affecting the others.

IMAGE

- - -

## **Color for data visualizations**

The color palettes for data visualizations are based on accessibility guidelines to ensure that all users, including those with color blindness or visual impairments, can perceive the presented information. Appropriate use of color for data visualization allows interrelationships and patterns within data to be easily observed. 

When choosing a color palette, consider your data set and what you want to convey about the data.

<docs-spacer size="small"></docs-spacer>

### Qualitative color palette

A qualitative palette is used when the variable is categorical in nature. Examples include country or state, race, and gender. Each possible value of the variable is assigned one color from a qualitative palette.

I﻿MAGE

### Sequential color palette

A sequential color palette is used when the variable is numeric or ordered values. Colors are assigned to data values in a continuum, usually based on lightness, hue, or both.

I﻿MAGE

### Binary color palette

A binary color palette is used when the variable is a comparison of two categories. A common use case is to show hierarchy. The primary difference between the two categories of a binary scheme may be lightness.

I﻿MAGE

<docs-spacer size="small"></docs-spacer>

### Qualitative color palette

A qualitative palette is used when the variable is categorical in nature. Examples include country or state, race, and gender. Each possible value of the variable is assigned one color from a qualitative palette.

I﻿MAGE EXAMPLE

The colors of this palette should be applied in sequence strictly as described below. The sequence is carefully curated to maximize contrast between neighboring colors to help with visual differentiation.

IMAGE COLOR SELECTION ORDER

To ensure accessibility, line charts should utilize darker shades of color. The colors of this palette should be applied in sequence strictly as described below. The sequence is carefully curated to maximize contrast between neighboring colors to help with visual differentiation.

IMAGE COLOR SELECTION ORDER

<docs-spacer size="small"></docs-spacer>

### Sequential color palette

A sequential color palette is used when the variable is numeric or ordered values. Colors are assigned to data values in a continuum, usually based on lightness, hue, or both.

I﻿MAGE OF COLOR RANGE

The most prominent dimension of color for a sequential palette is its lightness. Typically, lower values are associated with lighter colors, and higher values with darker colors.

IMAGE EXAMPLE

<docs-spacer size="small"></docs-spacer>

### Binary color palette

A binary color palette shows differences that are divided into only two categories. The primary difference between the two categories of a binary scheme may be a lightness.

I﻿MAGE OF COLOR RANGE

A common use case for a binary color palette is to convey hierarchy. The contrast puts emphasis on an area of focus, when it is used sparingly.

IMAGE EXAMPLE

- - -

## **Alternate considerations**

* Use a `table` when multiple metrics and categories need to be presented together, and an accurate lookup of the data values is more important than showing patterns in the data.
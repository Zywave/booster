---
layout: documentation
title: Data visualization
subtitle: Data visualizations represent information in graphical form to tell a
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

<!--StartFragment-->

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; text-align: center;"> 

<div> <h3>Solving a problem</h3> <p>Have a clear question that needs to be answered. If multiple answers to multiple questions are illustrated in a single visualization, it will become over-complicated and hard to understand. If one graph is too complex to represent a certain dataset, the data should be represented in multiple, simple graphs.</p> </div> <div>

<h3>Simplicity</h3> <p>Ensure visual elements are kept as simple as possible by including only necessary information, such as labels, values, pertinent bars or lines, and a key for complex data. Colors and other visual elements should always be kept to a minimum when possible, by avoiding distracting embellishments, such as excessive gradients, shadows, and patterns that could divert attention from the data.</p> </div> <div> 

<h3>Designing with real data</h3> <p>Designing with real data will reveal the effectiveness of the visualization. Also test when there are a few data points (one or two) or many data points (100 or more). Adapt data visualizations for different device sizes, while anticipating user needs on data depth and complexity</p> </div>

</div>

- - -

## Types

The following are the basic types of data visualizations. For detailed documentation on Data visualization, view [design specs](https://xd.adobe.com/view/41b99309-6276-4988-95d6-adbff614ab54-14ea/grid)

Booster supports column, line, bar, display, pie, donut, and heatmap charts. When choosing a chart type, consider your data set and what you want to convey about the data.

<docs-spacer size="small"></docs-spacer>

### Changes over time

A change over time, comparisons, and trends, consider a line or vertical column chart.

Common use cases include:

* Quote volume in the past 90 days
* Sales closed per agent

<docs-grid columns="3">
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

<docs-grid columns="3">

<div>

#### B﻿ar

![Bar chart](/images/bar-chart.svg "Bar chart")

</div>

<div>

#### G﻿rouped bar

![G﻿rouped bar chart](/images/grouped-bar-chart.svg "G﻿rouped bar chart")

</div>

</docs-grid>

<docs-spacer size="small"></docs-spacer>

### Part to whole

A comparison of proportions of a whole or how partial elements add to a total, consider a donut, pie or stacked chart.

Common use cases include:

* Bridged to bound quotes

<docs-grid columns="3">
  <div>

#### Donut

![Pie chart](/images/donut.svg "Pie chart")

</div>

<﻿div>

#### Pie

![Pie chart](/images/pie.svg "Pie chart")

<﻿/div>

<﻿div>

#### S﻿tacked bar

![Stacked bar chart](/images/stacked-bar.svg "Stacked bar chart")

  </div>
  
</docs-grid>

<docs-spacer size="small"></docs-spacer>

### Display

A quantifiable measure that is used to track and display the status of a specific process. Examples include a sum, an average, or a movement in a positive or negative direction, consider a display metric.

Common use cases include:

* Total quote volume

<docs-grid columns="3">
  <div>

#### Display

![Display](/images/display.svg "Display")

  </div>
  
</docs-grid>

<docs-spacer size="small"></docs-spacer>

### Spatial

A visualization to quickly understand data across both space and time on a geographic region, consider a heatmap

Common use cases include:

* Geographical: Quote volume by zip code

<docs-grid columns="2">
  <div>

#### Heatmap

![Heatmap](/images/heatmap.svg "Heatmap")

</docs-do>
  </div>
  
</docs-grid>

- - -

## Layout & structure

Putting all of the components together in the right layout is essential for a user to digest and analyze the data efficiently. This includes:

1. **Title:** A clear, actionable title that will help users understand what exactly they looking at. Example: Quote volume by office - Top 10.
2. **Data visual:** Consider your data set and what you want to convey about the data when selecting a data visual.
3. **Axis:** Most charts should have at least 1 axis line which should be used as a guideline yet be unobtrusive
4. **Axis labels:** Axis lines should be labeled for clarity.
5. **Controls** (optional): Charts can have various controls. Example: Favorite, Expand, filter
6. **Annotation** (optional): Highlights data points and data outliers.

![Layout and structure](/images/layout-and-structure.svg "Layout and structure")

<docs-spacer size="small"></docs-spacer>

1. **Subtitle** (optional): Provides context for the title.
2. **Legend** (optional): Some chart elements may need more context with labels.

![Layout and structure](/images/layout-and-structure-2.svg "Layout and structure")

For detailed documentation on Data visualization, view the [design specs](https://xd.adobe.com/view/41b99309-6276-4988-95d6-adbff614ab54-14ea/grid).

- - -

## Line charts

Line charts are used to show change over time, comparisons, and trends. Use line charts when the number of data points is more than 30. For detailed documentation on line charts, view the [design specs](https://xd.adobe.com/view/41b99309-6276-4988-95d6-adbff614ab54-14ea/screen/f1673b11-60f4-4df4-8c08-97bc2b8e6afa)

![line chart](/images/line-chart-example.svg "line chart")

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

Each line should have a unique color and line style. Limit the number of colors and line styles (dimension values) to no more than 4. Review [Color for data visualizations](/design-system/patterns/data-visualization/#color-for-data-visualizations) for more about choosing colors for line charts. 

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

Line charts are used to compare different values that are hierarchically equivalent. In bar graphs each variable should consistently be represented using one color. Multiple colors can be used if there is more than one variable, but each variable has its own color. For detailed documentation on bar charts, view the [design specs](https://xd.adobe.com/view/41b99309-6276-4988-95d6-adbff614ab54-14ea/screen/c37cbe44-7c30-45dd-a9c1-00856f5a11f4).

### Vertical column charts

Vertical column charts are used to show change over time, trends, and individual data points. Use column charts for when the number of data points is fewer than 30, or else use a line chart.

![vertical bar chart](/images/bar-chart-vertical.svg "vertical bar chart")

<docs-spacer size="small"></docs-spacer>

### Horizontal bar charts

Vertical column charts are used to show change over time, trends, and individual data points. Use column charts when the number of data points is fewer than 30, or else use a line chart.

![vertical bar chart](/images/bar-chart-horizontal.svg "vertical bar chart")

<docs-spacer size="small"></docs-spacer>

### Stacked bar charts

Stacked bar charts use color to show an additional dimension. To do this, each bar is split into a set of dimension items, distinguished by color, while maintaining the total bar height. Review [Color for data visualizations](/design-system/patterns/data-visualization/#color-for-data-visualizations) for more about choosing colors for stacked bar charts.

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

Donut and pie charts express portions of a whole, using arcs or angles within a circle. Use donut and pie charts to show partial elements that add up to a total. They can become difficult to understand when they include many segments. Try to use 2-3 segments, if possible, and no more than 5. For detailed documentation on donut and pie charts, view the [design specs](https://xd.adobe.com/view/41b99309-6276-4988-95d6-adbff614ab54-14ea/screen/d10cf3ba-efd1-44ba-82c6-a12493587d4d).

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

Use categorical colors for each segment. Review [Color for data visualizations](/design-system/patterns/data-visualization/#color-for-data-visualizations) for more about choosing colors for donut charts.

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

Display metrics are used to show a single value with a base unit. Metrics should be scoped to indicate the timeline of the data. Consider including a comparison indicator such as a comparison to the previous time or average. For detailed documentation on display metrics, view the [design specs](https://xd.adobe.com/view/41b99309-6276-4988-95d6-adbff614ab54-14ea/screen/98047e81-20a1-4899-b147-26da4210e802).

![Donut chart don't](/images/display-metrics.svg "Donut chart don't")

<docs-spacer size="small"></docs-spacer>

### Movement

Display metrics are usually combined with other visual elements for clearer communication. These can include bar charts, line charts, icons, and deltas.

![Donut chart don't](/images/display-metrics-–-movement.svg "Donut chart don't")

- - -

## **Heatmap**

Heatmaps associate a color with a value over a geographic region rather than a strict grid such as a heatmap. Metrics should be scoped to indicate the timeline of the data. Consider including a comparison indicator such as a comparison to the previous time or average.

![Donut chart don't](/images/heatmap-2.svg "Donut chart don't")

- - -

## **Dashboards**

In addition to choosing the right chart type, it's important to consider the layout of your dashboard. Dashboards can better help communicate a story rather than one complex chart. Dashboards are a collection of multiple separate charts on a screen. For detailed documentation on dashboards, view the [design specs](https://xd.adobe.com/view/41b99309-6276-4988-95d6-adbff614ab54-14ea/screen/8e52046c-7e3c-432d-a9ff-7d6447e9ec93).

![dashboard](/images/dashboard.svg "dashboard")

<docs-spacer size="small"></docs-spacer>

### Designing a dashboard

A dashboard's purpose should be reflected in its layout. The design of the dashboard should suit how it will be used, whether it's a tool for deeply exploring data or answering predefined questions. The layout plays a critical role in conveying information effectively. To ensure that users can quickly grasp the key insights while still having access to supporting data, follow these best practices for arranging your dashboard elements:

1. **Emphasized data / less specific:** The dashboard layout should emphasize critical information by positioning charts with significant relevance at the top. This could encompass attention-worthy elements or provide a summarized overview.
2. **Supporting Data / more specific:** The subsequent layer can incorporate deeper insights and underlying factors that substantiate the emphasized data.
3. **Supplementary Data / most specific:** The final layer may encompass more specific data that provides additional reinforcement for the information presented at the top.

![dashboard](/images/dashboard-layout.svg "dashboard")

<docs-spacer size="small"></docs-spacer>

Here are some best practices for creating effective data visualization layouts:

* **Group related charts together:** Place charts that are related or have a similar purpose close to each other.
* **Use hierarchy to portray significance:** Place charts with high importance but less specificity towards the top and charts with less importance but more specificity towards the bottom.
* **Use consistent colors and typography:** Use the design system's color and typography guidelines to ensure consistency and readability.
* **Consider the user's workflow:** Design the layout to match the user's workflow and the tasks they need to accomplish.
* **Provide context:** Provide additional context or explanations for complex data points, so that users can understand the meaning behind the data.

- - -

## **Behavior**

### Drilling down

Drilling down into information means allowing users to interact and explore the data in more detail. Users gain a deeper understanding of specific data points, enabling them to make more informed decisions and identify trends that may not be immediately apparent at a higher level.

The drilling down process initiates when a user clicks on a specific data point in a chart, triggering a seamless transition to a dedicated page with expanded insights. By isolating specific data points, users can perform detailed analysis without distraction, ensuring a thorough examination of the selected metric.

![drill down chart](/images/drill-down.svg "drill down chart")

Upon clicking a data point, users are seamlessly directed to a new page exclusively focused on presenting comprehensive information related to their selection. This dedicated page offers a concentrated view of the data point's context, contributing factors, and any relevant metrics.

![drill down page](/images/drill-down-2.svg "drill down page")

Here are some best practices for implementing drilling down:

* **Keep it simple:** Don't overwhelm the user with too many options or levels of detail.
* **Provide context:** Make sure the user understands where they are and what they are looking at before offering the option to drill down.
* **Use breadcrumbs:** Provide a clear path for the user to follow back to the original view.
* **Offer clear labels and descriptions:** Use descriptive labels and tooltips to help the user understand what they are looking at.

<docs-spacer size="small"></docs-spacer>

### Filtering

The placement of the filters on the dashboard depends on the specific use case and the number of charts on the page.

The decision on where to place the filters should be based on the needs and preferences of the users, as well as the overall design and layout of the dashboard. The goal is to make the filters easily accessible and intuitive to use, so users can quickly adjust them and get the insights they need. For detailed documentation on filtering, view the [design specs](https://xd.adobe.com/view/41b99309-6276-4988-95d6-adbff614ab54-14ea/screen/884f30d3-baca-4467-82dc-0d6835172155).

#### Global filters

Global filters allow users to adjust the filters for all charts at once. They should appear at the top of the page.

![global filter](/images/global-filter.svg "global filter")

#### **Individual chart filters**

Individual chart filters allow users to adjust the filters for a specific chart without affecting the others.

![individual filter](/images/individual-filter.svg "individual filter")

- - -

## **Color for data visualizations**

The color palettes for data visualizations are based on accessibility guidelines to ensure that all users, including those with color blindness or visual impairments, can perceive the presented information. Appropriate use of color for data visualization allows interrelationships and patterns within data to be easily observed. 

When choosing a color palette, consider your data set and what you want to convey about the data.

### Qualitative color palette

A qualitative palette is used when the variable is categorical in nature. Examples include country or state, race, and gender. Each possible value of the variable is assigned one color from a qualitative palette.

<div style="display: flex; justify-content"> 

<div style="width: 40px; height: 40px; background-color: #30BBB1; margin-right: 2px;"></div> 

<div style="width: 40px; height: 40px; background-color: #97C964; margin-right: 2px;"></div> 

<div style="width: 40px; height: 40px; background-color: #FBAC0E; margin-right: 2px;"></div> 

<div style="width: 40px; height: 40px; background-color: #F36F12; margin-right: 2px;"></div> 

<div style="width: 40px; height: 40px; background-color: #D93911; margin-right: 2px;"></div> 

<div style="width: 40px; height: 40px; background-color: #C6318C; margin-right: 2px;"></div> 

<div style="width: 40px; height: 40px; background-color: #6F48B0;"></div> 

</div>

<docs-spacer size="small"></docs-spacer>

### Sequential color palette

A sequential color palette is used when the variable is numeric or ordered values. Colors are assigned to data values in a continuum, usually based on lightness, hue, or both.

<div style="display: flex; justify-content"> 

<div style="width: 40px; height: 40px; background-color: #E8FFFF; margin-right: 2px;"></div> 

<div style="width: 40px; height: 40px; background-color:#9DEDEA; margin-right: 2px;"></div> 

<div style="width: 40px; height: 40px; background-color: #5FD9D1; margin-right: 2px;"></div> 

<div style="width: 40px; height: 40px; background-color: #30BBB1; margin-right: 2px;"></div> 

<div style="width: 40px; height: 40px; background-color: #1B8880; margin-right: 2px;"></div> 

<div style="width: 40px; height: 40px; background-color: #116F69; margin-right: 2px;"></div> 

</div>

<docs-spacer size="small"></docs-spacer>

### Binary color palette

A binary color palette is used when the variable is a comparison of two categories. A common use case is to show hierarchy. The primary difference between the two categories of a binary scheme may be lightness.

<div style="display: flex; justify-content"> 

<div style="width: 40px; height: 40px; background-color: #E6E6EA; margin-right: 2px;"></div> 

<div style="width: 40px; height: 40px; background-color: #30BBB1; margin-right: 2px;"></div> 

</div>

<docs-spacer size="small"></docs-spacer>

### Qualitative color palette

A qualitative palette is used when the variable is categorical in nature. Examples include country or state, race, and gender. Each possible value of the variable is assigned one color from a qualitative palette.

![individual filter](/images/stacked-bar-color-palette.svg "individual filter")

The colors of this palette should be applied in sequence strictly as described below. The sequence is carefully curated to maximize contrast between neighboring colors to help with visual differentiation.

<div style="display: flex; flex-direction: column;"> <div style="display: flex; justify-content: space-between;"> <span>1</span>

<span>2</span>

<span>3</span>

<span>4</span>

<span>5</span>

<span>6</span>

<span>7</span> 

</div> 

<div style="display: flex; justify-content: space-between; margin-top: 5px;"> 

<div style="width: 60px; height: 60px; background-color: #30BBB1; border-radius: 50%; display: flex; justify-content: center; align-items: center;"> <span style="color: white;">#30BBB1</span> </div> 

<div style="width: 60px; height: 60px; background-color: #97C964; border-radius: 50%; display: flex; justify-content: center; align-items: center;"> <span style="color: white;">#97C964</span> </div> 

<div style="width: 60px; height: 60px; background-color: #FBAC0E; border-radius: 50%; display: flex; justify-content: center; align-items: center;"> <span style="color: white;">#FBAC0E</span> </div> 

<div style="width: 60px; height: 60px; background-color: #F36F12; border-radius: 50%; display: flex; justify-content: center; align-items: center;"> <span style="color: white;">#F36F12</span> </div> 

<div style="width: 60px; height: 60px; background-color: #D93911; border-radius: 50%; display: flex; justify-content: center; align-items: center;"> <span style="color: white;">#D93911</span> </div> 

<div style="width: 60px; height: 60px; background-color: #C6318C; border-radius: 50%; display: flex; justify-content: center; align-items: center;"> <span style="color: white;">#C6318C</span> </div> 

<div style="width: 60px; height: 60px; background-color: #6F48B0; border-radius: 50%; display: flex; justify-content: center; align-items: center;"> <span style="color: white;">#6F48B0</span> </div> 

</div> </div>

<docs-spacer size="small"></docs-spacer>

To ensure accessibility, line charts should utilize darker shades of color. The colors of this palette should be applied in sequence strictly as described below. The sequence is carefully curated to maximize contrast between neighboring colors to help with visual differentiation.

<div style="display: flex; flex-direction: column;"> <div style="display: flex; justify-content: space-between;"> <span>1</span>

<span>2</span>

<span>3</span>

<span>4</span>

<span>5</span>

<span>6</span>

<span>7</span> 

</div> 

<div style="display: flex; justify-content: space-between; margin-top: 5px;"> 

<div style="width: 60px; height: 60px; background-color: #2AA29A; border-radius: 50%; display: flex; justify-content: center; align-items: center;"> <span style="color: white;">#2AA29A</span> </div>

<div style="width: 60px; height: 60px; background-color: #6EA239; border-radius: 50%; display: flex; justify-content: center; align-items: center;"> <span style="color: white;">#6EA239</span> </div>

<div style="width: 60px; height: 60px; background-color: #C48402; border-radius: 50%; display: flex; justify-content: center; align-items: center;"> <span style="color: white;">#C48402</span> </div> 

<div style="width: 60px; height: 60px; background-color: #CF5C0A; border-radius: 50%; display: flex; justify-content: center; align-items: center;"> <span style="color: white;">#CF5C0A</span> </div> 

<div style="width: 60px; height: 60px; background-color: #CC3610; border-radius: 50%; display: flex; justify-content: center; align-items: center;"> <span style="color: white;">#CC3610</span> </div> 

<div style="width: 60px; height: 60px; background-color: #C6318C; border-radius: 50%; display: flex; justify-content: center; align-items: center;"> <span style="color: white;">#C6318C</span> </div>

<div style="width: 60px; height: 60px; background-color: #6F48B0; border-radius: 50%; display: flex; justify-content: center; align-items: center;"> <span style="color: white;">#6F48B0</span> </div> 

</div> </div>

<docs-spacer size="small"></docs-spacer>

![line chart color palette](/images/line-chart-color-palette.svg "line chart color palette")

<docs-spacer size="small"></docs-spacer>

### Sequential color palette

A sequential color palette is used when the variable is numeric or ordered values. Colors are assigned to data values in a continuum, usually based on lightness, hue, or both.

<div style="display: flex; flex-direction: column;"> <div style="display: flex; justify-content: space-between;"> <span>1</span>

<span>2</span>

<span>3</span>

<span>4</span>

<span>5</span>

<span>6</span>

</div> 

<div style="display: flex; justify-content: space-between; margin-top: 5px;"> 

<div style="width: 60px; height: 60px; background-color: #E8FFFF; border-radius: 50%; display: flex; justify-content: center; align-items: center;"> <span style="color: black;">#E8FFFF</span> </div>

<div style="width: 60px; height: 60px; background-color: #9DEDEA; border-radius: 50%; display: flex; justify-content: center; align-items: center;"> <span style="color: black;">#9DEDEA</span> </div>

<div style="width: 60px; height: 60px; background-color: #5FD9D1; border-radius: 50%; display: flex; justify-content: center; align-items: center;"> <span style="color: black;">#5FD9D1</span> </div>

<div style="width: 60px; height: 60px; background-color: #30BBB1; border-radius: 50%; display: flex; justify-content: center; align-items: center;"> <span style="color: white;">#30BBB1</span> </div>

<div style="width: 60px; height: 60px; background-color: #1B8880; border-radius: 50%; display: flex; justify-content: center; align-items: center;"> <span style="color: white;">#1B8880</span> </div> 

<div style="width: 60px; height: 60px; background-color: #116F69; border-radius: 50%; display: flex; justify-content: center; align-items: center;"> <span style="color: white;">#116F69</span> </div>

</div> </div>

<docs-spacer size="small"></docs-spacer>

The most prominent dimension of color for a sequential palette is its lightness. Typically, lower values are associated with lighter colors, and higher values with darker colors.

![heatmap color palette](/images/heatmap-color-palette.svg "heatmap color palette")

<docs-spacer size="small"></docs-spacer>

### Binary color palette

A binary color palette shows differences that are divided into only two categories. The primary difference between the two categories of a binary scheme may be a lightness.

<div style="display: flex; flex-direction: column;"> <div style="display: flex; justify-content: space-between;"> <span>1</span>

<span>2</span>

</div> 

<div style="display: flex; justify-content: space-between; margin-top: 5px;"> 

<div style="width: 60px; height: 60px; background-color: #30BBB1; border-radius: 50%; display: flex; justify-content: center; align-items: center;"> <span style="color: white;">#30BBB1</span> </div>

<div style="width: 60px; height: 60px; background-color: #E6E6EA; border-radius: 50%; display: flex; justify-content: center; align-items: center;"> <span style="color: black;">#E6E6EA</span> </div>

</div> </div>

<docs-spacer size="small"></docs-spacer>

A common use case for a binary color palette is to convey hierarchy. The contrast puts emphasis on an area of focus, when it is used sparingly.

![binary color palette](/images/binary-color-palette.svg "binary color palette")

- - -

## **Responsiveness**

Ensuring data visualizations are responsive is crucial for providing a seamless user experience across various devices and screen sizes. Responsive design allows data to be easily accessible and comprehensible, regardless of the user's device. Fluid layouts enable dashboards to adapt to different screen sizes. Elements should resize and reposition dynamically to optimize space.

![responsiveness desktop](/images/responsiveness.svg "binary color palette")

Consider using a more mobile-friendly data visualization format when designing for responsiveness. For example, consider presenting data in a horizontal bar chart rather than a line chart. It’s essentially the same graphic, only the axes are flipped. It still tells the same story, just in a more mobile-friendly vertical format.

![responsiveness desktop](/images/responsiveness-desktop-format.svg "binary color palette")

![responsiveness desktop](/images/responsiveness-desktop-format.svg "binary color palette")

I﻿nstead of a line chart, the mobile view presents users with a horizontal bar chart. It’s essentially the same graphic from the desktop, only the axes are flipped. It still tells visitors the same story, just in a more mobile-friendly vertical format.  

![responsiveness mobile](/images/responsiveness-mobile-format.svg "binary color palette")

- - -

## **Alternate considerations**

* Use a `table` when multiple metrics and categories need to be presented together, and an accurate lookup of the data values is more important than showing patterns in the data.
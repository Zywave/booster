---
title: Breadcrumbs
subtitle: ""
hideToc: false
api: https://cdn.zywave.com/@zywave/zui-breadcrumbs@latest/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-breadcrumbs@latest/docs/demo.html
mainComponentName: zui-breadcrumbs
includedElements: []
---
## What are Breadcrumbs

Breadcrumbs are a secondary form of navigation that helps users understand their current location within the page hierarchy and provides a quick way to navigate back to previous pages. 

<hr>

## Usage

Breadcrumbs provide context of the user's current location and enable efficient backtracking to previous pages without using the browser's back button. 

![Breadcrumb - Default](/images/breadcrumb-default.svg)

<br>

### When to use Breadcrumbs

* On pages with hierarchical navigation of 2 or more levels
* When a user may need more clarity about their current location within the site structure
* When offering quick navigation back to a parent page would improve the user experience
* In complex workflows where a user may need to move between related screens

<hr>

## Anatomy

For a more detailed breakdown of spacing and sizing, [view the design specs.](https://xd.adobe.com/view/cbf87f90-f0db-4b94-b430-55727a71b233-9eab/?hints=off)

![Breadcrumbs - Anatomy](/images/breadcrumb-anatomy.svg)

<br>

Breadcrumbs contain the following elements:

1. **Chevron**: the left chevron icon indicates that the user will be taken back a page
2. **Link**: the title of the previous page as a text link

<hr>

## Layout

![Breadcrumbs - Layout](/images/breadcrumb-layout.svg)

Breadcrumbs alignment:

* Position Breadcrumbs at top left corner of the page, above page titles
* Appear 30px below the Topbar and 20px above the page title;

<hr>

## Best Practices

</docs-spacer>

### Only ﻿use left chevrons

Use only left chevrons as separators.

<docs-grid columns="2">

<div>

![Always use left chevrons in breadcrumbs](/images/breadcrumbs-do-use-left-chevrons.svg)

<docs-do>
Always use left chevrons in breadcrumbs
</docs-do>

</div>

<div>

![Avoid using icons that are not left chevrons, such as forward slash "/", dash "-", and etc.](/images/breadcrumb-avoid-using-items-that-are-not-left-chevrons.svg)

<docs-do-not>
Avoid using icons that are not left chevrons, such as forward slash "/", dash "-", and etc.
</docs-do-not>

</div>

</docs-grid>

<docs-spacer>

</docs-spacer>

<hr>

## Responsive Layout

* Breadcrumbs maintain the same design and positioning on mobile devices
* Breadcrumbs titles truncate after 30 characters with an ellipses

![Breadcrumbs - mobile layout](/images/moble.png)

<hr>
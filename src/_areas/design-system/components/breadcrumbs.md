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

Breadcrumbs are a form of navigation that helps users view and backtrack efficiently through page hierarchies.

<hr>

## Usage

Breadcrumbs provide the user context of what page they came from when they are viewing nested content.

![Breadcrumb - Default](/images/breadcrumb-default.svg)

<br>

### When to use Breadcrumbs

* When there are 2 or more pages in the hierarchy
* When it's beneficial to inform users which page they came from
* To provide a quick and efficient way to navigate back to the previous page

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

* Breadcrumbs on mobile should follow the same pattern and only show the previous page with a chevron to the left.
* Breadcrumbs titles on mobile will truncate after 30 characters with an ellipsis at the end

![Breadcrumbs - mobile layout](/images/moble.png)

<hr>
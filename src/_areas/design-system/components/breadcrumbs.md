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

Breadcrumbs are a form of secondary navigation that helps users view and navigate efficiently through page hierarchies. The Breadcrumb link also allow users to backtrack through deep navigation as far as they need to.

<hr>

## Usage

Breadcrumbs give users context so they don't feel lost, even when they are deep inside large, nested content. 

![Breadcrumb - Default](/images/breadcrumb-default.svg)

<br>

### When to use Breadcrumbs

* When there are 2 or more pages in the hierarchy
* When it's necessary to inform users of where they are
* When users need a quick and efficient way to navigate back to previous pages

<br>

### Why do we use Breadcrumbs

* Quick, efficient, and straightforward navigation within the application
* Fast navigation: one-click access to get to a previous page
* Informs the user of their location in relation to other pages

<hr>

## Anatomy

For a more detailed breakdown of spacing and sizing, [view the design specs.](https://xd.adobe.com/view/cbf87f90-f0db-4b94-b430-55727a71b233-9eab/?hints=off)

![Breadcrumbs - Anatomy](/images/breadcrumb-anatomy.svg)

<br>

Breadcrumbs can contain the following elements:

1. **Separator**: use left chevron as a separator at the beginning of the breadcrumb
2. **Previous page**: the previous page is always the only Breadcrumb, styled as a text link without an underline

<hr>

## S﻿tates

Breadcrumbs follow the guidelines for text links.

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
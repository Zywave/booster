---
title: Breadcrumbs
subtitle: ""
hideToc: false
api: https://cdn.zywave.com/@zywave/zui-breadcrumbs@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-breadcrumbs@next/demo/index.html
mainComponentName: zui-breadcrumbs
includedElements: []
---
## What are Breadcrumbs

Breadcrumbs are a form of secondary navigation that helps users easily see and navigate through page hierarchies. The Breadcrumb links also allow users to backtrack through deep navigation as far as they need to.

<hr>

## Usage

Breadcrumbs give users context so they don't feel lost, even when they are deep inside large, nested content. 

![Breadcrumb example](/images/default.png)

<br>

### When to use Breadcrumbs

* When there are 2 or more pages in the hierarchy
* When it's necessary to inform users of where they are
* When users need a quick and easy way to navigate back to high-level pages

<br>

### Why do we use Breadcrumbs

* Simple, efficient, easy navigation within the application
* Fast navigation: one-click access to get to a higher-level page
* Informs the user of their location in relation to other pages

<hr>

## Anatomy

For a more detailed breakdown of spacing and sizing, [view the design specs.](https://xd.adobe.com/view/a732e0cf-0523-44cb-9c64-cd8162785b7b-f261/grid)

![Breadcrumbs - Anatomy](/images/anatomy.png)

<br>

Breadcrumbs can contain the following elements:

1. **Separator**: use right arrow as a separator (tied to the Breadcrumb to it's left) between pages to imply movement between pages
2. **Item/page**: the section or page title, use the same style as text links without an underline
3. **Current page**: the current page is always the last Breadcrumb, styled as a disabled text link and it is not clickable

<hr>

## Layout

![Breadcrumbs - Layout](/images/spacing.png)

Breadcrumbs alignment:

* Position Breadcrumbs at top left corner of the page, above page titles
* Appear 30px below the Topbar and 20px above the page title;

<hr>

## Types/States

### Default

Default state is the shortest form of a Breadcrumb navigation. It contains the current page with one prior Breadcrumb.

![Breadcrumbs - default](/images/default.png)

<br>

### Long Breadcrumb trail

When there are 5 or more pages in a Breadcrumb trail, we recommend using an ellipsis to hide everything between the first page and the second to last page. Clicking the ellipsis will expand to reveal all the hidden Breadcrumbs.

![Breadcrumbs - long](/images/long.png)

<br>

### Long Breadcrumb trail - expanded

When the ellipsis is clicked, the Breadcrumb trail will expand to show all hidden pages. When the Breadcrumbs are fully expanded, any overflow will wrap to a new line.

![Breadcrumbs - long expanded](/images/long-–-expanded.png)

<hr>

## Best Practices

### Page title length

* We recommend keeping Breadcrumb titles to 30 characters or less, especially in longer trails, but leave the length up to the consumer
* Page titles will truncate after 30 characters with an ellipsis at the end

![truncated title breadcrumb](/images/truncate.png)



<docs-spacer>

</docs-spacer>



### Separators should mimic movement

Use chevrons as separators between page/Breadcrumb titles. They not only help separate between different page/Breadcrumb titles, but also help indicate hierarchy.

<docs-grid columns="2">

<div>

![Always use right arrows in breadcrumb trials](/images/1-1.png)

<docs-do>
Always use right arrows in breadcrumb trials.
</docs-do>

</div>

<div>

![Avoid using icons that are not right arrows, such as forward slash "/", dash "-", and etc.](/images/1-2.png)

<docs-do-not>
Avoid using icons that are not right arrows, such as forward slash "/", dash "-", and etc.
</docs-do-not>

</div>

</docs-grid>

<docs-spacer>

</docs-spacer>

### The first Breadcrumb should always be spelled out

When placing ellipses, always leave the first item visible and avoid using ellipses at the beginning.

<docs-grid columns="2">

<div>

![Consider using ellipses from the second item. Always leave the first item so users can easier find where the structure starts](/images/2-1.png)

<docs-do>
Consider using ellipses from the second item. Always leave the first item so users can easier find where the structure starts.
</docs-do>

</div>

<div>

![Avoid placing ellipses at the beginning of a breadcrumb trail as it is beneficial for users to know the origin of the page structure, especially if they are directed from an external link](/images/2-2.png)

<docs-do-not>
Avoid placing ellipses at the beginning of a breadcrumb trail as it is beneficial for users to know the origin of the page structure, especially if they are directed from an external link.
</docs-do-not>

</div>

</docs-grid>

<docs-spacer>

</docs-spacer>

### **Breadcrumb width should not exceed 700px**

For the optimal readability, it is recommended to keep the maximum Breadcrumb length at 700px. If the Breadcrumb trail length exceeds the limit, wrap the remaining Breadcrumbs to the next row below.

<br>

### Breadcrumbs are not intended to be the primary action on a page

Breadcrumbs are intended to supplement other navigational elements on the page, such as "back" "continue" buttons in an action bar.

<br>

### **Breadcrumbs should only indicate hierarchical site pages, not page history**

Breadcrumbs are not designed to show browsing history (such as "back" button in browsers), it is meant to show a given webpage's hierarchical structure. This is critical since browsing history can get long and complicated very quickly and also would not be beneficial for users who come in from an external link to quickly find out where they are.

<br>

### When using **ellipses, consider making the last two items visible**

When in a long Breadcrumb trail, items that are closer to the current page hold more weight to users than others. It is recommended to make the last two items (including current page) visible.

<hr>

## Responsive Layout

### Shorten Breadcrumbs to only show the last level on mobile

Due to the smaller screen size and potential complexity of Breadcrumbs, a mobile Breadcrumb functions as an on-screen back button. This Breadcrumb is simplified to the last level before the current page with a chevron to the left.

![Breadcrumbs - mobile layout](/images/moble.png)

<hr>

## Behavior

### Upon refreshing/re-navigating to the page, collapse long Breadcrumb trails

After expanding a long Breadcrumb trail, refreshing the page will collapse the trail automatically.
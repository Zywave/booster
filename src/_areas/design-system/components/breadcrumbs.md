---
title: Breadcrumbs
subtitle: Breadcrumbs are a form of secondary navigation that helps users easily
  see and navigate through page hierarchies.
api: https://cdn.zywave.com/@zywave/zui-breadcrumbs@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-breadcrumbs@next/demo/index.html
mainComponentName: zui-breadcrumbs
includedElements: []
---

## What are breadcrumbs

Use breadcrumbs as a form of secondary navigation, to aid the primary navigation, when site hierarchies get 3 or more levels deep. Breadcrumbs give users context so they don't feel lost, even when they are deep inside large, nested content. The breadcrumb links also allow users to backtrack through deep navigation as far as they need to without having to start over.

![Breadcrumb example](/images/components/breadcrumbs/Breadcrumb-full-page.svg)

<Spacer size="small" />

## Why use breadcrumbs

- Simple, efficient, easy navigation within the application
- Fast navigation, one-click access to get to a higher-level page which helps users quickly get where they need to, even when they make mistakes
- Tells the user their location, helping them understand where they are in relation to the rest of the site

![normal breadcrumbs](/images/components/breadcrumbs/Breadcrumb-normal.svg)

<Spacer size="small" />

## Using breadcrumbs

**For technical specs, see [the specs page](https://xd.adobe.com/view/d1d7482c-a03d-4c53-7ab5-ceba1750b3aa-a7e6/ "Breadcrumbs specs page")**

- Breadcrumbs are always left-aligned and appear 30px below the page header and 20px above the page title
- Breadcrumbs should be styled like text links, but without the underline: 14px font size
- Use left arrows — not slashes or vertical lines — to imply movement between pages or point back home
- The current page should be included and clickable but styled to look disabled
- When there are many pages in a breadcrumb trail, you may need to use an ellipsis to hide some of the crumbs. We recommend considering an ellipsis with 5 or more links in the breadcrumb trail. The ellipsis is clickable and will expand to reveal the hidden pages when clicked. In long breadcrumb trails, the breadcrumbs will stack when fully expanded, and that's ok.

![breadcrumbs with ellipsis](/images/components/breadcrumbs/breadcrumb-ellipsis.svg)
![breadcrumb expanded](/images/components/breadcrumbs/Breadcrumb-ellipsis-expanded.svg)

<Spacer size="small" />

### Naming

- Breadcrumb titles will truncate after 30 characters
- We recommend keeping breadcrumb titles to 30 characters or less, especially in longer trails, but leave the length up to the consumer.

![truncated title breadcrumb](/images/components/breadcrumbs/Breadcrumb-truncated.svg)

<Spacer size="small" />

### Mobile

On mobile devices where space is at a premium, use a single breadcrumb, pointing back one level. Since space is at such a premium on mobile applications, the cost of using breadcrumbs can quickly overwhelm the benefits. Keeping it simple, by using a single breadcrumb, avoids potential issues with wrapping multiple breadcrumbs or using breadcrumbs that are too small or crowded.

![Breadcrumb mobile](/images/components/breadcrumbs/Mobile-breadcrumb.svg)

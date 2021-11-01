---
title: Shell
subtitle: Wraps around all of our applications and provides suite level
  consistencies, branding, and common functionality.
api: https://cdn.zywave.com/@zywave/zui-shell@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-shell@next/demo/index.html
mainComponentName: zui-shell
includedElements: []
---
## What is Shell?

The Shell wraps around all of our applications and provides suite level consistencies, branding, and common functionality. It helps the user understand and navigate the core of the Zywave suite.

<docs-spacer size="small"></docs-spacer>

### Anatomy

The shell includes 4 core sections that surround the content standard content area, Topbar, Side nav, and footer. For a consistent user experience, use all 3 shell components when building applications.

<docs-spacer size="small"></docs-spacer>

#### 1. Topbar

The Topbar is the section reserved at the top of the page that provides application branding, suite-level navigation, and high priority functionality such as search. For more detailed information, view the Topbar guidelines.

<docs-spacer size="small"></docs-spacer>

#### 2. Sidenav

The Side nav provides a standard place for navigation within a product. Placed on the left-hand side of the site, it lists out the application-specific site features you can access, as well as features like settings, notifications, and help. For more detailed information, view the Sidenav guidelines.

<docs-spacer size="small"></docs-spacer>

#### 3. Footer

The section at the bottom of most pages contain information that needs to be there, but doesn't necessarily demand the user's primary focus. The footer can include legal, trademark, terms &amp; conditions, privacy statement, DMCA, cookie usage, and contact information. For more detailed information, view the Footer guidelines.

<docs-spacer size="small"></docs-spacer>

#### 4. Content area

The Content area is the body of our applications where all the features and functionality gets placed. For more detailed information, view the Content area guidelines.

![Shell screenshot](/images/components/shell/shell-basics.svg)

<docs-spacer></docs-spacer>

### Suite vs individual products

Depending on if you are building a single point solution that will be sold individually or one that fits into our suite with other features of the same nature, the shell can change to accommodate an ideal user experience.

![Shell suite screenshot](/images/components/shell/shell--suite.svg)
*Example: Shell for the Zywave suite.*

<docs-spacer size="small"></docs-spacer>

![Shell Modmaster screenshot](/images/components/shell/shell--individual-mm.svg)
*Example: Shell for a single point solution (ModMaster). The application bar becomes slightly larger to accomidate the application name.*

<docs-spacer></docs-spacer>

### Responsive design

<docs-grid columns="2">

<div>The shell has been designed to transition itself for a better experience on mobile devices. At our mobile breakpoint (≥<code>720px</code>), the side nav becomes hidden off-screen and slides in when the menu button his pushed. For a detailed list of what happens in each 4 core sections, please visit those sections.</div>

<div>

![Shell mobile screenshot](/images/components/shell/shell--mobile-basics.svg)

</div>
</docs-grid>

<hr>

## What is the Topbar?

The Topbar gives the user easy access to suite and organization-level actions, as well as some important actions specific to the application or tool. The Topbar also provides a space for product branding. It is a base component of the suite and should be used for every product, unless there is a specific reason not to.

<docs-spacer size="small"></docs-spacer>

### Anatomy

#### Zywave Topbar

The suite Topbar contains many different components which aid in branding, navigation, and other user actions. The components include:

1. **Zywave logo**
2. **Branding bar**
3. **Search bar**
4. **Application switcher**
5. **Profile manager**

![Topbar - anatomy - suite level](/images/components/shell/topbar/topbar--anatomy--suite.svg)

<docs-spacer></docs-spacer>

#### Adding product-specific branding

When necessary, you can also include specific product branding in the Zywave Topbar:

1. **Product name** - The name of the product.
2. **Product-specific branding bar** - A taller branding bar.

![Topbar - anatomy - suite level](/images/components/shell/topbar/topbar--anatomy--singleproduct.svg)

<docs-spacer></docs-spacer>

### Sizing & Spacing

* [Zywave Topbar sizing and spacing specs](https://xd.adobe.com/spec/41e8cdc3-6df1-4a55-73e3-41b3ea68ac16-37d9/)
* [Mobile Topbar and spacing specs](https://xd.adobe.com/spec/4b0ad3da-0bc2-429c-5eca-6edee1c1df44-3d3b/)

<docs-spacer></docs-spacer>

### Types

Although there is not much difference in layout and componentry, depending on the application we have two different variations of the Topbar:

1. **Zywave Topbar** - Use when the primary user is a user client. This Topbar has several different branding features depending on if the product is singular in focus or crosses multiple workflows.
2. **Client Topbar** - Use when the primary user is a Broker's client; e.g., Employer Admin or Employee.

<docs-spacer></docs-spacer>

### Behavior

#### Actions in the Topbar

* **Application switcher** - When clicked, a dropdown list will appear and show the user other applications they own so they can easily switch between them.
* **Profile manager** - When clicked, a dropdown will show user information (e.g., principle and profile) and notifications.

<docs-spacer size="small"></docs-spacer>

#### Searching

Search is an optional feature dependent on the application and the users' needs. Depending on the importance or need of searching, this component may or may not be included in the Topbar. The search bar will default to the category that's searchable for the product. For example, "content" in Broker Briefcase.

<docs-spacer size="small"></docs-spacer>

#### Scrolling

The Topbar is the highest section of Shell, meaning everything in the Sidenav, Content area and Footer can slide underneath it when scrolling. When the user starts scrolling down the page the Topbar will shrink down to `10px` tall, allowing for more vertical space in the Content area. Once the user scrolls up `1px` or more, the entire Topbar reappears.

<docs-spacer size="small"></docs-spacer>

#### Responsive Design

On smaller screens with a **breakpoint <`720px`**, the Topbar responds to allow for a better mobile experience:

1. The Zywave logo moves to the middle of the Topbar.
2. A hamburger menu is located in the upper left. When pushed, the Sidenav slides in from the left.
3. The right side of the Topbar should only be used for prime actions per product. For example, most partners search Broker Briefcase on mobile, so it would make sense for the search icon to be present in the mobile Topbar.

![Topbar - anatomy - suite level](/images/components/shell/topbar/topbar--anatomy--mobile.svg)

<hr>

## What is the Sidenav?

The Sidenav contains the majority of the application and suite-level navigation. This includes the feature-level navigation as well as access to Notifications, Settings, and Help and training. Having the Sidenav in a standard and reliable place helps ground the user experience of all our products. It should be used for every product, unless there is a speific reason not to.

<docs-spacer size="small"></docs-spacer>

### What things go in the Sidenav

The following are nav items that are recommended for every application, when applicable.

1. **Home** - Every application should have a home link at the top. This takes you to the home page of whatever application you are in.
2. **Product navigation links** - These are the application links that take the user to the features they have access to.
3. **Notifications** - A link to notification center, when applicable.
4. **Settings** - Application-specific settings, when applicable.
5. **Help and training** - Links to the support site or Get started with Zywave University.
6. **Collapse** - Gives the user the ability to collapse the Sidenav for more working space in the Content area.

![Sidenav - suite standard items](/images/components/shell/sidenav/sidenav-anatomy--desktop-standard-nav-items.svg)

<docs-spacer></docs-spacer>

### Sidenav anatomy

1. **Nav item**
2. **Nav item icon**
3. **Expand icon**
4. **Nav item (with children)**
5. **Subnav items**
6. **Collapse action**

![Sidenav - anatomy](/images/components/shell/sidenav/sidenav-anatomy--desktop-expanded.svg)

<docs-spacer></docs-spacer>

#### Icon rules

* All top-level nav items should have a corresponding icon to help quickly identify the action. These icons are also used when the menu is collapsed.
* Child items do not have icons associated with them.
* For more information [view our icon standards](/design-system/visuals/iconography/)

<docs-spacer></docs-spacer>

### States

1. **Expanded** - At the **breakpoint of ≥720,** the full expanded side navigation is present.
2. **Collapsed** - When the collapse button is pressed the menu will slim down to show only icons as main navigational items.
3. **Mobile** - At the **breakpoint of <720,** the Sidenav is off-screen and slides in from the left when the hamburger menu is pushed.

<docs-spacer></docs-spacer>

### Behavior (expanded state)

1. **Unselected nav item** - Font color: ZUI Gray 700; font weight: 400; icon color: ZUI Gray 800; background color: none
2. **Selected nav item** - Font color: ZUI Blue 500; font weight: 700; icon color: ZUI Blue 500; background color: none
3. **Expand & collapse action icon** - When clicked, the icon rotates 180 degrees. The icon should always point the direction the action will happen.
4. **Selected subnav item** - Font color: ZUI Blue 500; font weight: 700; icon color: ZUI Blue 500; background color: none
5. **Hover** - background color: ZUI Gray 50

![Sidenav - anatomy](/images/components/shell/sidenav/sidenav-anatomy--desktop-expanded-behavior.svg)

#### Parent and children

* When anywhere on a parent item is clicked, the children will appear below that parent item.
* Parent items are used only for organizational purposes to reveal their child subnav items, they aren't linked to pages themselves.
* Parent items can all be open at the same time to show all subnav item for the entire application.
* After a user clicks on a link, expanded navigation remains expanded. Don't close the navigation until the user pushes to close it.

<docs-spacer size="small"></docs-spacer>

#### Scrolling

* When the list of expanded items extends the entire height of the viewport, a small scrollbar appears, allowing the user to scroll the Sidenav.
* The collapsed nav item remains stuck to the bottom and is not part of the scrolling section.

<docs-spacer size="small"></docs-spacer>

#### Collapsing the Sidenav

* The user can collapse & expand the navigation by clicking the collapse button at the bottom of the Sidenav.
* When collapsed, the content area will respond to make more room for itself by taking up the area that the Sidenav had been using.
* There is no need for the expand/collapse Sidenav function in the mobile state, so the button is hidden.

<docs-spacer></docs-spacer>

### Behavior (collapsed state)

1. **Unselected nav item** - Icon color: ZUI Gray 800; background color: none
2. **Selected nav item** - Slide-out shows the full name of the navigation item. The user can then click the icon or the text to navigate to this page. Icon color: ZUI Blue 500; background color: none
3. **Hover nav item with children** - Slide-out shows the nav item name and list of subnav items. The user can then select the page they wish to navigate to in the list. Background color: ZUI Gray 50
4. **Hover subnav item** - Background color: ZUI Gray 100
5. **Selected item** - Font color: ZUI Blue 500; font weight: 700; background color: none

![Sidenav - anatomy](/images/components/shell/sidenav/sidenav-anatomy--desktop-collapsed-behavior.svg)

<docs-spacer></docs-spacer>

### Behavior (mobile state)

The menu slides in over the content. To close the Sidenav, the user can click off to the right of the navigation.

![Sidenav - anatomy](/images/components/shell/sidenav/sidenav-anatomy--mobile-behavior.svg)

<docs-spacer></docs-spacer>

### Sizing & Spacing

Use the following links to find exact pixel specs for each state of the Sidenav.

* [Expanded state specs](https://xd.adobe.com/view/970272fb-9567-4c56-738c-462d2abe2ae3-e133/screen/442c19f5-7eeb-4164-90b5-1693bc59386c/sidenav-sizing-spacing-desktop-expanded)
* [Collapsed state specs](https://xd.adobe.com/view/970272fb-9567-4c56-738c-462d2abe2ae3-e133/)
* [Mobile state specs](https://xd.adobe.com/view/970272fb-9567-4c56-738c-462d2abe2ae3-e133/screen/caddde32-914d-4fa5-b328-f3d031e60252/sidenav-sizing-spacing-mobile)

<hr>

## What is the Footer?

The Footer is the small section at the bottom of each page that contains things like the privacy and cookie policies, and other legal and trademark information. It is easy to find the information you are looking for, should you need it, and does not interfere with using the app. The Footer is a core feature of Shell and should be used in every application.

<docs-spacer size="small"></docs-spacer>

### Anatomy

The core features of the footer include:

* **Zywave copyright**
* **Terms and Conditions link**
* **Privacy Statement link**
* **DMCA link**
* **Cookie Usage link**
* **Contact link**

<docs-spacer></docs-spacer>

### Behavior

The footer stays at the bottom of the page. There are no special behaviors, other than responsive design changes listed below.

The links in the footer go to the following:

* Terms and Conditions link - https://www.zywave.com/terms-conditions/
* Privacy Statement link - https://www.zywave.com/privacy-statement/
* DMCA link - https://www.zywave.com/dmca-notice/
* Cookie Usage link - https://www.zywave.com/cookie-usage/
* Contact link - mailto:support@zywave.com

<docs-spacer></docs-spacer>

### Responsive Design

As the viewport grows, the footer moves from three lines stacked on top of each other to a single line.

#### Breakpoint - ≥`480px`

![Footer - 480](/images/components/shell/footer/footer--≥480.svg)

<docs-spacer size="small"></docs-spacer>

#### Breakpoint - ≥`720px`

![Footer - 720](/images/components/shell/footer/footer--≥720.svg)

<docs-spacer size="small"></docs-spacer>

#### Breakpoint - ≥`1024px`

![Footer - 1024](/images/components/shell/footer/footer--≥1024.svg)

<hr>

## What is the Content area?

The Content area is the body of our applications where all the features and functionality get placed. When building features in our applications, it's important to understand the size of the canvas you'll be building on. A user should always understand the boundaries of our applications, so the Content area should not change from page to page.

![Basics of the content area](/images/components/shell/content-area/content-area_basics.svg)

<docs-spacer size="small"></docs-spacer>

### Standard padding

Common page padding is important to keep the content in one place and give it some breathing room. Padding is automatically added to our standard Content area. Depending on the size of the viewport, there may be more or less padding. The amount of padding added is dependent on breakpoints. Here is a list of padding that is applied at each breakpoint.

[View padding specs](https://xd.adobe.com/view/927bdb91-0983-4101-4d30-b4705d927192-e44a/grid)

| Breakpoints*          | Padding | Notes                                                |
| --------------------- | ------- | ---------------------------------------------------- |
| ≤`30em` or ≤`480px`   | `20px`  | Side navigation hides; mobile menu becomes available |
| ≤`45em` or ≤`720px`   | `20px`  | Collapsed side navigation appears                    |
| ≤`60em` or ≤`960px`   | `20px`  |                                                      |
| ≤`64em` or ≤`1024px`  | `20px`  | Side navigation collapses                            |
| ≤`80em` or ≤`1280px`  | `30px`  |                                                      |
| ≤`90em` or ≤`1440px`  | `30px`  |                                                      |
| ≤`120em` or ≤`1920px` | `30px`  |                                                      |
| ≤`160em` or ≤`2560px` | `30px`  |                                                      |

<small>*`em` units are based off the browser's default font size of `16px`</small>

<docs-spacer></docs-spacer>

### Content area max-width

#### Standard max-width

In most cases, the content on the page should fill the full width of the Content area&mdash;stretching end-to-end of the available screen real estate&mdash;leaving room for only standard padding. However, we recommend enforcing a max-width of `1600px` or `100em` as the viewport gets larger. For a good user experience, it is typically not helpful to continue stretching past our recommended max-width. In cases where the content doesn't need to be stretched or would be more appealing at a smaller size, use the max-width of `900px` or `56.25em`.

Our standard Content area max-width is: **`1600px`** or **`100em`**

[View standard max-width specs](https://xd.adobe.com/view/01cb99e4-9c91-4a72-7ff9-08f865c98c89-77fa/grid)

<docs-spacer size="small"></docs-spacer>

#### Component specific max-width

In special cases, a component should not fill the full width of the Content area. Instead it should stop at a specific width to ensure a good user experience. Enforcing these max-widths will allow the user to read and understand information easier than if the component was stretched.

Components with an enforced max-width should remain the same size when the Content area grows wider to suit a larger viewport. However, once a component's max-width reaches the limit of the Content area max-width, it should stop growing to not overflow.

[View component specific max-width specs](https://xd.adobe.com/view/1da35ebb-d8fd-40ae-76db-cd4d77144a78-6b92/grid)

<docs-spacer size="small"></docs-spacer>

##### Cards

Depending on content within Cards, and the rest of the components on the page, Cards can have two different max-widths; either `900px` or `1600px` (regarded as full-width). `900px` width means that the Cards and all components on the page extend to a max-width of only `900px` and then stop growing. `1600px` width means that the page components are full-width, padding still in effect, on the page until they hit `1600px` then stop growing.

Because Cards can hold a variety of different components and content, all specific max-widths still apply. For example, because a Text Input has a max-width of `730px`, this will remain in effect in larger card sizes even though there may be empty space.

[View card max-width specs](https://xd.adobe.com/view/2f5a2586-b842-455b-5880-5b127dea1ba8-596b/grid)

| Breakpoints*          | Content width               | Notes                                                |
| --------------------- | --------------------------- | ---------------------------------------------------- |
| `≤30em` or ≤`480px`   | full-width `440px`          | Side navigation hides; mobile menu becomes available |
| ≤`45em` or ≤`720px`   | full-width `430px`          | Collapsed side navigation appears                    |
| ≤`60em` or ≤`960px`   | full-width `670px`          |                                                      |
| ≤`64em` or ≤`1024px`  | full-width `734px`          | Side navigation collapses                            |
| ≤`80em` or ≤`1280px`  | `900px`/full-width `970px`  |                                                      |
| ≤`90em` or ≤`1440px`  | `900px`/full-width `1130px` |                                                      |
| ≤`120em` or ≤`1920px` | `900px`/`1600px`            |                                                      |
| ≤`160em` or ≤`2560px` | `900px`/`1600px`            |                                                      |

<small>*`em` units are based off the browser's default font size of `16px`</small>

<docs-spacer size="small"></docs-spacer>

##### Text areas

Studies have shown that between `45` to `75` characters per single line of text is the optimal length for reading. Anything shorter than this can cause the readers' eyes to bounce around too much. Anything longer and the reader can become fatigued and lose their place when moving to the beginning of the next line. Depending on font type and size, this character length equates to about `700px` in width. Meaning that when there is a Text Area on the page or within a card, the max-width of that area should be `700px`. Regardless of card size, ranging from `900px` to full-width (up to `1600px`), the Text Area should never be larger than `700px` and be left-aligned with the card.

<docs-spacer size="small"></docs-spacer>

##### Text inputs

Using the same studies and conclusion as Text Areas, Text Inputs should also have a max-width of `700px` for a single line of text. There is also `15px` of interior left and right padding within Text Inputs, therefore the max-width of a text input should overall equal `730px`. Meaning that when there is a Text Input on the page or within a card, the max-width of that input should be `730px`. Regardless of card size, ranging from `900px` to full-width (up to `1600px`), the Text Input should never be larger than `730px`.

[View text standards](/design-system/visuals/fonts-typography/)

[View form standards](/design-system/patterns/forms/)

<docs-spacer size="small"></docs-spacer>

##### Tables

Tables can have a large amount of information, options, and details within them; because of this, it is acceptable that they expand to the full width of `1600px` of the page where applicable.

<docs-spacer></docs-spacer>

### Content area best practices

Even though there may be empty space within components such as cards, all components on a page or in a workflow should always follow these rules. This will allow the user to move between pages easily because the components and pages are not jumping sizes to react to the content within.

<docs-grid columns="2">

<docs-do>

When adding a form, make sure that it meets our max-width standards. When the content area is `900px` and below, the form must always be full-width. When the content area is between `900px` and `1600px`, the form must be either `900px` or full-width. When the content area is larger than `1600px`, the form must be either `900px` or `1600px`.

</docs-do>

<div>

![Card Width Don't](/images/components/shell/content-area/cardwidth_dont.svg)

<docs-do-not>

There should never be a situation where the form is smaller than `900px` or full-width when the content area is larger than `900px`.

</docs-do-not>

</div>

</docs-grid>

<docs-grid columns="2">

<div>

![Page Components Do](/images/components/shell/content-area/pagecomponent_do.svg)

<docs-do>

When adding multiple components to a page or within the same workflow, all elements should have the same width.

</docs-do>

</div>

<div>

![Page Components Don't](/images/components/shell/content-area/pagecomponent_dont.svg)

<docs-do-not>

There should never be a situation where a form has a max-width of `900px`, and a table below it is full-width.

</docs-do-not>

</div>

</docs-grid>

<docs-spacer></docs-spacer>

### Background coloring

Gray and white background colors are available, depending on the situation.

<docs-spacer size="small"></docs-spacer>

#### When to use a gray background

For most applications, our standard is to use a gray background. We use gray because it creates a base layer we can build off of and highlight, allowing the user to focus on the task at hand. Most of our components and containers are specifically built to help draw the users attention and a gray background helps with that.

<docs-spacer size="small"></docs-spacer>

#### When to use a white background

Use a white background when the content is mainly text based to enhance readability.

<docs-spacer size="small"></docs-spacer>

<hr>

## What is the Context switcher?

The Context Switcher lives in the Sidenav when a user is viewing a feature on behalf of a different organization. It provides information about which organization is being accessed as well as an easy way to switch to a different organization.

<docs-spacer size="small"></docs-spacer>

### Anatomy

The context switch indicates which organization is currently being viewed by the user. When clicked, it will return the user to their dashboard to switch to another organization.

![Context switcher anatomy](/images/components/shell/context-switcher/Anatomy.svg)

1. **Organization name** - indicate the current organization the user is viewing

   * Longer organization names will truncate and include ellipses
2. **Switch action** - allows the user to navigate back to their dashboard to switch to a different organization

   * The icon and "Switch" label both remain when the sidenav is collapsed

![Context switcher anatomy collapsed](/images/components/shell/context-switcher/Anatomy_collapsed.svg)

<docs-spacer></docs-spacer>

### Responsive layout

On mobile devices, the Context Switcher is hidden off-screen within the Sidenav. This means the organization currently being viewed is hidden within the menu. See [best practices](#best-practices) for our recommendations on ways to help add more clarity about the selected account.

![Mobile context swithcer](/images/components/shell/context-switcher/Context_switcher_mobile.svg)

<docs-spacer></docs-spacer>

### Types/States

**Expanded hover:**\
The background of the Context Switcher becomes ZUI Gray 100 on hover, indicating that the entire area is clickable.

![Expanded switcher hover](/images/components/shell/context-switcher/Hover.svg)
<docs-spacer size="small"></docs-spacer>

**Collapsed hover:**
When the Sidenav is collapsed, additional hover behavior is added to help identify the currently selected organization. The background behind the switch action becomes ZUI Gray 100 to indicate that it is clickable. In addition, there is a fly-out that shows the "Viewing as: *organization*" message on a white background, similar to the child items in the Sidenav.

![Collapsed switcher hover](/images/components/shell/context-switcher/Hover_collapsed.svg)

<docs-spacer></docs-spacer>

### Best practices

<div id="best-practices"></div>

Because the currently selected account is not immediately visible when the Sidenav is collapsed or on mobile devices, we recommend including the organization name in page titles or descriptions. Including the organization name will provide more clarity about which organization they are currently viewing.

![Best practices for context switcher](/images/components/shell/context-switcher/Best_practices.svg)

<docs-spacer></docs-spacer>

### Behavior

The Context Switcher only appears in the Sidenav when the user has chosen to view a feature as an organization. Once they return to their dashboard, the Context Switcher should be removed.
The contents of the Sidenav should also change to reflect what is available for that account in the feature/tool.

<docs-spacer size="small"></docs-spacer>

**Collapsing navigation behavior:**
When collapsing the Sidenav, the flyout containing the "Viewing as: *organization*" message appears for a few seconds and then disappears. To view this message again, the user can hover over the switch action.

![Behavior when collapsing Sidenav with Context switcher](/images/components/shell/context-switcher/Collapse_sidenav.gif)

<hr>

## What is the Action bar?

The Action bar is used to provide the user with a consistent placement of actions on the screen when interacting with longer, more complex pages.

<docs-spacer size="small"></docs-spacer>

### Usage

Action bar keeps the action buttons in a standard state on the screen, even when scrolling. It is the ideal component to use when walking the user through a complex step flow. While the content on the page follows our max-content-widths, the page title and buttons float to the far left and right inside the action bar, using the entire width of the screen.



##### Alternate considerations

* Use [dialog box](/design-system/components/dialogs/) to keep the user focused on the form and input fields and if you have only a few input fields

<docs-spacer size="small"></docs-spacer>

#### In a long form

When you have a long form that is not broken up into multiple steps

![in a long form](/images/components/shell/action-bar/usage-long-form.svg)

For detailed documentation on using Action bar in a long form, view the [design specs](https://xd.adobe.com/view/e7bc4016-c457-4553-88c6-9dfb12c25ed2-b2ef/).

<docs-spacer size="small"></docs-spacer>

#### In a multi-step form

When you have a form that is broken up into multiple steps, the progress indicator is located on the left within the action bar and follows the format **\# of #: Step title**

![in a multi-step form](/images/components/shell/action-bar/usage-multi-step.svg)

For detailed documentation on using Action bar in a multi-step form, view the [design specs](https://xd.adobe.com/view/e7bc4016-c457-4553-88c6-9dfb12c25ed2-b2ef/screen/f418246b-ac48-41b4-ad71-570a8071e6aa).

<docs-spacer size="small"></docs-spacer>

#### When editing a document

![when editing a document](/images/components/shell/action-bar/usage-editing.svg)

For detailed documentation on using Action bar when editing a document, view the [design specs](https://xd.adobe.com/view/e7bc4016-c457-4553-88c6-9dfb12c25ed2-b2ef/screen/a8f96726-827b-41aa-bca1-949362230fa8).

<docs-spacer></docs-spacer>

### Anatomy

1. **Sticky bar:** Shell-themed bar that is sticky to the bottom of the Top bar
2. **Page title:** Title is located on the left side within the sticky bar
3. **Action buttons:** action buttons are located on the right side of the sticky bar

![anatomy](/images/components/shell/action-bar/anatomy.svg)

For detailed documentation on Action bar anatomy, view the [design specs](https://xd.adobe.com/view/e7bc4016-c457-4553-88c6-9dfb12c25ed2-b2ef/screen/04796dd6-e40a-4de0-b1ca-3175bacf5d38).

<docs-spacer></docs-spacer>

### Behavior

The main purpose of the action bar is to provide the user with a consistent placement of actions. The Top bar and Side nav should remain available in an action bar to not limit the user in their ability to navigate out of the current workflow when necessary. To achieve that, the following behavior should be used:

* Zywave Top bar behavior should remain unchanged
* The action bar is sticky and should remain flush up against the bottom of the Top bar, even as the user scrolls down the page to keep the actions in a consistent place on the screen
* Depending on the task at hand and how the data is being saved, a dialog may need to be displayed before a user navigates away to prevent loss of information

<docs-spacer size="small"></docs-spacer>

![expanded side nav](/images/components/shell/action-bar/expandednav.svg)
Focused state with an expanded side nav

For detailed documentation on Action bar with an expanded side nav, view the [design specs](https://xd.adobe.com/view/e7bc4016-c457-4553-88c6-9dfb12c25ed2-b2ef/screen/77f2c9b5-cb7b-497a-b868-72ee9c245e25).

<docs-spacer size="small"></docs-spacer>

![scrolled focus state](/images/components/shell/action-bar/scrolled.svg)
Action bar after scrolling down the page

For detailed documentation on Action bar after scrolling down the page, view the [design specs](https://xd.adobe.com/view/e7bc4016-c457-4553-88c6-9dfb12c25ed2-b2ef/screen/8a119f76-5a5f-42c1-ad53-99c88ab13a0d).

<docs-spacer></docs-spacer>

### Responsiveness

![responsiveness](/images/components/shell/action-bar/responsiveness.svg)

The mobile action bar is a bit different from the desktop version.

* The Top bar should disappear completely when entering a focus state on a mobile device
* The action bar remains sticky to the top of the page
* The background of the action bar is white
* If the action bar uses a "cancel" action, it should be replaced with ZUI-remove and be moved to the left side of the action bar
* The title or progress indicator should be aligned 20px to the right of the cancel or back button
* When there are more than two actions, the title can be removed from the action bar
* If the title is important for the user to see, use an ellipsis in the title if it overlaps the actions in the bar
* The save or forward directional button should be located on the right

For detailed documentation on Action bar responsiveness, view the [design specs](https://xd.adobe.com/view/fc9c6e16-fcda-4634-b5f9-81f6b3c93d65-a9cf/grid).

<docs-spacer size="small"></docs-spacer>

The action bar will stay fixed to the top of the view point when the keyboard is present.

![keyboard](/images/components/shell/action-bar/keyboard.svg)

<docs-spacer size="small"></docs-spacer>

ZUI-remove will always be present. When you have a form that is broken up into multiple steps, include an action to go to the previous step such as "Back".

![steps](/images/components/shell/action-bar/steps.svg)

<docs-spacer></docs-spacer>

### Best practices

#### Complex forms

<docs-grid columns="2">

<docs-do>

Use the Action bar for forms that are longer than 5 input fields

</docs-do>

<docs-do-not>

Use the Action bar for forms that are under 5 input fields

</docs-do-not>

</docs-grid>

<docs-spacer size="small"></docs-spacer>

#### Multi-step forms

<docs-grid columns="2">

<docs-do>

Use the Action bar for step flows where there are more than X steps

</docs-do>

</docs-grid>

<docs-spacer size="small"></docs-spacer>

#### Action buttons

<docs-grid columns="2">

<docs-do>

Use only one primary button

</docs-do>

<docs-do-not>

Use more than one primary button

</docs-do-not>

</docs-grid>
---
layout: documentation
title: Empty states
subtitle: Empty states are instances in an app where there is no data to display
  to the user.
hideToc: false
---
## Usage

![Empty states usage](/images/emptystate_usage.svg)

A useful empty state will let the user know what’s happening, why it’s happening, and what to do about it.

They are most commonly seen the first time a user interacts with a product or page but can also be encountered when data has been deleted or is unavailable.

- - -

## Anatomy

![Empty states anatomy](/images/emptystate_anatomy.svg)

1. **Illustration (optional):** The illustration is used to give the user more insight into what will be available on the page when data has been added or is available. For detailed documentation on our illustrations, view [Booster Illustrations](/design-system/visuals/illustrations/ "/design-system/visuals/illustrations/").
2. **Title (optional):** The title gives the user an understanding of the message or decision they are being presented with. Ideally, the title should not span more than one line.
3. **Body:** The body provides supporting content for the title and gives guidance to the user on what next steps to take. The body text should be kept straightforward and span no longer than three lines.
4. **Action (optional):** An action associated with the message. This action should be the next step the user will take on the page or in the workflow that presented the empty state.

For detailed documentation on our Empty states anatomy, view the [design specs](https://xd.adobe.com/view/5e09fa17-96a4-4d37-9a20-669a0766e386-0b5a/).

- - -

## Layout & structure

The layout and structure of any empty state is determined by application and component context.

#### Cards

Cards are a very common component for holding empty states. Use a hero or spot illustration based on your use case. For detailed documentation on Illustrations, [view the Illustration design specs.](design-system/visuals/illustrations/ "/design-system/visuals/illustrations/")

For detailed documentation on Cards, [view the Card design specs.](/design-system/components/cards/ "/design-system/components/cards/")

**Small card**

![Empty state small space centered](/images/emptystate_smallspace_centered.svg)

**Large card**

![Empty state small space large card](/images/emptystate_largespace_card.svg)

#### Large spaces

When the empty state is not confined to a card or smaller area, it may be helpful to the user to make use of the entire space for an empty state. If an illustration is needed for an empty state in a large space, a hero illustration is better suited due to its larger size.

**Centered**

![Empty state large space centered](/images/emptystate_largespace_centered.svg)

**Text-heavy**

![Empty state large space text](/images/emptystate_largespace_text.svg)

#### Tables

Empty states help guide a user when interacting with an empty table and help them accomplish their next course of action. A title and body text is required within an empty state in a Table.

For detailed documentation on Tables, \[view the Table design specs](/design-system/components/tables/?tab=usage "/design-system/components/tables/?tab=usage")

![](/images/emptystate_table.svg)

- - -

## When to use

<table>
  <thead>
    <th>Type</th>
    <th>Use case</th>
    <th>Goal</th>
  </thead>
  <tbody>
    <tr>
      <td>First use</td>
      <td>Occurs in a new product when the user has not started a workflow. For example:<br>
        <ul>
        <li>when starting a new project</li>
        <li>user's first time entering a product</li>
        </ul>
      </td>
      <td>Explain to the user where and how to get started within the new product</td>
    </tr>
    <tr>
      <td>No results data</td>
      <td>Occurs when the user has successfuly completed an action or query but no results or data is returned. For example:
        <ul>
        <li>no data to show within the component or application</li>
        <li>no results from search query</li>
        <li>image preview is unavailable</li>
        </ul>
      </td>
      <td>User understands empty state and is enabled to add data or correct query</td>
    </tr>
    <tr>
      <td>User cleared</td>
      <td>Occurs when the user has cleared all data on the page. For example:
        <ul>
          <li>user has deleted all notifications in an inbox</li>
          <li>user has cleared all results in a table</li>
        </ul>
      </td>
      <td>Explain to the user why no data is being shown in an inbox or table</td>
    </tr>
  </tbody>
</table>

- - -

## Types

#### First use

This Empty state appears when a user is entering a product for the first time and has no data shown. Body text should be used to explain to the user where and how to initiate the workflow. An illustration, title, and action are all optional depending on the space and workflow.

**First use in a full-page**

It is recommended that an illustration, title, body text, and action all be used when a *first use* empty state is used in a full page. This will give the user the most guidance and delight when entering a new product.

![First use full page](/images/firstuse_centered.svg)

**First use in a table**

It is recommended that a title, body text, and action all be used when a First use empty state is used within a table. Give clear and concise guidance within the body text to help the user navigate to an action to get started.

![First use table](/images/firstuse_table.svg)

![First use table with cards](/images/firstuse_table2.svg)

**Responsive**

![First use mobile](/images/firstuse_mobile.svg)

**No results / data**

This Empty state surfaces where data would appear, but no data is available at the moment, or no results are returned for the specific query. A clear and concise title is used to point out the reason why no results/data are shown and body text is used under the title to provide more context. Depending on the scenarios, it may be recommended to have a secondary call to action button to provide users with a clear next step.

![Example of no results empty state illustration ](/images/noresults.svg)

A use case for this Empty state would be when an image preview is unavailable for the user, such as on a Content details page for an imported piece of content.

![Image placeholder](/images/imageplaceholder.svg)

**Responsive**

![Example of no results empty state on mobile](/images/noresults_mobile.svg)

![Image placeholder mobile](/images/imageplaceholder_mobile.svg)

**User cleared**

This Empty state appears when the user has cleared all data on a page, such as an alerts inbox. For this Empty state, body text should be used to explain to the user why no data is being shown. An illustration, title, and action are all optional depending on the space and workflow.

![User cleared](/images/usercleared.svg)

**Responsive**

![User cleared mobile](/images/usercleared_mobile.svg)

- - -

## Alternative considerations

* Use *Error patterns* if TBD
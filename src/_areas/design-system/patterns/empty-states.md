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

1. **Illustration (optional):** The illustration is used to give the user more insight into what will be available on the page when data has been added or is available. For detailed documentation on our illustrations, view [Booster Illustrations](https://booster.zywave.dev/design-system/visuals/illustrations/ "https\://booster.zywave.dev/design-system/visuals/illustrations/").
2. **Title (optional):** The title gives the user an understanding of the message or decision they are being presented with. Ideally, the title should not span more than one line.
3. **Body:** The body provides supporting content for the title and gives guidance to the user on what next steps to take. The body text should be kept straightforward and span no longer than three lines.
4. **Action (optional):** An action associated with the message. This action should be the next step the user will take on the page or in the workflow that presented the empty state.

For detailed documentation on our Empty states anatomy, view the design specs \[insert design specs link].

- - -

## Layout & structure

The layout and structure of any empty state is determined by application and component context.

#### Cards

Cards are a very common component for holding empty states. Use a hero or spot illustration based on your use case. For detailed documentation on Illustrations, [view the Illustration design specs.](https://booster.zywave.dev/design-system/visuals/illustrations/ "https\://booster.zywave.dev/design-system/visuals/illustrations/")

For detailed documentation on Cards, [view the Card design specs.](https://booster.zywave.dev/design-system/components/cards/ "https\://booster.zywave.dev/design-system/components/cards/")

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

For detailed documentation on Cards, [view the design specs tables](https://booster.zywave.dev/design-system/components/tables/?tab=usage "https\://booster.zywave.dev/design-system/components/tables/?tab=usage")

![](/images/emptystate_table.svg)

- - -

## When to use

\[Insert table here]

- - -

## Types

#### First use

This Empty state appears when a user is entering a product for the first time and has no data shown. Body text should be used to explain to the user where and how to initiate the workflow. An illustration, title, and action are all optional depending on the space and workflow.

**First use in a full-page**

It is recommended that an illustration, title, body text, and action all be used when a *first use* empty state is used in a full page. This will give the user the most guidance and delight when entering a new product.

![First use full page](/images/firstuse_centered.svg)

**First use in a table**

It is recommended that a title, body text, and action all be used when a First use empty state is used within a table. Give clear and concise guidance within the body text to help the user navigate to an action to get started.
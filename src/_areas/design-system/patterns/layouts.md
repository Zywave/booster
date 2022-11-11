---
layout: documentation
title: Card layout
subtitle: Highly flexible foundational building blocks used as a container for a
  variety of content.
---
## Usage

Cards group similar concepts together which makes scanning content more efficient. Elements within a card are standard and organized so the user can quickly find actionable information. Follow the rule: 'one card, one concept', meaning each card should focus on only one feature or a bit of information.

Cards function as a container for content. They provide a blank canvas to help balance UI aesthetics with good usability. There are various types of content and many options for functionality that can be placed within a card

Cards are an excellent choice for:

* Dashboards or for pages that display a variety of content types at the same time on the same page.
* Displaying data visualizations & metrics

<hr>

<div id="cards-anatomy"></div>

## Anatomy

Cards are made up of three main sections: a header, a body, and a footer. Each section has its own options and limitations, and the only section that is preferred is the header. There are a number of different data and layout types that can be used for the body section. <!-- Note: although \\\[media cards](#cards-media) have a very similar anatomy, there are slight differences in layout. -->

![Anatomy](/images/card-anatomy.svg)

1. **Header section** (preferred): Defines space for the headline, subheading, and header actions.
2. **Body section** (optional): Displays the content of the card such as lists, images / illustrations, data visualizations, form inputs and more.
3. **Footer section** (optional): Defined space for footer actions.

![Anatomy](/images/card-anatomy2.svg)

1. **Headline** (preferred): Briefly describes the features to the user. See the [header content guidelines](#cards-headlines).
2. **Subheading** (optional): Provides supporting content for the header. A subheading should only be used if the user needs more detail to understand the feature within the card.
3. **Header actions** (optional): Typically affect the information within the card such as a 'Add', 'Edit', 'Save'.
4. **Footer actions** (optional): Typically initiate a workflow or take you to the next step.

To remain consistent all cards should use the following basic design specifications.

* container padding
* corner radius
* border weight
* border color
* drop shadow

<a href="https://xd.adobe.com/view/c11f2559-0a63-49ca-8270-f088e50042ca-944c/screen/d501cbd8-ac8b-451a-91fc-4fe551a2c18e/specs/" target="_blank">Click here for card development specs</a>

<hr>

<div id="cards-sizing"></div>

## Layout & structure

The size of a card is determined by the type of content it's hosting. As long as the contents within a card meet our standards of readability, its size does not matter.

* Max width and height of a card follows the [content area guidelines](/design-system/components/shell?tab=usage).
* For larger cards, follow our [line length documentation](/design-system/visuals/fonts-typography/) to make sure lines of text don't get too long.
* Cards should not be less than 250px wide.

![Sizing](/images/card-sizing-minwidth.svg)

<DoNot />

Make the card so small it doesn't leave enough space for the content to be easily consumed.

<Spacer size="large" />

When data is displayed in a listview within cards, they should follow the same grid pattern to line up with each other. A grid places cards in fixed rows and columns, making it easy for users to scan content. See our grid documentation for more guidance on how to properly space our cards when they're lined up next to each other in a grid. It's important to match height between cards in the same row for visual organization. In a grid, cards should have the same fixed width in each column.

![Grid layout](/images/card-layout.svg)

<hr>

<div id="cards-headlines"></div>

## Headlines

### Content guidelines

Cards are a great tool for communicating quick stories. Like all stories, the title is important to know if you'd like to read it. Always follow our [writing style guide](/design-system/voice-and-tone/writing-style-guide/).

* **Keep it simple:** the headline needs to be easy to digest.
* **Keep it short:** make it so user can scan the material.
* **Keep it clever:** use words the peak the users interest and make it personal for them.

<Spacer size="small" />

### Headline alignment

* Most of the time cards should use left aligned headlines.
* Center aligned headlines are acceptable. Center alignment is typically used on a landing screen before a user enters a workflow, or when the user has a fork in the road choice to make.

  * When the headline is centered, the rest of the content in the card should also be centered.
* Be consistent. If there are multiple cards on the screen do not mix and match left and center aligned headlines.

![Headline alignment](/images/card-headline-alignment.svg)

<Spacer size="small" />

Although our cards are designed to allow for wrapping headlines, best practice is to keep the headline short and snappy. Make sure to leave a minimum gutter of at least 50px between the headline and the action button.

![Headline long](/images/card-headline-long.svg)

<Spacer size="small" />

### Subheading

Use a subheading when you need more supporting copy to reinforce what users will find in the card. Subheadings are part of the header and should directly relate to the headline.

* Limit the subheading to two lines or less when the card is at it's smallest.
* Subheadings can contain links. For example, a common use is a link to learn more.

![Subheaders long](/images/card-subheadline-long.svg)

<hr>

<div id="cards-actions"></div>

## Actions

In many cases a card offers a entry point to for the user to find more information. Often, a card contains high level information enticing users to click through and discover more. For this reason, it's critical that a card's actions are clear and predictable. There are three ways to make a card actionable: adding an action in the header; adding actions in the footer; or making the entire card the action. A couple things to note when adding actions to your card:

* The type of action should determine placement. For example, actions in the footer typically take the user somewhere else.
* Avoid adding too many call-to-action buttons or links. There should only be one primary call-to-action per card.

<Spacer size="small" />

### Header actions

Header actions typically affect the information within the card such as a Add, Edit, or Save. When using a call-to-action within a card, most often use a [secondary button](/design-system/components/buttons/). Primary buttons should be reserved for the most important action a user can take on the page.

![Header actions](/images/card-actions-header-secondary.svg)

<Spacer size="small" />

Due to the limited space in the header for actions, using an icon button is acceptable; just make sure the icon is easily identifiable. If there is more than one action, consider using a button dropdown; unless both actions are of high importance.

![Header action icons](/images/card-actions-header-icon.svg)

<Spacer size="small" />

When a card is larger it is acceptable to have multiple actions within the header, just avoid too many call-to-action buttons or links and only one primary call-to-action per card. If there are more than two actions, use a [button dropdown](/design-system/components/button-dropdowns/).

![Header multiple actions](/images/card-actions-multiple-actions.svg)

<Spacer size="small" />

### Footer actions

Footer actions are typically directional, used for kicking off workflows or next step type actions, such as Create a dynamic list.

* When using a call-to-action within a card, most often use a [secondary button](/design-system/components/buttons/). Primary buttons should be reserved for the most important action a user can take on the page.
* Avoid icon buttons as they aren't clear enough.
* Depending on the content in the card footer actions can be aligned on the left or centered. For example, if there are form fields in the card, the best practice is to line up the action under the fields on the left side.

![Footer actions](/images/card-actions-footer.svg)

<Spacer size="small" />

Multiple actions in the footer is a limited accepted practice. It is best practice only to have one primary action per card. When there is more than one action, left align them.

![Footer multiple actions](/images/card-actions-footer-multiple.svg)

<Spacer size="small" />

### Clickable cards

In some cases the entire card should act as a link and initiate a single action. Clickable cards must be expected and predictable so users understand an action can be taken.

* Using actionable wording usually makes it clear you can perform an action.
* When a card contains an actionable component, the interaction should be tied to that UI component, not to the whole card.
* When hovered, the clickable card should outline and the cursor should change to a pointer.

![Actions whole card](/images/card-clickable.svg)

<Spacer size="small" />

### Filtering and sorting

Sometimes it's necessary for the user to be able to filter the data within the card, for example by date. If a card can be filtered, add the proper filtering component to the header action area.

![Actions filtering & sorting](/images/patterns/cards/card--actions-filtering.svg)

<hr>

<div id="cards-dragging"></div>

## Dragging a card

Dragging and dropping cards is useful when the user needs to rearrange, reorder or group cards.

* Add the grip icon to the header.
* The grip icon area becomes the grab area.
* Change the mouse cursor to a crossbar.

![Moving a card](/images/patterns/cards/card--drag-specs.svg)

<hr>

<div id="cards-tabs"></div>

## Cards with tabs

In many cases, tabs can take the place of the card headline.

![Cards with tabs](/images/patterns/cards/card--tabs.svg)

<Spacer size="small" />

The body of a card should still follow the padding requirements of a card, and the first tab label should line up to that padding.

![Specs of cards with tabs](/images/patterns/cards/card--tab-specs.svg)

<Spacer size="small" />

If a headline is necessary, line up the tabs within the card padding, but keep the separator running to the edges.

![Cards with tabs + headline](/images/patterns/cards/card--tabs-headline.svg)

<hr>

<div id="cards-tables"></div>

## Cards with a table

The table itself is a card. When using a table on a card, the padding of the card is removed and the table contents line up to the edge of the card.

![Cards with tables](/images/patterns/cards/card--table.svg)

<hr>

<div id="cards-carousel"></div>

## Cards with a carousel

When you need multiple pieces of content to occupy a single space, a carousel is a good option. We offer two options to scroll through content, both should always be placed below the carousel.

![Cards with a carousel](/images/patterns/cards/card--carousel.svg)

<hr>

<div id="cards-loading"></div>

## Loading content into cards

While the data for a card is loading, the card's contents are replaced with a loading spinner. While the card is in a loading state, any actions that could be taken on the card's content are disabled. Cards should not change height drastically when data appears and is rendered.

### Skeleton screens

A skeleton screen is a low fidelity UI into which information is gradually loaded. It gives users a visual cue that the content is being loaded into each UI element. Using a skeleton screen makes the user perceive that app/website is loading fast. Skeleton screens work great in cards.

![Cards - loading content](/images/patterns/cards/cards--spinner.svg)

<hr>

<div id="cards-background"></div>

## Background graphics

Adding background graphics can give the card more visual interest and evoke more emotion to connect with the user. Follow these best practices:

* Bleeding the image to the edge is preferred.
* Illustrations are preferred. See our [illustration guidelines](/design-system/visuals/illustrations/).
* Avoid overlapping text.
* Keep in mind scaling to ensure the background graphic is appropriately sized on all card sizes.

Examples of background graphics in cards:

![Cards - backgroung graphics](/images/patterns/cards/cards--backgrounds.svg)

<hr>

<div id="cards-responsive"></div>

## Responsive behavior

When on a mobile device (breakpoint ≤480px) the card's base padding changes to 10px.

![Cards - mobile padding](/images/patterns/cards/card--base-mobile.svg)

<Spacer size="small" />

Because of the nature of card containers, they are ideal for flexible layouts. As the viewport gets smaller, cards should react appropriately to fit.

* Cards should stack, creating a organized way for users to scroll through the content.
* Left and right margin is removed to maximize room for the card's content.
* Corner radius is removed.
* At least 10px is required between cards.

![Cards - responsive content margins](/images/patterns/cards/cards--responsive-contentmargin.svg)

<Spacer size="small" />

With the card's left and right margin removed, the content within the card will now line up with other content on the page. Note: the content area padding is 10px at ≤480px.

![Cards - responsive content area](/images/patterns/cards/card--responsive-contentarea.svg)

<Spacer size="small" />

### Header actions

* If the action has an icon that is highly intuitive to the user, for example pencil icon for edit, it is recommended to use the icon button.
* Limit the header action to one icon button or a button dropdown.
* Do not stack action buttons.

![Cards - responsive content area](/images/patterns/cards/cards--actions-header-mobile.svg)

<!--
<hr>

<div id="cards-media"></div>

## Media cards

Media cards have a horizontal layout and are ideal for showing document preview images. All traditional card design guidelines apply to media cards, except for the following:

### Media Card basics

What makes media cards unique include:

- There is a spot reserved for an image, typically a thumbnail, to be placed on the left side of the card.
- There is a spot for an optional label to be included.
- The padding is 15px.

<a href="https://xd.adobe.com/view/d8cb5ef6-fb76-4402-56fd-0c7f1c256004-aefa/specs/" target="_blank">Click here for card development specs</a>

### Media card anatomy

!\\\[Cards - Media card anatomy](/images/patterns/cards/mediacard-anatomy.svg)

1. \\\*\\\*Image\\\*\\\* (required): Reserved space for an image, spot illustration or document thumbnail.
2. \\\*\\\*Label\\\*\\\* (optional): Displays what the content is tagged with, such as new or recommended.
3. \\\*\\\*Headline\\\*\\\* (preferred): Title of the media. See the \\\[header content guidelines](#cards-headlines).
4. \\\*\\\*Subheading\\\*\\\* (optional): Provides supporting content for the headline. A subheading should only be used if the user needs more detail to understand the feature within the card.
5. \\\*\\\*Footer actions\\\*\\\* (optional): Typically initiates a workflow or takes the user to the next step.

<Spacer size="small" />

The footer actions always align to the bottom-right corner of the media card.

!\\\[Cards - Media card action placement](/images/patterns/cards/mediacard--actionplacement.svg)

<Spacer size="small" />

When the image does not take up the entire image section, line it up with the headline.

!\\\[Cards - Media card lineup](/images/patterns/cards/mediacard--lineup.svg)

<Spacer size="small" />

### Media card sizing

!\\\[Cards - Media card max and min width](/images/patterns/cards/mediacard--maxmin.svg)

<DoNot />

Media cards should not be more than 700px or less than 300px wide
-->
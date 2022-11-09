---
title: Cards
subtitle: Highly flexible foundational building blocks used as a container for a
  variety of content.
api: https://cdn.zywave.com/@zywave/zui-card@latest/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-card@latest/docs/demo.html
mainComponentName: zui-card
includedElements: []
---
## Usage

Cards group similar concepts together making scanning content easier and faster. Elements within a card are standard and organized so the user can quickly find actionable information. Follow the rule: 'one card, one concept', meaning each card should focus on only one feature or a bit of information.

Cards are an excellent choice for:

* Dashboards or for pages that display a variety of content types at the same time on the same page.
* Displaying data visualizations & metrics

## Card basics

Cards function as a container for content.  They provide a blank canvas to help balance UI aesthetics with good usability.  There are various types of content and many options for functionality that can be placed within a card, but to remain consistent all cards should use the following basic design specifications. 

* container padding
* corner radius
* border weight
* border color
* drop shadow

*[Click here to view design specifications](https://xd.adobe.com/view/e787ffc9-125a-486f-a97d-43561390a895-b2d4/)*

![](https://zywave.atlassian.net/wiki/download/attachments/138909221029/card--basics.png?version=2&modificationDate=1604651358280&cacheVersion=1&api=v2)

## Anatomy

Cards are made up of three main sections: a header, a body, and a footer.  Each section has their own options and limitations, and the only section that is preferred is the header.  There are a number of different data and layout types that can be used for the body section. Note: although media *cards* have a very similar anatomy, there are slight differences in layout.

![](https://zywave.atlassian.net/wiki/download/attachments/138909221029/Card--Anatomy.png?version=6&modificationDate=1604416204187&cacheVersion=1&api=v2)

1. **Header section** (preferred): Defines space for the headline, subheading, and header actions.
2. **Body section** (optional)**:** Displays the content of the card such as lists, images / illustrations, data visualizations, form inputs and more.
3. **Footer section** (optional)**:** Defined space for footer actions.
4. **Headline** (preferred)**:**  Briefly describes the features to the user.  See the *header content guidelines*.
5. **Subheading** (optional)**:** Provides supporting content for the header.  A subheading should only be used if the user needs more detail to understand the feature within the card.
6. **Header actions** (optional): Typically affect the information within the card such as a 'Add', 'Edit', 'Save'.
7. **Footer actions** (optional): Typically initiate a workflow or take you to the next step.

## Card sizing & layout

The size of a card is determined by the type of content it's hosting.  As long as the contents within a card meet our standards of readability, its size does not matter.

* Max width and height of a card follows the *content area guidelines*.  
* For larger cards, follow our *line length documentation* to make sure lines of text don't get too long.
* Cards should not be less than 250px wide.

![](https://zywave.atlassian.net/wiki/download/attachments/138909221029/Card--sizing-minwidth.png?version=2&modificationDate=1604392907997&cacheVersion=1&api=v2)

**DO NOT**

Make the card so small is doesn't leave enough space for the content to be easily consumed. 

When data is displayed in a listview within cards, they should follow the same grid pattern to line up with each other.  A grid places cards in fixed rows and columns, making it easy for users to scan content.  See our grid documentation for more guidance on how to properly space our cards when they're lined up next to each other in a grid.  It's important to match height between cards in the same row for visual organization. In a grid, cards should have the same fixed width in each column.

![](https://zywave.atlassian.net/wiki/download/attachments/138909221029/Card--Layout.png?version=2&modificationDate=1604392908930&cacheVersion=1&api=v2)

## Headlines

### Content guidelines

Cards are a great tool for communicating quick stories. Like all stories, the title is important to know if you'd like to read it.  Always follow our *Voice and Tone Guidelines*.

* **Keep it simple:** the headline needs to be easy to digest.
* **Keep it short:** make it so user can scan the material.
* **Keep it clever:** use words the peak the users interest and make it personal for them.

### Headline alignment

* Most of the time cards should use left aligned headlines.
* Center aligned headlines are acceptable.  Center alignment is typically used on a landing screen before a user enters a workflow, or when the user has a fork in the road choice to make.

  * When the headline is centered, the rest of the content in the card should also be centered.
* Be consistent. If there are multiple cards on the screen do not mix and match left and center aligned headlines.

![](https://zywave.atlassian.net/wiki/download/attachments/138909221029/card--headline-alignment.png?version=1&modificationDate=1604392906720&cacheVersion=1&api=v2)

Although our cards are designed to allow for wrapping headlines, best practice is to keep the headline short and snappy.  Make sure to leave a minimum gutter of at least 50px between the headline and the action button. 

![](https://zywave.atlassian.net/wiki/download/attachments/138909221029/card--headline-long.png?version=1&modificationDate=1604392909307&cacheVersion=1&api=v2)

### Subheading

Use a subheading when you need more supporting copy to reinforce what users will find in the card.  Subheadings are part of the header and should directly relate to the headline. 

* Limit the subheading to two lines or less when the card is at it's smallest.  
* Subheadings can contain links.  For example, a common use is a link to learn more.

![](https://zywave.atlassian.net/wiki/download/attachments/138909221029/card--subheadline-long.png?version=1&modificationDate=1604392909817&cacheVersion=1&api=v2)

### Icons in the header

The only icon we currently support in the header is the gripper icon, which is used to indicate moving a card. See the '*Dragging a card documentation*' for more information.  If you have a need to include an icon, contact the ZUI team and we will log an enhancement. 

## Actions

In many cases a card offers a entry point to for the user to find more information.  Often, a card contains high level information enticing users to click through and discover more.  For this reason, it's critical that a card's actions are clear and predictable.  There are three ways to make a card actionable: adding an action in the header; adding actions in the footer; or making the entire card the action.  A couple things to note when adding actions to your card:

* The type of action should determine placement.  For example, actions in the footer typically take the user somewhere else.
* Avoid adding too many call-to-action buttons or links. There should only be one primary call-to-action per card.

### Header actions 

Header actions typically affect the information within the card such as a Add, Edit, or Save.  When using a call-to-action within a card, most often use a [secondary button](https://www.carbondesignsystem.com/components/button/usage). Primary buttons should be reserved for the most important action a user can take on the page.

![](https://zywave.atlassian.net/wiki/download/attachments/138909221029/Card--actions-header-secondary.png?version=2&modificationDate=1604392905653&cacheVersion=1&api=v2)

Due to the limited space in the header for actions, using an icon button is acceptable; just make sure the icon is easily identifiable.  If there is more than one action, consider using a *button dropdown*; unless both actions are of high importance.

![](https://zywave.atlassian.net/wiki/download/attachments/138909221029/Card--actions-header-icon.png?version=2&modificationDate=1604392905853&cacheVersion=1&api=v2)

When a card is larger it is acceptable to have multiple actions within the header, just avoid too many call-to-action buttons or links and only one primary call to action per card.  If there are more than two actions, use a button dropdown.

![](https://zywave.atlassian.net/wiki/download/attachments/138909221029/card--actions-multiple-actions.png?version=1&modificationDate=1604392905460&cacheVersion=1&api=v2)

### Footer actions

Footer actions are typically directional, used for kicking off workflows or next step type actions, such as Create a dynamic list. 

* When using a call-to-action within a card, most often use a [secondary button](https://www.carbondesignsystem.com/components/button/usage). Primary buttons should be reserved for the most important action a user can take on the page. 
* Avoid icon buttons as they aren't clear enough.  
* Depending on the content in the card footer actions can be aligned on the left or centered.  For example, if there are form fields in the card, best practice is to line up the action under the fields on the left side. 

![](https://zywave.atlassian.net/wiki/download/attachments/138909221029/Card--actions-footer.png?version=3&modificationDate=1604392905220&cacheVersion=1&api=v2)

Multiple actions in the footer is a limited accepted practice. It is best practice to only have one primary action per card. When there are more than one action, left align them.  

![](https://zywave.atlassian.net/wiki/download/attachments/138909221029/Card--actions-footer-multiple.png?version=3&modificationDate=1604392904993&cacheVersion=1&api=v2)

### Clickable cards

In some cases the the entire card should act as a link and initiates a single action.  Clickable cards must be expected and predictable so users understand they can take action.  

* Use actionable wording usually makes it clear you can perform an action.
* When a card contains an actionable component, the interaction should be tied to that UI component, not to the whole card.
* When hovered, the clickable card should outline and the cursor should change to a pointer.

![](https://zywave.atlassian.net/wiki/download/attachments/138909221029/Card--Actions-whole.png?version=2&modificationDate=1604392906127&cacheVersion=1&api=v2)

### Filtering and sorting

Sometimes it's necessary for the user to be able to filter the data within the card, for example by date.  If a card can be filtered, add the proper filtering component to the header action area.

![](https://zywave.atlassian.net/wiki/download/attachments/138909221029/Card--actions-filtering.png?version=4&modificationDate=1604392904767&cacheVersion=1&api=v2)

## Dragging a card

Dragging and dropping cards is useful when the user needs to rearrange, reorder or group cards. 

* Add the grip icon to the header.
* The grip icon area becomes the grab area.
* Change the mouse cursor to a crossbar.

![](https://zywave.atlassian.net/wiki/download/attachments/138909221029/card--drag-specs.png?version=2&modificationDate=1604660171803&cacheVersion=1&api=v2)

## Cards with tabs 

In many cases, tabs can take the place of the card headline.

![](https://zywave.atlassian.net/wiki/download/attachments/138909221029/Card--tabs.png?version=3&modificationDate=1604392903883&cacheVersion=1&api=v2)

The body of a card should still follow the padding requirements of a card, and the first tab label should line up to that padding. 

![](https://zywave.atlassian.net/wiki/download/attachments/138909221029/Card--tab-specs.png?version=2&modificationDate=1604392903440&cacheVersion=1&api=v2)

If a headline is necessary, line up the tabs within the card padding, but keep the separator running to the edges.

![](https://zywave.atlassian.net/wiki/download/attachments/138909221029/Card--tabs-headline.png?version=3&modificationDate=1604392903660&cacheVersion=1&api=v2)

## Cards with a table

The table itself is a card.  When using a table on a card, the padding of the card is removed and the table contents line up to the edge of the card.

![](https://zywave.atlassian.net/wiki/download/attachments/138909221029/Card%20-%20Table.png?version=2&modificationDate=1604392901917&cacheVersion=1&api=v2)

## Cards with a Carousel 

When you need multiple pieces of content to occupy a single space, a carousel is a good option.  We offer two options to scroll through content, both should always be placed below the carousel.

![](https://zywave.atlassian.net/wiki/download/attachments/138909221029/card--carousel.png?version=1&modificationDate=1604392902180&cacheVersion=1&api=v2)

## Loading content into cards

While the data for a card is loading, the card’s contents are replaced with a loading spinner. While the card is in a loading state, any actions that could be taken on the card’s content are disabled. Cards should not change height drastically when data appears and is rendered.

### Skeleton screens

A skeleton screen is a low fidelity UI into which information is gradually loaded. It gives users a visual cue that the content is being loaded into each UI element.  Using a skeleton screen makes the user perceive that app/website is loading fast.  Skeleton screens work great in cards.

![](https://zywave.atlassian.net/wiki/download/attachments/138909221029/Cards--spinner.png?version=2&modificationDate=1604392909580&cacheVersion=1&api=v2)

## Background graphics

Adding background graphics can give the card more visual interest and evoke more emotion to connect with the user.

Best practices

* Bleeding the image to the edge is preferred.
* Illustrations are preferred.  See our *Illustration guidelines.*
* Avoid overlapping text.
* Keep in mind scaling to ensure the background graphic is appropriately sized on all card sizes.

Examples of background graphics in cards:

![](https://zywave.atlassian.net/wiki/download/attachments/138909221029/Cards--backgrounds.png?version=5&modificationDate=1604652539480&cacheVersion=1&api=v2)

## Responsive Behavior

When on a mobile device (breakpoint ≤480px) the card's base padding changes to 10px. 

![](https://zywave.atlassian.net/wiki/download/attachments/138909221029/Card--Base-mobile.png?version=3&modificationDate=1604392908527&cacheVersion=1&api=v2)

Because of the nature of card containers, they are ideal for flexible layouts.  As the viewport gets smaller, cards should react appropriately to fit. 

* Cards should stack, creating a organized way for users to scroll through the content.
* Left and right margin is removed to maximize room for the card's content.
* Corner radius is removed.
* At least 10px is required between cards.

![](https://zywave.atlassian.net/wiki/download/attachments/138909221029/Card--responsive-contentmargin.png?version=3&modificationDate=1591861550740&cacheVersion=1&api=v2)

With the card's left and right margin removed, the content within the card will now line up with other content on the page.  Note: the content area padding is 10px at ≤480px.  

![](https://zywave.atlassian.net/wiki/download/attachments/138909221029/Card--responsive-contentarea.png?version=3&modificationDate=1604392902653&cacheVersion=1&api=v2)

### Header actions

* If the action has an icon that is highly intuitive to the user, for example pencil icon for edit, it is recommended to use the icon button. 
* limit the header action to one icon button or a button dropdown. 
* Do not stack action buttons.

![](https://zywave.atlassian.net/wiki/download/attachments/138909221029/Card--actions-header-mobile.png?version=3&modificationDate=1591862345857&cacheVersion=1&api=v2)

## Media Cards

Media cards have a horizontal layout and are ideal for showing document preview images.  All traditional card design guidelines apply to media cards, except for the following:

### Media Card basics

What makes media cards unique include:

* There is a spot reserved for an image, typically a thumbnail, to be placed on the left side of the card.
* There is a spot for an optional label to be included.
* The padding is 15px.

### Media Card Anatomy

![](https://zywave.atlassian.net/wiki/download/attachments/138909221029/MediaCard-Anatomy.png?version=3&modificationDate=1604392908300&cacheVersion=1&api=v2)

1. **Image** (required): Reserved space for an image, spot illustration or document thumbnail.
2. **Label** (optional)**:** Displays what the content is tagged with, such as new or recommended. 
3. **Headline** (preferred)**:**  Title of the media.  See the *header content guidelines*.
4. **Subheading** (optional)**:** Provides supporting content for the headline.  A subheading should only be used if the user needs more detail to understand the feature within the card.
5. **Footer actions** (optional): Typically initiates a workflow or takes the user to the next step.

The footer actions always align to the bottom-right corner of the media card.

![](https://zywave.atlassian.net/wiki/download/attachments/138909221029/MediaCard--actionplacement.png?version=2&modificationDate=1604392900803&cacheVersion=1&api=v2)

When the image does not take up the entire image section, line it up with the headline.

![](https://zywave.atlassian.net/wiki/download/attachments/138909221029/MediaCard--lineup.png?version=2&modificationDate=1604392901147&cacheVersion=1&api=v2)

### Media card sizing

![](https://zywave.atlassian.net/wiki/download/attachments/138909221029/MediaCards-max%26min.png?version=1&modificationDate=1591871975920&cacheVersion=1&api=v2)

**DO NOT**

Media cards should not be more than 700px or less than 300px wide

<!--EndFragment-->
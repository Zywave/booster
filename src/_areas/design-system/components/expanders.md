---
api: https://cdn.zywave.com/@zywave/zui-expander@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-expander@next/demo/index.html
mainComponentName: zui-expander
includedElements: []
title: Expanders
subtitle: A useful pattern for progressive disclosure—highlighting important details of a section and revealing more details upon a tap or click.
---

## Usage

An Expander (sometimes referred to as an Accordion) is a useful pattern for progressive disclosure&mdash;highlighting important details of a section and revealing more details upon a tap or click. The purpose of an Expander is to organize and manage an overabundance of content and allow users to get the big picture before focusing on details. They are composed of multiple sections that can reveal and hide the content contained within. A header title gives the user a sense of what content they are digging into without necessarily forcing the user to open the section. Because they conserve vertical space, expanders can be especially good for mobile.

<hr>

## Design specs

[Click here for Expander design specs & guidelines](https://xd.adobe.com/view/d391f1e9-b657-47de-42a6-90e28fcaf4ce-a5a0/grid "Expander Design Specs"), where you will find the following:

- Sizing and spacing details
- States and coloring
- Typography guidelines and hierarchy

<hr>

<div id="expander--anatomy"></div>

## Anatomy

We use the following terminology to refer to the parts of an expander:

1. **Section:** consists of a header and a content area that makes up an Expander. All expanders (except for Peek-a-boos) consist of at least two sections.
2. **Header:** contains a label and optional elements&mdash;such as an icon, an action, and/or content details&mdash;that gives the user the information they need to determine how and whether to expand a section.
3. **Header title:** the name of an Expander section.
4. **Header details:** read-only information visible in the header even when the section is collapsed.
5. **Indicator Icon:** an icon appearing in the header that indicates the section can be expanded and collapsed.
6. **Content area:** the area that appears when a section is expanded.
7. **Action area:** If there is data in the content area that needs to be saved, this is a common place to put actions.

![Anatomy](images/components/expanders/expander-anatomy.svg)

<hr>

## Expander options

<div id="expander--basic"></div>

### Basic Expander

The Basic Expander is the most common type of Expander. It's typically used as a sub-navigation in the content area and helps organize complex content.

![Example of a collapsed Expander](images/components/expanders/basic-expander--collapsed.svg)
_example of a Basic Expander in a collapsed state_

<br>

![Example of an expanded Expander](images/components/expanders/basic-expander--expanded.svg)
_example of a Basic Expander in an expanded state_

<br>

![Example of a mobile Expander](images/components/expanders/expander--mobile.svg)

_example of a basic Expander in a mobile responsive state_

<Spacer size="large" />

<div id="expander--header-details"></div>

### Adding header details

In some cases it is helpful to give the user more information on what they will find in the section, beyond just the title.

![Example of an expanded Expander](images/components/expanders/basic-expander--with-header-details-collapsed.svg)
_example header details in a collapsed state_

<br>

![Example of an expanded Expander](images/components/expanders/basic-expander--with-header-details-expanded.svg)
_example header details in an expanded state_

<Spacer size="large" />

<div id="expander--actions"></div>

### Adding actions

In some cases Expanders can be used to perform lightweight actions, such as updating an email address.

![Example of a expanded Expander](images/components/expanders/basic-expander--actions.svg)
_example of adding actions to an Expander_

<Spacer size="large" />

<div id="expander--peek-a-boo"></div>

### Peek-a-boo

A Peek-a-boo Expander is a single-section Expander that hides some of its content to help make room in the UI.

![Example of a collapsed Peek-a-boo Expander](images/components/expanders/peek-a-boo--collapsed.svg)
_example of a collapsed Peek-a-boo expander_

<br>

![Example of an expanded Peek-a-boo Expander](images/components/expanders/peek-a-boo--expanded.svg)
_example of an expanded Peek-a-boo expander_

<hr>

<div id="expander--best-practices"></div>

## Best practices

### Sections

- By default, all sections can be opened at the same time. If there are actions within the Expander, then limit opening one section at a time.
- If opening a section makes the content longer than the viewport, do not auto-scroll to show that content. Auto scrolling will disorientate the user if they aren't expecting it, so leave the decision to scroll up to them.
- Expanders generally work best when the user can focus on a single task, or a very small number of closely-related tasks. It is not good practice to nest a table, long forms, or tabs inside an Expander section.

### Header information

- The title should be descriptive and clearly suggest what the content will show when expanded.
- It's important to consider plain, concise language when naming your section title. Long titles will truncate, but consider the length of your title and how it will look on mobile. If there are also header details, it is very important to keep your title short so there isn't too much text in the header, making everything hard to scan.
- Add header details when the user needs some indication of what content is in the section.
- When the section is in an expanded state, typically the header details should be removed and reiterated in the content area since all the relevant information the user needs is now visible.

### Adding actions

- Actions in Expanders are best used for lightweight editing of an element, such as selecting a value for a setting.
- If there are other actions on the page, make sure you only have one save button available to the user at one time to avoid confusion.

<hr>

<div id="expander--alternative-considerations"></div>

## Alternative considerations

- Consider using **Cards** when you need to the ability to view and edit a group of information all at once. Show read only data on the card with an edit button that changes everything to be editable.
- Consider using [**Tabs**](/design-system/components/tabs/) instead of Expanders when there is a lot of information in the content area of a section that would push other sections out of the user's viewport, or if there is a lot of complex information.
- Consider using **Jump links** when it would be best to have all the content visible and the user just needs to jump to different sections on the page.

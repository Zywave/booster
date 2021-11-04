---
title: Expanders
subtitle: Expanders allow a user to expand or collapse a section of content
api: https://cdn.zywave.com/@zywave/zui-expander@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-expander@next/demo/index.html
mainComponentName: zui-expander
includedElements: []
---
## Usage

An Expander is a container used to organize an overabundance of content and conserve space on the page. Because Expanders can save a large amount of space, they can be extremely useful for mobile interfaces.

Expanders can be used standalone or in a group to hide and reveal different sections of content providing users with the bigger picture of the content on the page before diving into the details. Important information is shown initially and additional details are revealed upon interaction.  

- - -

## Anatomy

### Standard Expander

Standard Expanders consist of up to 7 different parts. 

1. **Section:** Where both the header and content are contained.
2. **Header area:** The area inside of a section that contains the section title, preview text and indicator icon. This header is a clickable area to expand and collapse the section. 
3. **Title:** A text label that indicates what content is contained in the section.
4. **Preview text (optional):**  An optional sample of the content contained in the section. Preview text can be useful to display settings that are applied in the content area. 
5. **Indicator icon:** An icon located in the header area that indicates to the user when a section can be expanded or collapsed. 
6. **Content area:** The area that appears when a section is expanded.
7. **Action area (optional):** An optional area for consistent placement for actions inside of a section.

<docs-spacer size="small"></docs-spacer>

### Peek-a-boo Expander

A Peek-a-boo Expander contains 3 different parts.

1. **Title:** The text label that indicates the content that is contained within the section
2. **Content:** The full length of the content is visible when expanded. When collapsed the content is truncated to just a few lines. 
3. **Expander action:** A link to "See more" is below the truncated content when collapsed, and a link to "See less" is below the expanded content. 

- - -

## Types

There are two types of Expanders — Standard and Peek-a-boo. 

### Standard Expanders

Standard Expanders are best used when there is a need for multiple sections, the revealed content is lengthy or contains input fields, or there is a need for an action such as "save". 

<docs-spacer size= "small"></docs-spacer>

### Peek-a-boo Expanders

Peek-a-boo Expanders should be used standalone to hide and reveal a small amount of plain-text content. Peek-a-boo Expanders are best used when the hidden content is supplementary to the main purpose of the page. 

- - -

## States

Expanders have a default, hover, focus and expanded state.

- - -

## Best practices

- - -

## Alternate considerations
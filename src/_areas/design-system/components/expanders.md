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

## Types

There are two types of Expanders — Standard and Peek-a-boo. 

### Standard Expanders

Standard Expanders are best used:
- when there is a need for multiple expanding sections on a page
- the revealed content is lengthy or contains form fields
- there is a need for an action within the expander, such as "Save"

<docs-spacer size= "small"></docs-spacer>

### Peek-a-boo Expanders

Peek-a-boo Expanders should be used:
- standalone to hide and reveal a small amount of plain-text content
- when the hidden content is supplementary to the main purpose of the page



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

1. **Title:** The text label that indicates the content that is contained within the section. 

2. **Content:** The full length of the content is visible when expanded. When collapsed the content is truncated to just a few lines. 

3. **Expander action:** A link to "See more" is below the truncated content when collapsed, and a link to "See less" is below the expanded content. 

- - -

## States

Expanders have a default, hover, focus and expanded state.

### Default
The default state is the collapsed view of an Expander. It is also the default state of the Expander when the user lands on the page. 

### Hover
The hover state occurs when the user uses their cursor to hover over the Expander section for Default Expanders or the "See more" button on a Peek-a-boo Expander.

### Focus
Focus state appears when the Expander or "See more" button is currently selected and awaiting action. This is most commonly seen when using a keyboard to navigate. 

### Expanded
The expanded state is seen after the user has interacted with the Expander to show more information. On a Standard Expander the section is expanded and the indicator icon is flipped to visualize that the section can now be collapsed. For the Peek-a-boo Expander the button text will now say "See less". 

- - -

## Behavior 

We recommend that all expanders be in the default state when the user navigates to the page. This ensures that as many sections as possible are visible to the user immediately. 

By default, all sections can be opened at the same time. If there are any sections that contain actions, then consider limiting the user to opening one section at a time to keep the user focused. 



### Keyboard navigation
- Tab to select an Expander
- Space bar/ enter key to open or close the selected section
- When open, tab to select any interactive elements within (input, link or buttons)
-Tab again to select the next Expander


---


## Best practices

### Expanding sections
- If opening a section makes the content longer than the viewport, do not auto-scroll to show that content. Auto scrolling will disorientate the user if they aren't expecting it, so leave the decision to scroll up to them.


- Expanders generally work best when the user can focus on a single task, or a very small number of closely-related tasks. It is not good practice to nest a table, long forms, or tabs inside an Expander section.
<docs-spacer size= "small"></docs-spacer>



### Header information
- The title should be descriptive and concise to explain what content is within without being too lengthy
- When space is limited the title will truncate. Be mindful of how much space is available and how your header may truncate on mobile or when preview text is present. 

- When the section is expanded, the preview text should be removed since the full description will be seen within the content area.  
<docs-spacer size= "small"></docs-spacer>


### Adding actions
- Actions in Expanders are best used for lightweight editing of an element, such as selecting a value for a setting.

- Be sure any actions within the Expander do not contradict any page-level actions. For example, avoid saving at the page level and within the Expander. 

- - -

## Alternate considerations

- Consider using Cards when you need to the ability to view and edit a group of information all at once. 

- Consider using Tabs when the length of the content area far exceeds the average users' viewport height or when there are more than a handful of form fields. 
- Consider using Jump links when it would be best to have all the content visible and the user just needs to jump to different sections on the page.
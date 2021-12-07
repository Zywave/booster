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

Expanders can be used standalone or in a group to hide and reveal different sections of content, providing users with the bigger picture of the content on the page before diving into the details. Important information is shown initially and additional details are revealed upon interaction.  

![Standard Expander on a mobile device](/images/expander_usage_mobile.svg)

- - -

## Types

There are two types of Expanders — Standard and Peek-a-boo. 

![Types of expanders](/images/expander_types.svg)

</br>

### Standard Expanders

Standard Expanders are best used:

* when there is a need for multiple expanding sections on a page
* the revealed content is lengthy or contains form fields
* there is a need for an action within the Expander, such as "Save"

<docs-spacer size= "small"></docs-spacer>

### Peek-a-boo Expanders

Peek-a-boo Expanders should be used:

* standalone to hide and reveal a small amount of plain-text content
* when the hidden content is supplementary to the main purpose of the page

- - -

## Anatomy

### Standard Expander

Standard Expanders consist of up to seven different parts. 

![Standard Expander anatomy](/images/standard_expander_anatomy.svg)

</br>

1. **Section:** Where both the header and content are contained.
2. **Header area:** The area inside of a section that contains the section title, preview text and indicator icon. This header is a clickable area to expand and collapse the section. 
3. **Title:** A text label that indicates what content is contained in the section.
4. **Preview text (optional):**  An optional sample of the content contained in the section. Preview text can be useful to display settings that are applied in the content area. 
5. **Indicator icon:** An icon located in the header area that indicates to the user when a section can be expanded or collapsed. 
6. **Content area:** The area that appears when a section is expanded.
7. **Action area (optional):** An optional area for consistent placement of actions inside of a section.

<docs-spacer size="small"></docs-spacer>

### Peek-a-boo Expander

A Peek-a-boo Expander contains only two parts.

![Peek-a-boo expander anatomy](/images/peek-a-boo_expander_anatomy.svg)

</br>

1.  **Expander action:** A link button to "See more" is below the truncated content when collapsed, and a link button to "See less" is below the expanded content. 
2. **Hidden content:** The content that is hidden by default and shown after pressing the "See more" button.

The first two lines of preview text and the title are not included in the component itself, but we highly recommend including them prior to the Peek-a-boo Expander to provide the user with context of what they will be viewing when they press "See more".

<docs-spacer size="small"></docs-spacer>

For a more detailed breakdown of the sizing and spacing, [view the design specs](https://xd.adobe.com/view/a6f89984-5337-4059-b732-a81634401e1d-f3ab/).

- - -

## States

### Default

The default state is the collapsed view of an Expander. It is also the default state of the Expander when the user lands on the page. 

### Hover

The hover state for Standard Expanders occurs when the user hovers over a section with their mouse. See the Button guidelines for the hover state of the 'See more' action of a Peek-a-boo Expander.

### Focus

Focus state appears when the Expander section is currently selected and awaiting action. This is most commonly seen when using a keyboard to navigate. See the Button guidelines for the focus state of the 'See more' action of a Peek-a-boo Expander

### Expanded

The expanded state is seen after the user has interacted with the Expander to show more information. On a Standard Expander the section is expanded and the indicator icon is flipped to visualize that the section can now be collapsed. For the Peek-a-boo Expander the button text will now say "See less". 

![Standard Expander states](/images/standard_expander_states.svg)

![Peek-a-boo Expander states](/images/peek-a-boo_expander_states-–-1.svg)

- - -

## Behavior

We recommend that all Expanders be in the default state when the user navigates to the page. This ensures that as many sections as possible are visible to the user immediately. 

By default, all sections can be opened at the same time. If there are any sections that contain actions, then consider limiting the user to opening one section at a time to keep the user focused. 

### Keyboard navigation

* `[Tab]` to select an Expander
* `[Space]` or `[Enter]` to open/close the selected section
* When open, `[Tab]` to select interactive elements (input, link or buttons if available)
* `[Tab]` to select the next Expander

- - -

## Best practices

### Expanding sections

* If opening a section makes the content longer than the viewport, do not auto-scroll to show that content. Auto-scrolling can be disorienting, so is is best to leave the decision to scroll up to the user.
* Expanders work best to focus the user on a single task, or a very small number of closely-related tasks. It is not good practice to nest tables, long forms, or tabs inside an Expander section.
  <docs-spacer size= "small"></docs-spacer>

### Header information

<docs-grid columns="2">

  <div>

![Header title example](/images/header_title_do.svg)

 <docs-do>
     Make titles descriptive but concise so that the user can easily scan the sections for what they are looking for and to avoid truncation whenever possible.
</docs-do>
  </div>
  <div>
   

![Header title truncation](/images/header_title_do-not.svg)

 <docs-do-not>
     Make the titles long and harder to scan quickly. Try to avoid truncation whenever possible.
</docs-do-not>
  </div>
</docs-grid>

<docs-spacer size="small"></docs-spacer>

<docs-grid columns="2">

  <div>

![Preview text is removed when expanded](/images/expanded_do.svg)

 <docs-do>
    Remove the preview text when a section is expanded.
</docs-do>
  </div>
  <div>

![Preview text remains when expanded](/images/expanded_do-not.svg)

 <docs-do-not>
     Allow the preview text to persist when expanded. This causes redundancy and confusion when editable fields are present.

</docs-do-not>
  </div>
</docs-grid>

<docs-spacer size="small"></docs-spacer>

### Adding actions

Actions in Expanders are best used for lightweight editing, such as selecting a value for a setting.

<docs-spacer size="small"></docs-spacer>

![Page-level and Expander actions](/images/action_do-not.svg)

<docs-do-not>
Avoid using actions within the Expander that contradict any page-level actions. For example, you should not have a page-level save and a save button within an Expander. 
</docs-do-not>  

- - -

## Alternate considerations

* Consider using [Cards](/design-system/components/cards/) when there is no real benefit to focusing the user on one section at a time.
* Consider using [Tabs](/design-system/components/tabs/) when the length of the content area exceeds the average user's viewport height or when there are more than a handful of form fields.
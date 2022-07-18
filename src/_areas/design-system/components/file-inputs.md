---
title: File inputs
subtitle: ""
api: https://cdn.zywave.com/@zywave/zui-input@latest/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-input@latest/docs/demo.html
mainComponentName: zui-input-file
includedElements:
  - zui-input-file
---
## Usage

The File Input allows the user to select one or many files from the user's file system and upload them to the application.

![File Input](/images/file-input_usage.svg)

- - -

## Anatomy

![File Input anatomy](/images/file-input_anatomy.svg)

1. **Button:** The shape that encloses the icon and action. When selected, the user's default file explorer will open. 
2. **Icon:** Gives more definition to the upload action. Can be used in place of the label due to lack of space or on mobile. 
3. **Label:** A single action associated with the File Input, such as 'Browse' or 'Upload content.'
4. **Input field:** The input field contains placeholder text that will instruct users to select file(s) or drop file(s) into the dropzone for upload. Once a file has been selected, the filename will appear.

   The entire component is clickable and, when selected, the user's default file explorer will open.

For detailed documentation on our File Input anatomy, view the [design specs](https://xd.adobe.com/view/c3866087-1ec9-47ff-bfa1-2e98a0b23b04-96d5/).

- - -

## Types

Our File Input that allows the user to upload a single file through their file explorer or drag and drop. 

![File Input](/images/file-input_usage.svg)

#### Icon

An icon can be added to assist the user in quickly identifying the action needed to be taken. The icon or action text can be omitted due to a lack of space, such as on mobile or a form with a decreased width.

![File Input icon](/images/file-input_icon.svg)

- - -

## States

![File Input states](/images/file-input_states.svg)

#### Normal

Normal state is how the File Input looks by default before any interaction or action is taken.

#### Hover

Hover state occurs when the user hovers over the File Input with their cursor.

#### Pressed

Pressed state occurs very briefly when the File Input is being activated by the user when pressing down on the mouse button.

#### Drag

Drag state occurs when the user drags the file over the File Input while pressing down on the mouse button before releasing. 

#### Disabled

Disabled state occurs when the File Input action is not available to the user. 

Disabled File Inputs should only be used when an action can be taken within the current UI to enable them. If no action can be taken to enable the File Input, then the File Input should be hidden instead of disabled.

#### Error

Error state occurs when the user takes an action that is not possible, such as moving on in the workflow without uploading a file, or attempts to upload a file that is not permitted, such as a file that is too large. 

- - -

## Responsive layout

![File Input mobile](/images/file-input_mobile.svg)

The behavior and location of the single-file input remain unchanged on mobile devices with viewports smaller than 720px. The action text can be omitted due to lack of space on mobile; in this case, the upload icon should be used to represent the action.

This icon can be found in the [icon documentation](/design-system/components/icons/?tab=usage) under Standard system icons.

- - -

## Behavior

### Drag and drop

![File Input drag and drop](/images/file-input_draganddrop.svg)

When using the drag and drop functionality of a File Input, the dropzone should be highlighted only when the user drags a file over the input. This will allow the user to differentiate between multiple inputs on a page and ensure that the correct file is being uploaded.

<docs-note> Support for drag and drop in File Inputs is not yet available. You can track our progress [here](https://gitlab.com/zywave/devkit/zui/zui/-/issues/317).
</docs-note>

- - -

## Best practices

<docs-grid columns="2">
  <div>

![Do File Input action](/images/file-input_action-do.svg)

 <docs-do>  
The action text can be edited to better apply to the content being uploaded or verbiage on the page.

</docs-do>

  </div>
  <div>

![Do not File Input action](/images/file-input_action-do-not.svg)

   <docs-do-not>

The action text should not be overly specific or call out file details, such as a Word or Excel file type. Details, such as file type and size, should be called out in description text or a tooltip.

   </docs-do-not>

  </div>
  
</docs-grid>

<docs-spacer size="small"></docs-spacer>

<docs-grid columns="2">
  <div>

![Do File Input label](/images/file-input_form-do.svg)

 <docs-do>  
<!--StartFragment-->

Group the File Input with related fields and include a label so users know what type of file is required.

<!--EndFragment-->

</docs-do>

  </div>
  <div>

![Do not File Input label](/images/file-input_form-do-not.svg)

   <docs-do-not>

The File Input should not be grouped with unrelated fields without a label or descriptive action text. 

   </docs-do-not>

  </div>
  
</docs-grid>

<docs-spacer size="small"></docs-spacer>
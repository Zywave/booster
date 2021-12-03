---
api: https://cdn.zywave.com/@zywave/zui-input@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-input@next/demo/index.html
mainComponentName: zui-input-file
includedElements: ["zui-input-file"]
title: File inputs
subtitle: Allows the user to select one or many files from the user's file system and upload to the application.
---

## Usage

The file input allows the user to select one or many files from the user's file system and upload to the application.

---

## Anatomy

![Single-file input anatomy](/images/components/file-input/singlefile_anatomy.svg)

The single-file input consists of an action and input field.

1. **Icon (optional):** Gives more definition to the upload action.
2. **Action:** A single action associated with the file input, such as 'Browse' or 'Upload content.'
3. **Input field:** A clickable container that brings up the file explorer.
4. **Input text:** Placeholder text will instruct users to select file(s) or drop file(s) into the dropzone for upload. Once a file has been selected, the filename will appear.

For detailed documentation on our single-file input anatomy, view the [ZUI single-file input design specs](https://xd.adobe.com/view/f50eaaf7-355c-424d-93d1-59d91ca911a4-a05d/specs/).

---

## Types

We have two types of file inputs that allow the user to upload the appropriate amount of files through their file explorer or drag and drop.

### Single-file input

![Single-file input](/images/components/file-input/singlefile_icon.svg)

Allows the user to upload one file through their file explorer or by dropping the file in the dropzone.

### Multiple-file input (WIP)

---

## Responsive layout

![Single-file input mobile](/images/components/file-input/singlefile_mobile.svg)

The behavior and location of the single-file input remain unchanged on mobile devices with viewports smaller than 720px. The action text can be omitted due to lack of space on mobile; in this case, the upload icon should be used to represent the action.

This icon can be found in the [icon documentation](/design-system/components/icons/?tab=usage) under Standard system icons.

---

## Behavior

### Form

When the single-file input is used in a form, it should be grouped with related fields and include a label so users know what type of file is required.

For detailed documentation on our forms pattern, view the [forms documentation](/design-system/patterns/forms/).

![Single-file input form](/images/components/file-input/singlefile_form.svg)

### Icon

An icon can be added to assist the user in quickly identifying the action needed to be taken. The icon or action text can be omitted due to a lack of space, such as on mobile or a form with a decreased width.

![Single-file input icon](/images/components/file-input/singlefile_iconexamples.svg)

### Drag and drop

When using the drag and drop functionality of a single-file input, the dropzone should be highlighted only when the user drags a file over the input. This will allow the user to differentiate between multiple inputs on a page and ensure that the correct file is being uploaded.

![Single-file input drag and drop](/images/components/file-input/singlefile_dropform.svg)

---

## Best practices

<Grid>

<GridCol col="span-6">

![Single-file input action do](/images/components/file-input/singlefile_do_action.svg)

<Do />

The action text can be edited to better apply to the content being uploaded or verbiage on the page.

</GridCol>

<GridCol col="span-6">

![Single-file input action do not](/images/components/file-input/singlefile_donot_action.svg)

<DoNot />

The action text should not be overly specific or call out file details, such as a Word or Excel file type. Details, such as file type and size, should be called out in description text or a tooltip.

</GridCol>

</Grid>

<docs-spacer size="small"></docs-spacer>

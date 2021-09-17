---
layout: documentation
title: Error patterns
subtitle:
---

Errors should always be prevented whenever possible to limit user frustration. When a user does encounter an error, the message should be concise and actionable to help them quickly solve the problem. Below are some of the common types of errors and how they are best presented to the user.

<Spacer size="small" />

## Critical error preventing the user from continuing with their workflow

#### How to present it to the user

- Full page error: 401, 403, 404, or 500 (Details can be found in our [error messaging documentation](https://zui.zywave.com/communications/error-messages/ "Documentation for different error messages").)

#### Best practices

- Avoid if possible - the user should encounter these very rarely
- Display with the Zywave Shell

#### Preventive measures

- Details for each message type can be found in our [error messaging documentation](https://zui.zywave.com/communications/error-messages/ "Documentation for different error messages")

<Spacer size="small" />

![Full page error example](images/patterns/errors/full-page-error.svg)

---

## Server-side error that applies to the entire contents of a page

#### How to present it to the user

- Error banner well

#### Best practices

- Messaging should inform the user it is not their fault
- Guide on how to solve the issue (if possible)
- Provide a link for support if the issue persists

![Error banner well example](images/patterns/errors/banner-well-error.svg)

---

## Error occurs that does not directly impact the user's current workflow

#### Common use cases

- Server-side error that does not affect the current workflow
- Error occurs on a job that is running in the background

#### How to present it to the user

- Error notifier

#### Best practices

- Should not be on a timer

![Error notifier example](images/patterns/errors/notifier-error.svg)

---

## User provides incorrect or missing information on a form<a id="form-validation"></a>

#### How to present it to the user

- Error well and inline validation (Detailed information can be found on the [form pattern documentation](https://zui.zywave.com/patterns/forms/#validation "Link to form documentation").)

### Well

#### Location

- Directly above the submit button if the page does not reload
- At the top of the page if the page reloads

#### Best practices

- Message should remain general, informing the user to review errors

![Well near submit button on form](images/patterns/errors/submit-button-well-error.svg)

### Inline validation

#### What it does

- Easily indicates to the user which fields contain errors
- Fields with errors should be highlighted red
- Uncontained text appears below or next to the field containing an error

![inline validation example](images/patterns/errors/inline-message-error.svg)

#### Preventive measures

- Always include a label on input fields
- Provide specifics about requirements (i.e. 5 or 9 digit zip code)
- Indicate required fields
- Include character limit if applicable

---

## User provides incorrect or missing information on a focused state form

#### How to present to the user

- Error notifier and inline validation

#### Best practices

- Message in the notifier should remain general, informing the user to review errors
- The notifier should be dismissible, but not on a timer.

![error notifier in a focused state form](images/patterns/errors/focus-form-error-notifier.svg)

---

## Error validating a file for upload

This occurs before the file is processed and notifies the user of an issue, such as an invalid file type or size.

#### How to present to the user

- Inline validation

#### Best practices

- Be specific and inform the user about what is wrong or how to fix the issue
- File should remain in the input field for reference

#### Preventive measures

- Provide file size restrictions either in page description or as uncontained text below the field
- Provide accepted file types

---

## Error when uploading a file

#### How to present to the user

- Follow guidelines for errors within a [form](#form-validation)
  - Well/notifier
  - Inline validation

#### Best practices

- If possible, inform the user why the file failed to upload
- The file can be removed allowing the user to upload a different file in it's place

![inline file upload error](images/patterns/errors/inline-message-file-upload-error.svg)

---

## Error uploading a file - multiple file upload

#### How to present to the user

- Red x status indicator icon in upload drawer
  ![file upload drawer](images/patterns/errors/upload-drawer-error.svg)
- Notifier (when upload happens behind the scenes)
  ![file upload notifier error](images/patterns/errors/upload-notifier-error.svg)

---

## Error when editing a table

#### How to present to the user

- Cells containing errors are highlighted
- On hover, tooltip informs the user of the error
- Validates after focus is shifted off of cell OR upon save
- Multiple cells can be highlighted at the same time

#### Best practices

- Cell should be filled with transparent red to avoid any confusion on which cells are highlighted
- Tooltip text should be short and precise

#### Preventive measures

- Provide specifics about requirements (i.e. 5 or 9 digit zip code)
- Provide ghost text when cell is not filled out

![Table validation](images/patterns/errors/editable-table-validation.svg)

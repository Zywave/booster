---
layout: documentation
title: Builder
hideToc: false
---
<!--StartFragment-->

A Builder is a workflow used to construct, edit and organize to build presentable content, for example, a policy renewal proposal.

## Usage

A Builder divides the work of creating content into a sequence of steps, which allows the user to focus their attention on each task individually.

<hr>

## Steps

There are 4 common steps used in the Builder pattern. Choose the steps that best fit your desired workflow. Following the steps outlined in this pattern creates a consistent and familiar document creation process for users.

The 4 steps include:

* Kickoff
* Setup
* Data Entry
* Generation

For detailed documentation on our Builder steps, view the [Builder design specs](https://xd.adobe.com/view/918e997c-d5e3-4c4c-8cb5-491b6aeac31c-c4dd/grid).

<br>

### **Kickoff** (optional)

The first step is the Kickoff. It contains a high-level action to start the workflow. Kickoff can take place within the tool or from an account page.

Consider the following when configuring the Kickoff step.

* How will the Builder launch?
* Does the user need to return to a home page to view a previously created project?

<br>

Typically page-level actions should be placed in the top right corner to start a workflow. Use a table when the user needs to return to a previous project. This is also helpful for downloading, editing and duplication of projects. If the table is empty, use an empty state in the table.

![Kickoff](/images/kickoff.png)

<br>

Actions within a card can be used to place more emphasis on the high-level action.

![Kickoff card](/images/kickoff-–-2.png)

<br>

Actions within multiple cards can also be used when there is more than one entry point/path to the kickoff.

![Kick off multiple cards](/images/kickoff-–-3.png)

<br>

### Setup

The Setup step is where you can apply project-level settings and manage what content or data will be in the project. . A form is typically used for inputting these high-level details such as account, title, and branding.

![Setup](/images/setup.png)

<br>

Part of the setup step may be to manage sections that will be included in the project. A table should be used when these sections can be reordered and managed individually. 

![Setup sections](/images/setup-–-2.png)

<br.

Drag and drop can be a helpful feature in organizing data when hierarchy is relevant to the output. 

![Drag and drop](/images/setup-–-3.png)

<br>

### Data entry

Data entry is where users will most likely be spending most of their time. This layout will have the most variety in templates based on the project. In this step, users can input data, organize, add/edit content. 

In a well-designed Builder, users will only see the steps and the information relevant to their situation.

Use a progress indicator when the user needs the ability to go back and forth within the workflow. Only use a progress indicator if you know exactly how many steps are in the process.

![Data entry](/images/data-entry.png)

<br>

Use an action bar when the user needs to take ordered steps to finish a workflow. The user is not allowed to skip steps. 

For more information see **Action bar documentation.**

![Data entry action bar](/images/data-entry-–-2.png)

<br>

Single-column editor

![Single-column editor](/images/data-entry-–-3.png)

<br>

Two-column editor

![Two-column editor](/images/data-entry-–-4.png)

<br>

Use a fixed side panel on the right side when users need to manage selections in the workflow. This also helps to give users easy access to components or tools while still having a work area.

![Fixed panel](/images/data-entry-–-5.png)

<br>

### Generation

The final step in the document/presentation creation process is to generate an output. The user will need an action to begin the Generation step. 

Use words similar to download or generate. Although, "generate", should typically be used when the user has to perform an action, or additional steps need to occur before the user receives the output.

\
<!--EndFragment-->
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

![Generate actions](/images/generation.png)

<br>

If there is no preview available during the data entry step, consider implementing a way for the user to preview the final document prior to generating the output. 

Full-page preview 

![Full-page review](/images/generation-–-2.png)

<br>

Preview in a dialog box to focus the user's attention on the preview itself and not to distract the user with other options. 

![Dialog box preview](/images/generation-–-3.png)

<br>

Generate an output in a dialog box when a focused state is not present.

![Dialog box generate](/images/generation-–-4.png)

<br>

Generating an output in a form

![Form generate](/images/generation-–-5.png)

<br>

When generating an output there may be a need for a loading experience. Loading can be shown in various different ways: full page loading, progress bar in a notifier, progress circle in a dialog box, etc. When an email invite is being mailed, there may be no need for loading.

Consider the following when configuring loading.

* How long will the user wait before an output is generated?
* Which page or component is the user clicking on an action to produce an output?

<hr>

## Behavior

### **Exiting and returning**

* Ideally, a user would complete a step flow in a single, uninterrupted session. However, sometimes, the user may want or need to leave before completing the step flow.

  * Designers and developers should decide whether or not the progress of an incomplete flow will be saved if exiting before completion.
  * When the user clicks the exit button, a dialog will pop up to alert the user of the consequences of leaving (saving or not saving data) and asking for confirmation of the action.
* A deep link into a step flow should take the user to the intro screen or if there is no intro, the first step of the flow.
* The action on the completion screen always saves the user's work.
* If returning to a saved step flow to edit or review information, you may want to include a text link that allows the user to skip straight to the end, or to the step flow's review page. This link would appear after reaching the end and returning to a previous step or exiting and returning.

<hr>

<!--StartFragment-->

## Responsiveness

When on a mobile device (breakpoint ≤480px) the *Builder*...

<hr>

## \
Alternative considerations

* Use [expanders](https://zui.zywave.com/components/zui-expanders) to break long blocks of content into separate sections with independent workflows.
* Use [tabs](https://zui.zywave.com/components/zui-tabs) to break content into distinct workflows that can be completed independently, or to offer alternative views of the same information.

<!--EndFragment-->

<!--EndFragment-->
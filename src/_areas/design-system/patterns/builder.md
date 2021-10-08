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

<!--EndFragment-->
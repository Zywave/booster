---
title: Tags
subtitle: Visually distinct indicators that denote specific attributes or states
hideToc: false
api: https://cdn.zywave.com/@zywave/zui-tag@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-tag@next/docs/demo.html
mainComponentName: zui-tag
includedElements:
  - zui-tag
statusOverride: unstable
---
<docs-note>
This component is a new entry into the Booster lineup, and its documentation is still being drafted. Hang tight!
</docs-note>



## **Usage**

Tags are labelled objects designed to stand out for the purpose of easy categorization.

They are often seen in the context of lists and tables in order to highlight certain differences between their contents. Using Tags in a table draws attention to specific pieces of information.

![Image depicting a typical Tag usage within a table](/images/example-tags-in-table.svg)



- - -

## **Anatomy**

For a more detailed breakdown of spacing and sizing, view the **design specs [*link needed*]**.

![Image with anatomy of zui-tag](/images/anatomy-tag.svg)

1. **Container:** the container of the Tag
2. **Label:** the text signifying the explicit meaning of the Tag



- - -

## **Placement**

Tags are usually placed right next to the name of whatever they are categorizing, or they are placed in a distinct column in the context of a table.

There should typically be 10px of spacing between a tag and other elements, including other tags.

If there are multiple tags being used, they should ideally be organized in one row unless there isn’t enough space.



- - -

## **Behavior**

Tags are static objects that should not be used an interactive elements.



- - -

## **Best practices**

<docs-grid columns="2">

<div>

<docs-do>
Make the tag text as concise as possible while ensuring that users can still clearly understand what they are indicating.
</docs-do>

</div>

<div>

<docs-do-not>

Use text labels that are more than 15 characters or that contain more than two words

</docs-do-not>

</div>

<div>

<docs-do>
Try to use tag colors that make sense given the subtext/connotations of terms used (e.g. tags meant to convey something urgent/unfavorable should ideally be red).
</docs-do>

</div>

<div>

<docs-do-not>

Use more than six tags together at a time

</docs-do-not>

</div>

<div>

<docs-do>

Try to use tags colors in a way that is consistent with how they are used elsewhere in the Zywave suite.

</docs-do>

</div>

<div>

<docs-do-not>

Use any tag colors other than the eight Booster-approved color pairings, which have all been tested for optimal contrast that is accessible to users with vision impairments.

</docs-do-not>

</div>
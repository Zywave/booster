---
title: Spinners
subtitle: Visual representation of something happening behind the scenes when
  loading, uploading, or downloading.
api: https://cdn.zywave.com/@zywave/zui-spinner@latest/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-spinner@latest/docs/demo.html
mainComponentName: zui-spinner
includedElements: []
---
## Usage

<!--StartFragment-->

A spinner informs users that content or data is being loaded. Use Spinners if the process takes less than five seconds to load.

<!--EndFragment-->

![Spinners usage](/images/spinners-usage..svg)

- - -

## Anatomy

![Spinners anatomy](/images/spinners-anatomy.svg)

<!--StartFragment-->

1. **Loading indicator**: The animated element that signals active loading.
2. **Track**: The static area that the loading indicator moves on top of.
3. **Supporting text** (optional): Text that informs the user of the action. Ex: “Loading…”

For a more detailed breakdown of spacing and sizing, [view the design specs.](https://xd.adobe.com/view/e1a407d7-aa6c-4818-93ae-182335ba4403-b4f7/grid)

<!--EndFragment-->

- - -

## Types

<!--StartFragment-->

### Basic spinner

Basic spinners do not include any specific text. They simply indication that some acting is taking place behind the scenes.

<!--EndFragment-->

![Basic spinner](/images/basic-spinner.svg)

<!--StartFragment-->

<br>

### Custom text spinner

Custom text spinners include specific text to give the user context as to what is happening behind the scenes. Examples for custom text could be “Loading..” or “Preparing report…”

<!--EndFragment-->

![Custom text spinner](/images/custom-text-spinner.svg)

<!--StartFragment-->

<br>

- - -

## Best practices

#### Placement

<docs-grid columns="2">

<div>

![Spinner placement best practice do](/images/spinner-placement-best-practice-do.svg)

<docs-do>

Accompany a Determinate progress bar with clear and concise messages that inform users about the task being performed.
</docs-do>

</div>

<div>

![Spinner placement best practice do not](/images/spinner-placement-best-practice-do-not.svg)

<docs-do-not>

Avoid using a Determinate progress bar without any accompanying information.
</docs-do-not>

</div>

</docs-grid>

<br>

- - -

## Alternate considerations

<!--StartFragment-->

* Consider using a `Progress bar` if the process takes more than five seconds or the space is large enough for a progress bar.

<!--EndFragment-->
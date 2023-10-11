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

A Spinner informs users that content or data is loading. Use Spinners if the process takes less than five seconds to load.

<!--EndFragment-->

![Spinners usage](/images/spinner_usage.svg)

- - -

## Anatomy

![Spinners anatomy](/images/spinners-anatomy.svg)

<!--StartFragment-->

1. **Loading indicator**: The animated element that signals active loading.
2. **Track**: The static area that the loading indicator moves on top of.
3. **Label** (optional): Text to provide clear feedback to users that the system is actively working on their request. Ex: “Loading...” or “Please wait”. The placement and size of this text should adapt to the specific context.

For a more detailed breakdown of spacing and sizing, [view the design specs.](https://xd.adobe.com/view/417dc130-5bd5-4b2f-a07d-b5266d1f1ad0-142e/grid/)

<!--EndFragment-->

- - -

## Behavior

<!--StartFragment-->

### Inform users

<!--StartFragment-->

Informing your users that a process is taking place will help prevent them from moving on or assuming there is a bug. Include a label with a Progress bar to add context. Use simple, meaningful text for example “Loading your policies” that inform users.

<!--EndFragment-->

<!--EndFragment-->

<!--StartFragment-->

<br>

![Spinners behavior](/images/spinner-behavior.svg)

<!--StartFragment-->

<br>

- - -

## Best practices

#### Placement

<docs-grid columns="2">

<div>

![Spinner placement best practice do](/images/spinner-placement-best-practice-do.svg)

<docs-do>

<!--StartFragment-->

Center the Spinner on the area that is loading.

<!--EndFragment-->

</docs-do>

</div>

<div>

![Spinner placement best practice do not](/images/spinner-placement-best-practice-do-not.svg)

<docs-do-not>

Avoid placing the Spinner in random locations.
</docs-do-not>

</div>

</docs-grid>

<br>

- - -

## Alternate considerations

<!--StartFragment-->

* Consider using a `Progress bar` if the process takes more than five seconds or the space is large enough for a progress bar.

<!--EndFragment-->
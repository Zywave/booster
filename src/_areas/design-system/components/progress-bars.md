---
title: Progress bar
subtitle: Visually representation of the progress of a task or loading process
  through a horizontal bar that fills up gradually.
api: https://cdn.zywave.com/@zywave/zui-progress@latest/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-progress@latest/docs/demo.html
mainComponentName: zui-progress
includedElements: []
---
## Usage

A Progress bar informs users about the status of ongoing processes, the estimated time of how long a process will take, or if a request is being executed. 

Use a Progress bar for medium wait times (3–10 seconds) to display loading progress and engage users. For longer waits, over 10 seconds, provide visuals such as a label or illustration indicating progress to keep users engaged throughout the extended waiting period.

![Progress bar usage](/images/progress-bar_usage.svg)

- - -

## Types

Progress bars come in two types: indeterminate and determinate. The technical possibilities of the situation where it is being implemented will determine which type of Progress bar should be used.

#### Indeterminate

Indeterminate Progress bars are best used when the duration or progress of a process is unknown or variable. They reassure users that the system is working and prevent the perception of delays as errors or failures.

Indeterminate progress bars move along a fixed track continually until the process is complete.

![Progress bar Indeterminate indicators](/images/progress-bar_indeterminate_indicator.svg)

<br>

#### Determinate

Determinate Progress bars should be used when it is possible to display how long a process will take, and how far it has progressed. A percentage indicator can be included when the duration or progress can be measured or estimated. They visually represent completed or remaining work, allowing users to gauge progress and manage expectations. 

Determinate progress bars expand to fill a fixed track from left to right until the loading process is complete.

![Progress bar Determinate indicators](/images/progress-bar_determinate_indicator.svg)

- - -

## Anatomy

#### Indeterminate

![Progress bar Indeterminate anatomy](/images/progress-bar_indeterminate_anatomy.svg)

1. **Bar indicator:** The visual element that represents progress. It animates in and out from left to right.
2. **Track:** The static area that the bar indicator moves within.

<br>

#### Determinate

![Progress bar Determinate anatomy](/images/progress-bar_determinate_anatomy.svg)

1. **Label**: Text to provide clear feedback to users that the system is actively working on their request. Ex: “Loading...” or “Please wait”. The placement and size of this text should adabt to the specific context.
2. **Percentage**: A numeric indicator, typically displayed above or within the Progress bar, showing the completion percentage.
3. **Bar indicator:** The visual element that represents progress. It fills up horizontally as the task progresses.
4. **Track:** The static area that the bar indicator moves within. It provides a visual reference for how much of the process remains incomplete.

See the [Design specs](https://xd.adobe.com/view/334e7f6d-d129-4f38-8d09-a0488d47ca76-661d/grid) for detailed sizing and spacing information

- - -

## Behavior

#### Displaying a percentage

The percentage label updates in real-time to reflect the current progress. When the task is complete, the progress bar reaches 100%, indicating the task's successful execution.

![Progress bar display percentage](/images/progress-bar_percentage.svg)

<br>

#### Inform users

Informing your users that a process is taking place will help prevent them from moving on or assuming there is a bug. Include a label with a Progress bar to add context. Use simple, meaningful sentences for example “Loading your policies” that inform users.

![Progress bar inform users](/images/progress-bar_inform_users.svg)

<br>

#### Set expectations

When using Determinate Progress Bars, ensure that the progress shown accurately reflects the actual time needed for the task to be completed. For example, If a file upload typically takes 20 seconds, the Progress bar should fill accordingly, giving users an accurate sense of progress. Avoid Progress bars that fill quickly and then stall, giving users a false sense of completion.

- - -

## Responsiveness

The Progress bar should adapt to different screen sizes and orientations, maintaining its visibility and usability.

![Progress bar responsiveness](/images/progress-bar_responsiveness.svg)

- - -

## Best practices

#### Labeling

<docs-grid columns="2">

<div>

![Progress bar labeling best practice do](/images/progress-bar_label_do.svg)

<docs-do>

Accompany a determinate Progress bar with clear and concise messages that inform users about the task being performed.
</docs-do>

</div>

<div>

![Progress bar labeling best practice don't](/images/progress-bar_label_dont.svg)

<docs-do-not>

Avoid using a determinate Progress bar without any accompanying information.
</docs-do-not>

</div>

</docs-grid>

- - -

## Alternate considerations

* Use `Spinners` if the loading process takes less than 5 seconds or when the available space requires a smaller loading indicator.
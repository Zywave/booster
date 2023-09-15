---
title: Progress bars
subtitle: A progress bar visually represents the progress of a task or loading
  process through a horizontal bar that fills up gradually.
api: https://cdn.zywave.com/@zywave/zui-progress@latest/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zui-progress@latest/docs/demo.html
mainComponentName: zui-progress
includedElements: []
---
## Usage

Progress bars inform users about the status of ongoing processes, the estimated time of how long a process will take, or if a request is being executed. 

Use progress bars for medium wait times (3–10 seconds) to display loading progress and engage users. For longer waits, over 10 seconds, provide clear interfaces with interactive elements, combining background tasks and storytelling to keep users engaged throughout the extended waiting period.

![Progress bar usage](/images/progress-bar_usage.svg)

- - -

## Anatomy

![Progress bar usage](/images/progress-bar_anatomy.svg)

1. **Label** (optional): Text to provide clear feedback to users that the system is actively working on their request. Ex: “Loading...” or “Please wait”
2. **Percentage** (optional): A numeric indicator, typically displayed above or within the progress bar, showing the completion percentage.
3. **Bar indicator:** The visual element that represents progress. It fills up horizontally as the task progresses.
4. **Track:** The static area that the bar indicator moves on top of and acts as a fixed visual reference of what the total length and duration of the process could be.

See the [Design specs](https://xd.adobe.com/view/ef2f902b-219f-4e41-8bba-2bf079fc5969-ba7c/grid) for detailed sizing and spacing information

- - -

## Types

#### Indeterminate indicators

Indeterminate indicators express an unspecified amount of time. Use indeterminate indicators when the duration or progress of a process is unknown or variable. They reassure users that the system is working and prevent the perception of delays as errors or failures.

![Progress bar usage](/images/progress-bar_indeterminate_indicator.svg)

Indeterminate progress bars move along a fixed track continually until the process is complete.

<br>

#### Determinate indicators

Determinate indicators display how long a process will take, and how far it has progressed. Utilize determinate indicators when the duration or progress can be measured or estimated. They visually represent completed or remaining work, allowing users to gauge progress and manage expectations. 

![Progress bar usage](/images/progress-bar_determinate_indicator.svg)

Determinate progress bars fill from 0 to 100%.

- - -

## Behavior

#### Displaying a percentage

The percentage label updates in real-time to reflect the current progress. When the task is complete, the progress bar reaches 100%, indicating the task's successful execution.

IMAGE

<br>

#### Inform users

Informing your users will make your users wait or else they may assume it is a bug and move on to other websites. Include a label with a progress bar to add context. Use simple, meaningful sentences for example “Linking your bank account” that inform users.

![Validation do](/images/progress-bar_inform_users.svg)

<br>

#### Set expectations

Ensure that the progress bar accurately reflects the actual time needed for the task to be completed. For example, If a file upload typically takes 20 seconds, the progress bar should fill accordingly, giving users an accurate sense of progress. Avoid progress bars that fill quickly and then stall, giving users a false sense of completion.

- - -

## Responsiveness

The progress bar should adapt to different screen sizes and orientations, maintaining its visibility and usability.

IMAGE

- - -

## Best practices

#### Labeling

<docs-grid columns="2">

<div>

![Validation do](/images/progress-bar_label_do.svg)

<docs-do>

Accompany the progress bar with clear and concise messages that inform users about the task being performed.
</docs-do>

</div>

<div>

![Validation don't](/images/progress-bar_label_dont.svg)

<docs-do-not>

Avoid using a progress bar without any accompanying information.
</docs-do-not>

</div>

</docs-grid>

- - -

## Alternate Considerations

* Use `Spinners` if the process takes less than 5 seconds to load and when space allows for a smaller loading indicator.
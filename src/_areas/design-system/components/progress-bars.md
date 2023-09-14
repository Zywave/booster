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

- - -

## Anatomy

1. **Bar:** The visual element that represents progress. It fills up horizontally as the task progresses.
2. **Label/Percentage** (optional): A numeric indicator, typically displayed above or within the progress bar, showing the completion percentage.
3. **Loading Text or Message** (optional): Text to provide clear feedback to users that the system is actively working on their request. Ex: “Loading...” or “Please wait”

- - -

## Types

#### Indeterminate indicators

Indeterminate indicators express an unspecified amount of time. Use indeterminate indicators when the duration or progress of a process is unknown or variable. They reassure users that the system is working and prevent the perception of delays as errors or failures.

#### Determinate indicators

Determinate indicators display how long a process will take, and how far it has progressed. Utilize determinate indicators when the duration or progress can be measured or estimated. They visually represent completed or remaining work, allowing users to gauge progress and manage expectations.

- - -

## Behavior

#### Default Behavior

The progress bar fills gradually from left to right as the task progresses.

#### Displaying a percentage

The percentage label updates in real-time to reflect the current progress. When the task is complete, the progress bar reaches 100%, indicating the task's successful execution.

#### Inform users

Informing your users will make your users wait or else they may assume it is a bug and move on to other websites. Include a label with a progress bar to add context. Use simple, meaningful sentences for example “Linking your bank account” that inform users.

**For long wait times (10+ seconds)**, provide a clear interface that showcases progress, allows user interaction, and reduces anxiety. Utilize a combination of strategies such as a shimmer effect, background tasks, and storytelling/tips to engage users throughout the extended wait.

<!--EndFragment-->

- - -

## Responsiveness

The progress bar should adapt to different screen sizes and orientations, maintaining its visibility and usability.

- - -

## Alternate Considerations

* Use `Spinners` if the process takes less than 5 seconds to load and when space allows for a smaller loading indicator.
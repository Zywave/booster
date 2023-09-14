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



## Anatomy

1. **Bar:** The visual element that represents progress. It fills up horizontally as the task progresses.
2. **Label/Percentage** (optional): A numeric indicator, typically displayed above or within the progress bar, showing the completion percentage.
3. **Container:** The enclosing element that holds the progress bar and related information



## Anatomy

The progress bar should adapt to different screen sizes and orientations, maintaining its visibility and usability.



## Alternate Considerations

#### Indeterminate Progress

In cases where the exact duration of a task is unknown, or If the process takes less than 5 seconds to load, use `Spinners` instead.
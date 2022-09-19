---
layout: blog
type: blogPost
title: Release Notes - September 2022
description: Inputs get prefixes and suffixes; analytics adds network connection
  information; and more!
date: 2022-09-30T01:00:49.459Z
hideToc: false
tags:
  - Release Notes
---
## ZUI Input gets prefixes and suffixes

## Exposing network connection information via Zywave Analytics
[Changeset](https://gitlab.com/zywave/app-platform/devkit/web-sdk/zywave-api-toolkit/-/merge_requests/315)

As individuals who work on software for a living, it's easy to assume that they way we interface with our applications while testing them is consistent with the experience of our users, but that's not always the case.

What devices are our users using? Where are they physically when they are accessing our features? Are they in a dedicated office, with an ethernet connection to the corporate network? Are they working from home, maybe from their bedroom, connected to a wireless router downstairs? Or are they on the road, using their phone to shoot off a quick message to a client they will be visiting that day?

With some updates to Zywave Analytics, we hope to offer you some insight into answering those questions. Now, all web-based events that flow through `<zywave-analytics>` will include the following properties:

| Property name           | Details                                                                                                                                                           |
|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `networkRtt`            | The estimated round-trip time of the connection, measured in ms.                                                                                                  |
| `networkDownlink`       | Estimated bandwidth, measured in Mbps.                                                                                                                            |
| `networkDownlinkMax`    | Maximum bandwidth, measured in Mbps, for the network connection hardware.                                                                                         |
| `networkReducedData`    | Indicates that the user has explicitly enabled a setting in their browser to reduce data usage (e.g. mobile connections)                                          |
| `networkConnectionType` | Indicates how the user's device is connected to the network (e.g. ethernet vs wifi).  <br>**Note:** This will commonly be omitted due to device privacy concerns. |

Additionally, with this release, App Platform has a Heap report to compare Min/Average/Max downlink connections so that we can get a good snapshot of our users. Feel free to take a look, and repurpose for your team's needs!

<!-- TODO @Pat insert screenshot of Heap report + link to report https://heapanalytics.com/app/env/2837777013/graph/chart/Network-Bandwidth-Comparison-Report-2919213/edit/2923472 -->


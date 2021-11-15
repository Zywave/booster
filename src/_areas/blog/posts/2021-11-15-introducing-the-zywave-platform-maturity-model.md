---
layout: blog
type: blogPost
title: Introducing the Zywave Platform Maturity Model
description: Increasing the cohesiveness of the end-user experience of the
  entire Zywave ecosystem.
date: 2021-11-15T17:03:03.797Z
hideToc: false
tags:
  - Meta
---
Over the years, Zywave has rapidly transformed from a set of disconnected products with separate logins into a more unified offering, where our customers are buying Zywave instead of a hodge-podge of point solutions. Features like [Zywave Authentication](#TODO), [Zywave Shell](https://booster.zywave.dev/application-framework/components/shell/?tab=usage), [Licensing](#TODO) and [Access Control](#TODO) have helped prepare our applications for a larger unification. It is now up to our applications to utilize these tools to improve the experience of all Zywave users.

## Glossary of terms
Throughout this process, you're likely to encounter terminology that might be unclear to you. To help, we've provided a quick glossary in the expander below.

<details><summary>Click here to view terms</summary>
<dl>
<dt>Zywave Authentication</dt>
<dd>A centralized login experience, where users can utilize a single login and access all of their Zywave solutions; available via <a href="https://auth.zywave.com">https://auth.zywave.com</a>
</dd>
<dt>Tenancy</dt>
<dt>Tenancy model</dt>
<dd>
The segmentation of data to enable Zywave to provide a multi-tenant solution; e.g. Agency A should not be able to see Agency B's data, and vice versa.
</dd>
<dt>Access control</dt>
<dd>
The further subdivision of permissions, allowing a single tenant to restrict or allow access to certain features of the Zywave platform; e.g. Joe White at Agency A should not be able to import accounts, and only access content in Zywave CMS.
</dd>
<dt><a href="https://booster.zywave.dev/design-system/components/shell/?tab=usage">ZUI Shell</a></dt>
<dd>A set of components that provide the design-system compliant implementation of the wrapping container of Zywave applications.
</dd>
<dt><a href="https://booster.zywave.dev/application-framework/components/shell/?tab=usage">Zywave Shell</a></dt>
<dd>
An API-driven component that generates a ZUI Shell implementation to ensure consistency of data and navigation in any Zywave application.
</dd>
</details>

<hr/>

## Defining Platform Maturity
The Zywave platform is both wide and deep. While the tools we have have simplified the process compared to where Zywave was even two years ago, it requires an investment from our product teams to elevate our applications to higher standards —or understand what their users might be missing out on.

Zywave's Platform Maturity Model spans four different categories, each having three different stages. A solution can be in any stage across any category. It's a very likely state to be Stage 3 in one category, and Stage 1 in another.

### The Categories of Platform Maturity
#### Authencation and Authorization
#### User Experience and Design
#### Data and APIs
#### Infrastructure and Security

### The Stages of Platform Maturity
Before we dive in, some rules must be set:
1. A solution can only be said to be at a certain stage if all requirements in that stage are met
1. A solution can only be said to be at a certain stage if all requirements of lower stages are met

Additionally, it is worth noting that each stage does not reflect level of difficulty or effort to achieve. In other words, the work to improve an app from Stage 2 to Stage 3 may actually be easier than going from Stage 1 to Stage 2.

#### Stage 0
This stage is not a stage to target, but provided as a reference of what a solution that is completely distinct from Zywave. To our users, the only thing tying a solution at this stage to the rest of Zywave is a contract. 

#### Stage 1
This stage represents our bare minimum. Any application, from built at Zywave or during a per-acquisition phase should strive to minimally meet the requirements of this stage.

This is not to say that this stage is trivial. But the immediate gains should be noticeable to our end-users. Often, the promotion of an app to this stage across all levels is a marketable achievement. 

An app at this stage feels like a part of the Zywave purchase, similar to an add-on. But its integration into the bigger Zywave picture is lacking (if not non-existent).

#### Stage 2
By the time your app is at this stage, you should notice how your app fits into the Zywave ecosystem as a whole. You now have single sign on with Zywave, consistent UI/UX, etc.  A user can get to your app from another Zywave app easily and they should understand that this is a part of Zywave. Many of Zywave's applications have gotten to this stage, and enable the Zywave Cloud strategy. There might be some quirks here and there, and there's still room to improve. But congrats, you have a Zywave app!

#### Stage 3
The "One Zywave" goal. Where a user could have any segment of features due to Zywave's flexible licensing structure. At the end of the day, the user's flow is embedded into the Zywave app experience. Sending a campaign to your clients, and realize a client is missing? Never fear, you can quickly access account management without having to hunt.

This is the vision of the Zywave Platform Standardization project.

<hr/>

## Next steps
Curious what stage your solutions are at? Use our [Zywave Platform Standardization Checklist](https://booster.zywave.dev/platform-standardization-form/) to find out.


We'll be asking all teams to fill out this form for every separate app they operate. 


## Resources
- Backstage offers a good collection of guides and documentation that delivery teams can utilize to understand how to best succeed: [https://backstage.zywave.com/handbook](https://backstage.zywave.com/handbook)

---
title: Zywave Shell
subtitle: Defines a Zywave-standard application for consistent design and navigation.
api: https://cdn.zywave.com/@zywave/zywave-shell@latest/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zywave-shell@latest/docs/demo.html
mainComponentName: zywave-shell
includedElements:
  - zywave-shell
---
## What is Zywave Shell?

Zywave Shell enables applications to have a rich, consistent experience across any application. It builds each subcomponent of [ZUI Shell](/design-system/components/shell) for you, ensuring your users can navigate anywhere in the Zywave ecosystem. 

Bring your application's contents and let Zywave Shell do the rest!

---

## Prerequisites

* Your application **must** be authenticated with Zywave Auth (e.g., <https://auth.zywave.com>).

  * If your application cannot or does not use Zywave Auth, then you cannot use Zywave Shell. Please use [ZUI Shell](/design-system/components/shell/) instead.
* If you cannot or are not using [Zywave API Proxy](/application-framework/components/api-proxy/?tab=usage), the following scope is required:

  * `api.shell`

<docs-note>When do I use the Zywave API Proxy element `<zywave-api-proxy>`? [Check here.](/application-framework/components/api-proxy/?tab=usage)</docs-note>

---

## Built-in functionality

### Cross-suite navigation

Zywave has a large offering of features and web applications for our users. By using Zywave Shell, the side nav, topbar app launcher, and associated help resources are provided for you.

<docs-note>What if the side nav is not appropriate for my use-case? You have the ability to override it via the `nav` slot. [Check out how to override the side nav here.](/application-framework/components/shell/?tab=demos#override-side-nav)</docs-note>

<docs-spacer size="small"></docs-spacer>

### Topbar brand

Promoting an agency's brand is always important to our users, whether they work at or are a client of the agency. Wherever possible, we want the agency's brand to be promoted over the Zywave brand.

By using Zywave Shell, Zywave theming is applied out of the box.

<docs-note>Disclaimer: At the moment, custom theming for agency users is not applied by default. When this does happen, all consumers of Zywave Shell will receive this feature.</docs-note>

<docs-spacer size="small"></docs-spacer>

### User information

Our users, and who they are, are immensely important for us to understand. Equally as important is for our users to know who they are currently logged in as (or impersonating as for Zywave employees) and what tenant they are associated with.

Getting this right is difficult, but Zywave Shell will retrieve all of the appropriate information about our users (such as their name, tenancy information, and notifications) and present it consistently.

<docs-spacer size="small"></docs-spacer>

### Analytics baked in

Zywave uses a few third-party services to analyze how our users interact with our offerings. This information is immensely important to us so we can provide the best experience possible. Zywave Shell will ensure the proper analytics scripts are loaded and configured correctly.

<docs-note>When do I use the Zywave Analytics element `<zywave-analytics>`? [Check here.](/application-framework/components/analytics)</docs-note>

<docs-spacer size="small"></docs-spacer>

### Footer boilerplate

Zywave Shell will ensure that a consistent footer is applied to all Zywave properties.

Should you need to extend the footer with extra legal jargon or disclaimers, you'll want to make use of the `legalese` slot.

<docs-note>Note: While Zywave Shell *will* provide the copyright years for you as a fallback, it is required that your application supply the `copyright-year` attribute with the server-side provided year of the current date. Client-side dates are not a reliable source.</docs-note>

---

## Multi-profile support

Zywave Shell, by default, will support the active profile type of the currently authenticated user of your application.

If your application can support multiple types of profiles, you can include them in Zywave Shell's `profile-switch-type-codes` attribute. This instructs Zywave Shell on how to construct actions for a user to take in order to switch from one profile to another, in the case where they have multiple profiles.
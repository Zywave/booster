---
title: Zywave Shell
subtitle: Defines a Zywave-standard application for consistent design and navigation.
api: https://cdn.zywave.com/@zywave/zywave-shell@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zywave-shell@next/docs/demo.html
mainComponentName: zywave-shell
includedElements:
  - zywave-shell
---
## General

Zywave Shell enables applications to have a rich, consistent experience across any application. It builds each subcomponent of [ZUI Shell](/design-system/components/shell) for you, ensuring your users can navigate anywhere in the Zywave ecosystem. 

Bring your application's contents, and let Zywave Shell do the rest!

## Required scopes

To utilize this component, applications must have the \`api.shell\` scope.

**Note:** This is not applicable when used with the [Zywave API Proxy](/application-framework/components/api-proxy/?tab=usage).

## Built-in functionality

### Cross-suite navigation

Zywave has a large offering of features and web applications for our users. By using Zywave Shell, the side nav, topbar app launcher, and associated help resources are provided for you.

**Note:** If side nav isn't appropriate for your use case, you have the ability to override this feature via the `nav` slot.

### Topbar brand

Promoting an agency's brand is always important to our users, whether they work at or are a client of the agency. Wherever possible, we want the agency's brand to be promoted over the Zywave brand.

By using Zywave Shell, Zywave theming is applied out of the box.

**Disclaimer:** At the moment, custom theming for agency users is not applied by default. When this does happen, all consumers of Zywave Shell will receive this feature.

### User information

Our users, and who they are, is immensely important for us to understand. Equally as important is for a user to know who they are currently logged in as (or impersonating as for Zywave employees) and what tenant they are associated with.

Getting this right is difficult. Thankfully, Zywave Shell will retrieve all of the appropriate information about a user (such as name, tenancy information, and notifications) and present it clearly and consistently.

### Support chat

As our company continues to grow, so does the amount of support we offer to our users. We provide [Live Chat](/application-framework/components/livechat/) support in our applications when applicable and make it available in a consistent location, but only through the use of Zywave Shell.

### Analytics baked in

Zywave uses a few third-party services to analyze how our users interact with our offerings. This information is immensely important to us so we can provide the best experience possible. Zywave Shell will ensure the proper analytics scripts are loaded and configured correctly.

Check out [Zywave Analytics](/application-framework/components/analytics) for more info.

### Footer boilerplate

Zywave Shell will ensure that a consistent footer is applied to all Zywave properties.

Should you need to extend the footer with extra legal jargon or disclaimers, you'll want to make use of the `legalese` slot.

**Note:** While Zywave Shell *will* provide the copyright years for you as a fallback, it is required that your application supply the `current-year` attribute with the server-side provided year of the current date. Client-side dates are not a reliable source.

## Multi-profile support

Zywave Shell, by default, will support the type of the active profile of the currently authenticated user of your application.

If your application can support multiple types of profiles, you can include them in Zywave Shell's `switch-profile-type-codes` attribute. This instructs Zywave Shell on how to construct actions for a user to take in order to switch from one profile to another, in the case where they have multiple profiles.
---
title: Zywave Shell
subtitle: Defines a Zywave-standard application for consistent design and navigation.
api: https://cdn.zywave.com/@zywave/zywave-shell@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zywave-shell@next/demo/index.html
mainComponentName: zywave-shell
includedElements:
  - zywave-shell
---
Zywave Shell enables applications to have a rich, consistent experience across any application. It builds each subcomponent of [ZUI Shell](/design-system/components/shell) for you, ensuring your users can navigate to anywhere in the Zywave ecosystem. 

Bring your application's contents, and let Zywave Shell do the rest!

## Built-in functionality

### Cross-suite navigation

Zywave has a large offering of features and web applications for our users. By using ZywaveShell, the side nav, topbar app launcher, and associated help documents are provided for you.

**Note:** If side nav isn't appropriate for your use case, you have the ability to override this feature via the `nav`slot.

### Top bar brand

Promoting an agency's brand is always important for our users, whether they themselves work at that agency or if they are a client of the agency instead. Wherever possible, we want the agency's brand to be promoted over the Zywave brand.

By using this component, Zywave theming is applied out of the box.

**Disclaimer:** At the moment of writing this, custom theme for agency users is not applied by default. But, when this does happen, all consumers of Zywave Shell will receive this feature.

### User information

Our users, and who they are, is immensely important for us to understand. Equally as important is for a user to know who they are currently logged in as (or impersonating, for Zywave employees) and what tenant they are associated with.

Getting this right is difficult; but, lucky for you, you don't need to worry about it. Zywave Shell will retrieve all of the appropriate information about a user (such as name, tenancy information, and notifications) and present it clearly and consistently.

### Support chat

As our company continues to grow, so, too, does the amount of support we offer to our users. Zywave Shell will provide [Live Chat](/application-framework/components/livechat/) when applicable and make it available in a consistent location.

### Analytics baked in

Zywave uses a few third party services to analyzer how our users interact with our offerings. This information is immensely important for us, and Zywave Shell will ensure the proper analytics scripts are loaded and configured correctly.

Check out [Zywave Analytics](/application-framework/components/analytics) for more info.

### Footer boilerplate

Footers are probably boring, and most people rarely notice them. Nevertheless, Zywave Shell will still ensure that a consistent footer is applied to all Zywave properties.

Should you need to extend the footer with extra legal jargon or disclaimers, you'll want to make use of the `legalese` slot.

**Note:** While Zywave Shell *will* provide the copyright years for you should you forget, it is required that your application supply the `current-year` attribute with a server-side provided year. Client-side date's are not a reliable source.

## Multi-profile support

Zywave Shell, by default, will support the type of the active profile of the currently authenticated user of your application.

If your application can support multiple types of users, that's ok! Shell has a `switch-profile-type-codes` attribute you can use. This instructs shell on how to construct actions for a user to take in order to switch from one profile to another, in the case where they have multiple.
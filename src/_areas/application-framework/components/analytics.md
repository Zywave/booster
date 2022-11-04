---
title: Zywave Analytics
subtitle: Defines a configurable way to communicate with our centralized
  analytics tracking.
api: https://cdn.zywave.com/@zywave/zywave-analytics@latest/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zywave-analytics@latest/docs/demo.html
mainComponentName: zywave-analytics
includedElements:
  - zywave-analytics
---
## General

Zywave currently uses three third-party tracking solutions to gather analytics from our applications: [Heap](https://heap.io/), [Appcues](https://www.appcues.com/), and [Google Analytics](https://analytics.google.com).

There are three ways to add the analytics scripts to Zywave applications:

1. Use [Zywave Shell](https://booster.zywave.dev/application-framework/components/shell/) and it will add the necessary analytics scripts to your application (recommended)
2. If you cannot use Zywave Shell, but your application has single sign-on (SSO) with Zywave or a Zywave subdomain (*.zywave.com):

   1. You should use Zywave Analytics in conjunction with Zywave API Proxy and
   2. Provide the URL to the Zywave API for your application to the api-base-url attribute: 

      ```html
       <zywave-api-proxy api-base-url="${API_BASE_URL}"></zywave-api-proxy>
       <zywave-analytics></zywave-analytics>
      ```
3. If you cannot use Zywave Shell or Zywave Analytics + the proxy:

   1. You must add Zywave Analytics to your application and
   2. Include the appropriate attributes and IDs for the analytics solutions you need (more on that below).

## Installing Zywave Analytics Manually

### Prerequisites

Before installing Zywave Analytics, check if Heap, Appcues, and Google Analytics scripts are already added to your application.

#### Do you already have tracking scripts in your application?

If any of these third-party tracking scripts are already in your application, there is a high chance of duplicate script loading/initialization when you install Zywave Analytics. To decrease the chances of duplication, we recommend you to:

1. Remove the third-party tracking scripts
2. Obtain the necessary IDs from Heap, Appcues, and/or Google Analytics, and
3. Follow the installation instructions below to add Zywave Analytics to your application in order to load these scripts instead

#### Do you not have any tracking scripts in your application currently?

If there are no third-party tracking scripts in your application and you want to add at least one via Zywave Analytics:

1. Obtain the necessary IDs you need from Heap, Appcues, and/or Google Analytics and
2. Proceed with the installation instructions below to add Zywave Analytics to your application in order to load the necessary scripts

#### Not sure how to obtain the necessary IDs from any of the analytics solutions for your application?

Reach out to the Heap and Appcues group at Zywave.

### Installation

Once you've gotten the necessary IDs for any or all of the analytics solutions, it's time to install Zywave Analytics in your application!

Fun fact: Zywave Analytics is a native web component and has no expectations of frameworks/libraries being used.

#### Step 1: Load the scripts

Add the following script tag to the head of your document in order to register the custom element <zywave-analytics> in browsers and allow your application to load the analytic scripts.

```html
<script type="module" src="https://cdn.zywave.com/@zywave/zywave-api-toolkit-bundle@latest/dist/bundle.js"></script>
```

#### Step 2: Add 'zywave-analytics' to your page

Add the following HTML (supplying attributes when needed, and removing when unnecessary) to your page:

```html
<zywave-analytics 
   appcues-account-id="${APPCUES_APP_ID}" 
   ga-tracking-id="${GOOGLE_ANALYTICS_TRACKING_ID}" 
   heap-app-id="${HEAP_APP_ID}" 
   identity="${UNIQUE_GLOBAL_IDENTIFIER}"></zywave-analytics>
```

This custom element will load the necessary analytics based on the attributes you've supplied.

We'll go over what the attribute identity is in the next step.

#### Step 3: Add 'identity'

The last thing you need to supply is a unique global identifier to the `identity` attribute in `<zywave-analytics>`. With the way the third-party scripts work, we need an identifier to help track a given individual across multiple sessions and devices. `identity` should be a guaranteed unique global identifier from your system. For Zywave, we use a combination of `profileTypeCode` and `profileId`, separated by a tilde (e.g., `identity="B~1234"`).

## Best practices

### Identity

`identity` should be consistent and unique based on the third-party project ids you are given because we want to reduce conflict between different systems in our analytics solutions—especially in Appcues. If you are given the Zywave Appcues account id that all Zywave products use, your identity should be identifiable as associated with your ecosystem. For example, Advisen might use `"Advisen~{userId}"` to not conflict with other systems such as Zywave's identifier `"B~1234"`.

### User properties

`userProperties` is an optional property and feature of Zywave Analytics. It allows you to supply extra information in the form of a JavaScript object (or, if coming in via HTML, as an HTML safe JSON string) about a user to these scripts. `userProperties` currently has three standardized fields:

* `givenName`: Commonly referred to as "first name"
* `familyName`: Commonly referred to as "last name"
* `email`: email address

Any extra fields provided are entirely up to you. However, if you use the same Appcues instance as Zywave, it is highly encouraged your field names are clearly confined to your product suite. For example, Advisen might want to supply the name of the agency. It would be recommended they do something like `advisenAgencyName: 'Awesome Agency'`.

### Third party IDs and testing

No one tests in production! Be sure to use the proper ids when testing this in a test environment. Transform these ids with production ones when deploying to a production environment. We have a test instance of Appcues, and most Heap projects are segmented into environments for just this purpose.

## Content Security Policy requirements

The 3rd party analytics tools we use come with their own requirements. When using Content Security Policies (CSP), you will need to ensure you configure your policies to support these tools. Click the links below to find relevant documentation:

1. [Heap](https://developers.heap.io/docs/web#content-security-policy-csp)
2. [Appcues](https://docs.appcues.com/article/234-content-security-policies)

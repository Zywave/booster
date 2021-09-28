---
layout: documentation
title: About Booster's Application Framework
subtitle: What is it and what does it do?
hideToc: true
---
The Application Framework, commonly referred to as the Zywave API Toolkit, is a collection of API-driven custom elements that help enforce consistency of:

* data and how it is presented
* navigation through the Zywave ecosystem
* interaction with Zywave platform componentry, such as support, profiles, etc.

This collection of components will have a heavy dependency on our [design system](/design-system/about/) to assist engineers in creating applications that fit snuggly into the Zywave value proposition. 

## How does the Application Framework assist you?

1. Greatly reduces time to build an application that feels like a part of the "one Zywave" philosophy.
2. Continual enhancements mean getting new features without lifting a finger to allow you to focus on what matters to your features.
3. End users get a consistent experience and increased visibility into what your application can offer them.

## What requirements are there to use these components?

The APIs underlying these components are built to Zywave's standards, and support Zywave-authenticated users. With some exceptions, applications consuming these components must also comply with the same Zywave standards and authentication. All components can be provided a bearer token for authentication purposes, or can be used in conjunction with the [Zywave API proxy](/application-framework/components/api-proxy/?tab=usage). If not consuming the proxy, relevant scopes most be authorized. These scopes are illustrated on each component's **Usage** section where applicable.

For an overview of what APIs are currently exposed that these components could communicate with, check out the [API documentation site](https://api.zywave.com/).
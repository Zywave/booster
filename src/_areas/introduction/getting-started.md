---
layout: documentation
title: Getting started
---

## Using the Booster Development Network components

You may follow the design standards and UI/UX best practices on this documentation site when building your applications. Design specs are included for most of our components if you'd like to create them from scratch, but we highly recommend using our custom elements because you will get continual enhancements without having to make changes on your end. We aim to simplify and streamline the process of building UIs by offering framework-agnostic custom elements that we ensure will follow Zywave's design standards, including mobile responsiveness. These custom elements are part of two major sections that make up the Booster Development Network: design system and application framework.

<docs-spacer></docs-spacer>

## Booster Design System

If you're looking for design guidance or components to build your user interfaces, look no further! We have **over 30 UI components** with extensive API and design documentation, as well as live demos with code snippets, to make incorporating Booster Design System into your applications effortless.

[Learn how to install our design system components into your application!](/design-system/developers/installation/)

<docs-spacer></docs-spacer>

## Booster Application Framework

Looking to integrate your applications into the Zywave suite? The Booster Application Framework provides a collection of API-driven components and tools to help you quickly build Zywave-integrated applications. It greatly reduces the time to build applications by making your applications look and feel like "one Zywave" application. One caveat with using these components is your applications must support Zywave Auth.

[Learn how to install our application framework components into your application!](/application-framework/developers/installation/)

<docs-spacer></docs-spacer>

## ZUI Shell vs Zywave Shell

We commonly get asked: what are ZUI Shell and Zywave Shell? How are they different? Which one should I use?

<docs-spacer size="small"></docs-spacer>

### ZUI Shell

ZUI Shell is part of the Booster Design System and is Zywave's design standard for how all our applications are laid out to provide a consistent experience to end users when they navigate across the Zywave suite.

There are four major sub-components that make up ZUI Shell:

- Topbar
- Sidenav
- Footer
- Content area

[Learn more about ZUI Shell.](/design-system/components/shell/?tab=usage)

<docs-spacer size="small"></docs-spacer>

### Zywave Shell

Zywave Shell is part of the Booster Application Framework and consists of API-driven components that heavily depend on the Booster Design System, specifically ZUI Shell, to automatically render a consistent layout and experience to end users. Bring your content and Zywave Shell will generate the rest! It is important that your applications **must authenicate with Zywave Auth** in order to reap all the benefits of Zywave Shell.

If your applications meets the requirements to use Zywave Shell, these are the built-in features they will receive:

- Auto-generated ZUI Shell
- Consistent cross-suite navigation
- Topbar branding
- User information retrieval and display
- Pre-configured analytics
- Consistent footer

[Learn more about Zywave Shell.](/application-framework/components/shell/?tab=usage)

<docs-spacer size="small"></docs-spacer>

### Differences between ZUI Shell and Zywave Shell

The best way to differentiate between ZUI Shell and Zywave Shell is you cannot use Zywave Shell without authenticating your application through Zywave Auth.

Both may appear the same visually because Zywave Shell actually auto-generates ZUI Shell and configures a lot of features beneath the surface for free.

<docs-spacer size="small"></docs-spacer>

![Venn diagram of ZUI Shell versus Zywave Shell](/images/introduction/zui-shell-vs-zywave-shell.png)

<docs-spacer size="small"></docs-spacer>

### Why use Zywave Shell?

Zywave Shell takes most of the configuration and decision-making out of your hands by preconfiguring many features:

| ZUI Shell | Zywave Shell | Similarities |
| -- | -- | -- |
| Zywave's design standards of the layout of a application | API-driven component that renders the shell of an application | Enforces Zywave branding |
| Use when an application cannot or does not use Zywave Auth | Use when an application authenticates with Zywave Auth | Provides a consistent suite-level user experience |
| | Auto-generates ZUI Shell | |
| | API-driven | | 
| | Supports multiple user profiles | |
| | Cross-suite navigation | |
| | Provides user information | |
| | Enables custom theming<br>(Not applied by default, but all consumers of Zywave Shell will receive this feature once it becomes default.) | |
| | Analytics baked in | |
| | Consistent footer for legal purposes | |

<docs-spacer size="small"></docs-spacer>

### Which one is best for my project?

If your goal is to integrate with the Zywave suite, Zywave Shell is highly encouraged if your application is able to support Zywave Auth. In the case that your application does not support Zywave Auth, we recommend ZUI Shell.

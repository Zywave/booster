---
layout: documentation
title: FAQs
subtitle: Busting common myths and lore about our design system.
---

## General

### What does "ZUI" stand for?

ZUI is an acronym that stands for Zywave User Interface. It is the former name given to Booster. While we are in the process of renaming everything as Booster, you may see or hear the name ZUI from time to time.

### What is "ZAPI"?

ZAPI stands for the **Zywave API Toolkit**. It is a comprehensive suite of components powered by APIs, designed to accelerate application development by leveraging the Zywave User Interface (ZUI) as its foundation.

#### Key Features:

- **ZUI Shell**: Standardizes the shell's look and behavior, excluding data.
- **Zywave/ZAPI Shell**: Built with ZUI Shell and public APIs to enforce consistency in both look and data.

### Understanding "next" and "latest" in ZUI

In the context of our deployment strategy for Booster, we utilize the NPM package management system, which is common in the front-end development community. Here's what the terms "next" and "latest" mean:

- **NPM and Version Tags**: NPM is a widely used package manager for JavaScript, allowing developers to publish and consume packages. Version tags like "next" and "latest" indicate the stability and intended use of different package versions.

- **"next" Tag**: This tag is used for versions in active development, which may include new features or experimental changes. These versions are considered unstable and are typically used by developers testing upcoming features.

- **"latest" Tag**: This tag represents the most recent stable version of a package, ready for production use. It is the default version installed when running `npm install <package-name>`.

- **Unpinned Version Model**: This model means applications are not locked to a specific version of a package, allowing them to automatically use the latest available version. This facilitates seamless updates and ensures applications benefit from the latest improvements without manual intervention.

- **Common Practice**: Using version tags like "next" and "latest" is standard in software development, especially for open-source projects. It helps manage different stages of software development and provides users with guidance on which version to use based on their needs (development vs. production).

This approach supports continuous integration and deployment, enabling rapid innovation while maintaining stability for production environments.

### Example: Using "next" and "latest" Tags with `example-ui`

Imagine you are working on a project that uses a UI library called `example-ui`. This library is published on NPM and follows the common practice of using "next" and "latest" tags to manage its versions.

1. **Installing the Latest Stable Version**:
   - When you run the command `npm install example-ui`, NPM will install the version of `example-ui` that is tagged as "latest". This is the most recent stable version, suitable for production use.

2. **Testing Upcoming Features**:
   - If you want to test new features or contribute to the development of `example-ui`, you can install the version tagged as "next" by running `npm install example-ui@next`. This version may include experimental changes and is considered unstable, so it's typically used in a development environment.

3. **Unpinned Version Model**:
   - Your application is set up to automatically use the latest version of `example-ui` without specifying a fixed version number. This means that whenever a new "latest" version is released, your application will automatically update to use it, ensuring you always have the latest stable features and fixes.

4. **Managing Stability**:
   - While using the "next" version can be beneficial for testing new features, it's important to monitor changes and test thoroughly to ensure that updates do not introduce instability into your application.

This example demonstrates how the "next" and "latest" tags can be used to manage different stages of software development, providing flexibility for both stable production use and active development.

<hr />

## Using ZUI

### I have a question. Where should I go to find an answer?
We have started using Jira to track and answer questions. You can [review existing questions](https://zywave-rd.atlassian.net/issues/?filter=10378) to see if anyone else has already asked the same thing. Or you can [submit a new question](https://zywave-rd.atlassian.net/jira/software/c/projects/BOOSTER/form/38) by filling out our form. These questions are also visible on the Booster Teams channel so that anyone can view and respond to them.
### I think I found an issue with Booster. What should I do?
1. **Check for Existing Issues**: Search for bugs in the Booster project on [JIRA](https://zywave-rd.atlassian.net/jira/software/c/projects/BOOSTER/issues/BOOSTER-56?jql=project%20%3D%20%22BOOSTER%22%20AND%20type%20%3D%20Bug%20ORDER%20BY%20created%20DESC). Not seeing an issue logged? You can [report a bug with our form](https://zywave-rd.atlassian.net/jira/software/c/projects/BOOSTER/form/37) after you complete the next steps.
2. **Reproduce the Issue**: Use our [CodePen template](https://codepen.io/pen?template=ZEQEQwN) to reproduce the issue in a framework-less way.
3. **Debugging**: If reproducible, debug in the labs or refer to [bundle issue documentation](https://gitlab.zywave.com/zui/zui/-/blob/dev/packages/misc/zui-bundle/README.md).

### I've been told to use a component or pattern in my feature, but I do not see it in the Toolkit. What should I do?
1. **Communicate**: Inform your designer/team about the unavailability.
2. **Prototype**: Build a prototype in your feature.
3. **Contribute**: Add the component to the Toolkit yourself, following contribution guidelines.

 **Note:** While we want to highly encourage more contribution, be careful with timelines and ZUI. ZUI has a strict release cycle to try to ensure no changes cause odd side effects in our apps. A lot of people are using ZUI in ways we can't always account for, and we want to ensure as much quality as we can in our releases. We are improving this release process with more automated testing, but that's not currently our reality.

### What is the process behind deprecating a feature?

There's no "one-size fits all" solution to deprecation, unfortunately. However, there is one principle behind deprecation that we use as our north star, and it's ensuring backwards compatibility for as long as we need to. That being said, code bloat is a real problem. So, we do ask that you help us help you and maintain your features. Our process is roughly as follows:

#### For design deprecation

1. Design has identified a component or usage of a component that we should no longer recommend or use.
1. Design works with Engineering to document that deprecation and create tasks to start the deprecation process in the Toolkit.
1. Design also provides recommended alternatives for this deprecation (e.g. no longer use success wells, but you can replace those with success toasts if needed.)
1. Mark the component / feature as deprecated in a prominent way, with links to additional documentation if necessary
   - **Note** We are actively working on the best way to make this information prominent. We currently do not have a solution in our documentation.

#### For toolkit deprecation

1. Engineering will create a [GitGud](https://gitgud.zywave.com/) deprecation notice. This is intended to act as a reminder for engineers to avoid a component or feature of the Toolkit.
1. Engineering will work on the Toolkit, and decide on two different strategies:
   1. Remove the feature altogether
      - We will only do this if: we believe the utilization is low; we know this will not cause errors in our systems; we know this will not break existing designs
   1. Mark the feature as deprecated (`@deprecated` in JSDoc comments), work on backwards compatibility if there is an alternative that we can easily hook into
      - We will start a clock for when we will completely remove the deprecated feature. This should be added to the `@deprecated` JSDoc comment

### What is my part in deprecating a feature?

We really want to keep the amount of JavaScript we deliver as low as we can, and unfortunately backwards compatibility requires more code, not less. If you see a feature of yours that is using a deprecated feature, please remove it and replace it with our upgrade strategy.

If you're not an engineer, you can still help! If you notice something in your products, please let your team know so they can prioritize working on it. We work extra hard to ensure that upgrading / replacing ZUI components is as straightforward as possible.

---
layout: blog
type: blogPost
title: Release Notes - March 2022
description: Native dialog by default, analytics updates, and more!
date: 2022-03-24T17:00:16.107Z
hideToc: false
tags:
  - Release Notes
---
We're rounding out the first quarter of 2022 with more focus on stability updates, but we do have some goodies for you all.

Let's dive right in!

<docs-spacer></docs-spacer>

## Native dialog shipped

![Image example of a ZUI dialog that is actually a native HTML dialog under the covers](/images/zui-dialog-native.png)

[Back in January](/blog/posts/2022-01-20-release-notes-january-2022/#zui-dialog-goes-native), we released a version of ZUI Dialog (`<zui-dialog>`) based on the [native HTML Dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) (`<dialog>`) behind a flag. This month, [Firefox](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/98#html) and [Safari](https://webkit.org/blog/12445/new-webkit-features-in-safari-15-4/#html) shipped their implementations. Now that `<dialog>` has shipped in all supported browsers, we're happy to announce that we are enabling our new implementation by default today!

With this work, we've shaved 43kB off the bundle out of the gate, added some much needed design love (skinny scrollbars 😍), and have unblocked implementing [sticky footers](https://gitlab.com/zywave/devkit/web-sdk/zui/-/issues/399).

Thank you to all who helped us with testing dialog while it was behind a flag!

<docs-spacer></docs-spacer>

## Custom analytics hooks

We have some minor enhancements to our [Zywave Analytics component](/application-framework/components/analytics/?tab=usage) to enable you to measure your own metrics!

<docs-spacer size="small"></docs-spacer>

### Shell + `analytics-user-properties`

We've long had a grab bag of properties on the Zywave Analytics component for consumers to use as they saw fit, but this was an issue when using Zywave Shell as one of Shell's features is that it injects `<zywave-analytics>` for you. Because this work was hidden away, consumers couldn't provide their own additional metadata about a user.

Now, with `analytics-user-properties`, apps will be able to extend the user identifying data that gets sent to analytics trackers. 

<docs-note>
Be sure to follow our <a href="/application-framework/components/analytics/?tab=usage#user-properties">best practices</a> when using <code>analytics-user-properties</code>.
</docs-note>

<docs-spacer size="small"></docs-spacer>

### Custom tracking with the `track()` method

While we do track a lot of activity with the usage of `<zywave-analytics>`, there are some situations where your app might want to track something explicit. 

Now, with the `track()` method exposed on the Zywave Analytics component (and surfaced via Zywave Shell), you can handle these situations where needed:

```javascript
analyticsEl.track("bananas", { areRipe: true, brand: "Chiquita" });
```

<docs-spacer></docs-spacer>

## We're watching you!

![Chart of Zywave Shell utilization in the span of 1 week](/images/zywave-shell-utilization.png)

One thing that's been lacking from our front end components has been how little we know about how they are used (or if they are used at all). Over time, we'll be working to sprinkle in some minor analytics and utilization tracking (while keeping a close eye on impact to performance). 

To start this off, we're monitoring utilization of the [Zywave Shell component](/application-framework/components/shell/?tab=usage) in our standard tracking process. This will have no impact on you, but will greatly help us in evaluating if we are succeeding in bringing more consistency to our users.

<docs-spacer></docs-spacer>

## Deprecations and breaking changes

A new addition to our release notes, we're hoping to be more transparent when it comes to potentially breaking changes and communicating deprecations.

This release does add one deprecation:

<docs-spacer size="small"></docs-spacer>

### ZUI File Input

**Summary**: The `change` event of `<zui-input-file>` currently has the uploaded file directly available via the `detail` property:

```javascript
inputEl.addEventListener("change", event => {
  const file = event.detail;
  // do stuff with the file
});
```

<docs-spacer size="small"></docs-spacer>

We plan to introduce some updates to this component, including multiple file support, which means we'll need to make some changes. Going forward, the following is expected (and anyone relying on the deprecated behavior will need to update):

```javascript
inputEl.addEventListener("change", event => {
  const file = event.detail.files[0]; // this is assuming a single file input!
  // do stuff with the file
});
```

<docs-spacer size="small"></docs-spacer>

This release will NOT be breaking the current behavior, but we expect to remove this backwards compatibility later this year.

<docs-spacer size="small"></docs-spacer>

## Full changelog

For a full look into all changes included with this release, [click here](https://gitlab.com/groups/zywave/devkit/-/milestones/21).
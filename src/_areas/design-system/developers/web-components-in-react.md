---
layout: documentation
title: Web Components in React
subtitle: Using custom webcomponents (e.g. ZUI) in React
hideToc: false
---
## Overview

This article will cover how our team uses custom web components (particularly with ZUI) in React, along with the issues and resolutions we've encountered along the way.

Web components do not work perfectly out of the box with React. Developers will quickly run into issues with events, object and array properties, attribute differences, and types (if using Typescript). All of these issues, along with how we solved them, are detailed below.

If you want to skip all of the details and go straight to ZUI in React, see [Introducing @zywave/zui-react-wrapper](/design-system/developers/web-components-in-react/#introducing-%40zywave%2Fzui-react-wrapper) below.

---

## What are Web Components

From [MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components):

```
Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.
```
For a quick summary on web components, check out our documentation on web components [here](/introduction/glossary/#web-components).

Zywave's [design system](/design-system/about/) and [application framework](/application-framework/about/) use web components to create the custom elements that can be used within any framework, including React.

---

## Pitfalls with React

On the surface, React and Web Components seem to work well out of the box. But several issues arise once you start using them in depth.

<docs-spacer size="small"></docs-spacer>

### Eventing

With everyday React, you likely have used `onClick`, `onChange`, or `on<CustomEventType>` to add change handlers for events. This eventing system is referred to as "Synthetic Events", as it abstracts away built-in DOM events with a React-specific layer. `on<CustomEventType>` works for custom _React_ components, as they operate within the walls of React.

Contrast this behavior with web components, which do not expose properties for every emitted event. React's synthetic event system won't work out of the box in this situation, as React can't write custom hooks for every event name that could possibly be dispatched. As a result, you are required to use `addEventListener` and `removeEventListener` to manage these change handlers on the actual DOM element. The React event ergnomics are gone.


Let's dive into an example, to help illustrate the issue. Here, we'd like to respond to the `close` event emitted by `zui-dialog`.


```jsx
function BrokenEvents() {
  const [dialogOpened, setDialogOpened] = React.useState(false);

  return (
    <div className="margin-top-4rem">
      <h2>Broken Events</h2>
      {dialogOpened && <p>The dialog is open</p>}
      {!dialogOpened && <p>The dialog is closed</p>}
      <zui-dialog
        opened={dialogOpened ? true : undefined}
        onClose={() => setDialogOpened(false)}
      >
        Hello!
      </zui-dialog>
      <zui-button onClick={() => setDialogOpened(true)}>
        Open dialog!
      </zui-button>
    </div>
  );
}
```

In the example above, the dialog will open properly because React has provided an `onClick` property that corresponds to a [web standard click event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event). But there is no event defined called "close"! So in this case, `onClose` will not update the state of `dialogOpened`, causing our React code here to prevent the dialog from being opened again.

<docs-spacer size="small"></docs-spacer>

#### addEventListener and removeEventListener

To use `addEventListener` and `removeEventListener` in React, you can create a ref to the component and then add the event listener via `useLayoutEffect` (and usually remove the event listener when the component is unmounted), like the example below:


```jsx
function EventHandlers() {
  const [dialogOpened, setDialogOpened] = React.useState(false);
  const [showDialog, setShowDialog] = React.useState(true);

  const dialogRef = React.createRef();

  const closeDialog = React.useCallback(
    () => setDialogOpened(false),
    [setDialogOpened]
  );

  React.useLayoutEffect(() => {
    const { current } = dialogRef;
    current.addEventListener("close", closeDialog);

    // Be careful with removing the event listener when unmounting! Sometimes, the element may be null already.
    // Here, we're using the optional chaining operator to help guard us against this scenario
    return () => current?.removeEventListener("close", closeDialog);
  }, [dialogRef, closeDialog]);

  return (
    <div className="margin-top-4rem">
      <h2>useLayoutEffect + createRef Event Handlers (without null check, like Storybook)</h2>
      {dialogOpened && <p>The dialog is open</p>}
      {!dialogOpened && <p>The dialog is closed</p>}
      {showDialog && (
        <zui-dialog
          opened={dialogOpened ? true : undefined}
          ref={dialogRef}
        >
          Hello!
        </zui-dialog>
      )}
      <zui-button onClick={() => setDialogOpened(true)}>
        Open dialog!
      </zui-button>
      <zui-button danger onClick={() => setShowDialog(false)}>
        Destroy dialog (watch your console)!
      </zui-button>
    </div>
  );
}
```

<docs-spacer size="small"></docs-spacer>

### Object and Array props

Objects and arrays will get converted to strings when sent to web component props. Which means that they will be sent to the web component as `"[object Object]"`. The web component will try to parse this string as the object and fail.

Here's a simple example, with a contrived obj prop:

```jsx
function ObjectProps() {
  const obj = { foo: "bar", foo2: "bar2" };

  return (
    <div className="margin-top-4rem">
      <h2>Object Props</h2>
      <zui-button obj={obj}>View my props in dev tools</zui-button>
    </div>
  );
}
```

In the HTML rendered in-browser, this displays as:

```html
<zui-button obj="[object Object]" type="primary" tabindex="0" role="button">View my props in dev tools</zui-button>
```

To get around this, you need to use JSON.stringify on the object:

```jsx
function ObjectProps() {
  const obj = { foo: "bar", foo2: "bar2" };

  return (
    <div className="margin-top-4rem">
      <h2>Object Props</h2>
      <zui-button obj={JSON.stringify(obj)}>View my props in dev tools</zui-button>
    </div>
  );
}
```

<docs-spacer size="small"></docs-spacer>

### Typescript

Typescript brings a new problem, because web components are not browser-defined HTML elements, so they are not recognized by Typescript. This means that you will have to add the web component type to JSX.IntrinsicElements for Typescript to recognize it and allow the build to succeed.

Furthermore, you need to add all of the props and their respective types to the web component type.

Here is an example of how you would add `zui-dialog` and `zui-button` to JSX.IntrinsicElements:

```tsx
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "zui-dialog": {
        className?: "small" | "medium" | "large";
        noCancelOutsideDialog?: true | null;
        children?: React.ReactNode;
        opened?: true | null;
        onClose?: (event: CustomEvent<boolean>) => void;
        ref?: React.RefObject<HTMLElement>;
      };
      "zui-button": {
        disabled?: true | null;
        onClick?: (event: MouseEvent) => void;
        onKeyDown?: (event: KeyboardEvent) => void;
        onKeyUp?: (event: KeyboardEvent) => void;
        children?: React.ReactNode;
        className?: string;
        icon?: boolean;
        type?: "primary" | "secondary" | "link";
        slot?: string;
        danger?: true | null;
        obj?: any;
        ref?: React.RefObject<HTMLElement>;
      };
    }
  }
}
```

<docs-spacer size="small"></docs-spacer>

### React attribute differences (class vs className, style)

While only a minor annoyance, there are some discrepancies in a handful of attributes in React vs native Web Components.

One common gotcha is `className`. Since React on its own cannot foresee every possible custom HTML element, `className` is not directly mapped for web components. As a result, you will need to watch out for this and may get some benefit in mapping the two together with wrapper components.

As an example:

```jsx
function ClassExample() {
  return <zui-button class="secondary">Secondary button</zui-button>;
}
```

Other differences with React attributes can be found here: [https://reactjs.org/docs/dom-elements.html#differences-in-attributes](https://reactjs.org/docs/dom-elements.html#differences-in-attributes)

---

## Fixing these problems

All of the above problems are fixable, and there are several packages available on NPM that our team has attempted to use to solve these problems. However, the packages we tested can only solve some of these problems.

---

## Using @zywave/useCustomElement-in-react

Zywave has created [@zywave/useCustomElement-in-react](https://packages.zywave.com/feeds/private-npm/@zywave/usecustomelement-in-react/versions) to solve all of the above problems. It takes inspiration other packages in this area, but fixes a couple of headaches we've encountered along the way.

[@zywave/useCustomElement-in-react](https://packages.zywave.com/feeds/private-npm/@zywave/usecustomelement-in-react/versions) offers the following features:
 - Adding event handlers for any function passed whose name starts with "on" (e.g. onSearch will get translated to adding an event handler for a search event)
 - Serializes array and object properties so React can use them correctly
 - Allows custom mapping of properties, so you can follow JSX standards (e.g. you can map the noColor prop to no-color in the web component)
 - Remaps className to class automatically

<docs-spacer size="small"></docs-spacer>

### ZUI component example

Using @zywave/useCustomElement-in-react, we can simply create React components that wrap the ZUI web components. Here is an example of the `zui-pager` element (including all of the prop types, and a custom event type):

```tsx
import React from "react";
import { useCustomElement } from "@zywave/usecustomelement-in-react";

export type ZuiPagerChangedEvent = {
  value: number;
};

export type ZuiPagerProps = {
  totalPages?: number;
  currentPage?: number;
  type?: "standard" | "lite" | "select";
  hrefFormat?: string;
  hideInput?: true | null;
  pageSize?: number;
  totalCount?: number;
  onChange?: (event: CustomEvent<ZuiPagerChangedEvent>) => void;
} & Omit<React.HTMLAttributes<HTMLElement>, "onChange">;

export const ZuiPager = (props: ZuiPagerProps) => {
  const selector = "zui-pager";
  const customMappings = {
    totalPages: "total-pages",
    currentPage: "current-page",
    hrefFormat: "href-format",
    hideInput: "hide-input",
    pageSize: "page-size",
    totalCount: "total-count",
  };
  return useCustomElement(selector, props, customMappings);
};
```

Now you could write a wrapper component for each ZUI component that you need. Or, you can use @zywave/zui-react-wrapper!

---

## Introducing @zywave/zui-react-wrapper

Our team has also written [@zywave/zui-react-wrapper](https://packages.zywave.com/feeds/private-npm/@zywave/zui-react-wrapper/versions) to create all of the ZUI React components for you. This package uses @zywave/useCustomElement-in-react, but takes care of all of the prop types, custom mappings, and event types. You just need to include it in your project and use it!

Note - this package is developed independently of ZUI, so any new ZUI features (elements or prop types) will not be immediately available in @zywave/zui-react-wrapper. If you find something missing, please submit a Merge Request!

<docs-spacer size="small"></docs-spacer>

### Installing

To use @zywave/zui-react-wrapper, you'll need to make sure that your NPM registry is set to the Zywave private registry for the @zywave scope. You can do that by adding a `.npmrc` file to your project with the following contents:

```
@zywave:registry=http://packages.zywave.com/npm/private-npm/
```

Then you can install the package with:

```bash
npm install -D @zywave/zui-react-wrapper
```

Or:

```bash
yarn add -D @zywave/zui-react-wrapper
```

<docs-spacer size="small"></docs-spacer>

### Using

To use @zywave/zui-react-wrapper, you can import the components directly from the package:

```tsx
import { ZuiButton } from "@zywave/zui-react-wrapper";
```

And then use it like so:

```tsx
<ZuiButton className="secondary" onClick={onClick}>
  Back to policies management
</ZuiButton>
```

---

## Problems that still need to be solved

### Managing state between React and Web Components

Both Web components and React components have their own internal state. Keeping state in sync between the two is difficult. This is obvious when using `zui-input`, because your value in your React component will not match the value in the zui-input component. One hack to get around this is to force your component to re-render when the component value changes. This is not ideal, but it works.

You can implement this by using the `key` prop (setting it to a new value each time your value changes), or by using `useCallback` to create a new component each time your value changes.

---

## Conclusion

That's it! Hopefully this has helped you understand what web components are, how they can be used in React, what issues arise when using them in React, and how we got around those issues.

If you use [@zywave/zui-react-wrapper](https://packages.zywave.com/feeds/private-npm/@zywave/zui-react-wrapper/versions) and find any issues, please let us know or submit a Merge Request! We'd love to hear your feedback.

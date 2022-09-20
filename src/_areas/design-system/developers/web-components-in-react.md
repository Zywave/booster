---
layout: documentation
title: Web Components in React
subtitle: Using custom webcomponents (e.g. ZUI) in React
hideToc: false
---
## Overview

This article will cover how our team uses custom web components (particularly with ZUI) in React, along with the issues and resolutions we've encountered along the way.

Web components do not work perfectly out of the box with React. Developers will quickly run into issues with events, object and array properties, attribute differences, and types (if using Typescript). All of these issues, along with how we solved them, are detailed below.

If you want to skip all of the details and go straight to ZUI in React, see `Introducing @zywave/zui-react-wrapper` below.

---

## What are Web Components

From [MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components):

```
Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.
```

[ZUI](https://booster.zywave.dev/) uses web components to create the custom elements that can be used within any framework, including React.

---

## Pitfalls with React

On the surface, React and Web Components seem to work well out of the box. But several issues arise once you start using them in depth.

<docs-spacer size="small"></docs-spacer>

### Custom Events and Synthetic Events

Typically with React you would use `onClick`, `onChange`, or `on<CustomEventType>` to add change handlers for events. Web components typically do not provide these properties, so you typically use `addEventListener` and `removeEventListener` to add these change handlers.

Here is an example showing how you typically write React, but the custom events (in this case `onClose`) will not work properly:

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

In the example above, the dialog will open properly because `onClick` is a standard event type. But `onClose` will not update the state of `dialogOpened`, so the dialog will not be able to open again.

<docs-spacer size="small"></docs-spacer>

#### addEventListener and removeEventListener

To use `addEventListener` and `removeEventListener` in React, you would need to create a ref to the component and add the event listener via `useLayoutEffect` (and usually remove the event listener when the component is unmounted).

Here is an example of how you would use `addEventListener` and `removeEventListener` in React, but there is an issue during unmounting:

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

    return () => current.removeEventListener("close", closeDialog);
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

#### Unmounting

When a component is being unmounted, you typically want to remove the event listener on the web component. However, the web component is usually gone by this point, so accessing the ref will fail. You can work around this with a null check.

```jsx
function EventHandlers() {
  ...
  React.useLayoutEffect(() => {
    const { current } = dialogRef;

    if(current) {
      current.addEventListener("close", closeDialog);
    }

    return () => current && current.removeEventListener("close", closeDialog);
  }, [dialogRef, closeDialog]);
  ...
}
```

Certain tools, such as Storybook, will try to remove event listeners when a component is unmounted (e.g. when switching between stories). However, Storybook does not do this null check which causes it to fail, giving you an error screen immediately after switching between stories.

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

In the browser, this shows up as:

```html
<zui-button obj="[object Object]" type="primary" tabindex="0" role="button">View my props in dev tools</zui-button>
```

<docs-spacer size="small"></docs-spacer>

### Typescript

Typescript brings a new problem, because web components are not standard HTML elements, so they are not recognized by Typescript. This means that you wil have to add the web component type to JSX.IntrinsicElements for Typescript to recognize it and allow the build to succeed.

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

This is a minor annoyance, but React components will use `className`, but web components will use `class`. This will be confusing if you use web components directly, but it can be easily solved by mapping between the two in a wrapper component. `style` will also need to be a string instead of the structured CSS properties that React uses.

Other differences with React attributes can be found here: [https://reactjs.org/docs/dom-elements.html#differences-in-attributes](https://reactjs.org/docs/dom-elements.html#differences-in-attributes)

---

## Fixing these problems

All of the above problems are fixable, and there are two packages available on NPM that our team has attempted to use to solve these problems. However, both of these packages only solve some of these problems.

<docs-spacer size="small"></docs-spacer>

### webcomponents-in-react

[webcomponents-in-react](https://www.npmjs.com/package/webcomponents-in-react) was the first package we attempted to use to wrap the ZUI web components. This worked fairly well, but it did not fully solve the problem of event handlers. This made Storybook unstable, causing it to crash when switching between stories.

<docs-spacer size="small"></docs-spacer>

### use-custom-element

[use-custom-element](https://www.npmjs.com/package/use-custom-element) was the second page we attempted to use. This fixed our unmounting issue, but the event handlers were not set up with the correct names (being `change` instead of `onChange`, etc.). It also broke any non-event functions (such as the `queryHandler` used in `zui-select-dropdown`).

---

## Using @zywave/useCustomElement-in-react

Our team created [@zywave/useCustomElement-in-react](https://packages.zywave.com/feeds/private-npm/@zywave/usecustomelement-in-react/versions) to solve all of the above problems. It takes inspiration from both webcomponents-in-react and use-custom-element, but it fixes the issues we had with each package.

<docs-spacer size="small"></docs-spacer>

### Event Handlers

useCustomElement-in-react uses a ref on the web component, along with `useLayoutEffect`, to add and remove event listeners. The code for that is here:

```tsx
// Changes "onClick" to "click", etc.
const keyToEventName = (key: string): string => {
  return key.replace(/^on/, "").toLowerCase();
};

...

const webComponentRef = React.useRef<HTMLElement | null>(null);

React.useLayoutEffect(() => {
  const { current } = webComponentRef;

  let fns: Array<FunctionsType>;

  if (current) {
    // Handle all of the standard functions, set the properties on the ref
    Object.keys(props)
      .filter((key) => props.hasOwnProperty(key) && props[key] instanceof Function && !key.startsWith("on"))
      .forEach((key) => {
        (current as any)[customMapping[key] || key] = props[key];
      });

    // Handle all of the event listeners by adding the proper listener to the event
    fns = Object.keys(props)
      .filter((key) => props[key] instanceof Function && key.startsWith("on"))
      .map((key) => ({
        key: keyToEventName(customMapping[key] || key),
        fn: props[key],
      }));

    fns.forEach(({ key, fn }) => current.addEventListener(key, fn));
  }

  return () => {
    if (current) {
      fns.forEach(({ key, fn }) => current.removeEventListener(key, fn));
    }
  };
}, [props, webComponentRef, customMapping]);
```

<docs-spacer size="small"></docs-spacer>

### Object and Array props, and Custom Mappings

useCustomElement-in-react handles objects and arrays pretty simply, by just using JSON.stringify to convert them to a string. We also handle custom mappings at the same time (such as `className` to `class`, or `showAll` to `show-all`). The `className` to `class` is handled automatically, while the `showAll` to `show-all` is handled by the customMapping prop.

```tsx
// Handle the arrays and objects by converting them to a string
const customElementProps = Object.keys(props)
  .filter((key) => !(props[key] instanceof Function))
  .reduce((acc, key) => {
    const prop = props[key];

    const computedKey = customMapping[key] || key;

    if (key !== "children" && key !== "style" && (prop instanceof Object || prop instanceof Array)) {
      return { ...acc, [computedKey]: JSON.stringify(prop) };
    }

    return { ...acc, [computedKey]: prop };
  }, {});
```

Finally, we create the element and return it:
  
```tsx
// Create the element, set the ref, apply the rest of the props
return React.createElement(componentSelector, {
  ref: (ref: HTMLElement) => (webComponentRef.current = ref),
  ...customElementProps,
});
```

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

<docs-spacer size="small"></docs-spacer>

### Installing

To use @zywave/zui-react-wrapper, you'll need to make sure that your NPM registry is set to the Zywave private registry for the @zywave scope. You can do that by adding a `.npmrc` file to your project with the following contents:

```
@zywave:registry=http://packages.zywave.com/npm/private-npm/
```

Then you can install the package with:

```bash
npm install -D @zywave/zui-react-wrapper@1.0.0
```

Or:

```bash
yarn add -D @zywave/zui-react-wrapper@1.0.0
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

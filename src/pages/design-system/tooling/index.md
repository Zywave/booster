---
title: Tooling
permalink: '/design-system/{{ title | slug }}/'
eleventyComputed:
    eleventyNavigation:
        key: '{{ title }}'
        parent: Design system
        order: -96
---

<Tabs :tabs="['Web components', 'Lit', 'Polyfills', 'Other tools']">
<TabPage>

Web Components are here, and they are only going to get better. ZUI is embracing this new web feature to make UI rich and simple components, while supporting as many applications as we can. For everything about Web Components, check out https://www.webcomponents.org/.

## Why web components?

Before we dive into the "what are web components" section, I just want to detour into the "why." Why not just choose a framework? Or simpler yet, why not just continue ZUI 3.x components?

We decided on web components because web components offer something that we otherwise couldn't accomplish: interoperability. The ease of installing a web component, applying a theme, and everything just working (regardless of your application's stack) is something we've not really had with ZUI 2 or ZUI 3. And choosing to just drop Durandal/knockout and create an Aurelia, or Vue, or something else that comes along next year is just repeating the past. ZUI isn't intended to be a framework; it's intended to be a spec and design tool to make your application look like a Zywave product.

Web components are the answer to this problem. Not to mention, we get a huge added benefit of being fully backward compatible. You can use your ZUI 2 or 3 components and styles while porting over to ZUI 4 and not have to do a full site regression. There's no more conflict, so the upgrade process shouldn't block development for weeks.

## What are web components?

Web Components is a collection of new web standards that allows developers to create browser-level elements and distribute them to be used in any application. Here's just a brief walkthrough of some of the key standards, but for more information, you should really check out the [Web Components website](https://www.webcomponents.org/).

### Custom elements

Documentation: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements

If you've used ZUI 3, you might be somewhat familiar with what this looks like. the Custom Elements API allows developers to register their own elements, and define what that element looks like. For example, a well might look something like this:

```html
<zui-well>
  <p>I'm a message</p>
</zui-well>
```

**Note:** Custom Elements _hate_ conflict. You can't define two elements of the same name (the Internet will literally explode). This is an important thing to keep in mind when pulling in web components.

#### Template

Documentation: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template

Custom Elements use the `<template></template>` HTML element, which has existed long before this spec. This allows their registration to define what it looks like, without actually being rendered in the DOM.

#### Slot

Documentation: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot

This "element" actually serves as a placeholder. When used with Custom Elements, it allows the consumer to add content inside of the custom element, and the custom element can then render it where and how it wants to. In the above zui-well example, the message actually will get "slotted" when rendered. If you take a peek at zui-well's definition, you'll see what this actually looks like.

### Shadow DOM

Documentation: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM

Remember how I mentioned that ZUI 4 is backwards compatible? Shadow DOM is what really ensures this.

Shadow DOM allows a custom element to encapsulate its styles and behavior. This means that zui-well doesn't need to worry about bleeding CSS (goodbye silly CSS classes, like `.zui-knockout-table__row`). Similarly, its Shadow DOM cannot be manipulated by the root DOM (and conversely, the custom element cannot manipulate the root DOM).

Encapsulation is cool, ok. And legible CSS is even cooler.

**Note:** What a badass name for a web feature, right?

### CSS variables/custom properties

Documentation: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables

Now, I know what you're thinking. Shadow DOM is scary; how can I style a custom element if its styles are encapsulated?!

Enter CSS variables. With web components, CSS is an actual part of your custom element's API.

my-element.css

```css
:host {
  background-color: var(--my-element-background, red);
  /* var() unwraps --my-element-background, and if it doesn't exist, optionally falls back to red */

  background-color: var(--my-element-background);
  background-color: deleteme 30px;
  /* is also valid; if `--my-element-background` isn't defined, `background-color` just won't be set */
}
```

application.css

```css
:root {
  --my-element-background: green;
  // set a CSS variable called --my-element-background to the color green
}

p.wraps-my-element {
  --my-element-background: blue;
  // set a CSS variable called --my-element-background to the color blue
}
```

index.html

```html
<body>
  <my-element>I'm not red, but green!</my-element>
  <p class="wraps-my-element"><my-element>I'm not red, nor green, but blue!</my-element></p>
</body>
```

That's it. It's really that simple. The element declares a variable (`--my-element-background`), with a fallback value (`red`). Then, the consumer sets that variable via CSS, and voilà, you have provided a hook to style your custom element.

CSS variables aren't just for custom elements. If you have a use case for them, they're really slick.

**Note:** You can do some REALLY cool stuff with this; like easy theming, toggling a light/dark-mode, etc.

### CustomEvent

Documentation: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent

Not exactly part of the Web Component spec, but `CustomEvent` exists and allows us to create more DOM-like custom elements. They're actually really simple:

my-element.js

```js
...
onPropChanged(newVal, oldVal) {
    this.dispatchEvent(new CustomEvent('propchanged', {
        bubbles: true,
        composed: true, // allows the event to be consumed outside the Shadow DOM
        detail: { // allows you to define a payload for subscribers to consume
            value: newVal
        }
    }));
}
...
```

And from your application:
app.js

```js
const myElement = document.querySelector("my-element");
myElement.addEventListener("propchanged", (event) => {
  console.log(`Prop was changed to ${event.detail.value}`);
});
```

</TabPage>
<TabPage>

## About

[lit-html](https://lit-html.polymer-project.org/) is a very lightweight library whose sole purpose is to make updates to the DOM as cheap as possible. It uses a feature of JavaScript called [tagged template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literal#Tagged_templates) to be able to efficiently rerender only the portion of the DOM that actually needs to be updated (unlike other libraries, such as React, that use a technique called the "Virtual DOM", or "VDOM"). I won't bore you with all of the extra details, but if you're interested, it's worth reading [their documentation](https://lit-html.polymer-project.org/).

[LitElement](https://lit-element.polymer-project.org/) builds on top of lit-html to make developing performant custom elements a piece of cake. It exposes a class called `LitElement` that implementers should extend. That class has a protected method, `render()`, that must be implemented and is the hook for a custom element to dynamically render its DOM via lit-html's `` html` ` `` template literal tag.

We'll refer to both of these libraries together as lit :fire:

## Why lit?

The ZUI group evaluated several web component libraries; we actually came pretty close to doing Polymer itself. Luckily, we came in right as lit-html was taking off, so we got the cheaper, better cousin to Polymer.

We also considered just extending HTMLElement and writing our own elements, but the boilerplate to get one of those off the ground is insane, especially when you consider some of the more complex components we have in our toolkit.

## Useful Links

| Name                     | Link                                                                                | Note                                                                                                                                                                      |
| ------------------------ | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lit-html documentation   | https://lit-html.polymer-project.org/                                               | Official documentation for lit-html                                                                                                                                       |
| LitElement documentation | https://lit-element.polymer-project.org/                                            | Official documentation for LitElement                                                                                                                                     |
| lit-html repo            | https://github.com/polymer/lit-html                                                 |                                                                                                                                                                           |
| LitElement repo          | https://github.com/polymer/lit-element                                              |                                                                                                                                                                           |
| Polymer Slack            | https://polymer.slack.com <br /> registration: https://polymer-slack.herokuapp.com/ | Official Polymer chat; many Polymer devs sit in the channel watching discussion and participate when they can. Other devs use as a place to discuss/get help with Polymer |

---

</TabPage>
<TabPage>

First, if you're using `@zywave/bundle` (and more importantly, the `zui-loader.js` provider), you most likely DON'T have to worry about everything on this page except for polyfilling CSS custom properties. But, if you're curious, here's everything that needs to exist for ZUI to work in the browser that shall not be named.

<Spacer/>

## Required polyfills

### [@webcomponents/webcomponentjs](https://github.com/webcomponents/webcomponentsjs)

Until [this chart](https://caniuse.com/#feat=custom-elementsv1) shows all green for browsers we support, you'll need this library. Don't worry, it does feature detection, so as browsers start supporting more and more, the polyfill will get lighter and lighter.

99% of the time, you can just pull in `webcomponents-loader.js` and you're good to go. However, if you're using Babel (or some comparable transpiler) to get ZUI to be consumable by [a browser that doesn't recognize ES6 classes](https://caniuse.com/#feat=es6-class), you'll ALSO need to pull in `custom-elements-es5-adapter.js`, and ONLY pull it in browsers that understand what a custom element is (so for most of you, that's all browsers except Internet Explorer 11 and Edge).

It's highly recommended that you deliver ES6 class transpiled ZUI to Internet Explorer 11 and Edge, and native ES6 classes to everyone else. But, that's on you.

<Spacer size="small"/>

### Promise polyfill

If targeting Internet Explorer 11, you'll need a promise polyfill. There's no shortage of options on this front; if you don't explicitly load your own promise polyfill, `@webcomponents/webcomponentsjs` will give you [promise-polyfill](https://www.npmjs.com/package/promise-polyfill).

<Spacer size="small"/>

### [@webcomponents/shadycss](https://github.com/webcomponents/polyfills/tree/master/packages/shadycss)

For Internet Explorer 11 and Edge, you'll need to do the following:

- Install [@zywave/zui-custom-style](https://packages.zywave.com/feeds/private-npm/@zywave/zui-custom-style/)
- Install [@webcomponents/shadycss](https://github.com/webcomponents/polyfills/tree/master/packages/shadycss)
  - You'll get this for free, but you'll need to include `custom-style-interface.min.js` in your index file. This is where the magic happens.
- **Preferred method**: Wrap your important CSS custom properties in the document like in the example below.
- Your stylesheet imports (`<link rel="stylesheet" href="application.css" />`) will need to be switched to `<zui-custom-stylesheet href="application.css"></zui-custom-stylesheet>` if they contain CSS custom properties (e.g. `--zui-button-color: green;`).
  - **Note:** Please, only use this if the browser is Internet Explorer 11 or Edge; we can't guarantee that any performance enhancements the browsers provide for `rel="stylesheet"` is properly replicated. For starters, you're blocked by the main thread so that JavaScript can be loaded and executed before your styles can even be loaded. Not cool.
  - There are some really weird race conditions with this one. If you see issues, log it to ZUI's issue here: https://gitlab.zywave.com/zui/zui/issues/201

```html
<zui-custom-style>
  <style>
    html {
      --zui-shell-primary-theme: #2e2e2e;
      --zui-shell-primary-theme-dark: #2e2e2e;
      --zui-shell-profile-avatar-background: #51515a;
    }
  </style>
</zui-custom-style>
```

<zui-well type="info">

Even if you use the `zui-loader.js`, you still need to wrap all CSS custom properties in `<zui-custom-style></zui-custom-style>` in your applications if you want them to work in Internet Explorer 11.

</zui-well>

---

## Polyfilling ZUI Colors and other CSS custom properties

CSS custom properties, also known as CSS variables, are not supported in Internet Explorer 11 and never will be. If you want to use static CSS custom properties&mdash;such as our ZUI Colors&mdash;in your applications and cannot wrap them in `<zui-custom-style>`, consider installing [@postcss/postcss-custom-properties](https://github.com/postcss/postcss-custom-properties). This polyfill will provide fallback values for style properties in Internet Explorer 11.

```css
:root {
  --zui-red-400: #ee562f;
}

.error-text {
  color: var(--zui-red-400);
}

/* becomes */

:root {
  --zui-red-400: #ee562f;
}

.error-text {
  color: #ee562f;
  color: var(--zui-red-400);
}
```

<zui-well type="warning">

`postcss-custom-properties` doesn't support dynamic CSS variables. Whatever value is defined at the root level will be the final output.

</zui-well>

</TabPage>
<TabPage>

The ZUI monorepo uses a large number of tools, from building distributable packages to hosting the ZUI documentation website. Here's a brief overview of everything you need to know. This is not an exhaustive list, but should get you the essentials.

## CLI Tools

This project uses a lot of CLI tools, some you may or may not be familiar with. With the exception of a small handful, all CLI tools are installed and managed as devDependencies of the workspace. This means that you should try to use [npx](./getting-started/about-tech/#npx) with those tools.

### Yarn

Package manager of choice. Has its own support for workspaces and has some caching/efficiencies that make it more appealing over npm.

#### Useful commands:

```shell
> yarn add ${package} ### adds ${package} as a dependency
> yarn add ${package} -D ### add ${package} as a devDependency
> yarn install ### installs all dependencies of a yarn project (or will create a yarn.lock file if not already existing)
> yarn -W add ${package} ### adds ${package} as a dependency to a workspace's root package.json
```

**Pro tip**: Can't tell if the project you're working on is using yarn or npm? If there's a yarn.lock file, it uses yarn.

[Documentation](https://www.yarnpkg.com/)

### Lerna

The glue that holds the entire monorepo together.

You may have noticed at this point that ALL of ZUI is in this single repository. Well, lerna is the tool we use that helps facilitate:

1.  building all the packages
1.  publishing all the packages
1.  using unpublished dependencies while in development
    - It uses some cool symlinking to simulate a proper node dependency tree. If you're ever curious, check out the root's `node_modules/@zywave/` folder

#### Useful commands:

```shell
> lerna bootstrap ### runs yarn install and links all monorepo packages that have dependencies
> lerna add ${package} --scope=@zywave/* ### adds ${package} to all packages in the monorepo that match the scope pattern (so all packages that start with @zywave/*)
```

[Documentation](https://lernajs.io/)

### Gulp

Task library that is similar to Grunt, but built around filestream pipelines.

[Documentation](https://gulpjs.com/)

### Gridsome

Static website generator, based on Vue.js. Create a site like a Vue app, and then Gridsome attempts to compile away the framework into a static site.

[Documentation](https://gridsome.org/)

### npx

Allows you to run another CLI tool from either a node/yarn project's dependencies, or your global space if not available. Very useful for ensuring that the build tooling you use for a project is the way the author(s) intended.

This tool has been a part of Node since Node 8.2.0 (it actually gets installed with npm after npm 5.2.0).

[Documentation](https://github.com/zkat/npx)

### Typescript / TSC

Most of the repo is written in Typescript. TSC is typescript's CLI for transpiling .ts files into .js.

### Yeoman

Javascript template generation. Only needed if you want to create a new package based off of the provided templates.

[Documentation](http://yeoman.io/)

## Supplemental tooling

### Browsersync

_Hitting F5 is so 2017._

A really cool server that will watch files for changes and refresh the browser if anything changes. Used in a lot of our `gulp watch` pipelines.

[Documentation](https://www.browsersync.io/)

### ESLint

_No, you shouldn't litter `console.log` everywhere. Stop that._

ESLint ensures that we code using similar design patterns and helps us catch potential problems early.

This is configured in the repo's .eslintrc.json and .eslintignore.

[Documentation](https://eslint.org/)

### ES Dev Server

A web server for development without bundling, useful for non Gulp dependent packages.

[Documentation](https://open-wc.org/developing/es-dev-server.html)

### Husky / Lint-staged

_No, you can't commit your ugly code._

The build server will lint our code (using a variety of linting tools); these two together help you maintain sanity by running the linting prior to commit. They'll even fix your code and stage that for you so that you hardly have to lift a finger!

[Husky documentation](https://github.com/typicode/husky)

[Lint-staged documentation](https://github.com/okonet/lint-staged)

### Modern Web Test Runner / Playwright / Mocha / Chai

_Testing 1,2,3._

Automated testing tools for Typescript and Javascript.

Modern Web Test Runner (WTR) provides a CLI and runs tests in real browsers, Playwright is our browser launcher that supports Chromium, Firefox, and WebKit, Mocha is a framework for writing tests, and Chai is an assertion library.

[WTR documentation](https://modern-web.dev/docs/test-runner/overview/)
[Playwright documentation](https://playwright.dev/)
[Mocha documentation](https://mochajs.org/)
[Chai documentation](https://www.chaijs.com/)

### Node-sass

Sass compiler wrapping Libsass (a C++ alternative to the Ruby Sass compiler).

[Documentation](https://github.com/sass/node-sass)

### Polyserve

Server maintained by the Polymer team that handles on-the-fly ES module resolution and other niceties.

[Documentation](https://github.com/Polymer/tools/tree/master/packages/polyserve)

### Prettier

_Tabs vs spaces? Who really cares?_

Prettier is a file formatting tool that keeps us using similar file syntaxes (e.g. using spaces instead of tabs, single quotes instead of double, etc.)

This is configured in the monorepo's .prettierrc file, and requires an additional plugin to play nicely with ESLint.

[Documentation](https://prettier.io/docs/en/index.html)

</TabPage>
</Tabs>

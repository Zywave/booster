---
layout: documentation
title: Contribute to the design system
navTitle: Design system
---
This guide is to empower our community to contribute to the Booster Development Network design system, commonly known as the Zywave User Interface (ZUI).

<docs-spacer></docs-spacer>

## Initialization

When you first clone the repository, you will need to run a few commands to get everything set up:

1. `cd ${insert path to root of repository here}`
1. `yarn install`
   - This one takes awhile, so go grab a coffee or something to snack on.
1. `yarn run bootstrap`
   - Using a tool called [Lerna](https://lerna.js.org/), we are able to manage and publish these monorepo components with ZUI-to-ZUI dependencies.
1. `yarn run build`
   - Runs through every package defined in the monorepo and executes their `"build"` script as defined in their respective _package.json_ file.

<docs-note>Having [Yarn 1](https://yarnpkg.com/en/) installed on your machine is a prerequisite for contributing.</docs-note>

---

## Branching

When working in this monorepo, you'll want to be aware of our branching strategy. We prefer that you branch off of the main branch instead of forking the repository. Branching off of the main branch allows you to create a merge request with minimal merge conflicts.

ZUI operates with one branch in mind:

1. _main_ branch
   - This branch is protected and any other branches are expected to be releasable before being merged in.
   - prereleases and stable releases are made out of this branch.
   - Only a select few people can merge into this branch.
   - Only a select few people can prerelease or release from this branch.
1. Other branches
   - Create them off of the main branch
   - Call them something easy to understand (not just "fix-stuff")
   - Delete them when they are merged into the main branch (no need for other persistent branches)

<docs-note>If you don't have permission to create branches in this repository, please reach out to us to get access.</docs-note>

---

## Commiting

ZUI uses Lerna for CI operations across the entire monorepo. There are two things to note:
1. On commit, a precommit hook is executed that will lint (and fix if possible) all staged files about to be committed.
   - JS: uses eslint + prettier
   - CSS/SCSS: uses stylelint + prettier
   - If the linter doesn't run, and you have formatting or linting errors, the CI will fail
1. On versioning, commit messages are evaluated by Lerna's hook with conventional-changelog to autoincrement versions
   - This is super important, and is something you should actively follow to help keep the versions and CHANGELOGs up-to-date

<docs-spacer size="small"></docs-spacer>

### Conventional commits

_Recommended links_:

- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)
- [Angular commit standards](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)

All commits should look like the following:

```shell
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```
<br>
<docs-note>The most important part of your commit message is the <em>type</em>.</docs-note>
<br>
<docs-grid columns="2">
<docs-do>
<pre class="language-shell">
> git commit -m "chore: fixing some ci issues"
> git commit -m "feat: wells now support
  'dismissible' feature
</pre>
</docs-do>
<docs-do-not>
<pre class="language-shell">
> git commit -m "quick fix"
> git commit -m "Updating index.ts"
</pre>
</docs-do-not>
</docs-grid>
<br>
If you want to have an easy template for all ZUI commit messages, you can actually execute the following to the root of the repository:
<br>
<br>

```shell
> git config --local commit.template "./.gitmessage"
```
<br>
Now, when you try to make a commit, you'll get a prompt to fill in the commit details with more information regarding your changes. This also works with git UI tools such as GitKraken.
<docs-spacer size="small"></docs-spacer>

### Conventional changelog

_Recommended links_:

- [Conventional changelog](https://github.com/conventional-changelog/conventional-changelog/)

Based off of your commit messages, Lerna + Conventional Changelog will do a diff between the last version of a given package and the currently releasing changes, and figure out the proper version.

ZUI 4.x is what we're currently on, and we plan to keep it that way until something shinier comes along. So, ZUI uses a slight fork of [conventional-changelog-angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular) which lets us pin down the major version, and sticks us in the minor and patch increments for all updates.

<docs-spacer size="small"></docs-spacer>

#### How ZUI currently versions itself (in descending priority):

1. If the commit contains `BREAKING CHANGE: <reason>` in the body, we will bump the minor version (e.g., 4.1.6 => 4.2.0)
   <zui-well type="warning" static>You won't be able to commit using `git commit -m` because this only accepts a subject line. Instead, use `git commit`, which will prompt your Git default text editor to open so you can include a body message.</zui-well>
1. If the commit subject starts with `feat:`, `fix:`, or `perf:`, we'll do a patch (unless the body also includes `BREAKING CHANGE: <reason>`)
1. If the commit subject starts with `chore:`, `build:`, `docs:`, `refactor:`, `ci:`, `style:`, or `test:` we'll do nothing with the version, but include the notes in the CHANGELOG
1. If you don't follow the rules, we won't do anything. Hopefully you didn't change anything meaningful.

<docs-spacer size="small"></docs-spacer>

##### How to commit a breaking change to ZUI

If you are not using a GUI, follow the instructions below on how to commit a breaking change via command line.

<ol>
<li>In command prompt, stage all your breaking changes first and then type <code>git commit</code> and press the <code>&lt;enter&gt;</code> key:<br>
<pre class="language-shell">
> git commit
</pre><br>
</li>
<li>Your default Git text editor will open and prompt you to provide a commit message. The first line will always be your subject and any lines following will be the body:<br>
<pre class="language-shell">
feat: removed app name slots from zui-shell

BREAKING CHANGE: removed the slots "app" from zui-shell-topbar and zui-shell-nav in favor of the attribute app-name on zui-shell</pre><br>
</li>
<li>After you have entered your message, all you need to do is save and close the file for Git to commit your changes.</li>
</ol>

<docs-spacer size="small"></docs-spacer>

### Preview ZUI packages versioning

If you're curious at any time what the next prerelease or release of ZUI will look like, you can execute the following commands against the main branch:

<p>For prerelease versions:</p>

```shell
> npx lerna version --conventional-prerelease=*
```
<br>
<p>For stable release versions:</p>

```shell
> npx lerna version --conventional-graduate
```

<zui-well type="warning" static>Don't commit the changes generated as a result of this. You can reject the changes before the updates are saved to your repo.</zui-well>

---

## Merge requests

Here are some quick best practices when creating your merge request:

- Keep the merge request small; the monorepo structure might tempt you to make many changes all at once, but it's harder to review, and harder to properly associate your changes with the right packages.
- For "code review" merge requests, you can always prepend `WIP:` to the title to prevent accidental merging.
- Delete the source branch once it has been merged into the main branch.
- If your changes are isolated to one package, feel free to check the `Squash commits when merge request is accepted.` box. Just be sure that the title of the merge request (or the resulting commit message) follows our rules above.
- If your changes span many packages, don't squash the commits. Better to have targeted, explicit commits against the changed code than one blob commit that is hard for conventional-changelog to properly allocate to the right package(s).

After you create your merge request, please ping the App Platform channel in Microsoft Teams to let us know it is ready for review.

---

## Style guide

### JavaScript

For the most part, we use prettier and eslint to help you out here. You shouldn't have to worry about anything; we even have a precommit hook set up to auto format / validate your code.

For you vscode users, here are some recommendations to keep you in sync:

- [prettier-vscode](https://github.com/prettier/prettier-vscode).
- set `"editor.formatOnSave"` to `true` in File > Preferences > Settings

<docs-spacer size="small"></docs-spacer>

### Web components

#### Attributes

HTML has some pretty wild variations when it comes to attribute names. You're most likely to see hyphenated (e.g. `data-prop`) and all-lowercase, single word (e.g. `tabindex`). And with custom elements becoming mainstream, be ready to see other crazy attributes like `snake_case` and the all-too-familiar `camelCase`. Here at ZUI, we like to enforce some standards. So, please use hyphenated, all-lowercase attributes.

Example:

```js
class MyElement extends HTMLElement {
  static get observedAttributes() {
    return ["my-property"];
  }

  get myProperty() {
    return this.getAttribute("my-property");
  }
}
```
<br>

```html
<my-element my-property="good!"></my-element>
```
<br>

This requires some work on ZUI's end. If extending PolymerElement, this behavior is baked in. However, if extending LitElement (or ZuiBaseElement), you'll have to do something like the following:

```js
class MyElement extends LitElement {
  @property({ attribute: "my-property", type: String, reflect: true })
  myProperty = undefined;

  /* more stuff here */
}
```

<docs-spacer size="small"></docs-spacer>

#### Public and private

JavaScript is not the most obvious language when trying to do OOP. But, with ES6 classes, people have tried to get closer to actual OOP paradigms. One of the ways this is accomplished is by being explicit in your property and method declarations. You'll see these principles in practice in our web component libraries of choice: lit-html/lit-element.

Public:

- methods: `camelCase()`
- properties: `camelCase`

Private:

- methods: `#camelCase()`
- properties: `#camelCase`

<docs-spacer size="small"></docs-spacer>

#### Custom CSS properties

With ZUI, one of the main ways for a consumer to manipulate a component is via CSS Custom Properties. If you are unsure what we mean by that, checkout [MDN's documentation on CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties). All of our custom CSS properties should look like the following:

```css
:host {
  --zui-my-element-color: hotpink;
}
```
<br>

1. We namespace the property to ZUI (don't want to clash with others)
1. We then scope it to the proper custom element
1. And finally we indicate what the intent is of the property

So, this CSS variable specifies a color for `<zui-my-element>` to be used in its CSS.

<docs-spacer size="small"></docs-spacer>

#### What the FOUC?

One caveat to custom elements is the way in which the browser will render them. Let's give a really basic (contrived) example:

1. User navigates to https://booster.zywave.dev/
1. Browser loads HTML on this page, stopping to load stylesheets, scripts, etc.
1. Browser renders what it can
1. Browser begins to compile and execute JavaScript
1. Application is fully loaded

Custom elements require JavaScript to be processed in order for the HTML elements to be rendered properly. Browsers have opted to "defer" custom element rendering until step 4 (not with step 3). This is great for SEO as the first contentful paint can happen sooner; this is unfortunate for custom elements as it means that `<zui-my-element></zui-my-element>` will get rendered based off of some very old HTML rendering rules around unknown or invalid HTML. Then, the next couple of frames will start to upgrade the custom elements and saturate the content. It's worth stressing that this is still very fast; and for you SPA folks out there, this will definitely not be noticeable prior to your app fully loading (you have a lot more JavaScript to process and execute, believe us). But for you server-side-rendering folks, this WILL be noticeable.

What we've just described is known as FOUC: <strong>F</strong>lash <strong>O</strong>f <strong>U</strong>nstyled <strong>C</strong>ontent.

We additionally offer some CSS to help with this FOUC. In all of our components, there will be an extra bit of CSS you can choose to load: `dist/css/zui-*.fouc.css`. These CSS files will define some styles that, when loaded, will help the browser style your undefined elements until they are saturated and upgraded.

<docs-note>Protip: you can also write your own FOUC styling by using `:not(:defined)`.</docs-note>

So, if you decide to contribute to ZUI in the way of custom elements, please be sure to provide some FOUC styles if relevant. You can even use our handy dandy SASS mixin found in `zui-sass-scripts`:

```scss
my-element {
  @include undefined-element {
    display: none; // no my-element for you!
  }
}
```
<br>

**Pro tip #1:** Need to test your FOUC styles? Before your components get loaded in `<script>` tags, just add the following:

```html
<script>
  window.customElements.define = function () {
    /* lel we hijacked custom element registration */
  };
</script>
```
<br>

**Pro tip #2:** Have multiple FOUC stylesheets you're loading? Combine them into one with the power of SASS!

```scss
// fouc.scss
@import "node_modules/@zywave/zui-button/dist/css/zui-button.fouc.css";
@import "node_modules/@zywave/zui-dialog/dist/css/zui-dialog.fouc.css";
@import "node_modules/@zywave/zui-icons/dist/css/zui-icons.fouc.css";
@import "node_modules/@zywave/zui-shell/dist/css/zui-shell.fouc.css";

// output as single CSS file
```

```html
<!-- link in head of your HTML document -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" src="fouc.css" />
  </head>
  ...
</html>
```

---

## Troubleshooting

This monorepo can be quite a beast to work in. If you find yourself in some weird scenarios, here are some possible steps that might help.

<docs-spacer size="small"></docs-spacer>

### Merge conflicts and Yarn:

Just don't worry about merge conflicts in the _yarn.lock_ file. It's not worth it.

1. Mark as resolved
1. Delete it
1. `yarn install` to recreate it
1. Add the new _yarn.lock_ file to your commit and carry on

<docs-spacer size="small"></docs-spacer>

### The "Burn it with fire" approach:

<zui-well type="warning">
<strong>Note:</strong> Do NOT delete the <em>yarn.lock</em> file without regenerating it. This file is very important for stability of the monorepo, especially <code>zui-bundle</code>.
</zui-well>

1. Delete _/node_modules/_
   - This one takes awhile, so press Shift + Delete on the folder in File Explorer to skip the recycle bin
1. `yarn install`
1. `yarn run bootstrap`
1. `yarn run build`

If you'd rather not have to type this out explicitly, you can run the following:

_Windows_:

```shell
> yarn run nuke:windows
```

<br>

_Linux:_

```shell
> yarn run nuke:nix
```
<br>

<docs-note>This method will take a while.</docs-note>

---

## Creating a new component

Prior to creating a new component, please consult with us before doing so. We want to ensure that we are not duplicating efforts, and that the component you are creating is something that we want to include in the Booster Development Network design system.

If you are creating a new web component (e.g., `<zui-my-element>`), you may use the built-in ZUI web component generator. However, using the generator requires that you have [Yeoman](https://yeoman.io/) installed on your machine. If you don't have it installed, run `npm i -g yo` to install it prior to generating a new web component.

```shell
> yarn run generate:wc
```
<br>
<docs-note>When asked to name your new component, please prefix it with <strong><code>zui-</code></strong>.</docs-note>
<br>
<zui-expander-group type="group-standard">
  <zui-expander type="group-standard">
    <h3 class="zui font-size-l font-weight-semibold" slot="title">The command will generate the following...</h3>
    <div slot="content">
      <ul>
        <li>A new package with your component name defined under <em>/packages/components/</em> (e.g., <em>/packages/components/zui-my-element/</em>)</li>
        <li><em>/src/</em> directory
          <ul>
            <li><em>index.ts</em> exports your component</li>
            <li><em>zui-my-element.ts</em> includes a sample element with your component's name to get the ball rolling</li>
            <li><em>zui-my-element.scss</em> file to style your component</li>
            <li><em>/css/</em> directory for your component's flash of unstyled content styles</li>
            <li><em>package.json</em> to define the package, and various commands to compile, build and start the lab, tests, etc.</li>
            <li><em>tsconfig.build.json</em> to compile Typescript</li>
          </ul>
        </li>
        <li><em>lab.html</em>
          <ul>
            <li>Web page playground to test your component locally</li>
            <li>Great way to showcase examples of your component's features</li>
            <li>Local development environment for your component can be started up with `yarn run watch` (requires the working directory to be inside your new component's folder)</li>
          </ul>
        </li>
        <li><em>/test/</em> directory
          <ul>
            <li>Where you will write tests to verify your component's functionality</li>
            <li>Start up the local development environment for your component's tests with `yarn run test` (requires the working directory to be inside your new component's folder)</li>
          </ul>
        </li>
        <li><em>/docs/</em> directory
          <ul>
            <li>This directory provides working examples to be showcased in the Booster Documentation Network site</li>
            <li><em>demo.html</em> is where you will write code examples or demos of all the possible ways to use your component that will appear in the "Demos" tab of your component's documentation page on Booster Development Network</li>
            <li>Start up the local development environment for your component's documentation with `yarn run demo` (requires the working directory to be inside your new component's folder)</li>
          </ul>
        </li>
      </ul>
    </div>
  </zui-expander>
</zui-expander-group>
<docs-spacer size="small"></docs-spacer>
<docs-note><strong>Common gotcha:</strong> If you're adding more elements to the same package, be sure to add an export statement to the <em>/src/index.ts</em> file!</docs-note>

<docs-spacer size="small"></docs-spacer>

### Add new component to zui-components-all

For your component to be recognized by `zui-bundle` please add it to `zui-components-all`'s _package.json_ by running the following command from the root of the project. Following the example below, replace `zui-my-element` with your component's name.

```shell
> npx lerna add @zywave/zui-my-element --scope=@zywave/zui-components-all
```

<docs-spacer size="small"></docs-spacer>

### Add new component to zui-bundle

Since `zui-components-all` is a dependency of `zui-bundle`, you need to manually add a line to import your new component package into `/packages/misc/zui-bundle/src/bundle.js`. Also add your component's FOUC styles into `/packages/misc/zui-bundle/src/css/zui-bundle.fouc.scss` too. Following the example below, replace `zui-my-element` with your component's name.

```javascript
// bundle.js
import '@zywave/zui-my-element';
```

```scss
// zui-bundle.fouc.scss
@use '@zywave/zui-my-element/dist/css/zui-my-element.fouc.css';
```

---

## Creating a new CSS package

Prior to creating a new CSS package, please consult with us before doing so. We want to ensure that we are not duplicating efforts, and that the styles you are adding fit in the Booster Development Network design system.

If you are creating a new CSS package, you may use the built-in ZUI CSS package generator. However, using the generator requires that you have [Yeoman](https://yeoman.io/) installed on your machine. If you don't have it installed, run `npm i -g yo` to install it prior to generating a new package.

```shell
> yarn run generate:styles
```
<br>
<docs-note>When asked to name your new package, please prefix it with <strong><code>zui-</code></strong>.</docs-note>
<br>
<zui-expander-group type="group-standard">
  <zui-expander type="group-standard">
    <h3 class="zui font-size-l font-weight-semibold" slot="title">This will give you...</h3>
    <div slot="content">
      <ul>
        <li>A new package with your component name defined under <em>/packages/styles/</em> (e.g., <em>/packages/styles/zui-my-styles/</em>)</li>
        <li>A <em>/src/</em> directory
          <ul>
            <li><em>index.scss</em> file to import multiple stylesheets into one</li>
            <li><em>\<em>partial.scss</em> and <em>module.scss</em> are examples of how to organize SCSS components by purpose and reusability within the package or design system</li>
          </ul>
        </li>
        <li>A <em>package.json</em> to define the package</li>
        <li>A <em>gulpfile.js</em> to handle building, demoing, etc.</li>
        <li><em>lab.html</em>
          <ul>
            <li>Web page playground to test your styles locally</li>
            <li>Great way to showcase CSS styles and examples</li>
            <li>Local development environment for your CSS package can be started up with `npx gulp watch` (requires the working directory to be inside your new packages's folder)</li>
          </ul>
        </li>
      </ul>
    </div>
  </zui-expander>
</zui-expander-group>

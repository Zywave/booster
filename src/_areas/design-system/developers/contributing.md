---
layout: documentation
title: Contributing
subtitle: Help us help you.
---

<Tabs :tabs="['Developing ZUI', 'Contributing']">
<TabPage>

## Initialization

1. `cd ${insert path to root of ZUI here}`
1. `yarn install`
   - This one takes awhile. Sorry.
1. `yarn run bootstrap`
   - Using a tool called lerna, we do some really cool stuff to get the monorepo to play nicely with ZUI-to-ZUI dependencies.
1. `yarn run build`
   - Runs through every package defined in the monorepo and executes their `"build"` script as defined in their respective `package.json` file.

---

## Creating a component

If you're creating a new web component (e.g. `<zui-my-element>`), feel free to use the built-in ZUI component generator.

**Note:** This assumes you have yeoman installed (`npm i -g yo`)

```shell
> yarn run generate:wc
```

This will give you:

- a new package defined under packages/components/\${elementName}
- a src/ directory
  - includes a sample element to get the ball rolling
  - a package.json to define the package, and various commands to compile, build and start the lab demo
  - a tsconfig.build.json to compile typescript
- a lab
  - stored in the index.html file
  - can be started up with `yarn run watch` (requires the working directory to be inside your new component's folder)

**Common gotcha:** If you're adding more elements to the same package, be sure to add an import statement to the index.js file!

**Add new component to `zui-components-all`:** For your component to be recognized by `zui-bundle` please add to `zui-components-all`'s `package.json` by running the following command from the root of ZUI; update `zui-new-component-name` with your component's name, i.e. `zui-breadcrumbs`

```shell
> npx lerna add @zywave/zui-new-component-name --scope=@zywave/zui-components-all
```

**Also add new component to `zui-bundle`**: Since `zui-components-all` is a dependency of `zui-bundle`, you simply need to manually add a line to import your new component package into `/packages/misc/zui-bundle/src/zui-bundle.js`. Also add your component's FOUC styles into `/packages/misc/zui-bundle/src/css/zui-bundle.fouc.scss` too

<Spacer size="small" />

### Creating an experimental component

If the component you are creating has yet to be approved as a ZUI component, it is considered an experimental component. **All experimental components must be added to the `exp` branch.** Follow all instructions in the Creating a component section, but make sure you are branching off the `exp` branch instead of the `dev` branch.

```shell
> git fetch origin
> git checkout -t origin/exp
> git checkout -b new-branch-name
```

---

## Creating a CSS package

If you want to create a new CSS package, the provided template should help get the ball rolling.

**Note:** This assumes you have yeoman installed (`npm i -g yo`)

```shell
> yarn run generate:styles
```

This will give you:

- a new package defined under packages/styles/\${cssPackageName}
- a src/ directory
  - includes sample .scss files to get the ball rolling
  - a package.json to define the package
  - a gulpfile to handle building, demoing, etc.
- a lab
  - stored in the index.html file
  - can be started up with `npx gulp watch` (requires the working directory to be inside your new packages's folder)

Be sure to follow [the style guide](./getting-started/contributing/#sass-css)!

---

## Style guide

### JavaScript

For the most part, we use prettier and eslint to help you out here. You shouldn't have to worry about anything; we even have a precommit hook set up to auto format / validate your code.

For you vscode users, here are some recommendations to keep you in sync:

- [prettier-vscode](https://github.com/prettier/prettier-vscode).
- set `"editor.formatOnSave"` to `true` in File > Preferences > Settings

<Spacer size="small"/>

### Sass/CSS

Coming soon!

<Spacer size="small"/>

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

```html
<my-element my-property="good!"></my-element>
```

This requires some work on ZUI's end. If extending PolymerElement, this behavior is baked in. However, if extending LitElement (or ZuiBaseElement), you'll have to do something like the following:

```js
class MyElement extends LitElement {
  @property({ attribute: "my-property", type: String, reflect: true })
  myProperty = undefined;

  /* more stuff here */
}
```

#### Public and private

JavaScript is not the most obvious language when trying to do OOP. But, with ES6 classes, people have tried to get closer to actual OOP paradigms. One of the ways this is accomplished is by being explicit in your property and method declarations. You'll see this principles in practice in our web component libraries of choice, lit-html/lit-element.

Public:

- methods: `camelCase()`
- properties: `camelCase`

Private:

- methods: `_camelCase()`
- properties: `_camelCase`

#### Custom CSS properties

With ZUI, one of the main ways for a consumer to manipulate a component is via CSS Custom Properties. If you are unsure what we mean by that, checkout [our documentation](../developers/web-components#css-variablescustom-properties). All of our custom CSS properties should look like the following:

```css
:host {
  --zui-my-element-color: hotpink;
}
```

1. We namespace the property to ZUI (don't want to clash with others)
1. We then scope it to the proper custom element
1. And finally we indicate what the intent of the property is

So, this variable specifies a color for `<zui-my-element>` to be used in its CSS.

#### What the FOUC?

One caveat to custom elements is the way in which the browser will render them. Let's give a really basic (contrived) example:

1. User navigates to https://www.example.com/
1. Browser loads HTML on this page, stopping to load stylesheets, scripts, etc.
1. Browser renders what it can
1. Browser begins to compile and execute JavaScript
1. Application is fully loaded

Custom elements require JavaScript to be processed in order for the HTML elements to be rendered properly. Browsers have opted to "defer" custom element rendering until step 4 (not with step 3). This is great for SEO as the first contentful paint can happen sooner; this is unfortunate for custom elements as it means that `<my-element></my-element>` will get rendered based off of some very old HTML rendering rules around unknown or invalid HTML. Then, the next couple of frames will start to upgrade the custom elements and saturate the content. It's worth stressing that this is still very fast; and for you SPA folks out there, this will definitely not be noticeable prior to your app fully loading (you have a lot more JavaScript to process and execute, believe us). But for you server-side-rendering folks, this WILL be noticeable.

What we've just described is known as FOUC: <span style="text-decoration: underline;">F</span>lash <span style="text-decoration: underline;">O</span>f <span style="text-decoration: underline;">U</span>nstyled <span style="text-decoration: underline;">C</span>ontent.

We here at ZUI want to help you, no matter what way you deliver HTML content to our users. So, as part of our process of maintaining ZUI, we've come up with a solution. In all of our components, there will be an extra bit of CSS you can choose to load: `dist/css/zui-*.fouc.css`. This CSS package will define some styles that, when loaded, will help the browser style your undefined elements until they are saturated and upgraded. There is one caveat to this, and it's in the form of Internet Explorer (yay!). If you care about your elements at load time to not encounter this flash, you will need to sprinkle `unresolved` attributes on your ZUI components. This attribute will help to mimic what vanilla custom elements have provided us, the `:defined` pseudoselector. We use this (via `:not(:defined)`) to out of the box handle displaying a button that looks like, well, a button, even if it hasn't been upgraded yet. The unresolved attribute is _technically_ slower than what the browser can provide, but probably barely noticeable to the naked eye.

So, if you decide to contribute to ZUI in the way of custom elements, please be sure to provide some FOUC styles if relevant. You can even use our handy dandy SASS mixin found in `zui-sass-scripts`:

```scss
my-element {
  @include undefined-element {
    display: none; // no my-element for you!
  }
}
```

**Pro tip #1:** Need to test your FOUC styles? Before your components get loaded in `<script>` tags, just add the following:

```html
<script>
  window.customElements.define = function () {
    /* lel we hijacked custom element registration */
  };
</script>
```

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

This monorepo can be quite a beast to work in. If you find yourself in some weird scenarios, here's some possible steps that might help.

### Merge conflicts and yarn:

Just don't worry about merge conflicts in the yarn.lock file. It's not worth it.

1. Mark as resolved
1. Delete it
1. `yarn install` to recreate it
1. Add the new yarn.lock file to your commit and carry on

<Spacer size="small"/>

### The "Burn it with fire" approach:

<zui-well type="warning">
<strong>Note:</strong> Do NOT delete the yarn.lock file. This file is very important for stability of the monorepo, especially zui-bundle.
</zui-well>

1. Delete node_modules/
   - This one takes awhile, I'm sorry
   - Shift + Delete on the folder in File Explorer to skip the recycle bin
1. `yarn install`
1. `yarn run bootstrap`
1. `yarn run build`

If you'd rather not have to type this out explicitly, you can run the following:

_Windows_:

```shell
> yarn run nuke:windows
```

_Linux:_

```shell
> yarn run nuke:nix
```

**Note:** This still will take a while.

</TabPage>
<TabPage>

ZUI has a series of automated systems that ensure we are able to easily release packages whenever we need to, and properly communicate the impact of those changes to developers. For this to work properly, we have some rules around how to help.

<Spacer/>

## Branching

ZUI operates with two main branches in mind:

1. dev:
   - This branch should always be in a state where it can reasonably be merged into master and ready to go at any time. All active development should be done to branches made off of dev.
   - No code push should ever be made direct to dev. Only merges.
   - Prerelease versions (suffixed with `-pre`) are created out of this branch.
1. master:
   - This branch is always the stable version of ZUI. Full stable releases are made out of this branch.
   - Only merges from dev are allowed to get changes into master.
1. other branches:
   - Call them something easy to understand (not just "fix-stuff")
   - Delete them when they are merged into dev (no need for other persistent branches)

---

## Commiting

ZUI uses lerna for CI operations across the entire monorepo. There's two things to note:

1. On commit, a precommit hook is executed that will lint (and fix if possible) all staged files about to be committed.
   - JS: uses eslint + prettier
   - CSS/SCSS: uses stylelint + prettier
   - If the linter doesn't run, and you have formatting or linting errors, the CI will fail
1. On versioning, commit messages are evaluated by lerna's hook with conventional-changelog to autoincrement versions
   - This is super important, and is something you should actively follow to help keep the versions and CHANGELOGs up-to-date

<Spacer size="small"/>

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

The most important part, for us, is type (which is parsed from the commit message).

✔ Good:

```shell
> git commit -m "chore: fixing some ci issues"
> git commit -m "feat: wells now support 'dismissible' feature
```

❌ Bad:

```shell
> git commit -m "pat is dumb"
> git commit -m "Updating index.js"
```

If you want to have an easy template for all ZUI commit messages, you can actually execute the following to the root of the repository:

```shell
> git config --local commit.template "./.gitmessage"
```

Now, when you try to make a commit, you'll get a prompt to fill in the commit details with more information regarding your changes. This also works with git UI tools, like GitKraken.

<Spacer size="small"/>

### Conventional changelog

_Recommended links_:

- [Conventional changelog](https://github.com/conventional-changelog/conventional-changelog/)

Based off of your commit messages, lerna + conventional-changelog will do a diff between the last version of a given package and the currently releasing changes, and figure out the proper version.

ZUI 4.x is what we're currently on, and we plan to keep it that way until something shinier comes along. So, ZUI uses a slight fork of [conventional-changelog-angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular) which lets us pin down the major version, and sticks us in the minor and patch increments for all updates. You can see the source code for our version here: https://gitlab.zywave.com/zui/zui/tree/dev/scripts/packages/conventional-changelog-zui.

<Spacer size="small"/>

#### How ZUI currently versions itself (in descending priority):

1. If the commit contains `BREAKING CHANGE: &lt;reason&gt;` in the body, we will bump the minor version (4.1.6 => 4.2.0)
   <zui-well type="warning" static>
   You won't be able to commit using `git commit -m` because this only accepts a subject line. Instead, use `git commit`, which will prompt your Git default text editor to open so you can include a body message.
   </zui-well>
1. If the commit subject starts with `feat:`, `fix:`, or `perf:`, we'll do a patch (unless the body also includes `BREAKING CHANGE: &lt;reason&gt;`)
1. If the commit subject starts with `chore:`, `build:`, `docs:`, `refactor:`, `ci:`, `style:`, or `test:` we'll do nothing with the version (but include the notes in the CHANGELOG)
1. If you don't follow the rules, we won't do anything. Hopefully you didn't change anything meaningful.

<Spacer size="small"/>

##### How to commit a breaking change to ZUI

If you are not using a GUI, follow the instructions below on how to commit a breaking change via command line.

1. In command prompt, stage all your breaking changes first and then type `git commit` and press the `<enter>` key:

```shell
> git commit
```

1. Your default Git text editor will open and prompt you to provide a commit message. The first line will always be your subject and any lines following will be the body:

```shell
feat: removed app name slots from zui-shell

BREAKING CHANGE: removed the slots "app" from zui-shell-topbar
and zui-shell-nav in favor of the attribute app-name on zui-shell
```

1. After you have entered your message, all you need to do is save and close the file for Git to commit your changes.

<Spacer size="small"/>

### Troubleshooting

If you're curious at any time what the next release of ZUI will look like, you can execute the following command against the dev (or master) branch:

dev:

```shell
> npx lerna version --conventional-prerelease=*
```

master:

```shell
> npx lerna version --conventional-graduate
```

<zui-well type="warning" static>Don't commit the changes generated as a result of this. You can reject the changes before the updates are saved to your repo.</zui-well>

---

## Merge requests

ZUI offers several merge request templates to help explain the intent of the changes. When you go to log a merge request, near the "title" section, you can select a template and we'll provide you some guidelines for how to better communicate the changes.

Some quick best practices:

- Keep the merge request small; the monorepo structure might tempt you to make many changes all at once, but it's harder to review, and harder to properly associate your changes with the right packages.
- For "code review" merge requests, you can always prepend `WIP:` to the title to prevent accidental merging.
- Delete the source branch once it has been merged into dev.
- If your changes are isolated to one package, feel free to check the `Squash commits when merge request is accepted.` box. Just be sure that the title of the merge request (or the resulting commit message) follows our rules above.
- If your changes span many packages, don't squash the commits. Better to have targeted, explicit commits against the changed code than one blob commit that is hard for conventional-changelog to properly allocate to the right package(s).

</TabPage>
</Tabs>

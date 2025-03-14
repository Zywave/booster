# ZUI Bundle

ZUI, out of the box, provides ES modules with bare path modifiers (e.g. `import '@zywave/zui-foo-bar'`). This is great as that's the way browsers are _going_, but they aren't there quite yet. Tooling exists to help solve this problem like webpack or rollup. If you really just need to get ZUI (all of ZUI) into your project and don't want to configure a build process, this is the package for you.

`zui-bundle` creates three main artifacts:

- `dist/bundle.js`\*: Most of the JS components (e.g. custom elements) of ZUI; with the exception of some components
- `dist/css/zui-bundle.app.css`: All of the separate CSS sheets merged into one (e.g. fonts, styles, etc.)
- `dist/css/zui-bundle.fouc.css`: All of the FOUC (flash of unstyled content) CSS sheets merged into one

In most cases, you will want all three.

\* Note: ZUI Table is not included in `dist/bundle.js` because it is an opt-in only component.

For more information on installing this bundle, see our [getting started guide](https://booster.zywave.dev/introduction/getting-started/how-to-get-started/).

## ZUI Table

ZUI Table is an opt-in only component. If you want to use it, you'll need to import it separately. For more information, please check out the [ZUI Table documentation](https://booster.zywave.dev/design-system/components/tables/).

```html
<script type="module" src="https://cdn.zywave.com/@zywave/zui-bundle@{latest|next}/dist/components/table.js"></script>
```

Location of the artifact in the `zui-bundle` package: `dist/components/table.js`

# Installation via CDN

We recommend using the Zywave CDN to serve up the ZUI bundle. This will ensure that you are always using the latest stable version of ZUI with the `@latest` distribution tag.

```html
<!doctype html>
<html>
  <head>
    <title>Installing zui-bundle</title>

    <!-- These two stylesheets should always be listed before all other application styles -->
    <!-- Make sure `zui-bundle.fouc.css` is always listed first to counter FOUC -->
    <link rel="stylesheet" href="https://cdn.zywave.com/@zywave/zui-bundle@{latest|next}/dist/css/zui-bundle.fouc.css" />
    <link rel="stylesheet" href="https://cdn.zywave.com/@zywave/zui-bundle@{latest|next}/dist/css/zui-bundle.app.css" />

    <script type="module" src="https://cdn.zywave.com/@zywave/zui-bundle@{latest|next}/dist/bundle.js"></script>
  </head>
  <body>
    <!-- your content here -->
  <body>
</html>
```

## Distribution tags

There are two distribution tags we supply: `@latest` and `@next`. `@latest` will always point to the latest stable version of ZUI. `@next` will always point to the latest version of ZUI, regardless of stability. Learn more about the benefits of using our CDN with distribution tags [here](https://booster.zywave.dev/introduction/getting-started/installing-packages/#%40latest-and-%40next-tags).

## Installation via NPM or Yarn

If you want an à la carte experience, you can install individual component packages via Yarn or NPM.

The following works with no extra work:

```
> yarn add @zywave/zui-components-all
> yarn add @zywave/zywave-components-all
```

```
> npm install @zywave/zui-components-all
> npm install @zywave/zywave-components-all
```

# Run ZUI Bundle locally

Relative to this directory:

1. `yarn run build:after`
1. `yarn run lab`

## Debugging

**Note:** This bundle doesn't observe the "source" of ZUI, but rather the built outputs of each and every package. If you make a change in a TypeScript file in a component, you will need to rebuild that package prior to building the bundle.

The generated output from Rollup is quite hard to read. This is done purposefully, not to be difficult to read, but to reduce bytes in our final output. However, sometimes you really just want to see the full bundle in its legible glory.

There are a few plugins in the `rollup.config.js` file in this package that you can "turn off" by commenting them out:

1. `terser`
1. `cleanup`

By commenting those plugins, and then rebuilding the bundle, you'll more easily be able to debug this package.

See [the documentation site](http://booster.zywave.dev/) for more information.

# Contributing

Every time a new component is created, it should be added to zui-components-all and zui-bundle.

## Adding a new component to the bundle

For your component to be recognized by zui-bundle, please add it to zui-components-all's `package.json` by running the following command from the root of ZUI:

```shell
npx lerna add @zywave/zui-new-component-name --scope=@zywave/zui-components-all
```

### Add the new component to zui-bundle

Since zui-components-all is a dependency of zui-bundle, you simply need to manually add a line to import your new component package into `/packages/misc/zui-bundle/src/bundle.js`.

Also, add your component's FOUC styles into `/packages/misc/zui-bundle/src/css/zui-bundle.fouc.scss`.

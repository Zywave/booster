import { c as css, n as nothing, p as property, q as query, Z as ZuiBaseElement, h as html, s as svg, u as updateCustomState, b as classMap } from './_a9b1a7d3.js';

const style$1 = css`:host{display:inline-block;width:var(--zui-icon-size, 1.5rem);height:var(--zui-icon-size, 1.5rem);line-height:1;fill:currentColor}:host .zui-icon-color{--zui-icon-color: currentColor}zui-svg{display:inherit;width:inherit;height:inherit;line-height:inherit;fill:inherit;pointer-events:none}:host(.small){width:var(--zui-icon-size, 1rem);height:var(--zui-icon-size, 1rem)}:host(.medium){width:var(--zui-icon-size, 1.5rem);height:var(--zui-icon-size, 1.5rem)}:host(.large){width:var(--zui-icon-size, 2.25rem);height:var(--zui-icon-size, 2.25rem)}:host(.xlarge){width:var(--zui-icon-size, 3rem);height:var(--zui-icon-size, 3rem)}`;

const style = css`:host{display:inline-block;width:var(--zui-svg-width, 1rem);height:var(--zui-svg-height, 1rem);margin:0;padding:0;line-height:1;fill:currentColor;pointer-events:none}:host .svg{display:inherit;width:inherit;height:inherit;line-height:inherit;fill:inherit;pointer-events:inherit}:host(.small){--zui-svg-width: 1rem;--zui-svg-height: 1rem}:host(.medium){--zui-svg-width: 1.5rem;--zui-svg-height: 1.5rem}:host(.large){--zui-svg-width: 2.25rem;--zui-svg-height: 2.25rem}:host(.xlarge){--zui-svg-width: 3rem;--zui-svg-height: 3rem}.svg-defs{display:none}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * For AttributeParts, sets the attribute if the value is defined and removes
 * the attribute if the value is undefined.
 *
 * For other part types, this directive is a no-op.
 */
const ifDefined = value => value ?? nothing;

var __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created mostly to support `<zui-icon>` but can be used to render native `.svg` files, and `.svg` spritesheets in tandem with `svg-id` / `svgId`.
 *
 * @prop {string} [viewBox=(variable)] - `viewBox` determines an `*.svg` file's canvas size; this value in most situations is automatically found and set but if your graphics aren't displaying or scaling correctly, copy and supply the `viewBox="0` `0` `#` `#"` from your `<svg>`
 *
 * @attribute {string} [svg-id=(variable)] - `viewBox` determines an `*.svg` file's canvas size; this value in most situations is automatically found and set but if your graphics aren't displaying or scaling correctly, copy and supply the `viewBox="0` `0` `#` `#"`  from your `<svg>`
 *
 * @cssprop [--zui-svg-width=1rem (16px)] - Width of component
 * @cssprop [--zui-svg-height=1rem (16px)] - Height of component
 */
class ZuiSvg extends ZuiBaseElement {
  constructor() {
    super(...arguments);
    /**
     * Only applicable to svg sprites, supply an id for which `<symbol>` to show i.e. `id="#graphic-name"`
     */
    this.svgId = '';
    /**
     * Link to external `*.svg` file
     */
    this.file = '';
    this.svgNodeClone = null;
  }
  static get styles() {
    return [super.styles, style];
  }
  render() {
    if (!this.svgId) {
      return html`
        <style>
          :host {
            display: none;
          }
        </style>
      `;
    }
    this.svgNodeClone = undefined;
    const svgNode = !this.file ? document.getElementById(this.svgId) : undefined;
    if (svgNode) {
      this.svgNodeClone = svgNode.cloneNode(true);
    }
    let viewBox = this.viewBox;
    if (!viewBox && this.svgNodeClone) {
      viewBox = this.svgNodeClone.getAttribute('viewBox');
    }
    const href = `${this.file}#${this.svgId}`;
    return html`
      ${this.svgNodeClone ? html` <svg focusable="false" class="svg-defs"><defs>${this.svgNodeClone}</defs></svg> ` : html``}
      ${svg`<svg viewBox="${ifDefined(viewBox)}" focusable="false" class="svg" id="svg">
        <use href="${href}" xlink:href="${href}"></use>
      </svg>`}
    `;
  }
}
__decorate$1([property({
  type: String,
  attribute: 'svg-id'
})], ZuiSvg.prototype, "svgId", void 0);
__decorate$1([property({
  type: String,
  attribute: 'file'
})], ZuiSvg.prototype, "file", void 0);
__decorate$1([property({
  type: String,
  attribute: 'viewBox'
})], ZuiSvg.prototype, "viewBox", void 0);
__decorate$1([query('svg')], ZuiSvg.prototype, "_svg", void 0);
window.customElements.define('zui-svg', ZuiSvg);

const importMapCategories = {
  nav: () => import('./_4e1c2dec.js'),
  fs: () => import('./_8b221bc3.js'),
  shell: () => import('./_cdf243a9.js'),
  system: () => import('./_aff40635.js'),
  search: () => import('./_c5b70211.js')
};
const cache = new Map();
function determineCategoryToLoad(iconValue) {
  const splitString = iconValue.split('-');
  let category = '';
  if (splitString.length > 2) {
    category = splitString[1];
  }
  if (!Object.prototype.hasOwnProperty.call(importMapCategories, category)) {
    category = 'system';
  }
  return category;
}
function loadCategoryFile(category) {
  let p = cache.get(category);
  if (!p) {
    /* eslint-disable no-async-promise-executor */
    p = new Promise(async resolve => {
      const file = await importMapCategories[category]();
      const contents = file.svgSprite.strings[0];
      resolve(contents);
    });
    cache.set(category, p);
  }
  return p;
}
function addSVGs(contents, category) {
  const queryIconsContainer = document.querySelector(`[data-icons-container='${category}']`);
  if (!queryIconsContainer) {
    const element = document.createElement('div');
    element.setAttribute('data-icons-container', category);
    element.style.display = 'none';
    element.innerHTML = contents;
    document.head.appendChild(element);
  }
}
async function ensureSVGLoaded(icon) {
  const category = determineCategoryToLoad(icon);
  const contents = await loadCategoryFile(category);
  addSVGs(contents, category);
}

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * `<zui-icon>` gives consumers ability to leverage our ZUI defined stickersheet of SVG icons.
 *
 * @element zui-icon
 *
 * @cssprop [--zui-icon-size=1.5rem (24px)] - To customize size of icon, assign a new value to this custom property; this property applies to both width and height, therefore component assumes icon is of square aspect ratio
 * @cssprop [--zui-icon-color=currentColor] - To change fill/color of icon that is colorized by default, assign a new value to this custom property
 *
 * @event load - Event fires upon `zui-icon` completing its load and render
 *
 * @cssState loaded - Applied when icon is loaded
 */
class ZuiIcon extends ZuiBaseElement {
  static get styles() {
    return [super.styles, style$1];
  }
  #internals;
  #iconLoaded;
  constructor() {
    super();
    /**
     * Specify a value to choose an icon, see 'Usage' tab for available icons
     */
    this.icon = '';
    /**
     * Set to true to revert the default `zui-icon` fill of a colorized icon to the inherited font color, which is typically `var(--zui-gray-800)`. Has no effect on non-colorized icons.
     */
    this.removeIconColor = false;
    this.#internals = null;
    this.#iconLoaded = false;
    this.#internals = this.attachInternals?.();
  }
  async updated(changedProps) {
    if (changedProps.has('icon')) {
      this.#iconLoaded = false;
      this.requestUpdate();
      await ensureSVGLoaded(this.icon);
      this.#iconLoaded = true;
      this.requestUpdate();
      await this.updateComplete;
      this.dispatchEvent(new CustomEvent('load', {
        bubbles: true,
        detail: {
          svgLoaded: true
        }
      }));
      updateCustomState(this.#internals, 'add', 'loaded');
    }
  }
  render() {
    if (!this.icon) {
      return html` <style>
        :host {
          display: none;
        }
      </style>`;
    }
    const classes = {
      'zui-icon-color': this.removeIconColor
    };
    return html`
      ${this.#iconLoaded ? html` <zui-svg class="${classMap(classes)}" svg-id="${this.icon}"></zui-svg> ` : html``}
    `;
  }
}
__decorate([property({
  type: String,
  attribute: 'icon'
})], ZuiIcon.prototype, "icon", void 0);
__decorate([property({
  type: Boolean,
  attribute: 'no-color'
})], ZuiIcon.prototype, "removeIconColor", void 0);
window.customElements.define('zui-icon', ZuiIcon);

export { ZuiIcon as Z, ifDefined as i };

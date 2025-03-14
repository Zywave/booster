import { p as property, g as desc, c as css, Z as ZuiBaseElement, h as html } from './_a9b1a7d3.js';

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Declares a private or protected reactive property that still triggers
 * updates to the element when it changes. It does not reflect from the
 * corresponding attribute.
 *
 * Properties declared this way must not be used from HTML or HTML templating
 * systems, they're solely for properties internal to the element. These
 * properties may be renamed by optimization tools like closure compiler.
 * @category Decorator
 */
function state(options) {
  return property({
    ...options,
    // Add both `state` and `attribute` because we found a third party
    // controller that is keying off of PropertyOptions.state to determine
    // whether a field is a private internal property or not.
    state: true,
    attribute: false
  });
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * A property decorator that converts a class property into a getter that
 * returns the `assignedNodes` of the given `slot`.
 *
 * Can be passed an optional {@linkcode QueryAssignedNodesOptions} object.
 *
 * Example usage:
 * ```ts
 * class MyElement {
 *   @queryAssignedNodes({slot: 'list', flatten: true})
 *   listItems!: Array<Node>;
 *
 *   render() {
 *     return html`
 *       <slot name="list"></slot>
 *     `;
 *   }
 * }
 * ```
 *
 * Note the type of this property should be annotated as `Array<Node>`. Use the
 * queryAssignedElements decorator to list only elements, and optionally filter
 * the element list using a CSS selector.
 *
 * @category Decorator
 */
function queryAssignedNodes(options) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (obj, name) => {
    const {
      slot
    } = options ?? {};
    const slotSelector = `slot${slot ? `[name=${slot}]` : ':not([name])'}`;
    return desc(obj, name, {
      get() {
        const slotEl = this.renderRoot?.querySelector(slotSelector);
        return slotEl?.assignedNodes(options) ?? [];
      }
    });
  };
}

const screenBreakpoints = {
  xxsmall: '30em' /* 480 / 16 */,
  xsmall: '45em' /* 720 / 16 */,
  small: '60em' /* 960 / 16 */,
  medium: '64em' /* 1024 / 16 */,
  large: '80em' /* 1280 / 16 */,
  xlarge: '120em' /* 1920 / 16 */
};

const style$1 = css`:host .container{position:relative;display:inline-block;width:var(--zui-spinner-size, 1.75rem);height:var(--zui-spinner-size, 1.75rem);animation:container-rotate 1568ms linear infinite;direction:ltr}@keyframes container-rotate{100%{transform:rotate(360deg)}}:host .spinner-layer{position:absolute;width:100%;height:100%;white-space:nowrap;color:var(--zui-spinner-color, var(--zui-blue));animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite}@keyframes fill-unfill-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}:host .spinner-layer::after{position:absolute;top:0;left:45%;content:"";width:10%;border-width:var(--zui-spinner-stroke-width, 0.1875rem);border-radius:50%;border-top-style:solid}:host .circle-clipper{position:relative;display:inline-block;width:50%;height:100%;overflow:hidden}:host .circle-clipper .circle{position:absolute;top:0;bottom:0;width:200%;border-width:var(--zui-spinner-stroke-width, 0.1875rem);border-style:solid;border-radius:50%;animation:left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite;border-bottom-color:rgba(0,0,0,0) !important;box-sizing:border-box}:host .circle-clipper.left .circle{left:0;transform:rotate(129deg);border-right-color:rgba(0,0,0,0) !important}@keyframes left-spin{0%{transform:rotate(130deg)}50%{transform:rotate(-5deg)}100%{transform:rotate(130deg)}}:host .circle-clipper.right .circle{left:-100%;animation-name:right-spin;transform:rotate(-129deg);border-left-color:rgba(0,0,0,0) !important}@keyframes right-spin{0%{transform:rotate(-130deg)}50%{transform:rotate(5deg)}100%{transform:rotate(-130deg)}}:host(:not([active])) .container{display:none}`;

var __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Lightweight spinner graphic to indicate loading.
 *
 * @element zui-spinner
 *
 * @cssprop [--zui-spinner-color=var(--zui-gray)] - Spinner circle color
 * @cssprop [--zui-spinner-size=1.75rem (28px)] - To customize size of spinner assign a new value to this custom property; this property applies to both width & height therefore component assumes spinner is square aspect ratio
 * @cssprop [--zui-spinner-stroke-width=3px] - Thickness of the circle

 */
class ZuiSpinnerElement extends ZuiBaseElement {
  constructor() {
    super(...arguments);
    /**
     * Set to true to show spinner
     */
    this.active = false;
    /**
     * Alt text for better accessibility while spinner is present
     */
    this.alt = 'active';
  }
  static get styles() {
    return [super.styles, style$1];
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('aria-label', this.alt);
  }
  render() {
    // !formatting of html below looks gross, specifically within ".spinner-layer", but is necessary, the spinner becomes misshaped when whitespace is added due to "white-space: nowrap" style on ".spinner-layer"
    return html`
      <div class="container">
        <div class="spinner-layer">
          <div class="circle-clipper left"><div class="circle"></div></div
          ><div class="circle-clipper right"><div class="circle"></div></div>
        </div>
      </div>
    `;
  }
}
__decorate$1([property({
  type: Boolean,
  reflect: true
})], ZuiSpinnerElement.prototype, "active", void 0);
__decorate$1([property({
  type: String,
  reflect: true
})], ZuiSpinnerElement.prototype, "alt", void 0);
customElements.define('zui-spinner', ZuiSpinnerElement);

const style = css`:host{position:absolute;top:0;left:0;width:100%;height:100%}:host .spinner-overlay{position:absolute;top:0;right:0;bottom:0;left:0;display:none;opacity:0;opacity:var(--zui-spinner-overlay-opacity, 1);z-index:var(--zui-spinner-z-index, 8000);flex-direction:column;justify-content:center;align-items:center;overflow-x:hidden;background-color:var(--zui-spinner-overlay-color, #fff);transition:opacity var(--zui-spinner-overlay-transition, 0.5s);pointer-events:auto}:host([active]) .spinner-overlay{display:flex;opacity:var(--zui-spinner-overlay-opacity, 1);transition:opacity var(--zui-spinner-overlay-transition, 0.5s)}`;

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 *  Use when a colored overlay to cover content, with a spinner graphic is needed.
 *
 * @element zui-spinner-overlay
 *
 * @slot loading-text - Slot for optional text to supplement beneath the spinner
 *
 * @cssprop [--zui-spinner-overlay-color=#fff] - Overlay fill color
 * @cssprop [--zui-spinner-overlay-opacity=1] - Opacity for overlay
 * @cssprop [--zui-spinner-overlay-transition=0.5s] - CSS length of time for rotating circle transition
 */
class ZuiSpinnerOverlayElement extends ZuiBaseElement {
  constructor() {
    super(...arguments);
    /**
     * Set to true to show spinner
     */
    this.active = false;
    /**
     * Alt text for better accessibility while spinner is present
     */
    this.alt = 'active';
  }
  static get styles() {
    return [super.styles, style];
  }
  render() {
    return html`
      <div class="spinner-overlay">
        <zui-spinner class="spinner" ?active=${this.active} alt=${this.alt}></zui-spinner
        ><slot name="loading-text"></slot
      ></div>
    `;
  }
}
__decorate([property({
  type: Boolean,
  reflect: true
})], ZuiSpinnerOverlayElement.prototype, "active", void 0);
__decorate([property({
  type: String,
  reflect: true
})], ZuiSpinnerOverlayElement.prototype, "alt", void 0);
customElements.define('zui-spinner-overlay', ZuiSpinnerOverlayElement);

export { state as a, queryAssignedNodes as q, screenBreakpoints as s };

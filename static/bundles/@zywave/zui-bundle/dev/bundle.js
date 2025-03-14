import { c as css, p as property, q as query, Z as ZuiBaseElement, h as html, a as ZuiFormAssociatedElement, b as classMap, D as Directive, n as nothing, P as PartType, d as noChange, e as directive, f as queryAssignedElements, _ as _$LH, u as updateCustomState, r as render, i as instance } from './internals/_a9b1a7d3.js';
import { s as screenBreakpoints, q as queryAssignedNodes, a as state } from './internals/_53938435.js';
import { i as ifDefined } from './internals/_812fa620.js';

function findAssignedElement(slot, selector) {
  if (!slot) {
    return null;
  }
  for (const node of slot.assignedNodes({
    flatten: true
  })) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node;
      if (el.matches(selector)) {
        return el;
      }
    }
  }
  return null;
}
function findAssignedElements(slot, selector) {
  const result = [];
  if (!slot) {
    return result;
  }
  for (const node of slot.assignedNodes({
    flatten: true
  })) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node;
      if (el.matches(selector)) {
        result.push(el);
      }
    }
  }
  return result;
}

const style$L = css`:host{display:flex;width:100%;flex-wrap:wrap;align-items:center;line-height:1.6}:host .show-all-button{display:inline-flex;align-items:center;margin:0 0.625rem 0 0;padding:0;background:rgba(0,0,0,0);border:0;font-weight:700;line-height:inherit;cursor:pointer;color:var(--zui-blue-500);transition:color .25s ease-out}:host .show-all-button:hover{color:var(--zui-blue-700)}:host .show-all-button:focus{box-shadow:inset 0 0 0 1px var(--zui-blue);outline:none}:host .show-all-button zui-icon[icon=zui-left]{--zui-icon-size: 1rem;width:1rem;margin-right:0.1875rem}:host ::slotted(zui-breadcrumb:last-of-type:not(:first-of-type)){color:var(--zui-gray-400)}@media(max-width: 44.9375rem){:host ::slotted(zui-breadcrumb){display:none}:host ::slotted(zui-breadcrumb:nth-last-of-type(2)){display:inline-flex}:host ::slotted(zui-breadcrumb:first-of-type:last-of-type){display:inline-flex}}`;

function debounce(func, waitMilliseconds = 50, isImmediate) {
  let timeoutId;
  return function (...args) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    const doLater = function () {
      timeoutId = undefined;
      if (!isImmediate) {
        func.apply(context, args);
      }
    };
    const shouldCallNow = isImmediate && timeoutId === undefined;
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(doLater, waitMilliseconds);
    if (shouldCallNow) {
      func.apply(context, args);
    }
  };
}

var __decorate$G = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * `<zui-breadcrumbs>` is a wrapper around `<zui-breadcrumb>` elements.
 *
 * @element zui-breadcrumbs
 *
 * @slot - Default, unnamed slot; for inserting `<zui-breadcrumb>` elements into `<zui-breadcrumbs>`
 */
class ZuiBreadcrumbs extends ZuiBaseElement {
  constructor() {
    super(...arguments);
    /**
     * Set to `true` if you do not want to truncate any of your breadcrumbs, making all visible
     */
    this.showAll = false;
    /**
     * Value determines how many visible breadcrumbs can be seen before truncation
     */
    this.visibleCount = 4;
    this._isMobile = false;
  }
  static get styles() {
    return [super.styles, style$L];
  }
  get _slottedBreadcrumbs() {
    return findAssignedElements(this._slotEl, 'zui-breadcrumb');
  }
  get _slottedFirstBreadcrumb() {
    return findAssignedElement(this._slotElFirstBreadcrumb, 'zui-breadcrumb');
  }
  get _listOfBreadcrumbsToTruncate() {
    // create an array with the breadcrumbs to be hidden by truncation
    return this._slottedBreadcrumbs.slice(0, this._slottedBreadcrumbs.length - (this.visibleCount - 1));
  }
  get _listOfBreadcrumbsToReveal() {
    // array of breadcrumbs that will be visible if truncated
    return this._slottedBreadcrumbs.slice(this._slottedBreadcrumbs.length - (this.visibleCount - 1), this._slottedBreadcrumbs.length);
  }
  get _isTruncated() {
    // determine if breadcrumbs should truncate based on multiple properties
    if (this.showAll || this._isMobile || this.visibleCount >= this._slottedBreadcrumbs.length + 1) {
      return false;
    }
    return true;
  }
  _onClickRevealHiddenBreadcrumbs() {
    // change truncated/hidden breadcrumbs to display: flex
    this._listOfBreadcrumbsToTruncate.forEach(crumb => {
      crumb.removeAttribute('style');
    });
    // hide ...show-all-button
    this.showAll = true;
    this.requestUpdate();
  }
  _moveFirstBreadcrumbToFirstSlot() {
    const breadcrumbs = this._slottedBreadcrumbs;
    const firstBreadcrumb = this._slottedBreadcrumbs[0];
    // remove slot attribute if someone is abusing slot names
    for (let i = 1; i < breadcrumbs.length; i++) {
      breadcrumbs[i].removeAttribute('slot');
    }
    // move first breadcrumb to first slot by changing slot attribute / value
    if (firstBreadcrumb) {
      firstBreadcrumb.setAttribute('slot', 'first');
    }
  }
  _hideBreadcrumbs(arr) {
    arr.forEach(crumb => {
      crumb.style.display = 'none';
    });
  }
  _unhideBreadcrumbs(arr) {
    arr.forEach(crumb => {
      crumb.removeAttribute('style');
    });
  }
  _setupMediaQueryListener() {
    const breakpoint = () => {
      // convert breakpoint to be value - 1px for correct trigger point value
      const array = screenBreakpoints.xsmall.split('em');
      return `${parseInt(array[0]) - 1 / 16}em`;
    };
    const xsmallMq = window.matchMedia(`(max-width: ${breakpoint()})`);
    if (xsmallMq.addEventListener) {
      xsmallMq.addEventListener('change', debounce(e => {
        this._isMobile = e.matches;
        if (!this._isTruncated) {
          this._unhideBreadcrumbs(this._listOfBreadcrumbsToTruncate);
        } else {
          this._hideBreadcrumbs(this._listOfBreadcrumbsToTruncate);
        }
        this.requestUpdate();
      }, 100));
    } else {
      // sad browsers like IE11 and Safari
      xsmallMq.addListener(debounce(e => {
        this._isMobile = e.matches;
        if (!this._isTruncated) {
          this._unhideBreadcrumbs(this._listOfBreadcrumbsToTruncate);
        } else {
          this._hideBreadcrumbs(this._listOfBreadcrumbsToTruncate);
        }
        this.requestUpdate();
      }, 100));
    }
    this._isMobile = xsmallMq.matches;
  }
  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    this._setupMediaQueryListener();
    this._moveFirstBreadcrumbToFirstSlot();
    if (this._isTruncated) {
      this.requestUpdate();
      this._hideBreadcrumbs(this._listOfBreadcrumbsToTruncate);
    }
    // list for changes on <slot name="first"></slot>, shuffle and display breadcrumbs as needed
    // TODO: IE11 does not support `slotchange` event, possible solution is a mutationObserver, plan is to release and test to see if we even need these eventListeners / mutationObservers wtih dynamic nature of breadcrumbs
    this._slotElFirstBreadcrumb.addEventListener('slotchange', () => {
      if (!this._slottedFirstBreadcrumb) {
        this._moveFirstBreadcrumbToFirstSlot();
        this._slottedFirstBreadcrumb.removeAttribute('style');
        if (this._isTruncated) {
          this._unhideBreadcrumbs(this._listOfBreadcrumbsToReveal);
          this._hideBreadcrumbs(this._listOfBreadcrumbsToTruncate);
        }
        this.requestUpdate();
      }
    });
    // listen for changes on default <slot>, shuffle and display breadcrumbs as needed
    this._slotEl.addEventListener('slotchange', () => {
      if (this._isTruncated) {
        this._unhideBreadcrumbs(this._listOfBreadcrumbsToReveal);
        this._hideBreadcrumbs(this._listOfBreadcrumbsToTruncate);
      } else {
        this._unhideBreadcrumbs(this._slottedBreadcrumbs);
      }
      this.requestUpdate();
    });
  }
  render() {
    return html`
      <slot name="first"></slot>
      ${this._isTruncated ? html`
            <button class="show-all-button" @click="${this._onClickRevealHiddenBreadcrumbs}">
              <zui-icon icon="zui-left"></zui-icon>
              <span>...</span>
            </button>
          ` : ''}
      <slot></slot>
    `;
  }
}
__decorate$G([property({
  type: Boolean,
  attribute: 'show-all'
})], ZuiBreadcrumbs.prototype, "showAll", void 0);
__decorate$G([property({
  type: Number,
  attribute: 'visible-count'
})], ZuiBreadcrumbs.prototype, "visibleCount", void 0);
__decorate$G([query('slot:not([name="first"])')], ZuiBreadcrumbs.prototype, "_slotEl", void 0);
__decorate$G([query('slot[name="first"]')], ZuiBreadcrumbs.prototype, "_slotElFirstBreadcrumb", void 0);
window.customElements.define('zui-breadcrumbs', ZuiBreadcrumbs);

const style$K = css`:host{display:inline-flex;align-items:center;line-height:inherit;cursor:pointer;color:var(--zui-blue-500);transition:color .25s ease-out}@media(max-width: 44.9375rem){:host{width:calc(100% - 1rem - 0.1875rem - 0.0625rem)}}:host(:hover){color:var(--zui-blue-400)}:host(:focus){box-shadow:inset 0 0 0 1px var(--zui-blue);outline:none}:host(:active){color:var(--zui-blue-600)}:host(:not(:last-of-type)),:host(:first-of-type:last-of-type){margin-right:0.625rem}zui-icon[icon=zui-left]{--zui-icon-size: 1rem;margin-right:0.1875rem}::slotted(*){display:inline-block;max-width:30ch;overflow-x:hidden;margin:0;padding:0;background:none;border:0;outline:none;font:inherit;line-height:inherit !important;text-align:left;white-space:nowrap;cursor:inherit;color:inherit;transition:inherit;text-overflow:ellipsis;text-decoration:none}@media(max-width: 44.9375rem){::slotted(*){width:calc(100% - 1rem - 0.1875rem - 0.0625rem);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}}:host([expand-text]) ::slotted(*){max-width:none}`;

var __decorate$F = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * `<zui-breadcrumb>`s are passed as a direct descendant into the wrapper `<zui-breadcrumbs>`. `<zui-breadcrumb>` will accept and format correct styling for `<a>`, `<button>`, and other slotted elements. Choose your slotted element based upon your needs. If items can be opened in a new tab, we suggest using `<a>`.
 *
 * @element zui-breadcrumb
 *
 * @slot - Default, unnamed slot; for inserting `<div>`, `<a>`, or `<button>` elements into `<zui-breadcrumb>`
 */
class ZuiBreadcrumb extends ZuiBaseElement {
  constructor() {
    super(...arguments);
    /**
     * Apply attribute if you'd like to remove max character ellipsis on a single `zui-breadcrumb`
     */
    this.expandText = false;
  }
  get _slottedControl() {
    return findAssignedElement(this._slotEl, 'a,button,div');
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'button');
    const clickKeys = [13, 32];
    this.addEventListener('keydown', e => {
      if (clickKeys.includes(e.keyCode)) {
        this.focus();
        e.preventDefault();
        e.stopPropagation();
      }
    });
    this.addEventListener('keyup', e => {
      if (clickKeys.includes(e.keyCode)) {
        this.click();
        e.preventDefault();
        e.stopPropagation();
      }
    });
    this.addEventListener('click', e => {
      if (this._slottedControl && !e.composedPath().includes(this._slottedControl)) {
        this._slottedControl.click();
      }
    });
  }
  _setTabIndex() {
    if (this._slottedControl) {
      this._slottedControl.setAttribute('tabindex', '-1');
      this.tabIndex = 0;
    } else {
      this.tabIndex = 0;
    }
  }
  static get styles() {
    return [super.styles, style$K];
  }
  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    this._setTabIndex();
  }
  render() {
    return html`
      <zui-icon icon="zui-left"></zui-icon>
      <slot></slot>
    `;
  }
}
__decorate$F([query('slot')], ZuiBreadcrumb.prototype, "_slotEl", void 0);
__decorate$F([property({
  type: Boolean,
  attribute: 'expand-text',
  reflect: true
})], ZuiBreadcrumb.prototype, "expandText", void 0);
window.customElements.define('zui-breadcrumb', ZuiBreadcrumb);

const style$J = css`:host{display:inline-flex}:host div{display:flex;height:2.25rem;flex-grow:0;flex-shrink:0;justify-content:center;align-items:center;padding:0 .9375rem;background:var(--zui-button-color, var(--zui-blue));border:0;border-radius:var(--zui-button-border-radius, 1.25rem);box-shadow:var(--zui-button-box-shadow, none);outline:none;font:inherit;font-weight:600;line-height:1.25rem;text-align:center;cursor:pointer;color:var(--zui-button-text-color, #fff);transition:background 100ms ease-out,box-shadow 100ms ease-out;user-select:none}:host div ::slotted(a){background:inherit !important;color:inherit !important;text-decoration:none !important}:host div ::slotted(button){margin:0 !important;padding:0 !important;background:rgba(0,0,0,0) !important;border:0 !important;outline:none !important;font:inherit !important;cursor:inherit !important;color:inherit !important}:host div ::slotted(zui-icon),:host div ::slotted(zui-svg),:host div ::slotted(svg){--zui-icon-size: 1rem;--zui-svg-width: 1rem;--zui-svg-height: 1rem;display:inline-block;width:1rem;height:1rem;vertical-align:middle;margin-right:.625rem;margin-left:0;fill:var(--zui-button-icon-color, currentColor)}:host(:hover) div{background:var(--zui-button-hover-color, var(--zui-blue-400));color:var(--zui-button-text-hover-color, var(--zui-button-text-color, #fff));text-decoration:none}:host(:focus){outline:none}:host(:focus) div{background:var(--zui-button-focus-color, var(--zui-button-hover-color, var(--zui-blue)));box-shadow:var(--zui-button-box-shadow-focus, 0 0 0 0.0625rem #fff, 0 0 0 0.125rem var(--zui-button-focus-color, var(--zui-button-hover-color, var(--zui-blue))));outline:none;color:var(--zui-button-text-focus-color, var(--zui-button-text-hover-color, var(--zui-button-text-color, #fff)))}:host(:active) div{background:var(--zui-button-active-color, var(--zui-blue-600));box-shadow:var(--zui-button-box-shadow, none);outline:none}:host([disabled]){pointer-events:none}:host([disabled]) div{background:var(--zui-gray-200);box-shadow:var(--zui-button-box-shadow, none);outline:none;color:var(--zui-gray);transform:none}:host([disabled]) div ::slotted(*){pointer-events:none}:host([disabled]) div ::slotted(zui-icon),:host([disabled]) div ::slotted(zui-svg),:host([disabled]) div ::slotted(svg){fill:var(--zui-gray)}:host(.secondary) div,:host([type~=secondary]) div{background:rgba(0,0,0,0);box-shadow:var(--zui-button-secondary-box-shadow, inset 0 0 0 0.0625rem var(--zui-gray-200));color:var(--zui-button-text-color, var(--zui-button-color, var(--zui-blue)))}:host(.secondary:hover) div,:host([type~=secondary]:hover) div{background:rgba(0,0,0,0);box-shadow:var(--zui-button-secondary-box-shadow-hover, inset 0 0 0 0.0625rem var(--zui-button-hover-color, var(--zui-blue-400)))}:host(.secondary:focus) div,:host([type~=secondary]:focus) div{background:rgba(0,0,0,0);box-shadow:var(--zui-button-secondary-box-shadow-focus, inset 0 0 0 0.0625rem var(--zui-gray-200), 0 0 0 0.0625rem #fff, 0 0 0 0.125rem var(--zui-button-focus-color, var(--zui-button-hover-color, var(--zui-blue))))}:host(.secondary:active) div,:host([type~=secondary]:active) div{background:rgba(0,0,0,0);box-shadow:var(--zui-button-secondary-box-shadow-active, inset 0 0 0 0.0625rem var(--zui-button-hover-color, var(--zui-blue-600)))}:host(.secondary[disabled]) div,:host([type~=secondary][disabled]) div{box-shadow:var(--zui-button-secondary-box-shadow, inset 0 0 0 0.0625rem var(--zui-gray-200));color:var(--zui-gray-400)}:host(.link) div,:host([type~=link]) div{background:rgba(0,0,0,0);color:var(--zui-link-button-text-color, var(--zui-button-color, var(--zui-blue)))}:host(.link:hover) div,:host([type~=link]:hover) div{background:var(--zui-link-button-hover-color, var(--zui-gray-100))}:host(.link:focus) div,:host([type~=link]:focus) div{box-shadow:inset 0 0 0 .0625rem var(--zui-link-button-text-color, var(--zui-button-focus-color, var(--zui-button-hover-color, var(--zui-blue))))}:host(.link:active) div,:host([type~=link]:active) div{background:var(--zui-link-button-active-color, var(--zui-gray-200));box-shadow:none}:host(.link[disabled]) div,:host([type~=link][disabled]) div{color:var(--zui-gray)}:host(.danger) div,:host([danger]) div{background:var(--zui-red);color:#fff}:host(.danger:hover) div,:host([danger]:hover) div{background:var(--zui-red-400)}:host(.danger:focus) div,:host([danger]:focus) div{background:var(--zui-red);box-shadow:0 0 0 .0625rem #fff,0 0 0 .125rem var(--zui-red)}:host(.danger:active) div,:host([danger]:active) div{background:var(--zui-red-600);box-shadow:none}:host(.danger[disabled]) div,:host([danger][disabled]) div{background:var(--zui-gray-200);color:var(--zui-gray)}:host([type~=link][danger]) div{background:rgba(0,0,0,0);color:var(--zui-red)}:host([type~=link][danger]:hover) div{background:var(--zui-gray-100)}:host([type~=link][danger]:focus) div{box-shadow:inset 0 0 0 .0625rem var(--zui-red)}:host([type~=link][danger]:active) div{background:var(--zui-gray-200);box-shadow:none}:host([type~=link][danger][disabled]) div{color:var(--zui-gray)}:host(.icon-right) div ::slotted(zui-icon),:host(.icon-right) div ::slotted(zui-svg),:host(.icon-right) div ::slotted(svg),:host([icon-right]) div ::slotted(zui-icon),:host([icon-right]) div ::slotted(zui-svg),:host([icon-right]) div ::slotted(svg){margin-right:0;margin-left:.625rem}:host(.icon-only) div,:host([icon]) div{width:var(--zui-button-width, 2.25rem);height:2.25rem;margin:0;padding:var(--zui-button-padding, 0);border-radius:var(--zui-button-border-radius, 50%)}:host(.icon-only) div ::slotted(zui-icon),:host(.icon-only) div ::slotted(zui-svg),:host(.icon-only) div ::slotted(svg),:host([icon]) div ::slotted(zui-icon),:host([icon]) div ::slotted(zui-svg),:host([icon]) div ::slotted(svg){width:1rem;height:1rem;margin:0}:host([block]){display:block;width:100%}:host([block]) div{width:100%}`;

var __decorate$E = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const clickKeys = ['Space', 'Enter'];
const anchorNodeName = 'a';
/**
 * A Zywave-standard button.
 *
 * @element zui-button
 *
 * @slot - Default, unnamed slot; for inserting text, `<a>`, `<button>`, and `<zui-icon>` elements into `<zui-button>`
 *
 * @csspart button - The button container inside `<zui-button>`; this is exposed as a CSS shadow part and can be accessed with `::part(button)`
 *
 * @cssprop [--zui-button-icon-color=currentColor] - (all types): slotted `zui-icon` fill color
 * @cssprop [--zui-button-text-color=#fff] - (`primary` / default / `secondary`): text color
 * @cssprop [--zui-button-color=var(--zui-blue)] - (`primary` / default): button background color
 * @cssprop [--zui-button-hover-color=var(--zui-blue-400)] - (`primary` / default): hover state button background color
 * @cssprop [--zui-button-text-hover-color=var(--zui-button-text-color)] - (`primary` / default): hover state text color
 * @cssprop [--zui-button-focus-color=var(--zui-blue-400)] - (`primary` / default): focus state button background color
 * @cssprop [--zui-button-text-focus-color=var(--zui-button-text-color)] - (`primary` / default): focus state text color
 * @cssprop [--zui-button-active-color=var(--zui-blue-600)] - (`primary` / default): active state background color
 * @cssprop [--zui-button-secondary-box-shadow=var(--zui-blue)] - (`secondary`): button outline color
 * @cssprop [--zui-button-secondary-box-shadow-hover=var(--zui-blue-400)] - (`secondary`): hover state button outline color
 * @cssprop [--zui-button-secondary-box-shadow-focus=var(--zui-blue-400)] - (`secondary`): focus state button outline color
 * @cssprop [--zui-button-secondary-box-shadow-active=var(--zui-blue-600)] - (`secondary`): active state button outline color
 * @cssprop [--zui-link-button-text-color=var(--zui-blue)] - (`link`): text color
 * @cssprop [--zui-link-button-hover-color=var(--zui-gray-100)] - (`link`): hover state button background color
 * @cssprop [--zui-link-button-focus-color=var(--zui-blue)] - (`link`): focus state button outline color
 * @cssprop [--zui-link-button-active-color=var(--zui-gray-200)] - (`link`): active state button background color
 * @cssprop [--zui-button-width=2.25rem (36px)] - (`icon-only`): force an exact width for `icon-only` button types
 **/
class ZuiButton extends ZuiBaseElement {
  constructor() {
    super(...arguments);
    /**
     * Use this attribute to set the type of button dropdown you want. See <a href="https://booster.zywave.dev/design-system/components/buttons/">Buttons</a> for button style variations.
     * @type { primary | secondary | link }
     */
    this.type = 'primary';
    /**
     * Use this attribute when you want an icon-only button
     */
    this.icon = false;
    /**
     * Use this attribute when you want to right-align an icon in a button with text
     */
    this.iconRight = false;
    /**
     * Use this attribute when you want the button to span the whole width of its parent container
     */
    this.block = false;
    /**
     * Use this attribute when you want the button to stand out due to its destructive action
     */
    this.danger = false;
    /**
     * Use this attribute when you want to disable `<zui-button>`
     */
    this.disabled = false;
  }
  get _slottedControl() {
    return findAssignedElement(this._slotEl, 'a,button');
  }
  get _hasWrappedAnchor() {
    return this.parentElement ? this.parentElement.nodeName.toLowerCase() === anchorNodeName : false;
  }
  firstUpdated() {
    this._setTabIndex();
    this.setAttribute('role', 'button');
    if (this._slottedControl) {
      this._slottedControl.tabIndex = -1;
    }
    this.addEventListener('keydown', e => {
      this._onKeydown(e);
    });
    this.addEventListener('keyup', e => {
      this._onKeyup(e);
    });
    this.addEventListener('click', e => {
      if (!e.composedPath().includes(this._wrapperDivEl)) {
        this._onClick(e);
      }
    });
  }
  updated(changedProps) {
    if (changedProps.has('disabled')) {
      this._setTabIndex();
    }
  }
  _setTabIndex() {
    if (this.disabled || this._hasWrappedAnchor) {
      this.removeAttribute('tabindex');
    } else {
      this.tabIndex = 0;
    }
  }
  static get styles() {
    return [super.styles, style$J];
  }
  render() {
    return html`
      <div part="button" @click="${this._onClick}" @keyup="${this._onKeyup}" @keydown="${this._onKeydown}"
        ><slot></slot
      ></div>
    `;
  }
  /**
   *
   * @param e The raw event that calls this method
   * @param shouldClickSelf an optional parameter that, if provided, will cause the click() function to be called on ZuiButton
   * @returns
   */
  _onClick(e, shouldClickSelf) {
    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    } else if (shouldClickSelf) {
      this.click();
    } else if (this._slottedControl && !e.composedPath().includes(this._slottedControl)) {
      this._slottedControl.click();
    }
  }
  _onKeyup(e) {
    if (clickKeys.includes(e.code)) {
      this._onClick(e, true);
    }
  }
  _onKeydown(e) {
    if (clickKeys.includes(e.code)) {
      if (!this.disabled) {
        this.focus();
        e.preventDefault();
        e.stopPropagation();
      }
    }
  }
}
__decorate$E([property({
  type: String,
  reflect: true
})], ZuiButton.prototype, "type", void 0);
__decorate$E([property({
  type: Boolean,
  reflect: true
})], ZuiButton.prototype, "icon", void 0);
__decorate$E([property({
  type: Boolean,
  reflect: true,
  attribute: 'icon-right'
})], ZuiButton.prototype, "iconRight", void 0);
__decorate$E([property({
  type: Boolean,
  reflect: true
})], ZuiButton.prototype, "block", void 0);
__decorate$E([property({
  type: Boolean,
  reflect: true
})], ZuiButton.prototype, "danger", void 0);
__decorate$E([property({
  type: Boolean,
  reflect: true
})], ZuiButton.prototype, "disabled", void 0);
__decorate$E([query('slot')], ZuiButton.prototype, "_slotEl", void 0);
__decorate$E([query('div')], ZuiButton.prototype, "_wrapperDivEl", void 0);
window.customElements.define('zui-button', ZuiButton);

const style$I = css`:host div{display:inline-flex;width:3.25rem;height:3.25rem;justify-content:center;align-items:center;padding:0;background-color:var(--zui-button-color, var(--zui-blue));border:0;border-radius:50%;box-shadow:0 .25rem .5rem 0 rgba(0,0,0,.25);cursor:pointer;color:var(--zui-button-text-color, #fff);transition:box-shadow 100ms ease-in-out;user-select:none;box-sizing:border-box;text-decoration:none}:host div ::slotted(zui-icon),:host div ::slotted(zui-svg),:host div ::slotted(svg){display:inline-block;width:var(--zui-button-icon-size, var(--zui-icon-size, 1.5rem));height:var(--zui-button-icon-size, var(--zui-icon-size, 1.5rem));font-size:var(--zui-button-icon-size, 1.875rem);font-weight:normal;font-style:normal;line-height:1;letter-spacing:normal;text-transform:none;white-space:nowrap;fill:var(--zui-floating-action-button-icon-color, currentColor);direction:ltr;word-wrap:normal}:host div:hover{background-color:var(--zui-button-hover-color, var(--zui-blue-400));box-shadow:0 .4375rem .75rem 0 rgba(0,0,0,.25);text-decoration:none}:host div:focus{background-color:var(--zui-button-hover-color, var(--zui-blue));outline:none}:host div:active{background-color:var(--zui-button-active-color, var(--zui-blue-600))}:host([disabled]){pointer-events:none}:host([disabled]) div{background-color:var(--zui-gray-200);box-shadow:none;outline:none;color:var(--zui-gray)}:host([disabled]) div ::slotted(*){pointer-events:none}:host([disabled]) div ::slotted(zui-icon),:host([disabled]) div ::slotted(zui-svg),:host([disabled]) div ::slotted(svg){fill:var(--zui-gray-400) !important}`;

var __decorate$D = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * A floating action button (fab) is used for displaying a sticky action that is always visible to the user; e.g., on many pages, as they scroll, etc.
 *
 * @element zui-fab
 *
 * @slot - Default, unnamed slot; for inserting an icon, `<zui-icon>`, or `<svg>` elements into `<zui-fab>`
 *
 * @cssprop [--zui-button-color=var(--zui-blue)] - Button background color
 * @cssprop [--zui-button-text-color=#fffs] - Button text color, will cause `svg`s to inherit this color unless specified otherwise
 * @cssprop [--zui-button-hover-color=var(--zui-blue-400)] - Hover and focus button background color
 * @cssprop [--zui-button-active-color=var(--zui-blue-400)] - Active button background color
 * @cssprop [--zui-floating-action-button-icon-color=#fff] - By default, will inherit `#fff` value from `--zui-button-text-color`, can override this value or CSS prop this inherits from
 * @cssprop [--zui-button-icon-size=1.5rem (24px)] - If using `<zui-icon>` it will take this size as width and height
 */
class ZuiFloatingActionButton extends ZuiBaseElement {
  constructor() {
    super(...arguments);
    /**
     * Use this attribute when you want to disable `<zui-fab>`
     */
    this.disabled = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'button');
    this.addEventListener('click', e => {
      if (this.disabled) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    });
  }
  static get styles() {
    return [super.styles, style$I];
  }
  render() {
    return html` <div tabindex="1"><slot></slot></div> `;
  }
}
__decorate$D([property({
  type: Boolean,
  attribute: 'disabled'
})], ZuiFloatingActionButton.prototype, "disabled", void 0);
window.customElements.define('zui-fab', ZuiFloatingActionButton);

const style$H = css`:host{contain:none;display:inline-flex}.zui-button-group{display:inline-flex}::slotted(zui-button),::slotted(zui-button-dropdown){--zui-button-border-radius: 0;--zui-button-box-shadow: inset 0.0625rem 0 0 0 var(--zui-button-group-divider-color, #fff);--zui-button-box-shadow-focus: inset 0.0625rem 0 0 0 var(--zui-button-group-divider-color, #fff), inset 0.125rem 0 0 0 var(--zui-button-focus-color, var(--zui-button-hover-color, var(--zui-blue))), inset 0 0 0 0.0625rem var(--zui-button-focus-color, var(--zui-button-hover-color, var(--zui-blue))), inset 0.1875rem 0 0 0 #fff, inset 0 0 0 0.125rem #fff;--zui-button-secondary-box-shadow: inset 0 -0.0625rem 0 0 var(--zui-gray-200), inset 0 0.0625rem 0 0 var(--zui-gray-200), inset 0.0625rem 0 0 0 var(--zui-gray-200);--zui-button-secondary-box-shadow-focus: inset 0 0.0625rem 0 0 var(--zui-gray-200), inset 0 -0.0625rem 0 0 var(--zui-gray-200), inset 0.0625rem 0 0 0 var(--zui-gray-200), inset 0 0.125rem 0 0 #fff, inset -0.0625rem 0 0 0 #fff, inset 0 -0.125rem 0 0 #fff, inset 0.125rem 0 0 0 #fff, inset 0 0.1875rem 0 0 var(--zui-button-focus-color, var(--zui-button-hover-color, var(--zui-blue))), inset -0.125rem 0 0 0 var(--zui-button-focus-color, var(--zui-button-hover-color, var(--zui-blue))), inset 0 -0.1875rem 0 0 var(--zui-button-focus-color, var(--zui-button-hover-color, var(--zui-blue))), inset 0.1875rem 0 0 0 var(--zui-button-focus-color, var(--zui-button-hover-color, var(--zui-blue)))}::slotted(zui-button:first-child),::slotted(zui-button-dropdown:first-child){--zui-button-border-radius: 1.25rem 0 0 1.25rem !important}::slotted(zui-button:last-child),::slotted(zui-button-dropdown:last-child){--zui-button-border-radius: 0 1.25rem 1.25rem 0 !important;--zui-button-secondary-box-shadow: inset 0 0 0 0.0625rem var(--zui-gray-200);--zui-button-secondary-box-shadow-focus: inset 0 0 0 0.0625rem var(--zui-gray-200), inset 0 0 0 0.125rem #fff, inset 0 0 0 0.1875rem var(--zui-button-focus-color, var(--zui-button-hover-color, var(--zui-blue)))}::slotted(zui-button.icon-only),::slotted(zui-button[icon]),::slotted(zui-button-dropdown[type=icon]),::slotted(zui-button-dropdown[icon]),::slotted(zui-button-dropdown:first-child),::slotted(zui-button-dropdown:last-child){--zui-button-width: 3.1875rem;--zui-button-padding: 0 0.9375rem}::slotted(zui-button:only-child),::slotted(zui-button-dropdown:only-child){--zui-button-border-radius: 1.25rem !important}`;

/**
 * Groups related actions into a combined presentation. Use with `<zui-button>` or `<zui-button-dropdown>` elements.
 *
 * @element zui-button-group
 *
 * @slot - Default, unnamed slot; for inserting `<zui-button>`, `<zui-button-dropdown>`, `<a>`, and `<button>` elements into `<zui-button-group>`
 */
class ZuiButtonGroup extends ZuiBaseElement {
  static get styles() {
    return [super.styles, style$H];
  }
  render() {
    return html`
      <div class="zui-button-group">
        <slot></slot>
      </div>
    `;
  }
}
window.customElements.define('zui-button-group', ZuiButtonGroup);

const style$G = css`:host{contain:none;position:relative;display:inline-flex}:host .menu{contain:layout;position:absolute;top:2.25rem;left:0;display:none;width:12.5rem;z-index:1;flex-direction:column;padding-top:.375rem;padding-bottom:.375rem;background-color:#fff;border-radius:.25rem;box-shadow:rgba(0,0,0,.04) 0 .25rem .375rem .125rem,rgba(0,0,0,.06) 0 .125rem .625rem .1875rem,rgba(0,0,0,.02) 0 .25rem .3125rem -0.125rem}:host .menu ::slotted(button),:host .menu ::slotted(a){display:flex;align-items:center;padding:.625rem .9375rem !important;font-weight:400;text-align:left;cursor:pointer;color:var(--zui-gray-800);transition:background-color .3s ease;gap:.625rem}:host .menu ::slotted(button:hover),:host .menu ::slotted(button:focus),:host .menu ::slotted(a:hover),:host .menu ::slotted(a:focus){background-color:var(--zui-gray-100);border:0;box-shadow:none;outline:0}:host .menu ::slotted(button){background-color:rgba(0,0,0,0);border:0;outline:none;font:inherit}:host .menu ::slotted(*:-moz-focusring){outline:0 !important}:host .menu ::slotted(button[disabled]){color:var(--zui-gray-400) !important;pointer-events:none}:host .menu ::slotted(button[disabled]:hover){background-color:rgba(0,0,0,0)}:host .menu ::slotted(a){text-decoration:none !important}:host([open]){z-index:1}:host([open]) .menu{display:flex}:host(:not([icon])) zui-icon{margin:0 0 0 .625rem}:host ::slotted(*:not([slot=option])){pointer-events:none}`;

var __decorate$C = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * A component that uses a `<zui-button>` to open a dropdown menu of options.
 *
 * @element zui-button-dropdown
 *
 * @slot - Default, unnamed slot; for inserting label text or an icon into `<zui-button-dropdown>`
 * @slot option - For each dropdown menu option, apply this slot attribute to your slotted menu item; e.g., `<button slot="option">`
 *
 * @csspart menu - The menu container that reveals when you click `<zui-button-dropdown>`; this is exposed as a CSS shadow part and can be accessed with `::part(menu)`
 */
class ZuiButtonDropdown extends ZuiBaseElement {
  constructor() {
    super(...arguments);
    /**
     * This attribute will decide whether the submenu is open or not
     */
    this.open = false;
    /**
     *This attribute will decide whether you want to disable the `<zui-button>` dropdown trigger
     */
    this.disabled = false;
    /**
     * Use this attribute to set the type of button dropdown you want. See [Buttons](https://booster.zywave.dev/design-system/components/buttons/) for button style variations.
     * @type { primary | secondary | link }
     */
    this.type = 'primary';
    /**
     * Use this attribute when you want an icon-only button dropdown
     */
    this.icon = false;
  }
  static get styles() {
    return [super.styles, style$G];
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('keydown', e => {
      // if dropdown menu is open
      if (this.open) {
        // open menu, hitting 'Shift + Tab' closes menu
        if (e.shiftKey && e.code === 'Tab') {
          e.preventDefault();
          e.stopPropagation();
          this.#toggleDropdown();
        }
        // open menu, hitting 'Tab' closes menu and focuses on zui-button-dropdown
        if (e.code === 'Tab') {
          e.preventDefault();
          e.stopPropagation();
          this.#toggleDropdown();
          this.shadowRoot.querySelector('zui-button').focus();
        }
        // open menu, hitting 'Space' || 'Enter' selects menu item, closes menu and then focuses zui-button-dropdown
        if (e.code === 'Enter' || e.code === 'Space') {
          e.preventDefault();
          document.activeElement.click();
          this.shadowRoot.querySelector('zui-button').focus();
        }
        // open menu, hitting 'Escape' closes menu
        e.code === 'Escape' && this.#toggleDropdown();
        // arrow keys toggle through menu options
        const navigationKeys = ['ArrowUp', 'ArrowDown'];
        if (navigationKeys.includes(e.code)) {
          const selectableOptions = Array.from(this.querySelectorAll('a:not([disabled]),button:not([disabled])'));
          const activeElement = document.activeElement;
          let foundIndex = selectableOptions.findIndex(el => {
            return el === activeElement;
          });
          if (foundIndex !== -1) {
            if (e.code === 'ArrowDown') {
              const nextIndex = foundIndex + 1;
              foundIndex = nextIndex === selectableOptions.length ? selectableOptions.length - 1 : nextIndex;
            } else {
              const previousIndex = foundIndex - 1;
              foundIndex = previousIndex < 0 ? 0 : previousIndex;
            }
          } else {
            foundIndex = 0;
          }
          selectableOptions[foundIndex].focus();
          e.preventDefault();
          e.stopPropagation();
        }
      } // end if (this.open)
      // hitting 'Space' or 'Enter' will toggle dropdown open/closed
      const selectionKeys = ['Space', 'Enter'];
      selectionKeys.includes(e.code) && this.#toggleDropdown();
    }, {
      capture: true
    }); // end 'keydown' eventListener
    document.addEventListener('click', e => {
      const clickedWithinButtonDropdown = e.composedPath().includes(this);
      if (!clickedWithinButtonDropdown) {
        this.open = false;
      }
    });
  }
  updated(changedProps) {
    super.updated(changedProps);
    if (this._chevronIcon) {
      this._chevronIcon.style.transition = 'transform .3s ease-out';
      this._chevronIcon.style.transform = this.open ? 'rotate(-180deg)' : '';
    }
    // DEPRECATED: type="icon" and type="icon-only"
    if (this.type.includes('icon') || this.type.includes('icon-only') || this.icon) {
      this._zuiButton.setAttribute('icon', '');
    }
    // DEPRECATED: type="icon-right"
    if (this.type.includes('icon-right') || this.hasAttribute('icon-right')) {
      this._zuiButton.setAttribute('icon-right', '');
    }
    // DEPRECATED: type="danger"
    if (this.type.includes('danger') || this.hasAttribute('danger')) {
      this._zuiButton.setAttribute('danger', '');
    }
  }
  render() {
    return html`
      <zui-button type="${this.#getButtonType()}" @click="${this.#toggleDropdown}" ?disabled="${this.disabled}"
        ><slot></slot>${this.icon || this.type.includes('icon') ? html`` : html`<zui-icon icon="zui-down"></zui-icon></zui-button>`}
      </zui-button>
      <div part="menu" class="menu"><slot name="option" @click="${() => this.open = false}"></slot></div>
    `;
  }
  #getButtonType() {
    if (this.type.includes('primary')) {
      return 'primary';
    } else if (this.type.includes('secondary')) {
      return 'secondary';
    } else if (this.type.includes('link')) {
      return 'link';
    } else {
      return '';
    }
  }
  #toggleDropdown() {
    this.open = !this.open;
  }
}
__decorate$C([property({
  type: Boolean,
  reflect: true
})], ZuiButtonDropdown.prototype, "open", void 0);
__decorate$C([property({
  type: Boolean,
  reflect: true
})], ZuiButtonDropdown.prototype, "disabled", void 0);
__decorate$C([property({
  type: String,
  reflect: true
})], ZuiButtonDropdown.prototype, "type", void 0);
__decorate$C([property({
  type: Boolean,
  reflect: true
})], ZuiButtonDropdown.prototype, "icon", void 0);
__decorate$C([query('zui-icon')], ZuiButtonDropdown.prototype, "_chevronIcon", void 0);
__decorate$C([query('zui-button')], ZuiButtonDropdown.prototype, "_zuiButton", void 0);
window.customElements.define('zui-button-dropdown', ZuiButtonDropdown);

const style$F = css`:host{contain:none;position:relative;display:block;width:auto;flex-wrap:wrap;margin:var(--zui-card-margin, 0 0 1.875rem);background-color:var(--zui-card-background-color, #fff);border-radius:.125rem;box-shadow:0 .0625rem .1875rem rgba(0,0,0,.16)}.container{width:100%;height:100%;padding:1.25rem;transition:200ms padding ease-in-out;box-sizing:border-box}@media(min-width: 80em){.container{padding:1.875rem}}.container ::slotted(.header){margin-bottom:0;font-size:var(--zui-card-header-text);font-weight:600;color:var(--zui-card-header-color, inherit)}.container ::slotted(.footer){display:flex;justify-content:flex-end;margin:var(--zui-card-footer-margin, 1.875rem 0 0);background-color:var(--zui-card-footer-background-color, #fff)}.container ::slotted(.footer.align-left){justify-content:flex-start}`;

/**
 * Simple. Card-like. Insert content into `<zui-card>` to get the visual styling of our ZUI-defined cards.
 *
 * @element zui-card
 *
 * @slot - Default, unnamed slot; for inserting content into `<zui-card>`
 *
 * @csspart content - The content container inside `<zui-card>`; this is exposed as a CSS shadow part and can be accessed with `::part(content)`
 *
 * @cssprop [--zui-card-margin=0 0 30px] - Card margins
 * @cssprop [--zui-card-background-color=#fff] - Card background color
 */
class ZuiCard extends ZuiBaseElement {
  static get styles() {
    return [super.styles, style$F];
  }
  render() {
    return html` <div part="content" class="container"> <slot></slot> </div> `;
  }
}
window.customElements.define('zui-card', ZuiCard);

const style$E = css`:host{display:inline-flex;outline:none;font-size:inherit;cursor:pointer}:host .checkbox-container{position:relative;display:flex}:host .checkbox{position:relative;display:flex;width:1.25rem;height:1.25rem;flex-shrink:0;justify-content:center;align-items:center;margin:var(--zui-checkbox-checkbox-margin, 0.6875rem 0.6875rem 0.6875rem 0);background:#fff;border:.125rem solid var(--zui-gray);border-radius:.125rem;transition:border 125ms ease-out,opacity 125ms ease-out}:host .checkbox .checkmark-container{position:relative;display:flex;width:.75rem;height:.75rem;justify-content:center;align-items:center;transform:rotate(-50deg)}:host .checkbox .checkmark{position:absolute;top:.1875rem;left:.0625rem;display:block;width:.75rem;height:.35rem;border:solid rgba(0,0,0,0);border-width:0 0 .125rem .125rem;transform-origin:left top;border-bottom-left-radius:.09375rem}:host .checkbox .indeterminate-container{display:flex;width:.75rem;height:.75rem;justify-content:center;align-items:center}:host .checkbox .indeterminate{width:.75rem;height:0;border:solid #fff;border-width:.0625rem;border-radius:.0625rem}:host .label{display:block;width:100%;margin:var(--zui-checkbox-label-margin, 0.5625rem 1.25rem 0.5625rem 0)}:host .label .icon{display:none}:host .label .icon ::slotted(*){display:block}:host(:hover) .checkbox{border-color:var(--zui-gray-600)}:host(:hover) .checkbox .checkmark{border-color:rgba(0,0,0,0)}:host([checked]) .checkbox{background:var(--zui-checkbox-color, var(--zui-blue));border-color:var(--zui-checkbox-color, var(--zui-blue))}:host([checked]) .checkbox .checkmark{border-color:#fff}:host([checked]) .checkbox.checked-changed .checkmark{animation:check 500ms}:host([checked]) .checkbox.checked-changed .animate{position:absolute;top:0;right:0;bottom:0;left:-0.125rem;width:2.625rem;height:2.625rem;margin:auto auto auto -0.6875rem;background:var(--zui-checkbox-animate-color, var(--zui-blue-200));border-radius:.125rem;animation:scaleIn .35s ease-in-out forwards}:host(:hover[checked]) .checkbox{opacity:.9}:host(:hover[checked]) .checkbox .checkmark{border-color:#fff}:host([indeterminate]) .checkbox{background:var(--zui-checkbox-color, var(--zui-blue));border-color:var(--zui-checkbox-color, var(--zui-blue))}:host([indeterminate]) .checkbox .indeterminate{border-color:#fff}:host([indeterminate]) .checkbox.checked-changed .indeterminate{animation:indeterminate 250ms}:host([indeterminate]) .checkbox.checked-changed .animate{position:absolute;top:0;right:0;bottom:0;left:-0.125rem;width:2.625rem;height:2.625rem;margin:auto auto auto -0.6875rem;background:var(--zui-checkbox-animate-color, var(--zui-blue-200));border-radius:.125rem;animation:scaleIn .35s ease-in-out forwards}:host(:hover[indeterminate]) .checkbox{opacity:.9}:host(:hover[indeterminate]) .checkbox .indeterminate{border-color:#fff}:host([disabled]){cursor:not-allowed}:host([disabled]) .checkbox{border-color:var(--zui-gray-200)}:host([disabled]) .label{color:var(--zui-gray-300)}:host([disabled][checked]) .checkbox{background:var(--zui-gray-200)}:host([disabled][checked]) .checkbox .animate{background:var(--zui-gray-200)}:host(.gallery) .checkbox-container{position:relative;width:100%;max-width:var(--zui-checkbox-gallery-width, 8.125rem);padding:1.875rem;background:#fff;border:.0625rem solid rgba(0,0,0,0);border-radius:.375rem;box-shadow:0 .0625rem .1875rem 0 rgba(0,0,0,.16);transition:background .3s ease-out,border .3s ease-out,box-shadow .3s ease-out}:host(.gallery) .checkbox-container:hover{background:var(--zui-gray-50);box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16)}:host(.gallery) .checkbox-container:hover .checkbox{background:rgba(0,0,0,0)}:host(.gallery) .checkbox{position:absolute;top:-0.375rem;left:-0.375rem;margin:.6875rem;transition:opacity .3s ease-out,background .3s ease-out}:host(.gallery) .label{display:block;margin:0;text-align:center}:host(.gallery) .label .icon{display:block;width:100%;padding-bottom:.9375rem}:host(.gallery) .label .icon *{max-width:100%;margin:0 auto}:host(.gallery) .label .label-text{font-weight:600}:host(.gallery[checked]) .checkbox-container{background:var(--zui-checkbox-gallery-background, var(--zui-blue-100));border:.0625rem solid var(--zui-checkbox-color, var(--zui-blue));box-shadow:none}:host(.gallery[checked]) .checkbox-container:hover{border-color:var(--zui-checkbox-hover-color, var(--zui-blue-600))}:host(.gallery[checked]) .checkbox-container:hover .checkbox{background:var(--zui-checkbox-color, var(--zui-blue))}:host(.gallery[checked]) .checkbox{background:var(--zui-checkbox-color, var(--zui-blue));border-color:var(--zui-checkbox-color, var(--zui-blue))}:host(.gallery[disabled]) .checkbox-container,:host(.gallery[disabled]) .checkbox-container:hover{background:var(--zui-gray-100);border:0;box-shadow:none}:host(.gallery[disabled]) .checkbox{background:rgba(0,0,0,0);border-color:var(--zui-gray-200)}:host(.gallery[disabled]) .checkbox .checkmark{border-color:rgba(0,0,0,0)}:host(.gallery[disabled]) .label .icon{opacity:.5}:host(.gallery[checked][disabled]) .checkbox-container:hover .checkbox{background:var(--zui-gray-200)}:host(.gallery[checked][disabled]) .checkbox{background:var(--zui-gray-200);border-color:var(--zui-gray-200)}:host(.gallery[checked][disabled]) .checkbox .checkmark{border-color:#fff}:host(.gallery.no-dropshadow) .checkbox-container{border:.0625rem solid var(--zui-gray-300);box-shadow:none}:host(.gallery.no-dropshadow) .checkbox-container:hover{background:var(--zui-gray-50)}:host(.gallery.no-dropshadow[checked]) .checkbox-container:hover{background:var(--zui-checkbox-gallery-color, var(--zui-blue-100))}@keyframes check{0%{width:0;height:0}33%{width:0;height:.35rem}66%{width:.6875rem;height:.35rem}}@keyframes scaleIn{from{opacity:.5;transform:scale(0.5, 0.5)}to{opacity:0;transform:scale(1, 1)}}@keyframes indeterminate{0%{width:0}50%{width:.34375rem}100%{width:.6875rem}}`;

var __decorate$B = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Checkbox form control.
 * @element zui-checkbox
 *
 * @event change - When the checked state changes, an event is dispatched with the `checked` boolean details
 *
 * @slot - Default, unnamed slot; for inserting label text, if applicable, into `<zui-checkbox>`
 * @slot icon - Used to create "gallery" checkboxes
 *
 * @attr {string | null} [name=null] - The name of this element that is associated with form submission
 * @attr {boolean} [disabled=false] - Represents whether a user can make changes to this element; if true, the value of this element will be excluded from the form submission
 *
 * @prop {string | null} [name=null] - The name of this element that is associated with form submission
 * @prop {boolean} [disabled=false] - Represents whether a user can make changes to this element; if true, the value of this element will be excluded from the form submission
 *
 * @cssprop [--zui-checkbox-color=var(--zui-blue)] - (default / `gallery`): checkbox background color
 * @cssprop [--zui-checkbox-animate-color=var(--zui-blue-200)] - (default): checkbox background color while animating, on click triggers animation
 * @cssprop [--zui-checkbox-checkbox-margin=0.6875rem 0.6875rem 0.6875rem 0 (11px 11px 11px 0)] - (default): checkbox marginal positioning
 * @cssprop [--zui-checkbox-label-margin=0.5625rem 1.25rem 0.5625rem 0 (9px 20px 9px 0)] - (default): checkbox label's marginal positioning
 * @cssprop [--zui-checkbox-gallery-background=var(--zui-blue-100)] - (`gallery`): background color
 */
class ZuiCheckbox extends ZuiFormAssociatedElement {
  constructor() {
    super(...arguments);
    this.#initialState = false;
    /**
     * Whether or not the checkbox is checked
     */
    this.checked = false;
    /**
     * The value of the checkbox; included in form submissions when the checkbox element is checked.
     */
    this.value = 'on';
    /**
     * If set, the checkbox's value is neither `true` nor `false`, but instead in a state that cannot be determined. This can be useful with "sub-checkboxes", where the checked state of the parent checkbox is determined by the states of all child checkboxes.
     */
    this.indeterminate = false;
    this.#instantiated = false;
    this.#checkedChanged = false;
  }
  get _formValue() {
    return this.checked ? this.value : null;
  }
  get _focusControlSelector() {
    return '.checkbox';
  }
  #initialState;
  #instantiated;
  #checkedChanged;
  formResetCallback() {
    this.checked = this.#initialState;
    this._setFormValue(this._formValue);
  }
  connectedCallback() {
    super.connectedCallback();
    // we want to go a little faster than LitElement and behave more like native HTML Form Associated Elements
    const initialChecked = this.checked || this.hasAttribute('checked');
    const initialValue = this.value || this.getAttribute('value');
    this.#initialState = initialChecked;
    this._setFormValue(initialChecked ? initialValue : null);
    this.setAttribute('role', 'checkbox');
    this.addEventListener('click', this.#onClick);
    this.addEventListener('keydown', this.#onKeydown);
  }
  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    this.#instantiated = true;
    this.requestUpdate();
  }
  update(changedProps) {
    super.update(changedProps);
    if (changedProps.has('value')) {
      this._setFormValue(this._formValue);
    }
    if (changedProps.has('checked') && this.#instantiated) {
      this.#checkedChanged = true;
      this.requestUpdate();
    }
  }
  #onKeydown(e) {
    if (!this.disabled && (e.key === 'Enter' || e.key === ' ')) {
      this.#toggleChecked();
      e.preventDefault();
      e.stopPropagation();
    }
  }
  #onClick(e) {
    if (!this.disabled) {
      this.#toggleChecked();
    }
    e.preventDefault();
    e.stopPropagation();
  }
  // What about readonly? It's super weird...
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#readonly
  #toggleChecked() {
    this.checked = !this.checked;
    this.indeterminate = false;
    this._setFormValue(this._formValue);
    this.dispatchEvent(new CustomEvent('change', {
      detail: {
        checked: this.checked
      },
      bubbles: true
    }));
  }
  #setOrRemoveCheckedAttribute() {
    this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false');
  }
  #setOrRemoveDisabledAttribute() {
    this.disabled ? this.setAttribute('aria-disabled', 'true') : this.setAttribute('aria-disabled', 'false');
  }
  static get styles() {
    return [super.styles, style$E];
  }
  render() {
    this.#setOrRemoveCheckedAttribute();
    this.#setOrRemoveDisabledAttribute();
    const tabIndex = this.disabled ? '-1' : '0';
    return html`
      <section class="checkbox-container" @click="${this.#onClick}" @keydown="${this.#onKeydown}">
        <div class="checkbox ${classMap({
      'checked-changed': this.#checkedChanged
    })}" tabindex="${tabIndex}">
          ${this.indeterminate ? html` <div class="indeterminate-container"> <div class="indeterminate"> </div> </div> ` : html` <div class="checkmark-container"> <div class="checkmark"> </div> </div> `}
          <div class="animate"></div>
        </div>
        <div class="label">
          <div class="icon"><slot name="icon"></slot></div> <div class="label-text"><slot></slot></div>
        </div>
      </section>
    `;
  }
}
__decorate$B([property({
  type: Boolean,
  reflect: true
})], ZuiCheckbox.prototype, "checked", void 0);
__decorate$B([property({
  type: String,
  reflect: true
})], ZuiCheckbox.prototype, "value", void 0);
__decorate$B([property({
  type: Boolean,
  reflect: true
})], ZuiCheckbox.prototype, "indeterminate", void 0);
window.customElements.define('zui-checkbox', ZuiCheckbox);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const HTML_RESULT = 1;
class UnsafeHTMLDirective extends Directive {
  constructor(partInfo) {
    super(partInfo);
    this._value = nothing;
    if (partInfo.type !== PartType.CHILD) {
      throw new Error(`${this.constructor.directiveName}() can only be used in child bindings`);
    }
  }
  render(value) {
    if (value === nothing || value == null) {
      this._templateResult = undefined;
      return this._value = value;
    }
    if (value === noChange) {
      return value;
    }
    if (typeof value != 'string') {
      throw new Error(`${this.constructor.directiveName}() called with a non-string value`);
    }
    if (value === this._value) {
      return this._templateResult;
    }
    this._value = value;
    const strings = [value];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    strings.raw = strings;
    // WARNING: impersonating a TemplateResult like this is extremely
    // dangerous. Third-party directives should not do this.
    return this._templateResult = {
      // Cast to a known set of integers that satisfy ResultType so that we
      // don't have to export ResultType and possibly encourage this pattern.
      // This property needs to remain unminified.
      ['_$litType$']: this.constructor.resultType,
      strings,
      values: []
    };
  }
}
UnsafeHTMLDirective.directiveName = 'unsafeHTML';
UnsafeHTMLDirective.resultType = HTML_RESULT;
/**
 * Renders the result as HTML, rather than text.
 *
 * The values `undefined`, `null`, and `nothing`, will all result in no content
 * (empty string) being rendered.
 *
 * Note, this is unsafe to use with any user-provided input that hasn't been
 * sanitized or escaped, as it may lead to cross-site-scripting
 * vulnerabilities.
 */
const unsafeHTML = directive(UnsafeHTMLDirective);

// bundlers need some help knowing what files to load
const illustrationsJsImportMap = {
  '401': () => import('./internals/_4bd759b0.js'),
  '403': () => import('./internals/_4274727f.js'),
  '404': () => import('./internals/_ce1bd117.js'),
  '500': () => import('./internals/_569f48ef.js')
};

const style$D = css`:host{display:flex;width:100%}:host .container{display:flex;width:100%;flex-direction:column;align-items:center;margin:1.875rem;text-align:center}:host svg{width:100%;max-width:31.25rem;margin:0 0 1.875rem 0}:host .header{margin:0 0 1.25rem 0;font-size:2rem;font-weight:300}:host .subheader{margin:0 0 .625rem 0;font-size:1.25rem;font-weight:600}:host .message{margin:0}:host .slot-wrapper{display:none;margin-top:1.875rem}:host .slot-wrapper.show{display:block}`;

var __decorate$A = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Standardized way of showing common errors to users.
 *
 * @slot - Default, unnamed slot; for passing additional information to be rendered beneath the default rendered content of `<zui-error-page>`
 */
class ZuiErrorPage extends ZuiBaseElement {
  constructor() {
    super(...arguments);
    /**
     * Provide an error type to deteremine which SVG to render
     * @type { '401' | '403' | '404' | '500' | null }
     */
    this.error = null;
    /**
     * Pass header text into component
     */
    this.header = null;
    /**
     * Pass subheader text into component
     */
    this.subheader = null;
    /**
     * Pass body message text into component
     */
    this.message = null;
  }
  static get styles() {
    return [super.styles, style$D];
  }
  #illustration;
  async #loadIllustration() {
    const importedIllustrationFunc = illustrationsJsImportMap[this.error];
    if (typeof importedIllustrationFunc === 'function') {
      const importedIllustrationModule = await importedIllustrationFunc();
      const importedIllustrationSvg = importedIllustrationModule.svgSprite;
      this.#illustration = importedIllustrationSvg;
      this.requestUpdate();
      await this.updateComplete;
      const illustrationLoadEvent = new CustomEvent('svg-load');
      this.dispatchEvent(illustrationLoadEvent);
    }
  }
  updated(changedProps) {
    if (changedProps.has('error')) {
      this.#loadIllustration();
    }
  }
  firstUpdated() {
    this.#onSlotChange();
  }
  render() {
    return html`<div class="container">
      ${this.#illustration ? this.#illustration : html``}
      ${this.header ? html`<h1 class="header">${this.header}</h1>` : html``}
      ${this.subheader ? html`<h2 class="subheader">${this.subheader}</h2>` : html``}
      ${this.message ? html`<p class="message">${unsafeHTML(this.message)}</p>` : html``}
      <div class="slot-wrapper"><slot @slotchange="${this.#onSlotChange}"></slot></div>
    </div>`;
  }
  async #onSlotChange() {
    const slotted = await this._slottedNodes;
    if (slotted.length > 0) {
      this._slotWrapper.classList.toggle('show', true);
    } else {
      this._slotWrapper.classList.toggle('show', false);
    }
    this.requestUpdate();
  }
}
__decorate$A([property({
  type: String,
  attribute: 'error'
})], ZuiErrorPage.prototype, "error", void 0);
__decorate$A([property({
  type: String,
  attribute: 'header'
})], ZuiErrorPage.prototype, "header", void 0);
__decorate$A([property({
  type: String,
  attribute: 'subheader'
})], ZuiErrorPage.prototype, "subheader", void 0);
__decorate$A([property({
  type: String,
  attribute: 'message'
})], ZuiErrorPage.prototype, "message", void 0);
__decorate$A([query('.slot-wrapper')], ZuiErrorPage.prototype, "_slotWrapper", void 0);
__decorate$A([queryAssignedNodes({
  slot: ''
})], ZuiErrorPage.prototype, "_slottedNodes", void 0);
window.customElements.define('zui-error-page', ZuiErrorPage);

const style$C = css`:host{display:flex;flex-wrap:wrap;align-items:center}:host ::slotted([slot=title]){margin:0}:host .trigger{display:flex;width:100%;justify-content:var(--zui-expander-trigger-placement, flex-start);order:1}:host .trigger .clickable{display:inline-flex;align-items:center;background-color:rgba(0,0,0,0);border:0;font:inherit;word-break:break-word;cursor:pointer}:host .trigger .clickable:focus,:host .trigger .clickable::-moz-focus-inner{border:0;outline:0}:host .trigger [icon=zui-down],:host .trigger [icon=zui-right]{flex-shrink:0;cursor:pointer;transition:color .2s ease-out,var(--zui-expander-trigger-animation, transform 0.2s ease-out)}:host([open]) [icon=zui-down]{transform:rotate(-180deg)}:host([open]:not([type=group-standard]):not([type=group-lightweight]):not([type=group-popout])) .trigger{margin-top:.9375rem}:host .trigger .clickable{padding:.3125rem .9375rem;border-radius:1.25rem;outline:none;color:var(--zui-blue)}:host .trigger .clickable .trigger-text-less,:host .trigger .clickable .trigger-text-more{margin-left:.3125rem;font-weight:600}:host .trigger .clickable .trigger-text-less{display:none}:host .trigger .clickable:hover{background-color:var(--zui-gray-100)}:host .trigger .clickable:focus{box-shadow:inset 0 0 0 1px var(--zui-blue)}:host .trigger .clickable:active{background:var(--zui-gray-200)}:host([open]) .trigger .clickable .trigger-text-more{display:none}:host([open]) .trigger .clickable .trigger-text-less{display:inline-block}:host [name=content]{display:none;width:inherit;animation:expanderOpen .2s;transform-origin:top center}@keyframes expanderOpen{0%{transform:scaleY(0.75)}100%{transform:scaleY(1)}}:host([open]) [name=content]{display:initial;width:100%}:host([type=group-standard]) .trigger{justify-content:space-between;align-items:center;order:0;padding:1.25rem;color:var(--zui-gray-800)}:host([type=group-standard]) ::slotted([slot=content]){padding:1.25rem}:host([type=group-standard][open]:focus){animation:1s forwards fadeBackground}@keyframes fadeBackground{from{background:#fafafa}to{background:#fff}}:host([type=group-lightweight]) .header-content-wrapper{display:flex;width:100%;align-items:center}:host([type=group-lightweight]) .trigger{width:auto;align-items:center;padding:.875rem .875rem .875rem .4375rem;cursor:pointer;color:var(--zui-gray)}:host([type=group-lightweight]) .trigger:hover{color:var(--zui-gray-800)}:host([type=group-lightweight]) zui-icon{margin-right:.3125rem}:host([type=group-lightweight]) ::slotted([slot=content]){padding:.875rem}:host([type=group-lightweight]:focus) .trigger{color:var(--zui-gray-800)}:host([type=group-lightweight][open]) [icon=zui-right]{transform:rotate(90deg)}:host([type=group-popout]) .header-content-wrapper{display:flex;flex-direction:var(--zui-expander-group-popout-flex-direction, column);justify-content:center}:host([type=group-popout]) .header{display:flex;width:100%;justify-content:space-between}:host([type=group-popout]) ::slotted([slot=trigger]){align-self:center}:host([type=group-popout]) ::slotted([slot=subtitle]){margin-bottom:0;font-size:.6875rem;font-weight:400;color:var(--zui-gray)}:host([type=group-popout]) .footer-container{display:none}:host([type=group-popout][open]) ::slotted([slot=trigger]){display:none}:host([type=group-popout][open]) .footer-container{display:var(--zui-expander-popout-footer-display, flex);width:100%;flex-wrap:wrap;justify-content:var(--zui-expander-popout-footer-position, flex-end);align-items:center}:host([type=group-popout][open]) ::slotted([slot=footer-button]){margin:var(--zui-expander-popout-footer-buttons-margin, 0 0 0 0.625rem)}`;

var __decorate$z = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * A standalone `<zui-expander>` renders as the default 'peek-a-boo' expander. `<zui-expander` `type="group-standard">`'s passed into a `<zui-expander-group` `type="ground-standard">` render as a 'standard expander', or `group-standard` type.
 *
 * @element zui-expander
 *
 * @slot content - (all types): slot for the content that will be visible depending on if `open` or not
 * @slot title - (`group-standard`): slot for title text, applicable to `<zui-expander>`'s in `<zui-group-expander>` only
 *
 * @event openchanged - Event is fired when component loads and if it is opened or closed, contains details regarding `open` state
 *
 * @cssprop [--zui-expander-trigger-placement=flex-end] - Flexibility in where consumers place the trigger that opens/closes expanders
 * @cssprop [--zui-expander-trigger-animation=transform 0.2s ease-out] - Customize timing and easing for animation reveals, helpful as default can feel off based on content size
 */
class ZuiExpander extends ZuiBaseElement {
  constructor() {
    super(...arguments);
    /**
     * Determines whether an expander is open or closed
     */
    this.open = false;
    /**
     * For standalone expanders aka 'peek-a-boo' expanders, no type value needs to be specified; for all `<zui-expander>`'s in a `<zui-expander-group>` a `type="group-standard"` must be specified.
     * @type { 'group-standard' | null}
     */
    this.type = null;
    /**
     * By default in standard aka peekaboo expanders, the closed state text says 'See more', assign a new value if necessary
     */
    this.expandLabel = 'See more';
    /**
     * By default in standard aka peekaboo expanders, the opened state text says 'See less', assign a new value if necessary
     */
    this.collapseLabel = 'See less';
  }
  get _trigger() {
    return findAssignedElement(this._triggerSlotEl, '*');
  }
  get _footerTriggers() {
    return findAssignedElements(this._footerSlotEl, '[expander-close]');
  }
  setOpen(force) {
    this.open = force;
  }
  toggleOpen() {
    this.open = !this.open;
  }
  onKeydownToggleOpen() {
    const clickKeys = ['Space', 'Enter'];
    this.addEventListener('keydown', e => {
      if (clickKeys.includes(e.code) && this === document.activeElement) {
        e.preventDefault();
        e.stopPropagation();
        this.toggleOpen();
      }
    });
  }
  setTabIndex() {
    this.tabIndex = 0;
    this.setAttribute('role', 'button');
  }
  firstUpdated() {
    if (this.type === 'group-popout' && this._trigger) {
      this._trigger.addEventListener('click', () => this.toggleOpen());
    }
    if (this.type === 'group-popout' && this._footerTriggers) {
      this._footerTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
          this.toggleOpen();
        });
      });
    }
    if (this.type === 'group-lightweight' || this.type === 'group-standard') {
      this.setTabIndex();
      this.onKeydownToggleOpen();
    }
  }
  static get styles() {
    const result = [super.styles, style$C];
    return result;
  }
  render() {
    this._raiseOpenCloseEvent(this.open);
    let expanderTemplate;
    switch (this.type) {
      case 'group-standard':
        expanderTemplate = this._renderGroupStandard();
        break;
      case 'group-lightweight':
        expanderTemplate = this._renderGroupLightweight();
        break;
      case 'group-popout':
        expanderTemplate = this._renderGroupPopout();
        break;
      default:
        expanderTemplate = this._renderStandard();
        break;
    }
    return html` ${expanderTemplate} `;
  }
  _renderGroupStandard() {
    return html`
      <div class="trigger" @click=${this.toggleOpen}>
        <slot name="title"></slot>
        <zui-icon icon="zui-down"></zui-icon>
      </div>
      <slot name="content"></slot>
    `;
  }
  _renderGroupLightweight() {
    return html`
      <div class="header-content-wrapper">
        <div class="trigger" @click=${this.toggleOpen}>
          <zui-icon icon="zui-right"></zui-icon>
          <slot name="title"></slot>
        </div>
      </div>
      <slot name="content"></slot>
    `;
  }
  _renderGroupPopout() {
    return html`
      <div class="header">
        <div class="header-content-wrapper">
          <slot name="title"></slot>
          <slot name="subtitle"></slot>
        </div>
        <slot name="trigger"></slot>
      </div>
      <slot name="content"></slot>
      <div class="footer-container">
        <slot name="footer-button"></slot>
      </div>
    `;
  }
  _renderStandard() {
    return html`
      <div class="trigger">
        <button class="clickable" @click=${this.toggleOpen}>
          <zui-icon class="small" icon="zui-down"></zui-icon>
          <span class="trigger-text-more">${this.expandLabel}</span>
          <span class="trigger-text-less">${this.collapseLabel}</span>
        </button>
      </div>
      <slot tabindex="${this.open ? '0' : '-1'}" name="content"></slot>
    `;
  }
  _raiseOpenCloseEvent(open) {
    this.dispatchEvent(new CustomEvent('openchanged', {
      bubbles: true,
      composed: true,
      detail: {
        open
      }
    }));
  }
}
__decorate$z([property({
  type: Boolean,
  reflect: true,
  attribute: 'open'
})], ZuiExpander.prototype, "open", void 0);
__decorate$z([property({
  type: String,
  reflect: true,
  attribute: 'type'
})], ZuiExpander.prototype, "type", void 0);
__decorate$z([property({
  type: String,
  attribute: 'expand-label'
})], ZuiExpander.prototype, "expandLabel", void 0);
__decorate$z([property({
  type: String,
  attribute: 'collapse-label'
})], ZuiExpander.prototype, "collapseLabel", void 0);
__decorate$z([query('slot[name="trigger"]')], ZuiExpander.prototype, "_triggerSlotEl", void 0);
__decorate$z([query('slot[name="footer-button"]')], ZuiExpander.prototype, "_footerSlotEl", void 0);
window.customElements.define('zui-expander', ZuiExpander);

const style$B = css`:host{display:inline-flex;width:100%;flex-direction:column;animation:fade-background .25s ease-out forwards}:host[type=group-standard]{box-shadow:0 1px 3px 0 rgba(0,0,0,.16)}:host ::slotted(zui-expander[type=group-standard]){background:#fff;transition:background .25s ease-out}:host ::slotted(zui-expander[type=group-standard]){border-bottom:var(--zui-expander-border-bottom, 1px var(--zui-gray-100) solid)}:host ::slotted(zui-expander[type=group-standard]:last-of-type){border-bottom:0}:host ::slotted(zui-expander[type=group-standard]:hover),:host ::slotted(zui-expander[type=group-standard]:focus){background:#fafafa}:host ::slotted(zui-expander[type=group-popout]){margin:.875rem 0;padding:1.25rem;background:#fff;box-shadow:0 1px 3px 0 rgba(0,0,0,.16)}`;

var __decorate$y = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * `<zui-expander type="group-standard">` elements inserted into `<zui-expander-group type="ground-standard">` will render as standard expanders, or as the `group-standard` type.
 *
 * @element zui-expander-group
 *
 * @slot - Default, unnamed slot; for inserting `<zui-expander type="ground-standard">` elements into `<zui-expander-group type="ground-standard">`
 *
 * @event openchanged - Event is dispatched to `<zui-group-expander>` when the `open` property/attribute has been changed or the component first loads; allows `<zui-group-expander>` to regulate `<zui-expander>` elements in case consumers only want users to see one `open` expander at a time versus having multiple opened
 */
class ZuiExpanderGroup extends ZuiBaseElement {
  constructor() {
    super(...arguments);
    /**
     * Set to `true` on `<zui-group-expander>` if you prefer ability for users to have multiple `<zui-expander>`'s open at once
     */
    this.multiselect = false;
    this.#nodeObserver = null;
  }
  #nodeObserver;
  #expanders;
  connectedCallback() {
    super.connectedCallback();
    this._setupExpanders();
    this._setupMutationObserver();
  }
  disconnectedCallback() {
    this.#nodeObserver.disconnect();
  }
  static get styles() {
    return [super.styles, style$B];
  }
  render() {
    return html` <slot></slot> `;
  }
  _setupExpanders() {
    if (this.#expanders) {
      for (const expander of this.#expanders) {
        expander.removeEventListener('openchanged', this._expanderEventListener);
      }
    }
    this.#expanders = this.getElementsByTagName('zui-expander');
    for (const expander of this.#expanders) {
      expander.addEventListener('openchanged', this._expanderEventListener.bind(this));
    }
  }
  _setupMutationObserver() {
    this.#nodeObserver = new MutationObserver(mutationsList => {
      for (const m of mutationsList) {
        if (m.type === 'childList') {
          this._setupExpanders();
        }
      }
    });
    this.#nodeObserver.observe(this, {
      childList: true
    });
  }
  _expanderEventListener(event) {
    if (!this.multiselect) {
      if (event.detail.open) {
        const expander = event.target;
        for (const otherExpander of this.#expanders) {
          if (otherExpander !== expander) {
            otherExpander.removeAttribute('open');
          }
        }
      }
    }
  }
}
__decorate$y([property({
  type: Boolean,
  attribute: 'multiselect'
})], ZuiExpanderGroup.prototype, "multiselect", void 0);
window.customElements.define('zui-expander-group', ZuiExpanderGroup);

const style$A = css`:host .container label,:host .container ::slotted(label){display:inline-flex;margin:0;font-weight:600;color:var(--zui-gray-800)}:host{contain:none}:host .container{display:flex;flex-direction:column;margin-bottom:1.25rem}:host .container ::slotted(*:not(zui-toggle):not(zui-checkbox):not(zui-radio)){margin-top:.25rem !important}:host .container ::slotted(zui-toggle){margin:.9375rem 0}`;

var __decorate$x = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * `<zui-formfield>` provides a standardized way of labeling and styling form controls.
 *
 * @slot - Default, unnamed slot; for inserting form controls, such as `<select>`, `<input>`, `<zui-input>`, `<zui-select>`, etc., into `<zui-formfield>`
 *
 * @csspart container - The container for form fields inserted into `zui-formfield`; this is exposed as a CSS shadow part and can be accessed with `::part(container)`.
 * @csspart label - The label for `zui-formfield`; this is exposed as a CSS shadow part and can be accessed with `::part(label)`.
 */
class ZuiFormField extends ZuiBaseElement {
  constructor() {
    super(...arguments);
    /**
     * (optional): Label text, for the form control. Alternatively can slot in label text instead. If necessary, can be styled with `::part(label)`.
     */
    this.label = null;
    /**
     * (optional): Provide a valid CSS selector to help `zui-formfield` find the correct form control. Defaults to the first child element.
     */
    this.controlSelector = '*';
  }
  get #control() {
    return findAssignedElement(this._slotEl, this.controlSelector);
  }
  static get styles() {
    return [super.styles, style$A];
  }
  render() {
    return html`
      <div class="container" part="container">
        ${this.label ? html` <label @click="${this.#onLabelClick}" part="label">${this.label}</label> ` : nothing}
        <slot></slot>
      </div>
    `;
  }
  #onLabelClick() {
    this.#control?.focus();
    this.#control?.click();
  }
}
__decorate$x([property({
  type: String
})], ZuiFormField.prototype, "label", void 0);
__decorate$x([property({
  type: String,
  attribute: 'control-selector'
})], ZuiFormField.prototype, "controlSelector", void 0);
__decorate$x([query('slot')], ZuiFormField.prototype, "_slotEl", void 0);
window.customElements.define('zui-formfield', ZuiFormField);

const style$z = css`input{display:inline-block;width:100%;min-height:2.625rem;vertical-align:middle;padding:0 .625rem;background-color:#fff;border:.0625rem solid var(--zui-gray-200);border-radius:.25rem;font:inherit;color:inherit;transition:border 100ms ease-in-out,box-shadow 100ms ease-in-out;box-sizing:border-box;appearance:textfield}input::-webkit-input-placeholder{color:var(--zui-gray-200)}input::-moz-placeholder{opacity:1;color:var(--zui-gray-200)}input:-moz-placeholder{opacity:1;color:var(--zui-gray-200)}input:-ms-input-placeholder{color:var(--zui-gray-200)}input:not(output):-moz-ui-invalid{box-shadow:none}input:hover{border-color:var(--zui-gray-400)}input:focus{border-color:var(--zui-blue-400);box-shadow:0 0 0 .0625rem var(--zui-blue-400);outline:none}input[disabled]{background-color:var(--zui-gray-100);cursor:not-allowed;color:var(--zui-gray-300)}input[disabled]:hover{border:.0625rem solid var(--zui-gray-200)}input[readonly]{outline:none}:host{display:block;max-width:75ch}.prefix,.suffix{position:absolute;top:.0625rem;bottom:.0625rem;display:flex;width:2.5rem;justify-content:center;align-items:center;background:var(--zui-gray-50);pointer-events:none}.prefix.readonly,.suffix.readonly{background:var(--zui-gray-25);border:0}.prefix.disabled,.suffix.disabled{background:var(--zui-gray-100)}.prefix{left:.0625rem;border-right:.0625rem solid var(--zui-gray-100);border-top-left-radius:.1875rem;border-bottom-left-radius:.1875rem}.prefix~input{padding-left:3.125rem}.suffix{right:.0625rem;border-left:.0625rem solid var(--zui-gray-100);border-top-right-radius:.1875rem;border-bottom-right-radius:.1875rem}.suffix+input{padding-right:3.125rem}input[type=color]{width:4rem;height:2.625rem;padding:.25rem;padding:0;border-right:0;border-top-right-radius:0;border-bottom-right-radius:0}input[type=color]::-webkit-color-swatch-wrapper{padding:0;padding-inline-start:0;padding-inline-end:0}input[type=color]::-webkit-color-swatch{border:0}input[type=color]:hover{opacity:.85}input[type=color]+input.shadowdom-input{width:14ch;border-top-left-radius:0;border-bottom-left-radius:0}.date-container{display:flex;align-items:center}.date-container input[type=date]{display:flex;padding-left:2.75rem}.date-container input[type=date]~zui-icon{position:absolute;left:0;display:flex;width:1.125rem;height:1.125rem;justify-content:center;align-items:center;margin:0 .625rem;padding:1.25rem .9375rem;fill:var(--zui-input-date-icon-color, var(--zui-blue));pointer-events:none}.date-container input[type=date]~zui-icon.clickable-icon{transition:fill .3s ease-out;pointer-events:unset}.date-container input[type=date]~zui-icon.clickable-icon:hover{fill:var(--zui-input-date-icon-color-hover, var(--zui-blue-400))}.date-container input[type=date]~zui-icon.clickable-icon:active{fill:var(--zui-input-date-icon-color-hover, var(--zui-blue-600))}.date-container input[type=date]::-webkit-calendar-picker-indicator{display:none}::slotted(input:not(.shadowdom-input)){display:none !important}:host(.xsmall){width:4.0625rem}:host(.small){width:12.5rem}:host(.medium){width:18.75rem}:host(.large){width:25rem}:host(.is-invalid) input,:host(--tmp-user-interacted:invalid) input,:host(:state(tmp-user-interacted):invalid) input{border:.0625rem solid var(--zui-red);box-shadow:0 0 0 .0625rem var(--zui-red);transition:border 100ms ease-out,box-shadow 100ms ease-out}:host(.is-invalid) input:hover,:host(--tmp-user-interacted:invalid) input:hover,:host(:state(tmp-user-interacted):invalid) input:hover{border-color:var(--zui-red-600);box-shadow:0 0 0 .0625rem var(--zui-red-600)}:host(.is-invalid) input:focus,:host(--tmp-user-interacted:invalid) input:focus,:host(:state(tmp-user-interacted):invalid) input:focus{border-color:var(--zui-red-400);box-shadow:0 0 0 .0625rem var(--zui-red-400);outline:none}:host(.is-valid) input{border:.0625rem solid var(--zui-green);box-shadow:0 0 0 .0625rem var(--zui-green)}:host(.is-valid) input:hover{border-color:var(--zui-green-600);box-shadow:0 0 0 .0625rem var(--zui-green-600)}:host(.is-valid) input:focus{border-color:var(--zui-green-400);box-shadow:0 0 0 .0625rem var(--zui-green-400);outline:none}.container{display:flex}:host(:focus-within) input{border-color:var(--zui-blue-400);box-shadow:0 0 0 .0625rem var(--zui-blue-400);outline:none}:host(.is-valid :focus-within) input{border-color:var(--zui-green-400);box-shadow:0 0 0 .0625rem var(--zui-green-400);outline:none}:host(.is-invalid :focus-within) input,:host(:invalid :focus-within) input{border-color:var(--zui-red-400);box-shadow:0 0 0 .0625rem var(--zui-red-400);outline:none}`;

var __decorate$w = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const HEX_COLOR_REGEX = /^#[0-9A-F]{6}$/i;
const DEFAULT_COLOR_VALUE = '#000000';
const SUPPORTS_INPUT_SHOW_PICKER = !!HTMLInputElement.prototype.showPicker;
const VALIDATION_MESSAGE_MAP$1 = {
  rangeUnderflow: 'min',
  rangeOverflow: 'max',
  stepMismatch: 'step',
  tooShort: 'minlength',
  tooLong: 'maxlength',
  typeMismatch: 'type',
  patternMismatch: 'pattern',
  valueMissing: 'required',
  badInput: 'type'
};
/**
 * A form control to allow a user to provide a value, such as text or color.
 *
 * @element zui-input
 *
 * @slot - An unnamed, optional slot to allow you to provide a native input; if provided, `zui-input` will keep its value in sync with that value. This is helpful for certain server-side applications
 *
 * @event {CustomEvent} input - Modeled after native input events: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
 * @event {CustomEvent} change - Modeled after native input events: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
 *
 * @attr {string | null} [name=null] - The name of this element that is associated with form submission
 * @attr {boolean} [disabled=false]  - Represents whether a user can make changes to this element; if true, the value of this element will be excluded from the form submission
 * @attr {boolean} [readOnly=false] - Represents whether a user can make changes to this element; the value of this element will still be included in the form submission
 * @attr {boolean} [autofocus=false] - If true, this element will be focused when connected to the document
 * @attr {string} [validation-message-min] - The message to display when the value is less than the `min` attribute
 * @attr {string} [validation-message-max] - The message to display when the value is greater than the `max` attribute
 * @attr {string} [validation-message-step] - The message to display when the value is not a multiple of the `step` attribute
 * @attr {string} [validation-message-minlength] - The message to display when the length of the value is less than the `minlength` attribute
 * @attr {string} [validation-message-maxlength] - The message to display when the length of the value is greater than the `maxlength` attribute
 * @attr {string} [validation-message-type] - The message to display when the value is not the correct type
 * @attr {string} [validation-message-pattern] - The message to display when the value does not match the `pattern` attribute
 * @attr {string} [validation-message-required] - The message to display when the value is required but not provided
 *
 * @prop {string | null} [name=null] - The name of this element that is associated with form submission
 * @prop {boolean} [disabled=false] - Represents whether a user can make changes to this element; if true, the value of this element will be excluded from the form submission
 * @prop {boolean} [readOnly=false] - Represents whether a user can make changes to this element; the value of this element will still be included in the form submission
 * @prop {boolean} [autofocus=false] - If true, this element will be focused when connected to the document
 * @prop {boolean} willValidate - Returns true if the element will be validated when the form is submitted
 * @prop {ValidityState} validity - Returns a {@link https://developer.mozilla.org/en-US/docs/Web/API/ValidityState | ValidityState} object that represents the validity states of an element
 * @prop {string} validationMessage - Returns the error message that would be displayed if the element was to be checked for validity
 *
 * @csspart prefix - (prefix only): style control of the prefix rendered element; this is exposed as a CSS shadow part and can be accessed with `::part(prefix)`
 * @csspart suffix - (suffix only): style control of the suffix rendered element; this is exposed as a CSS shadow part and can be accessed with `::part(suffix)`
 */
class ZuiInputElement extends ZuiFormAssociatedElement {
  constructor() {
    super(...arguments);
    this.#value = '';
    this.#internalValue = '';
    /**
     * An optional placeholder value (e.g. "ghost text"). Use this to provide extra contextual information, but do not use in place of a label!
     */
    this.placeholder = '';
    /**
     * Represents that this control must be filled in for form submission
     */
    this.required = false;
    /**
     * Represents the maximum length of characters supported by value. Only applicable to text-based inputs (e.g. `text`, `search`)
     */
    this.maxLength = 524288;
    /**
     * Represents the minimum length of characters supported by value. Only applicable to text-based inputs (e.g. `text`, `search`)
     */
    this.minLength = null;
    /**
     * Represents the max value of the input. Only applicable to `number` or `date` inputs. If not set, there is no maximum value.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/max | max}
     */
    this.max = '';
    /**
     * Represents the min value of the input. Only applicable to `number` or `date` inputs. If not set, there is no minimum value.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/min | min}
     */
    this.min = '';
    /**
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/step | step}
     */
    this.step = '';
    /**
     * Represents the type of the input
     * @type { 'text' | 'number' | 'color' | 'tel' | 'email' | 'password' | 'url' | 'date' }
     */
    this.type = 'text';
    /**
     * Represents the pattern that the input's value must match to be valid. Only applicable to text-based inputs (e.g. `text`, `search`)
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern | pattern}
     */
    this.pattern = '';
    /**
     * An optional list of values to recommend to the user; best used with `[type='color']`
     */
    this.recommendedValues = null;
    /**
     * (applicable to all types except: `date`, `color`): adds prefixed text within a box, before actual input value
     */
    this.prefix = null;
    /**
     * (applicable to all types except: `date`, `color`): adds suffixed text within a box, after actual input value
     */
    this.suffix = null;
  }
  get _focusControlSelector() {
    return '.focus-input';
  }
  get _formValue() {
    return this.value;
  }
  formResetCallback() {
    this.value = '';
  }
  #value;
  #internalValue;
  /**
   * Input value that is associated with form submission
   */
  get value() {
    let val = this.#parseValue(this.#value, this.type);
    if (this.type === 'color') {
      val = val?.toLowerCase() ?? DEFAULT_COLOR_VALUE;
    }
    return val;
  }
  set value(val) {
    const oldVal = this.#value;
    this.#internalValue = this.#value = this.#parseValue(val, this.type);
    this._setFormValue(this.#value);
    this.requestUpdate('value', oldVal);
  }
  get #slottedInput() {
    return this._slottedInputs?.[0];
  }
  static get styles() {
    return [super.styles, style$z];
  }
  connectedCallback() {
    super.connectedCallback();
    // we want to go a little faster than LitElement and behave more like native HTML Form Associated Elements
    const type = this.type ?? this.getAttribute('type');
    const value = this.value ?? this.getAttribute('value');
    this._setFormValue(this.#parseValue(value, type));
  }
  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    if (this.type === 'color' && !this.#value) {
      this.value = DEFAULT_COLOR_VALUE;
    }
    if (this.#slottedInput) {
      this.#slottedInput.addEventListener('change', e => e.preventDefault());
    }
  }
  updated(changedProps) {
    super.updated(changedProps);
    if (this.#slottedInput) {
      for (const k of changedProps.keys()) {
        const observedProperties = ['value', 'readonly', 'disabled'];
        if (observedProperties.includes(k)) {
          /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
          this.#slottedInput[k] = this[k];
          if (k === 'value') {
            this.#slottedInput.dispatchEvent(new CustomEvent('input'));
          }
        }
      }
    }
    this.#setValidity();
  }
  render() {
    return html` ${this.#renderInput()} ${this.#renderDatalist()}
      <slot></slot>`;
  }
  #renderInput() {
    const datalistId = this.recommendedValues?.length ? 'recommendedValues' : undefined;
    switch (this.type) {
      case 'color':
        return this.#renderColorInput(datalistId);
      case 'date':
        return this.#renderDateInput();
      default:
        return this.#renderDefaultInput(this.type, {
          maxLength: this.maxLength,
          datalistId,
          minLength: this.minLength,
          min: this.min !== '' ? this.min : undefined,
          max: this.max !== '' ? this.max : undefined,
          step: this.step !== '' ? this.step : undefined,
          pattern: this.pattern !== '' ? this.pattern : undefined
        });
    }
  }
  #renderColorInput(datalistId) {
    return html`
      <div class="container">
        <input
          class="shadowdom-input ${classMap({
      'has-datalist': !!datalistId
    })}"
          list="${ifDefined(datalistId)}"
          type="color"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readOnly}"
          @input="${this.#onInput}"
          @change="${e => this.#onChange(e, true)}"
          ?required="${this.required}"
        />
        ${this.#renderDefaultInput('text', {
      maxLength: 7,
      shouldCommitChange() {
        return true;
      },
      shouldCommitInput() {
        return false;
      }
    })}
      </div>
    `;
  }
  #renderDateInput() {
    import('./internals/_288dbf3b.js');
    const classes = {
      'clickable-icon': SUPPORTS_INPUT_SHOW_PICKER
    };
    return html`
      <div class="date-container">
        ${this.#renderDefaultInput('date', {
      max: this.max,
      min: this.min
    })}
        <zui-icon class="${classMap(classes)}" @click="${this.#showDatePicker}" icon="zui-calendar"></zui-icon>
      </div>
    `;
  }
  #renderDefaultInput(type, opts) {
    const {
      datalistId,
      maxLength,
      shouldCommitChange,
      shouldCommitInput,
      minLength,
      min,
      max,
      step,
      pattern
    } = opts ?? {};
    const classes = {
      readonly: this.readOnly,
      disabled: this.disabled
    };
    let {
      placeholder
    } = this;
    let value = this.#internalValue;
    if (value === undefined || value === null) {
      value = '';
    }
    if (placeholder === undefined || placeholder === null) {
      placeholder = '';
    }
    return html`
      ${this.prefix ? html`<div part="prefix" class="prefix ${classMap(classes)}">${this.prefix}</div>` : nothing}
      ${this.suffix ? html`<div part="suffix" class="suffix ${classMap(classes)}">${this.suffix}</div>` : nothing}
      <input
        class="shadowdom-input focus-input"
        list="${ifDefined(datalistId)}"
        type="${type}"
        .value="${value}"
        placeholder="${placeholder}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readOnly}"
        @input="${e => this.#onInput(e, shouldCommitInput?.(e, this.#internalValue))}"
        @change="${e => this.#onChange(e, shouldCommitChange?.(e, this.#internalValue))}"
        ?required="${this.required}"
        maxlength="${ifDefined(maxLength)}"
        minlength="${ifDefined(minLength)}"
        min="${ifDefined(min)}"
        max="${ifDefined(max)}"
        step="${ifDefined(step)}"
        pattern="${ifDefined(pattern)}"
      />
    `;
  }
  #renderDatalist() {
    if (this.recommendedValues?.length) {
      const options = this.recommendedValues.map(x => html`<option>${x.toString()}</option>`);
      return html` <datalist id="recommendedValues"> ${options} </datalist>`;
    } else {
      return html``;
    }
  }
  // ATM Chrome & FF differ with input date; clicking icon in Chrome opens a calendar popup and prevents typing a date entry while pop up is open, clicking anywhere on input in FF opens popup but typing an entry is still allowed
  #showDatePicker() {
    if (SUPPORTS_INPUT_SHOW_PICKER) {
      this.renderRoot?.querySelector('input')?.showPicker();
    }
  }
  #onInput(e, commitChange) {
    this.#internalValue = e.target.value;
    if (commitChange !== false) {
      this.value = this.#internalValue;
    }
  }
  #onChange(_e, commitChange) {
    if (commitChange !== false) {
      this.value = this.#internalValue;
      this.#setValidity();
    }
    this.dispatchEvent(new CustomEvent('change', {
      detail: this.value,
      bubbles: true
    }));
  }
  #setValidity() {
    const input = this._input;
    if (!input) {
      return;
    }
    const inputValidity = input.validity;
    const validity = {
      badInput: inputValidity.badInput,
      patternMismatch: inputValidity.patternMismatch,
      rangeOverflow: inputValidity.rangeOverflow,
      rangeUnderflow: inputValidity.rangeUnderflow,
      stepMismatch: inputValidity.stepMismatch,
      customError: this.validity.customError,
      typeMismatch: inputValidity.typeMismatch,
      valueMissing: inputValidity.valueMissing,
      tooShort: input.value && this.minLength !== null && input.value.length < this.minLength,
      tooLong: input.value && this.maxLength !== null && input.value.length > this.maxLength
    };
    // TODO(pat): some of this behavior re: customError may be worth standardizing in FACE base class, via _setValidity
    // Deferring for now, as there are no other complex implementations
    let message = '';
    // preserve custom error message if it exists
    if (validity.customError) {
      message = this.validationMessage;
    } else {
      message = this._mapValidationMessage(input.validationMessage, validity, VALIDATION_MESSAGE_MAP$1);
    }
    this._setValidity(validity, message);
  }
  #parseValue(val, type) {
    if (val === undefined || val === null) {
      val = '';
    }
    let result;
    switch (type) {
      case 'number':
        {
          let v = Number.parseInt(val);
          if (Number.isNaN && Number.isNaN(v) || window.isNaN && window.isNaN(v)) {
            v = '';
          }
          result = v.toString();
        }
        break;
      case 'color':
        {
          const isValid = HEX_COLOR_REGEX.test(val);
          result = isValid ? val : DEFAULT_COLOR_VALUE;
        }
        break;
      case 'text':
      default:
        result = val.toString();
        break;
    }
    return result;
  }
}
__decorate$w([property({
  type: String
})], ZuiInputElement.prototype, "value", null);
__decorate$w([property({
  type: String
})], ZuiInputElement.prototype, "placeholder", void 0);
__decorate$w([property({
  type: Boolean
})], ZuiInputElement.prototype, "required", void 0);
__decorate$w([property({
  type: Number,
  attribute: 'maxlength'
})], ZuiInputElement.prototype, "maxLength", void 0);
__decorate$w([property({
  type: Number,
  attribute: 'minlength'
})], ZuiInputElement.prototype, "minLength", void 0);
__decorate$w([property({
  type: String
})], ZuiInputElement.prototype, "max", void 0);
__decorate$w([property({
  type: String
})], ZuiInputElement.prototype, "min", void 0);
__decorate$w([property({
  type: String
})], ZuiInputElement.prototype, "step", void 0);
__decorate$w([property({
  type: String
})], ZuiInputElement.prototype, "type", void 0);
__decorate$w([property({
  type: String
})], ZuiInputElement.prototype, "pattern", void 0);
__decorate$w([property({
  type: Array,
  attribute: 'recommended-values'
})], ZuiInputElement.prototype, "recommendedValues", void 0);
__decorate$w([property({
  type: String
})], ZuiInputElement.prototype, "prefix", void 0);
__decorate$w([property({
  type: String
})], ZuiInputElement.prototype, "suffix", void 0);
__decorate$w([queryAssignedElements({
  slot: '',
  flatten: true,
  selector: 'input'
})], ZuiInputElement.prototype, "_slottedInputs", void 0);
__decorate$w([query('input')], ZuiInputElement.prototype, "_input", void 0);
window.customElements.define('zui-input', ZuiInputElement);

const style$y = css`:host{display:block}@media(min-width: 45em){.container.no-icon zui-icon{display:none}}.container{display:flex;width:100%;align-items:stretch;margin:0;border:1px solid var(--zui-gray-200);border-radius:4px;cursor:pointer;transition:border 100ms ease-out,box-shadow 100ms ease-out}.container:hover:not(.disabled){border-color:var(--zui-gray-300)}.container:focus:not(.disabled){border-color:var(--zui-blue-400);box-shadow:0 0 0 1px var(--zui-blue-400);outline:none}.container.has-file-dragover{border-color:var(--zui-blue-400);box-shadow:0 0 0 1px var(--zui-blue-400);outline:none}.container input.hidden{position:absolute;width:.1px;height:.1px;opacity:0;z-index:-1;overflow:hidden}.container .button{display:flex;align-items:center;padding:.625rem;background-color:var(--zui-gray-50);border-right:1px solid var(--zui-gray-200);border-color:inherit;border-radius:4px 0 0 4px;font-weight:600;color:var(--zui-blue-400);fill:var(--zui-blue-400);transition:background 250ms ease-out,box-shadow 100ms ease-out}.container .button.disabled{cursor:not-allowed;color:var(--zui-gray-300)}.container .button:hover:not(.disabled){background:var(--zui-gray-100);cursor:pointer;color:var(--zui-blue);fill:var(--zui-blue)}.container .button .button-text{margin-left:.375rem}@media(max-width: 45em){.container .button .button-text{display:none}}.container .faux-input{min-width:6.25rem;flex-grow:1;padding:.625rem;background-color:#fff;border-radius:0 4px 4px 0}.container .faux-input span{color:var(--zui-gray-300)}.container .faux-input span.value-text-color{color:var(--zui-gray-800)}.container .faux-input.disabled{background-color:var(--zui-gray-100);cursor:not-allowed;color:var(--zui-gray)}:host([no-icon]) .container .button .button-text{margin-left:0}`;

var __decorate$v = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const VALIDATION_MESSAGE_MAP = {
  valueMissing: 'required'
};
/**
 * A standardized component modelled after native file input.
 * @element zui-input-file
 *
 * @attr {string | null} [name=null] - The name of this element that is associated with form submission
 * @attr {boolean} [disabled=false] - Represents whether a user can make changes to this element; if true, the value of this element will be excluded from the form submission
 * @attr {boolean} [readonly=false] - Represents whether a user can make changes to this element; the value of this element will still be included in the form submission
 * @attr {boolean} [autofocus=false] - If true, this element will be focused when connected to the document
 * @attr {string} [validation-message-required] - The message to display when the value is required but not provided
 *
 * @prop {string | null} [name=null] - The name of this element that is associated with form submission
 * @prop {boolean} [disabled=false] - Represents whether a user can make changes to this element; if true, the value of this element will be excluded from the form submission
 * @prop {boolean} [readOnly=false] - Represents whether a user can make changes to this element; the value of this element will still be included in the form submission
 * @prop {boolean} [autofocus=false] - If true, this element will be focused when connected to the document
 * @prop {boolean} willValidate - Returns true if the element will be validated when the form is submitted
 * @prop {ValidityState} validity - Returns a {@link https://developer.mozilla.org/en-US/docs/Web/API/ValidityState | ValidityState} object that represents the validity states of an element
 * @prop {string} validationMessage - Returns the error message that would be displayed if the element was to be checked for validity
 *
 * @event {CustomEvent} change - Event fired when file has been uploaded by the user
 */
class ZuiInputFile extends ZuiFormAssociatedElement {
  constructor() {
    super(...arguments);
    /**
     * Text for button portion of component
     */
    this.buttonText = '';
    /**
     * Acceptable file types, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept
     */
    this.accept = '';
    /**
     * Placeholder or ghost text on initial load
     */
    this.placeholder = '';
    /**
     * Determines whether this form control is required
     */
    this.required = false;
    /**
     * Set to `true` if hiding the `upload` icon is preferred
     */
    this.noIcon = false;
    this.#dragAndDropEventsList = ['dragenter', 'dragover', 'dragleave', 'drop'];
  }
  // Start FACE related
  get _focusControlSelector() {
    return 'input';
  }
  get _formValue() {
    const input = this._hiddenInput;
    return input?.files;
  }
  formResetCallback() {
    this.reset();
  }
  // End FACE related
  static get styles() {
    return [super.styles, style$y];
  }
  /**
   * A `get` accessor for retrieving files, after they're uploaded
   */
  get files() {
    return this.#files;
  }
  #files;
  get #formValueFirstFile() {
    return this._formValue?.[0];
  }
  connectedCallback() {
    super.connectedCallback();
    for (const eventName of this.#dragAndDropEventsList) {
      this.addEventListener(eventName, this.#handleDragAndDropEvent, false);
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    for (const event in this.#dragAndDropEventsList) {
      this.removeEventListener(event, this.#handleDragAndDropEvent);
    }
  }
  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    this.#files = this._hiddenInput.files;
    this._setFormValue(this._formValue);
  }
  updated(changedProps) {
    super.updated(changedProps);
    this.#setValidity();
  }
  render() {
    const classes = {
      'value-text-color': this.#formValueFirstFile?.name ? true : false
    };
    return html`
      <div
        tabindex="${this.disabled ? '-1' : '0'}"
        class="container ${classMap({
      'no-icon': this.noIcon,
      disabled: this.disabled
    })}"
        @click="${this.#clickHiddenInput}"
        @keyup="${this.#handleKeyEvent}"
      >
        <div class="button ${classMap({
      disabled: this.disabled
    })}">
          <zui-icon class="small" icon="zui-upload"></zui-icon>
          <span class="button-text">${this.buttonText}</span>
        </div>
        <input
          class="hidden"
          tabindex="-1"
          type="file"
          accept="${this.accept}"
          placeholder="${this.placeholder}"
          @change="${this.#onChange}"
          ?required="${this.required}"
          ?disabled="${this.disabled}"
        />
        <div class="faux-input ${classMap({
      disabled: this.disabled
    })}">
          ${this.#determineFauxInputText() ? html` <span class="${classMap(classes)}">${this.#determineFauxInputText()}</span> ` : html``}
        </div>
      </div>
    `;
  }
  /**
   * Resets the form value
   */
  reset() {
    this._hiddenInput.value = '';
    this.#files = this._hiddenInput.files;
    this._setFormValue(null);
    this.requestUpdate();
  }
  #determineFauxInputText() {
    return this.#formValueFirstFile?.name ?? this.placeholder;
  }
  #clickHiddenInput() {
    this._hiddenInput.click();
  }
  #handleKeyEvent(event) {
    if (event.code === 'Enter' || event.code === 'Space') {
      this.#clickHiddenInput();
    }
  }
  #onChange(e) {
    this.#files = e.target.files;
    this.#addFile();
    this.requestUpdate();
  }
  #addFile() {
    // this._setFormValue is a FACE method
    this._setFormValue(this._formValue);
    const payload = new FileChangeEventDetailShim(this.#files);
    this.dispatchEvent(new CustomEvent('change', {
      detail: payload,
      bubbles: true
    }));
  }
  #dragAndDropEventsList;
  #handleDragAndDropEvent(e) {
    if (this.disabled) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      this._containerEl?.classList.add('has-file-dragover');
    } else {
      this._containerEl?.classList.remove('has-file-dragover');
      if (e.type === 'drop') {
        const dt = e.dataTransfer;
        const files = dt.files;
        if (files.length > 1) {
          return;
        }
        this.#files = files;
        this._hiddenInput.files = files;
        this.#addFile();
        this.requestUpdate();
      }
    }
  }
  #setValidity() {
    const input = this._hiddenInput;
    if (!input) {
      return;
    }
    const inputValidity = input.validity;
    const validity = {
      valueMissing: inputValidity.valueMissing,
      customError: this.validity.customError
    };
    let message = '';
    if (validity.customError) {
      message = this.validationMessage;
    } else {
      message = this._mapValidationMessage(input.validationMessage, validity, VALIDATION_MESSAGE_MAP);
    }
    this._setValidity(validity, message);
  }
}
__decorate$v([query('input')], ZuiInputFile.prototype, "_hiddenInput", void 0);
__decorate$v([query('.container')], ZuiInputFile.prototype, "_containerEl", void 0);
__decorate$v([property({
  type: String,
  attribute: 'button-text'
})], ZuiInputFile.prototype, "buttonText", void 0);
__decorate$v([property({
  type: String,
  attribute: 'accept'
})], ZuiInputFile.prototype, "accept", void 0);
__decorate$v([property({
  type: String,
  attribute: 'placeholder'
})], ZuiInputFile.prototype, "placeholder", void 0);
__decorate$v([property({
  type: Boolean
})], ZuiInputFile.prototype, "required", void 0);
__decorate$v([property({
  type: Boolean,
  attribute: 'no-icon'
})], ZuiInputFile.prototype, "noIcon", void 0);
window.customElements.define('zui-input-file', ZuiInputFile);
// this class and its inheritance structure exists purely as backwards compatibility for those relying on the details property directly being a File
class FileChangeEventDetailShim extends File {
  constructor(files) {
    const file = files[0];
    super([file], file.name, {
      type: file.type,
      lastModified: file.lastModified
    });
    this.files = files;
  }
}

const svgSprite = `<svg role="img"><defs><symbol id="zycon-circle" aria-labelledby="zycon-circle-title" viewBox="0 0 50 50"><title id="zycon-circle-title">Zywave, Inc.</title><circle cx="24.98" cy="25" r="24" fill="var(--zui-logo-primary-color, var(--zui-green, #5FB53B))"/><polygon points="15.56 28.97 25.08 14.34 13.54 14.34 12.65 16.29 21.47 16.29 11.96 30.92 25.07 30.92 25.95 28.97 15.56 28.97" fill="var(--zui-logo-tertiary-color, white)"/><polygon points="32.23 14.33 27.96 14.33 32.77 25 27.96 35.67 32.23 35.67 37.07 25 32.23 14.33" fill="var(--zui-logo-tertiary-color, white)"/></symbol><symbol id="zycon" aria-labelledby="zycon-title" viewBox="0 0 300 300"><title id="zycon-title">Zywave, Inc.</title><rect width="300" height="300" fill="var(--zui-logo-primary-color, var(--zui-green, #5FB53B))"/><path d="M228.2,52.39H180.73l44,97.61-44,97.62H228.2L272.46,150Zm-69,.06H47l-12,26.35h75.51L27.54,206.27H153.43l11.92-26.36H76.26Z" fill="var(--zui-logo-tertiary-color, white)"/></symbol><symbol id="zywave" aria-labelledby="zywave-title" viewBox="0 0 600 160.3"><title id="zywave-title">Zywave, Inc.</title><polygon fill="var(--zui-logo-primary-color, var(--zui-green, #5FB53B))" points="124.8,29 98.5,29 128.1,94.7 98.5,160.3 124.8,160.3 154.6,94.7 "/><polygon fill="var(--zui-logo-secondary-color, #0F2D52)" points="505,29 472,102 438.9,29 425.7,29 472,131.3 518.3,29 "/><path fill="var(--zui-logo-secondary-color, #0F2D52)" d="M411.9,131.3h13.3L379,29h-5.1l-46.2,102.3H341l10.1-22.6h50.7L411.9,131.3z M356.5,96.7l19.9-43.9 l19.9,43.9H356.5z"/><polygon fill="var(--zui-logo-secondary-color, #0F2D52)" points="553.5,84.2 590.3,84.2 590.3,72.2 553.5,72.2 553.5,41 593.5,41 599.9,29 541.4,29 541.4,131.3 593.6,131.3 600,119 553.5,119 "/><polygon fill="var(--zui-logo-secondary-color, #0F2D52)" points="316.1,29 283.3,102 254,37.9 224.9,102 193.2,29 173.5,29 155.8,68.1 162.4,82.7 182.7,37.9 224.9,131.3 254,67.1 283.3,131.3 329.3,29 "/><polygon fill="var(--zui-logo-secondary-color, #0F2D52)" points="22.2,119.1 80.8,29 9.8,29 4.3,41 58.6,41 0,131.1 80.7,131.1 86.1,119.1 "/></symbol><symbol id="zywave-tagline" aria-labelledby="zywave-tagline-title" viewBox="0 0 600 166.7"><title id="zywave-tagline-title">Zywave, Inc.</title><polygon fill="var(--zui-logo-primary-color, var(--zui-green, #5FB53B))" points="124.8,0 98.5,0 128.1,65.7 98.5,131.3 124.8,131.3 154.6,65.7 "/><polygon fill="var(--zui-logo-secondary-color, #0F2D52)" points="505,0 472,73 438.9,0 425.7,0 472,102.3 518.3,0 "/><path fill="var(--zui-logo-secondary-color, #0F2D52)" d="M411.9,102.3h13.3L379,0h-5.1l-46.2,102.3H341l10.1-22.6h50.7L411.9,102.3z M356.5,67.7l19.9-43.9l19.9,43.9H356.5z"/><polygon fill="var(--zui-logo-secondary-color, #0F2D52)" points="553.5,55.2 590.3,55.2 590.3,43.2 553.5,43.2 553.5,12 593.5,12 599.9,0 541.4,0 541.4,102.3 593.6,102.3 600,90 553.5,90 "/><polygon fill="var(--zui-logo-secondary-color, #0F2D52)" points="316.1,0 283.3,73 254,8.9 224.9,73 193.2,0 173.5,0 155.8,39.1 162.4,53.7 182.7,8.9 224.9,102.3 254,38.1 283.3,102.3 329.3,0 "/><polygon fill="var(--zui-logo-secondary-color, #0F2D52)" points="22.2,90.1 80.8,0 9.8,0 4.3,12 58.6,12 0,102.1 80.7,102.1 86.1,90.1 "/><path fill="var(--zui-logo-secondary-color, #0F2D52)" d="M222.6,166.3v-21h2.9v21H222.6z"/><path fill="var(--zui-logo-secondary-color, #0F2D52)" d="M252.5,166.3L241,150.7v15.6h-2.9v-21h2.5l11.5,15.6v-15.6h2.9v21H252.5z"/><path fill="var(--zui-logo-secondary-color, #0F2D52)" d="M273.9,147.6c-2.2,0-3.7,1-3.7,2.9c0,1.8,2.1,2.5,4.4,3.3c3,1,6.3,2.4,6.3,6.3c0,4.7-4.2,6.5-7.4,6.5c-3.1,0-5.4-1-7.6-3.1l2-1.9c2,1.9,3.5,2.5,5.6,2.5c2.2,0,4.3-1,4.3-3.6c0-2.3-2.2-3.1-4.7-4c-2.8-1-5.9-2.4-5.9-5.7c0-4,2.9-5.8,6.3-5.8c2.5,0,4.6,0.7,6.5,2.2l-1.8,2.1C277.3,148.3,275.5,147.6,273.9,147.6z"/><path fill="var(--zui-logo-secondary-color, #0F2D52)" d="M308.9,156.5c0,6.6-2.4,10.2-8.2,10.2c-5.6,0-8.1-3.6-8.1-10.2v-11.1h2.9v11.9c0,4.6,2,6.9,5.2,6.9s5.2-2.2,5.2-6.9v-11.9h2.9V156.5z"/><path fill="var(--zui-logo-secondary-color, #0F2D52)" d="M333,166.3l-6.3-8.9h-2.2v8.9h-2.9v-21h6.2c3.2,0,7.2,1.7,7.2,6c0,3.6-2.5,5.4-5.1,5.9l6.6,9H333zM327.7,148h-3.2v6.9h2.6c2.8,0,4.8-1,4.8-3.4C332,149.4,330.3,148,327.7,148z"/><path fill="var(--zui-logo-secondary-color, #0F2D52)" d="M347.2,166.3v-21h2.9v21H347.2z"/><path fill="var(--zui-logo-secondary-color, #0F2D52)" d="M377.3,166.3l-11.5-15.6v15.6h-2.9v-21h2.5L377,161v-15.6h2.9v21H377.3z"/><path fill="var(--zui-logo-secondary-color, #0F2D52)" d="M403,157.3v-2.6h8.2v8c-2,2.5-5.1,4-8.6,4c-6.4,0-11.3-4.3-11.3-10.8c0-6.2,5.1-10.8,11.3-10.8c3.2,0,6.1,1.4,8.1,3.7l-2,1.7c-1.5-1.6-3.7-2.8-6.1-2.8c-4.7,0-8.2,3.5-8.2,8.3c0,5.1,3.4,8.3,8.2,8.3c2.2,0,4.3-0.8,5.7-2.2v-4.6H403z"/><path fill="var(--zui-logo-secondary-color, #0F2D52)" d="M448.3,157.3v-2.6h8.2v8c-2,2.5-5.1,4-8.6,4c-6.4,0-11.3-4.3-11.3-10.8c0-6.2,5.1-10.8,11.3-10.8c3.2,0,6.1,1.4,8.1,3.7l-2,1.7c-1.5-1.6-3.7-2.8-6.1-2.8c-4.7,0-8.2,3.5-8.2,8.3c0,5.1,3.4,8.3,8.2,8.3c2.2,0,4.3-0.8,5.7-2.2v-4.6H448.3z"/><path fill="var(--zui-logo-secondary-color, #0F2D52)" d="M480.1,166.3l-6.3-8.9h-2.2v8.9h-2.9v-21h6.2c3.2,0,7.2,1.7,7.2,6c0,3.6-2.5,5.4-5.1,5.9l6.6,9H480.1z M474.8,148h-3.2v6.9h2.6c2.8,0,4.9-1,4.9-3.4C479.1,149.4,477.4,148,474.8,148z"/><path fill="var(--zui-logo-secondary-color, #0F2D52)" d="M504.5,166.7c-6.1,0-10.8-4.9-10.8-10.8s4.7-10.8,10.8-10.8c6.1,0,10.8,4.8,10.8,10.8S510.6,166.7,504.5,166.7z M504.5,147.6c-4.5,0-7.7,3.6-7.7,8.3c0,4.6,3.3,8.3,7.7,8.3c4.5,0,7.7-3.6,7.7-8.3C512.2,151.2,508.9,147.6,504.5,147.6z"/><path fill="var(--zui-logo-secondary-color, #0F2D52)" d="M542.6,161.2L542.6,161.2l4.5-15.8h3.1l-6,21h-2.9l-4.2-16H537l-4.6,16h-2.8l-5.7-21h3.2l4.2,15.8h0.1l4.4-15.8h2.7L542.6,161.2z"/><path fill="var(--zui-logo-secondary-color, #0F2D52)" d="M566.2,148v18.4h-2.9V148H558v-2.6h13.4v2.6H566.2z"/><path fill="var(--zui-logo-secondary-color, #0F2D52)" d="M595,166.3v-9.5h-11.1v9.5H581v-21h2.9v8.9H595v-8.9h2.9v21H595z"/></symbol></defs></svg>`;

const $_logosContainer = document.createElement('div');
$_logosContainer.style.display = 'none';
$_logosContainer.innerHTML = svgSprite;
document.head.appendChild($_logosContainer);

const style$x = css`:host{--zui-svg-width: inherit;--zui-svg-height: inherit;--zui-logo-primary-color: var(--zui-zywave, var(--zui-green));--zui-logo-secondary-color: #0f2d52;--zui-logo-tertiary-color: #fff;display:block}:host zui-svg{display:block}:host(.grayscale){--zui-logo-primary-color: var(--zui-gray, #78788c);--zui-logo-secondary-color: var(--zui-gray, #78788c);--zui-logo-tertiary-color: var(--zui-gray, #78788c);fill:var(--zui-gray, #78788c)}:host(.black){--zui-logo-primary-color: #000;--zui-logo-secondary-color: #000;--zui-logo-tertiary-color: #000;fill:#000}:host(.white){--zui-logo-primary-color: #fff;--zui-logo-secondary-color: #fff;--zui-logo-tertiary-color: #fff;fill:#fff}:host([type=zycon]),:host([type=zycon-circle]){--zui-svg-width: 50px;--zui-svg-height: 50px}:host([type=zycon].grayscale),:host([type=zycon].black),:host([type=zycon-circle].grayscale),:host([type=zycon-circle].black){--zui-logo-tertiary-color: #fff}::slotted(img){width:var(--zui-logo-width, auto);height:var(--zui-logo-height, auto)}`;

var __decorate$u = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * `<zui-logo>` allows for easy standardized use of our Zywave logos, and supports third-party logos if slotted in.
 *
 * @element zui-logo
 *
 * @slot - Default, unnamed slot; only use for inserting in a third-party logo into `<zui-logo>` to override the default Zywave logo options
 *
 * @cssprop [--zui-logo-primary-color=var(--zui-zywave, var(--zui-green))] - Logo primary colorization
 * @cssprop [--zui-logo-secondary-color=#8d8d8e] - Logo secondary colorization
 * @cssprop [--zui-logo-tertiary-color=#fff] - Logo tertiary colorization
 * @cssprop [--zui-logo-width=auto] - (slotted `<img>` elements): If neceessary, `<img>` width control
 * @cssprop [--zui-logo-height=auto] - (slotted `<img>` elements): If neceessary, `<img>` height control
 */
class ZuiLogo extends ZuiBaseElement {
  constructor() {
    super(...arguments);
    /**
     * If using a Zywave logo, specify which type, if no type is specified it defaults to `logo` which should be used for third party logos
     * @type { 'tagline' | 'zycon' | 'zycon-circle' | 'logo' }
     */
    this.type = 'logo';
  }
  static get styles() {
    return [super.styles, style$x];
  }
  render() {
    return html` <slot> <zui-svg svg-id="${this.computeLogo(this.type)}"></zui-svg> </slot> `;
  }
  computeLogo(type) {
    let logo = undefined;
    switch (type) {
      case 'tagline':
        logo = 'zywave-tagline';
        break;
      case 'zycon':
        logo = 'zycon';
        break;
      case 'zycon-circle':
        logo = 'zycon-circle';
        break;
      default:
        logo = 'zywave';
    }
    return logo;
  }
}
__decorate$u([property({
  type: String,
  attribute: 'type'
})], ZuiLogo.prototype, "type", void 0);
window.customElements.define('zui-logo', ZuiLogo);

const style$w = css`:host{display:block}:host .search,:host .multipicker{width:100%}:host .search{height:2.625rem}:host .multipicker{display:flex;height:100%;flex-direction:column;align-items:stretch}@media(min-width: 45em){:host .multipicker{flex-direction:row}}:host .left,:host .right{display:flex;flex-direction:column}:host .left{flex:2}@media(min-width: 45em){:host .left{margin-right:1.25rem}}:host .right{flex:1}@media(min-width: 45em){:host .right{margin-top:0}}:host .pager{display:flex}:host .pager-slot{flex:2}@media(min-width: 45em){:host .pager-slot{margin-right:1.25rem}}:host .pager-whitespace{display:none;flex:1}@media(min-width: 45em){:host .pager-whitespace{display:block}}:host .info-row{display:flex;align-items:center;padding-top:.375rem;padding-bottom:.375rem;border-bottom:2px solid var(--zui-gray-100)}:host .info-row .results{display:flex;flex-direction:row;align-items:center;color:var(--zui-gray)}:host .info-row .bulk-add{margin-left:auto}:host .info-row .bulk-remove{margin-left:auto}:host .item-container{flex:1;overflow-y:auto;border-bottom:2px solid var(--zui-gray-100)}:host .item-container-selected{flex:1;overflow-y:auto;border-bottom:2px solid var(--zui-gray-100)}`;

const style$v = css`:host{display:inline-flex;height:50px;justify-content:center;align-content:center;margin:5px 0;padding:.25em;box-sizing:border-box}:host .pages{display:flex;max-height:42px;justify-content:space-between;align-items:center;margin-right:1em;font-size:1em;color:#000}:host .pager-button{display:flex;min-width:3em;height:100%;justify-content:center;align-items:center;background:rgba(0,0,0,0);border:0;outline:none;font:inherit;text-align:center;cursor:pointer;transition:background 100ms ease-in-out}:host .pager-button:active,:host .pager-button:focus{background-color:var(--zui-gray-50)}:host .pager-button:hover{background:var(--zui-gray-100);box-shadow:inset 0 -3px 0 0 var(--zui-gray);transition:background 100ms ease-in-out;transition:box-shadow 100ms ease-in-out}:host .pager-button.back{border-radius:30px 0 0 30px;box-shadow:none}:host .pager-button.forward{border-radius:0 30px 30px 0}:host .pager-button.back:hover,:host .pager-button.forward:hover{box-shadow:none}:host .pager-button.current{box-shadow:inset 0 -3px 0 0 var(--zui-pager-color, #000);font-weight:600;color:var(--zui-pager-color, #000)}:host .pager-button.current:hover{background:var(--zui-gray-100);box-shadow:inset 0 -3px 0 0 var(--zui-pager-color, #000);transition:background 100ms ease-in-out}:host a.pager-button{color:#000;text-decoration:none}:host a.pager-button.disabled:not(.current),:host button.pager-button:disabled:not(.current){background:rgba(0,0,0,0);box-shadow:none;cursor:not-allowed;color:var(--zui-gray)}:host .input{display:none;width:100%;max-width:4rem;min-width:3.5rem;height:40px;vertical-align:middle;margin:0;padding:0 10px;border:1px solid var(--zui-gray-200);border-radius:2px;font-size:14px;text-align:center;color:#000;transition:border-color 125ms ease-out}@media screen and (min-width: 45em){:host .input{display:inline-block}}:host .select-container{position:relative;align-content:stretch;padding:.25em .25em 0}:host .select-container .select-overlay{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer;color:#000}:host .select-container .select-overlay:focus+div{background:#d3d3d3}:host .select-container .select-mock,:host .select-container .select-overlay{align-content:stretch}:host .select-container .select-mock{display:flex;min-width:4em;align-items:center;padding:.75em;box-shadow:inset 0 -3px 0 0 var(--zui-pager-color, #000);color:var(--zui-gray)}:host .select-container .select-mock .current{font-weight:bold;color:var(--zui-pager-color, #000)}:host .select-container .select-mock zui-icon{position:relative;margin-left:10px;cursor:default;pointer-events:none}:host .select-container .of{padding:0 .25em}`;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const {
  _ChildPart: ChildPart
} = _$LH;
const wrap = window.ShadyDOM?.inUse && window.ShadyDOM?.noPatch === true ? window.ShadyDOM.wrap : node => node;
/**
 * Tests if a value is a TemplateResult or a CompiledTemplateResult.
 */
const isTemplateResult = (value, type) => type === undefined ?
// This property needs to remain unminified.
value?.['_$litType$'] !== undefined : value?.['_$litType$'] === type;
/**
 * Tests if a value is a CompiledTemplateResult.
 */
const isCompiledTemplateResult = value => {
  return value?.['_$litType$']?.h != null;
};
const createMarker = () => document.createComment('');
/**
 * Inserts a ChildPart into the given container ChildPart's DOM, either at the
 * end of the container ChildPart, or before the optional `refPart`.
 *
 * This does not add the part to the containerPart's committed value. That must
 * be done by callers.
 *
 * @param containerPart Part within which to add the new ChildPart
 * @param refPart Part before which to add the new ChildPart; when omitted the
 *     part added to the end of the `containerPart`
 * @param part Part to insert, or undefined to create a new part
 */
const insertPart = (containerPart, refPart, part) => {
  const container = wrap(containerPart._$startNode).parentNode;
  const refNode = refPart === undefined ? containerPart._$endNode : refPart._$startNode;
  if (part === undefined) {
    const startNode = wrap(container).insertBefore(createMarker(), refNode);
    const endNode = wrap(container).insertBefore(createMarker(), refNode);
    part = new ChildPart(startNode, endNode, containerPart, containerPart.options);
  } else {
    const endNode = wrap(part._$endNode).nextSibling;
    const oldParent = part._$parent;
    const parentChanged = oldParent !== containerPart;
    if (parentChanged) {
      part._$reparentDisconnectables?.(containerPart);
      // Note that although `_$reparentDisconnectables` updates the part's
      // `_$parent` reference after unlinking from its current parent, that
      // method only exists if Disconnectables are present, so we need to
      // unconditionally set it here
      part._$parent = containerPart;
      // Since the _$isConnected getter is somewhat costly, only
      // read it once we know the subtree has directives that need
      // to be notified
      let newConnectionState;
      if (part._$notifyConnectionChanged !== undefined && (newConnectionState = containerPart._$isConnected) !== oldParent._$isConnected) {
        part._$notifyConnectionChanged(newConnectionState);
      }
    }
    if (endNode !== refNode || parentChanged) {
      let start = part._$startNode;
      while (start !== endNode) {
        const n = wrap(start).nextSibling;
        wrap(container).insertBefore(start, refNode);
        start = n;
      }
    }
  }
  return part;
};
/**
 * Sets the value of a Part.
 *
 * Note that this should only be used to set/update the value of user-created
 * parts (i.e. those created using `insertPart`); it should not be used
 * by directives to set the value of the directive's container part. Directives
 * should return a value from `update`/`render` to update their part state.
 *
 * For directives that require setting their part value asynchronously, they
 * should extend `AsyncDirective` and call `this.setValue()`.
 *
 * @param part Part to set
 * @param value Value to set
 * @param index For `AttributePart`s, the index to set
 * @param directiveParent Used internally; should not be set by user
 */
const setChildPartValue = (part, value, directiveParent = part) => {
  part._$setValue(value, directiveParent);
  return part;
};
// A sentinel value that can never appear as a part value except when set by
// live(). Used to force a dirty-check to fail and cause a re-render.
const RESET_VALUE = {};
/**
 * Sets the committed value of a ChildPart directly without triggering the
 * commit stage of the part.
 *
 * This is useful in cases where a directive needs to update the part such
 * that the next update detects a value change or not. When value is omitted,
 * the next update will be guaranteed to be detected as a change.
 *
 * @param part
 * @param value
 */
const setCommittedValue = (part, value = RESET_VALUE) => part._$committedValue = value;
/**
 * Returns the committed value of a ChildPart.
 *
 * The committed value is used for change detection and efficient updates of
 * the part. It can differ from the value set by the template or directive in
 * cases where the template value is transformed before being committed.
 *
 * - `TemplateResult`s are committed as a `TemplateInstance`
 * - Iterables are committed as `Array<ChildPart>`
 * - All other types are committed as the template value or value returned or
 *   set by a directive.
 *
 * @param part
 */
const getCommittedValue = part => part._$committedValue;
/**
 * Removes a ChildPart from the DOM, including any of its content.
 *
 * @param part The Part to remove
 */
const removePart = part => {
  part._$notifyConnectionChanged?.(false, true);
  let start = part._$startNode;
  const end = wrap(part._$endNode).nextSibling;
  while (start !== end) {
    const n = wrap(start).nextSibling;
    wrap(start).remove();
    start = n;
  }
};
const clearPart = part => {
  part._$clear();
};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
// Helper for generating a map of array item to its index over a subset
// of an array (used to lazily generate `newKeyToIndexMap` and
// `oldKeyToIndexMap`)
const generateMap = (list, start, end) => {
  const map = new Map();
  for (let i = start; i <= end; i++) {
    map.set(list[i], i);
  }
  return map;
};
class RepeatDirective extends Directive {
  constructor(partInfo) {
    super(partInfo);
    if (partInfo.type !== PartType.CHILD) {
      throw new Error('repeat() can only be used in text expressions');
    }
  }
  _getValuesAndKeys(items, keyFnOrTemplate, template) {
    let keyFn;
    if (template === undefined) {
      template = keyFnOrTemplate;
    } else if (keyFnOrTemplate !== undefined) {
      keyFn = keyFnOrTemplate;
    }
    const keys = [];
    const values = [];
    let index = 0;
    for (const item of items) {
      keys[index] = keyFn ? keyFn(item, index) : index;
      values[index] = template(item, index);
      index++;
    }
    return {
      values,
      keys
    };
  }
  render(items, keyFnOrTemplate, template) {
    return this._getValuesAndKeys(items, keyFnOrTemplate, template).values;
  }
  update(containerPart, [items, keyFnOrTemplate, template]) {
    // Old part & key lists are retrieved from the last update (which may
    // be primed by hydration)
    const oldParts = getCommittedValue(containerPart);
    const {
      values: newValues,
      keys: newKeys
    } = this._getValuesAndKeys(items, keyFnOrTemplate, template);
    // We check that oldParts, the committed value, is an Array as an
    // indicator that the previous value came from a repeat() call. If
    // oldParts is not an Array then this is the first render and we return
    // an array for lit-html's array handling to render, and remember the
    // keys.
    if (!Array.isArray(oldParts)) {
      this._itemKeys = newKeys;
      return newValues;
    }
    // In SSR hydration it's possible for oldParts to be an array but for us
    // to not have item keys because the update() hasn't run yet. We set the
    // keys to an empty array. This will cause all oldKey/newKey comparisons
    // to fail and execution to fall to the last nested brach below which
    // reuses the oldPart.
    const oldKeys = this._itemKeys ??= [];
    // New part list will be built up as we go (either reused from
    // old parts or created for new keys in this update). This is
    // saved in the above cache at the end of the update.
    const newParts = [];
    // Maps from key to index for current and previous update; these
    // are generated lazily only when needed as a performance
    // optimization, since they are only required for multiple
    // non-contiguous changes in the list, which are less common.
    let newKeyToIndexMap;
    let oldKeyToIndexMap;
    // Head and tail pointers to old parts and new values
    let oldHead = 0;
    let oldTail = oldParts.length - 1;
    let newHead = 0;
    let newTail = newValues.length - 1;
    // Overview of O(n) reconciliation algorithm (general approach
    // based on ideas found in ivi, vue, snabbdom, etc.):
    //
    // * We start with the list of old parts and new values (and
    //   arrays of their respective keys), head/tail pointers into
    //   each, and we build up the new list of parts by updating
    //   (and when needed, moving) old parts or creating new ones.
    //   The initial scenario might look like this (for brevity of
    //   the diagrams, the numbers in the array reflect keys
    //   associated with the old parts or new values, although keys
    //   and parts/values are actually stored in parallel arrays
    //   indexed using the same head/tail pointers):
    //
    //      oldHead v                 v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [ ,  ,  ,  ,  ,  ,  ]
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6] <- reflects the user's new
    //                                      item order
    //      newHead ^                 ^ newTail
    //
    // * Iterate old & new lists from both sides, updating,
    //   swapping, or removing parts at the head/tail locations
    //   until neither head nor tail can move.
    //
    // * Example below: keys at head pointers match, so update old
    //   part 0 in-place (no need to move it) and record part 0 in
    //   the `newParts` list. The last thing we do is advance the
    //   `oldHead` and `newHead` pointers (will be reflected in the
    //   next diagram).
    //
    //      oldHead v                 v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [0,  ,  ,  ,  ,  ,  ] <- heads matched: update 0
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldHead
    //                                      & newHead
    //      newHead ^                 ^ newTail
    //
    // * Example below: head pointers don't match, but tail
    //   pointers do, so update part 6 in place (no need to move
    //   it), and record part 6 in the `newParts` list. Last,
    //   advance the `oldTail` and `oldHead` pointers.
    //
    //         oldHead v              v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [0,  ,  ,  ,  ,  , 6] <- tails matched: update 6
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldTail
    //                                      & newTail
    //         newHead ^              ^ newTail
    //
    // * If neither head nor tail match; next check if one of the
    //   old head/tail items was removed. We first need to generate
    //   the reverse map of new keys to index (`newKeyToIndexMap`),
    //   which is done once lazily as a performance optimization,
    //   since we only hit this case if multiple non-contiguous
    //   changes were made. Note that for contiguous removal
    //   anywhere in the list, the head and tails would advance
    //   from either end and pass each other before we get to this
    //   case and removals would be handled in the final while loop
    //   without needing to generate the map.
    //
    // * Example below: The key at `oldTail` was removed (no longer
    //   in the `newKeyToIndexMap`), so remove that part from the
    //   DOM and advance just the `oldTail` pointer.
    //
    //         oldHead v           v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [0,  ,  ,  ,  ,  , 6] <- 5 not in new map: remove
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    5 and advance oldTail
    //         newHead ^           ^ newTail
    //
    // * Once head and tail cannot move, any mismatches are due to
    //   either new or moved items; if a new key is in the previous
    //   "old key to old index" map, move the old part to the new
    //   location, otherwise create and insert a new part. Note
    //   that when moving an old part we null its position in the
    //   oldParts array if it lies between the head and tail so we
    //   know to skip it when the pointers get there.
    //
    // * Example below: neither head nor tail match, and neither
    //   were removed; so find the `newHead` key in the
    //   `oldKeyToIndexMap`, and move that old part's DOM into the
    //   next head position (before `oldParts[oldHead]`). Last,
    //   null the part in the `oldPart` array since it was
    //   somewhere in the remaining oldParts still to be scanned
    //   (between the head and tail pointers) so that we know to
    //   skip that old part on future iterations.
    //
    //         oldHead v        v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2,  ,  ,  ,  , 6] <- stuck: update & move 2
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    into place and advance
    //                                      newHead
    //         newHead ^           ^ newTail
    //
    // * Note that for moves/insertions like the one above, a part
    //   inserted at the head pointer is inserted before the
    //   current `oldParts[oldHead]`, and a part inserted at the
    //   tail pointer is inserted before `newParts[newTail+1]`. The
    //   seeming asymmetry lies in the fact that new parts are
    //   moved into place outside in, so to the right of the head
    //   pointer are old parts, and to the right of the tail
    //   pointer are new parts.
    //
    // * We always restart back from the top of the algorithm,
    //   allowing matching and simple updates in place to
    //   continue...
    //
    // * Example below: the head pointers once again match, so
    //   simply update part 1 and record it in the `newParts`
    //   array.  Last, advance both head pointers.
    //
    //         oldHead v        v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1,  ,  ,  , 6] <- heads matched: update 1
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldHead
    //                                      & newHead
    //            newHead ^        ^ newTail
    //
    // * As mentioned above, items that were moved as a result of
    //   being stuck (the final else clause in the code below) are
    //   marked with null, so we always advance old pointers over
    //   these so we're comparing the next actual old value on
    //   either end.
    //
    // * Example below: `oldHead` is null (already placed in
    //   newParts), so advance `oldHead`.
    //
    //            oldHead v     v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6] <- old head already used:
    //   newParts: [0, 2, 1,  ,  ,  , 6]    advance oldHead
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]
    //               newHead ^     ^ newTail
    //
    // * Note it's not critical to mark old parts as null when they
    //   are moved from head to tail or tail to head, since they
    //   will be outside the pointer range and never visited again.
    //
    // * Example below: Here the old tail key matches the new head
    //   key, so the part at the `oldTail` position and move its
    //   DOM to the new head position (before `oldParts[oldHead]`).
    //   Last, advance `oldTail` and `newHead` pointers.
    //
    //               oldHead v  v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1, 4,  ,  , 6] <- old tail matches new
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]   head: update & move 4,
    //                                     advance oldTail & newHead
    //               newHead ^     ^ newTail
    //
    // * Example below: Old and new head keys match, so update the
    //   old head part in place, and advance the `oldHead` and
    //   `newHead` pointers.
    //
    //               oldHead v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1, 4, 3,   ,6] <- heads match: update 3
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance oldHead &
    //                                      newHead
    //                  newHead ^  ^ newTail
    //
    // * Once the new or old pointers move past each other then all
    //   we have left is additions (if old list exhausted) or
    //   removals (if new list exhausted). Those are handled in the
    //   final while loops at the end.
    //
    // * Example below: `oldHead` exceeded `oldTail`, so we're done
    //   with the main loop.  Create the remaining part and insert
    //   it at the new head position, and the update is complete.
    //
    //                   (oldHead > oldTail)
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1, 4, 3, 7 ,6] <- create and insert 7
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]
    //                     newHead ^ newTail
    //
    // * Note that the order of the if/else clauses is not
    //   important to the algorithm, as long as the null checks
    //   come first (to ensure we're always working on valid old
    //   parts) and that the final else clause comes last (since
    //   that's where the expensive moves occur). The order of
    //   remaining clauses is just a simple guess at which cases
    //   will be most common.
    //
    // * Note, we could calculate the longest
    //   increasing subsequence (LIS) of old items in new position,
    //   and only move those not in the LIS set. However that costs
    //   O(nlogn) time and adds a bit more code, and only helps
    //   make rare types of mutations require fewer moves. The
    //   above handles removes, adds, reversal, swaps, and single
    //   moves of contiguous items in linear time, in the minimum
    //   number of moves. As the number of multiple moves where LIS
    //   might help approaches a random shuffle, the LIS
    //   optimization becomes less helpful, so it seems not worth
    //   the code at this point. Could reconsider if a compelling
    //   case arises.
    while (oldHead <= oldTail && newHead <= newTail) {
      if (oldParts[oldHead] === null) {
        // `null` means old part at head has already been used
        // below; skip
        oldHead++;
      } else if (oldParts[oldTail] === null) {
        // `null` means old part at tail has already been used
        // below; skip
        oldTail--;
      } else if (oldKeys[oldHead] === newKeys[newHead]) {
        // Old head matches new head; update in place
        newParts[newHead] = setChildPartValue(oldParts[oldHead], newValues[newHead]);
        oldHead++;
        newHead++;
      } else if (oldKeys[oldTail] === newKeys[newTail]) {
        // Old tail matches new tail; update in place
        newParts[newTail] = setChildPartValue(oldParts[oldTail], newValues[newTail]);
        oldTail--;
        newTail--;
      } else if (oldKeys[oldHead] === newKeys[newTail]) {
        // Old head matches new tail; update and move to new tail
        newParts[newTail] = setChildPartValue(oldParts[oldHead], newValues[newTail]);
        insertPart(containerPart, newParts[newTail + 1], oldParts[oldHead]);
        oldHead++;
        newTail--;
      } else if (oldKeys[oldTail] === newKeys[newHead]) {
        // Old tail matches new head; update and move to new head
        newParts[newHead] = setChildPartValue(oldParts[oldTail], newValues[newHead]);
        insertPart(containerPart, oldParts[oldHead], oldParts[oldTail]);
        oldTail--;
        newHead++;
      } else {
        if (newKeyToIndexMap === undefined) {
          // Lazily generate key-to-index maps, used for removals &
          // moves below
          newKeyToIndexMap = generateMap(newKeys, newHead, newTail);
          oldKeyToIndexMap = generateMap(oldKeys, oldHead, oldTail);
        }
        if (!newKeyToIndexMap.has(oldKeys[oldHead])) {
          // Old head is no longer in new list; remove
          removePart(oldParts[oldHead]);
          oldHead++;
        } else if (!newKeyToIndexMap.has(oldKeys[oldTail])) {
          // Old tail is no longer in new list; remove
          removePart(oldParts[oldTail]);
          oldTail--;
        } else {
          // Any mismatches at this point are due to additions or
          // moves; see if we have an old part we can reuse and move
          // into place
          const oldIndex = oldKeyToIndexMap.get(newKeys[newHead]);
          const oldPart = oldIndex !== undefined ? oldParts[oldIndex] : null;
          if (oldPart === null) {
            // No old part for this value; create a new one and
            // insert it
            const newPart = insertPart(containerPart, oldParts[oldHead]);
            setChildPartValue(newPart, newValues[newHead]);
            newParts[newHead] = newPart;
          } else {
            // Reuse old part
            newParts[newHead] = setChildPartValue(oldPart, newValues[newHead]);
            insertPart(containerPart, oldParts[oldHead], oldPart);
            // This marks the old part as having been used, so that
            // it will be skipped in the first two checks above
            oldParts[oldIndex] = null;
          }
          newHead++;
        }
      }
    }
    // Add parts for any remaining new values
    while (newHead <= newTail) {
      // For all remaining additions, we insert before last new
      // tail, since old pointers are no longer valid
      const newPart = insertPart(containerPart, newParts[newTail + 1]);
      setChildPartValue(newPart, newValues[newHead]);
      newParts[newHead++] = newPart;
    }
    // Remove any remaining unused old parts
    while (oldHead <= oldTail) {
      const oldPart = oldParts[oldHead++];
      if (oldPart !== null) {
        removePart(oldPart);
      }
    }
    // Save order of new parts for next round
    this._itemKeys = newKeys;
    // Directly set part value, bypassing it's dirty-checking
    setCommittedValue(containerPart, newParts);
    return noChange;
  }
}
/**
 * A directive that repeats a series of values (usually `TemplateResults`)
 * generated from an iterable, and updates those items efficiently when the
 * iterable changes based on user-provided `keys` associated with each item.
 *
 * Note that if a `keyFn` is provided, strict key-to-DOM mapping is maintained,
 * meaning previous DOM for a given key is moved into the new position if
 * needed, and DOM will never be reused with values for different keys (new DOM
 * will always be created for new keys). This is generally the most efficient
 * way to use `repeat` since it performs minimum unnecessary work for insertions
 * and removals.
 *
 * The `keyFn` takes two parameters, the item and its index, and returns a unique key value.
 *
 * ```js
 * html`
 *   <ol>
 *     ${repeat(this.items, (item) => item.id, (item, index) => {
 *       return html`<li>${index}: ${item.name}</li>`;
 *     })}
 *   </ol>
 * `
 * ```
 *
 * **Important**: If providing a `keyFn`, keys *must* be unique for all items in a
 * given call to `repeat`. The behavior when two or more items have the same key
 * is undefined.
 *
 * If no `keyFn` is provided, this directive will perform similar to mapping
 * items to values, and DOM will be reused against potentially different items.
 */
const repeat = directive(RepeatDirective);

var __decorate$t = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class PagerButton {
  constructor(text, disabled) {
    this.text = text;
    this.disabled = disabled;
  }
}
/**
 * Used to standardize pagination.
 *
 * @element zui-pager
 *
 * @event change - When there's a change on `<zui-pager>` raise this event with `currentPage` included as details
 *
 * @cssprop [--zui-pager-color=#000] - Used in several shadow DOM elements to theme `<zui-pager>` to a color
 */
class ZuiPager extends ZuiBaseElement {
  #shouldCalculateTotalPages;
  #isMobile;
  get _totalPages() {
    return this.#shouldCalculateTotalPages ? this._calculateTotalPages(this.pageSize, this.totalCount) : this.totalPages;
  }
  constructor() {
    super();
    /**
     * The total number of pages to display in the pager. Should NOT be specified if using `pageSize` / `page-size` and `totalCount` / `total-count`
     */
    this.totalPages = 1;
    /**
     * The currently selected page
     */
    this.currentPage = 1;
    /**
     * The type of pager
     * @type { 'standard' | 'lite' | 'select' }
     */
    this.type = 'standard';
    /**
     * (optional): to configure where a user will be navigated when changing pages (e.g. deeplinking to pages)
     */
    this.hrefFormat = undefined;
    /**
     * Provide an input where users can specify a page number to go to
     */
    this.hideInput = false;
    /**
     * The size of a page of results. MUST be used with `totalCount` / `total-count`. DO NOT use this with `totalPages` / `total-pages`.
     */
    this.pageSize = undefined;
    /**
     * The total number of results. MUST be used with `pageSize` / `page-size`. DO NOT use this with `totalPages` / `total-pages`.
     */
    this.totalCount = undefined;
    this.#shouldCalculateTotalPages = undefined;
    this.#isMobile = undefined;
    this.#shouldCalculateTotalPages = false;
    this._setupMediaQueryListener();
  }
  connectedCallback() {
    super.connectedCallback();
    const isNullOrUndefined = o => {
      return o === undefined || o === null;
    };
    if (!(isNullOrUndefined(this.pageSize) || isNullOrUndefined(this.totalCount))) {
      this.#shouldCalculateTotalPages = true;
    }
  }
  updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.get('currentPage')) {
      this.dispatchEvent(new CustomEvent('change', {
        bubbles: true,
        detail: {
          value: this.currentPage
        }
      }));
    }
  }
  static get styles() {
    return [super.styles, style$v];
  }
  render() {
    if (!this.currentPage) {
      return html``;
    }
    const backButton = html`
      ${this.hrefFormat ? html`
            <a
              class="pager-button back ${classMap({
      disabled: this.currentPage <= 1
    })}"
              href="${this.currentPage <= 1 ? '' : this._formatHref((+this.currentPage - 1).toString())}"
              @click="${this._handleDisabledAnchorClick}"
              ><zui-icon icon="zui-chevron-left"></zui-icon
            ></a>
          ` : html`
            <button class="pager-button back" ?disabled="${this.currentPage <= 1}" @click="${this._pageBackwards}"
              ><zui-icon icon="zui-chevron-left"></zui-icon
            ></button>
          `}
    `;
    const forwardButton = html`
      ${this.hrefFormat ? html`
            <a
              class="pager-button forward ${classMap({
      disabled: this.currentPage >= this._totalPages
    })}"
              href="${this.currentPage >= this._totalPages ? '' : this._formatHref((+this.currentPage + 1).toString())}"
              @click="${this._handleDisabledAnchorClick}"
              ><zui-icon icon="zui-chevron-right"></zui-icon
            ></a>
          ` : html`
            <button
              class="pager-button forward"
              ?disabled="${this.currentPage >= this._totalPages}"
              @click="${this._pageForwards}"
              ><zui-icon icon="zui-chevron-right"></zui-icon
            ></button>
          `}
    `;
    let pagerTemplate;
    switch (this.type) {
      case 'standard':
        pagerTemplate = this.#isMobile ? this._renderSelect() : this._renderStandard();
        break;
      case 'lite':
        pagerTemplate = this._renderLite();
        break;
      case 'select':
        pagerTemplate = this._renderSelect();
        break;
      default:
        pagerTemplate = this.#isMobile ? this._renderSelect() : this._renderStandard();
        break;
    }
    return html` <div class="pages">${backButton}${pagerTemplate}${forwardButton}</div>${this._renderPageInput()} `;
  }
  _renderPageInput() {
    return this.hideInput ? html`` : html`
          <input
            class="input"
            id="input"
            .value="${this.currentPage}"
            @change="${e => this._goToPage(+e.target.value)}"
          />
        `;
  }
  _renderStandard() {
    const items = this._generatePages();
    const anchorItems = html`
      ${repeat(items, i => i.text, i => html`
            ${this.hrefFormat ? html`
                  <a
                    class="pager-button page ${classMap({
      disabled: (+this.currentPage).toString() === i.text || i.disabled,
      current: (+this.currentPage).toString() === i.text
    })}"
                    href="${(+this.currentPage).toString() === i.text || i.disabled ? '' : this._formatHref(i.text)}"
                    @click="${e => this._handleDisabledAnchorClick(e)}"
                    >${i.text}</a
                  >
                ` : html`<button class="pager-button page ${classMap({
      current: (+this.currentPage).toString() === i.text
    })}" ?disabled="${this.currentPage.toString() === i.text || i.disabled}" @click="${() => this._goToPage(+i.text)}">${i.text}</a>`}
          `)}
    `;
    return html` ${anchorItems} `;
  }
  _renderLite() {
    return html``;
  }
  _renderSelect() {
    const options = Array.from(new Array(this._totalPages), (_, i) => new PagerButton(`${i + 1}`, false));
    const optionsHTML = html`
      ${repeat(options, i => i, i => html` <option ?selected="${i.text === (+this.currentPage).toString()}">${i.text}</option> `)}
    `;
    return html`
      <div class="select-container">
        <div class="select-mock">
          <span class="current">${this.currentPage}</span> <span class="of">of</span> <span>${this._totalPages}</span>
          <zui-icon icon="zui-caret-down"></zui-icon>
        </div>
        <select
          class="select-overlay"
          @change="${e => this._goToPage(+e.target.value)}"
        >
          ${optionsHTML}
        </select>
      </div>
    `;
  }
  _formatHref(i) {
    return this.hrefFormat ? this.hrefFormat.replace('{page}', i) : '';
  }
  _goToPage(page) {
    if (page >= 1 && page <= this._totalPages && page !== +this.currentPage) {
      this.currentPage = page;
    }
  }
  _generatePages() {
    const maxButtons = 7;
    const ellipsisBreakpoint = 4;
    const buttons = [];
    if (this._totalPages <= maxButtons) {
      for (let i = 1; i <= this._totalPages; i++) {
        buttons[i - 1] = new PagerButton(i.toString(), false);
      }
    } else {
      buttons[0] = new PagerButton('1', false);
      buttons[6] = new PagerButton(this._totalPages.toString(), false);
      if (this.currentPage < ellipsisBreakpoint) {
        buttons[1] = new PagerButton('2', false);
        buttons[2] = new PagerButton('3', false);
        buttons[3] = new PagerButton('4', false);
        buttons[4] = new PagerButton('5', false);
        buttons[5] = new PagerButton('...', true);
      } else if (this._totalPages - this.currentPage < ellipsisBreakpoint) {
        buttons[1] = new PagerButton('...', true);
        buttons[2] = new PagerButton((this._totalPages - 4).toString(), false);
        buttons[3] = new PagerButton((this._totalPages - 3).toString(), false);
        buttons[4] = new PagerButton((this._totalPages - 2).toString(), false);
        buttons[5] = new PagerButton((this._totalPages - 1).toString(), false);
      } else {
        buttons[1] = new PagerButton('...', true);
        buttons[2] = new PagerButton((this.currentPage - 1).toString(), false);
        buttons[3] = new PagerButton(this.currentPage.toString(), false);
        buttons[4] = new PagerButton((Number(this.currentPage) + 1).toString(), false);
        buttons[5] = new PagerButton('...', true);
      }
    }
    return buttons;
  }
  _handleDisabledAnchorClick(e) {
    if (e.target.classList.contains('disabled')) {
      e.preventDefault();
      return false;
    }
  }
  _calculateTotalPages(pageSize, totalCount) {
    return Math.floor((totalCount + pageSize - 1) / pageSize);
  }
  _pageBackwards() {
    this._goToPage(this.currentPage - 1);
  }
  _pageForwards() {
    this._goToPage(this.currentPage + 1);
  }
  _setupMediaQueryListener() {
    const xsmallMq = window.matchMedia(`(max-width: ${screenBreakpoints.xsmall})`);
    xsmallMq.addListener(e => {
    });
    this.#isMobile = xsmallMq.matches;
  }
}
__decorate$t([property({
  type: Number,
  attribute: 'total-pages'
})], ZuiPager.prototype, "totalPages", void 0);
__decorate$t([property({
  type: Number,
  reflect: true,
  attribute: 'current-page'
})], ZuiPager.prototype, "currentPage", void 0);
__decorate$t([property({
  type: String
})], ZuiPager.prototype, "type", void 0);
__decorate$t([property({
  type: String,
  attribute: 'href-format'
})], ZuiPager.prototype, "hrefFormat", void 0);
__decorate$t([property({
  type: Boolean,
  attribute: 'hide-input'
})], ZuiPager.prototype, "hideInput", void 0);
__decorate$t([property({
  type: Number,
  attribute: 'page-size'
})], ZuiPager.prototype, "pageSize", void 0);
__decorate$t([property({
  type: Number,
  attribute: 'total-count'
})], ZuiPager.prototype, "totalCount", void 0);
window.customElements.define('zui-pager', ZuiPager);

const style$u = css`:host{--zui-search-placeholder-color: var(--zui-gray-300);display:inline-block}@media(max-width: 45em){:host .wrapper{position:relative;background:#fff;border-radius:4px}:host .wrapper zui-icon[icon=zui-search]{position:absolute;top:calc(50% - 0.625rem);left:.625rem;fill:var(--zui-search-submit-color, var(--zui-blue))}:host .wrapper div input{z-index:1;padding-left:2.4375rem;background:rgba(0,0,0,0);border-radius:4px}:host .wrapper div zui-icon{z-index:2}:host .wrapper .search-icon,:host .wrapper .search-icon.no-submit{display:block}:host .wrapper .submit{display:none}:host ::slotted(zui-select),:host ::slotted(select){--zui-select-border-radius: 0 4px 4px 0;border-radius:0 4px 4px 0}}:host(.no-border){border:0}:host(.no-border) .wrapper input{border-top:0;border-bottom:0;border-left:0}:host(.no-border) .wrapper button[type=submit]{border:0}:host(.no-border) .wrapper ::slotted(select){border-top:0;border-bottom:0}:host([no-submit]) .wrapper{position:relative;background:#fff;border-radius:4px}:host([no-submit]) .wrapper zui-icon[icon=zui-search]{position:absolute;top:calc(50% - 0.625rem);left:.625rem;fill:var(--zui-search-submit-color, var(--zui-blue))}:host([no-submit]) .wrapper div input{z-index:1;padding-left:2.4375rem;background:rgba(0,0,0,0);border-radius:4px}:host([no-submit]) .wrapper div zui-icon{z-index:2}:host([no-submit]) ::slotted(zui-select),:host([no-submit]) ::slotted(select){--zui-select-border-radius: 0 4px 4px 0;border-radius:0 4px 4px 0}:host([disabled]) .wrapper div input[disabled]{background:var(--zui-gray-100);cursor:not-allowed;color:var(--zui-gray)}:host([disabled]) .wrapper div input[disabled]:hover{border:1px solid var(--zui-gray-200)}:host([disabled]) .wrapper button[type=submit]{background:var(--zui-gray-100);border-color:var(--zui-gray-200);color:var(--zui-gray-300);pointer-events:none}.wrapper{display:flex;width:100%;justify-content:space-around}.wrapper zui-icon{--zui-icon-size: 1.25rem}.wrapper ::slotted(select),.wrapper ::slotted(zui-select){display:none}@media(min-width: 45em){.wrapper ::slotted(select),.wrapper ::slotted(zui-select){display:inline-flex}}.wrapper ::slotted(select){position:relative;height:2.625rem;flex-shrink:0;flex-basis:auto;padding:0 1em;background:var(--zui-gray-50);border:1px solid var(--zui-search-border-color, var(--zui-gray-200));border-left:0;border-radius:0;outline:none;cursor:pointer;color:var(--zui-gray-800)}.wrapper ::slotted(zui-select){--zui-select-border-radius: 0;flex-shrink:0;flex-basis:auto;margin-right:-1px;margin-left:-1px}.wrapper div{position:relative;width:100%;z-index:1}.wrapper div input{width:100%;min-height:2.625rem;padding:0 .625rem;border:1px solid var(--zui-search-border-color, var(--zui-gray-200));border-radius:4px 0 0 4px;color:var(--zui-gray-800);transition:border 100ms ease-in-out;appearance:none}.wrapper div input:hover{border-color:var(--zui-gray-300)}.wrapper div input:focus{border-color:var(--zui-blue-400);box-shadow:0 0 0 1px var(--zui-blue-400);outline:none}.wrapper div input::placeholder{color:var(--zui-search-placeholder-color)}.wrapper div input::-webkit-input-placeholder{line-height:1.6;color:var(--zui-search-placeholder-color)}.wrapper div input::-ms-input-placeholder{line-height:1.6;color:var(--zui-search-placeholder-color)}.wrapper div input:-moz-placeholder{color:var(--zui-search-placeholder-color)}.wrapper div input::-moz-placeholder{color:var(--zui-search-placeholder-color)}.wrapper div input::-ms-clear{display:none;width:0;height:0}.wrapper div input::-ms-reveal{display:none;width:0;height:0}.wrapper div input::-webkit-search-decoration,.wrapper div input::-webkit-search-cancel-button,.wrapper div input::-webkit-search-results-button,.wrapper div input::-webkit-search-results-decoration{display:none}.wrapper button.submit{display:flex;width:3.4375rem;height:2.625rem;flex-shrink:0;flex-basis:auto;justify-content:center;align-items:center;padding-right:.9375rem;padding-left:.9375rem;background:var(--zui-search-submit-background-color, var(--zui-gray-50));border:1px solid var(--zui-search-border-color, var(--zui-gray-200));border-left:0;border-radius:0 4px 4px 0;cursor:pointer;color:var(--zui-search-submit-color, var(--zui-blue))}.wrapper button.submit:focus{background:var(--zui-search-submit-hover-background-color, var(--zui-gray-100));border-color:var(--zui-blue-400);box-shadow:0 0 0 1px var(--zui-blue-400);outline:none;border-left-width:1px;border-left-style:solid}.wrapper button.submit:active{box-shadow:inset 0 1px 0 0 var(--zui-gray)}.wrapper button.submit:active zui-icon{transform:translateY(1px)}.wrapper button.submit:hover{background:var(--zui-search-submit-hover-background-color, var(--zui-gray-100));color:var(--zui-search-submit-hover-color, var(--zui-blue-400))}.wrapper button.submit.no-submit{display:none}.search-icon:not(.no-submit){display:none}`;

var __decorate$s = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Standardized component for a search input.
 * @element zui-search
 *
 * @event {CustomEvent} search - Event is dispatched when a search is performed; provides details of input value, search type, and filter discriminator value from dropdown (if given)
 *
 * @slot - Default, unnamed slot; for inserting and placing a `<zui-select>` or `<select>` element next to the search field
 *
 * @cssprop [--zui-search-placeholder-color=var(--zui-gray-300)] - Color of placeholder text
 * @cssprop [--zui-search-submit-background-color=var(--zui-gray-50)] - Background color on submit button
 * @cssprop [--zui-search-submit-hover-background-color=var(--zui-gray-100)] - Background hover color on submit button
 * @cssprop [--zui-search-submit-color=var(--zui-blue)] - Change the color of search icon
 * @cssprop [--zui-search-submit-hover-color=var(--zui-blue)] - Change the hover color of search icon
 * @cssprop [--zui-select-border-radius=0 4px 4px 0] - Use to change border radius
 * @cssprop [--zui-search-border-color=var(--zui-gray-200)] - Border color on slotted select element
 *
 * @attr {string | null} [name=null] - The name of this element that is associated with form submission
 * @attr {boolean} [disabled=false] - Represents whether a user can make changes to this element; if true, the value of this element will be excluded from the form submission
 * @attr {boolean} [readonly=false] - Represents whether a user can make changes to this element; the value of this element will still be included in the form submission
 * @attr {boolean} [autofocus=false] - If true, this element will be focused when connected to the document
 * @attr {string} [value=''] - Represents the value of the search input box. Can be set to a default value, and will reflect the value provided by the user when interactive with the control.
 *
 * @prop {string | null} [name=null] - The name of this element that is associated with form submission
 * @prop {boolean} [disabled=false] - Represents whether a user can make changes to this element; if true, the value of this element will be excluded from the form submission
 * @prop {boolean} [readOnly=false] - Represents whether a user can make changes to this element; the value of this element will still be included in the form submission
 * @prop {boolean} [autofocus=false] - If true, this element will be focused when connected to the document
 * @prop {string} [value=''] - Represents the value of the search input box. Can be set to a default value, and will reflect the value provided by the user when interactive with the control.
 */
class ZuiSearch extends ZuiFormAssociatedElement {
  constructor() {
    super(...arguments);
    /**
     * Default placeholder (ghost) text
     */
    this.placeholder = undefined;
    /**
     * Hide the submit button
     */
    this.noSubmit = false;
    this.#value = '';
    this._deferFocus = true;
    this._deferClick = true;
  }
  get _focusControlSelector() {
    return 'input';
  }
  get _formValue() {
    return this.value;
  }
  formResetCallback() {
    this.value = '';
  }
  get value() {
    return this.#value;
  }
  set value(val) {
    const oldVal = this.#value;
    this.#value = val;
    this._setFormValue(this.#value);
    this.requestUpdate('value', oldVal);
  }
  #value;
  static get styles() {
    return [super.styles, style$u];
  }
  connectedCallback() {
    super.connectedCallback();
    // we want to go a little faster than LitElement and behave more like native HTML Form Associated Elements
    const value = this.value ?? this.getAttribute('value');
    this._setFormValue(value);
  }
  render() {
    const title = this.title ?? '';
    return html`
      <section class="wrapper">
        <zui-icon icon="zui-search" class="search-icon ${classMap({
      'no-submit': this.noSubmit
    })}"></zui-icon>
        <div>
          <input
            aria-label="Search"
            type="search"
            .value="${this.value || ''}"
            placeholder="${this.placeholder || ''}"
            ?disabled="${this.disabled}"
            @input="${this.updateValue}"
            @keyup="${this._handleKeyEvent}"
            title="${title}"
          />
        </div>
        <slot></slot>
        <button
          class="submit ${classMap({
      'no-submit': this.noSubmit
    })}"
          @click="${this.search}"
          ?disabled="${this.disabled}"
          ><zui-icon icon="zui-search"></zui-icon
        ></button>
      </section>
    `;
  }
  /**
   * Use to trigger a search, imperatively clicks the search's input
   */
  click() {
    if (this._inputEl) {
      this._inputEl.click();
    }
  }
  /**
   * Use to direct focus onto the search's input
   */
  focus() {
    if (this._inputEl) {
      this._inputEl.focus();
    }
  }
  search(event) {
    const searchType = this.querySelector('zui-select');
    let selectedFilterValue = null;
    if (searchType) {
      selectedFilterValue = searchType.value;
    }
    this.dispatchEvent(new CustomEvent('search', {
      bubbles: true,
      composed: true,
      detail: {
        value: this.value,
        searchType: selectedFilterValue
      }
    }));
    // pressing enter within the zui-search element will already submit the form
    // this is to explicitly cover clicking the button itself
    if (event instanceof MouseEvent) {
      this._submitForm();
    }
  }
  updateValue(e) {
    this.value = e.target.value;
  }
  _submitForm() {
    if (!this.form) {
      return;
    }
    if (this.form.requestSubmit) {
      this.form.requestSubmit(this._formSubmitButton);
    } else {
      let btn = null;
      if (this._formSubmitButton) {
        btn = this._formSubmitButton;
      } else {
        btn = document.createElement('button');
        btn.type = 'submit';
        btn.style.visibility = 'hidden';
        btn.style.width = '0';
        btn.style.height = '0';
        this.form.appendChild(btn);
      }
      if (btn) {
        btn.click();
      }
    }
  }
  _handleKeyEvent(event) {
    if (event.key === 'Enter') {
      this.search(event);
    }
  }
}
__decorate$s([property({
  type: String,
  attribute: 'placeholder'
})], ZuiSearch.prototype, "placeholder", void 0);
__decorate$s([property()], ZuiSearch.prototype, "value", null);
__decorate$s([property({
  type: Boolean,
  attribute: 'no-submit'
})], ZuiSearch.prototype, "noSubmit", void 0);
__decorate$s([query('input')], ZuiSearch.prototype, "_inputEl", void 0);
__decorate$s([query('button')], ZuiSearch.prototype, "_buttonEl", void 0);
window.customElements.define('zui-search', ZuiSearch);

/**
 * `<zui-multipicker>` is the wrapper around `<zui-multipicker-item>`'s, it renders slots for many of multipicker features such as search, pagination, count and other controls.
 * @element zui-multipicker
 *
 * @slot search - Slot in a search, such as `<zui-search>`
 * @slot results-count - Slot for total available results count
 * @slot bulk-add - Slot for a `button`, or `<zui-button>`, to bulk add all pickers
 * @slot picker-items - Slot for where all available `<zui-multipicker-item>`'s go, make a container such as `<div` `slot="picker-items">` then place `<zui-multipicker-item>`'s within
 * @slot selected-count - Slot for total picker results chosen
 * @slot bulk-remove - Slot for a `button`, or `<zui-button>`, to bulk remove all pickers
 * @slot selected-picker-items - Slot for where all chosen `<zui-multipicker-item>`'s go, make a container such as `<div` `slot="picker-items">` then place `<zui-multipicker-item>`'s within
 * @slot pager - Slot for pagination
 *
 * @cssprop [--zui-multipicker-item-font-size=inherit] - If necessary, this property exists for font size control, by default it should `inherit` successfully
 */
class ZuiMultipicker extends ZuiBaseElement {
  firstUpdated() {
    this.addEventListener('change', e => {
      e.stopPropagation();
    });
  }
  static get styles() {
    return [super.styles, style$w];
  }
  render() {
    return html`
      <div class="search">
        <slot
          @change="${e => {
      e.stopPropagation();
    }}"
          name="search"
        ></slot>
      </div>
      <div class="multipicker">
        <section class="left">
          <div class="info-row">
            <div class="results"><slot name="results-count"></slot></div>
            <div class="bulk-add"><slot name="bulk-add"></slot></div>
          </div>
          <div class="item-container"> <slot name="picker-items"></slot> </div>
        </section>
        <section class="right">
          <div class="info-row">
            <div class="results"><slot name="selected-count"></slot></div>
            <div class="bulk-remove"><slot name="bulk-remove"></slot></div>
          </div>
          <div class="item-container-selected">
            <slot class="selected-picker-items" name="selected-picker-items"></slot>
          </div>
        </section>
      </div>
      <div class="pager">
        <div class="pager-slot"><slot name="pager"></slot></div>
        <div class="pager-whitespace"></div>
      </div>
    `;
  }
}
window.customElements.define('zui-multipicker', ZuiMultipicker);

const style$t = css`:host .item{display:flex;justify-content:space-between;align-items:center;padding:.625rem 0;border-bottom:1px dashed var(--zui-gray-100);font-size:var(--zui-multipicker-item-font-size, inherit)}:host .content{display:flex;width:100%;flex-wrap:wrap;justify-content:flex-start;align-items:center;margin-right:.625rem;line-height:1.6;overflow-wrap:anywhere}:host .content ::slotted(zui-icon),:host .content ::slotted(zui-svg),:host .content ::slotted(svg){padding-right:.625rem}:host button{position:relative;display:inline-flex;width:2.25rem;height:2.25rem;flex-shrink:0;justify-content:center;align-items:center;margin-left:auto;padding:0;background:rgba(0,0,0,0);border:0;font-size:1em;line-height:1;cursor:pointer;transition:box-shadow 250ms ease-out}:host button:active,:host button:focus{outline:0}:host button:focus zui-icon{border-radius:50%}:host button.green:focus zui-icon{box-shadow:0 0 0 2px #fff,0 0 0 3px var(--zui-green)}:host button.red:focus zui-icon{box-shadow:0 0 0 2px #fff,0 0 0 3px var(--zui-red)}:host(.small){padding:0}`;

var __decorate$r = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Individual 'pickers' that are inserted into `<zui-multipicker>`.
 * @element zui-multipicker-item
 *
 * @cssprop [--zui-multipicker-item-font-size=inherit] - If necessary, this property exists for font size control; by default it should `inherit` successfully
 *
 * @slot - Default, unnamed slot; for inserting content, such as a title or a small icon, into `<zui-multipicker-item>`
 *
 * @event {CustomEvent} change - Event dispatches when the `selected` value changes; details contain information about which `identifier` and its `selected` value
 */
class ZuiMultipickerItem extends ZuiBaseElement {
  constructor() {
    super(...arguments);
    /**
     * A unique `identifier` to specify the current picker
     */
    this.identifier = undefined;
    /**
     * Reflects `selected` state of current picker
     */
    this.selected = false;
  }
  static get styles() {
    return [super.styles, style$t];
  }
  render() {
    return html`
      <div class="item">
        <div class="content"><slot></slot></div>

        <button class="${this.selected ? 'red' : 'green'}" @click="${this.select}"
          ><zui-icon icon="${this.selected ? 'zui-indicator-remove' : 'zui-indicator-add'}"></zui-icon
        ></button>
      </div>
    `;
  }
  /**
   * Toggles picker's `selected` state to opposite value
   */
  select() {
    this.selected = !this.selected;
    this.dispatchEvent(new CustomEvent('change', {
      bubbles: true,
      composed: true,
      detail: {
        identifier: this.identifier,
        selected: this.selected
      }
    }));
  }
}
__decorate$r([property({
  type: String
})], ZuiMultipickerItem.prototype, "identifier", void 0);
__decorate$r([property({
  type: Boolean,
  reflect: true
})], ZuiMultipickerItem.prototype, "selected", void 0);
window.customElements.define('zui-multipicker-item', ZuiMultipickerItem);

const style$s = css`:host{--zui-notifier-theme-color: var(--zui-blue);position:fixed;display:block;z-index:9000}:host ::slotted([slot=action]){display:inline-block;margin-top:var(--zui-notifier-action-margin-top, 0.375rem) !important;padding:0;background:none;border:0;font-weight:600;cursor:pointer;color:var(--zui-notifier-theme-color);text-decoration:underline}:host ::slotted([slot=action]:focus){bottom:0;box-shadow:0 0 0 1px var(--zui-notifier-theme-color);outline:0}:host([type=success]){--zui-notifier-theme-color: var(--zui-green)}:host([type=error]){--zui-notifier-theme-color: var(--zui-red)}:host([type=warning]){--zui-notifier-theme-color: var(--zui-yellow)}.notifier-container-outer{display:inline-block;min-height:3rem;background:#fff;border-radius:.25rem;box-shadow:0 .375rem .625rem rgba(0,0,0,.3019607843);animation:notifier-appear .4s ease forwards}.notifier-container-outer.is-hidden{display:none}.notifier-container-outer.is-closing{animation:notifier-disappear .3s ease forwards}.notifier-container-outer.is-closing .notifier-icon{animation:notifier-icon-shrink .2s ease-in forwards}.notifier-bar{width:100%;height:.625rem;background:var(--zui-notifier-theme-color);border-radius:.25rem .25rem 0 0}.notifier-content{position:relative;display:flex;align-items:flex-start;margin:.25rem .25rem .9375rem .625rem}.notifier-content .notifier-close-button{position:absolute;top:0;right:0;cursor:pointer;transition:opacity .2s ease-out}.notifier-content .notifier-close-button zui-icon{fill:var(--zui-gray-800)}.notifier-content .notifier-icon{--zui-icon-color: var(--zui-notifier-theme-color);display:flex;width:1.5rem;height:1.5rem;flex-shrink:0;justify-content:center;align-items:center;margin:.375rem .9375rem 0 0;animation:notifier-icon-grow .2s ease-in forwards}.notifier-content .notifier-icon zui-icon{fill:inherit}.notifier-content .notifier-text{display:block;max-width:50ch;flex:1;margin-top:.25rem;margin-right:2.875rem;word-wrap:break-word}.notifier-content .notifier-text .notifier-header{margin:0 0 .25rem 0}@keyframes notifier-appear{0%{opacity:0;transform:translateY(3.125rem)}100%{opacity:1;transform:translateY(0)}}@keyframes notifier-disappear{0%{opacity:1;transform:translateY(0)}100%{opacity:0;transform:translateY(3.125rem)}}@keyframes notifier-icon-grow{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes notifier-icon-shrink{0%{transform:scale(1)}100%{transform:scale(0)}}`;

var __decorate$q = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * `<zui-notifier>` is used to inform users with information as a result of their action.
 *
 * @element zui-notifier
 *
 * @event open - Dispatched event when `<zui-notifier>` is opening / transitioning open
 * @event close - Dispatched event when `<zui-notifier>` is closed, after the closing transition
 *
 * @slot action - Notifiers can include a single action or link, when there is more information associated with the message that the user may choose to explore
 *
 * @cssprop [--zui-notifier-theme-color=var(--zui-blue)] - Strongly discourage changing this, so the theming is accurately reflecting the design specs
 * @cssprop [--zui-notifier-action-margin-top=0.375rem (6px)] - Ability to override notifier action's default `margin-top` value
 */
class ZuiNotifier extends ZuiBaseElement {
  constructor() {
    super(...arguments);
    /**
     * Header text
     */
    this.header = '';
    /**
     * Message body text
     */
    this.message = '';
    /**
     * The `parent-selector` determines which element `<zui-notifier>` will be positionally based off of. The noitifier will then be visually pinned to the top and right corner of the element provided. If no value is given, the default will base positioning off of the `parentElement` of a `<zui-notifier>`. Provide a `string` value as you would for `document.querySelector('string')`.
     */
    this.parentSelector = null;
    /**
     * The type determines which `zui-icon` to display and which color theme to apply
     * @type {"info" | "success" | "error" | "warning"}
     */
    this.type = 'info';
    /**
     * The amount of time, in milliseconds, this notifier should persist open. A duration set to `0` or `-1` will remain shown until closed.
     */
    this.duration = 5000;
    this._isHidden = true;
    this._isClosing = false;
    this.#durationCountdownTimeout = null;
    this.#slideInAnimationDuration = null;
    this._notifierCoordinates = null;
  }
  get _slottedActionEl() {
    return findAssignedElement(this._actionSlot, '*');
  }
  static get styles() {
    return [super.styles, style$s];
  }
  /**
   * Computes which icon to show, based on notifier type.
   *
   * @param {string} type  This determines which zui-icon this notifier will use. ('info', 'success', 'error' or 'warning')
   */
  _computeIcon(type) {
    switch (type) {
      case 'error':
        return 'zui-error';
      case 'success':
        return 'zui-success';
      case 'warning':
        return 'zui-warning';
      case 'info':
      default:
        return 'zui-info';
    }
  }
  #durationCountdownTimeout;
  #slideInAnimationDuration;
  _resetTimer() {
    clearTimeout(this.#durationCountdownTimeout);
    this.#durationCountdownTimeout = window.setTimeout(() => this.hide(), this.duration);
  }
  _onAnimationEnd(e) {
    // references keyframe animation in stylesheet
    if (e.animationName === 'notifier-appear') {
      this.#slideInAnimationDuration = e.elapsedTime * 1000;
    }
    // triggered by closing animation on .notifier-container-outer
    if (e.animationName === 'notifier-disappear') {
      this._isHidden = true;
      this._isClosing = false;
      this.requestUpdate();
      this.dispatchEvent(new CustomEvent('close', {
        bubbles: true,
        composed: true,
        detail: this
      }));
    }
  }
  _determineNotifierCoordinates() {
    const parentEl = this.getRootNode().querySelector(this.parentSelector) || this.parentElement;
    const parentRect = parentEl.getBoundingClientRect();
    const notifierPose = {
      top: `${parentRect.top}px`,
      right: `${window.innerWidth - parentRect.right}px`
    };
    return notifierPose;
  }
  _addNotifierStyleCoordinates() {
    this.style.top = this._notifierCoordinates.top;
    this.style.right = this._notifierCoordinates.right;
  }
  /**
   * Displays the notifier
   */
  async show() {
    await this.updateComplete;
    this._notifierCoordinates = this._determineNotifierCoordinates();
    this._addNotifierStyleCoordinates();
    this._isHidden = false;
    this._isClosing = false;
    this.requestUpdate();
    this.duration >= 1 && setTimeout(() => this._resetTimer(), this.#slideInAnimationDuration);
    this.dispatchEvent(new CustomEvent('open', {
      bubbles: true,
      composed: true,
      detail: this
    }));
  }
  /**
   * Hides the notifier
   */
  hide() {
    clearTimeout(this.#durationCountdownTimeout);
    this._isClosing = true;
    this.requestUpdate();
  }
  firstUpdated() {
    this._slottedActionEl && this._slottedActionEl.addEventListener('click', () => this.hide());
  }
  render() {
    const icon = this._computeIcon(this.type);
    return html`
      <div
        class="notifier-container-outer  
        ${classMap({
      'is-closing': this._isClosing,
      'is-hidden': this._isHidden
    })}"
        @animationend="${this._onAnimationEnd}"
      >
        <div class="notifier-bar"></div>
        <div class="notifier-content">
          <zui-button
            class="notifier-close-button link icon-only"
            @click="${this.hide}"
            tabindex="0"
            aria-label="close"
          >
            <zui-icon icon="zui-remove"></zui-icon>
          </zui-button>
          <div class="notifier-icon">
            <zui-icon icon="${icon}"></zui-icon>
          </div>
          <div class="notifier-text">
            <h3 class="notifier-header">${this.header}</h3>
            <div class="notifier-message">${this.message}</div>
            <slot name="action"></slot>
          </div>
        </div>
      </div>
    `;
  }
}
__decorate$q([property({
  type: String,
  attribute: 'header'
})], ZuiNotifier.prototype, "header", void 0);
__decorate$q([property({
  type: String,
  attribute: 'message'
})], ZuiNotifier.prototype, "message", void 0);
__decorate$q([property({
  type: String,
  attribute: 'parent-selector'
})], ZuiNotifier.prototype, "parentSelector", void 0);
__decorate$q([property({
  type: String,
  attribute: 'type',
  reflect: true
})], ZuiNotifier.prototype, "type", void 0);
__decorate$q([property({
  type: Number,
  attribute: 'duration',
  reflect: true
})], ZuiNotifier.prototype, "duration", void 0);
__decorate$q([query('.notifier-container-outer')], ZuiNotifier.prototype, "_notifierContainerEl", void 0);
__decorate$q([query('slot[name="action"]')], ZuiNotifier.prototype, "_actionSlot", void 0);
window.customElements.define('zui-notifier', ZuiNotifier);

const style$r = css`:host section{display:flex;flex-direction:column}:host section .results{padding-top:20px;padding-bottom:10px;border-bottom:2px solid var(--zui-gray-100);color:var(--zui-gray)}:host section .item-container{border-bottom:2px solid var(--zui-gray-100)}`;

/**
 * `<zui-picker>` is the wrapper around `<zui-picker-item>`'s, it renders slots for many of picker's features such as search, pagination, count and other controls.
 *
 * @element zui-picker
 *
 * @slot search - Slot in a search, such as `<zui-search>`
 * @slot results-count - Slot for total available results count
 * @slot picker-items - Slot for where all available `<zui-multipicker-item>`'s go, make a container such as `<div` `slot="picker-items">` then place `<zui-multipicker-item>`'s within
 * @slot pager - Slot for pagination
 *
 * @cssprop [--zui-picker-item-font-size=inherit] - If necessary, this property exists for font size control, by default it should `inherit` successfully
 *
 * @event {CustomEvent} change - Event is fired when a selection is made, details contain the event to tell where it originated from
 */
class ZuiPicker extends ZuiBaseElement {
  firstUpdated() {
    this.addEventListener('selected', e => {
      this.dispatchEvent(new CustomEvent('change', {
        detail: e.detail,
        bubbles: true
      }));
      e.stopPropagation();
    });
    this.shadowRoot.getElementById('search').addEventListener('change', e => e.stopPropagation());
  }
  static get styles() {
    return [super.styles, style$r];
  }
  render() {
    return html`
      <section>
        <slot id="search" name="search"></slot> <div class="results"><slot name="results-count"></slot></div>
        <div class="item-container"> <slot name="picker-items"></slot> </div> <slot name="pager"></slot>
      </section>
    `;
  }
}
window.customElements.define('zui-picker', ZuiPicker);

const style$q = css`:host{display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px dashed var(--zui-gray-100);font-size:var(--zui-picker-item-font-size, inherit)}:host .content{display:flex;width:100%;justify-content:flex-start;align-items:center;line-height:1.6}:host .content ::slotted(zui-icon),:host .content ::slotted(zui-svg),:host .content ::slotted(svg){padding-right:10px}:host .content ::slotted(zui-button){position:relative;display:inline-flex;margin-left:auto;line-height:1}`;

/**
 * Individual items that are inserted into `<zui-picker>` to be selected.
 * @element zui-picker-item
 *
 * @cssprop [--zui-picker-item-font-size=inherit] - If necessary, this property exists for font size control, by default it should `inherit` successfully
 *
 * @slot - Default, unnamed slot; for inserting content, such as a title or a small icon, into `<zui-picker-item>`
 */
class ZuiPickerItem extends ZuiBaseElement {
  static get styles() {
    return [super.styles, style$q];
  }
  render() {
    return html` <div class="content"><slot></slot></div> `;
  }
}
window.customElements.define('zui-picker-item', ZuiPickerItem);

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const important = 'important';
// The leading space is important
const importantFlag = ' !' + important;
// How many characters to remove from a value, as a negative number
const flagTrim = 0 - importantFlag.length;
class StyleMapDirective extends Directive {
  constructor(partInfo) {
    super(partInfo);
    if (partInfo.type !== PartType.ATTRIBUTE || partInfo.name !== 'style' || partInfo.strings?.length > 2) {
      throw new Error('The `styleMap` directive must be used in the `style` attribute ' + 'and must be the only part in the attribute.');
    }
  }
  render(styleInfo) {
    return Object.keys(styleInfo).reduce((style, prop) => {
      const value = styleInfo[prop];
      if (value == null) {
        return style;
      }
      // Convert property names from camel-case to dash-case, i.e.:
      //  `backgroundColor` -> `background-color`
      // Vendor-prefixed names need an extra `-` appended to front:
      //  `webkitAppearance` -> `-webkit-appearance`
      // Exception is any property name containing a dash, including
      // custom properties; we assume these are already dash-cased i.e.:
      //  `--my-button-color` --> `--my-button-color`
      prop = prop.includes('-') ? prop : prop.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, '-$&').toLowerCase();
      return style + `${prop}:${value};`;
    }, '');
  }
  update(part, [styleInfo]) {
    const {
      style
    } = part.element;
    if (this._previousStyleProperties === undefined) {
      this._previousStyleProperties = new Set(Object.keys(styleInfo));
      return this.render(styleInfo);
    }
    // Remove old properties that no longer exist in styleInfo
    for (const name of this._previousStyleProperties) {
      // If the name isn't in styleInfo or it's null/undefined
      if (styleInfo[name] == null) {
        this._previousStyleProperties.delete(name);
        if (name.includes('-')) {
          style.removeProperty(name);
        } else {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          style[name] = null;
        }
      }
    }
    // Add or update properties
    for (const name in styleInfo) {
      const value = styleInfo[name];
      if (value != null) {
        this._previousStyleProperties.add(name);
        const isImportant = typeof value === 'string' && value.endsWith(importantFlag);
        if (name.includes('-') || isImportant) {
          style.setProperty(name, isImportant ? value.slice(0, flagTrim) : value, isImportant ? important : '');
        } else {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          style[name] = value;
        }
      }
    }
    return noChange;
  }
}
/**
 * A directive that applies CSS properties to an element.
 *
 * `styleMap` can only be used in the `style` attribute and must be the only
 * expression in the attribute. It takes the property names in the
 * {@link StyleInfo styleInfo} object and adds the properties to the inline
 * style of the element.
 *
 * Property names with dashes (`-`) are assumed to be valid CSS
 * property names and set on the element's style object using `setProperty()`.
 * Names without dashes are assumed to be camelCased JavaScript property names
 * and set on the element's style object using property assignment, allowing the
 * style object to translate JavaScript-style names to CSS property names.
 *
 * For example `styleMap({backgroundColor: 'red', 'border-top': '5px', '--size':
 * '0'})` sets the `background-color`, `border-top` and `--size` properties.
 *
 * @param styleInfo
 * @see {@link https://lit.dev/docs/templates/directives/#stylemap styleMap code samples on Lit.dev}
 */
const styleMap = directive(StyleMapDirective);

const style$p = css`:host{--zui-progress-color: var(--zui-blue);display:block;padding:1.25rem 0}.container{position:relative;overflow:hidden}.progress-bar{position:absolute;top:0;left:0;width:100%;height:.1875rem;opacity:1;border-radius:.1875rem;animation-duration:var(--zui-progress-duration, 1.5s);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-fill-mode:none}.progress-bar.indeterminate{background-image:linear-gradient(90deg, var(--zui-progress-color) 40%, transparent 40%);animation-name:indeterminate-gradient;animation-iteration-count:infinite}.progress-bar:not(.indeterminate){position:absolute;background-color:var(--zui-progress-color);transform-origin:top left;transition:250ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.track-bar{height:.1875rem;background-color:var(--zui-gray-100)}@keyframes indeterminate-gradient{0%{transform:translateX(-40%)}100%{transform:translateX(100%)}}`;

var __decorate$p = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Represents a linear progress indicator.
 * @element zui-progress
 *
 * @cssprop [--zui-progress-color=var(--zui-blue)] - Set the primary color of the progress bar
 * @cssprop [--zui-progress-duration=1.5s] - Set the progress bar animation duration
 *
 * @cssState indeterminate - Applied when the progress bar is in indeterminate state
 */
class ZuiProgress extends ZuiBaseElement {
  #internals;
  static get styles() {
    return [super.styles, style$p];
  }
  constructor() {
    super();
    /**
     * Sets the progress bar into its indeterminate state
     */
    this.indeterminate = false;
    /**
     * Sets the primary progress bar's value. Value should be between `[0, 100]`.
     */
    this.progress = 0;
    this.#internals = this.attachInternals?.();
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'progressbar');
    this.setAttribute('aria-valuemin', '0');
    this.setAttribute('aria-valuemax', '100');
  }
  updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has('indeterminate')) {
      this.indeterminate ? updateCustomState(this.#internals, 'add', 'indeterminate') : updateCustomState(this.#internals, 'delete', 'indeterminate');
    }
  }
  render() {
    const progress = !this.indeterminate ? Math.min(this.progress, 100) : undefined;
    const progressStyles = {};
    if (progress !== undefined) {
      this.setAttribute('aria-valuenow', progress.toString());
    } else {
      this.removeAttribute('aria-valuenow');
    }
    if (!this.indeterminate) {
      progressStyles.transform = `scaleX(${progress / 100})`;
    }
    return html`
      <div class="container">
        <div class="track-bar"></div>
        <div
          style="${styleMap(progressStyles)}"
          class="progress-bar ${classMap({
      indeterminate: this.indeterminate
    })}"
        ></div>
      </div>
    `;
  }
}
__decorate$p([property({
  type: Boolean
})], ZuiProgress.prototype, "indeterminate", void 0);
__decorate$p([property({
  type: Number
})], ZuiProgress.prototype, "progress", void 0);
window.customElements.define('zui-progress', ZuiProgress);

const style$o = css`:host{display:inline-flex;outline:none;font-size:inherit;cursor:pointer}:host section{width:100%}:host .radio-container{position:relative;display:flex}:host .radio{position:relative;display:flex;width:1.25rem;height:1.25rem;flex-shrink:0;justify-content:center;align-items:center;margin:var(--zui-radio-indicator-margin, 0.6875rem 0.6875rem 0.6875rem 0);background:#fff;border:.125rem solid var(--zui-gray-400);border-radius:50%;transition:border 125ms ease-out,opacity 125ms ease-out}:host .radio .radio-indicator-outline{position:relative;display:flex;width:.75rem;height:.75rem;justify-content:center;align-items:center;border-radius:50%}:host .radio .radio-indicator{position:absolute;top:0;left:0;display:block;width:.75rem;height:.75rem;background:rgba(0,0,0,0);border-radius:50%;transition:background .1s ease-in-out}:host .label{display:block;width:100%;margin:var(--zui-radio-label-margin, 0.5625rem 1.25rem 0.5625rem 0)}:host .label .icon{display:none}:host .label .icon ::slotted(*){display:block}:host(:hover) .radio{border-color:var(--zui-gray-600)}:host(:focus)::before{position:absolute;top:var(--zui-radio-indicator-margin, 0.6875rem);content:"";width:1.375rem;height:1.375rem;border-radius:.3125rem;box-shadow:0 0 0 .0625rem var(--zui-blue);transform:translate(-0.0625rem, -0.0625rem)}:host([checked]) .radio{border-color:var(--zui-radio-color, var(--zui-blue))}:host([checked]) .radio .radio-indicator{background:var(--zui-radio-color, var(--zui-blue))}:host([checked]) .radio.checked-change .animate{position:absolute;top:0;right:0;bottom:0;left:-0.125rem;width:2.625rem;height:2.625rem;margin:auto auto auto -0.6875rem;background:var(--zui-radio-animate-color, var(--zui-blue-300));border-radius:50%;animation:scaleIn .35s ease-in-out forwards}:host(:hover[checked]) .radio{border-color:var(--zui-radio-hover-color, var(--zui-blue-400))}:host(:hover[checked]) .radio .radio-indicator{background:var(--zui-radio-hover-color, var(--zui-blue-400))}:host([disabled]){cursor:not-allowed}:host([disabled]) .radio{border-color:var(--zui-gray-100)}:host([disabled]) .label{color:var(--zui-gray-300)}:host([checked][disabled]) .radio{border-color:var(--zui-blue-100)}:host([checked][disabled]) .radio .radio-indicator{background:var(--zui-blue-100)}:host([checked][disabled]) .animate{background:var(--zui-blue-100)}:host(.inline) .radio-container{padding-right:.9375rem;padding-left:.9375rem;background:#fff;border:.0625rem solid var(--zui-gray-200);border-radius:.125rem;transition:background .3s ease-out,border .3s ease-out,box-shadow .3s ease-out}:host(.inline) .radio{display:none}:host(.inline) .label{display:flex;margin:.3125rem 0}:host(.inline) .label .icon{display:block;height:1.5rem}:host(.inline) .label .icon ::slotted(*){max-width:1.5rem;max-height:1.5rem;margin:0 .625rem 0 0}:host(.inline) .label .label-text{font-weight:600}:host(.inline:focus) .radio-container{box-shadow:inset 0 0 0 .0625rem #fff,inset 0 0 0 .125rem var(--zui-radio-color, var(--zui-blue))}:host(.inline[checked]) .radio-container{box-shadow:inset 0 0 0 .0625rem var(--zui-radio-color, var(--zui-blue))}:host(.inline[checked]:focus) .radio-container{box-shadow:inset 0 0 0 .0625rem var(--zui-radio-color, var(--zui-blue)),inset 0 0 0 .125rem var(--zui-radio-animate-color, var(--zui-blue-100)),inset 0 0 0 .1875rem var(--zui-radio-color, var(--zui-blue))}:host(.inline[checked][disabled]) .radio-container{box-shadow:inset 0 0 0 .0625rem var(--zui-blue-200)}:host(.gallery) .radio-container{position:relative;width:100%;max-width:var(--zui-radio-gallery-width, 8.125rem);padding:1.875rem;background:#fff;border:.0625rem solid var(--zui-gray-200);border-radius:.375rem;transition:background .3s ease-out,border .3s ease-out,box-shadow .3s ease-out}:host(.gallery) .radio{position:absolute;top:-0.375rem;left:-0.375rem;margin:.6875rem}:host(.gallery) .label{display:block;margin:0;text-align:center}:host(.gallery) .label .icon{display:block;width:100%;padding-bottom:.9375rem}:host(.gallery) .label .icon ::slotted(*){max-width:100%;margin:0 auto}:host(.gallery) .label .label-text{font-weight:600}:host(.gallery:focus) .radio-container{box-shadow:0 0 0 .0625rem #fff,0 0 0 .125rem var(--zui-radio-color, var(--zui-blue))}:host(.gallery[checked]) .radio-container{box-shadow:0 0 0 .0625rem var(--zui-radio-color, var(--zui-blue))}:host(.gallery[checked]:focus) .radio-container{box-shadow:0 0 0 .0625rem var(--zui-radio-color, var(--zui-blue)),0 0 0 .125rem #fff,0 0 0 .1875rem var(--zui-radio-color, var(--zui-blue))}:host(.gallery[disabled]) .radio-container .radio{display:none}:host(.gallery[checked][disabled]) .radio-container{box-shadow:0 0 0 .0625rem var(--zui-blue-200)}:host(.gallery[checked][disabled]) .radio-container .radio{display:flex;background:rgba(0,0,0,0);border-color:var(--zui-blue-200)}:host(.gallery[checked][disabled]) .radio-container .radio .radio-indicator{background:var(--zui-blue-200)}:host(.inline:hover) .radio-container,:host(.gallery:hover) .radio-container{border-color:var(--zui-gray-600)}:host(.inline:focus)::before,:host(.gallery:focus)::before{content:none}:host(.inline[checked]) .radio-container,:host(.gallery[checked]) .radio-container{background:var(--zui-radio-animate-color, var(--zui-blue-100));border-color:var(--zui-radio-color, var(--zui-blue))}:host(.inline[checked]) .radio-container:hover,:host(.gallery[checked]) .radio-container:hover{border-color:var(--zui-radio-hover-color, var(--zui-blue-600))}:host(.inline[checked]) .label .icon,:host(.gallery[checked]) .label .icon{color:var(--zui-radio-color, var(--zui-blue))}:host(.inline[disabled]) .radio-container,:host(.gallery[disabled]) .radio-container{background:var(--zui-gray-100);border-color:var(--zui-gray-100)}:host(.inline[disabled]) .label .icon,:host(.gallery[disabled]) .label .icon{opacity:.5}:host(.inline[disabled]:hover) .radio-container,:host(.gallery[disabled]:hover) .radio-container{border-color:var(--zui-gray-100)}:host(.inline[checked][disabled]) .radio-container,:host(.gallery[checked][disabled]) .radio-container{background:var(--zui-blue-100);border-color:var(--zui-blue-200)}@keyframes scaleIn{from{opacity:.5;transform:scale(0.5, 0.5)}to{opacity:0;transform:scale(1, 1)}}`;

var __decorate$o = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Radio form control, insert into `<zui-radio-group>` to ensure only one `<zui-radio>` is chosen at a time.
 * @element zui-radio
 *
 * @slot - (required): Default, unnamed slot; used for inserting label text into `<zui-radio>`
 * @slot icon - Insert an icon into the label container; appears before the default, unnamed slotted label text
 *
 * @attr {string} [name=null] - The name of this element that is associated with form submission
 * @attr {boolean} [disabled=false] - Represents whether a user can make changes to this element; if true, the value of this element will be excluded from the form submission
 *
 * @prop {string | null} [name=null] - The name of this element that is associated with form submission
 * @prop {boolean} [disabled=false] - Represents whether a user can make changes to this element; if true, the value of this element will be excluded from the form submission
 *
 * @cssprop [--zui-radio-color=-var(-zui-blue)] - (all): radio fill color when `checked`
 * @cssprop [--zui-radio-hover-color=var(--zui-blue-400)] - (all); hover state radio fill color
 * @cssprop [--zui-radio-animate-color=var(--zui-blue-300)] - (all): animation state after a click, radio fill color
 * @cssprop [--zui-radio-indicator-margin=0.6875rem 0.6875rem 0.6875rem 0 (11px 11px 11px 0)] - (default): radio marginal positioning
 * @cssprop [--zui-radio-label-margin=0.5625rem 1.25rem 0.5625rem 0 (9px 20px 9px 0)] - (default): radio label marginal positioning
 * @cssprop [--zui-radio-indicator-margin=0.6875rem (11px)] - (default): focus state rounded rectangle that appears, changes the `position:` `absolute` `top` value. If CSS custom props affecting margins are changed then this likely needs to be updated to adjust focus ring to be centered.
 * @cssprop [--zui-radio-gallery-width=8.125rem (130px)] - (`gallery`): width of a `gallery` type `zui-radio`
 *
 * @event {CustomEvent} keydown - Event dispatches when a `keydown` event happens while a `zui-radio` is focused; contains details about which `keycode` was pressed
 * @event {CustomEvent} selected - Event is dispatched when `selected` state changes; contains details about which `identifier` was changed
 * @event {CustomEvent} change - Event is dispatched when `selected` state changes; contains details about which `value` was changed
 */
class ZuiRadio extends ZuiFormAssociatedElement {
  constructor() {
    super(...arguments);
    this.#initialState = undefined;
    this.#instantiated = false;
    this.#checkedChanged = false;
    /**
     * The value assigned to the radio button, when form is submitted is included along with `name`
     */
    this.value = 'on';
    /**
     * Current state, whether or not this radio is `checked`
     */
    this.checked = false;
  }
  #initialState;
  #instantiated;
  #checkedChanged;
  get _focusControlSelector() {
    return '.radio-container';
  }
  get _formValue() {
    return this.checked ? this.value : null;
  }
  static get styles() {
    return [super.styles, style$o];
  }
  /**
   * (deprecated!): use `value` instead
   */
  get identifier() {
    return this.value;
  }
  set identifier(val) {
    this.value = val;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'radio');
    // we want to go a little faster than LitElement and behave more like native HTML Form Associated Elements
    const initialChecked = this.hasAttribute('checked');
    const initialValue = this.getAttribute('value');
    this.#initialState = initialChecked;
    this._setFormValue(initialChecked ? initialValue : null);
    this.addEventListener('click', this.#onClick);
  }
  formResetCallback() {
    this.checked = this.#initialState;
    this._setFormValue(this._formValue);
  }
  #setOrRemoveCheckedAttribute() {
    this.checked ? this.setAttribute('aria-checked', 'true') : this.setAttribute('aria-checked', 'false');
    this.checked ? this.setAttribute('tabindex', '0') : this.removeAttribute('tabindex');
  }
  #setOrRemoveDisabledAttribute() {
    this.disabled ? this.setAttribute('aria-disabled', 'true') : this.setAttribute('aria-disabled', 'false');
  }
  #selectRadio() {
    this.checked = true;
    this.setAttribute('tabindex', '0');
    this.focus();
    this.dispatchEvent(new CustomEvent('selected', {
      bubbles: true,
      composed: true,
      detail: this.identifier
    }));
    this.dispatchEvent(new CustomEvent('change', {
      detail: this.value,
      bubbles: true
    }));
  }
  update(changedProps) {
    super.update(changedProps);
    if (changedProps.has('disabled')) {
      this.#setOrRemoveDisabledAttribute();
    }
    if (changedProps.has('checked')) {
      this.#setOrRemoveCheckedAttribute();
    }
    if (changedProps.has('checked') && this.#instantiated) {
      this.#checkedChanged = true;
      this.requestUpdate();
    }
    if (changedProps.has('checked') || changedProps.has('value')) {
      this._setFormValue(this._formValue);
    }
  }
  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    this.#instantiated = true;
    this.requestUpdate();
  }
  render() {
    return html`
      <section class="radio-container" @click="${this.#onClick}" @keydown="${this.#onKeydown}">
        <div class="radio ${classMap({
      'checked-change': this.#checkedChanged
    })}">
          <div class="radio-indicator-outline"> <div class="radio-indicator"> </div> </div>
          <div class="animate"></div>
        </div>
        <div class="label">
          <div class="icon"><slot name="icon"></slot></div> <div class="label-text"><slot></slot></div>
        </div>
      </section>
    `;
  }
  #onClick() {
    if (!this.disabled && !this.checked) {
      this.#selectRadio();
    }
  }
  #onKeydown(e) {
    const arrowKeyCodes = ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'];
    const spaceKeyCode = 'Space';
    const keyCode = e.key;
    if (arrowKeyCodes.includes(keyCode)) {
      this.dispatchEvent(new CustomEvent('keydown', {
        bubbles: true,
        composed: true,
        detail: keyCode
      }));
      e.preventDefault();
      e.stopPropagation();
    }
    if (keyCode === spaceKeyCode) {
      if (!this.checked) {
        this.#selectRadio();
      }
      e.preventDefault();
      e.stopPropagation();
    }
  }
}
__decorate$o([property({
  type: String
})], ZuiRadio.prototype, "value", void 0);
__decorate$o([property({
  type: Boolean,
  reflect: true
})], ZuiRadio.prototype, "checked", void 0);
__decorate$o([property({
  type: String
})], ZuiRadio.prototype, "identifier", null);
window.customElements.define('zui-radio', ZuiRadio);

const style$n = css`:host{display:flex;flex-direction:column;align-items:flex-start}:host ::slotted(zui-radio.gallery){margin-bottom:1.25rem}:host(.horizontal){flex-flow:row wrap}:host(.horizontal) ::slotted(zui-radio){margin-right:.625rem}:host(.horizontal) ::slotted(zui-radio.inline){margin-right:0}:host(.horizontal) ::slotted(zui-radio.gallery){margin-right:1.25rem;margin-bottom:1.25rem}`;

var __decorate$n = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * `<zui-radio-group>` is a wrapper for `<zui-radio>` elements to ensure only one is chosen at a time.
 * @element zui-radio-group
 *
 * @slot - Default, unnamed slot; for inserting `<zui-radio>` elements into `<zui-radio-group>`
 *
 * @event {CustomEvent} change - Event is fired when a `<zui-radio>` is `selected`; contains details about the `value`
 */
class ZuiRadioGroup extends ZuiBaseElement {
  constructor() {
    super(...arguments);
    /**
     * The selected value associated with a corresponding `<zui-radio>'`s `value`
     */
    this.selected = undefined;
    /**
     * The selected value associated with a corresponding `<zui-radio>'`s `value`
     */
    this.value = undefined;
    /**
     * Radio group label for accessibility purposes only
     */
    this.label = undefined;
  }
  static get styles() {
    return [super.styles, style$n];
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'radiogroup');
    if (this.label) {
      this.setAttribute('aria-label', this.label);
    }
    this.addEventListener('selected', e => {
      this.#setSelected(e.detail);
      e.stopPropagation();
    });
    this.#handleKeyboard();
  }
  firstUpdated() {
    const defaultChecked = this.querySelector('zui-radio[checked]');
    if (defaultChecked) {
      const idValue = defaultChecked.getAttribute('identifier');
      this.#setSelected(idValue);
    } else {
      if (this.selected) {
        const selected = this.querySelector('zui-radio[identifier="' + this.selected + '"]');
        if (selected && selected.identifier) {
          this.#selectRadio(selected);
        }
      } else {
        const firstRadio = this.querySelector('zui-radio:not([disabled])');
        if (firstRadio) {
          firstRadio.setAttribute('tabindex', '0');
        }
      }
    }
  }
  #handleKeyboard() {
    const validKeyCodes = ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'];
    this.addEventListener('keydown', e => {
      if (validKeyCodes.includes(e.key)) {
        const selectableRadios = [].slice.call(this.querySelectorAll('zui-radio:not([disabled])'));
        const activeRadio = this.querySelector('zui-radio[checked]') || this.querySelector('zui-radio[tabindex]');
        let foundIndex = 0;
        let foundRadio;
        if (activeRadio) {
          foundIndex = selectableRadios.findIndex(function (radio) {
            return radio.getAttribute('identifier') === activeRadio.getAttribute('identifier');
          });
          if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            const nextIndex = foundIndex + 1;
            foundIndex = nextIndex === selectableRadios.length ? 0 : nextIndex;
          } else {
            const previousIndex = foundIndex - 1;
            foundIndex = previousIndex < 0 ? selectableRadios.length - 1 : previousIndex;
          }
          foundRadio = selectableRadios[foundIndex];
          if (foundRadio) {
            if (activeRadio.getAttribute('identifier') !== foundRadio.getAttribute('identifier')) {
              this.#selectRadio(foundRadio);
              this.#setSelected(foundRadio.getAttribute('identifier'));
            }
          }
        }
        e.preventDefault();
        e.stopPropagation();
      }
    });
  }
  #selectRadio(radio) {
    radio.updateComplete.then(() => {
      radio.setAttribute('checked', '');
      radio.setAttribute('tabindex', '0');
      radio.focus();
    });
  }
  #setSelected(identifier) {
    this.#ensureOnlyOneSelected(identifier);
    this.value = identifier;
    this.dispatchEvent(new CustomEvent('change', {
      detail: identifier,
      bubbles: true
    }));
    this.selected = identifier;
  }
  #ensureOnlyOneSelected(identifier) {
    const items = this.querySelectorAll('zui-radio[checked]');
    items.forEach(item => {
      if (item.getAttribute('identifier') !== identifier) {
        item.removeAttribute('checked');
        item.removeAttribute('tabindex');
        item.blur();
      }
    });
  }
  render() {
    return html` <slot></slot> `;
  }
}
__decorate$n([property({
  type: String,
  reflect: true
})], ZuiRadioGroup.prototype, "selected", void 0);
__decorate$n([property({
  type: String,
  reflect: true
})], ZuiRadioGroup.prototype, "value", void 0);
__decorate$n([property({
  type: String
})], ZuiRadioGroup.prototype, "label", void 0);
window.customElements.define('zui-radio-group', ZuiRadioGroup);

const style$m = css`:host{display:inline-flex;border-radius:var(--zui-select-border-radius, 0.25rem)}:host label{display:inline-flex;margin:.125rem 0;padding-right:.9375rem;font-weight:700;cursor:pointer;color:inherit}:host div{position:relative;width:100%}:host div select{display:inline-block;width:100%;height:2.625rem;padding:0 1em;padding-right:2.1875rem;background-color:#fff;border:.0625rem solid var(--zui-gray-200);border-radius:var(--zui-select-border-radius, 0.25rem);outline:none;font:inherit;cursor:pointer;color:inherit;transition:border 100ms ease-in-out,box-shadow 100ms ease-in-out;-webkit-appearance:none;-moz-appearance:none}:host div select[readonly]{pointer-events:none}:host div select[readonly]+zui-icon{display:none}:host div select.placeholder-selected{color:var(--zui-gray-300)}:host div select option{padding:.5em 0;color:var(--zui-gray-800)}:host div select option[value=""]{color:var(--zui-gray-300)}:host div select option:disabled{background-color:var(--zui-gray-100);cursor:not-allowed;color:var(--zui-gray)}:host div select:hover{border-color:var(--zui-gray-300)}:host div select:focus{border-color:var(--zui-blue-400);box-shadow:0 0 0 .0625rem var(--zui-blue-400)}:host div select::-ms-expand{display:none}:host div select::-ms-value{background:rgba(0,0,0,0);color:var(--zui-gray-700)}:host div zui-icon{position:absolute;top:calc(50% - 0.75rem);right:.625rem;color:var(--zui-gray-600);pointer-events:none}:host(.xsmall) div select{max-width:4.0625rem}:host(.small) div select{max-width:12.5rem}:host(.medium) div select{max-width:18.75rem}:host(.large) div select{max-width:25rem}:host([multiple]) div select{height:100%;padding:.0625rem}:host([multiple]) div select:focus{margin-top:0;padding:0;border:.125rem solid var(--zui-blue-400)}:host([multiple]) div zui-icon{display:none}:host([disabled]) div select{background-color:var(--zui-gray-100);cursor:not-allowed;color:var(--zui-gray)}:host([disabled]) div select:hover{border:.0625rem solid var(--zui-gray-200)}:host([disabled]) div select option{color:var(--zui-gray)}`;

var __decorate$m = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * A Basic select, best for shorter declaratively created lists, by passing in `<zui-option>`'s.
 * @element zui-select
 * @attr {string | undefined} [placeholder=null] - Input placeholder (ghost) text
 * @attr {string | null} [name=null] - The name of this element that is associated with form submission
 * @attr {boolean} [disabled=false] - Represents whether a user can make changes to this element; if true, the value of this element will be excluded from the form submission
 * @attr {boolean} [readonly=false] - Represents whether a user can make changes to this element; the value of this element will still be included in the form submission
 * @attr {boolean} [autofocus=false] - If true, this element will be focused when connected to the document
 *
 * @prop {string | undefined} [placeholder=null] - Input placeholder (ghost) text
 * @prop {string | null} [name=null] - The name of this element that is associated with form submission
 * @prop {boolean} [disabled=false] - Represents whether a user can make changes to this element; if true, the value of this element will be excluded from the form submission
 * @prop {boolean} [readOnly=false] - Represents whether a user can make changes to this element; the value of this element will still be included in the form submission
 * @prop {boolean} [autofocus=false] - If true, this element will be focused when connected to the document
 *
 * @csspart control - For custom styling of the `select` element; this is exposed as a CSS shadow part and can be accessed with `::part(control)`
 *
 * @event {CustomEvent} change - Event fires when a change to select occurs, contains details about `value` chosen
 */
class ZuiSelectElement extends ZuiFormAssociatedElement {
  constructor() {
    super(...arguments);
    /**
     * (deprecated): use zui-select-dropdown or other similar components
     */
    this.multiple = false;
    /**
     * Placeholder value
     */
    this.placeholder = undefined;
    /**
     * The currently selected item
     */
    this.value = '';
    /**
     * Whether a selection is required
     */
    this.required = false;
    this.#resetValue = '';
    this.#zuiOptions = [];
  }
  get _focusControlSelector() {
    return 'select';
  }
  get _formValue() {
    return this.value;
  }
  formResetCallback() {
    this.value = this.#resetValue;
  }
  /**
   * (deprecated): use `value` instead
   */
  get selected() {
    return this.value;
  }
  set selected(val) {
    this.value = val;
  }
  #resetValue;
  #zuiOptions;
  #nodeObserver;
  static get styles() {
    return [super.styles, style$m];
  }
  /**
   * Index, numerical value for selected option
   */
  get selectedIndex() {
    return this._select?.selectedIndex ?? 0;
  }
  connectedCallback() {
    super.connectedCallback();
    this.#setupMutationObserver();
    let initValue = null;
    if (this.hasAttribute('value')) {
      initValue = this.getAttribute('value');
    } else if (this.hasAttribute('placeholder')) {
      initValue = null;
    } else if (this.querySelector('zui-option[selected]')) {
      const selectedOption = this.querySelector('zui-option[selected]');
      initValue = selectedOption.getAttribute('value') ?? selectedOption.textContent;
    } else if (this.querySelector('zui-option')) {
      const firstOption = this.querySelector('zui-option');
      initValue = firstOption.getAttribute('value') ?? firstOption.textContent;
    }
    this.#resetValue = initValue ?? '';
    this._setFormValue(initValue);
  }
  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    this.#defaultValue();
  }
  updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has('value')) {
      this._setFormValue(this.value);
      // TODO(pat): how does multiple select function?
      if (!this.multiple) {
        this._select.value = this.value;
      }
    }
  }
  render() {
    this.#zuiOptions = Array.from(this.querySelectorAll('zui-option'));
    const placeholderOption = this.placeholder ? this.#getPlaceholderOption() : null;
    return html`
      <div>
        <select
          class="${this.value || !this.placeholder ? '' : 'placeholder-selected'}"
          id="select"
          ?disabled="${this.disabled}"
          ?multiple="${this.multiple}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          @change="${this.#selectedUpdate}"
          part="control"
        >
          ${placeholderOption}
          ${repeat(this.#zuiOptions, element => {
      const val = element.value !== null && element.value !== undefined ? element.value : element.textContent;
      return html`
              <option
                value="${val}"
                ?selected="${this.#determineSelected(val)}"
                ?disabled="${element.disabled}"
                ?hidden="${element.hidden}"
                >${element.textContent}</option
              >
            `;
    })}
        </select>
        <zui-icon icon="zui-chevron-down"></zui-icon>
      </div>
    `;
  }
  /**
   * Return a `ZuiOptionElement` based upon number index value passed in
   * @param {number} index
   * @returns {ZuiOptionElement | null}
   */
  item(index) {
    return this.#zuiOptions?.[index] ?? null;
  }
  #getPlaceholderOption() {
    return html`
      <option
        value=""
        ?selected="${this.#determineSelected('')}"
        ?hidden="${this.required}"
        ?disabled="${this.required}"
        >${this.placeholder}</option
      >
    `;
  }
  #setupMutationObserver() {
    this.#nodeObserver = new MutationObserver(mutationsList => {
      for (const m of mutationsList) {
        if (m.type === 'childList') {
          this.requestUpdate();
        }
      }
    });
    this.#nodeObserver.observe(this, {
      childList: true
    });
  }
  #defaultValue() {
    const nativeSelect = this.shadowRoot.querySelector('select');
    this.value = nativeSelect.value;
  }
  #selectedUpdate(e) {
    if (!this.multiple) {
      this.value = e.target.value;
    } else {
      const options = Array.from(e.srcElement.options);
      const selectedValues = options.filter(option => option.selected).map(option => option.value);
      this.value = selectedValues.join(',');
    }
    e.preventDefault();
    e.stopPropagation();
    this._setFormValue(this.value);
    this.dispatchEvent(new CustomEvent('change', {
      detail: this.value,
      bubbles: true
    }));
  }
  #determineSelected(value) {
    if (this.multiple) {
      return this.value && this.value.split(',').includes(value);
    } else {
      return this.value === value;
    }
  }
}
__decorate$m([property({
  type: Boolean
})], ZuiSelectElement.prototype, "multiple", void 0);
__decorate$m([property({
  type: String
})], ZuiSelectElement.prototype, "placeholder", void 0);
__decorate$m([property({
  type: String,
  reflect: true
})], ZuiSelectElement.prototype, "selected", null);
__decorate$m([property({
  type: String
})], ZuiSelectElement.prototype, "value", void 0);
__decorate$m([property({
  type: Boolean
})], ZuiSelectElement.prototype, "required", void 0);
__decorate$m([query('select')], ZuiSelectElement.prototype, "_select", void 0);
window.customElements.define('zui-select', ZuiSelectElement);

const style$l = css`@supports(scrollbar-width: thin){.options-container-parent .options-container.skinny-scrollbar{scrollbar-color:var(--zui-gray-400) var(--zui-gray-50);scrollbar-width:thin}}@supports not (scrollbar-width: thin){.options-container-parent .options-container.skinny-scrollbar::-webkit-scrollbar{width:7px;height:7px;background-color:var(--zui-gray-50)}.options-container-parent .options-container.skinny-scrollbar::-webkit-scrollbar-thumb{background-color:var(--zui-gray-400);border-radius:10px}}.control{display:inline-block;width:100%;min-height:2.625rem;vertical-align:middle;padding:0 .625rem;background-color:#fff;border:.0625rem solid var(--zui-gray-200);border-radius:.25rem;font:inherit;color:inherit;transition:border 100ms ease-in-out,box-shadow 100ms ease-in-out;box-sizing:border-box;appearance:textfield}.control::-webkit-input-placeholder{color:var(--zui-gray-200)}.control::-moz-placeholder{opacity:1;color:var(--zui-gray-200)}.control:-moz-placeholder{opacity:1;color:var(--zui-gray-200)}.control:-ms-input-placeholder{color:var(--zui-gray-200)}.control:not(output):-moz-ui-invalid{box-shadow:none}.control:hover{border-color:var(--zui-gray-400)}.control:focus{border-color:var(--zui-blue-400);box-shadow:0 0 0 .0625rem var(--zui-blue-400);outline:none}[disabled].control{background-color:var(--zui-gray-100);cursor:not-allowed;color:var(--zui-gray-300)}[disabled].control:hover{border:.0625rem solid var(--zui-gray-200)}[readonly].control{outline:none}:host{contain:none;display:block}:host zui-icon{transition:color 100ms ease-in-out}.wrapper{position:relative;display:block}.wrapper.in-scrolling-dialog .options-container-parent{position:static;height:auto}.wrapper.in-scrolling-dialog .options-container-parent .options-container{position:static}.control{display:flex;flex-wrap:wrap;align-items:center;padding:.25rem .625rem .25rem .875rem}.control zui-icon{cursor:pointer;color:var(--zui-gray-400)}.control zui-icon[icon=zui-chevron-down]{transition:transform .3s ease-out}.control zui-icon[icon=zui-chevron-down].hidden{display:none}.control zui-spinner{--paper-spinner-stroke-width: 0.125rem;--zui-spinner-size: 1.25rem;width:1.25rem;height:1.25rem;margin:0 .75rem}.control.focused{border-color:var(--zui-blue-400);box-shadow:0 0 0 .0625rem var(--zui-blue-400);outline:none}.control.focused zui-icon[icon=zui-chevron-down]{color:var(--zui-gray);transform:rotate(180deg)}.control .input{display:flex;width:5rem;flex-grow:1;align-items:center}.control .input input{display:flex;width:0;min-height:1.5rem;flex-grow:1;margin:.25rem .25rem .25rem 0;border:0;outline:none;font-family:inherit;font-size:inherit;color:inherit}.control .input input[readonly]{cursor:default}.control .input input::-webkit-input-placeholder{color:var(--zui-gray-200)}.control .input input::-moz-placeholder{opacity:1;color:var(--zui-gray-200)}.control .input input:-moz-placeholder{opacity:1;color:var(--zui-gray-200)}.control .input input:-ms-input-placeholder{color:var(--zui-gray-200)}.control .input input:not(output):-moz-ui-invalid{box-shadow:none}.control .input zui-icon[icon=zui-remove]{--zui-icon-size: 0.75rem;margin-right:.5rem}.control .input zui-icon[icon=zui-remove]:hover{color:var(--zui-gray)}.control .selection{display:flex;min-height:1.5rem;align-items:center;margin:.25rem .25rem .25rem 0;padding:0 .4375rem;background-color:var(--zui-gray-100);border-radius:.125rem;cursor:default}.control .selection zui-icon[icon=zui-remove]{--zui-icon-size: 0.625rem;margin-left:.625rem}.control .selection zui-icon[icon=zui-remove]:hover{color:var(--zui-gray)}.options-container-parent{position:absolute;height:0;z-index:1}.options-container-parent.hidden{display:none}.options-container-parent .options-container{position:absolute;max-height:19rem;overflow-y:hidden;padding:.3125rem 0;background-color:#fff;border-radius:0 0 .25rem .25rem;box-shadow:0 .0625rem .1875rem .0625rem rgba(0,0,0,.16);color:var(--zui-gray-700);transition:max-height .2s,padding .2s,box-shadow .2s}.options-container-parent .options-container.hidden{max-height:0;padding:0;box-shadow:none}.options-container-parent .options-container .option{display:flex;min-height:2.25rem;align-items:center;padding:.25rem .625rem;cursor:pointer}.options-container-parent .options-container .option.readonly{font-style:italic;cursor:default}.options-container-parent .options-container .option-content{display:flex;align-items:center}.options-container-parent .options-container .option zui-checkbox{--zui-checkbox-checkbox-margin: 0 0.8125rem 0 0;--zui-checkbox-label-margin: 0;display:flex;align-items:center;pointer-events:none}.options-container-parent .options-container .option zui-checkbox[checked]+.option-content{font-weight:600}.options-container-parent .options-container .option zui-icon{--zui-icon-size: 1rem;margin-right:0.8125rem}.options-container-parent .options-container .option.highlighted{background-color:var(--zui-gray-50)}.options-container-parent .options-container .option.disabled{outline:none;cursor:not-allowed;color:var(--zui-gray-300)}.options-container-parent .options-container .option.selected{font-weight:700}.options-container-parent .options-container .option.tag{border-top:.0625rem solid var(--zui-gray-100);font-style:italic;color:var(--zui-blue)}.options-container-parent .options-container .option .unique{font-weight:700}.options-container-parent .options-container .option.select-all{border-bottom:.0625rem solid var(--zui-gray-200)}.options-container-parent .options-container .option.select-all.sticky{position:sticky;top:0;z-index:2;padding-top:.5625rem;padding-bottom:.5625rem;background-color:#fff}.options-container-parent .options-container .option.select-all:hover{background-color:var(--zui-gray-50)}.options-container-parent .options-container .group-label{display:block;margin-top:1.25rem;padding:0 .625rem .3125rem;font-size:.75rem;font-weight:700;text-transform:uppercase;cursor:default;color:var(--zui-gray-300)}.options-container-parent .options-container .group-label:first-of-type{margin-top:0}:host([multiselect]) .options-container-parent .options-container .group-label{margin-left:calc(0.8125rem + 1.25rem)}:host(:hover) .control{border-color:var(--zui-gray-400)}:host(:hover) .control zui-icon[icon=zui-chevron-down]{color:var(--zui-gray)}:host([disabled]){pointer-events:none}:host([disabled]) .control[disabled]{cursor:not-allowed}:host([disabled]) .control[disabled] zui-icon{color:var(--zui-gray)}:host([disabled]) .control[disabled] zui-icon:hover{color:var(--zui-gray) !important}:host([disabled]) .control[disabled] input{background-color:var(--zui-gray-100);cursor:not-allowed;color:var(--zui-gray)}:host(.xsmall){width:4.0625rem}:host(.small){width:12.5rem}:host(.medium){width:18.75rem}:host(.large){width:25rem}:host(.is-invalid) .control{border:.0625rem solid var(--zui-red);box-shadow:0 0 0 .0625rem var(--zui-red)}:host(.is-invalid) .control:hover{border-color:var(--zui-red-600);box-shadow:0 0 0 .0625rem var(--zui-red-600)}:host(.is-invalid) .control:focus{border-color:var(--zui-red-600);box-shadow:0 0 0 .0625rem var(--zui-red-600);outline:none}:host(.is-valid) .control{border:.0625rem solid var(--zui-green-400);box-shadow:0 0 0 .0625rem var(--zui-green-400)}:host(.is-valid) .control:hover{border-color:var(--zui-green);box-shadow:0 0 0 .0625rem var(--zui-green)}:host(.is-valid) .control:focus{border-color:var(--zui-green);box-shadow:0 0 0 .0625rem var(--zui-green);outline:none}`;

const escapeRegexChars = s => {
  return !s ? s : s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
};

var __decorate$l = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Use to create a selectable option that can be used within `<zui-select>` or `<zui-select-dropdown>`.
 * @element zui-option
 *
 * @slot - Default, unnamed slot; for inserting label text into `<zui-option>`; optionally, you can use the `label` attribute/property instead
 *
 * @event {CustomEvent} selectedchange - Event is dispatched when `<zui-option>` is selected or deselected; contains details regarding the `selected` state
 * @event {CustomEvent} updated - Event is dispatched when `<zui-option>` is updated; contains details regarding what properties changed
 */
class ZuiOptionElement extends ZuiBaseElement {
  constructor() {
    super(...arguments);
    /**
     * Sets a `value` for the option
     */
    this.value = undefined;
    /**
     * The label users will see as a choice, in a select dropdown
     */
    this.label = '';
    /**
     * Options `disabled` state
     */
    this.disabled = false;
    /**
     * Whether to hide the option from the list or not
     */
    this.hidden = false;
    /**
     * Determines if the `zui-option` is selected
     */
    this.selected = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateObserver = new MutationObserver(() => {
      // TODO(pat): we should tell zui-select that this option was updated; we shouldn't reach out directly to zui-select
      this.parentNode.requestUpdate();
    });
    this.updateObserver.observe(this, {
      attributes: true,
      attributeFilter: ['disabled', 'hidden'],
      childList: true
    });
  }
  updated(changedProperties) {
    this.dispatchEvent(new CustomEvent('updated', {
      detail: changedProperties,
      bubbles: true
    }));
  }
  render() {
    return html`<slot>${this.label}</slot>`;
  }
}
__decorate$l([property({
  type: String,
  reflect: true
})], ZuiOptionElement.prototype, "value", void 0);
__decorate$l([property({
  type: String
})], ZuiOptionElement.prototype, "label", void 0);
__decorate$l([property({
  type: Boolean,
  reflect: true
})], ZuiOptionElement.prototype, "disabled", void 0);
__decorate$l([property({
  type: Boolean
})], ZuiOptionElement.prototype, "hidden", void 0);
__decorate$l([property({
  type: Boolean,
  reflect: true
})], ZuiOptionElement.prototype, "selected", void 0);
window.customElements.define('zui-option', ZuiOptionElement);
class ZuiOptionObject extends EventTarget {
  #selected = false;
  get selected() {
    return this.#selected;
  }
  set selected(val) {
    this.#selected = val;
    this.dispatchEvent(new CustomEvent('selectedchange', {
      bubbles: true,
      detail: {
        selected: val
      }
    }));
  }
  constructor(label, value, disabled, group, selected) {
    super();
    this.label = label;
    this.value = value || label;
    this.disabled = disabled ?? false;
    this.group = group;
    this.#selected = selected ?? false;
  }
}

var __decorate$k = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Functions as a way to create category labels for grouping similar options in `<zui-select-dropdown>`.
 * @element zui-option-group
 *
 * @slot - Default, unnamed slot; for inserting `<zui-option>` elements into a `<zui-option-group>` in order to group them under a single label
 */
class ZuiOptionGroupElement extends ZuiBaseElement {
  constructor() {
    super(...arguments);
    /**
     * The group or category label, for selectable options
     */
    this.label = '';
  }
  render() {
    return html`<slot></slot>`;
  }
}
__decorate$k([property({
  type: String,
  reflect: true
})], ZuiOptionGroupElement.prototype, "label", void 0);
window.customElements.define('zui-option-group', ZuiOptionGroupElement);

var __decorate$j = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * `<zui-select-dropdown>` is an evolved `<zui-select>` that supports multiselect, typeahead, tagging, grouping, and asynchronous option retrieval. Great for longer imperatively created lists.
 * @element zui-select-dropdown
 *
 * @event change - Event dispatches on selected option(s) changed
 * @event tag - Event dispatches on new option tagged; event contains `value` details
 * @event query - Event dispatches on search term typed in the input. If debounce > 0, only fires after timeout; event contains `value` details
 *
 * @slot - Default, unnamed slot; for inserting `<zui-option>` or `<zui-option-group>` elements into `<zui-select-dropdown>`
 *
 * @attr {string | null} [name=null] - The name of this element that is associated with form submission
 * @attr {boolean} [disabled=false] - Represents whether a user can make changes to this element; if true, the value of this element will be excluded from the form submission
 * @attr {boolean} [readonly=false] - Represents whether a user can make changes to this element; the value of this element will still be included in the form submission
 * @attr {boolean} [autofocus=false] - If true, this element will be focused when connected to the document
 *
 * @prop {string | null} [name=null] - The name of this element that is associated with form submission
 * @prop {boolean} [disabled=false] - Represents whether a user can make changes to this element; if true, the value of this element will be excluded from the form submission
 * @prop {boolean} [readOnly=false] - Represents whether a user can make changes to this element; the value of this element will still be included in the form submission
 * @prop {boolean} [autofocus=false] - If true, this element will be focused when connected to the document
 *
 * @csspart control - For custom styling of the underlying select control; this is exposed as a CSS shadow part and can be accessed with `::part(control)`
 */
class ZuiSelectDropdownElement extends ZuiFormAssociatedElement {
  constructor() {
    super(...arguments);
    /**
     * Text to show within input when no options selected
     */
    this.placeholder = null;
    /**
     * Allow multiple options to be selected
     */
    this.multiple = false;
    /**
     * Allow typing a search term within the input to filter options
     */
    this.searchable = false;
    /**
     * Delay in milliseconds after typing before retrieving options
     */
    this.debounce = null;
    /**
     * Emphasize parts of the option text after typing that were not typed
     */
    this.typeahead = false;
    /**
     * Allow creating the desired option after typing if no option matches the search term
     */
    this.taggable = false;
    /**
     * Text to show on the taggable option before the search term
     */
    this.taggableLabel = 'Create';
    /**
     * Only applicable when labelling option groups. If there are options untied to a group label, file under this label; defaults to "Other" if null.
     */
    this.ungroupedLabel = null;
    /**
     * The message to appear if a group contains no options
     */
    this.noResultsMessage = null;
    /**
     * If set, can provide hints to form validation and prevent users from clearing out a single select
     */
    this.required = false;
    /**
     * Provides the user-facing text in the dropdown list for the "Select all" option.
     * Required when allowing a user to select all options with `enable-select-all` / `enableSelectAll`.
     */
    this.selectAllOptionLabel = null;
    /**
     * Provides the user-facing text in the result container when the "Select all" option is selected.
     * Required when allowing a user to select all options with `enable-select-all` / `enableSelectAll`.
     */
    this.selectAllResultLabel = null;
    /**
     * Optional property used alongside `enable-select-all` / `enableSelectAll` to control the value selected when "Select all" is selected.
     * If set, and the user has selected all value, the value of this property will be included in the selection list.
     */
    this.selectAllOptionValue = null;
    /**
     * Controls the maximum number of results to display in the result container.
     * Must be used with `truncated-result-message-format` / `truncatedResultMessageFormat`.
     */
    this.maximumResultsDisplayCount = 5;
    /**
     * Controls how the truncated result option is rendered.
     * Can use `{0}` to merge in the number of results that were not displayed.
     * @example "{0} more"
     */
    this.truncatedResultMessageFormat = null;
    this.#open = false;
    this.#options = [];
    this.#optionGroups = [];
    this.#selectedOptions = [];
    this._highlightedIndex = undefined;
    this.#inputTimeout = null;
    this.#preventInputUpdate = false;
    this.#loadingOptions = false;
    this.#dropdownMaxHeight = 304;
    this.#dropdownOptionHeight = 36;
    this.#dropdownGroupHeaderHeight = 24;
    this.#dropdownGroupHeaderMargin = 20;
    this.#dropdownPadding = 5;
    // hack to defer the change event from being fired when nothing has changed on iniitial render
    this.#initialized = false;
    this.#allSelected = false;
    this.#enableSelectAllOverride = false;
    this.#enableSelectAll = false;
    this.#hasEnteredQuery = false;
  }
  get _focusControlSelector() {
    return '.control';
  }
  get _formValue() {
    if (this.#selectedValues.length || this.allSelected) {
      return this.allSelected && this.enableSelectAllOverride ? [this.selectAllOptionValue] : this.#selectedValues;
    } else {
      return null;
    }
  }
  /**
   * When enabled, the "Select all" feature can be utilized. Note: this only applies when `multiple` is true
   */
  get enableSelectAll() {
    return this.#isSelectAllValid;
  }
  set enableSelectAll(val) {
    const oldVal = this.#enableSelectAll;
    this.#enableSelectAll = val;
    this.requestUpdate('enableSelectAll', oldVal);
  }
  /**
   * When enabled, when a user indicates to "select all", then all options will be selected,
   * the `selectAllResultLabel` will be rendered alone in the result container, and the user will be unable to deselect individual options until they deselect "select all".
   */
  get enableSelectAllOverride() {
    return this.#enableSelectAllOverride;
  }
  set enableSelectAllOverride(val) {
    const oldVal = this.#enableSelectAllOverride;
    this.#enableSelectAllOverride = val;
    this.requestUpdate('enableSelectAllOverride', oldVal);
  }
  /**
   * Determines if all options are selected
   */
  get allSelected() {
    return this.enableSelectAll && (this.#allSelected || !this.enableSelectAllOverride && this.#selectedOptions.length === this.#zuiOptions.length);
  }
  #open;
  #options;
  #optionGroups;
  #selectedOptions;
  #inputTimeout;
  #preventInputUpdate;
  #loadingOptions;
  #dropdownMaxHeight;
  #dropdownOptionHeight;
  #dropdownGroupHeaderHeight;
  #dropdownGroupHeaderMargin;
  #dropdownPadding;
  // hack to defer the change event from being fired when nothing has changed on iniitial render
  #initialized;
  #allSelected;
  #enableSelectAllOverride;
  #enableSelectAll;
  #hasEnteredQuery;
  get _query() {
    return this._input?.value;
  }
  /**
   * Represents if the "Select all" feature can be utilized
   */
  get #isSelectAllValid() {
    return !!(this.multiple && this.#enableSelectAll && this.selectAllOptionLabel && (!this.enableSelectAllOverride || this.selectAllOptionValue && this.selectAllResultLabel));
  }
  get #isTruncationValid() {
    return !!(this.multiple && this.truncatedResultMessageFormat && this.maximumResultsDisplayCount > 0);
  }
  get type() {
    return this.multiple ? 'select-multiple' : 'select-one';
  }
  get options() {
    this.#zuiOptions.forEach(o => {
      if (o.value) {
        o.selected = this.#selectedValues.includes(o.value);
      }
    });
    return this.#zuiOptions;
  }
  get value() {
    let value = '';
    if (this.#selectedOptions.length > 0) {
      value = this.#selectedOptions[0]?.value ?? '';
    }
    return value;
  }
  /**
   * @ignore
   */
  set value(_val) {
    /* eslint-disable no-console */
    console.warn('Setting value on <zui-select-dropdown> is not supported.');
  }
  /**
   * Returns the selected options as an array of `ZuiOptionObject` objects. See {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedOptions | selectedOptions} for browser-native documentation.
   */
  get selectedOptions() {
    return [...this.#selectedOptions];
  }
  get #zuiOptions() {
    return Array.from(this.querySelectorAll('zui-option'));
  }
  get #zuiOptionGroups() {
    return Array.from(this.querySelectorAll('zui-option-group'));
  }
  get #selectedValues() {
    return this.#selectedOptions.map(o => this.#getOptionValue(o));
  }
  get #anySelected() {
    return this.#selectedValues.length > 0;
  }
  get #hasOneAvailableOption() {
    return this._optionsLength === 1 && (this.#canCreateOption || !this.#optionDisabled(this.#options[0]));
  }
  get #singleSelect() {
    return !this.multiple;
  }
  get #canCreateOption() {
    return this.taggable && this._query && (this.multiple || !this.#anySelected) && !this.#options.some(o => {
      this.#getOptionText(o)?.localeCompare(this._query, undefined, {
        sensitivity: 'accent'
      }) === 0;
    });
  }
  get _optionsLength() {
    return this.#options.length + (this.#canCreateOption ? 1 : 0);
  }
  get _defaultOption() {
    return this.#singleSelect && !this.placeholder && this.#zuiOptions.length > 0 ? this.#getZuiOptionObject(this.#zuiOptions[0]) : null;
  }
  static get styles() {
    return [super.styles, style$l];
  }
  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    this.addEventListener('focusin', () => this.#toggleOpen(true));
    this.addEventListener('focusout', () => this.#toggleOpen(false));
    this.addEventListener('updated', async e => {
      if (e.target.matches('zui-option')) {
        await this.updateComplete;
        const newSelectedZuiOptions = this.#zuiOptions.filter(o => o.selected).map(o => this.#getZuiOptionObject(o));
        const oldSelectedZuiOptions = this.#selectedOptions.filter(o => this.#isZuiOption(o));
        const addedZuiOptions = newSelectedZuiOptions.filter(a => !oldSelectedZuiOptions.some(b => this.#getOptionValue(a) === this.#getOptionValue(b)));
        const removedZuiOptions = oldSelectedZuiOptions.filter(a => !newSelectedZuiOptions.some(b => this.#getOptionValue(a) === this.#getOptionValue(b)));
        if (addedZuiOptions.length > 0 || removedZuiOptions.length > 0) {
          const selectedOptions = [...this.#selectedOptions.filter(o => !this.#isZuiOption(o)), ...newSelectedZuiOptions];
          this.#setSelectedOptions(selectedOptions);
        }
      }
    });
    this.#setSelectedOptions(this.#zuiOptions.filter(o => o.selected).map(o => this.#getZuiOptionObject(o)));
  }
  updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has('multiple')) {
      this.#updateInputValue();
      this.requestUpdate();
    }
    this.#setOptionsContainerStyles();
  }
  formResetCallback() {
    this.#selectedOptions = [];
    // todo preserve initial state to reset to
  }
  /**
   * Return a `ZuiOptionElement` based upon number index value passed in
   * @param {number} index
   * @returns {ZuiOptionElement | null}
   */
  item(index) {
    return this.#options?.[index] ?? null;
  }
  /**
   * Clears all selected options
   */
  clear() {
    this.#selectedOptions = [];
    this._setFormValue(null);
    this.#hasEnteredQuery = false;
    if (this.#initialized) {
      this.#dispatchChangeEvent();
    }
    this.#updateInputValue();
    this.requestUpdate();
  }
  /**
   * Opens the dropdown. See {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/showPicker | showPicker} for browser-native comparisons.
   */
  showPicker() {
    this.#toggleOpen(true);
  }
  render() {
    // TODO: Temporary fix so the dropdown doesn't get cut off in zui-dialog (which wraps MWC dialog)
    // We will REMOVE this at a later date, so do not rely on it!
    // See MR for more details: https://gitlab.com/zywave/devkit/web-sdk/zui/-/merge_requests/1123
    const isInScrollingDialog = !!this.closest('zui-dialog')?.shadowRoot?.querySelector('dialog.scrolling');
    let selectAllOption;
    if (this.enableSelectAll && !this._query) {
      selectAllOption = html`
        <div
          tabindex="-1"
          data-value="${this.selectAllOptionValue}"
          class="option select-all ${classMap({
        selected: this.allSelected,
        highlighted: this._highlightedIndex === -1,
        sticky: this.enableSelectAllOverride
      })}"
          @pointerdown="${() => (this._highlightedIndex = -1, this.requestUpdate())}"
          @pointerover="${() => (this._highlightedIndex = -1, this.requestUpdate())}"
          @pointerout="${() => this.#highlightIndex(undefined)}"
        >
          <zui-checkbox @focus="${() => this.#toggleOpen(false)}" ?checked="${this.allSelected}"></zui-checkbox>
          <div class="option-content">${this.selectAllOptionLabel}</div>
        </div>
      `;
    } else {
      selectAllOption = nothing;
    }
    return html`
      <div class="wrapper ${classMap({
      'in-scrolling-dialog': isInScrollingDialog
    })}" tabindex="-1">
        <div
          class="control"
          tabindex="-1"
          ?disabled="${this.disabled}"
          @focus="${e => this.#preventIfDisabled(e)}"
          @keydown="${() => this.requestUpdate()}"
          part="control"
        >
          ${this.#renderSelectedOptions()}
          <div class="input">
            ${this.#renderInput()}${this.#renderSpinner()}${this.#renderRemoveButton()}${this.#renderChevron()}
          </div>
        </div>
        <div
          class="options-container-parent ${classMap({
      hidden: this.readOnly
    })}"
          tabindex="-1"
          @pointerdown="${e => this._highlightedIndex !== undefined ? this.#selectHighlightedOption() : e.preventDefault()}"
        >
          <div
            class="${this.#getOptionsContainerClass()}"
            @pointerdown="${e => e.preventDefault()}"
            tabindex="-1"
          >
            ${selectAllOption}
            ${this.#optionGroups.length > 0 ? repeat(this.#optionGroups, group => this.#renderGroup(group)) : repeat(this.#options, (option, index) => this.#renderOption(option, index))}
            ${this.#renderCreateNewOption()}
          </div>
        </div>
        <div style="display: none">
          <slot></slot>
        </div>
      </div>
    `;
  }
  #renderSelectedOptions() {
    if (!this.multiple) {
      return nothing;
    }
    if (this.enableSelectAllOverride && this.allSelected) {
      return html`<div class="selection all-selected" @pointerdown="${e => e.preventDefault()}">
        ${this.selectAllResultLabel}<zui-icon
          icon="zui-remove"
          @click="${() => this.#toggleSelectAll(false)}"
        ></zui-icon>
      </div>`;
    }
    const items = this.#isTruncationValid ? this.#selectedOptions.slice(0, this.maximumResultsDisplayCount) : this.#selectedOptions;
    let truncatedSelection;
    if (this.#isTruncationValid && this.#selectedOptions.length > this.maximumResultsDisplayCount) {
      const truncatedCount = this.#selectedOptions.length - this.maximumResultsDisplayCount;
      const truncatedMessage = this.truncatedResultMessageFormat.replace('{0}', truncatedCount.toString());
      truncatedSelection = html`<div class="selection truncated">${truncatedMessage}</div>`;
    } else {
      truncatedSelection = nothing;
    }
    return html`
      ${repeat(items, selection => html`
            <div class="selection" @pointerdown="${e => e.preventDefault()}">
              ${this.#getOptionText(selection)}${this.#renderRemoveButton(selection)}
            </div>
          `)}
      ${truncatedSelection}
    `;
  }
  #renderInput() {
    return html`
      <input
        placeholder="${this.#singleSelect || !this.#anySelected ? this.placeholder || '' : ''}"
        ?disabled="${this.disabled}"
        ?readonly="${!this.searchable}"
        @input="${this.#handleInput}"
        @keydown="${e => this.#handleKeydown(e)}"
      />
    `;
  }
  #renderSpinner() {
    return this.#loadingOptions ? html`<zui-spinner active></zui-spinner>` : nothing;
  }
  #renderRemoveButton(selection) {
    return selection || this.#singleSelect && this.placeholder && this.#anySelected && !this.required ? html`
          <zui-icon
            icon="zui-remove"
            @pointerdown="${e => this.#preventIfDisabled(e, () => {
      this.#removeSelectionFromInterface(selection);
      e.preventDefault();
    })}"
          ></zui-icon>
        ` : nothing;
  }
  #renderChevron() {
    return html`
      <zui-icon
        icon="zui-chevron-down"
        class="${classMap({
      hidden: this.readOnly
    })}"
        @pointerdown="${e => e.preventDefault()}"
        @pointerup="${e => {
      this.#preventIfDisabled(e, () => this.#toggleOpen(!this.#open));
    }}"
      ></zui-icon>
    `;
  }
  #renderNoResultsMessage(shouldRender) {
    return shouldRender && this.#open ? html`<span class="option readonly">${this.noResultsMessage || 'No results'}</span>` : nothing;
  }
  #renderGroup(group) {
    const map = this.#options.filter(o => o.group === group).map(option => {
      return {
        index: this.#options.findIndex(o => option === o),
        option: option
      };
    }).filter(temp => temp.index > -1);
    const groupLabel = group === undefined ? this.ungroupedLabel || 'Other' : group;
    return html`
      <span class="group-label">${groupLabel}</span>
      ${repeat(map, temp => this.#renderOption(temp.option, temp.index))}
      ${this.#renderNoResultsMessage(map.length === 0)}
    `;
  }
  #renderOption(option, index, content) {
    content = content || (!option ? nothing : this.multiple ? this.#renderMultiselectOptionContent(option) : this.#renderOptionContent(option));
    return html`
      <div
        tabindex="-1"
        class="${this.#getOptionClass(option, index)}"
        @pointerdown="${e => this.#preventIfDisabled(e, () => this._highlightedIndex = index, this.#optionDisabled(option))}"
        @pointerover="${e => this.#preventIfDisabled(e, () => this.#highlightIndex(index), this.#optionDisabled(option))}"
        @pointerout="${() => this.#highlightIndex(undefined)}"
      >
        ${content}
      </div>
    `;
  }
  #renderOptionContent(option) {
    const element = this.#getOptionElement(option);
    if (this.typeahead) {
      const regex = new RegExp('(' + (escapeRegexChars(this._query) || '.*') + ')', 'i');
      const textNodes = this.#getTextNodes(element, []);
      for (const textNode of textNodes) {
        const html = textNode.nodeValue.split(regex).filter(s => s.length > 0).map(s => regex.test(s) ? s : `<span class="unique">${s}</span>`).join('');
        textNode.replaceWith(this.#createSpan(html));
      }
    }
    return html`${unsafeHTML(element?.innerHTML)}`;
  }
  #renderMultiselectOptionContent(option) {
    // these checkboxes should never have focus. if they do, assume the user tabbed and meant to tab off the dropdown
    return html`
      <zui-checkbox @focus="${() => this.#toggleOpen(false)}" ?checked="${this.#optionSelected(option)}"></zui-checkbox>
      <div class="option-content">${this.#renderOptionContent(option)}</div>
    `;
  }
  #renderCreateNewOption() {
    return this.#canCreateOption ? this.#renderOption(undefined, this.#options.length, html`<zui-icon icon="zui-add"></zui-icon> ${this.taggableLabel} "${this._query}"`) : nothing;
  }
  #setOptionsContainerStyles() {
    let optionsCount = this.#optionGroups.length > 0 ? this.#optionGroups.map(g => Math.max(this.#options.filter(o => o.group === g).length, 1)).reduce((acc, cur) => acc + cur, 0) + (this.#canCreateOption ? 1 : 0) : this._optionsLength;
    optionsCount += this.enableSelectAll ? 1 : 0;
    const dropdownHeight = optionsCount * this.#dropdownOptionHeight + this.#optionGroups.length * this.#dropdownGroupHeaderHeight + Math.max(this.#optionGroups.length - 1, 0) * this.#dropdownGroupHeaderMargin + this.#dropdownPadding * 2;
    const containerHeight = optionsCount > 0 ? Math.min(dropdownHeight, this.#dropdownMaxHeight) : 0;
    const controlTop = this._control ? this._control.getBoundingClientRect().top : 0;
    const spaceBelow = window.innerHeight - controlTop - this._control.offsetHeight;
    const shouldDisplayAbove = containerHeight > spaceBelow && controlTop > spaceBelow;
    const controlHeight = (this._control.offsetHeight || 0) + 1;
    this._optionsContainer.style.padding = this.#open && !this.enableSelectAllOverride && optionsCount > 0 ? `${this.#dropdownPadding}px 0` : '0';
    this._optionsContainer.style.overflowY = dropdownHeight > this.#dropdownMaxHeight ? 'scroll' : 'hidden';
    this._optionsContainerParent.style.top = (this._control.offsetTop || 0) + controlHeight + 'px';
    this._optionsContainerParent.style.left = (this._control.offsetLeft || 0) + 'px';
    this._optionsContainer.style.width = (this._control.offsetWidth || 0) + 'px';
    this._optionsContainer.style.bottom = shouldDisplayAbove ? controlHeight + 1 + 'px' : '';
  }
  #getOptionsContainerClass() {
    const classes = ['options-container', 'skinny-scrollbar'];
    if (this._optionsLength === 0) {
      classes.push('hidden');
    }
    return classes.join(' ');
  }
  #getOptionClass(option, index) {
    const classes = ['option'];
    if (this.#optionDisabled(option)) {
      classes.push('disabled');
    } else if (this._highlightedIndex === index) {
      classes.push('highlighted');
    }
    if (this.#optionSelected(option)) {
      classes.push('selected');
    }
    if (index === this.#options.length) {
      classes.push('tag');
    }
    if (this.allSelected && this.enableSelectAllOverride) {
      classes.push('readonly');
    }
    return classes.join(' ');
  }
  #createSpan(innerHTML) {
    const element = document.createElement('span');
    element.innerHTML = innerHTML;
    return element;
  }
  #getOptionElement(option) {
    let element;
    if (option instanceof ZuiOptionObject) {
      element = this.#createSpan(option.label);
    } else if (option instanceof ZuiOptionElement) {
      element = option;
    }
    return element;
  }
  #getTextNodes(node, textNodes) {
    textNodes = textNodes || [];
    if (node?.hasChildNodes) {
      for (let i = 0; i < node.childNodes.length; i++) {
        const childNode = node.childNodes[i];
        if (childNode.nodeType === Node.TEXT_NODE) {
          textNodes = [...textNodes, childNode];
        } else {
          textNodes = this.#getTextNodes(childNode, textNodes);
        }
      }
    }
    return textNodes;
  }
  #getOptionText(option) {
    return this.#getTextNodes(this.#getOptionElement(option), []).map(n => n.nodeValue).join('');
  }
  #getOptionValue(option) {
    return option?.value || this.#getOptionText(option);
  }
  #getZuiOptionObject(option) {
    if (option instanceof ZuiOptionObject) {
      return option;
    } else if (option instanceof ZuiOptionElement) {
      const zuiOption = option;
      return new ZuiOptionObject(zuiOption.innerHTML, zuiOption.value, zuiOption.disabled, zuiOption.parentElement instanceof ZuiOptionGroupElement ? zuiOption.parentElement.label : undefined);
    } else if (option && typeof option === 'object') {
      const zuiOptionObject = option;
      return new ZuiOptionObject(zuiOptionObject.label !== undefined ? `${zuiOptionObject.label}` : `${zuiOptionObject.value}`, zuiOptionObject.value !== undefined ? `${zuiOptionObject.value}` : `${zuiOptionObject.label}`, !!zuiOptionObject.disabled, zuiOptionObject.group !== undefined ? `${zuiOptionObject.group}` : undefined);
    } else {
      return new ZuiOptionObject(`${option}`);
    }
  }
  async #getOptions() {
    const queryHandler = (this.queryHandler ?? this.#defaultQueryHandler).bind(this);
    let options = this.#zuiOptions.map(o => this.#getZuiOptionObject(o));
    this.#loadingOptions = true;
    this.requestUpdate();
    let query;
    if (this.#hasEnteredQuery) {
      query = this._query;
    } else {
      query = null;
    }
    const queryHandlerResults = await queryHandler(query, options);
    this.#loadingOptions = false;
    // don't re-open dropdown if async results returned after dropdown closed
    if (this._control?.classList.contains('focused')) {
      options = Array.isArray(queryHandlerResults) ? queryHandlerResults.map(o => this.#getZuiOptionObject(o)) : [];
      const optionGroups = this.#zuiOptionGroups.map(g => g.label);
      if (optionGroups.length > 0 || options.some(o => o.group !== undefined)) {
        options.forEach(o => {
          if (!optionGroups.includes(o.group)) {
            optionGroups.push(o.group);
          }
        });
      }
      this.#options = options;
      for (const o of this.#options) {
        o.addEventListener('selectedchange', e => {
          const selected = e.target.selected;
          this.#toggleOptionSelected(e.target, selected);
        });
      }
      this.#optionGroups = optionGroups;
      // if only one option, highlight it so that it's automatically selected on blur
      this._highlightedIndex = this.#hasOneAvailableOption ? 0 : undefined;
    }
    this.requestUpdate();
  }
  #optionDisabled(option) {
    return this.allSelected && this.enableSelectAllOverride || this.#options.filter(o => o.disabled).some(o => this.#getOptionValue(o) === this.#getOptionValue(option));
  }
  #optionSelected(option) {
    return this.allSelected || this.#selectedValues.some(v => v === this.#getOptionValue(option));
  }
  /**
   * Toggles an option in the list of selected options
   * @param option The option to toggle
   * @param selected An optional override, to force it to be selected or unselected
   */
  #toggleOptionSelected(option, selected) {
    const selectedOptions = this.multiple ? [...this.#selectedOptions] : [];
    option = option || (this.#anySelected ? this.#selectedOptions[this.#selectedOptions.length - 1] : undefined);
    if (this.#optionSelected(option) && (selected === undefined || !selected)) {
      // remove if was selected prior
      selectedOptions.splice(selectedOptions.findIndex(o => this.#getOptionValue(o) === this.#getOptionValue(option)), 1);
      this.#allSelected = false;
    } else if (option && (selected === undefined || selected)) {
      // add if wasn't selected prior
      selectedOptions.push(option);
    }
    this.#setSelectedOptions(selectedOptions);
  }
  async #toggleSelectAll(force) {
    if (this.enableSelectAll) {
      this.#allSelected = force ?? !this.#allSelected;
      this.#setSelectedOptions(this.#allSelected ? this.#zuiOptions : []);
      this.requestUpdate();
      await this.updateComplete;
    }
  }
  #removeSelectionFromInterface(selection) {
    if (this.multiple) {
      this.#preventInputUpdate = true;
    }
    this.#toggleOptionSelected(selection);
    if (this.#open) {
      this.#getOptions();
    }
  }
  #highlightNextOption(downArrowKey) {
    if (this.#hasOneAvailableOption) {
      this.#highlightIndex(0);
    } else if (this._optionsLength > 1) {
      // if hitting down on the keypad, and no index selected OR the last option is highlighted,
      // and the first option is a fake option for select all, select it
      if ((this._highlightedIndex === undefined || this._highlightedIndex === this._optionsLength - 1) && this.enableSelectAll && downArrowKey) {
        this.#highlightIndex(-1);
      } else if (this._highlightedIndex === 0 && !downArrowKey) {
        // if hitting up on the keypoad, and the currently selected option is the first real option,
        // select the fake select all option
        this.#highlightIndex(-1);
      } else {
        const start = this._highlightedIndex === undefined || this._highlightedIndex === -1 ? downArrowKey ? -1 : 0 : this._highlightedIndex;
        const len = this._optionsLength;
        for (let i = 1; i < len; i++) {
          const index = ((downArrowKey ? start + i : start - i) % len + len) % len;
          if (!this.#optionDisabled(this.#options[index])) {
            this.#highlightIndex(index);
            break;
          }
        }
      }
    }
  }
  #scrollToOption(keyDown) {
    if (this._highlightedIndex !== undefined) {
      let selectedOption;
      if (this._highlightedIndex > -1) {
        const options = this._optionsContainer.querySelectorAll('.option:not(.readonly)');
        selectedOption = options[this._highlightedIndex];
      } else if (this.enableSelectAll) {
        selectedOption = this._optionsContainer.querySelector('.option.select-all');
      }
      const selectedPosition = selectedOption.offsetTop;
      const lastVisiblePosition = this.#dropdownMaxHeight - this.#dropdownOptionHeight;
      if (selectedPosition > this._optionsContainer.scrollTop + lastVisiblePosition || selectedPosition < this._optionsContainer.scrollTop) {
        let scrollTop = keyDown ? lastVisiblePosition : 0;
        // Don't cut the last option off if it's selected
        if (keyDown && this._highlightedIndex === this._optionsLength) {
          scrollTop -= this.#dropdownOptionHeight;
        }
        this._optionsContainer.scrollTop = selectedPosition - scrollTop;
      }
    }
  }
  #selectHighlightedOption() {
    if (this.multiple) {
      this.#preventInputUpdate = true;
    }
    if (this._highlightedIndex !== undefined) {
      if (this._highlightedIndex === -1) {
        this.#toggleSelectAll();
      } else if (this._highlightedIndex < this.#options.length) {
        const highlightedOption = this.#options[this._highlightedIndex];
        if (!this.#optionSelected(highlightedOption) || this.multiple) {
          this.#toggleOptionSelected(highlightedOption);
        }
      } else {
        this.dispatchEvent(new CustomEvent('tag', {
          detail: this._query
        }));
      }
    }
    if (this.#singleSelect) {
      this.#toggleOpen(false);
    }
  }
  #setSelectedOptions(options) {
    if (!options.length && this._defaultOption) {
      options.push(this._defaultOption);
    } else if (this.#singleSelect) {
      options.splice(0, options.length - 1);
    }
    this.#selectedOptions = options;
    for (const option of this.#zuiOptions) {
      option.selected = options.some(o => this.#getOptionValue(o) === this.#getOptionValue(option));
    }
    this._setFormValue(this._formValue);
    if (this.#initialized) {
      this.#dispatchChangeEvent();
    }
    this.#initialized = true;
    this.#updateInputValue();
    this.#hasEnteredQuery = false;
    this.requestUpdate();
  }
  #clearOptions() {
    this._highlightedIndex = undefined;
    this.#options = [];
    this.requestUpdate();
  }
  #handleKeydown(e) {
    if (this._optionsLength > 0) {
      const downArrowKey = e.key === 'ArrowDown' || e.key === 'Down';
      const upArrowKey = e.key === 'ArrowUp' || e.key === 'Up';
      if (downArrowKey || upArrowKey) {
        e.preventDefault();
        this.#highlightNextOption(downArrowKey);
        this.#scrollToOption(downArrowKey);
      } else if (e.key === 'Enter') {
        this.#selectHighlightedOption();
        this.#toggleOpen(this.multiple);
      } else if (e.key === 'Escape') {
        this.#toggleOpen(false);
      }
    }
    if (e.key === 'Backspace' && this._input?.selectionStart === 0 && this.#anySelected) {
      this.#preventInputUpdate = true;
      this.#removeSelectionFromInterface();
    }
  }
  #handleInput() {
    if (this.#singleSelect && this.#anySelected && this.#hasEnteredQuery && !this._query) {
      this.#preventInputUpdate = true;
      this.#toggleOptionSelected();
      this.#clearOptions();
    }
    this.#inputTimeout && window.clearTimeout(this.#inputTimeout);
    this.#inputTimeout = window.setTimeout(() => {
      this.#hasEnteredQuery = true;
      this.#getOptions();
      this.dispatchEvent(new CustomEvent('query', {
        detail: this._query
      }));
    }, this.debounce || 0);
  }
  #updateInputValue() {
    if (this._input && !this.#preventInputUpdate) {
      if (this.#singleSelect && this.#anySelected) {
        this._input.value = this.#getOptionText(this.#selectedOptions[0]);
      } else {
        this._input.value = '';
      }
    }
    this.#preventInputUpdate = false;
  }
  #setFocused(on) {
    if (this._control) {
      if (on) {
        this._control.classList.add('focused');
        this.focus();
        this._input.focus();
      } else {
        this._control.classList.remove('focused');
        this.blur();
        this._input.blur();
      }
    }
  }
  async #toggleOpen(open) {
    if (this.#open !== open) {
      this.#open = open;
      this.#setFocused(open);
      if (open) {
        await this.#getOptions();
      } else {
        this.#hasEnteredQuery = false;
        this.#clearOptions();
        this.#updateInputValue();
      }
    }
  }
  #highlightIndex(index) {
    this._highlightedIndex = index;
    this.requestUpdate();
  }
  #preventIfDisabled(e, f, disabled) {
    disabled = disabled === undefined ? this.disabled : disabled;
    if (disabled) {
      e.preventDefault();
    } else if (f) {
      f();
    }
  }
  #defaultQueryHandler(query, options) {
    let results = options || [];
    if (this.searchable && query) {
      const regex = new RegExp('(' + (escapeRegexChars(query) || '.') + ')', 'i');
      results = results.filter(o => regex.test(this.#getOptionText(o)));
    }
    return results;
  }
  #isZuiOption(option) {
    return this.#zuiOptions.some(o => this.#getOptionValue(o) === this.#getOptionValue(option));
  }
  async #dispatchChangeEvent() {
    await this.updateComplete;
    let detail = this._formValue;
    if (this._formValue && !this.multiple) {
      detail = this._formValue[0];
    }
    this.dispatchEvent(new CustomEvent('change', {
      detail,
      bubbles: true
    }));
  }
}
__decorate$j([property({
  type: String,
  reflect: true
})], ZuiSelectDropdownElement.prototype, "placeholder", void 0);
__decorate$j([property({
  type: Boolean,
  reflect: true
})], ZuiSelectDropdownElement.prototype, "multiple", void 0);
__decorate$j([property({
  type: Boolean,
  reflect: true
})], ZuiSelectDropdownElement.prototype, "searchable", void 0);
__decorate$j([property({
  type: Number,
  reflect: true
})], ZuiSelectDropdownElement.prototype, "debounce", void 0);
__decorate$j([property({
  type: Boolean,
  reflect: true
})], ZuiSelectDropdownElement.prototype, "typeahead", void 0);
__decorate$j([property({
  type: Boolean,
  reflect: true
})], ZuiSelectDropdownElement.prototype, "taggable", void 0);
__decorate$j([property({
  type: String,
  attribute: 'taggable-label',
  reflect: true
})], ZuiSelectDropdownElement.prototype, "taggableLabel", void 0);
__decorate$j([property({
  type: String,
  attribute: 'ungrouped-label',
  reflect: true
})], ZuiSelectDropdownElement.prototype, "ungroupedLabel", void 0);
__decorate$j([property({
  type: String,
  attribute: 'no-results-message',
  reflect: true
})], ZuiSelectDropdownElement.prototype, "noResultsMessage", void 0);
__decorate$j([property({
  type: Boolean
})], ZuiSelectDropdownElement.prototype, "required", void 0);
__decorate$j([property({
  type: Boolean,
  attribute: 'enable-select-all'
})], ZuiSelectDropdownElement.prototype, "enableSelectAll", null);
__decorate$j([property({
  type: String,
  attribute: 'select-all-option-label'
})], ZuiSelectDropdownElement.prototype, "selectAllOptionLabel", void 0);
__decorate$j([property({
  type: String,
  attribute: 'select-all-result-label'
})], ZuiSelectDropdownElement.prototype, "selectAllResultLabel", void 0);
__decorate$j([property({
  type: String,
  attribute: 'select-all-option-value'
})], ZuiSelectDropdownElement.prototype, "selectAllOptionValue", void 0);
__decorate$j([property({
  type: Boolean,
  attribute: 'enable-select-all-override'
})], ZuiSelectDropdownElement.prototype, "enableSelectAllOverride", null);
__decorate$j([property({
  type: Number,
  attribute: 'maximum-results-display-count'
})], ZuiSelectDropdownElement.prototype, "maximumResultsDisplayCount", void 0);
__decorate$j([property({
  type: String,
  attribute: 'truncated-result-message-format'
})], ZuiSelectDropdownElement.prototype, "truncatedResultMessageFormat", void 0);
__decorate$j([property({
  type: Function,
  attribute: false
})], ZuiSelectDropdownElement.prototype, "queryHandler", void 0);
__decorate$j([query('.control')], ZuiSelectDropdownElement.prototype, "_control", void 0);
__decorate$j([query('input')], ZuiSelectDropdownElement.prototype, "_input", void 0);
__decorate$j([query('.options-container-parent')], ZuiSelectDropdownElement.prototype, "_optionsContainerParent", void 0);
__decorate$j([query('.options-container')], ZuiSelectDropdownElement.prototype, "_optionsContainer", void 0);
window.customElements.define('zui-select-dropdown', ZuiSelectDropdownElement);

const style$k = css`:host,:root{--zui-shell-topbar-global-height: 2.875rem;--zui-shell-topbar-app-height: 0.25rem;--zui-shell-topbar-app-height-collapsed: 0.25rem;--zui-shell-nav-width: 75%;--zui-shell-nav-width-collapsed: 3.375rem;--zui-shell-footer-height: 4.25rem}@media(min-width: 45em){:host,:root{--zui-shell-topbar-global-height: 3.75rem;--zui-shell-topbar-app-height: 2.25rem;--zui-shell-topbar-app-height-collapsed: 0.3125rem;--zui-shell-nav-width: 15.625rem}}@media(min-width: 64em){:host,:root{--zui-shell-footer-height: 3.0625rem}}:host{--zui-shell-banner-height: 0rem}.shell-wrap{display:block;background:var(--zui-shell-background, var(--zui-background, var(--zui-gray-50)))}`;

const screenBreakpointEventName = 'screenbreakpoint';
const navCollapseChangeEventName = 'navcollapsechange';
const appNameChangeEventName = 'appnamechange';
const pageScrollChangeEventName = 'topbarheightchange';
const bannerHeightChangeEventName = 'bannerheightchange';
const hasShellNavChangeEventName = 'hasshellnav';
const hasAppBarChangeEventName = 'hasappbar';
const mobileNavOpenChangeEventName = 'mobilenavopenchange';
class ZuiShellState extends EventTarget {
  static {
    this._instance = undefined;
  }
  get isMobile() {
    return this._isMobile;
  }
  get isTablet() {
    return this._isTablet;
  }
  get isDesktop() {
    return this._isDesktop;
  }
  get topBarHeight() {
    return this._topBarHeight;
  }
  set topBarHeight(val) {
    this._topBarHeight = val;
  }
  get bannerHeight() {
    return this._bannerHeight;
  }
  set bannerHeight(val) {
    const didChange = val !== this._bannerHeight;
    this._bannerHeight = val;
    if (didChange) {
      this.#publish(bannerHeightChangeEventName);
    }
  }
  get storedIsNavCollapsed() {
    const storedVal = localStorage.getItem(this.localStorageNavCollapsedKey);
    return storedVal !== undefined && storedVal !== null ? storedVal === 'true' : undefined;
  }
  set storedIsNavCollapsed(val) {
    const didChange = val !== this.storedIsNavCollapsed;
    localStorage.setItem(this.localStorageNavCollapsedKey, val.toString());
    if (didChange) {
      this.#publish(navCollapseChangeEventName);
    }
  }
  get tabletNavCollapseOverride() {
    return this._tabletNavCollapseOverride;
  }
  set tabletNavCollapseOverride(val) {
    const didChange = val !== this._tabletNavCollapseOverride;
    this._tabletNavCollapseOverride = val;
    if (didChange) {
      this.#publish(navCollapseChangeEventName);
    }
  }
  get isMobileNavOpen() {
    return this._isMobileNavOpen;
  }
  set isMobileNavOpen(val) {
    const didChange = val !== this._isMobileNavOpen;
    this._isMobileNavOpen = val;
    if (didChange) {
      this.#publish(mobileNavOpenChangeEventName);
    }
  }
  get privateAppName() {
    return this._appName;
  }
  set privateAppName(val) {
    const didChange = val !== this.privateAppName;
    this._appName = val;
    if (didChange) {
      this.#publish(appNameChangeEventName);
    }
  }
  get pageScroll() {
    return this._pageScroll;
  }
  set pageScroll(val) {
    const didChange = val !== this.pageScroll;
    this._pageScroll = val;
    if (didChange) {
      this.#publish(pageScrollChangeEventName);
    }
  }
  get bannerScroll() {
    return this._bannerScroll;
  }
  set bannerScroll(val) {
    const didChange = val !== this.bannerScroll;
    this._bannerScroll = val;
    if (didChange) {
      this.#publish(bannerHeightChangeEventName);
    }
  }
  get hasShellNav() {
    return this._hasShellNav;
  }
  set hasShellNav(val) {
    const didChange = val !== this.hasShellNav;
    this._hasShellNav = val;
    if (didChange) {
      this.#publish(hasShellNavChangeEventName);
    }
  }
  get hasAppBar() {
    return this._hasAppBar;
  }
  set hasAppBar(val) {
    const didChange = val !== this.hasAppBar;
    this._hasAppBar = val;
    if (didChange) {
      this.#publish(hasAppBarChangeEventName);
    }
  }
  constructor() {
    super();
    this._isMobileNavOpen = false;
    this._appName = '';
    this._pageScroll = false;
    this._bannerScroll = false;
    this._hasShellNav = false;
    this._hasAppBar = true;
    this._topBarHeight = undefined;
    this._bannerHeight = '0px';
    this._tabletNavCollapseOverride = undefined;
    this._isMobile = false;
    this._isTablet = false;
    this._isDesktop = true;
    this.localStorageNavCollapsedKey = 'ZUI-SHELL:NAV-COLLAPSED';
    const onePixelToEm = 1 / 16;
    const xSmallNumber = screenBreakpoints.xsmall;
    const RemoveEmxSmallNumber = xSmallNumber.replace('em', '');
    const minMediumMq = parseInt(RemoveEmxSmallNumber) + onePixelToEm + 'em';
    const mediumNumber = screenBreakpoints.medium;
    const RemoveEmMediumNumber = mediumNumber.replace('em', '');
    const maxMediumMq = parseInt(RemoveEmMediumNumber) - onePixelToEm + 'em';
    const smallMq = window.matchMedia(`(max-width: ${screenBreakpoints.xsmall})`);
    const mediumMq = window.matchMedia(`(min-width: ${minMediumMq}) and (max-width: ${maxMediumMq})`);
    const largeMq = window.matchMedia(`(min-width: ${screenBreakpoints.medium})`);
    this._isMobile = smallMq.matches;
    this._isTablet = mediumMq.matches;
    this._isDesktop = largeMq.matches;
    if (smallMq.addEventListener) {
      smallMq.addEventListener('change', e => {
      });
      mediumMq.addEventListener('change', e => {
      });
      largeMq.addEventListener('change', e => {
      });
    }
  }
  _mediaQueryListener(q, ref) {
    const oldValue = this[ref];
    this[ref] = q.matches;
    if (this[ref] && !oldValue) {
      // let the other fools catch up
      setTimeout(() => {
        this.#publish(screenBreakpointEventName);
      }, 1);
    }
  }
  static get instance() {
    return this._instance || (this._instance = new this());
  }
  #publish(eventName) {
    this.dispatchEvent(new CustomEvent(eventName));
  }
}

class ZuiShellBase extends ZuiBaseElement {
  get _state() {
    return ZuiShellState.instance;
  }
  get _isMobile() {
    return this._state.isMobile;
  }
  get _isTablet() {
    return this._state.isTablet;
  }
  get _isDesktop() {
    return this._state.isDesktop;
  }
  get _isNavCollapsed() {
    const storedVal = this._state.storedIsNavCollapsed;
    const tabletNavCollapseOverride = this._state.tabletNavCollapseOverride;
    if (this._isDesktop) {
      return storedVal !== undefined ? storedVal : false;
    } else if (this._isTablet) {
      return tabletNavCollapseOverride !== undefined ? tabletNavCollapseOverride : true;
    } else {
      return false;
    }
  }
  get _tabletNavCollapseOverride() {
    return this._state.tabletNavCollapseOverride;
  }
  set _tabletNavCollapseOverride(val) {
    this._state.tabletNavCollapseOverride = val;
  }
  set _storedIsNavCollapsed(val) {
    this._state.storedIsNavCollapsed = val;
  }
  get _appName() {
    return this._state.privateAppName;
  }
  set _appName(val) {
    this._state.privateAppName = val;
  }
  get _pageScroll() {
    return this._state.pageScroll;
  }
  set _pageScroll(val) {
    this._state.pageScroll = val;
  }
  get _bannerScroll() {
    return this._state.bannerScroll;
  }
  set _bannerScroll(val) {
    this._state.bannerScroll = val;
  }
  get _hasShellNav() {
    return this._state.hasShellNav;
  }
  set _hasShellNav(val) {
    this._state.hasShellNav = val;
  }
  get _hasAppBar() {
    return this._state.hasAppBar;
  }
  set _hasAppBar(val) {
    this._state.hasAppBar = val;
  }
  get _isMobileNavOpen() {
    return this._state.isMobileNavOpen;
  }
  set _isMobileNavOpen(val) {
    this._state.isMobileNavOpen = val;
  }
  get _topBarHeight() {
    return this._state.topBarHeight;
  }
  set _topBarHeight(val) {
    this._state.topBarHeight = val;
  }
  get _bannerHeight() {
    return this._state.bannerHeight;
  }
  set _bannerHeight(val) {
    this._state.bannerHeight = val;
  }
  constructor() {
    super();
    this._observeNavCollapseChange = false;
    this._observeAppNameChange = false;
    this._observePageScrollChange = false;
    this._observeBannerHeightChange = false;
    this._observeHasShellNav = false;
    this._observeHasAppBar = false;
    this._observeMobileNavOpenChange = false;
    this._observeNavCollapseChange = false;
    const onScreenBreakpointChange = () => this.onScreenBreakpointChange();
    const onNavCollapseChange = () => this.onNavCollapseChange();
    const onAppNameChange = () => this.onAppNameChange();
    const onPageScrollChange = () => this.onPageScrollChange();
    const onBannerScrollChange = () => this.onBannerScrollChange();
    const onHasShellNav = () => this.onHasShellNav();
    const onHasAppBar = () => this.onHasAppBar();
    const onMobileNavOpenChange = () => this.onMobileNavOpenChange();
    this._state.addEventListener(screenBreakpointEventName, onScreenBreakpointChange);
    this._state.addEventListener(navCollapseChangeEventName, onNavCollapseChange);
    this._state.addEventListener(appNameChangeEventName, onAppNameChange);
    this._state.addEventListener(pageScrollChangeEventName, onPageScrollChange);
    this._state.addEventListener(bannerHeightChangeEventName, onBannerScrollChange);
    this._state.addEventListener(hasShellNavChangeEventName, onHasShellNav);
    this._state.addEventListener(hasAppBarChangeEventName, onHasAppBar);
    this._state.addEventListener(mobileNavOpenChangeEventName, onMobileNavOpenChange);
  }
  onScreenBreakpointChange() {
    this.requestUpdate();
  }
  onNavCollapseChange() {
    if (this._observeNavCollapseChange) {
      this.requestUpdate();
    }
  }
  onAppNameChange() {
    if (this._observeAppNameChange) {
      this.requestUpdate();
    }
  }
  onPageScrollChange() {
    if (this._observePageScrollChange) {
      this.requestUpdate();
    }
  }
  onBannerScrollChange() {
    if (this._observeBannerHeightChange) {
      this.requestUpdate();
    }
  }
  onHasShellNav() {
    if (this._observeHasShellNav) {
      this.requestUpdate();
    }
  }
  onHasAppBar() {
    if (this._observeHasAppBar) {
      this.requestUpdate();
    }
  }
  onMobileNavOpenChange() {
    if (this._observeMobileNavOpenChange) {
      this.requestUpdate();
    }
  }
}

var __decorate$i = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * The Shell wraps around all of our applications and provides suite level consistencies, branding, and common functionality. This element, in particular, wraps all `<zui-shell>` custom sub-elements.
 *
 * @element zui-shell
 *
 * @slot - Default, unnamed slot; for inserting `<zui-shell-topbar>`, `<zui-shell-nav>`, `<zui-shell-content>`, and `<zui-shell-footer>` elements into `<zui-shell>` only
 *
 * @cssprop [--zui-background=var(--zui-gray-50)] - Background color of your application `<body>`
 * @cssprop [--zui-shell-background=var(--zui-background)] - Background color of `<zui-shell>` and `<zui-shell-content>`
 */
class ZuiShell extends ZuiShellBase {
  constructor() {
    super(...arguments);
    /**
     * (optional): The user-friendly name for this application; only applicable to anchor solutions and Client Cloud
     */
    this.appName = '';
    this._useSlottedAppName = false;
  }
  static get styles() {
    return [super.styles, style$k];
  }
  connectedCallback() {
    super.connectedCallback();
    this._appName = this.appName;
    const slottedAppElement = this.querySelector('[slot="app"]');
    if (!this.appName && slottedAppElement) {
      this._useSlottedAppName = true;
      this._appName = slottedAppElement.textContent;
    }
  }
  updated(changedProps) {
    if (changedProps.has('appName') && !this._useSlottedAppName) {
      this._appName = this.appName;
    }
  }
  render() {
    document.body.style.margin = '0';
    return html`<section class="shell-wrap" id="shell-wrap"> <slot></slot> </section>`;
  }
}
__decorate$i([property({
  type: String,
  attribute: 'app-name'
})], ZuiShell.prototype, "appName", void 0);
window.customElements.define('zui-shell', ZuiShell);

const style$j = css`:host,:root{--zui-shell-topbar-global-height: 2.875rem;--zui-shell-topbar-app-height: 0.25rem;--zui-shell-topbar-app-height-collapsed: 0.25rem;--zui-shell-nav-width: 75%;--zui-shell-nav-width-collapsed: 3.375rem;--zui-shell-footer-height: 4.25rem}@media(min-width: 45em){:host,:root{--zui-shell-topbar-global-height: 3.75rem;--zui-shell-topbar-app-height: 2.25rem;--zui-shell-topbar-app-height-collapsed: 0.3125rem;--zui-shell-nav-width: 15.625rem}}@media(min-width: 64em){:host,:root{--zui-shell-footer-height: 3.0625rem}}:host{--zui-button-color: transparent;--zui-button-hover-color: var(--zui-gray-100);--zui-button-text-color: var(--zui-blue);--zui-button-text-hover-color: var(--zui-blue);--zui-button-active-color: var(--zui-gray-200);--zui-button-icon-size: 1rem}.topbar-wrapper{position:fixed;top:var(--zui-shell-banner-height);right:0;left:0;z-index:4000;transition:height .3s ease,top .3s ease,opacity .3s ease,transform .3s ease,background .3s ease}@media(min-width: 45em){.topbar-wrapper.hide{--zui-shell-topbar-app-opacity: 0;--zui-shell-topbar-app-height: var(--zui-shell-topbar-app-height-collapsed);transform:translateY(calc(var(--zui-shell-topbar-global-height) * -1))}.topbar-wrapper.hide .app{height:var(--zui-shell-topbar-app-height-collapsed)}}.topbar-wrapper .close-search{position:absolute;top:0;right:0;bottom:0;display:none;width:100%;height:100%}.global{position:relative;display:flex;width:100%;height:var(--zui-shell-topbar-global-height);align-items:center;background:var(--zui-shell-topbar-global-color, #fff);transition:height .3s ease,opacity .3s ease,transform .3s ease,box-shadow .3s ease;box-sizing:border-box}@media(min-width: 45em){.global{display:flex;opacity:1;padding-left:0}}.global .menu,.global .search-button{--zui-icon-size: 1rem;display:inline-block;padding:.8125rem 1.0625rem;background:rgba(0,0,0,0);border:0;outline:none;cursor:pointer;color:var(--zui-blue);pointer-events:all;box-sizing:content-box}.global .menu:hover,.global .search-button:hover{background:var(--zui-gray-50)}.global .menu:focus,.global .menu:active,.global .search-button:focus,.global .search-button:active{background:var(--zui-gray-50)}.global .menu{z-index:1}@media(min-width: 45em){.global .menu{position:relative;display:none}}.global .logo{position:absolute;right:50%;left:50%;display:flex;flex-grow:1;flex-shrink:0;justify-content:center;margin:0 auto;transition:width 300ms ease,max-width 300ms ease,margin 300ms ease}@media(min-width: 45em){.global .logo{position:static;width:auto;max-width:15.625rem;justify-content:flex-start;margin:0 1.25rem 0 0}}@media(min-width: 64em){.global .logo{width:100%}}@media(min-width: 80em){.global .logo{margin:0 1.875rem 0 0}}.global .logo ::slotted(*){--zui-svg-width: 7.5rem;--zui-svg-height: 2rem;display:flex;width:100%;height:var(--zui-shell-topbar-global-height);justify-content:center;align-items:center}@media(min-width: 45em){.global .logo ::slotted(*){justify-content:flex-start;margin-left:1.25rem}}.global .logo ::slotted(zui-logo){display:flex;width:var(--zui-svg-width);height:var(--zui-svg-height);justify-content:center}@media(min-width: 45em){.global .logo ::slotted(zui-logo){justify-content:flex-start}}.global .logo ::slotted(zui-shell-apps){margin-left:0}.global .search{position:absolute;display:flex;width:100%;height:100%;z-index:1;align-items:center;transform:translateY(-100%);transition:transform 250ms ease}@media(min-width: 45em){.global .search{position:static;width:auto;z-index:unset;transform:none}}.global .search ::slotted(*){display:flex;width:100%;min-width:0;transition:min-width 300ms ease,margin 300ms ease}@media(min-width: 45em){.global .search ::slotted(*){width:auto;min-width:18.75rem}}@media(min-width: 64em){.global .search ::slotted(*){min-width:25rem}}.global .search .search-button{display:inline-block;margin-right:3.75rem;margin-left:auto;padding-right:.625rem;padding-bottom:.625rem;line-height:1}@media(min-width: 45em){.global .search .search-button{display:none}}.global .search ::slotted(*)+.search-button{display:flex}.global .search .search-field{position:absolute;display:flex;width:100%;height:100%;z-index:1;align-items:center;padding:0 1.25rem;background:#fff}.global .search .search-field zui-button{margin-left:.625rem}.global .pin-right{display:flex;align-items:center;margin-left:auto}.global .pin-right .search-button{padding:.8125rem .625rem}.app{display:flex;width:100%;height:var(--zui-shell-topbar-app-height);align-items:center;padding:0 1.25rem;background:var(--zui-shell-primary-theme, var(--zui-blue));transition:top .3s ease,font-size .3s ease-in,transform .3s ease,height .3s ease,box-shadow .3s ease;box-sizing:border-box}@media(min-width: 45em){.app{height:var(--zui-shell-topbar-app-height)}.app.no-app-name{height:var(--zui-shell-topbar-app-height-collapsed)}}.app div{opacity:var(--zui-shell-topbar-app-opacity, 0);font-weight:600;color:#fff;transition:font-size .3s ease-in,opacity .3s ease}@media(min-width: 45em){.app div{opacity:var(--zui-shell-topbar-app-opacity, 1)}}.app div ::slotted(a){color:#fff !important;text-decoration:none !important}:host([search-open]) .topbar-wrapper{bottom:0;background-color:rgba(0,0,0,.5)}:host([search-open]) .topbar-wrapper .close-search{display:block}:host([search-open]) .topbar-wrapper .search{transform:translateY(0)}`;

var __decorate$h = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const HIDE_CLASS_NAME = 'hide';
const PREFERS_REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
/**
 * There are two parts to the topbar: global and app. The top white bar is our global topbar, which has Zywave branding and includes global functionality. The bottom colored bar is our app bar (aka branding bar), which is tailored to the application or Cloud the user is viewing. Sometimes it is branded with the product name if not part of a Cloud. Global search, user information `<zui-shell-user>`, and the apps launchpad `<zui-shell-apps>` are all housed in this element.
 *
 * @element zui-shell-topbar
 *
 * @slot - Default, unnamed slot; not recommended for use in `<zui-shell-topbar>`. Please use one of the assigned slots for all purposes!
 * @slot apps - For slotting in the `<zui-shell-apps>` element; should not be used with the `logo` slot
 * @slot logo - For slotting in a logo if not slotting in `<zui-shell-apps>`; should not be used with the `apps` slot because it has its own way to handle logos
 * @slot search - For slotting in a search component such as `<zui-search>`
 * @slot user - For slotting in `<zui-shell-user>`
 * @slot help - For slotting in `<zui-shell-help>`
 *
 * @cssprop [--zui-shell-topbar-app-opacity=0] - App bar opacity for controlling the visiblity of the current application's name when set for anchor solutions; only applicable to anchor solutions and Client Cloud
 * @cssprop [--zui-shell-topbar-app-height = (variable)] - Height of the `<zui-shell-topbar>` app bar (colored bar) for anchor solutions; only applicable to anchor solutions and Client Cloud
 * @cssprop [--zui-shell-topbar-app-height-collapsed=5px] - Collapsed height of the `<zui-shell-topbar>` app bar (colored bar) for anchor solutions when topbar scrolling animation is enabled; only applicable to anchor solutions and Client Cloud
 * @cssprop [--zui-shell-topbar-global-color=#fff] - Background color of the `<zui-shell-topbar>` global topbar
 * @cssprop [--zui-shell-topbar-global-height=(variable)] - Height of the `<zui-shell-topbar>` global topbar
 *
 * @csspart app-bar - Exposes the thin accent bar for styling purposes; this is exposed as a CSS shadow part and can be accessed with `::part(app-bar)`
 *
 * @event {CustomEvent} topbarheightchange - Fired when user scrolls down from the top of the page, or scrolls up when not at the top of the page
 * @event {CustomEvent} pageScrollChangeEventName - Fired on scroll, to correctly size topbar
 */
class ZuiShellTopBar extends ZuiShellBase {
  #windowScrollY;
  #currentScrollY;
  #lastKnownScrollY;
  #ticking;
  #showMobileSearchButton;
  static get styles() {
    return [super.styles, style$j];
  }
  constructor() {
    super();
    /**
     * (optional): To hide the app bar and only show the global topbar; mainly for anchor solutions and Client Cloud
     */
    this.noAppBar = false;
    /**
     * (optional): To opt out of the topbar's off-screen scrolling animation.
     */
    this.noScrollAnimation = false;
    /**
     * Indicates whether global search is available and open on mobile
     */
    this.searchOpen = false;
    this.#windowScrollY = undefined;
    this.#currentScrollY = 0;
    this.#lastKnownScrollY = 0;
    this.#ticking = false;
    this.#showMobileSearchButton = false;
    this._observeAppNameChange = true;
    this._observeHasShellNav = true;
    this._observeBannerHeightChange = true;
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.noAppBar) {
      this._hasAppBar = false;
    }
    if (!this.noScrollAnimation && !PREFERS_REDUCED_MOTION) {
      window.addEventListener('scroll', this.#onPageScroll.bind(this));
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('scroll', this.#onPageScroll.bind(this));
  }
  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    this.setAttribute('role', 'banner');
    if (this._isMobile) {
      this.requestUpdate();
    }
    this.#dispatchScrollChangeEvent();
  }
  // Hide mobile search when not in mobile view
  onScreenBreakpointChange() {
    super.onScreenBreakpointChange();
    if (this.searchOpen && !this._isMobile) {
      this.searchOpen = false;
    }
    this.#dispatchScrollChangeEvent();
  }
  render() {
    return html`
      <div id="topbar-wrapper" class="topbar-wrapper">
        <div class="close-search" @click="${() => this.searchOpen = !this.searchOpen}"></div>
        <div class="global">
          ${this._hasShellNav ? html`
                <button class="menu" aria-label="Toggle nav menu" @click="${this.#toggleMobileMenu}">
                  <zui-icon icon="zui-shell-menu"></zui-icon>
                </button>
              ` : ''}
          <div class="logo"> <slot name="apps"></slot><slot name="logo"></slot> </div>
          <div class="search"> ${this.#renderSearch()} </div>
          <div class="pin-right">
            ${this.#renderMobileSearchToggleButton()}<slot name="help"></slot> <slot name="user"></slot
          ></div>
        </div>
        ${this.noAppBar ? '' : html`
              <div
                class="app ${classMap({
      'no-app-name': !this._appName
    })}"
                part="app-bar"
              >
                <div>${this._isMobile ? nothing : html` <slot name="app">${this._appName}</slot> `}</div>
              </div>
            `}
      </div>
    `;
  }
  // If slotted search element exists, switch views on mobile
  #renderSearch() {
    if (this._isMobile) {
      if (this._slottedDefaultEls.length > 0 || this._slottedSearchEls.length > 0) {
        return html`
          <div class="search-field">
            <slot id="zui-shell-topbar-default-slot" @slotchange="${this.#determineMobileSearchVisibility}"></slot>
            <slot name="search" @slotchange="${this.#determineMobileSearchVisibility}"></slot>
            <zui-button @click="${() => this.searchOpen = !this.searchOpen}">Cancel</zui-button>
          </div>
        `;
      } else {
        return html`
          <slot id="zui-shell-topbar-default-slot" @slotchange="${this.#determineMobileSearchVisibility}"></slot>
          <slot name="search" @slotchange="${this.#determineMobileSearchVisibility}"></slot>
        `;
      }
    } else {
      return html`
        <slot id="zui-shell-topbar-default-slot" @slotchange="${this.#determineMobileSearchVisibility}"></slot>
        <slot name="search" @slotchange="${this.#determineMobileSearchVisibility}"></slot>
      `;
    }
  }
  // If search is available, show the search icon button in the topbar to toggle search view
  #renderMobileSearchToggleButton() {
    if (this.#showMobileSearchButton) {
      return html`<button class="search-button" @click="${this.#toggleSearchView}">
        <zui-icon icon="zui-search"></zui-icon>
      </button>`;
    }
  }
  // If ZUI Shell has a side nav and is in mobile view, toggle the mobile menu
  #toggleMobileMenu() {
    if (this._hasShellNav) {
      this._isMobileNavOpen = !this._isMobileNavOpen;
    }
  }
  // If the search slot or default slots have elements in them, only toggle search for mobile
  #toggleSearchView() {
    this.searchOpen = !this.searchOpen;
    const focusOnSearchSlot = slottedElement => {
      let searchElement = undefined;
      if (slottedElement.tagName === 'ZUI-SEARCH' || slottedElement.tagName === 'INPUT') {
        searchElement = slottedElement;
      } else {
        searchElement = slottedElement.querySelector('zui-search,input');
      }
      if (searchElement) {
        searchElement.focus();
      }
    };
    // If in mobile view, focus on search element and hide submit button
    if (this._isMobile) {
      if (this._slottedSearchEls.length > 0) {
        focusOnSearchSlot(this._slottedSearchEls[0]);
      } else if (this._slottedDefaultEls.length > 0) {
        focusOnSearchSlot(this._slottedDefaultEls[0]);
      }
    }
    // When zui-search searches, close search view
    this.addEventListener('search', () => {
      this.searchOpen = false;
    });
  }
  #onPageScroll() {
    this.#windowScrollY = Math.round(window.scrollY);
    if (this.#windowScrollY === 0) {
      this.#updateScrollPosition();
    }
    if (this.#windowScrollY >= 50) {
      this.#currentScrollY = window.scrollY;
      this.#requestTick();
    }
  }
  // Determine if mobile search icon button should be shown based on the presence of search elements
  async #determineMobileSearchVisibility() {
    const slottedSearch = await this._slottedSearchEls;
    const slottedDefaultSearch = await this._slottedDefaultEls;
    if (this._isMobile && (slottedSearch.length > 0 || slottedDefaultSearch.length > 0)) {
      this.#showMobileSearchButton = true;
    } else {
      this.#showMobileSearchButton = false;
    }
    this.requestUpdate();
  }
  #requestTick() {
    if (!this.#ticking) {
      requestAnimationFrame(this.#updateScrollPosition.bind(this));
    }
    this.#ticking = true;
  }
  #showTopbar() {
    this._topbarWrapper.classList.toggle(HIDE_CLASS_NAME, false);
    this._state.pageScroll = false;
  }
  #hideTopbar() {
    this._topbarWrapper.classList.toggle(HIDE_CLASS_NAME, true);
    this._state.pageScroll = true;
  }
  #updateScrollPosition() {
    if (this.#windowScrollY === 0) {
      this.#showTopbar();
    } else {
      // intentional nesting of if-statements to record current and last scroll positions correctly
      if (this.#currentScrollY < this.#lastKnownScrollY) {
        if (this._state.pageScroll) {
          this.#showTopbar();
        }
      } else if (this.#currentScrollY > 1) {
        if (!this._state.pageScroll && !this._isMobile) {
          this.#hideTopbar();
        }
      }
    }
    this.#lastKnownScrollY = this.#currentScrollY <= 0 ? 0 : this.#currentScrollY;
    this.#ticking = false;
    this.#dispatchScrollChangeEvent();
  }
  #dispatchScrollChangeEvent() {
    const style = window.getComputedStyle(this._topbarWrapper);
    const height = this._state.pageScroll && !this._isMobile ? parseFloat(style.getPropertyValue('--zui-shell-topbar-app-height-collapsed')) : parseFloat(style.getPropertyValue('--zui-shell-topbar-global-height')) + (!this._state.privateAppName ? parseFloat(style.getPropertyValue('--zui-shell-topbar-app-height-collapsed')) : parseFloat(style.getPropertyValue('--zui-shell-topbar-app-height')));
    const cssHeight = `${height}rem`;
    const topbarVisible = !this._topbarWrapper.classList.contains(HIDE_CLASS_NAME);
    this.dispatchEvent(new CustomEvent(pageScrollChangeEventName, {
      detail: {
        height: cssHeight,
        topbarVisible: topbarVisible
      },
      bubbles: true,
      composed: true
    }));
    this._state.topBarHeight = cssHeight;
  }
}
__decorate$h([property({
  type: Boolean,
  attribute: 'no-appbar'
})], ZuiShellTopBar.prototype, "noAppBar", void 0);
__decorate$h([property({
  type: Boolean,
  attribute: 'no-scroll-animation'
})], ZuiShellTopBar.prototype, "noScrollAnimation", void 0);
__decorate$h([property({
  type: Boolean,
  reflect: true,
  attribute: 'search-open'
})], ZuiShellTopBar.prototype, "searchOpen", void 0);
__decorate$h([query('#topbar-wrapper')], ZuiShellTopBar.prototype, "_topbarWrapper", void 0);
__decorate$h([queryAssignedElements({
  slot: 'search'
})], ZuiShellTopBar.prototype, "_slottedSearchEls", void 0);
__decorate$h([queryAssignedElements({
  selector: '#zui-shell-topbar-default-slot'
})], ZuiShellTopBar.prototype, "_slottedDefaultEls", void 0);
window.customElements.define('zui-shell-topbar', ZuiShellTopBar);

const style$i = css`@supports(scrollbar-width: thin){.apps-list{scrollbar-color:var(--zui-gray-400) var(--zui-gray-50);scrollbar-width:thin}}@supports not (scrollbar-width: thin){.apps-list::-webkit-scrollbar{width:7px;height:7px;background-color:var(--zui-gray-50)}.apps-list::-webkit-scrollbar-thumb{background-color:var(--zui-gray-400);border-radius:10px}}:host,:root{--zui-shell-topbar-global-height: 2.875rem;--zui-shell-topbar-app-height: 0.25rem;--zui-shell-topbar-app-height-collapsed: 0.25rem;--zui-shell-nav-width: 75%;--zui-shell-nav-width-collapsed: 3.375rem;--zui-shell-footer-height: 4.25rem}@media(min-width: 45em){:host,:root{--zui-shell-topbar-global-height: 3.75rem;--zui-shell-topbar-app-height: 2.25rem;--zui-shell-topbar-app-height-collapsed: 0.3125rem;--zui-shell-nav-width: 15.625rem}}@media(min-width: 64em){:host,:root{--zui-shell-footer-height: 3.0625rem}}.apps-menu .actions a{cursor:pointer;color:var(--zui-blue);text-decoration:none}.apps-menu .actions a:hover{color:var(--zui-blue-400);text-decoration:underline}.apps-menu .actions a:focus{outline:.0625rem solid var(--zui-blue);outline-offset:.25rem;text-decoration:none}.apps-menu .actions a:active{outline:none;color:var(--zui-blue-600);text-decoration:underline}:host{position:relative;display:block;height:100%;color:var(--zui-gray-600)}:host([open]) .apps{background:var(--zui-gray-50)}:host([open]) .apps-menu{display:flex}.apps{position:relative;display:flex;height:var(--zui-shell-topbar-global-height);align-items:center;padding:0 1.25rem;background:none;border:0;outline:none;font:inherit;transition:background 250ms ease-out}@media(min-width: 45em){.apps:hover{background:var(--zui-gray-50);cursor:pointer}}.apps:focus,.apps:active{background:var(--zui-gray-50)}@media(min-width: 45em){.apps.scrolled{top:var(--zui-shell-topbar-app-height-collapsed)}}.apps .apps-icon{--zui-icon-size: 1.25rem;margin-right:1.25rem;color:var(--zui-gray)}.apps .logo{display:flex;width:auto;flex-shrink:0;justify-content:center;margin:0 auto;transition:margin 300ms ease}@media(min-width: 45em){.apps .logo{max-width:12.8125rem;justify-content:flex-start}}.apps .logo ::slotted(*){--zui-svg-width: 7.5rem;--zui-svg-height: 2rem;display:flex;width:var(--zui-svg-width);height:var(--zui-svg-height);align-items:center}@media(min-width: 45em){.apps .logo ::slotted(*){margin:0}}@media(max-width: 45em){.apps .logo ::slotted(img){max-width:unset !important}}.apps-menu{position:absolute;top:calc(var(--zui-shell-topbar-global-height) + 0.625rem);left:.625rem;display:none;width:21.875rem;flex-direction:column;background-color:#fff;border-radius:.25rem;box-shadow:rgba(0,0,0,.04) 0 .25rem .375rem .125rem,rgba(0,0,0,.06) 0 .125rem .625rem .1875rem,rgba(0,0,0,.02) 0 .25rem .3125rem -0.125rem}.apps-menu::before{position:absolute;top:0;left:0;content:"";width:3.125rem;height:1.875rem;opacity:0;z-index:1;background:var(--zui-gray-50);border-radius:.25rem}.apps-menu::after{position:absolute;top:-0.4375rem;left:.75rem;content:"";width:.9375rem;height:.9375rem;background:var(--zui-gray-50);box-shadow:rgba(0,0,0,.04) 0 .25rem .375rem .125rem,rgba(0,0,0,.06) 0 .125rem .625rem .1875rem,rgba(0,0,0,.02) 0 .25rem .3125rem -0.125rem;transform:rotate(45deg)}.apps-menu .header{z-index:1;padding:.625rem .9375rem;background:var(--zui-gray-50);font-weight:700}.apps-menu .header:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.apps-menu .actions{align-items:center;margin:.625rem 0;text-align:center}.apps-menu .actions .right{margin-left:auto}.apps-list{max-height:calc(100vh - (var(--zui-shell-topbar-global-height) + var(--zui-shell-topbar-app-height) + 2.625rem));overflow:auto}`;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * The template strings array contents are not compatible between the two
 * template result types as the compiled template contains a prepared string;
 * only use the returned template strings array as a cache key.
 */
const getStringsFromTemplateResult = result => isCompiledTemplateResult(result) ? result['_$litType$'].h : result.strings;
class CacheDirective extends Directive {
  constructor(partInfo) {
    super(partInfo);
    this._templateCache = new WeakMap();
  }
  render(v) {
    // Return an array of the value to induce lit-html to create a ChildPart
    // for the value that we can move into the cache.
    return [v];
  }
  update(containerPart, [v]) {
    const _valueKey = isTemplateResult(this._value) ? getStringsFromTemplateResult(this._value) : null;
    const vKey = isTemplateResult(v) ? getStringsFromTemplateResult(v) : null;
    // If the previous value is a TemplateResult and the new value is not,
    // or is a different Template as the previous value, move the child part
    // into the cache.
    if (_valueKey !== null && (vKey === null || _valueKey !== vKey)) {
      // This is always an array because we return [v] in render()
      const partValue = getCommittedValue(containerPart);
      const childPart = partValue.pop();
      let cachedContainerPart = this._templateCache.get(_valueKey);
      if (cachedContainerPart === undefined) {
        const fragment = document.createDocumentFragment();
        cachedContainerPart = render(nothing, fragment);
        cachedContainerPart.setConnected(false);
        this._templateCache.set(_valueKey, cachedContainerPart);
      }
      // Move into cache
      setCommittedValue(cachedContainerPart, [childPart]);
      insertPart(cachedContainerPart, undefined, childPart);
    }
    // If the new value is a TemplateResult and the previous value is not,
    // or is a different Template as the previous value, restore the child
    // part from the cache.
    if (vKey !== null) {
      if (_valueKey === null || _valueKey !== vKey) {
        const cachedContainerPart = this._templateCache.get(vKey);
        if (cachedContainerPart !== undefined) {
          // Move the cached part back into the container part value
          const partValue = getCommittedValue(cachedContainerPart);
          const cachedPart = partValue.pop();
          // Move cached part back into DOM
          clearPart(containerPart);
          insertPart(containerPart, undefined, cachedPart);
          setCommittedValue(containerPart, [cachedPart]);
        }
      }
      // Because vKey is non null, v must be a TemplateResult.
      this._value = v;
    } else {
      this._value = undefined;
    }
    return this.render(v);
  }
}
/**
 * Enables fast switching between multiple templates by caching the DOM nodes
 * and TemplateInstances produced by the templates.
 *
 * Example:
 *
 * ```js
 * let checked = false;
 *
 * html`
 *   ${cache(checked ? html`input is checked` : html`input is not checked`)}
 * `
 * ```
 */
const cache = directive(CacheDirective);

var __decorate$g = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * `<zui-shell-apps>` is our apps launchpad and is a global topbar feature. This is the primary method for jumping from one anchor solution to another. Consumers should set this up to only list products the user has access to. When adding this element, be sure to set its assigned slot to `apps` so it appears in the proper place in `<zui-shell-topbar>`.
 *
 * @element zui-shell-apps
 *
 * @slot - Default slot; list of all anchor solutions will be placed in here
 * @slot logo - Slot in logo elements or the default Zywave logo `<zui-logo>`, for proper brand placement
 */
class ZuiShellApps extends ZuiShellBase {
  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
  }
  static get styles() {
    return [super.styles, style$i];
  }
  constructor() {
    super();
    /**
     * Heading for the apps dropdown
     */
    this.appHeader = 'Apps';
    /**
     * (optional): Link to view all apps in a separate location.
     * Set this property if you want the "See all" links
     * to appear at the bottom of your apps list.
     */
    this.allAppsUrl = '';
    /**
     * (optional): Text for the link to view all apps in a separate location.
     * Will not show up if `all-apps-url` is not set.
     */
    this.allAppsText = 'See all';
    /**
     * Set to true when the dropdown list of anchor solutions is visible
     */
    this.open = false;
    this._observePageScrollChange = true;
  }
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', e => {
      if (!e.composedPath().includes(this)) {
        this.open = false;
      }
    });
  }
  updated(changedProps) {
    super.updated(changedProps);
  }
  render() {
    return html` ${cache(this._isMobile ? this._renderLogo() : this._renderApps())} `;
  }
  _renderApps() {
    return html`
      <button class="apps" aria-label="Toggle apps dropdown" @click="${this._openApps}">
        <zui-icon class="apps-icon" icon="zui-shell-apps"></zui-icon>
        <div class="logo"> <slot name="logo"></slot> </div>
      </button>
      ${this._getSubmenuHtml()}
    `;
  }
  _renderLogo() {
    return html`
      <div class="apps">
        <div class="logo"> <slot name="logo"></slot> </div>
      </div>
    `;
  }
  _openApps() {
    const appItems = Array.from(this.querySelectorAll('zui-shell-apps-item'));
    if (appItems.length > 0 || !this.allAppsUrl) {
      this.open = !this.open;
    } else {
      window.location.href = this.allAppsUrl;
    }
  }
  _getSubmenuHtml() {
    return html`
      <div class="apps-menu">
        <div class="header">${this.appHeader}</div>
        ${this._getAppsListHtml()}
      </div>
    `;
  }
  /**
   * @param {string} allAppsUrl Shows the link to view all apps at the very bottom of the apps list when set.
   */
  _getAppsListHtml() {
    return html`
      <div class="apps-list">
        <slot></slot>
        ${this.allAppsUrl ? html`
              <div class="actions">
                <a class="view-all-apps" href="${this.allAppsUrl}">${this.allAppsText}</a>
              </div>
            ` : ''}
      </div>
    `;
  }
}
__decorate$g([property({
  type: String,
  attribute: 'app-header'
})], ZuiShellApps.prototype, "appHeader", void 0);
__decorate$g([property({
  type: String,
  attribute: 'all-apps-url'
})], ZuiShellApps.prototype, "allAppsUrl", void 0);
__decorate$g([property({
  type: String,
  attribute: 'all-apps-text'
})], ZuiShellApps.prototype, "allAppsText", void 0);
__decorate$g([property({
  type: Boolean,
  reflect: true
})], ZuiShellApps.prototype, "open", void 0);
window.customElements.define('zui-shell-apps', ZuiShellApps);

const style$h = css`:host,:root{--zui-shell-topbar-global-height: 2.875rem;--zui-shell-topbar-app-height: 0.25rem;--zui-shell-topbar-app-height-collapsed: 0.25rem;--zui-shell-nav-width: 75%;--zui-shell-nav-width-collapsed: 3.375rem;--zui-shell-footer-height: 4.25rem}@media(min-width: 45em){:host,:root{--zui-shell-topbar-global-height: 3.75rem;--zui-shell-topbar-app-height: 2.25rem;--zui-shell-topbar-app-height-collapsed: 0.3125rem;--zui-shell-nav-width: 15.625rem}}@media(min-width: 64em){:host,:root{--zui-shell-footer-height: 3.0625rem}}:host{position:relative;display:flex;width:100%;flex-shrink:0;justify-content:flex-start;align-items:center;background:#fff;line-height:1.6;word-break:break-word}@media(max-width: 45em){:host{--zui-shell-nav-width: 0}}@media(min-width: 60em){:host{align-items:center}}.app-container{display:block;width:100%}.app-link{contain:layout;position:relative;display:flex;width:100%;min-height:3.125rem;flex-direction:column;justify-content:center;align-items:stretch;padding:.625rem .9375rem;color:var(--zui-gray-800);transition:background-color 250ms ease;text-decoration:none}.app-link:hover,.app-link:focus,.app-link:active{background-color:var(--zui-gray-50);outline:none}.name{font-weight:600}`;

var __decorate$f = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Child element of `<zui-shell-apps>` that renders into a link for each product the user has access to.
 *
 * @element zui-shell-apps-item
 */
class ZuiShellAppsItem extends ZuiShellBase {
  static get styles() {
    const result = [super.styles, style$h];
    return result;
  }
  constructor() {
    super();
    /**
     * Name of the application
     */
    this.name = '';
    /**
     * (optional): Description of the application
     */
    this.description = '';
    /**
     * URL to the application
     */
    this.url = '';
    /**
     * (optional): Specify where to open the link; default opens in a new tab
     */
    this.target = '_blank';
    this._observeNavCollapseChange = true;
  }
  connectedCallback() {
    super.connectedCallback();
  }
  updated(changedProps) {
    super.updated(changedProps);
  }
  onScreenBreakpointChange() {
    super.onScreenBreakpointChange();
  }
  onNavCollapseChange() {
    super.onNavCollapseChange();
  }
  render() {
    return html`
      <div class="app-container">
        <a class="app-link" href="${this.url}" target="${this.target}" rel="noopener">
          <div class="name">${this.name}</div>
          ${this.description ? html` <div class="description">${this.description}</div> ` : ''}
        </a>
      </div>
    `;
  }
}
__decorate$f([property({
  type: String,
  attribute: 'name'
})], ZuiShellAppsItem.prototype, "name", void 0);
__decorate$f([property({
  type: String,
  attribute: 'description'
})], ZuiShellAppsItem.prototype, "description", void 0);
__decorate$f([property({
  type: String,
  attribute: 'url'
})], ZuiShellAppsItem.prototype, "url", void 0);
__decorate$f([property({
  type: String,
  attribute: 'target'
})], ZuiShellAppsItem.prototype, "target", void 0);
window.customElements.define('zui-shell-apps-item', ZuiShellAppsItem);

const style$g = css`@supports(scrollbar-width: thin){.is-standard{scrollbar-color:var(--zui-gray-400) var(--zui-gray-50);scrollbar-width:thin}}@supports not (scrollbar-width: thin){.is-standard::-webkit-scrollbar{width:7px;height:7px;background-color:var(--zui-gray-50)}.is-standard::-webkit-scrollbar-thumb{background-color:var(--zui-gray-400);border-radius:10px}}:host,:root{--zui-shell-topbar-global-height: 2.875rem;--zui-shell-topbar-app-height: 0.25rem;--zui-shell-topbar-app-height-collapsed: 0.25rem;--zui-shell-nav-width: 75%;--zui-shell-nav-width-collapsed: 3.375rem;--zui-shell-footer-height: 4.25rem}@media(min-width: 45em){:host,:root{--zui-shell-topbar-global-height: 3.75rem;--zui-shell-topbar-app-height: 2.25rem;--zui-shell-topbar-app-height-collapsed: 0.3125rem;--zui-shell-nav-width: 15.625rem}}@media(min-width: 64em){:host,:root{--zui-shell-footer-height: 3.0625rem}}nav{position:fixed;top:var(--zui-shell-banner-height);right:unset;bottom:0;left:0;display:flex;width:0;height:auto;opacity:0;z-index:4001;flex-direction:column;background-color:rgba(0,0,0,.5);transition:transform 300ms ease,top 300ms ease,height 300ms ease,opacity 250ms ease-in-out,width 250ms ease 500ms,background-color 0ms 300ms ease}@media(min-width: 45em){nav{top:calc(var(--zui-shell-topbar-global-height) + var(--zui-shell-topbar-app-height) + var(--zui-shell-banner-height));width:var(--zui-shell-nav-width);opacity:1;z-index:3999;background-color:rgba(0,0,0,0);transition:transform 300ms ease,top 300ms ease,height 300ms ease,opacity 250ms ease-in-out,width 250ms ease,background-color 0ms 300ms ease}}@media(min-width: 45em){nav.no-app-name{top:calc(var(--zui-shell-topbar-global-height) + var(--zui-shell-topbar-app-height-collapsed) + var(--zui-shell-banner-height))}}nav.no-app-name .is-drawer .app-name{height:var(--zui-shell-topbar-app-height)}nav.no-app-name .drawer-menu{height:calc(100% - var(--zui-shell-topbar-app-height))}@media(min-width: 45em){nav.scrolled{top:calc(var(--zui-shell-topbar-app-height-collapsed) + var(--zui-shell-banner-height))}}@media(min-width: 45em){nav.no-appbar{top:calc(var(--zui-shell-topbar-global-height) + var(--zui-shell-banner-height))}}@media(min-width: 45em){nav.no-appbar.scrolled{top:var(--zui-shell-banner-height)}}nav .nav-wrapper{display:flex;width:100%;height:100%;flex-direction:column;overflow:hidden;border-right:.0625rem solid var(--zui-gray-100)}@media(min-width: 45em){nav .nav-wrapper{width:auto;overflow:visible;background-color:var(--zui-shell-background, var(--zui-background, var(--zui-gray-50)))}}.app-name{display:flex;width:100%;height:calc(var(--zui-shell-topbar-global-height) + var(--zui-shell-topbar-app-height));align-items:center;padding-left:.8125rem;background-color:var(--zui-shell-primary-theme, var(--zui-blue));font-weight:600;color:#fff;box-sizing:border-box}@media(min-width: 45em){.app-name{display:none}}.app-name ::slotted(a){color:#fff;text-decoration:none}.is-drawer{display:flex;width:var(--zui-shell-nav-width);height:100%;opacity:1;flex-direction:column;background-color:var(--zui-shell-background, var(--zui-background, var(--zui-gray-50)));transform:translateX(-100%);transition:transform 300ms ease-in-out}@media(min-width: 45em){.is-drawer{background-color:rgba(0,0,0,0)}}.drawer-menu{position:relative;width:100%;height:calc(100% - (var(--zui-shell-topbar-global-height) + var(--zui-shell-topbar-app-height)));overflow-x:hidden}@media(min-width: 45em){.drawer-menu{height:auto}}.close-menu{position:absolute;top:0;right:0;bottom:0;left:-100%;opacity:0;transition:opacity 250ms ease-in-out,left 0ms,width .3s ease}.is-standard{position:relative;display:flex;width:100%;flex-direction:column;flex:1;overflow-x:hidden;overflow-y:auto;transition:height 300ms ease;overscroll-behavior-y:contain}.utility-items{display:none;border-top:.0625rem solid var(--zui-gray-100)}.utility-items.show{display:block}.collapse{display:flex;height:2.6875rem;align-items:center;overflow:hidden;border-top:.0625rem solid var(--zui-gray-100);cursor:pointer;color:var(--zui-gray-600);transition:background-color 250ms ease}.collapse:hover{background-color:var(--zui-shell-nav-item-hover-color, hsl(240, 8%, 93%))}.collapse zui-icon{--zui-icon-size: 1.125rem;flex-shrink:0;padding:0 1rem 0 1.25rem;fill:var(--zui-gray-600);transition:transform .3s ease-out;box-sizing:content-box;box-sizing:content-box}:host([open]) nav{width:100%;height:auto;opacity:1;transition:transform 250ms ease,opacity 250ms,top 250ms ease,height 250ms ease}:host([open]) nav .nav-wrapper .is-drawer{transform:translateX(0)}:host([open]) nav .nav-wrapper .close-menu{left:0;opacity:1}@media(min-width: 45em){:host([collapsed]:not([open])) nav{width:var(--zui-shell-nav-width-collapsed)}:host([collapsed]:not([open])) nav .nav-wrapper .collapse zui-icon{transform:rotate(180deg)}}`;

var __decorate$e = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * The Shell collapsible side nav that houses the application's primary navigation. On medium screen sizes, the side nav automatically collapses to give users more screen real estate. Users can choose to expand it if they prefer.
 *
 * @element zui-shell-nav
 *
 * @slot - Default, unnamed slot; for inserting `<zui-shell-nav-item>` and `<zui-shell-context-switcher>` elements into `<zui-shell-nav>`
 *
 * @cssprop [--zui-shell-nav-width=(variable)] - Width of `<zui-shell-nav>` when expanded
 * @cssprop [--zui-shell-nav-width-collapsed=3.75rem] - Width of `<zui-shell-nav>` when collapsed
 
 * @event {CustomEvent} navcollapsechange - fired when nav is collapsed or expanded
 */
class ZuiShellNav extends ZuiShellBase {
  static get styles() {
    return [super.styles, style$g];
  }
  #isInitializing;
  constructor() {
    super();
    /**
     * Indicates whether the side nav is open or not on mobile
     */
    this.open = false;
    /**
     * Indicates when the side nav is collapsed
     */
    this.collapsed = this._isNavCollapsed;
    /**
     * (Optional) For customizing the text for the collapse button at the bottom of the side nav
     */
    this.collapseLabel = 'Collapse';
    this._navItems = [];
    this.#isInitializing = true;
    this._observeAppNameChange = true;
    this._observePageScrollChange = true;
    this._observeHasAppBar = true;
    this._observeMobileNavOpenChange = true;
    this._observeBannerHeightChange = true;
  }
  connectedCallback() {
    super.connectedCallback();
    this._navItems = Array.from(this.querySelectorAll('zui-shell-nav-item'));
    this._hasShellNav = true;
    // TODO: remove this and any other uses of `open` from zui-shell-nav-item
    for (const navItem of this._navItems) {
      navItem.open = this.open;
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this._hasShellNav = false;
  }
  updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has('open')) {
      for (const navItem of this._navItems) {
        navItem.open = this.open;
      }
      this._isMobileNavOpen = this.open;
      this.#hideBodyScroll();
    }
    if (changedProps.has('collapsed') && !this.#isInitializing) {
      this.#onCollapsedChange();
    }
    this.#isInitializing = false;
  }
  firstUpdated() {
    this.#toggleUtilityItems();
  }
  onScreenBreakpointChange() {
    super.onScreenBreakpointChange();
    if (this.open && !this._isMobile) {
      this.open = false;
    }
    this._tabletNavCollapseOverride = undefined;
    this.collapsed = this._isNavCollapsed;
  }
  onMobileNavOpenChange() {
    this.open = this._isMobileNavOpen;
  }
  render() {
    return html` ${cache(this._isMobile ? this.#renderDrawerNav() : this.#renderStandardNav())} `;
  }
  #renderDrawerNav() {
    return html`
      <nav id="navigation" class="${classMap({
      'no-appbar': !this._hasAppBar,
      'no-app-name': !this._appName
    })}">
        <div class="nav-wrapper">
          <div class="close-menu" @click="${() => this.open = !this.open}"></div>
          <div class="is-drawer">
            <div class="app-name"><slot name="app">${this._appName}</slot></div>
            <div class="drawer-menu" @navitemclick="${() => this.open = false}"> <slot></slot> </div>
            ${this.#renderUtilityItems()}</div>
          </div>
        </div>
      </nav>
    `;
  }
  #renderStandardNav() {
    return html`
      <nav
        id="navigation"
        class="${classMap({
      scrolled: this._state.pageScroll,
      'no-appbar': !this._hasAppBar,
      'no-app-name': !this._appName
    })}"
      >
        <div class="nav-wrapper"
          ><div class="is-standard"> <slot></slot> </div>
          ${this.#renderUtilityItems()}${this.#renderCollapseButton()}</div
        >
      </nav>
    `;
  }
  #renderUtilityItems() {
    return html`
      <div class="utility-items"> <slot name="utility" @slotchange="${this.#toggleUtilityItems}"></slot> </div>
    `;
  }
  #renderCollapseButton() {
    return html`
      <div class="collapse" @click="${() => this.collapsed = !this.collapsed}">
        <zui-icon icon="zui-chevron-left"></zui-icon>
        ${this.collapsed ? html`` : html` ${this.collapseLabel} `}
      </div>
    `;
  }
  /**
   * Toggle nav `collapsed` state
   */
  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }
  #onCollapsedChange() {
    if (this._isTablet) {
      this._tabletNavCollapseOverride = this.collapsed;
    } else {
      this._storedIsNavCollapsed = this.collapsed;
    }
    /**
     * @ignore
     */
    this.dispatchEvent(new CustomEvent(navCollapseChangeEventName, {
      detail: this._isNavCollapsed,
      bubbles: true,
      composed: true
    }));
    // if the nav is collapsed, all nav items must not be expanded
    if (this.collapsed) {
      const expandedNavItems = this.querySelectorAll('zui-shell-nav-item[expanded]');
      for (const navItem of expandedNavItems) {
        navItem.toggleExpanded();
      }
    }
  }
  #hideBodyScroll() {
    const body = document.querySelector('body');
    if (body && this.open) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }
  // Toggle the display of the utility items wrapper if there are any utility items
  async #toggleUtilityItems() {
    const utilityEls = await this._utilitySlottedEls;
    if (utilityEls.length > 0) {
      this._utilityItemsWrapper.classList.toggle('show', true);
    } else {
      this._utilityItemsWrapper.classList.toggle('show', false);
    }
    this.requestUpdate();
  }
}
__decorate$e([property({
  type: Boolean,
  reflect: true
})], ZuiShellNav.prototype, "open", void 0);
__decorate$e([property({
  type: Boolean,
  reflect: true
})], ZuiShellNav.prototype, "collapsed", void 0);
__decorate$e([property({
  type: String,
  attribute: 'collapse-label'
})], ZuiShellNav.prototype, "collapseLabel", void 0);
__decorate$e([query('.utility-items')], ZuiShellNav.prototype, "_utilityItemsWrapper", void 0);
__decorate$e([queryAssignedElements({
  slot: 'utility'
})], ZuiShellNav.prototype, "_utilitySlottedEls", void 0);
window.customElements.define('zui-shell-nav', ZuiShellNav);

const style$f = css`:host,:root{--zui-shell-topbar-global-height: 2.875rem;--zui-shell-topbar-app-height: 0.25rem;--zui-shell-topbar-app-height-collapsed: 0.25rem;--zui-shell-nav-width: 75%;--zui-shell-nav-width-collapsed: 3.375rem;--zui-shell-footer-height: 4.25rem}@media(min-width: 45em){:host,:root{--zui-shell-topbar-global-height: 3.75rem;--zui-shell-topbar-app-height: 2.25rem;--zui-shell-topbar-app-height-collapsed: 0.3125rem;--zui-shell-nav-width: 15.625rem}}@media(min-width: 64em){:host,:root{--zui-shell-footer-height: 3.0625rem}}:host{contain:none;position:relative;display:flex;width:100%;flex-shrink:0;justify-content:flex-start;align-items:center;background:rgba(0,0,0,0);line-height:1.6;word-break:break-word}@media(max-width: 45em){:host{--zui-shell-nav-width: 0}}@media(min-width: 60em){:host{align-items:center}}.nav-container{display:block;width:100%}.nav-item{contain:layout;position:relative;display:flex;width:100%;align-items:stretch;transition:background-color 250ms ease;user-select:none}.nav-item .nav-parent-item,.nav-item ::slotted(a){display:flex !important;width:calc(100% - (3.375rem)) !important;align-items:center !important;cursor:pointer !important;color:var(--zui-gray-600) !important;user-select:none;text-decoration:none !important}.nav-item ::slotted(a:focus){outline:0 !important}.nav-item .fake-link-for-icon{display:block;width:auto !important;cursor:pointer;transition:background-color 250ms ease}.nav-item .fake-link-for-icon:focus{outline:0 !important}.nav-item:hover,.nav-item:active{background-color:var(--zui-shell-nav-item-hover-color, hsl(240, 8%, 93%))}.nav-item .icon{--zui-icon-size: 1.125rem;--zui-svg-width: 1.125rem;--zui-svg-height: 1.125rem;display:flex;flex-shrink:0;justify-content:center;align-items:center;padding:.875rem 1.125rem;cursor:pointer;color:var(--zui-gray-600) !important}.nav-item .icon ::slotted(*){width:1.125rem !important;height:1.125rem !important;flex-shrink:0;cursor:pointer;transition:color 250ms ease,transform 250ms ease-in-out;user-select:none;box-sizing:content-box;pointer-events:auto}.nav-item .icon.active ::slotted(*){color:var(--zui-shell-nav-active-color, var(--zui-shell-primary-theme, var(--zui-blue))) !important}.nav-item .icon.active .placeholder{color:var(--zui-shell-nav-active-color, var(--zui-shell-primary-theme, var(--zui-blue))) !important}.nav-item .icon.active-background{background-color:var(--zui-shell-nav-item-hover-color, hsl(240, 8%, 93%)) !important}.nav-item .expand-icon{--zui-icon-size: 1.125rem;flex-shrink:0;margin-left:auto;padding:.875rem .625rem;cursor:pointer;color:var(--zui-gray-300) !important;transition:transform 250ms ease-out;transition:color 250ms ease,transform 250ms ease-in-out;box-sizing:content-box}.subnav{contain:layout;overflow:hidden;transition:height 180ms ease-out}.subnav--height ::slotted(a){display:flex !important;align-items:center !important;padding:.625rem .625rem .625rem 4rem !important;color:var(--zui-gray-600) !important;transition:background-color 250ms ease !important;text-decoration:none !important}.subnav--height ::slotted(a:hover){background-color:var(--zui-shell-nav-item-hover-color, hsl(240, 8%, 93%)) !important}.subnav--height ::slotted(a:focus){outline:0 !important}:host([expanded]) .expand-icon{transform:rotate(180deg)}.nav-container.collapsed{display:flex}.nav-container.collapsed .subnav{position:fixed;left:0;width:12.5rem;z-index:-1;border-left:0;box-shadow:0 0 0 -0.0625rem var(--zui-gray-100);transform:translateX(-100%)}.nav-container.collapsed .subnav-parent-item,.nav-container.collapsed .subnav-only-item ::slotted(a){display:flex !important;min-height:3.0625rem !important;align-items:center !important;padding-right:.75rem !important;padding-left:.75rem !important;border-bottom:.0625rem solid var(--zui-gray-100) !important;font-weight:600 !important}.nav-container.collapsed .subnav-only-item ::slotted(a:focus){outline:0 !important}.nav-container.collapsed:hover .nav-item{background-color:var(--zui-shell-nav-item-hover-color, hsl(240, 8%, 93%))}.nav-container.collapsed:hover .subnav{z-index:-1;background-color:var(--zui-shell-nav-item-hover-color, hsl(240, 8%, 93%));box-shadow:.3125rem .1875rem .3125rem 0 rgba(0,0,0,.16);animation:fly-out-menu .3s ease forwards}.nav-container.collapsed:hover .subnav--height ::slotted(a){padding-left:.75rem !important}.nav-container.collapsed:hover .subnav--height ::slotted(a:hover){background-color:var(--zui-gray-100) !important}.nav-item ::slotted([active]),.subnav .subnav--height ::slotted([active]){background-color:var(--zui-shell-nav-item-hover-color, hsl(240, 8%, 93%)) !important;font-weight:700 !important;color:var(--zui-shell-nav-active-color, var(--zui-shell-primary-theme, var(--zui-blue))) !important}@keyframes fly-out-menu{0%{z-index:-1}99%{z-index:-1}100%{z-index:2;transform:translateX(var(--zui-shell-nav-width-collapsed))}}`;

var __decorate$d = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Child element of `<zui-shell-nav>` that renders into a link. Top-level menu items must be accompanied by an icon. Children menu items do not need an icon.
 *
 * @element zui-shell-nav-item
 *
 * @slot - Default, unnamed slot; for inserting text, `<a>`, and `<zui-icon>` elements into `<zui-shell-nav-item>` as top-level menu items and, if applicable, their subnavs
 * @slot icon - Required slot for top-level menu item's icon placement
 * @slot subnav - Slot for children menu-items that is automatically set when there are more than one anchor tag; consumers do not have to assign elements to this slot
 *
 * @cssprop [--zui-shell-nav-active-color=var(--zui-shell-primary-theme, var(--zui-blue))] - Text color of an active `<zui-shell-nav-item>` when you are currently in that section or page
 * @cssprop [--zui-shell-nav-item-hover-color] - Hover color for `<zui-shell-nav-item>`
 *
 * @event navitemclick - Custom event fired when `<zui-shell-nav-item>` is clicked
 */
class ZuiShellNavItem extends ZuiShellBase {
  static get styles() {
    const result = [super.styles, style$f];
    return result;
  }
  constructor() {
    super();
    /**
     * This property becomes `true` when `<zui-shell-nav-item>` has children items and is expanded. All parent menu items are collapsed by default
     */
    this.expanded = false;
    /**
     * This property becomes `true` when there are more than one anchor tag in `<zui-shell-nav-item>`
     */
    this.subnav = false;
    /**
     * @ignore TODO: remove `open` property, likely doesn't do anything, look for other uses and remove too
     */
    this.open = false;
    this._isActive = false;
    this._isSubNav = false;
    this._observeNavCollapseChange = true;
  }
  connectedCallback() {
    super.connectedCallback();
    this._isActive = !!this.querySelector('[active]');
    const anchorTags = this.querySelectorAll('a');
    this._isSubNav = this.subnav ? this.subnav : anchorTags.length > 1;
    this._primaryAnchorTag = anchorTags[0];
    if (this._isSubNav) {
      for (let i = 0; i < anchorTags.length; i++) {
        anchorTags[i].setAttribute('slot', 'subnav');
      }
    }
    if (this._primaryAnchorTag) {
      this._setupPrimaryAnchorMutationObserver();
    }
    this._setupActiveNavItemMutationObserver();
  }
  updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has('expanded')) {
      this._modifySubnavHeight();
    }
  }
  onScreenBreakpointChange() {
    super.onScreenBreakpointChange();
    this._modifySubnavHeight();
  }
  onNavCollapseChange() {
    super.onNavCollapseChange();
    this._modifySubnavHeight();
  }
  render() {
    const navIcon = html`
      <div class="icon ${classMap({
      active: this._isActive,
      'active-background': this._isActive && !this._isSubNav
    })}"
        ><slot name="icon"><zui-icon class="placeholder" icon="zui-nav-generic-placeholder"></zui-icon></slot>
      </div>
    `;
    const fakeLinkForIcon = html`
      <a class="fake-link-for-icon" href="${this._primaryAnchorTag ? this._primaryAnchorTag.href : '#'}">
        ${navIcon}
      </a>
    `;
    return html`
      <div class="nav-container ${classMap({
      collapsed: this._isNavCollapsed && !this._isMobile
    })}">
        <div class="nav-item" @click="${this.onNavItemClick}">
          ${cache(this._isNavCollapsed && !this._isMobile ? html` ${this._isSubNav ? navIcon : fakeLinkForIcon} ` : html`
                  ${this._isSubNav ? html`
                        ${navIcon}<div class="nav-parent-item"><slot></slot></div
                        ><zui-icon class="expand-icon" icon="zui-chevron-down"></zui-icon>
                      ` : html`
                        <a id="fakeLink" class="fake-link-for-icon" href="${this._primaryAnchorTag.href}">${navIcon}</a
                        ><slot></slot>
                      `}
                `)}
        </div>

        <div class="subnav" @click="${this.onNavItemClick}">
          <div class="subnav--height">
            ${cache(this._isNavCollapsed && !this._isMobile ? html`
                    ${this._isSubNav ? html` <div class="subnav-parent-item"><slot></slot></div><slot name="subnav"></slot> ` : html` <div class="subnav-only-item"><slot></slot></div><slot name="subnav"></slot> `}
                  ` : html` <slot name="subnav"></slot> `)}
          </div>
        </div></div
      >
    `;
  }
  _modifySubnavHeight() {
    // TODO(pat): this method is due a refactor to clean up (e.g. remove this.shadowRoot calls, etc.)
    // we set subnav to be an empty to prevent "cannot set property 'height' of undefined"
    const subnav = this.shadowRoot.querySelector('.subnav') || {
      style: {
        height: {}
      }
    };
    const navItemHeight = 50;
    if (!this._isSubNav) {
      return;
    }
    if (this.expanded) {
      let subnavHeight = this.shadowRoot.querySelector('.subnav--height').offsetHeight;
      if (this._isNavCollapsed && this._isMobile) {
        subnavHeight = subnavHeight - navItemHeight;
      }
      subnav.style.height = subnavHeight + 'px';
    } else {
      if (this._isNavCollapsed && !this._isMobile) {
        subnav.style.height = 'auto';
      } else {
        subnav.style.height = '0';
      }
    }
  }
  onNavItemClick(e) {
    const emitNavItemClick = () => this.dispatchEvent(new CustomEvent('navitemclick', {
      bubbles: true
    }));
    if (e.currentTarget === this._navItem) {
      if (this._isSubNav) {
        this.toggleExpanded();
      } else {
        emitNavItemClick();
      }
    } else if (e.target.getAttribute('slot') === 'subnav') {
      emitNavItemClick();
    } else if (e.currentTarget === this._fakeLink) {
      emitNavItemClick();
    }
  }
  /**
   * Toggle expanded state
   */
  toggleExpanded() {
    if (this._isSubNav) {
      this.expanded = !this.expanded;
    }
  }
  _setupPrimaryAnchorMutationObserver() {
    this._primaryAnchorTagObserver = new MutationObserver(mutationsList => {
      for (const m of mutationsList) {
        if (m.type === 'attributes') {
          if (m.attributeName === 'href') {
            this.requestUpdate();
          }
        }
      }
    });
    this._primaryAnchorTagObserver.observe(this._primaryAnchorTag, {
      attributes: true,
      attributeFilter: ['href']
    });
  }
  _setupActiveNavItemMutationObserver() {
    this._activeNavItemObserver = new MutationObserver(mutationsList => {
      for (const m of mutationsList) {
        if (m.type === 'attributes') {
          if (m.attributeName === 'active') {
            this._isActive = !!this.querySelector('[active]');
            this.requestUpdate();
          }
        }
      }
    });
    const anchorTags = this.querySelectorAll('a');
    if (anchorTags) {
      anchorTags.forEach(anchor => this._activeNavItemObserver.observe(anchor, {
        attributes: true,
        attributeFilter: ['active']
      }));
    }
  }
}
__decorate$d([property({
  type: Boolean,
  reflect: true
})], ZuiShellNavItem.prototype, "expanded", void 0);
__decorate$d([property({
  type: Boolean
})], ZuiShellNavItem.prototype, "subnav", void 0);
__decorate$d([query('.nav-item')], ZuiShellNavItem.prototype, "_navItem", void 0);
__decorate$d([query('#fakeLink')], ZuiShellNavItem.prototype, "_fakeLink", void 0);
window.customElements.define('zui-shell-nav-item', ZuiShellNavItem);

const style$e = css`:host,:root{--zui-shell-topbar-global-height: 2.875rem;--zui-shell-topbar-app-height: 0.25rem;--zui-shell-topbar-app-height-collapsed: 0.25rem;--zui-shell-nav-width: 75%;--zui-shell-nav-width-collapsed: 3.375rem;--zui-shell-footer-height: 4.25rem}@media(min-width: 45em){:host,:root{--zui-shell-topbar-global-height: 3.75rem;--zui-shell-topbar-app-height: 2.25rem;--zui-shell-topbar-app-height-collapsed: 0.3125rem;--zui-shell-nav-width: 15.625rem}}@media(min-width: 64em){:host,:root{--zui-shell-footer-height: 3.0625rem}}:host{display:block;display:contents}.container{position:relative;display:flex;width:100%;height:4.375rem;flex-shrink:0;justify-content:space-between;align-items:center;padding:.9375rem 1.25rem;border-bottom:.0625rem solid var(--zui-gray-100);transition:background-color .3s ease-out}.container:hover{background-color:var(--zui-gray-100);cursor:pointer}.container .context-switcher-info,.container .context-switcher-info-fade{display:flex;width:calc(100% - 3.4375rem);flex-direction:column;box-sizing:border-box}.container .context-switcher-info .context-label,.container .context-switcher-info-fade .context-label{overflow:hidden;font-size:.75rem;white-space:nowrap;color:var(--zui-gray-500);text-overflow:clip}.container .context-switcher-info .context-title,.container .context-switcher-info-fade .context-title{display:block;width:100%;overflow:hidden;font-weight:600;white-space:nowrap;color:var(--zui-gray-600);text-overflow:ellipsis}.container .context-switcher-icon{display:flex;z-index:1;flex-direction:column;flex-shrink:0;justify-content:center;align-items:center;margin-left:1.25rem;padding:0;font-size:.75rem;text-transform:capitalize;color:var(--zui-blue);fill:var(--zui-blue)}.container .context-switcher-icon .context-switcher-icon-text{margin-top:.1875rem}.container .context-switcher-info-fade{position:fixed;left:var(--zui-shell-nav-width-collapsed, 3.375rem);width:11.25rem;height:4.375rem;opacity:0;align-self:flex-start;padding:.9375rem 1.25rem;background:#f7f7f7;box-shadow:.3125rem .1875rem .3125rem 0 rgba(0,0,0,.16);box-sizing:border-box}.container.nav-collapsed{justify-content:center;padding:0}.container.nav-collapsed .context-switcher-info{position:fixed;left:var(--zui-shell-nav-width-collapsed, 3.375rem);display:flex;width:12.5rem;min-height:4.6875rem;justify-content:center;align-items:flex-start;align-self:flex-start;order:1;padding:.75rem;border:.0625rem solid var(--zui-gray-100);border-left:0;box-shadow:0 0 0 -0.0625rem #e6e6ea;transform:translateX(-100%)}.container.nav-collapsed .context-switcher-info-fade{opacity:1;z-index:-1;background:#fff;animation:500ms ease 1s 1 normal forwards context-switcher-fade}.container.nav-collapsed .context-switcher-icon{margin-left:0}.container.nav-collapsed .context-switcher-info{opacity:0}.container.nav-collapsed .context-switcher-info .context-label{margin-bottom:.3125rem}.container.nav-collapsed .context-switcher-info .context-title{white-space:normal;text-overflow:inherit}.container.nav-collapsed:hover .context-switcher-info{opacity:1;background-color:#fafafa;box-shadow:rgba(0,0,0,.16) .3125rem .1875rem .3125rem 0;animation:.3s ease 0s 1 normal forwards running fly-out-menu}@keyframes context-switcher-fade{0%{opacity:1}99%{opacity:0;transform:translateX(0)}100%{display:none;opacity:0;transform:translateX(-100%)}}@keyframes fly-out-menu{0%{z-index:-1}99%{z-index:-1}100%{z-index:2;transform:translateX(0)}}`;

var __decorate$c = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * A child element of `<zui-shell-nav>`, when used it is the first item to be seen in the nav, before `<zui-shell-nav-item>`'s. It provides contextual details for what is seen in `<zui-shell-content>`, i.e. viewing as a specific company.
 *
 * @element zui-shell-context-switcher
 *
 */
class ZuiShellContextSwitcher extends ZuiShellBase {
  static get styles() {
    return [super.styles, style$e];
  }
  constructor() {
    super();
    /**
     * The title text represeting who / what the context is
     */
    this.contextTitle = null;
    /**
     * Label above the title text, i.e. 'Viewing as'
     */
    this.contextLabel = null;
    /**
     * The text beneath the switch profile icon, i.e. 'Switch'
     */
    this.actionText = null;
    this._observeNavCollapseChange = true;
  }
  firstUpdated() {
    this.#overrideParentAnchorStyles();
  }
  render() {
    return html`<div
      class="container ${classMap({
      'nav-collapsed': this._isNavCollapsed
    })}"
      title="${this.contextTitle}"
    >
      <div class="context-switcher-info">
        <span class="context-label">${this.contextLabel}</span>
        <span class="context-title">${this.contextTitle}</span>
      </div>
      <div class="context-switcher-icon">
        <zui-icon icon="zui-switch-profile" class="small"></zui-icon>
        <span class="context-switcher-icon-text">${this.actionText}</span>
      </div>
      <div class="context-switcher-info-fade" title="${this.contextTitle}">
        <span class="context-label">${this.contextLabel}</span>
        <span class="context-title">${this.contextTitle}</span>
      </div>
    </div>`;
  }
  /* If context switcher is wrapped in an anchor tag,
   * remove the anchor styles so that the context switcher
   * styles don't get overridden by the anchor styles
   */
  #overrideParentAnchorStyles() {
    const parent = this.parentElement;
    if (parent instanceof HTMLAnchorElement) {
      parent.style.textDecoration = 'none';
      parent.style.color = 'inherit';
    }
  }
}
__decorate$c([property({
  type: String,
  attribute: 'context-title'
})], ZuiShellContextSwitcher.prototype, "contextTitle", void 0);
__decorate$c([property({
  type: String,
  attribute: 'context-label'
})], ZuiShellContextSwitcher.prototype, "contextLabel", void 0);
__decorate$c([property({
  type: String,
  attribute: 'action-text'
})], ZuiShellContextSwitcher.prototype, "actionText", void 0);
window.customElements.define('zui-shell-context-switcher', ZuiShellContextSwitcher);

const style$d = css`:host,:root{--zui-shell-topbar-global-height: 2.875rem;--zui-shell-topbar-app-height: 0.25rem;--zui-shell-topbar-app-height-collapsed: 0.25rem;--zui-shell-nav-width: 75%;--zui-shell-nav-width-collapsed: 3.375rem;--zui-shell-footer-height: 4.25rem}@media(min-width: 45em){:host,:root{--zui-shell-topbar-global-height: 3.75rem;--zui-shell-topbar-app-height: 2.25rem;--zui-shell-topbar-app-height-collapsed: 0.3125rem;--zui-shell-nav-width: 15.625rem}}@media(min-width: 64em){:host,:root{--zui-shell-footer-height: 3.0625rem}}:host{display:block;border-top:.0625rem solid var(--zui-gray-100);font-size:.75rem;color:var(--zui-gray-600)}.footer{margin:0 auto;padding:.75rem;text-align:center;transition:margin 250ms ease}@media(min-width: 45em){.footer{margin-left:var(--zui-shell-nav-width)}}.footer ::slotted(div){display:block;padding:0 .3125rem;color:var(--zui-gray-600)}.footer ::slotted(div):hover{color:var(--zui-gray-600);text-decoration:none}@media(min-width: 64em){.footer ::slotted(div){display:inline-block}}.footer ::slotted(a){display:inline-block !important;margin:0 .3125rem !important;padding:0 !important;cursor:pointer !important;color:var(--zui-blue-500) !important;text-decoration:none !important}.footer ::slotted(a:hover){color:var(--zui-blue-400) !important;text-decoration:underline !important}@media(min-width: 30em){.footer.nav-collapsed{margin-left:0}}@media(min-width: 45em){.footer.nav-collapsed{margin-left:var(--zui-shell-nav-width-collapsed)}}.footer.no-nav{margin-left:0}`;

/**
 * The footer is the small section at the bottom of each page that contains things like the privacy and cookie policies, and other legal and trademark information.
 *
 * @element zui-shell-footer
 *
 * @slot - Default, unnamed slot; for inserting all privacy and cookie policies, and other legal and trademark information into `<zui-shell-footer>`
 *
 * @cssprop [--zui-shell-footer-height=(variable)] - Height of `<zui-shell-footer>`
 */
class ZuiShellFooter extends ZuiShellBase {
  static get styles() {
    return [super.styles, style$d];
  }
  constructor() {
    super();
    this._observeNavCollapseChange = true;
    this._observeHasShellNav = true;
  }
  render() {
    return html`
      <footer class="footer ${classMap({
      'nav-collapsed': this._isNavCollapsed,
      'no-nav': !this._hasShellNav
    })}">
        <slot></slot>
      </footer>
    `;
  }
}
window.customElements.define('zui-shell-footer', ZuiShellFooter);

const style$c = css`:host,:root{--zui-shell-topbar-global-height: 2.875rem;--zui-shell-topbar-app-height: 0.25rem;--zui-shell-topbar-app-height-collapsed: 0.25rem;--zui-shell-nav-width: 75%;--zui-shell-nav-width-collapsed: 3.375rem;--zui-shell-footer-height: 4.25rem}@media(min-width: 45em){:host,:root{--zui-shell-topbar-global-height: 3.75rem;--zui-shell-topbar-app-height: 2.25rem;--zui-shell-topbar-app-height-collapsed: 0.3125rem;--zui-shell-nav-width: 15.625rem}}@media(min-width: 64em){:host,:root{--zui-shell-footer-height: 3.0625rem}}:host{contain:none;display:block}.main{display:block;min-height:calc(100vh - (var(--zui-shell-topbar-global-height) + var(--zui-shell-topbar-app-height) + var(--zui-shell-footer-height)) + 0.3125rem);margin-top:calc(var(--zui-shell-topbar-global-height) + var(--zui-shell-topbar-app-height) + var(--zui-shell-banner-height));background:var(--zui-shell-background, var(--zui-background, var(--zui-gray-50)));transition:margin 250ms ease}@media(min-width: 45em){.main{margin-left:var(--zui-shell-nav-width)}}@media(min-width: 45em){.main.no-app-name{min-height:calc(100vh - (var(--zui-shell-topbar-global-height) + var(--zui-shell-topbar-app-height-collapsed) + var(--zui-shell-footer-height) + var(--zui-shell-banner-height)) + 0.3125rem);margin-top:calc(var(--zui-shell-topbar-global-height) + var(--zui-shell-topbar-app-height-collapsed) + var(--zui-shell-banner-height))}}@media(min-width: 30em){.main.nav-collapsed{margin-left:0}}@media(min-width: 45em){.main.nav-collapsed{margin-left:var(--zui-shell-nav-width-collapsed)}}.main.no-nav{margin-left:0}.main.no-appbar{min-height:calc(100vh - (var(--zui-shell-topbar-global-height) + var(--zui-shell-footer-height) + var(--zui-shell-banner-height)) + 0.3125rem);margin-top:calc(var(--zui-shell-topbar-global-height) + var(--zui-shell-banner-height));border-top:.0625rem solid var(--zui-gray-100)}`;

/**
 * Content area that wraps all information for applications.
 *
 * @element zui-shell-content
 *
 * @slot - Default, unnamed slot; for inserting all application content into `<zui-shell-content>`
 */
class ZuiShellContent extends ZuiShellBase {
  static get styles() {
    const result = [super.styles, style$c];
    return result;
  }
  constructor() {
    super();
    this._observeNavCollapseChange = true;
    this._observeHasShellNav = true;
    this._observeHasAppBar = true;
    this._observeBannerHeightChange = true;
  }
  render() {
    return html`
      <main
        role="main"
        class="main ${classMap({
      'nav-collapsed': this._isNavCollapsed,
      'no-nav': !this._hasShellNav,
      'no-appbar': !this._hasAppBar,
      'no-app-name': !this._appName
    })}"
      >
        <slot></slot>
      </main>
    `;
  }
}
window.customElements.define('zui-shell-content', ZuiShellContent);

const style$b = css`:host,:root{--zui-shell-topbar-global-height: 2.875rem;--zui-shell-topbar-app-height: 0.25rem;--zui-shell-topbar-app-height-collapsed: 0.25rem;--zui-shell-nav-width: 75%;--zui-shell-nav-width-collapsed: 3.375rem;--zui-shell-footer-height: 4.25rem}@media(min-width: 45em){:host,:root{--zui-shell-topbar-global-height: 3.75rem;--zui-shell-topbar-app-height: 2.25rem;--zui-shell-topbar-app-height-collapsed: 0.3125rem;--zui-shell-nav-width: 15.625rem}}@media(min-width: 64em){:host,:root{--zui-shell-footer-height: 3.0625rem}}:host .actionbar-container{position:sticky;top:3.75rem;display:flex;width:100%;z-index:1000;justify-content:space-between;align-items:center;padding:.75rem 2.0625rem;background:var(--zui-shell-primary-theme, var(--zui-blue));color:#fff;transition:top .3s ease}@media(max-width: 45em){:host .actionbar-container{padding:.75rem 1rem}}:host h2{margin:0;font-size:1rem;font-weight:600}:host ::slotted(*){margin-left:.75rem}:host ::slotted(zui-button){--zui-button-color: #fff;--zui-button-text-color: var(--zui-shell-primary-theme, var(--zui-blue));--zui-button-hover-color: var(--zui-gray-25);--zui-button-active-color: var(--zui-gray-100);--zui-button-box-shadow-focus: 0 0 0 rem(1) var(--zui-shell-primary-theme, var(--zui-blue)), 0 0 0 rem(2) #fff}:host ::slotted(zui-button.link),:host ::slotted(zui-button[type=link]){--zui-link-button-text-color: #fff;--zui-link-button-hover-color: hsla(0, 0%, 100%, 20%);--zui-link-button-active-color: hsla(0, 0%, 0%, 20%)}:host ::slotted(zui-button.link:hover),:host ::slotted(zui-button[type=link]:hover){--zui-link-button-text-color: 0 0 0 rem(1) var(--zui-shell-primary-theme, var(--zui-blue)), 0 0 0 rem(2) #fff}`;

var __decorate$b = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * `<zui-shell-content-actionbar>` is to be inserted into `<zui-shell-content>` and functions well as a 'Builder' pattern.
 *
 * @slot - Default, unnamed slot; for inserting and placing `<zui-button>` elements into the right side of `<zui-shell-content-actionbar>`
 */
class ZuiShellContentActionbar extends ZuiShellBase {
  constructor() {
    super();
    /**
     * Header text that displays in the actionbar
     */
    this.header = '';
    this._observePageScrollChange = true;
    this._observeBannerHeightChange = true;
  }
  static get styles() {
    return [super.styles, style$b];
  }
  render() {
    const styles = {
      top: `calc(${this._state.topBarHeight} + ${this._state.bannerHeight})`
    };
    return html`
      <div class="actionbar-container" style=${styleMap(styles)}>
        <h2 class="text-container">${this.header}</h2>
        <div class="button-container">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
__decorate$b([property({
  type: String
})], ZuiShellContentActionbar.prototype, "header", void 0);
window.customElements.define('zui-shell-content-actionbar', ZuiShellContentActionbar);

const style$a = css`:host,:root{--zui-shell-topbar-global-height: 2.875rem;--zui-shell-topbar-app-height: 0.25rem;--zui-shell-topbar-app-height-collapsed: 0.25rem;--zui-shell-nav-width: 75%;--zui-shell-nav-width-collapsed: 3.375rem;--zui-shell-footer-height: 4.25rem}@media(min-width: 45em){:host,:root{--zui-shell-topbar-global-height: 3.75rem;--zui-shell-topbar-app-height: 2.25rem;--zui-shell-topbar-app-height-collapsed: 0.3125rem;--zui-shell-nav-width: 15.625rem}}@media(min-width: 64em){:host,:root{--zui-shell-footer-height: 3.0625rem}}.help-training{position:relative;display:flex;min-width:0}@media(min-width: 64em){.help-training{margin-right:.625rem;margin-left:1.25rem}}.help-training.open .help-training-dropdown{display:flex}.help-training zui-button{--zui-button-text-color: var(--zui-shell-primary-theme, var(--zui-blue));--zui-button-hover-color: var(--zui-shell-primary-theme, var(--zui-blue))}.help-training-button{display:flex;height:var(--zui-shell-topbar-global-height);align-items:center;padding:0 .625rem;background:rgba(0,0,0,0);border:0;outline:none;font:inherit;line-height:1.6;cursor:pointer;transition:background 250ms ease-out}@media(min-width: 45em){.help-training-button{margin-left:.625rem}}.help-training-button zui-icon{--zui-icon-size: 1rem;color:var(--zui-blue)}@media(min-width: 45em){.help-training-button zui-icon{--zui-icon-size: 1.5rem}}.help-training-button:hover,.help-training-button:focus,.help-training-button:active{background:var(--zui-gray-50);outline:none}.help-training-button .label{display:none}@media(min-width: 45em){.help-training-button .label{display:inline}}.help-training-dropdown{position:absolute;top:calc(var(--zui-shell-topbar-global-height) + 0.625rem);right:.125rem;display:none;width:12.5rem;z-index:1;flex-direction:column;background-color:#fff;border-radius:.25rem;box-shadow:rgba(0,0,0,.04) 0 .25rem .375rem .125rem,rgba(0,0,0,.06) 0 .125rem .625rem .1875rem,rgba(0,0,0,.02) 0 .25rem .3125rem -0.125rem}@media(min-width: 64em){.help-training-dropdown{top:calc(var(--zui-shell-topbar-global-height) - .625rem)}}.help-training-dropdown::before{position:absolute;top:0;right:0;content:"";width:3.125rem;height:1.875rem;z-index:1;background:var(--zui-gray-50);border-radius:.25rem}.help-training-dropdown::after{position:absolute;top:-0.4375rem;right:.75rem;content:"";width:.9375rem;height:.9375rem;background:var(--zui-gray-50);box-shadow:rgba(0,0,0,.04) 0 .25rem .375rem .125rem,rgba(0,0,0,.06) 0 .125rem .625rem .1875rem,rgba(0,0,0,.02) 0 .25rem .3125rem -0.125rem;transform:rotate(45deg)}.help-training-dropdown .header{padding:.625rem .9375rem;background:var(--zui-gray-50);border-radius:.25rem .25rem 0 0;font-weight:700;text-align:left}::slotted(a),::slotted(button){display:flex;z-index:1;align-items:center;padding:.625rem .9375rem;font-weight:400;line-height:1.15;text-align:left;cursor:pointer;color:var(--zui-gray-800);transition:background-color .3s ease;text-decoration:none}::slotted(a:hover),::slotted(button:hover),::slotted(a:focus),::slotted(button:focus),::slotted(a:active),::slotted(button:active){background-color:var(--zui-gray-50);outline:0}`;

var __decorate$a = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @ignore
 * DO NOT USE. This component will be massively reworked in a future release. Only to be used by <zywave-shell>
 * A component to help render standardized help actions.
 *
 * @element zui-shell-help
 *
 */
class ZuiShellHelp extends ZuiShellBase {
  constructor() {
    super(...arguments);
    this.helpHeader = null;
    this.icon = 'zui-help';
    this.open = false;
  }
  static get styles() {
    return [super.styles, style$a];
  }
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', e => {
      if (!e.composedPath().includes(this)) {
        this._toggleOpen(false);
      }
    });
  }
  #renderMobileTemplate() {
    const icon = this.icon ?? 'zui-help';
    return html`
      <div class="help-training ${classMap({
      open: !!this.open
    })}">
        <button class="help-training-button" @click="${() => this._toggleOpen()}">
          <zui-icon icon="${icon}"></zui-icon>
        </button>
        <div class="help-training-dropdown">
          <div class="header">${this.helpHeader ?? ''}</div>
          <slot></slot>
        </div>
      </div>
    `;
  }
  #renderDesktopTemplate() {
    return html`
      <div class="help-training ${classMap({
      open: !!this.open
    })}">
        <zui-button type="secondary" @click="${() => this._toggleOpen()}">${this.helpHeader}</zui-button>
        <div class="help-training-dropdown">
          <div class="header">${this.helpHeader ?? ''}</div>
          <slot></slot>
        </div>
      </div>
    `;
  }
  render() {
    return this._isMobile || this._isTablet ? this.#renderMobileTemplate() : this.#renderDesktopTemplate();
  }
  _toggleOpen(force) {
    this.open = force !== undefined ? force : !this.open;
  }
}
__decorate$a([property({
  type: String,
  attribute: 'help-header'
})], ZuiShellHelp.prototype, "helpHeader", void 0);
__decorate$a([property({
  type: String
})], ZuiShellHelp.prototype, "icon", void 0);
__decorate$a([property({
  type: Boolean
})], ZuiShellHelp.prototype, "open", void 0);
window.customElements.define('zui-shell-help', ZuiShellHelp);

const style$9 = css`:host,:root{--zui-shell-topbar-global-height: 2.875rem;--zui-shell-topbar-app-height: 0.25rem;--zui-shell-topbar-app-height-collapsed: 0.25rem;--zui-shell-nav-width: 75%;--zui-shell-nav-width-collapsed: 3.375rem;--zui-shell-footer-height: 4.25rem}@media(min-width: 45em){:host,:root{--zui-shell-topbar-global-height: 3.75rem;--zui-shell-topbar-app-height: 2.25rem;--zui-shell-topbar-app-height-collapsed: 0.3125rem;--zui-shell-nav-width: 15.625rem}}@media(min-width: 64em){:host,:root{--zui-shell-footer-height: 3.0625rem}}.user-profile-submenu .actions a,.user-profile-submenu .notification-details a{cursor:pointer;color:var(--zui-blue);text-decoration:none}.user-profile-submenu .actions a:hover,.user-profile-submenu .notification-details a:hover{color:var(--zui-blue-400);text-decoration:underline}.user-profile-submenu .actions a:focus,.user-profile-submenu .notification-details a:focus{outline:.0625rem solid var(--zui-blue);outline-offset:.25rem;text-decoration:none}.user-profile-submenu .actions a:active,.user-profile-submenu .notification-details a:active{outline:none;color:var(--zui-blue-600);text-decoration:underline}:host{position:relative;display:block;color:var(--zui-gray-600)}:host([open]) .user-profile{background:var(--zui-gray-50)}:host([open]) .user-profile-submenu{display:flex}.user-profile{position:relative;display:flex;height:var(--zui-shell-topbar-global-height);align-items:center;padding:0 1.25rem 0 .625rem;background:rgba(0,0,0,0);border:0;outline:none;font:inherit;line-height:1.6;cursor:pointer;transition:background 250ms ease-out}.user-profile:hover{background:var(--zui-gray-50)}.user-profile:focus,.user-profile:active{background:var(--zui-gray-50)}.user-profile .user-profile-info{display:none;text-align:right}@media(min-width: 64em){.user-profile .user-profile-info{display:block}}.user-profile .user-profile-info .display-name{font-weight:600}.user-profile .user-profile-info .profile-name{font-size:.75rem}.user-profile .user-avatar{width:1.875rem;height:1.875rem;margin-left:0rem;transition:width 100ms ease,height 100ms ease}@media(min-width: 64em){.user-profile .user-avatar{width:2.25rem;height:2.25rem;margin-left:.625rem}}.username,.profile-detail{font-size:.75rem;color:var(--zui-gray-500)}.user-avatar,.profile-avatar{display:flex;width:2.25rem;height:2.25rem;flex-shrink:0;justify-content:center;align-items:center;border-radius:50%;font-weight:600;letter-spacing:.0625rem}.user-avatar{background:var(--zui-shell-user-avatar-background, var(--zui-gray-500));color:var(--zui-shell-user-avatar-color, #fff)}.user-avatar.impersonating{background:#fff;color:#78788c}.user-avatar .avatar-icon{display:flex}.user-avatar .avatar-image{width:100%;height:100%;overflow:hidden;border-radius:50%}.user-avatar .avatar-image zui-icon{--zui-icon-size: 1.875rem}@media(min-width: 64em){.user-avatar .avatar-image zui-icon{--zui-icon-size: 2.25rem}}.user-avatar .avatar-image img{width:100%;height:auto}.notification-count{position:absolute;top:.3125rem;right:.625rem;display:flex;width:1.3125rem;height:1.3125rem;z-index:1;justify-content:center;align-items:center;background:var(--zui-red);border:.0625rem solid #fff;border-radius:50%;font-size:.625rem;color:#fff}.user-profile-submenu{position:absolute;top:calc(var(--zui-shell-topbar-global-height) + 0.625rem);right:.625rem;display:none;width:21.875rem;flex-direction:column;background-color:#fff;border-radius:.25rem;box-shadow:rgba(0,0,0,.04) 0 .25rem .375rem .125rem,rgba(0,0,0,.06) 0 .125rem .625rem .1875rem,rgba(0,0,0,.02) 0 .25rem .3125rem -0.125rem}.user-profile-submenu::before{position:absolute;top:0;right:0;content:"";width:3.125rem;height:1.875rem;z-index:1;background:var(--zui-gray-50);border-radius:.25rem}.user-profile-submenu::after{position:absolute;top:-0.4375rem;right:.75rem;content:"";width:.9375rem;height:.9375rem;background:var(--zui-gray-50);box-shadow:rgba(0,0,0,.04) 0 .25rem .375rem .125rem,rgba(0,0,0,.06) 0 .125rem .625rem .1875rem,rgba(0,0,0,.02) 0 .25rem .3125rem -0.125rem;transform:rotate(45deg)}.user-profile-submenu .header{padding:.625rem .9375rem;background:var(--zui-gray-50);font-weight:700}.user-profile-submenu .header:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.user-profile-submenu .header .impersonating-header{font-weight:400}.user-profile-submenu .user-details,.user-profile-submenu .profile-details,.user-profile-submenu .notification-details{display:flex;align-items:center;margin:.625rem .9375rem .6875rem}.user-profile-submenu .user-info,.user-profile-submenu .profile-info{width:100%}.user-profile-submenu .user-avatar,.user-profile-submenu .profile-avatar,.user-profile-submenu .notification-count{margin-right:.625rem;margin-left:0}.user-profile-submenu .feature-flags{display:block;width:100%}.user-profile-submenu .profile-details{align-items:flex-start}.user-profile-submenu .profile-avatar{background:var(--zui-shell-profile-avatar-background, var(--zui-blue-500));color:var(--zui-shell-profile-avatar-color, #fff)}.user-profile-submenu .profile-avatar.impersonating{background:#fff;color:#78788c}.user-profile-submenu .profile-avatar.impersonating svg{width:100%;height:auto}.user-profile-submenu .profile-info .impersonating-as{text-transform:capitalize}.user-profile-submenu .actions{display:flex;align-items:center;margin:.5625rem 1.875rem 1.25rem 3.8125rem}.user-profile-submenu .actions .right{margin-left:auto}.user-profile-submenu .notification-details{margin-right:1.875rem;padding:.625rem 0rem}.user-profile-submenu .notification-details .notification-count{position:static;display:flex;width:2.25rem;height:2.25rem;border:0;font-size:.875rem}.user-profile-submenu .notification-details a{margin-left:auto}.unauthenticated-user{display:flex;height:var(--zui-shell-topbar-global-height);align-items:center}.login-user-link{position:relative;display:flex;min-height:2.25rem;align-items:center;margin-right:.625rem;padding:0 .625rem;background-color:#fff;border:0;outline:none;outline:none;font:inherit;font-weight:600;line-height:1;white-space:nowrap;color:var(--zui-blue);transition:background 250ms ease-out;text-decoration:none}.login-user-link:visited{color:var(--zui-blue)}.login-user-link:hover{color:var(--zui-blue-400)}.login-user-link:focus{box-shadow:inset 0 0 0 .0625rem var(--zui-blue)}.login-user-link:active{background:var(--zui-gray-200)}@media(min-width: 45em){.login-user-link{margin-right:1.25rem}}a{cursor:pointer}`;

var __decorate$9 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Topbar feature that encompasses information about the User Principle, User Profile, impersonation, and notifications.
 *
 * @element zui-shell-user
 *
 * @event switchprofile - An event that indicates a user is requesting to switch profile
 *
 * @csspart login - The login link; this is exposed as a CSS shadow part and can be accessed with `::part(login)`
 * @csspart userprofile - The user profile button; this is exposed as a CSS shadow part and can be accessed with `::part(userprofile)`
 *
 * @cssprop [--zui-shell-user-avatar-background=var(--zui-gray)] - Background color of the avatar when user principle initials are used to represent the current logged in user
 * @cssprop [--zui-shell-user-avatar=#fff] - Icon/text color of the principal user initials in the avatar
 * @cssprop [--zui-shell-profile-avatar-background=var(--zui-blue)] - Background color of the icon that represents the profile in context
 * @cssprop [--zui-shell-profile-avatar-color=white] - Icon/text color of the profile in context
 */
class ZuiShellUser extends ZuiShellBase {
  constructor() {
    super(...arguments);
    /**
     * The first name of the user. It should be set to the `given_name` claim of the user principal. This may not yet be available on some principals, but will be back filled with profile information by an upcoming auth release. This component gracefully falls back to username.
     */
    this.givenName = '';
    /**
     * The last name of the user. It should be set to the `family_name` claim of the user principal. This may not yet be available on some principals, but will be back filled with profile information by an upcoming auth release. This component gracefully falls back to username.
     */
    this.familyName = '';
    /**
     * This is the display name of the profile in context and will vary from profile type to profile type.
     */
    this.profileName = '';
    /**
     * This is additional profile information displayed as subtext. It should generally represent the location and/or profile name. You may want to make this a function to ensure a clean rendering with the assumption of missing claims.
     */
    this.profileDetail = '';
    /**
     * This is the username of the user. It should be set to the `preferred_username` claim of the user principal.
     */
    this.username = '';
    /**
     * This is a URL to user self service tool. It should be set to `https://profiles.zywave.com` per environment.
     */
    this.manageUserUrl = '';
    /**
     * This is a URL to the logout page of the application.
     */
    this.logoutUserUrl = null;
    /**
     * This is a URL to the proper edit page for the profile in context.
     */
    this.manageProfileUrl = null;
    /**
     * This is a URL to the local switch profile path. **This should only be set if the user has multiple contextual profiles available.**
     */
    this.switchProfileUrl = null;
    /**
     * This indicates that the user has multiple profiles, and should be presented UI to help navigate that feature (this will need to be set at a future date)
     */
    this.hasMultipleProfiles = false;
    /**
     * This is a URI of the avatar of the user. It should be set to the "picture" claim of the user principal.
     */
    this.avatar = null;
    /**
     * This is the text that appears above the user section. Should be set to localized "User".
     */
    this.userHeader = 'User';
    /**
     * This is the text that appears above the profile section. Should be set to localized phrase representing the profile type such as "Agency Profile", "Employer Profile" or just simply "Profile".
     */
    this.profileHeader = 'Profile';
    /**
     * This is the text that appears as the manage user link. Should be set to localized "Manage User".
     */
    this.manageUserText = 'Manage user';
    /**
     * This is the text that appears as the logout user link. Should be set to localized "Logout".
     */
    this.logoutUserText = 'Log out';
    /**
     * This is the text that appears as the manage profile link. Should be set to localized "Manage Profile".
     */
    this.manageProfileText = 'Manage profile';
    /**
     * This is the text that appears as the switch profile link. Should be set to localized "Switch".
     */
    this.switchProfileText = 'Switch';
    /**
     * Boolean for when the user dropdown is open.
     */
    this.open = false;
    /**
     * This is the how many unread notifications the user/profile has
     */
    this.notificationCount = 0;
    /**
     * This is the text that appears above the notification section.
     */
    this.notificationHeader = 'Notifications';
    /**
     * This is the text that appears after the notification count in profile section.
     */
    this.viewNotificationTitle = 'New notifications';
    /**
     * This is the text that appears when there are no new notifications in the notifications section of the user dropdown.
     */
    this.noNotificationTitle = 'No new notifications';
    /**
     * This is the text that appears as the notification inbox link.
     */
    this.viewNotificationText = 'View all';
    /**
     * This is a URL to the notification inbox (ex: `dev-zh.zywave.com/notifications/inbox`).
     */
    this.viewNotificationUrl = '';
    /**
     * This property is required for all the impersonation properties to work and show.
     */
    this.impersonating = false;
    /**
     * Text for the current user impersonating another profile.
     */
    this.impersonatingAction = 'acting as';
    /**
     * Name of the profile the current user is impersonating.
     */
    this.impersonatingProfileName = '';
    /**
     * First name of the user associated with the profile the current user is impersonating.
     */
    this.impersonatingGivenName = '';
    /**
     * Last name of the user associated with the profile the current user is impersonating.
     */
    this.impersonatingFamilyName = '';
    /**
     * Indicates that the user is currently unauthenticated, and should be given access to login.
     */
    this.unauthenticated = false;
    /**
     * This is the text that displays to unauthenticated users to login.
     */
    this.loginUserText = 'Log in';
    /**
     * The url where unauthenticated users can be redirected to login.
     */
    this.loginUserUrl = 'https://auth.zywave.com/';
  }
  /**
   * Display name of the current user principal
   * @default [firstName lastName | username]
   */
  get displayName() {
    const {
      givenName,
      familyName,
      username
    } = this;
    let displayName = `${givenName} ${familyName}`.trim();
    if (!displayName) {
      displayName = username;
    }
    return displayName;
  }
  /**
   * Initials of the current user principal
   */
  get initials() {
    const {
      givenName,
      familyName
    } = this;
    let initials = '';
    if (givenName) {
      initials += givenName[0];
    }
    if (familyName) {
      initials += familyName[0];
    }
    return initials.trim();
  }
  /**
   * Display name of the user profile being impersonated
   */
  get impersonatingDisplayName() {
    const {
      impersonatingGivenName,
      impersonatingFamilyName,
      impersonatingProfileName
    } = this;
    let impersonatingDisplayName = `${impersonatingGivenName} ${impersonatingFamilyName}`.trim();
    if (!impersonatingDisplayName) {
      impersonatingDisplayName = impersonatingProfileName;
    }
    return impersonatingDisplayName;
  }
  static get styles() {
    return [super.styles, style$9];
  }
  get #formattedNotificationCount() {
    let notificationCount = this.notificationCount;
    if (notificationCount > 99) {
      notificationCount = '99+';
    }
    return notificationCount;
  }
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', e => {
      if (!e.composedPath().includes(this)) {
        this.open = false;
      }
    });
  }
  render() {
    if (this.unauthenticated) {
      return html`
        <div class="unauthenticated-user">
          <a part="login" class="login-user-link" href="${this.loginUserUrl}">${this.loginUserText}</a>
        </div>
      `;
    }
    return html`
      <button
        part="userprofile"
        class="user-profile"
        aria-label="Toggle user profile dropdown"
        @click="${this.#openUserProfile}"
      >
        ${this.#getNotificationCountHtml()}
        <div class="user-profile-info">
          <div class="display-name">${this.displayName}</div>
          ${this.#getProfileHtml()}
        </div>
        ${this.#getAvatarHtml()}
      </button>
      ${this.#getSubmenuHtml()}
    `;
  }
  #getProfileHtml() {
    const {
      impersonating,
      impersonatingAction,
      impersonatingDisplayName,
      profileName
    } = this;
    return html`
      ${impersonating ? html` <div class="profile-name impersonating-as">${impersonatingAction} ${impersonatingDisplayName}</div> ` : html` <div class="profile-name">${profileName}</div> `}
    `;
  }
  #getNotificationCountHtml() {
    if (this.#formattedNotificationCount) {
      return html`
        <span title="${this.notificationCount}" class="notification-count"> ${this.#formattedNotificationCount} </span>
      `;
    }
  }
  #openUserProfile() {
    this.open = !this.open;
  }
  #getAvatarHtml() {
    const {
      avatar,
      initials,
      displayName,
      impersonating
    } = this;
    let avatarHtml = html` <div class="avatar-icon"><zui-icon icon="zui-user" class="small"></zui-icon></div> `;
    if (impersonating) {
      avatarHtml = html` <div class="avatar-image"><zui-icon icon="zui-shell-impersonation"></zui-icon></div> `;
    } else {
      if (avatar) {
        avatarHtml = html` <div class="avatar-image"><img src="${avatar}" alt="${displayName}" /></div> `;
      } else if (initials) {
        avatarHtml = html` <div class="avatar-initials">${initials}</div> `;
      }
    }
    return html` <div class="user-avatar ${impersonating ? 'impersonating' : ''}"> ${avatarHtml} </div> `;
  }
  #getSubmenuAvatarHtml() {
    const {
      avatar,
      initials,
      displayName
    } = this;
    let avatarHtml = html` <div class="avatar-icon"><zui-icon icon="zui-user" class="small"></zui-icon></div> `;
    if (avatar) {
      avatarHtml = html` <div class="avatar-image"><img src="${avatar}" alt="${displayName}" /></div> `;
    } else if (initials) {
      avatarHtml = html` <div class="avatar-initials">${initials}</div> `;
    }
    return html` <div class="user-avatar"> ${avatarHtml} </div> `;
  }
  #getSubmenuHtml() {
    return html`
      <div class="user-profile-submenu">
        ${this.#getSubmenuUserHtml()} ${this.#getSubmenuFeatureFlagsHtml()} ${this.#getSubmenuProfileHtml()}
        ${this.#getSubmenuNotificationHtml()}
      </div>
    `;
  }
  #getSubmenuNotificationHtml() {
    const {
      notificationHeader,
      viewNotificationText,
      viewNotificationTitle,
      viewNotificationUrl,
      noNotificationTitle
    } = this;
    if (!viewNotificationUrl) {
      return html``;
    }
    return html`
      <div class="header"> ${notificationHeader} </div>
      <div class="notification-details">
        ${this.#formattedNotificationCount ? html`
              <div title="${this.notificationCount}" class="notification-count"
                >${this.#formattedNotificationCount}</div
              >
              <div class="notification-title">${viewNotificationTitle}</div>
            ` : html` <div class="notification-title">${noNotificationTitle}</div> `}
        <a href="${viewNotificationUrl}">${viewNotificationText}</a>
      </div>
    `;
  }
  #getSubmenuUserHtml() {
    const {
      userHeader,
      displayName,
      username,
      manageUserUrl,
      manageUserText,
      logoutUserUrl,
      logoutUserText
    } = this;
    if (!displayName) {
      return html``;
    }
    return html`
      <div class="header">${userHeader}</div>
      <div class="user-details">
        ${this.#getSubmenuAvatarHtml()}
        <div class="user-info">
          <div class="display-name">${displayName}</div>
          <div class="username">${username !== displayName ? username : ''}</div>
        </div>
      </div>
      ${manageUserUrl || logoutUserUrl ? html`
            <div class="actions">
              ${manageUserUrl ? html` <a href="${manageUserUrl}">${manageUserText}</a> ` : ''}
              ${logoutUserUrl ? html` <a class="right" href="${logoutUserUrl}">${logoutUserText}</a> ` : ''}
            </div>
          ` : ''}
    `;
  }
  #getSubmenuFeatureFlagsHtml() {
    return html`<div class="feature-flags"><slot name="feature-flags"></slot></div>`;
  }
  #getSubmenuProfileHtml() {
    const {
      profileHeader,
      profileName,
      profileDetail,
      manageProfileUrl,
      manageProfileText,
      switchProfileUrl,
      switchProfileText,
      impersonating,
      impersonatingAction,
      impersonatingDisplayName,
      hasMultipleProfiles
    } = this;
    if (!profileName) {
      return html``;
    }
    return html`
      <div class="header"
        >${profileHeader}
        ${impersonating ? html` <span class="impersonating-header">(${impersonatingAction})</span> ` : ''}</div
      >
      <div class="profile-details">
        <div class="profile-avatar ${impersonating ? 'impersonating' : ''}">
          ${impersonating ? html` <zui-icon icon="zui-shell-impersonation" class="small"></zui-icon> ` : html` <zui-icon icon="zui-building" class="small"></zui-icon> `}
        </div>
        <div class="profile-info">
          ${impersonating ? html`
                <div class="profile-name">${impersonatingDisplayName}</div>
                <div class="profile-detail">${profileName}</div>
                <div class="profile-detail">${profileDetail !== profileName ? profileDetail : ''}</div>
              ` : html`
                <div class="profile-name">${profileName}</div>
                <div class="profile-detail">${profileDetail !== profileName ? profileDetail : ''}</div>
              `}
        </div>
      </div>
      ${manageProfileUrl || switchProfileUrl || hasMultipleProfiles ? html`
            <div class="actions">
              ${manageProfileUrl ? html` <a href="${manageProfileUrl}">${manageProfileText}</a> ` : ''}
              ${switchProfileUrl || hasMultipleProfiles ? html`
                    <a
                      class="right"
                      href="${ifDefined(switchProfileUrl ?? undefined)}"
                      @click="${this.#onSwitchProfile}"
                      >${switchProfileText}</a
                    >
                  ` : ''}
            </div>
          ` : ''}
    `;
  }
  #onSwitchProfile() {
    if (!this.switchProfileUrl) {
      this.dispatchEvent(new CustomEvent('switchprofile', {
        bubbles: true
      }));
    }
  }
}
__decorate$9([property({
  type: String,
  attribute: 'given-name'
})], ZuiShellUser.prototype, "givenName", void 0);
__decorate$9([property({
  type: String,
  attribute: 'family-name'
})], ZuiShellUser.prototype, "familyName", void 0);
__decorate$9([property({
  type: String,
  attribute: 'profile-name'
})], ZuiShellUser.prototype, "profileName", void 0);
__decorate$9([property({
  type: String,
  attribute: 'profile-detail'
})], ZuiShellUser.prototype, "profileDetail", void 0);
__decorate$9([property({
  type: String,
  attribute: 'username'
})], ZuiShellUser.prototype, "username", void 0);
__decorate$9([property({
  type: String,
  attribute: 'manage-user-url'
})], ZuiShellUser.prototype, "manageUserUrl", void 0);
__decorate$9([property({
  type: String,
  attribute: 'logout-user-url'
})], ZuiShellUser.prototype, "logoutUserUrl", void 0);
__decorate$9([property({
  type: String,
  attribute: 'manage-profile-url'
})], ZuiShellUser.prototype, "manageProfileUrl", void 0);
__decorate$9([property({
  type: String,
  attribute: 'switch-profile-url'
})], ZuiShellUser.prototype, "switchProfileUrl", void 0);
__decorate$9([property({
  type: Boolean,
  attribute: 'has-multiple-profiles'
})], ZuiShellUser.prototype, "hasMultipleProfiles", void 0);
__decorate$9([property({
  type: String,
  attribute: 'avatar'
})], ZuiShellUser.prototype, "avatar", void 0);
__decorate$9([property({
  type: String,
  attribute: 'user-header'
})], ZuiShellUser.prototype, "userHeader", void 0);
__decorate$9([property({
  type: String,
  attribute: 'profile-header'
})], ZuiShellUser.prototype, "profileHeader", void 0);
__decorate$9([property({
  type: String,
  attribute: 'manage-user-text'
})], ZuiShellUser.prototype, "manageUserText", void 0);
__decorate$9([property({
  type: String,
  attribute: 'logout-user-text'
})], ZuiShellUser.prototype, "logoutUserText", void 0);
__decorate$9([property({
  type: String,
  attribute: 'manage-profile-text'
})], ZuiShellUser.prototype, "manageProfileText", void 0);
__decorate$9([property({
  type: String,
  attribute: 'switch-profile-text'
})], ZuiShellUser.prototype, "switchProfileText", void 0);
__decorate$9([property({
  type: Boolean,
  reflect: true
})], ZuiShellUser.prototype, "open", void 0);
__decorate$9([property({
  type: Number,
  attribute: 'notification-count'
})], ZuiShellUser.prototype, "notificationCount", void 0);
__decorate$9([property({
  type: String,
  attribute: 'notification-header'
})], ZuiShellUser.prototype, "notificationHeader", void 0);
__decorate$9([property({
  type: String,
  attribute: 'notification-title'
})], ZuiShellUser.prototype, "viewNotificationTitle", void 0);
__decorate$9([property({
  type: String,
  attribute: 'no-notification-title'
})], ZuiShellUser.prototype, "noNotificationTitle", void 0);
__decorate$9([property({
  type: String,
  attribute: 'view-notifications-text'
})], ZuiShellUser.prototype, "viewNotificationText", void 0);
__decorate$9([property({
  type: String,
  attribute: 'view-notifications-url'
})], ZuiShellUser.prototype, "viewNotificationUrl", void 0);
__decorate$9([property({
  type: Boolean
})], ZuiShellUser.prototype, "impersonating", void 0);
__decorate$9([property({
  type: String,
  attribute: 'impersonating-action'
})], ZuiShellUser.prototype, "impersonatingAction", void 0);
__decorate$9([property({
  type: String,
  attribute: 'impersonating-profile-name'
})], ZuiShellUser.prototype, "impersonatingProfileName", void 0);
__decorate$9([property({
  type: String,
  attribute: 'impersonating-given-name'
})], ZuiShellUser.prototype, "impersonatingGivenName", void 0);
__decorate$9([property({
  type: String,
  attribute: 'impersonating-family-name'
})], ZuiShellUser.prototype, "impersonatingFamilyName", void 0);
__decorate$9([property({
  type: Boolean
})], ZuiShellUser.prototype, "unauthenticated", void 0);
__decorate$9([property({
  type: String,
  attribute: 'login-user-text'
})], ZuiShellUser.prototype, "loginUserText", void 0);
__decorate$9([property({
  type: String,
  attribute: 'login-user-url'
})], ZuiShellUser.prototype, "loginUserUrl", void 0);
window.customElements.define('zui-shell-user', ZuiShellUser);

const style$8 = css`:host,:root{--zui-shell-topbar-global-height: 2.875rem;--zui-shell-topbar-app-height: 0.25rem;--zui-shell-topbar-app-height-collapsed: 0.25rem;--zui-shell-nav-width: 75%;--zui-shell-nav-width-collapsed: 3.375rem;--zui-shell-footer-height: 4.25rem}@media(min-width: 45em){:host,:root{--zui-shell-topbar-global-height: 3.75rem;--zui-shell-topbar-app-height: 2.25rem;--zui-shell-topbar-app-height-collapsed: 0.3125rem;--zui-shell-nav-width: 15.625rem}}@media(min-width: 64em){:host,:root{--zui-shell-footer-height: 3.0625rem}}:host{--zui-banner-theme-color: var(--zui-blue);position:fixed;top:0;display:block;width:100%;z-index:4001}:host([type=success]){--zui-banner-theme-color: var(--zui-green)}:host([type=error]){--zui-banner-theme-color: var(--zui-red)}:host([type=warning]){--zui-banner-theme-color: var(--zui-yellow)}.banner-wrapper{position:relative;top:0;display:flex;width:100%;align-items:center;background-color:var(--zui-banner-theme-color);text-align:center;transition:transform .3s ease}.banner-wrapper.scrolled{top:0 !important}.banner-close-button{right:0;display:flex;align-items:center;cursor:pointer}.banner-close-button.hide{display:none}.banner-close-button zui-icon{fill:var(--zui-gray-800)}.banner-message{display:flex;align-items:center;margin-right:auto;margin-left:auto;padding:1rem .5rem 1rem .5rem}.banner-icon{--zui-icon-color: var(--zui-gray-800);display:flex;align-items:center;margin-right:.5rem;margin-left:.5rem}`;

var __decorate$8 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * `<zui-shell-banner>` is used to display system information to the user.
 *
 * @element zui-shell-banner
 *
 * @slot - Default, unnamed slot; for inserting content into `<zui-shell-banner>`
 *
 */
class ZuiShellBanner extends ZuiShellBase {
  #isDismissed;
  #height;
  static get styles() {
    return [super.styles, style$8];
  }
  constructor() {
    super();
    /**
     * The type determines which `zui-icon` to display and which color theme to apply
     * @type {"info" | "success" | "error" | "warning"}
     */
    this.type = 'info';
    /**
     * Determines whether the banner can be dismissed
     */
    this.dismissible = false;
    this.#isDismissed = false;
    this.#height = 0;
    this._observeBannerHeightChange = true;
  }
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener(pageScrollChangeEventName, e => this.#onTopbarVisibility(e));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener(pageScrollChangeEventName, e => this.#onTopbarVisibility(e));
  }
  #computeIcon(type) {
    switch (type) {
      case 'error':
        return 'zui-error';
      case 'success':
        return 'zui-success';
      case 'warning':
        return 'zui-warning';
      case 'info':
      default:
        return 'zui-info';
    }
  }
  dismiss() {
    if (this.dismissible) {
      this.#isDismissed = true;
      this.#dispatchBannerHeightChangeEvent();
    }
  }
  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    new ResizeObserver(() => {
      const style = window.getComputedStyle(this._bannerWrapper);
      const currentHeight = parseFloat(style.getPropertyValue('height'));
      if (currentHeight !== this.#height) {
        this.#height = currentHeight;
        this.#dispatchBannerHeightChangeEvent();
      }
    }).observe(this);
  }
  #onTopbarVisibility(e) {
    const event = e;
    const topbarVisible = event.detail.topbarVisible;
    if (topbarVisible) {
      this.#showBanner();
    } else {
      this.#hideBanner();
    }
  }
  #showBanner() {
    this._state.bannerScroll = false;
    this.#dispatchBannerHeightChangeEvent();
  }
  #hideBanner() {
    this._state.bannerScroll = true;
    this.#dispatchBannerHeightChangeEvent();
  }
  #dispatchBannerHeightChangeEvent() {
    const height = this._state.bannerScroll || this.#isDismissed ? 0 : this.#height;
    const cssHeight = `${height}px`;
    this._state.bannerHeight = cssHeight;
    const zuiShell = document.querySelector('zui-shell');
    if (zuiShell) {
      zuiShell?.style.setProperty('--zui-shell-banner-height', cssHeight);
    } else {
      const parent = this.parentElement;
      parent?.style.setProperty('--zui-shell-banner-height', cssHeight);
    }
    this.dispatchEvent(new CustomEvent(bannerHeightChangeEventName, {
      detail: {
        height: cssHeight
      },
      bubbles: true,
      composed: true
    }));
  }
  render() {
    const icon = this.#computeIcon(this.type);
    const bannerStyle = {};
    if (this.#isDismissed || this._state.bannerScroll) {
      bannerStyle.transform = `translateY(calc(${this.#height}px * -1))`;
    }
    return html`
      <div style="${styleMap(bannerStyle)}" id="banner-wrapper" class="banner-wrapper">
        <div class="banner-message">
          <zui-icon class="small banner-icon" icon="${icon}"></zui-icon>
          <slot></slot
        ></div>
        <zui-button
          class="banner-close-button link icon-only 
            ${classMap({
      hide: this.dismissible === false
    })}"
          @click="${this.dismiss}"
          tabindex="0"
          aria-label="close"
        >
          <zui-icon icon="zui-remove" class="small"></zui-icon>
        </zui-button>
      </div>
    `;
  }
}
__decorate$8([property({
  type: String,
  attribute: 'type',
  reflect: true
})], ZuiShellBanner.prototype, "type", void 0);
__decorate$8([property({
  type: Boolean,
  attribute: 'dismissible',
  reflect: true
})], ZuiShellBanner.prototype, "dismissible", void 0);
__decorate$8([query('#banner-wrapper')], ZuiShellBanner.prototype, "_bannerWrapper", void 0);
window.customElements.define('zui-shell-banner', ZuiShellBanner);

const style$7 = css`:host{--zui-slider-thumb-size: 1.875rem;display:block;padding:calc(var(--zui-slider-thumb-size)/2) 0}:host input{width:100%;height:.25rem;vertical-align:middle;background:var(--zui-gray-200);border-radius:3px;outline:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none}:host input:disabled{cursor:not-allowed}:host input::-webkit-slider-thumb{width:var(--zui-slider-thumb-size);height:var(--zui-slider-thumb-size);background-color:var(--zui-blue);border-radius:50%;-webkit-appearance:none}:host input:disabled::-webkit-slider-thumb{background-color:var(--zui-gray)}:host input::-moz-range-thumb{width:var(--zui-slider-thumb-size);height:var(--zui-slider-thumb-size);background-color:var(--zui-blue);border:0;border-radius:50%;-moz-appearance:none}:host input:disabled::-moz-range-thumb{background-color:var(--zui-gray)}:host span{position:absolute;top:.0625rem;display:flex;width:var(--zui-slider-thumb-size);height:100%;justify-content:center;align-items:center;font-weight:600;color:#fff;pointer-events:none}`;

var __decorate$7 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const DEFAULT_MAX = 100;
/**
 * A range form control for choosing values along a slider.
 * @element zui-slider
 *
 * @attr {string | null} [name=null] - The name of this element that is associated with form submission
 * @attr {boolean} [disabled=false] - Represents whether a user can make changes to this element; if true, the value of this element will be excluded from the form submission
 * @attr {boolean} [readonly=false] - Represents whether a user can make changes to this element; the value of this element will still be included in the form submission
 * @attr {boolean} [autofocus=false] - If true, this element will be focused when connected to the document
 * @attr {number} [value=50] - Represents the value of the input. Can be set to a default value, and will reflect the value provided by the user when interactive with the control
 *
 * @prop {string | null} [name=null] - The name of this element that is associated with form submission
 * @prop {boolean} [disabled=false] - Represents whether a user can make changes to this element; if true, the value of this element will be excluded from the form submission
 * @prop {boolean} [readOnly=false] - Represents whether a user can make changes to this element; the value of this element will still be included in the form submission
 * @prop {boolean} [autofocus=false] - If true, this element will be focused when connected to the document
 * @prop {number} [valueAsNumber=50] - Returns the value of the element, interpreted as one of the following, in order: A number, NaN if conversion is impossible
 * @prop {string} [value='50'] - Represents the value of the input. Can be set to a default value, and will reflect the value provided by the user when interactive with the control
 * @prop {number} [progress=50] - Determines visual placement of the slider thumb along the line
 *
 * @cssprop [--zui-slider-thumb-size=1.875rem (30px)] - Point of contact to grab and slide to change value
 *
 * @event {CustomEvent} change - Fires when value changes, details contain `value`
 */
class ZuiSlider extends ZuiFormAssociatedElement {
  constructor() {
    super(...arguments);
    this.#defaultValue = `${DEFAULT_MAX / 2}`;
    this.#value = `${DEFAULT_MAX / 2}`;
    /**
     * Represents the maximum permitted value
     */
    this.min = 0;
    /**
     * Represents the maximum permitted value
     */
    this.max = 100;
    /**
     * Represents the stepping interval, used both for user interface and validation purposes
     */
    this.step = 0;
    /**
     * Represents that this control must be filled in for form submission
     */
    this.noText = false;
  }
  get _focusControlSelector() {
    return 'input';
  }
  get _formValue() {
    return this.value;
  }
  formResetCallback() {
    this.value = this.#defaultValue;
  }
  #defaultValue;
  #value;
  get value() {
    return this.#value;
  }
  set value(val) {
    const oldVal = this.#value;
    val = this._ensureValidValue(val);
    this.#value = val;
    this._setFormValue(this.#value);
    this.requestUpdate('value', oldVal);
  }
  get valueAsNumber() {
    return parseFloat(this.#value);
  }
  get progress() {
    return (this.valueAsNumber - this.min) / (this.max - this.min) * 100;
  }
  static get styles() {
    return [super.styles, style$7];
  }
  connectedCallback() {
    super.connectedCallback();
    // we want to go a little faster than LitElement and behave more like native HTML Form Associated Elements
    let value = this.getAttribute('value') ?? this.value;
    const max = this.getAttribute('max') ?? this.max;
    const min = this.getAttribute('min') ?? this.min;
    value = this._ensureValidValue(value, min, max);
    this.#defaultValue = value;
    this._setFormValue(value.toString());
  }
  render() {
    const progressColor = this.disabled ? 'var(--zui-gray)' : 'var(--zui-blue)';
    const styles = {
      background: `linear-gradient(to right, ${progressColor} 0%, ${progressColor} ${this.progress}%, var(--zui-gray-200) ${this.progress}%, var(--zui-gray-200) 100%)`
    };
    return html`<input
        style=${styleMap(styles)}
        type="range"
        .value="${this.value}"
        .min="${this.min}"
        .max="${this.max}"
        .step="${this.step}"
        ?disabled="${this.disabled}"
        @input="${this._onInput}"
        @change="${this._onChange}"
      />${this._renderText()}`;
  }
  _renderText() {
    if (this.noText) {
      return html``;
    }
    const thumbOffset = `var(--zui-slider-thumb-size) * ${this.progress / 100}`;
    const styles = {
      left: `calc(${this.progress}% - ${thumbOffset} + 0.125rem)`
    };
    return html`<span style=${styleMap(styles)}>${this.value}</span>`;
  }
  _onInput(e) {
    this.value = e.target.value;
  }
  _onChange() {
    this.dispatchEvent(new CustomEvent('change', {
      detail: this.value,
      bubbles: true
    }));
  }
  _ensureValidValue(value, min, max) {
    if (value === '') {
      return value;
    }
    min = min ?? this.min;
    max = max ?? this.max;
    if (typeof value === 'string') {
      value = parseFloat(value);
    }
    if (typeof min === 'string') {
      min = parseFloat(min);
    }
    if (typeof max === 'string') {
      max = parseFloat(max);
    }
    if (value < min) {
      value = min;
    } else if (value > max) {
      value = max;
    }
    return value.toString();
  }
}
__decorate$7([property()], ZuiSlider.prototype, "value", null);
__decorate$7([property({
  type: Number
})], ZuiSlider.prototype, "min", void 0);
__decorate$7([property({
  type: Number,
  attribute: 'max'
})], ZuiSlider.prototype, "max", void 0);
__decorate$7([property({
  type: Number
})], ZuiSlider.prototype, "step", void 0);
__decorate$7([property({
  type: Boolean,
  attribute: 'no-text'
})], ZuiSlider.prototype, "noText", void 0);
window.customElements.define('zui-slider', ZuiSlider);

const style$6 = css`:host{--zui-tabs-color: var(--zui-blue);width:100%}.tabs-container{position:relative;display:flex;width:100%;height:3.6875rem;align-items:center;border-bottom:1px solid var(--zui-gray-200);font-size:inherit;font-weight:inherit}.tabs-container:focus-within,.tabs-container:focus{outline:0}button#scroll-left,button#scroll-right{position:absolute;display:flex;padding:.625rem 0;background:rgba(0,0,0,0);border:0;border-radius:.25rem;outline:none;cursor:pointer;transition:background .5s ease-in,opacity .5s ease-in}button#scroll-left:focus,button#scroll-left:hover,button#scroll-right:focus,button#scroll-right:hover{background:var(--zui-gray-100)}button#scroll-left:active zui-icon,button#scroll-right:active zui-icon{fill:var(--zui-tabs-color);transform:scale(1.3)}button#scroll-left zui-icon,button#scroll-right zui-icon{fill:var(--zui-gray-500);transition:transform .3s ease-in;pointer-events:none}button#scroll-left.disabled,button#scroll-right.disabled{opacity:0;pointer-events:none}button#scroll-left{left:0}button#scroll-right{right:0}#slotted-tabs-container{position:absolute;display:flex;width:100%;height:3.6875rem;overflow-x:scroll;-ms-overflow-style:none;scrollbar-width:none}#slotted-tabs-container::-webkit-scrollbar{display:none}button~#slotted-tabs-container{right:1.5rem;left:1.5rem;max-width:calc(100% - 3rem)}#selected-underline{position:absolute;bottom:0;border-bottom:4px solid var(--zui-tabs-color);transition:transform .3s ease-out}#selected-underline.no-animate-to{transition:none}`;

var __decorate$6 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @element zui-tabs
 *
 * @slot unnamed - Slot in `zui-tab` elements only
 *
 * @cssprop [--zui-tabs-color=var(--zui-blue)] - Highlighted color of the selected tab, impacts text and border color
 * @cssprop [--zui-tabs-fouc-scroll-button-space=3rem (48px)] - (FOUC styling only): occupies a space by default for the scroll buttons (these buttons only appear when there's width overflow); recommend finding viewport width where scroll buttons are visible, and then set this CSS custom property to `0` above that media query width
 */
class ZuiTabsElement extends ZuiBaseElement {
  constructor() {
    super(...arguments);
    /**
     * Determines which `<zui-tab>` is selected, 0 based index
     */
    this.selected = 0;
    this.#tabColorRgbField = 'rgba(0, 0, 0, 0)';
    this.#tabsOnPageLoad = true;
    this.#windowResizeTimeout = null;
    this.#showScrollButtons = false;
    this.#showScrollButtonLeft = false;
    this.#showScrollButtonRight = false;
    this.#handleTabSelected = event => {
      const index = this._slottedTabsEls.indexOf(event.detail.tab);
      if (index !== this.selected) {
        this.selected = index;
      }
    };
  }
  #tabColorRgbField;
  get #tabColorRgb() {
    return this.#tabColorRgbField;
  }
  set #tabColorRgb(value) {
    this.#tabColorRgbField = value;
    this.requestUpdate();
  }
  #tabsOnPageLoad;
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this.#handleWindowResize.bind(this));
  }
  firstUpdated() {
    for (const tab of this._slottedTabsEls) {
      tab.addEventListener('tabselected', this.#handleTabSelected);
      tab.addEventListener('tabsizechange', () => setTimeout(() => this.#calibrate(), 1));
    }
    this.#tabColorRgb = window?.getComputedStyle(this._selectedUnderlineEl)?.borderBottomColor;
    window.addEventListener('resize', this.#handleWindowResize.bind(this));
  }
  #windowResizeTimeout;
  #handleWindowResize() {
    if (this.#windowResizeTimeout) {
      cancelAnimationFrame(this.#windowResizeTimeout);
    }
    this.#windowResizeTimeout = requestAnimationFrame(() => {
      this.#calibrate();
    });
  }
  /* eslint-disable @typescript-eslint/no-explicit-any */
  async updated(changedProperties) {
    if (changedProperties.has('selected')) {
      const oldVal = changedProperties.get('selected');
      if (oldVal !== undefined) {
        if (this.#tabsOnPageLoad) {
          this._selectedUnderlineEl?.classList.remove('no-animate-to');
          this.#tabsOnPageLoad = false;
        }
        const oldTab = this._slottedTabsEls[oldVal];
        if (oldTab) {
          oldTab._selected = false;
        }
        this._slottedTabsEls[oldVal]._selected = false;
      }
      if (this._slottedTabsEls[this.selected]) {
        this._slottedTabsEls[this.selected]._selected = true;
        await this._slottedTabsEls[this.selected].updateComplete;
      }
      this.#calibrate();
    }
  }
  async #onSlotChange() {
    const selectedTab = this._slottedTabsEls[this.selected];
    if (selectedTab && !selectedTab._selected) {
      this._slottedTabsEls[this.selected]._selected = true;
      await this._slottedTabsEls[this.selected].updateComplete;
      this.#calibrate();
    }
  }
  /* eslint-enable @typescript-eslint/no-explicit-any */
  #calibrate() {
    this.#determineShowScrollButtons();
    this.#placeSelectedUnderline(this._slottedTabsEls[this.selected]);
    this.#scrollToSeeUnderline();
    this.#determineScrolledToEnd();
    this.dispatchEvent(new CustomEvent('tabscalibrated', {
      bubbles: true,
      composed: true,
      detail: {
        tab: this
      }
    }));
  }
  async #scrollToSeeUnderline() {
    if (this._slottedTabsEls[0] && this._slottedTabsEls[this.selected]) {
      await this._slottedTabsEls[0].updateComplete;
      await this._slottedTabsEls[this.selected].updateComplete;
      const xOffset = this._slottedTabsEls[0].offsetLeft;
      const containerEl = this._slottedTabsContainerEl;
      const viewport = {
        get scroll() {
          return Math.round(containerEl.scrollLeft);
        },
        set scroll(value) {
          containerEl.scrollLeft = value;
        },
        left: containerEl.scrollLeft,
        right: containerEl.scrollLeft + containerEl.offsetWidth,
        width: containerEl.offsetWidth
      };
      const tabEl = this._slottedTabsEls[this.selected];
      const tab = {
        left: tabEl?.offsetLeft - xOffset,
        right: tabEl?.offsetLeft + tabEl?.offsetWidth - xOffset,
        width: tabEl?.offsetWidth
      };
      const adjacentTabPreview = 35;
      // if tab.width is greater than viewport.width just scroll to tab.left
      if (tab.width + adjacentTabPreview > viewport.width) {
        viewport.scroll = tab.left;
        // if tab left and right are not both between the viewport range
      } else if (tab?.left < viewport.left || tab?.right > viewport.right) {
        // if lab.left is offscreen aka less than viewport.scroll scroll left
        if (tab.left < viewport.scroll) {
          // scrollLeft = tab.left - adjacentTabPreview
          viewport.scroll = tab.left - adjacentTabPreview;
        } else {
          // else scrollLeft = tab.right + viewport width - adjacentTabPreview
          viewport.scroll = tab.right - viewport.width + adjacentTabPreview;
        }
      }
    }
  }
  static get styles() {
    return [super.styles, style$6];
  }
  render() {
    return html`
      <div
        class="tabs-container"
        role="tablist"
        style="--zui-tabs-color-animation-light-1: ${this.#rgbaTint(this.#tabColorRgb, 20)} ${`; `} --zui-tabs-color-animation-light-2: ${this.#rgbaTint(this.#tabColorRgb, 13.33)}; "
      >
        ${this.#showScrollButtons ? html`
              <button
                @keydown="${event => this.#handleScrollRepeat(event, event.target)}"
                @keyup="${this.#handleScrollStopRepeat}"
                @mousedown="${event => this.#handleScrollRepeat(event, event.target)}"
                @mouseup="${this.#handleScrollStopRepeat}"
                @touchstart="${event => this.#handleScrollRepeat(event, event.target)}"
                @touchend="${this.#handleScrollStopRepeat}"
                type="button"
                id="scroll-left"
                class="${this.#showScrollButtonLeft ? nothing : 'disabled'}"
                tabindex=${this.#showScrollButtonLeft ? nothing : '-1'}
              >
                <zui-icon icon="zui-chevron-left"></zui-icon>
              </button>
              <button
                @keydown="${event => this.#handleScrollRepeat(event, event.target)}"
                @keyup="${this.#handleScrollStopRepeat}"
                @mousedown="${event => this.#handleScrollRepeat(event, event.target)}"
                @mouseup="${this.#handleScrollStopRepeat}"
                @touchstart="${event => this.#handleScrollRepeat(event, event.target)}"
                @touchend="${this.#handleScrollStopRepeat}"
                type="button"
                id="scroll-right"
                class="${this.#showScrollButtonRight ? nothing : 'disabled'}"
                tabindex=${this.#showScrollButtonRight ? nothing : '-1'}
              >
                <zui-icon icon="zui-chevron-right"></zui-icon>
              </button>
            ` : nothing}
        <div
          id="slotted-tabs-container"
          @touchstart="${this.#handleTouchRepeat}"
          @touchend="${this.#handleTouchStopRepeat}"
        >
          <slot @slotchange="${this.#onSlotChange}"></slot>
          <div id="selected-underline" class="no-animate-to"></div>
        </div>
      </div>
    `;
  }
  #rgbaTint(rgbOrRgba, opacityPercentInteger) {
    const arr = rgbOrRgba.replace('rgb(', 'rgba(').replace(')', '').split(',');
    arr[3] = ` ${opacityPercentInteger / 100})`;
    return arr.join(',');
  }
  #showScrollButtons;
  #showScrollButtonLeft;
  #showScrollButtonRight;
  async #determineShowScrollButtons() {
    const containerWidth = this.offsetWidth;
    let tabsActualWidth = 0;
    for (const tab of this._slottedTabsEls) {
      tabsActualWidth += tab.offsetWidth;
    }
    tabsActualWidth > containerWidth ? this.#showScrollButtons = true : this.#showScrollButtons = false;
    this.requestUpdate();
  }
  #determineScrolledToEnd(button = null) {
    // slow down a tick so values below aren't prematurely evaluated
    setTimeout(() => {
      let tabsActualWidth = 0;
      for (const tab of this._slottedTabsEls) {
        tabsActualWidth += tab.offsetWidth;
      }
      const leftOldVal = this.#showScrollButtonLeft;
      const leftCurrVal = this._slottedTabsContainerEl.scrollLeft > 0 ? true : false;
      const rightOldVal = this.#showScrollButtonRight;
      const rightCurrVal = Math.ceil(this._slottedTabsContainerEl.scrollLeft) >= Math.floor(tabsActualWidth) - Math.floor(this._slottedTabsContainerEl.offsetWidth) - 1 ? false : true;
      if (leftOldVal !== leftCurrVal) {
        this.#showScrollButtonLeft = leftCurrVal;
        if (button && button.id === 'scroll-left') {
          clearInterval(this.#handleScrollInterval);
        }
        this.requestUpdate();
      }
      if (rightOldVal !== rightCurrVal) {
        this.#showScrollButtonRight = rightCurrVal;
        if (button && button.id === 'scroll-right') {
          clearInterval(this.#handleScrollInterval);
        }
        this.requestUpdate();
      }
    }, 0);
  }
  #placeSelectedUnderline(tab) {
    if (tab) {
      const tabRect = tab.getBoundingClientRect();
      const containerRect = this.getBoundingClientRect();
      const leftButtonRect = this._btnScrollLeftEl?.getBoundingClientRect() ?? {
        width: 0
      };
      const scrollLeftOffset = this._slottedTabsContainerEl?.scrollLeft ?? 0;
      this._selectedUnderlineEl.style.transform = `translateX(${tabRect.left - leftButtonRect.width - containerRect.left + scrollLeftOffset}px)`;
      this._selectedUnderlineEl.style.width = `${tabRect.width}px`;
    }
  }
  #handleTabSelected;
  #handleScroll(event, target) {
    if (event instanceof KeyboardEvent && (event.key === 'Enter' || event.key === ' ') || event instanceof MouseEvent || event instanceof TouchEvent) {
      const ForwardOrBackward = target === this._btnScrollLeftEl ? `-` : ``;
      this._slottedTabsContainerEl.scrollLeft += Number(`${ForwardOrBackward}30`);
      this.#determineScrolledToEnd(target);
    }
  }
  #handleScrollInterval;
  #handleScrollRepeat(event, target) {
    this.#handleScroll(event, target);
    this.#handleScrollInterval = setInterval(() => this.#handleScroll(event, target), 30);
  }
  #handleScrollStopRepeat() {
    clearInterval(this.#handleScrollInterval);
  }
  #handleTouchInterval;
  #handleTouchRepeat() {
    this.#handleTouchInterval = setInterval(() => {
      this.#determineScrolledToEnd();
    }, 100);
  }
  #handleTouchStopRepeat() {
    clearInterval(this.#handleTouchInterval);
  }
}
__decorate$6([property({
  type: Number,
  reflect: true
})], ZuiTabsElement.prototype, "selected", void 0);
__decorate$6([queryAssignedElements({
  selector: 'zui-tab'
})], ZuiTabsElement.prototype, "_slottedTabsEls", void 0);
__decorate$6([query('#slotted-tabs-container')], ZuiTabsElement.prototype, "_slottedTabsContainerEl", void 0);
__decorate$6([query('#selected-underline')], ZuiTabsElement.prototype, "_selectedUnderlineEl", void 0);
__decorate$6([query('button#scroll-left')], ZuiTabsElement.prototype, "_btnScrollLeftEl", void 0);
window.customElements.define('zui-tabs', ZuiTabsElement);

const style$5 = css`.tab{display:inline-flex;height:100%;padding:1.25rem;background:rgba(0,0,0,0);background-position:center;border-bottom:4px solid rgba(0,0,0,0);line-height:1;white-space:nowrap;cursor:pointer;transition:background .8s}.tab ::slotted(a){margin:-1.25rem -1.25rem -1.5rem !important;padding:1.25rem !important;color:inherit;text-decoration:none}.tab:focus-within,.tab:focus-visible,.tab:hover{border-color:var(--zui-gray-200);outline:0;color:var(--zui-gray-700);transition:border-color .2s ease-in}.tab:hover{background:rgba(0,0,0,0) radial-gradient(circle, transparent 1%, var(--zui-tabs-color-animation-light-1) 1%) center/15000%;transition:border-color .2s ease-in,background .2s ease-in}.tab:active{opacity:.5;background-color:var(--zui-tabs-color-animation-light-2);background-size:100%;transition:background 0s}.tab.selected{font-weight:700;color:var(--zui-tabs-color)}.tab.selected:hover,.tab.selected:focus-within{border-color:rgba(0,0,0,0)}`;

var __decorate$5 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @element zui-tab
 *
 * @slot unnamed - Pass tab text into this slot
 *
 * @cssprop [--zui-tabs-color=var(--zui-blue)] - Highlighted color of the selected tab, impacts text and border color
 *
 * @event tabsizechange - Fired when a tab's size changes; i.e. a text change, slot modification, etc.
 * @event tabselected - Fired when a tab is selected via user input and also programmatically selected
 */
class ZuiTabElement extends ZuiBaseElement {
  constructor() {
    super(...arguments);
    /**
     * This private field allows `zui-tabs` to internally "select" a `zui-tab`. DO NOT USE EXTERNALLY
     */
    this._selected = false;
  }
  static get styles() {
    return [super.styles, style$5];
  }
  firstUpdated() {
    new ResizeObserver(() => {
      this.dispatchEvent(new CustomEvent('tabsizechange', {
        bubbles: true,
        composed: true,
        detail: {
          tab: this
        }
      }));
    }).observe(this);
  }
  render() {
    return html`
      <div
        tabindex="0"
        aria-role="tab"
        aria-selected="${this._selected}"
        @click=${this.#handleUserEvent}
        @keyup=${this.#handleUserEvent}
        class="tab ${classMap({
      selected: this._selected
    })}"
      >
        <slot></slot>
      </div>
    `;
  }
  #handleUserEvent(event) {
    if (event instanceof KeyboardEvent && !(event.key === 'Enter' || event.key === ' ')) {
      return;
    }
    this.dispatchEvent(new CustomEvent('tabselected', {
      bubbles: true,
      composed: true,
      detail: {
        tab: this
      }
    }));
    this.#animateRipple();
  }
  #animateRipple() {
    this._selected && this._tabEl.classList.add('ripple');
  }
}
__decorate$5([query('.tab')], ZuiTabElement.prototype, "_tabEl", void 0);
__decorate$5([state()], ZuiTabElement.prototype, "_selected", void 0);
window.customElements.define('zui-tab', ZuiTabElement);

const style$4 = css`:host{display:inline}.tag{display:none;border-radius:2px}.tag ::slotted(*){display:none !important}.tag.is-visible{display:inline-block;padding:.1875rem .5rem;font-size:.75rem;line-height:1;letter-spacing:1px;text-transform:uppercase}`;

var __decorate$4 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const tagColors = ['blue', 'green', 'aqua', 'purple', 'rose', 'red', 'orange', 'yellow', 'gray'];
/**
 * Tags are used to highlight, categorize, or organize items.
 *
 * @element zui-tag
 *
 * @slot - Default, unnamed slot; for inserting label text into `<zui-tag>`
 *
 * @prop {string} color - property to display the color of the tag (required)
 */
class ZuiTagElement extends ZuiBaseElement {
  /**
   * property to display the color of the tag (optional, but doesn't show)
   */
  get color() {
    return this.#color;
  }
  set color(color) {
    const oldColor = this.#color;
    this.#color = this.#isValidColor(color) ? color : '';
    this.requestUpdate('color', oldColor);
  }
  #color = '';
  static get styles() {
    return [super.styles, style$4];
  }
  render() {
    const classes = {
      'is-visible': this.color !== '' && this.#isValidColor(this.color)
    };
    let textColor = `--zui-${this.color}-700`;
    if (this.color === 'yellow') {
      textColor = '--zui-orange-700';
    }
    return html`<div
      class="tag ${classMap(classes)}"
      style="background:var(--zui-${this.color}-100); color:var(${textColor});"
      ><slot></slot
    ></div>`;
  }
  #isValidColor(c) {
    if (c === '') {
      return false;
    }
    return tagColors.includes(c);
  }
}
__decorate$4([property({
  type: String
})], ZuiTagElement.prototype, "color", null);
window.customElements.define('zui-tag', ZuiTagElement);

const style$3 = css`textarea{width:100%;min-height:9.375rem;padding:.9375rem .625rem;border:1px solid var(--zui-gray-200);border-radius:4px;box-shadow:none;font:inherit;color:inherit;transition:border 100ms ease-in-out,box-shadow 100ms ease-in-out;scrollbar-color:var(--zui-gray-400) var(--zui-gray-50);scrollbar-width:thin;resize:none;box-sizing:border-box;field-sizing:content}textarea::-webkit-input-placeholder{color:var(--zui-gray-300)}textarea::-moz-placeholder{opacity:1;color:var(--zui-gray-300)}textarea:-moz-placeholder{opacity:1;color:var(--zui-gray-300)}textarea:-ms-input-placeholder{color:var(--zui-gray-300)}textarea:not(output):-moz-ui-invalid{box-shadow:none}textarea:hover{border-color:var(--zui-gray-300)}textarea:focus{border-color:var(--zui-blue-400);box-shadow:0 0 0 1px var(--zui-blue-400);outline:none}textarea[disabled]{background-color:var(--zui-gray-100);cursor:not-allowed;color:var(--zui-gray)}textarea[disabled]:hover{border:1px solid var(--zui-gray-200)}textarea[readonly]{background:rgba(0,0,0,0);outline:none;color:var(--zui-gray);pointer-events:none}:host{display:block;max-width:75ch}:host(.is-invalid) textarea{border:1px solid var(--zui-red);box-shadow:0 0 0 1px var(--zui-red);transition:border 100ms ease-out,box-shadow 100ms ease-out}:host(.is-invalid) textarea:hover{border-color:var(--zui-red-600);box-shadow:0 0 0 1px var(--zui-red-600)}:host(.is-invalid) textarea:focus{border-color:var(--zui-red-400);box-shadow:0 0 0 1px var(--zui-red-400);outline:none}:host(.is-valid) textarea{border:1px solid var(--zui-green);box-shadow:0 0 0 1px var(--zui-green)}:host(.is-valid) textarea:hover{border-color:var(--zui-green-600);box-shadow:0 0 0 1px var(--zui-green-600)}:host(.is-valid) textarea:focus{border-color:var(--zui-green-400);box-shadow:0 0 0 1px var(--zui-green-400);outline:none}:host(:focus-within) textarea:not(:read-only){border-color:var(--zui-blue-400);box-shadow:0 0 0 1px var(--zui-blue-400);outline:none}:host(.is-valid :focus-within) textarea{border-color:var(--zui-green-400);box-shadow:0 0 0 1px var(--zui-green-400);outline:none}:host(.is-invalid :focus-within) textarea{border-color:var(--zui-red-400);box-shadow:0 0 0 1px var(--zui-red-400);outline:none}`;

var __decorate$3 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @element zui-textarea
 *
 */
class ZuiTextareaElement extends ZuiFormAssociatedElement {
  constructor() {
    super(...arguments);
    /**
     * An optional placeholder value (e.g. "ghost text"). Use this to provide extra contextual information, but do not use in place of a label!
     */
    this.placeholder = '';
    /**
     * Represents that this control must be filled in for form submission
     */
    this.required = false;
    /**
     * Represents the maximum length of characters supported by value. Only applicable to text-based inputs (e.g. `text`, `search`)
     */
    this.maxLength = 524288;
    /**
     * Represents the minimum length of characters supported by value. Only applicable to text-based inputs (e.g. `text`, `search`)
     */
    this.minLength = null;
    this.#value = '';
  }
  get _focusControlSelector() {
    return 'textarea';
  }
  /**
   * Input value that is associated with form submission
   */
  get value() {
    return this.#value;
  }
  set value(val) {
    const oldVal = this.#value;
    this.#value = val;
    this._setFormValue(this.#value);
    this.requestUpdate('value', oldVal);
  }
  #value;
  static get styles() {
    return [super.styles, style$3];
  }
  connectedCallback() {
    super.connectedCallback();
    const value = this.value ?? this.getAttribute('value');
    this._setFormValue(value);
  }
  formResetCallback() {
    this.value = '';
  }
  render() {
    return html`<textarea
      .value="${this.value}"
      @input="${e => this.#onInput(e)}"
      @change="${e => this.#onChange(e)}"
      placeholder="${this.placeholder ?? ''}"
      ?disabled="${this.disabled}"
      ?readonly="${this.readOnly}"
      maxlength="${ifDefined(this.maxLength)}"
      minlength="${ifDefined(this.minLength)}"
    ></textarea> `;
  }
  #onInput(e) {
    this.value = e.target.value;
  }
  #onChange(e) {
    this.value = e.target.value;
    this.dispatchEvent(new CustomEvent('change', {
      detail: this.value,
      bubbles: true
    }));
  }
}
__decorate$3([property({
  type: String
})], ZuiTextareaElement.prototype, "value", null);
__decorate$3([property({
  type: String
})], ZuiTextareaElement.prototype, "placeholder", void 0);
__decorate$3([property({
  type: Boolean
})], ZuiTextareaElement.prototype, "required", void 0);
__decorate$3([property({
  type: Number,
  attribute: 'maxlength'
})], ZuiTextareaElement.prototype, "maxLength", void 0);
__decorate$3([property({
  type: Number,
  attribute: 'minlength'
})], ZuiTextareaElement.prototype, "minLength", void 0);
window.customElements.define('zui-textarea', ZuiTextareaElement);

const style$2 = css`:host{display:inline-block;cursor:pointer}:host .container{position:relative;display:block;width:3.375rem;min-width:3.375rem;height:.875rem;padding:0;background:var(--zui-gray-400);border-radius:1.875rem;transition:background .4s ease}:host .handle{position:absolute;top:-0.3125rem;left:0;display:block;width:1.5rem;height:1.5rem;background:#fff;border-radius:50%;box-shadow:0 0 0 .0625rem rgba(0,0,0,.1),0 .1875rem .125rem rgba(0,0,0,.08);transition:transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275),box-shadow 200ms ease}:host([type=icon]){position:relative;display:inline-block;padding:0;background:none;border:0;outline:0;cursor:pointer}:host([type=icon]) .icon ::slotted(*){fill:var(--zui-gray-400)}:host(:hover) .handle{box-shadow:0 0 0 .375rem rgba(175,175,187,.25)}:host(:hover[checked]) .handle{box-shadow:0 0 0 .375rem rgba(78,146,223,.25)}:host(:focus) .handle{box-shadow:0 0 0 .375rem rgba(96,96,113,.25)}:host(:focus[checked]) .handle{box-shadow:0 0 0 .375rem rgba(31,95,168,.25)}:host([checked]) .container{background:var(--zui-toggle-checked-color, var(--zui-blue))}:host([checked]) .handle{transform:translateX(124%)}:host([checked]) .icon{transition:fill 250ms ease}:host([checked]) .icon ::slotted(*){fill:var(--zui-toggle-checked-color, var(--zui-blue))}:host([checked]) .icon.burst{animation:icon-toggle-burst 250ms ease-in-out forwards}:host([disabled]){cursor:not-allowed}:host([disabled]) .container{background:var(--zui-gray-100)}:host([disabled]) .handle.wiggle{animation:unchecked-toggle-wiggle 600ms ease-in-out forwards}:host([disabled]) .icon ::slotted(*){fill:var(--zui-gray-100)}:host([disabled]:hover) .handle{box-shadow:0 0 0 .0625rem rgba(0,0,0,.1),0 .1875rem .125rem rgba(0,0,0,.08)}:host([disabled][checked]) .container{background:var(--zui-toggle-checked-disabled-color, var(--zui-blue-100))}:host([disabled][checked]) .handle.wiggle{animation:checked-toggle-wiggle 600ms ease-in-out forwards}:host([disabled][checked]) .icon ::slotted(*){fill:var(--zui-toggle-checked-disabled-color, var(--zui-blue-100))}:host([disabled][checked]) .icon.burst{animation:none}:host([label]){display:inline-flex;align-items:center}:host([label]) label{cursor:pointer}:host([label]) .container{margin-left:1.875rem}@keyframes checked-toggle-wiggle{0%{transform:translateX(124%)}25%{transform:translateX(calc(124% - 0.1875rem))}50%{transform:translateX(calc(124% + 0.1875rem))}75%{transform:translateX(calc(124% - 0.1875rem))}100%{transform:translateX(124%)}}@keyframes unchecked-toggle-wiggle{0%{transform:translateX(0)}25%{transform:translateX(0.1875rem)}50%{transform:translateX(-0.1875rem)}75%{transform:translateX(0.1875rem)}100%{transform:translateX(0)}}@keyframes icon-toggle-burst{0%{transform:scale3d(1, 1, 1)}25%{opacity:.75;transform:scale3d(1.5, 1.5, 1.5)}50%{opacity:.5;transform:scale3d(2, 2, 2)}75%{transform:scale3d(2.5, 2.5, 2.5)}100%{opacity:0;transform:scale3d(3, 3, 3)}}`;

var __decorate$2 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * A form control toggle switch.
 *
 * @element zui-toggle
 *
 * @slot - Default, unnamed slot; not recommended for use
 *
 * @attr {string | null} [name=null] - The name of this element that is associated with form submission
 * @attr {boolean} [disabled=false] - Represents whether a user can make changes to this element; if true, the value of this element will be excluded from the form submission
 * @attr {boolean} [readonly=false] - Represents whether a user can make changes to this element; the value of this element will still be included in the form submission
 * @attr {boolean} [autofocus=false] - If true, this element will be focused when connected to the document
 *
 * @prop {string | null} [name=null] - The name of this element that is associated with form submission
 * @prop {boolean} [disabled=false] - Represents whether a user can make changes to this element; if true, the value of this element will be excluded from the form submission
 * @prop {boolean} [readOnly=false] - Represents whether a user can make changes to this element; the value of this element will still be included in the form submission
 * @prop {boolean} [autofocus=false] - If true, this element will be focused when connected to the document
 *
 * @cssprop [--zui-toggle-checked-color=var(--zui-blue)] - The background fill color of the toggle track
 * @cssprop [--zui-toggle-checked-disabled-color=var(--zui-blue-100)] - Disabled state background fill color of the toggle track
 */
class ZuiToggle extends ZuiFormAssociatedElement {
  get _formValue() {
    return this.checked ? this.value : null;
  }
  get _focusControlSelector() {
    return '.handle';
  }
  #initialState;
  static get styles() {
    return [super.styles, style$2];
  }
  constructor() {
    super();
    /**
     * Whether the toggle is "on" or "off"
     */
    this.checked = false;
    /**
     * Toggle's `value` that is form submittable, along with `name`
     */
    this.value = 'on';
    /**
     * @deprecated `standard` is the only type supported and doesn't need to be set
     * The type of toggle. Supports `standard` and `icon`; defaults to `standard`
     * If `icon`, provide an icon to the slot to be toggled
     */
    this.type = 'standard';
    this.addEventListener('click', () => {
      if (!this.disabled) {
        this.checked = !this.checked;
        this._setFormValue(this._formValue);
        this.dispatchEvent(new CustomEvent('change', {
          detail: {
            checked: this.checked
          }
        }));
      }
    });
  }
  connectedCallback() {
    super.connectedCallback();
    // we want to go a little faster than LitElement and behave more like native HTML Form Associated Elements
    const initialChecked = this.hasAttribute('checked');
    const initialValue = this.getAttribute('value');
    this.#initialState = initialChecked;
    this._setFormValue(initialChecked ? initialValue : null);
  }
  /**
   * Reset toggle to state on initial load
   */
  formResetCallback() {
    this.checked = this.#initialState;
    this._setFormValue(this._formValue);
  }
  update(changedProps) {
    super.update(changedProps);
    if (changedProps.has('value')) {
      this._setFormValue(this._formValue);
    }
    if (changedProps.has('disabled')) {
      this._setTabIndex();
    }
  }
  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    this.setAttribute('role', 'checkbox');
    this._setTabIndex();
    this.addEventListener('keydown', e => {
      if (e.keyCode === 32) {
        if (!this.disabled) {
          this.checked = !this.checked;
          if (this.type === 'icon') {
            this._icon?.classList.toggle('burst', true);
          }
          e.preventDefault();
          e.stopPropagation();
        }
      }
    });
    this.addEventListener('click', () => {
      if (this.type === 'icon' && !this.disabled) {
        this._icon?.classList.toggle('burst', true);
      }
      if (this.type !== 'icon' && this.disabled) {
        this._handle?.classList.toggle('wiggle', true);
      }
    });
  }
  render() {
    const tabIndex = this.disabled ? '-1' : '0';
    return html`
      ${this.type === 'icon' ? html`
              <div
                id="icon"
                @animationend="${e => {
      e.currentTarget.classList.remove('burst');
    }}"
                class="icon"
                ><slot></slot
              ></div>
            ` : html`
              <div class="container">
                <div
                  id="handle"
                  class="handle"
                  tabindex="${tabIndex}"
                  @animationend="${e => {
      e.currentTarget.classList.remove('wiggle');
    }}"
                ></div>
              </div>
            `}
      </div>
    `;
  }
  _setTabIndex() {
    if (this.disabled) {
      this.removeAttribute('tabindex');
    } else {
      this.setAttribute('tabindex', '0');
    }
  }
}
__decorate$2([property({
  type: Boolean,
  reflect: true
})], ZuiToggle.prototype, "checked", void 0);
__decorate$2([property({
  type: String,
  reflect: true
})], ZuiToggle.prototype, "value", void 0);
__decorate$2([property({
  type: String
})], ZuiToggle.prototype, "type", void 0);
__decorate$2([query('#icon')], ZuiToggle.prototype, "_icon", void 0);
__decorate$2([query('#handle')], ZuiToggle.prototype, "_handle", void 0);
window.customElements.define('zui-toggle', ZuiToggle);

function isPopoverSupported() {
  return 'popover' in window.HTMLElement.prototype;
}

const style$1 = css`:host{display:inline-flex}:host .container{position:relative;display:none}:host .tooltip[popover]{width:fit-content;max-width:75ch;overflow:visible;margin:var(--zui-tooltip-margin);padding:.5rem .75rem;background-color:var(--zui-gray-700);border:0;border-radius:.1875rem;color:#fff;overflow-wrap:break-word}:host .tooltip[popover]::after{position:absolute;content:"";background-color:var(--zui-gray-700)}@supports selector([popover]){:host .container{display:flex}}:host([position=top]) .tooltip[popover]::after{top:100%;right:calc(50% - 0.5rem);width:1rem;height:0.5rem;clip-path:polygon(0% 0%, 50% 100%, 100% 0%)}:host([position=right]) .tooltip[popover]::after,:host(:not([position])) .tooltip[popover]::after{top:calc(50% - 0.5rem);right:100%;width:0.5rem;height:1rem;clip-path:polygon(100% 0%, 0% 50%, 100% 100%)}:host([position=bottom]) .tooltip[popover]::after{right:calc(50% - 0.5rem);bottom:100%;width:1rem;height:0.5rem;clip-path:polygon(0% 100%, 50% 0%, 100% 100%)}:host([position=left]) .tooltip[popover]::after{top:calc(50% - 0.5rem);left:100%;width:0.5rem;height:1rem;clip-path:polygon(0% 0%, 100% 50%, 0% 100%)}:host([position="top left"]) .tooltip[popover],:host([position="left top"]) .tooltip[popover]{border-radius:.1875rem .1875rem 0 .1875rem}:host([position="top left"]) .tooltip[popover]::after,:host([position="left top"]) .tooltip[popover]::after{top:100%;right:0;width:1rem;height:0.5rem;clip-path:polygon(0% 0%, 100% 0%, 100% 100%)}:host([position="top right"]) .tooltip[popover],:host([position="right top"]) .tooltip[popover]{border-radius:.1875rem .1875rem .1875rem 0}:host([position="top right"]) .tooltip[popover]::after,:host([position="right top"]) .tooltip[popover]::after{top:100%;left:0;width:1rem;height:0.5rem;clip-path:polygon(0% 0%, 100% 0%, 0% 100%)}:host([position="bottom left"]) .tooltip[popover],:host([position="left bottom"]) .tooltip[popover]{border-radius:.1875rem 0 .1875rem .1875rem}:host([position="bottom left"]) .tooltip[popover]::after,:host([position="left bottom"]) .tooltip[popover]::after{right:0;bottom:100%;width:1rem;height:0.5rem;clip-path:polygon(0% 100%, 100% 0%, 100% 100%)}:host([position="bottom right"]) .tooltip[popover],:host([position="right bottom"]) .tooltip[popover]{border-radius:0 .1875rem .1875rem .1875rem}:host([position="bottom right"]) .tooltip[popover]::after,:host([position="right bottom"]) .tooltip[popover]::after{bottom:100%;left:0;width:1rem;height:0.5rem;clip-path:polygon(0% 0%, 100% 100%, 0% 100%)}:host(.margin-left){--zui-tooltip-margin: 0 0 0 0.625rem}:host(.margin-right){--zui-tooltip-margin: 0 0.625rem 0 0}.trigger{display:flex;cursor:pointer;color:var(--zui-tooltip-trigger-color, var(--zui-blue))}`;

var __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Tooltips are unobtrusive messages that provide the user with simple information when hovering over a page element.
 *
 * @element zui-tooltip
 *
 * @slot trigger - Slot for the tooltip to anchor itself to. If this is not set, the `zui-help` icon will be used by default
 * @slot - Default, unnamed slot; for text to appear in the tooltip when the user hovers over the anchored element
 * @slot message - Deprecated: use the default, unnamed slot instead
 *
 * @cssprop [--zui-tooltip-margin] - Adjusts the margin of `<zui-tooltip>`
 * @cssprop [--zui-tooltip-trigger-color=var(--zui-blue)] - Fill color of the trigger icon
 */
class ZuiTooltipElement extends ZuiBaseElement {
  #canHover;
  static get styles() {
    return [super.styles, style$1];
  }
  constructor() {
    super();
    /**
     * Sets which direction the tooltip should appear
     * @type { 'top' | 'right' | 'bottom' | 'left' }
     */
    this.position = 'right';
    this.#canHover = undefined;
    this.#canHover = window.matchMedia('(hover: hover)').matches;
  }
  render() {
    return html`
      <div class="container">
        ${this.#renderTrigger()}
        <div id="tooltip" class="tooltip" popover role="tooltip">
          <slot></slot>
          <slot name="message"></slot>
        </div>
      </div>
    `;
  }
  #renderTrigger() {
    if (this.#canHover) {
      return html`<div
        class="trigger"
        @pointerenter="${this.#positionLogic}"
        @pointerover="${this.#showTooltip}"
        @pointerleave="${this.#hideTooltip}"
        popovertarget="tooltip"
      >
        <slot name="trigger">
          <zui-icon icon="zui-details" class="small"></zui-icon>
        </slot>
      </div>`;
    } else {
      return html`<div class="trigger" @click="${this.#toggleTooltip}" popovertarget="tooltip">
        <slot name="trigger">
          <zui-icon icon="zui-details" class="small"></zui-icon>
        </slot>
      </div>`;
    }
  }
  #toggleTooltip() {
    if (isPopoverSupported()) {
      this.#positionLogic();
      this._tooltip.togglePopover();
    }
  }
  #showTooltip() {
    if (isPopoverSupported()) {
      this._tooltip.showPopover();
    }
  }
  #hideTooltip() {
    if (isPopoverSupported()) {
      this._tooltip.hidePopover();
    }
  }
  // positioning logic madness
  async #positionLogic() {
    if (!isPopoverSupported()) {
      return;
    }
    await this.updateComplete;
    const triggerRect = this._trigger.getBoundingClientRect();
    const tooltipRect = this._tooltip.getBoundingClientRect();
    const tooltipArrowSize = 13; /* Arrow size 8px + 5px margin */
    if (triggerRect && tooltipRect) {
      const triggerTop = triggerRect.top;
      const triggerBottom = triggerRect.bottom;
      const triggerLeft = triggerRect.left;
      const triggerRight = triggerRect.right;
      const triggerHeight = triggerRect.height;
      const triggerWidth = triggerRect.width;
      // margins
      const tooltipComputedStyle = window.getComputedStyle(this._tooltip);
      const tooltipMarginTop = parseFloat(tooltipComputedStyle.marginTop);
      const tooltipMarginRight = parseFloat(tooltipComputedStyle.marginRight);
      const tooltipMarginBottom = parseFloat(tooltipComputedStyle.marginBottom);
      const tooltipMarginLeft = parseFloat(tooltipComputedStyle.marginLeft);
      const tooltipHeight = tooltipRect.height;
      const tooltipWidth = tooltipRect.width;
      // center align tooltip with trigger
      // and take margins into consideration
      const triggerVerticalCenter = () => {
        let math = triggerTop - tooltipHeight / 2 + triggerHeight / 2;
        if (tooltipMarginTop !== 0) {
          math += tooltipMarginTop;
        }
        if (tooltipMarginBottom !== 0) {
          math -= tooltipMarginBottom;
        }
        return math;
      };
      const triggerHorizontalCenter = () => {
        let math = triggerLeft - tooltipWidth / 2 + triggerWidth / 2;
        if (tooltipMarginLeft !== 0) {
          math += tooltipMarginLeft;
        }
        if (tooltipMarginRight !== 0) {
          math -= tooltipMarginRight;
        }
        return math;
      };
      // calculate tooltip positions based on which side of the trigger it will appear
      const tooltipTopPosition = triggerBottom - triggerHeight - tooltipHeight - tooltipMarginBottom - tooltipArrowSize;
      const tooltipBottomPosition = triggerTop + triggerHeight + tooltipArrowSize + tooltipMarginTop;
      const tooltipLeftPosition = triggerLeft - tooltipWidth - tooltipArrowSize - tooltipMarginRight;
      const tooltipRightPosition = triggerRight + tooltipArrowSize + tooltipMarginLeft;
      const tooltipCornerLeftPosition = triggerLeft - tooltipWidth - tooltipMarginRight;
      switch (this.position) {
        case 'top right':
        case 'right top':
          this._tooltip.style.top = `${tooltipTopPosition}px`;
          this._tooltip.style.left = `${triggerRight}px`;
          break;
        case 'top left':
        case 'left top':
          this._tooltip.style.top = `${tooltipTopPosition}px`;
          this._tooltip.style.left = `${tooltipCornerLeftPosition}px`;
          break;
        case 'top':
          this._tooltip.style.top = `${tooltipTopPosition}px`;
          this._tooltip.style.left = `${triggerHorizontalCenter()}px`;
          break;
        case 'bottom':
          this._tooltip.style.top = `${tooltipBottomPosition}px`;
          this._tooltip.style.left = `${triggerHorizontalCenter()}px`;
          break;
        case 'bottom left':
        case 'left bottom':
          this._tooltip.style.top = `${tooltipBottomPosition}px`;
          this._tooltip.style.left = `${tooltipCornerLeftPosition}px`;
          break;
        case 'bottom right':
        case 'right bottom':
          this._tooltip.style.top = `${tooltipBottomPosition}px`;
          this._tooltip.style.left = `${triggerRight}px`;
          break;
        case 'left':
          this._tooltip.style.top = `${triggerVerticalCenter()}px`;
          this._tooltip.style.left = `${tooltipLeftPosition}px`;
          break;
        case 'right':
        default:
          this._tooltip.style.top = `${triggerVerticalCenter()}px`;
          this._tooltip.style.left = `${tooltipRightPosition}px`;
          break;
      }
      this.#isTooltipOutsideViewport();
      this.requestUpdate();
    }
  }
  #isTooltipOutsideViewport() {
    const rect = this._tooltip.getBoundingClientRect();
    const vHeight = window.innerHeight;
    const vWidth = window.innerWidth;
    const isTopOutside = rect.top < 0;
    const isBottomOutside = rect.bottom > vHeight;
    const isLeftOutside = rect.left < 0;
    const isRightOutside = rect.right > vWidth;
    const sidesOutsideCount = [isTopOutside, isBottomOutside, isLeftOutside, isRightOutside].filter(side => side).length;
    const isOneSideOutside = sidesOutsideCount === 1;
    const isTwoOrMoreSidesOutside = sidesOutsideCount >= 2;
    // this could be cleaner...
    if (isTwoOrMoreSidesOutside) {
      if (isTopOutside && isLeftOutside) {
        this.position = 'bottom right';
        if (isRightOutside) {
          this.position = 'bottom left';
        }
      }
      if (isTopOutside && isRightOutside) {
        this.position = 'bottom left';
        if (isLeftOutside) {
          this.position = 'bottom right';
        }
      }
      if (isBottomOutside && isLeftOutside) {
        this.position = 'top right';
        if (isRightOutside) {
          this.position = 'top left';
        }
      }
      if (isBottomOutside && isRightOutside) {
        this.position = 'top left';
        if (isLeftOutside) {
          this.position = 'top right';
        }
      }
      this.#positionLogic();
    }
    if (isOneSideOutside) {
      this.position = this.#getOppositePosition();
      this.#positionLogic();
    }
  }
  // when only one side is outside, flip the tooltip to the opposite side
  #getOppositePosition() {
    switch (this.position) {
      case 'top':
        return 'bottom';
      case 'bottom':
        return 'top';
      case 'left':
        return 'right';
      case 'right':
      default:
        return 'left';
    }
  }
}
__decorate$1([property({
  type: String,
  reflect: true
})], ZuiTooltipElement.prototype, "position", void 0);
__decorate$1([query('.trigger')], ZuiTooltipElement.prototype, "_trigger", void 0);
__decorate$1([query('.tooltip')], ZuiTooltipElement.prototype, "_tooltip", void 0);
window.customElements.define('zui-tooltip', ZuiTooltipElement);

const style = css`:host{display:block}.well{display:block;width:100%;max-width:calc(65ch + 5.625rem);overflow:hidden;margin:var(--zui-well-margin, 1.25rem 0);background:#fff;border-radius:4px;color:inherit}.content{display:flex}.content zui-icon.dismiss{--zui-icon-size: 0.8125rem}.icon{--zui-icon-color: #fff;display:flex;width:3.125rem;flex-shrink:0;justify-content:center;align-items:center;margin:0;padding:0;color:#fff}.text{display:block;flex:1;padding:1.25rem}:host([dismissible]) .text{padding-right:.625rem}.dismiss{flex-shrink:0;margin:.25rem .25rem 0 0;padding:.71875rem;border-radius:2.25rem;cursor:pointer;animation:well-icon-grow 100ms ease-in forwards;transition:background 250ms ease-out;pointer-events:all;box-sizing:content-box}.dismiss:hover{background:var(--zui-gray-100)}.dismiss:focus{box-shadow:0 0 0 1px rgba(0,0,0,0);outline:none}.action-wrap ::slotted(*){display:inline-block;margin:.625rem 0 0 0 !important;margin:0;padding:0;border:0;font-weight:600;cursor:pointer;text-decoration:underline !important}.action-wrap ::slotted(button){background:rgba(0,0,0,0)}.action-wrap ::slotted(:focus){outline:none}:host([banner]) .well{max-width:none}:host([no-icon]) .icon{display:none}:host([animated]) .well{animation:well-appear 300ms ease-in forwards;transition:height 400ms ease,margin 300ms ease,border-color 300ms ease}:host([animated]) .text,:host([animated]) .dismiss{opacity:0;animation:well-content-slide-up 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 200ms forwards;transform:translateY(1.25rem);transition:transform 200ms ease}:host([animated]) .dismiss{transition:transform 200ms ease,background 250ms ease-out}:host([animated]) .icon{opacity:0;animation:well-icon-fade-in 300ms ease-in forwards}:host([dismissible]) .well.dismissed{opacity:1;animation:well-appear 200ms ease-out reverse forwards}:host([dismissible]) .well.dismissed .content{animation:well-content-slide-up 200ms ease-out reverse forwards}:host([dismissible]) .well.dismissed .icon{animation:well-icon-grow 200ms ease-out reverse forwards}:host([type=info]) .well{border:1px solid var(--zui-blue)}:host([type=info]) .icon{background-color:var(--zui-blue)}:host([type=info]) .action-wrap ::slotted(*){color:var(--zui-blue)}:host([type=info]) .action-wrap ::slotted(:hover){color:var(--zui-blue-400)}:host([type=info]) .action-wrap ::slotted(:focus){box-shadow:0 0 0 1px #fff,0 0 0 2px var(--zui-blue)}:host([type=info]) .action-wrap ::slotted(:active){color:var(--zui-blue-600)}:host([type=info]) .dismiss:focus{box-shadow:0 0 0 1px var(--zui-blue)}:host([type=warning]) .well{border:1px solid var(--zui-yellow)}:host([type=warning]) .icon{background-color:var(--zui-yellow)}:host([type=warning]) .action-wrap ::slotted(*){color:var(--zui-yellow-700)}:host([type=warning]) .action-wrap ::slotted(:hover){color:var(--zui-yellow-600)}:host([type=warning]) .action-wrap ::slotted(:focus){box-shadow:0 0 0 1px #fff,0 0 0 2px var(--zui-yellow-700)}:host([type=warning]) .action-wrap ::slotted(:active){color:var(--zui-yellow-700)}:host([type=warning]) .dismiss:focus{box-shadow:0 0 0 1px var(--zui-yellow)}:host([type=error]) .well{border:1px solid var(--zui-red)}:host([type=error]) .icon{background-color:var(--zui-red)}:host([type=error]) .action-wrap ::slotted(*){color:var(--zui-red)}:host([type=error]) .action-wrap ::slotted(:hover){color:var(--zui-red-400)}:host([type=error]) .action-wrap ::slotted(:focus){box-shadow:0 0 0 1px #fff,0 0 0 2px var(--zui-red)}:host([type=error]) .action-wrap ::slotted(:active){color:var(--zui-red-600)}:host([type=error]) .dismiss:focus{box-shadow:0 0 0 1px var(--zui-red)}:host([type=success]) .well{border:1px solid var(--zui-green)}:host([type=success]) .icon{background-color:var(--zui-green)}:host([type=success]) .action-wrap ::slotted(*){color:var(--zui-green-600)}:host([type=success]) .action-wrap ::slotted(:hover){color:var(--zui-green)}:host([type=success]) .action-wrap ::slotted(:focus){box-shadow:0 0 0 1px #fff,0 0 0 2px var(--zui-green-600)}:host([type=success]) .action-wrap ::slotted(:active){color:var(--zui-green-700)}:host([type=success]) .dismiss:focus{box-shadow:0 0 0 1px var(--zui-green)}@keyframes well-appear{0%{opacity:0;margin:0;border-color:#fff}100%{opacity:1;margin:var(--zui-well-animation-margin, var(--zui-well-margin, 1.25rem 0))}}@keyframes well-content-slide-up{0%{opacity:0;transform:translateY(1.25rem)}50%{opacity:0}100%{opacity:1;transform:translateY(0)}}@keyframes well-icon-fade-in{0%{opacity:0}100%{opacity:1}}`;

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Use `<zui-well>` to attract users' attention to a message. There are various types of wells depending on messaging needs. `<zui-well>` can optionally be delayed in appearing and then animate in. Consumers can specify whether they want it `animated` or it will default to static.
 *
 * @element zui-well
 *
 * @slot - Default, unnamed slot; for inserting content into `<zui-well>`
 * @slot action - Slot in `action` button or link that can also dismiss the well i.e. `<button` `slot="action">Got` `it</button>`
 *
 * @cssprop [--zui-well-animation-margin=1.25rem 0 (20px 0)] - Determine the margin size that animates in
 *
 * @attr {string} well-dismiss - Add this attribute to an element slotted into the `action` slot, when clicked it will close the well if attribute is present, i.e.`<zui-button` `slot="action"` `well-dismiss>`,
 *
 * @event {CustomEvent} dismiss - Event fires when well is dismissed
 */
class ZuiWell extends ZuiBaseElement {
  constructor() {
    super(...arguments);
    /**
     * The type of well to display
     * @type { 'info' | 'warning' | 'error' | 'success' }
     */
    this.type = 'info';
    /**
     * Whether or not you want to display an icon in your well
     */
    this.noIcon = false;
    /**
     * When set, a user is presented with the ability to dismiss the well
     */
    this.dismissible = false;
    /**
     * If set, well spans full width of container
     */
    this.banner = false;
    /**
     * If set, the well will slide in on load
     */
    this.animated = false;
  }
  static get styles() {
    return [super.styles, style];
  }
  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    if (this.dismissible) {
      this._dismissActionElements.forEach(actionEl => {
        actionEl.addEventListener('click', () => {
          this.dismiss();
        });
        actionEl.addEventListener('keyup', e => {
          if (e.code === 'Space') {
            this.dismiss();
          }
        });
      });
    }
  }
  render() {
    return html`
      <div class="well" @webkitAnimationEnd="${this._onAnimationEnd}" @animationend="${this._onAnimationEnd}">
        <div class="content">
          <div class="icon">
            <zui-icon icon="${this._computeIcon(this.type)}"></zui-icon>
          </div>
          <div class="text">
            <slot></slot>
            <div class="action-wrap">
              <slot name="action"></slot>
            </div>
          </div>
          ${cache(this.dismissible ? html`
                  <zui-icon class="small dismiss" icon="zui-remove" @click="${this.dismiss}" tabindex="0"></zui-icon>
                ` : html``)}
        </div>
      </div>
    `;
  }
  /**
   * Use to `dismiss` the well, only runs if `dismissible` is `true`
   */
  dismiss() {
    if (this.dismissible) {
      this._well.style.height = this._well.offsetHeight + 'px';
      // animating based off of changes in height is difficult; cannot animate from auto to 0
      setTimeout(() => {
        this._handleDismiss();
      }, 50); // 50 because the browser will optimize out CSS animations if the property changes quickly
    }
  }
  _handleDismiss() {
    this._well.classList.add('dismissed');
    this._well.style.height = '0';
    this._well.style.border = '0';
    this.dispatchEvent(new CustomEvent('dismiss', {
      bubbles: true
    }));
  }
  /**
   *
   * @param {string} type Computes the _icon property. This determines which zui-icon this well will use.
   */
  _computeIcon(type) {
    type = type || '';
    const prefix = 'zui';
    let icon = undefined;
    switch (type.toLowerCase()) {
      case 'info':
        icon = 'info';
        break;
      case 'success':
        icon = 'success';
        break;
      case 'warning':
        icon = 'warning';
        break;
      case 'error':
        icon = 'error';
        break;
      default:
        icon = 'info';
        break;
    }
    return `${prefix}-${icon}`;
  }
  _onAnimationEnd() {
    if (!this._well.classList.contains('dismissed')) {
      this._well.style.height = 'auto';
    }
  }
}
__decorate([property({
  type: String,
  reflect: true,
  attribute: 'type'
})], ZuiWell.prototype, "type", void 0);
__decorate([property({
  type: Boolean,
  attribute: 'no-icon'
})], ZuiWell.prototype, "noIcon", void 0);
__decorate([property({
  type: Boolean,
  attribute: 'dismissible'
})], ZuiWell.prototype, "dismissible", void 0);
__decorate([property({
  type: Boolean,
  attribute: 'banner'
})], ZuiWell.prototype, "banner", void 0);
__decorate([property({
  type: Boolean,
  attribute: 'animated',
  reflect: true
})], ZuiWell.prototype, "animated", void 0);
__decorate([query('.well')], ZuiWell.prototype, "_well", void 0);
__decorate([queryAssignedElements({
  slot: 'action',
  flatten: true,
  selector: '[well-dismiss]'
})], ZuiWell.prototype, "_dismissActionElements", void 0);
window.customElements.define('zui-well', ZuiWell);

window.zywave = {
  ...window.zywave
};
window.zywave.zui = {
  ...window.zywave.zui,
  analytics: instance
};
const zuiDialogElementPromises = [];
if (!window.HTMLDialogElement) {
  zuiDialogElementPromises.push(import('./internals/_96f49744.js').then(exports => {
    window.zywave.zui.dialogPolyfill = exports.default;
  }));
}
zuiDialogElementPromises.push(import('./internals/_8dc03002.js'));
Promise.allSettled(zuiDialogElementPromises);
if (!window.getComputedStyle(document.documentElement).getPropertyValue('--zui-blue')) {
  import('./internals/_ecd12920.js');
}

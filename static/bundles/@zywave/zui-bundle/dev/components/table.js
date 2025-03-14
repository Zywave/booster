import { Z as ZuiBaseElement, c as css, p as property, f as queryAssignedElements, h as html, u as updateCustomState, b as classMap, n as nothing } from '../internals/_a9b1a7d3.js';
import { s as screenBreakpoints, q as queryAssignedNodes, a as state } from '../internals/_53938435.js';

class TableState {
  constructor(root) {
    this.elements = new Set();
    this.channel = new EventTarget();
    this.root = root;
  }
}
class ZuiTableBaseElement extends ZuiBaseElement {
  /**
   * This represents a common eventing ecosystem for all ZuiTableBaseElements, regardless of association
   */
  static {
    this._globalChannel = new EventTarget();
  }
  /**
   * Accessor for the associated table state
   */
  get _state() {
    if (this.tagName === 'ZUI-TABLE') {
      return ZuiTableBaseElement.#states.get(this);
    }
    const table = ZuiTableBaseElement.#tableAssociations.get(this);
    if (table) {
      return ZuiTableBaseElement.#states.get(table);
    }
    return undefined;
  }
  static #states = new WeakMap();
  static #tableAssociations = new WeakMap();
  constructor() {
    super();
    if (this.tagName === 'ZUI-TABLE') {
      ZuiTableBaseElement.#states.set(this, new TableState(this));
    }
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.tagName !== 'ZUI-TABLE') {
      ZuiTableBaseElement._globalChannel.dispatchEvent(new CustomEvent('connected', {
        detail: {
          element: this
        }
      }));
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.tagName === 'ZUI-TABLE') {
      ZuiTableBaseElement.#states.delete(this);
    } else {
      ZuiTableBaseElement.#tableAssociations.delete(this);
      this._state?.elements.delete(this);
    }
  }
  _associateElement(element) {
    if (this.tagName !== 'ZUI-TABLE' || element.tagName === 'ZUI-TABLE') {
      return;
    }
    ZuiTableBaseElement.#tableAssociations.set(element, this);
    this._state.elements.add(element);
  }
}

const style$4 = css`:host{contain:none;display:block}:host .no-results{display:none}:host([banded]) ::slotted(zui-table-row:not([header]):nth-child(even)){background-color:var(--zui-gray-25)}:host([banded]) ::slotted(zui-table-row:not([header])){border:0}:host([no-results]) .no-results{display:block;padding:.75rem 1.25rem;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.29)}@media(min-width: 45em){:host([no-results]) .no-results{background-color:rgba(0,0,0,0);box-shadow:none}}:host([loading]) ::slotted(zui-table-row:not([header])),:host([loading]) .no-results{visibility:hidden}:host([loading]) zui-spinner{position:absolute;top:50%;left:50%}:host([loading]) .table{min-height:var(--zui-table-loading-min-height, 20rem)}::slotted(zui-table-row:not([header])){border-bottom:2px solid var(--zui-gray-100)}@media(min-width: 45em){::slotted(zui-table-row:not([header])){border-bottom-width:1px}}::slotted(zui-table-row:not([header]):last-of-type){border-bottom:0}.table{position:relative;display:flex;width:100%;flex-direction:column;border-collapse:collapse;border-spacing:0}@media(min-width: 45em){.table{background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.29)}}`;

var __decorate$3 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * A standardized responsive table component.
 *
 * @element zui-table
 *
 * @slot - Default, unnamed slot; for inserting `<zui-table-topbar>`, `<zui-table-row>`, and `<zui-table-footer>` elements, including a custom no results view, into `<zui-table>`
 * @slot no-results-message - Customize the no results message that is shown when the `no-results` attribute is set on `<zui-table>`: `<zui-table no-results>`
 * @slot footer - Only for `<zui-table-footer>`. When there is a `<zui-table-footer>` present inside `<zui-table>`, it will be auto-assigned to this slot in order to place it outside of the rendered table for styling purposes.
 *
 * @cssprop [--zui-table-cell-padding=13px 20px] - Override cell padding
 * @cssprop [--zui-table-columns-template=repeat(auto-fit, minmax(0, 1fr))] - Override the table columns template. See https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns for more information on valid values.
 * @cssprop [--zui-table-summary-background-color=var(--zui-gray-600)] - Override the table summary background color
 * @cssprop [--zui-table-summary-text-color=#fff] - Override the the table summary text color
 * @cssprop [--zui-table-footer-margin=10px] - Override the margin between the table and footer of the table
 * @cssprop [--zui-table-loading-min-height=20rem] - Override the minimum height of the table body when in a loading state
 *
 * @event sort - Event fires when the table's active sort changes. Event detail is an object with the `sort` direction and `cell` ZuiTableCellElement.
 *
 * @cssState mobile - Applied when the table is rendered in mobile mode
 */
class ZuiTableElement extends ZuiTableBaseElement {
  #internals;
  #mobileBreakpoint;
  #sortLock;
  #mobileHeadersEvent;
  static get styles() {
    return [super.styles, style$4];
  }
  constructor() {
    super();
    /**
     * Set for alternating table row background colors
     */
    this.banded = false;
    // TODO: add divided prop so all table cells will have 1px border
    /**
     * Set to show or hide no results message when there are no results; use in conjunction with the assigned slot `no-results-message` to include a no results message
     */
    this.noResults = false;
    /**
     * Set to show a loading spinner in the table
     */
    this.loading = false;
    this.#mobileBreakpoint = window.matchMedia(`only screen and (max-width: ${screenBreakpoints.xsmall})`);
    this.#sortLock = false;
    this.#mobileHeadersEvent = b => {
      b.matches ? this.#addRowHeadersToCells() : this.#removeRowHeadersFromCells();
    };
    this.#internals = this.attachInternals?.();
    ZuiTableBaseElement._globalChannel.addEventListener('connected', event => {
      if (this.contains(event.detail.element)) {
        this._associateElement(event.detail.element);
      }
    });
    this._state.channel.addEventListener('sort', event => {
      if (this.#sortLock) {
        return;
      }
      this.#sortLock = true;
      this.dispatchEvent(new CustomEvent('sort', {
        detail: event.detail,
        bubbles: true
      }));
      setTimeout(() => this.#sortLock = false, 0);
    });
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'table');
    if (this.#mobileBreakpoint.addEventListener) {
      this.#mobileBreakpoint.addEventListener('change', this.#mobileHeadersEvent);
    } else {
      this.#mobileBreakpoint.addListener(this.#mobileHeadersEvent);
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.#mobileBreakpoint.addEventListener) {
      this.#mobileBreakpoint.removeEventListener('change', this.#mobileHeadersEvent);
    } else if (this.#mobileBreakpoint.addListener) {
      this.#mobileBreakpoint.removeListener(this.#mobileHeadersEvent);
    }
  }
  firstUpdated() {
    this.#reassignFooter();
    this.#mobileBreakpoint.matches ? this.#addRowHeadersToCells() : this.#removeRowHeadersFromCells();
  }
  render() {
    return html`<div class="table">
        <slot
          @slotchange="${this.#mobileBreakpoint.matches ? this.#addRowHeadersToCells : this.#removeRowHeadersFromCells}"
        ></slot>
        ${this.loading ? html`<zui-spinner active="" part="loader"></zui-spinner>` : html``}
        ${this.#renderNoResultsView()}</div
      >
      <div><slot name="footer"></slot></div>`;
  }
  #renderNoResultsView() {
    return html`<div class="no-results"><slot name="no-results-message"></slot></div>`;
  }
  #reassignFooter() {
    this._footer?.map(f => f.setAttribute('slot', 'footer'));
  }
  #addRowHeadersToCells() {
    const rowHeadersList = this._rows.filter(h => h.hasAttribute('header'));
    const rowBodyList = this._rows.filter(r => !r.hasAttribute('header') && !r.hasAttribute('summary'));
    if (rowHeadersList.length > 0) {
      for (const row of rowBodyList) {
        for (let i = 0; i < row.children.length; i++) {
          const cell = row.children[i];
          if (!cell.shadowRoot.querySelector('.header')) {
            const rowHeaderContainer = document.createElement('div');
            rowHeaderContainer.classList.add('header');
            const rowHeaderText = rowHeadersList[0].children[i].textContent;
            rowHeaderContainer.innerText = rowHeaderText;
            cell.shadowRoot.prepend(rowHeaderContainer);
          }
        }
      }
    }
    updateCustomState(this.#internals, 'add', 'mobile');
    this.requestUpdate();
  }
  #removeRowHeadersFromCells() {
    const rowBodyList = this._rows.filter(r => !r.hasAttribute('header') && !r.hasAttribute('summary'));
    for (const row of rowBodyList) {
      for (let i = 0; i < row.children.length; i++) {
        const rowChildren = row.children[i].shadowRoot;
        const header = rowChildren.querySelector('.header');
        if (header) {
          rowChildren.removeChild(header);
        }
      }
    }
    // remove custom state --mobile from zui-table
    updateCustomState(this.#internals, 'delete', 'mobile');
    this.requestUpdate();
  }
}
__decorate$3([property({
  type: Boolean,
  reflect: true
})], ZuiTableElement.prototype, "banded", void 0);
__decorate$3([property({
  type: Boolean,
  reflect: true,
  attribute: 'no-results'
})], ZuiTableElement.prototype, "noResults", void 0);
__decorate$3([property({
  type: Boolean,
  reflect: true
})], ZuiTableElement.prototype, "loading", void 0);
__decorate$3([queryAssignedElements({
  selector: 'zui-table-row'
})], ZuiTableElement.prototype, "_rows", void 0);
__decorate$3([queryAssignedElements({
  selector: 'zui-table-footer'
})], ZuiTableElement.prototype, "_footer", void 0);
window.customElements.define('zui-table', ZuiTableElement);

const style$3 = css`:host{contain:none}.topbar{display:flex;width:100%;min-height:3.75rem;flex-wrap:wrap;justify-content:space-between;align-items:center}@media(min-width: 45em){.topbar{flex-wrap:nowrap;padding:.625rem 1.25rem;background-color:var(--zui-gray-25);box-shadow:none}}.content{display:flex;flex:1;align-items:center;order:1;margin-bottom:1.25rem}@media(min-width: 30em){.content{flex:auto;order:0}}@media(min-width: 45em){.content{margin-bottom:0}}.content ::slotted(zui-search){--zui-search-border-color: var(--zui-gray-50);width:100%}@media(min-width: 45em){.content ::slotted(zui-search){width:auto}}.counter{display:flex;width:100%;flex-shrink:0;justify-content:flex-end;order:2;margin-bottom:.625rem;margin-left:auto;padding-left:.625rem;font-size:.75rem;color:var(--zui-gray-400)}@media(min-width: 45em){.counter{width:auto;order:0;margin-bottom:0}}.action{display:flex;width:100%;justify-content:flex-end;margin-bottom:1.25rem}@media(min-width: 30em){.action{width:auto}}@media(min-width: 45em){.action{margin-bottom:0}}.action slot[name=action]{display:flex;width:100%;flex-direction:column}@media(min-width: 30em){.action slot[name=action]{flex-direction:row}}.action ::slotted(zui-button){width:100%}@media(min-width: 30em){.action ::slotted(zui-button){width:auto}}@media(min-width: 30em){.action ::slotted(zui-button:first-of-type),.action ::slotted(zui-button-group:first-of-type){margin-left:1.25rem}}@media(min-width: 45em){.action ::slotted(zui-button:first-of-type),.action ::slotted(zui-button-group:first-of-type){margin-left:.625rem}}.action ::slotted(zui-button:not(:first-of-type)),.action ::slotted(zui-button-group:not(:first-of-type)){margin-top:.625rem}@media(min-width: 30em){.action ::slotted(zui-button:not(:first-of-type)),.action ::slotted(zui-button-group:not(:first-of-type)){margin-top:0;margin-left:.625rem}}`;

var __decorate$2 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Used to house table related pieces such as a search input or `<zui-search>`, and other up front information.
 *
 * @element zui-table-topbar
 *
 * @slot - Default, unnamed slot; for inserting content into `<zui-table-topbar>`
 * @slot counter - Total number of results from table goes here
 * @slot action - Action(s) that affect the whole table goes here
 */
class ZuiTableTopbarElement extends ZuiTableBaseElement {
  #mobileBreakpoint = window.matchMedia(`only screen and (max-width: ${screenBreakpoints.xsmall})`);
  #mobileTopbarActionButtonsEvent = b => {
    b.matches ? this.#addBlockStylingToButtons() : this.#removeBlockStylingFromButtons();
  };
  static get styles() {
    return [super.styles, style$3];
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.#mobileBreakpoint.addEventListener) {
      this.#mobileBreakpoint.addEventListener('change', this.#mobileTopbarActionButtonsEvent);
    } else {
      this.#mobileBreakpoint.addListener(this.#mobileTopbarActionButtonsEvent);
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.#mobileBreakpoint.addEventListener) {
      this.#mobileBreakpoint.removeEventListener('change', this.#mobileTopbarActionButtonsEvent);
    } else if (this.#mobileBreakpoint.addListener) {
      this.#mobileBreakpoint.removeListener(this.#mobileTopbarActionButtonsEvent);
    }
  }
  firstUpdated() {
    this.#mobileBreakpoint.matches ? this.#addBlockStylingToButtons() : this.#removeBlockStylingFromButtons();
    this.#toggleActionDivDisplay();
    this.#toggleCounterDivDisplay();
  }
  render() {
    return html`<div class="topbar">
      <div class="content"><slot></slot></div>
      <div class="counter"><slot name="counter" @slotchange="${this.#toggleCounterDivDisplay}"></slot></div>
      <div class="action"><slot name="action" @slotchange=${this.#handleActionSlotchange}></slot></div>
    </div>`;
  }
  #handleActionSlotchange() {
    this.#toggleActionDivDisplay();
    this.#mobileBreakpoint.matches ? this.#addBlockStylingToButtons() : this.#removeBlockStylingFromButtons();
  }
  #addBlockStylingToButtons() {
    if (this._actionButtons.length > 0) {
      for (const button of this._actionButtons) {
        if (!button.hasAttribute('block')) {
          button.setAttribute('block', '');
        }
      }
    }
    this.requestUpdate();
  }
  #removeBlockStylingFromButtons() {
    if (this._actionButtons.length > 0) {
      for (const button of this._actionButtons) {
        if (button.hasAttribute('block')) {
          button.removeAttribute('block');
        }
      }
    }
    this.requestUpdate();
  }
  #toggleCounterDivDisplay() {
    const counter = this.shadowRoot.querySelector('.counter');
    if (this._counterSlottedNodes.length === 0) {
      counter.style.display = 'none';
    } else if (this._counterSlottedNodes.length > 0 && counter.style.display === 'none') {
      counter.style.removeProperty('display');
    }
    this.requestUpdate();
  }
  #toggleActionDivDisplay() {
    const action = this.shadowRoot.querySelector('.action');
    if (this._actionSlottedElements.length === 0) {
      action.style.display = 'none';
    } else if (this._actionSlottedElements.length > 0 && action.style.display === 'none') {
      action.style.removeProperty('display');
    }
    this.requestUpdate();
  }
}
__decorate$2([queryAssignedElements({
  slot: 'action'
})], ZuiTableTopbarElement.prototype, "_actionSlottedElements", void 0);
__decorate$2([queryAssignedNodes({
  slot: 'counter'
})], ZuiTableTopbarElement.prototype, "_counterSlottedNodes", void 0);
__decorate$2([queryAssignedElements({
  selector: 'zui-button',
  slot: 'action'
})], ZuiTableTopbarElement.prototype, "_actionButtons", void 0);
window.customElements.define('zui-table-topbar', ZuiTableTopbarElement);

const style$2 = css`:host{contain:none}.footer{display:flex;justify-content:center;align-items:center;margin-top:var(--zui-table-footer-margin, 0.625rem)}::slotted(zui-pager){width:100%}`;

/**
 * Footer table element, should come as the last item passed into a `<zui-table>`.
 *
 * @element zui-table-footer
 *
 * @slot - Default, unnamed slot; for inserting table footer content into `<zui-table-footer>`
 *
 * @cssprop [--zui-table-footer-margin=0.625rem (10px)] - Override the margin between the table and footer of the table
 */
class ZuiTableFooterElement extends ZuiTableBaseElement {
  static get styles() {
    return [super.styles, style$2];
  }
  render() {
    return html`<div class="footer">
      <slot></slot>
    </div>`;
  }
}
window.customElements.define('zui-table-footer', ZuiTableFooterElement);

const style$1 = css`:host{contain:none}:host(:last-of-type:not([summary])) div,:host([summary]) div{margin-bottom:0}:host([header]){display:none;background-color:#fff;border-bottom:1px solid var(--zui-gray-200)}@media(min-width: 45em){:host([header]){display:block}}:host([header]) div{box-shadow:none}:host([header]) ::slotted(zui-table-cell){--zui-table-cell-padding: 0.53125rem 1.25rem;font-weight:600;user-select:none}div{display:grid;grid-template-columns:auto;margin-bottom:0;padding:.625rem 0;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.29)}@media(min-width: 45em){div{grid-template-columns:var(--zui-table-columns-template, repeat(auto-fit, minmax(0, 1fr)));padding:0;background-color:rgba(0,0,0,0);box-shadow:none}}:host([summary]){background-color:var(--zui-table-summary-background-color, var(--zui-gray-600)) !important}:host([summary]) div{margin-bottom:0;background-color:rgba(0,0,0,0)}:host([summary]) ::slotted(zui-table-cell){font-weight:600;color:var(--zui-table-summary-text-color, #fff)}`;

var __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Insert into `<zui-table>`; `<zui-table-row>` holds a row of `<zui-table-cell>` elements.
 *
 * @element zui-table-row
 *
 * @slot - Default, unnamed slot; for inserting `<zui-table-cell>` elements into `<zui-table-row>`
 *
 * @cssprop [--zui-table-columns-template=repeat(auto-fit, minmax(0, 1fr))] - Override the table columns template. See https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns for more information on valid values.
 * @cssprop [--zui-table-summary-background-color=var(--zui-gray-600)] - Override the table summary background color
 * @cssprop [--zui-table-summary-text-color=#fff] - Override the table summary text color
 */
class ZuiTableRowElement extends ZuiTableBaseElement {
  constructor() {
    super(...arguments);
    /**
     * Declare a table header; typically the first row in `<zui-table>`
     */
    this.header = false;
    /**
     * Declare a table summary row; typically the last row in `<zui-table>` before `<zui-table-footer>`
     */
    this.summary = false;
  }
  #sortLock;
  static get styles() {
    return [super.styles, style$1];
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'row');
  }
  firstUpdated() {
    if (this.header) {
      const firstCellWithDirection = this._slottedCells?.find(cell => cell?.hasAttribute('sort'));
      this._slottedCells.forEach(cell => {
        if (cell.sort && cell !== firstCellWithDirection) {
          cell.sort = null;
        }
      });
    }
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('header')) {
      this.#ensureCellState();
      if (this.header) {
        this._state?.channel.addEventListener('sort', e => this.#onTableSort(e));
      }
    }
  }
  render() {
    return html`<div>
      <slot @slotchange="${this.#ensureCellState()}"></slot>
    </div>`;
  }
  #onTableSort(event) {
    if (this.#sortLock) {
      return;
    }
    this.#sortLock = true;
    this._slottedCells?.forEach(cell => {
      if (cell !== event.detail.cell) {
        cell.sort = null;
      }
    });
    setTimeout(() => {
      this.#sortLock = false;
    }, 0);
  }
  #ensureCellState() {
    if (!this._slottedCells) {
      return;
    }
    /* eslint-disable @typescript-eslint/no-explicit-any */
    if (this.header) {
      this._slottedCells.forEach(cell => {
        cell.setAttribute('role', 'columnheader');
        cell._isAllowedSort = true;
      });
    } else {
      this._slottedCells.forEach(cell => {
        cell.setAttribute('role', 'cell');
        cell._isAllowedSort = false;
      });
    }
    /* eslint-enable @typescript-eslint/no-explicit-any */
  }
}
__decorate$1([property({
  type: Boolean,
  reflect: true
})], ZuiTableRowElement.prototype, "header", void 0);
__decorate$1([property({
  type: Boolean,
  reflect: true
})], ZuiTableRowElement.prototype, "summary", void 0);
__decorate$1([queryAssignedElements({
  selector: 'zui-table-cell'
})], ZuiTableRowElement.prototype, "_slottedCells", void 0);
window.customElements.define('zui-table-row', ZuiTableRowElement);

const style = css`:host{--zui-table-cell-sort-active-color: var(--zui-blue);--zui-table-cell-sort-color: var(--zui-gray-300);contain:none;overflow-wrap:break-word}:host([action]) div{display:flex}@media(min-width: 45em){:host([action]) div{--zui-table-cell-padding: 0.375rem 1.25rem;align-items:center}}:host([action]) ::slotted(zui-button:not(:first-of-type)){margin-left:.625rem}:host([sort=ascending]) zui-icon{--zui-icon-sort-ascending-color: var(--zui-table-cell-sort-active-color)}:host([sort=descending]) zui-icon{--zui-icon-sort-descending-color: var(--zui-table-cell-sort-active-color)}div{padding:var(--zui-table-cell-padding, 0.3125rem 0.9375rem)}@media(min-width: 45em){div{padding:var(--zui-table-cell-padding, 0.8125rem 1.25rem)}}div.header{float:left;width:33.333%;font-weight:600}div.header+div{padding:var(--zui-table-cell-padding, 0.3125rem 0.9375rem 0.3125rem 0)}zui-icon{--zui-icon-size: 1.125rem;vertical-align:middle;margin-left:.625rem;fill:var(--zui-table-cell-sort-color)}.is-selectable{cursor:pointer}`;

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * An individual table cell to be passed into a `<zui-table-row>`.
 *
 * @element zui-table-cell
 *
 * @slot - Default, unnamed slot; for inserting table cell content into `<zui-table-cell>`
 *
 * @cssprop [--zui-table-cell-padding=13px 20px] - Override cell padding
 * @cssprop [--zui-table-cell-sort-color=var(--zui-gray-300)] - ([sortable]): Default color of chevron when `direction` is `null`
 * @cssprop [--zui-table-cell-sort-active-color=var(--zui-blue)] - Highlight color used to indicate the active sort direction
 *
 */
class ZuiTableCellElement extends ZuiTableBaseElement {
  constructor() {
    super(...arguments);
    /**
     * Set to decrease table cell padding to accommodate action button(s)
     */
    this.action = false;
    /**
     * This private field is needed to persist state between the cell and the header row. DO NOT USE EXTERNALLY
     */
    this._isAllowedSort = false;
    this.#sort = null;
    this.#sortable = false;
  }
  /**
   * Current sort direction of the sortable cell
   * @type {null | "ascending" | "descending"}
   */
  get sort() {
    return this.#sort;
  }
  set sort(val) {
    const acceptableVals = ['ascending', 'descending', null];
    if (acceptableVals.includes(val)) {
      const oldVal = this.#sort;
      this.#sort = val;
      this.requestUpdate('sort', oldVal);
      this._state?.channel.dispatchEvent(new CustomEvent('sort', {
        detail: {
          sort: val,
          cell: this
        }
      }));
    }
  }
  /**
   * (`zui-table-row[header]`): Whether or not cell header is sortable; another requirement is the parent element, `<zui-table-cell header>` must have `header` attribute or property set
   */
  get sortable() {
    return this._isAllowedSort && this.#sortable;
  }
  set sortable(val) {
    const oldVal = this.#sortable;
    this.#sortable = val;
    this.requestUpdate('sortable', oldVal);
  }
  #sort;
  #sortable;
  static get styles() {
    return [super.styles, style];
  }
  render() {
    if (this.sortable) {
      import('../internals/_288dbf3b.js');
    }
    const styles = {
      'is-selectable': this.sortable
    };
    return html`<div @click="${this.#onSortableClick}" class="${classMap(styles)}">
      <slot></slot>
      ${this.sortable ? html`<zui-icon icon="zui-sort"></zui-icon>` : nothing}
    </div>`;
  }
  click() {
    super.click();
    this.#onSortableClick();
  }
  #onSortableClick() {
    if (this.sortable) {
      switch (this.sort) {
        case 'ascending':
          this.sort = 'descending';
          break;
        case 'descending':
          this.sort = null;
          break;
        case null:
        default:
          this.sort = 'ascending';
          break;
      }
    }
  }
}
__decorate([property({
  type: Boolean,
  reflect: true
})], ZuiTableCellElement.prototype, "action", void 0);
__decorate([property({
  type: String,
  reflect: true
})], ZuiTableCellElement.prototype, "sort", null);
__decorate([property({
  type: Boolean,
  reflect: true
})], ZuiTableCellElement.prototype, "sortable", null);
__decorate([state()], ZuiTableCellElement.prototype, "_isAllowedSort", void 0);
window.customElements.define('zui-table-cell', ZuiTableCellElement);

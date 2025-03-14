import { c as css, Z as ZuiBaseElement, h as html, b as classMap, q as query, p as property } from './_a9b1a7d3.js';
import { q as queryAssignedNodes } from './_53938435.js';

const style = css`@supports(scrollbar-width: thin){dialog,dialog.scrolling .header-content-container{scrollbar-color:var(--zui-gray-400) var(--zui-gray-50);scrollbar-width:thin}}@supports not (scrollbar-width: thin){dialog::-webkit-scrollbar,dialog.scrolling .header-content-container::-webkit-scrollbar{width:7px;height:7px;background-color:var(--zui-gray-50)}dialog::-webkit-scrollbar-thumb,dialog.scrolling .header-content-container::-webkit-scrollbar-thumb{background-color:var(--zui-gray-400);border-radius:10px}}:host{contain:none;z-index:6000}:host dialog::backdrop,:host .backdrop{background:var(--zui-dialog-backdrop-color, rgba(0, 0, 0, 0.6))}:host .header-content-container{padding:1.875rem}:host .header ::slotted(*),:host .footer ::slotted(*){margin-bottom:0 !important}:host .header{margin-bottom:1.25rem}:host .content{min-height:7.5rem;transition:height 1s cubic-bezier(0.25, 0.8, 0.25, 1)}:host .footer{display:flex;height:5.625rem;justify-content:flex-end;padding:1.25rem 1.875rem 1.875rem}:host .footer ::slotted(div){display:flex}:host .footer ::slotted(*:last-child:not(:only-child)){margin-left:.625rem}:host .footer ::slotted(*:nth-last-child(3)){margin-right:auto}:host([hide-backdrop]) dialog::backdrop,:host([hide-backdrop]) .backdrop{background:rgba(0,0,0,0)}:host(:not([opened])){display:none}dialog{--dialog-margin-spacer: 1.0625rem;position:fixed;top:0;bottom:0;left:0;width:100%;max-width:min(100% - var(--dialog-margin-spacer)*2,42.1875rem);max-height:calc(100% - var(--dialog-margin-spacer)*2);overflow:visible;padding:0;background:#fff;border:0;border-radius:4px;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}@media(min-width: 45em){dialog{max-height:calc(100% - var(--dialog-margin-spacer)*2 - 1.875rem)}}dialog.scrolling{overflow-y:hidden}dialog.scrolling .header-content-container{height:calc(100vh - 9.375rem);overflow-y:auto}dialog.scrolling .footer{border-top:1px solid var(--zui-gray-100)}dialog:-internal-modal{position:fixed;top:0;bottom:0;max-width:calc(100% - 6px - 2em);max-height:calc(100% - 6px - 2em);overflow:auto}dialog::backdrop,.backdrop{position:fixed;top:0;right:0;bottom:0;left:0}:host(.small) dialog{max-width:min(100% - var(--dialog-margin-spacer)*2,29.6875rem)}:host(.large) dialog{max-width:min(100% - var(--dialog-margin-spacer)*2,54.6875rem)}:host(.full) dialog{max-width:calc(100% - var(--dialog-margin-spacer)*2)}@supports(background: -webkit-named-image(i)) and (not (contain: content)){dialog{top:var(--dialog-margin-spacer);right:var(--dialog-margin-spacer);bottom:unset;left:var(--dialog-margin-spacer);margin:0 auto}}`;

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a;
const SUPPORTS_HTML_DIALOG = window.HTMLDialogElement && window.HTMLDialogElement.prototype.showModal;
/**
 * `<zui-dialog>` is an overlay modal used to focus a user's attention.
 * Note: this component depends on `<dialog>` which may not be supported in older browsers. If not using the bundle, you'll require a polyfill. See https://github.com/GoogleChrome/dialog-polyfill for more info.
 *
 * @element zui-dialog
 *
 * @slot - Default, unnamed slot; for inserting content into the body of `<zui-dialog>`
 * @slot header - Slot for title text
 * @slot footer - Slot for footer elements such as `<zui-button>` elements to close or confirm the dialog
 * @slot content - Deprecated: Use the default, unnamed slot instead
 *
 * @attr {boolean} [dialog-close=false] - Add this attribute to the corresponding footer element; when clicked it will cancel, close the dialog, and trigger the custom event 'close' with `event.detail=false`
 * @attr {boolean} [dialog-confirm=false] - Add this attribute to the corresponding footer element; when clicked it will confirm, close the dialog, and trigger the custom event 'close' with `event.detail=true`
 * @attr {boolean} [hide-backdrop=false] - Not recommended; this attribute removes the dialog backdrop color
 *
 * @csspart header - The header container inside `<zui-dialog>`; this is exposed as a CSS shadow part and can be accessed with `::part(header)`
 * @csspart content - The content container inside `<zui-dialog>`; this is exposed as a CSS shadow part and can be accessed with `::part(content)`
 * @csspart footer - The footer container inside `<zui-dialog>`; this is exposed as a CSS shadow part and can be accessed with `::part(footer)`
 *
 * @prop {boolean} [canceled=undefined | null] - Readonly; true if the dialog was canceled when it was last closed.
 *
 * @event close - Event dispatches once dialog is closed. If the dialog was closed by cancelling, `event.detail = false`. If the dialog was closed by confirming, `event.detail = true`.
 * @event open - Event dispatches once dialog is opened
 */
class ZuiDialogElement extends ZuiBaseElement {
  constructor() {
    super(...arguments);
    this.#open = false;
    // Used for checking if content is longer than dialog in order to overflow content and sticky the dialog footer
    this.#scrollbarVisible = false;
    /**
     * When `true`, users cannot click outside the dialog card, in the translucent overlay, to close the dialog; default allows clicking overlay to close by cancel
     */
    this.noCancelOutsideDialog = false;
  }
  #open;
  #canceled;
  #contentObserver;
  static #instances = new Map();
  // Used for checking if content is longer than dialog in order to overflow content and sticky the dialog footer
  #scrollbarVisible;
  static get styles() {
    return [super.styles, style];
  }
  /**
   * Represents if the dialog is currently open or not. Can apply to automatically open the dialog when attached to the DOM.
   */
  get opened() {
    return this.#open;
  }
  set opened(val) {
    const oldVal = this.#open;
    if (oldVal !== val) {
      this.#open = val;
      this.requestUpdate('opened', oldVal);
      this.#ensureDialogState(val);
      val ? this.#dispatchOpenEvent() : this.#dispatchCloseEvent(false);
      val ? this.#isScrollbarVisible() : this.#resetScrollbarVisible();
      if (!val) {
        this.#canceled = true;
      }
    }
  }
  get canceled() {
    return this.#canceled;
  }
  /**
   * Opens a dialog
   */
  open() {
    this.opened = true;
  }
  /**
   *- Closes dialog, default argument is `false` meaning a close by cancel, pass in `true` for close by confirmation
   * @param {boolean} [confirm=false] - Close by confirmation or not
   */
  close(confirm = false) {
    if (this.#open) {
      this.#open = false;
      this.#ensureDialogState(false);
      this.#canceled = !confirm;
      this.requestUpdate('opened');
      this.#dispatchCloseEvent(confirm);
      this.#resetScrollbarVisible();
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'dialog');
    this.setAttribute('aria-labelledby', 'dialogTitle');
    this.setAttribute('aria-describedby', 'dialogDesc');
    this.#setupContentMutationObserver();
    _a.#instances.set(this, false);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.close(false);
    _a.#instances.delete(this);
    this.#disconnectContentMutationObserver();
  }
  async firstUpdated() {
    if (!SUPPORTS_HTML_DIALOG) {
      const dialogPolyfill = window?.dialogPolyfill ?? window?.zywave?.zui?.dialogPolyfill;
      if (!dialogPolyfill) {
        /* eslint-disable no-console */
        console.warn('Dialog polyfill required in this browser. ZUI Dialog will not function. See https://github.com/GoogleChrome/dialog-polyfill for more info.');
      } else {
        dialogPolyfill.registerDialog(this._dialogElement);
      }
    }
    this.#ensureDialogState(this.#open);
    this.#toggleHeader();
    this.#toggleFooter();
  }
  /**
   *
   * @param isOpen - Whether or not the dialog should be open
   * @param retries - Indicates how many attempts to retry ensuring the shadow dialog correctly represents the open state. Used to prevent infinitely calling itself.
   */
  #ensureDialogState(isOpen, retries = 1) {
    // disconnected elements cannot be in an "open" state
    if (!this.isConnected) {
      _a.#instances.set(this, false);
      return;
    }
    const isDialogReady = this._dialogElement && (this._dialogElement.isConnected || !SUPPORTS_HTML_DIALOG);
    if (!isDialogReady && retries > 0) {
      this.requestUpdate();
      this.updateComplete.then(() => this.#ensureDialogState(isOpen, --retries));
      return;
    }
    // we should only call show/showModal/close if the dialog isn't currently in the target state; otherwise native code will throw an exception
    const shadowDialogOpen = this._dialogElement?.hasAttribute('open');
    if (isOpen && !shadowDialogOpen) {
      this._dialogElement.showModal();
    } else if (!isOpen && shadowDialogOpen) {
      this._dialogElement.close();
    }
    _a.#instances.set(this, isOpen);
    const areAnyDialogsOpen = isOpen || Array.from(_a.#instances.values()).find(x => x);
    document.body.style.overflow = areAnyDialogsOpen ? 'hidden' : '';
  }
  #dispatchOpenEvent() {
    this.dispatchEvent(new CustomEvent('open', {
      bubbles: true,
      cancelable: true
    }));
  }
  #dispatchCloseEvent(wasDialogClosedByConfirm) {
    this.dispatchEvent(new CustomEvent('close', {
      bubbles: true,
      cancelable: true,
      detail: wasDialogClosedByConfirm
    }));
  }
  #footerActionHandler(e) {
    const target = e.target;
    if (target.hasAttribute('dialog-confirm')) {
      this.close(true);
    } else if (target.hasAttribute('dialog-close')) {
      this.close(false);
    }
  }
  #onSubmit(e) {
    // if the submit is of a form with the attribute `method="dialog"`, then close the dialog OR
    // if the submitter has the attribute `formmethod="dialog"`, then close the dialog
    if (e.target.method === 'dialog' || e.submitter?.getAttribute('formmethod') === 'dialog') {
      this.close();
    }
  }
  #wasBackdropClicked(event) {
    if (event.target === this._dialogElement) {
      this.close(false);
    }
  }
  // Show or hide header slot based on whether or not it has content
  #toggleHeader() {
    const header = this.shadowRoot.querySelector('.header');
    if (this._headerSlottedNodes.length === 0) {
      header.style.display = 'none';
    } else if (this._headerSlottedNodes.length > 0 && header.style.display === 'none') {
      header.style.removeProperty('display');
    }
    this.requestUpdate();
  }
  // Show or hide footer slot based on whether or not it has content
  #toggleFooter() {
    const footer = this.shadowRoot.querySelector('.footer');
    if (this._footerSlottedNodes.length === 0) {
      footer.style.display = 'none';
    } else if (this._footerSlottedNodes.length > 0 && footer.style.display === 'none') {
      footer.style.removeProperty('display');
    }
    this.requestUpdate();
  }
  // Check if dialog scrollbar is visible
  async #isScrollbarVisible() {
    await this.updateComplete;
    if (!this.#scrollbarVisible && this._dialogElement?.scrollHeight > this._dialogElement?.clientHeight) {
      this.#scrollbarVisible = true;
    }
    this.requestUpdate();
  }
  // Reset this.#scrollbarVisible to false, usually when closing a dialog
  #resetScrollbarVisible() {
    if (this.#scrollbarVisible) {
      this.#scrollbarVisible = false;
    }
    this.requestUpdate();
  }
  // Setup MutationObserver to check if dialog content has changed
  #setupContentMutationObserver() {
    this.#contentObserver = new MutationObserver(mutations => {
      for (const m of mutations) {
        if (m.type === 'childList') {
          this.#isScrollbarVisible();
        }
      }
    });
    this.#contentObserver?.observe(this, {
      childList: true,
      subtree: true
    });
    this.requestUpdate();
  }
  // Disconnect MutationObserver
  #disconnectContentMutationObserver() {
    if (this.#contentObserver) {
      this.#contentObserver.disconnect();
    }
  }
  render() {
    return html`
      <dialog
        class="${classMap({
      scrolling: this.#scrollbarVisible
    })}"
        @click=${event => !this.noCancelOutsideDialog && this.#wasBackdropClicked(event)}
        @close="${() => this.close(false)}"
      >
        <article class="header-content-container">
          <header class="header" part="header" id="dialogTitle">
            <slot name="header" @slotchange="${this.#toggleHeader}"></slot>
          </header>
          <div class="content" part="content" id="dialogDesc">
            <slot @submit="${this.#onSubmit}"></slot>
            <slot name="content"></slot>
          </div>
        </article>
        <footer class="footer" part="footer">
          <slot name="footer" @click="${this.#footerActionHandler}" @slotchange="${this.#toggleFooter}"></slot>
        </footer>
      </dialog>
    `;
  }
}
_a = ZuiDialogElement;
__decorate([query('dialog')], ZuiDialogElement.prototype, "_dialogElement", void 0);
__decorate([queryAssignedNodes({
  slot: 'header'
})], ZuiDialogElement.prototype, "_headerSlottedNodes", void 0);
__decorate([queryAssignedNodes({
  slot: 'footer'
})], ZuiDialogElement.prototype, "_footerSlottedNodes", void 0);
__decorate([property({
  type: Boolean,
  reflect: true
})], ZuiDialogElement.prototype, "opened", null);
__decorate([property({
  type: Boolean,
  attribute: 'no-cancel-outside-dialog'
})], ZuiDialogElement.prototype, "noCancelOutsideDialog", void 0);
window.customElements.define('zui-dialog', ZuiDialogElement);

export { SUPPORTS_HTML_DIALOG, ZuiDialogElement };

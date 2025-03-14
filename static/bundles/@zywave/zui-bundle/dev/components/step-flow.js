import { c as css, p as property, Z as ZuiBaseElement, h as html, f as queryAssignedElements } from '../internals/_a9b1a7d3.js';
import '../internals/_812fa620.js';

const style$4 = css`:host{display:block;background-color:var(--zui-gray-50)}:host .wrapper{width:100%;margin:0 auto;padding:15px;box-sizing:border-box}@media(min-width: 60em){:host .wrapper{padding:30px}}@media(min-width: 64em){:host .wrapper{padding:60px}}:host .title-wrap{position:relative;display:flex;min-height:44px;justify-content:center;align-items:center;margin-bottom:15px}:host .title-wrap .title{align-self:center;font-size:1rem;font-weight:300;color:var(--zui-gray-800);transition:width 100ms ease-in-out}:host .title-wrap .close{--zui-button-color: transparent;--zui-button-hover-color: var(--zui-gray-50);--zui-button-text-color: var(--zui-gray-800);position:absolute;right:-6px;z-index:1}:host .title-wrap .close ::slotted(button){display:flex;width:44px;height:44px;justify-content:center;align-items:center;padding:0;background-color:rgba(0,0,0,0);border:0;cursor:pointer;color:var(--zui-gray-800);transition:color 250ms ease-in-out}:host .title-wrap .close ::slotted(button:hover){color:var(--zui-gray-700)}:host .title-wrap .close ::slotted(button:focus){outline:0}@media(min-width: 60em){:host .title-wrap{margin-bottom:30px}}:host .indicator-card{min-height:250px}:host([orientation=vertical]) .title-wrap{justify-content:flex-start;margin-bottom:10px}:host([orientation=vertical]) .title-wrap .title{position:relative;display:flex;width:100%;margin-bottom:0}:host([orientation=vertical]) .title-wrap .title::before{display:block;content:"";width:calc(24px + 0.9375rem);box-sizing:border-box}@media(min-width: 60em){:host([orientation=vertical]) .title-wrap .title::before{min-width:200px}}:host([orientation=vertical]) .indicator-card{display:flex}`;

var __decorate$3 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @element zui-step-flow
 *
 * @deprecated
 */
class ZuiStepFlow extends ZuiBaseElement {
  constructor() {
    super();
    this.step = 0;
    this.orientation = 'horizontal';
    this.stepFlowIndicator = undefined;
    this.stepFlowContent = undefined;
    this.addEventListener('nextstep', () => {
      this._setStep(this.step + 1);
    });
    this.addEventListener('previousstep', () => {
      this._setStep(this.step - 1);
    });
    this.addEventListener('setstep', this._setStepEvent);
  }
  firstUpdated() {
    this.stepFlowIndicator = this.querySelector('zui-step-flow-indicator');
  }
  static get styles() {
    return [super.styles, style$4];
  }
  render() {
    return html`
      <div class="wrapper">
        <div class="title-wrap">
          <div class="title"><slot name="title"></slot></div> <div class="close"><slot name="close"></slot></div>
        </div>
        <div class="indicator-card"><slot></slot></div>
      </div>
    `;
  }
  updated(changedProps) {
    super.update(changedProps);
    const currentStepIndex = this.step;
    const stepFlowContentItems = Array.from(this.getElementsByTagName('zui-step-flow-content-item'));
    const stepFlowContentItemsLength = stepFlowContentItems.length;
    const hasIntro = stepFlowContentItems.some(contentItem => contentItem.hasAttribute('intro'));
    const hasEnd = stepFlowContentItems.some(contentItem => contentItem.hasAttribute('end'));
    if (hasIntro && currentStepIndex === 0 || hasEnd && currentStepIndex === stepFlowContentItemsLength - 1) {
      this._setIndicatorHidden(true);
    } else {
      this._setIndicatorHidden(false);
    }
    if (this._hasValidStepNumber(currentStepIndex)) {
      this._setIndicatorStep(hasIntro ? currentStepIndex - 1 : currentStepIndex);
      this._setContentStep(currentStepIndex);
      this._setStep(currentStepIndex);
    }
    if (changedProps.has('orientation')) {
      const indicator = this.querySelector('zui-step-flow-indicator');
      if (indicator) {
        if (this.orientation && this.orientation === 'vertical') {
          indicator.setAttribute('orientation', 'vertical');
        } else {
          indicator.removeAttribute('orientation');
        }
      }
    }
  }
  _hasValidStepNumber(step) {
    const stepFlowContentItems = Array.from(this.getElementsByTagName('zui-step-flow-content-item'));
    const stepFlowContentItemsLength = stepFlowContentItems.length;
    return step >= 0 && step < stepFlowContentItemsLength;
  }
  _setStepEvent(event) {
    let requestedStep = event.detail;
    //If intro page exists compensate off by one step error
    const stepFlowContentItems = Array.from(this.getElementsByTagName('zui-step-flow-content-item'));
    const hasIntro = stepFlowContentItems.some(contentItem => contentItem.hasAttribute('intro'));
    if (hasIntro) {
      requestedStep += 1;
    }
    if (requestedStep !== this.step) {
      this.step = requestedStep;
      this._setStep(requestedStep);
    }
  }
  _setStep(step) {
    if (this._hasValidStepNumber(step)) {
      this.step = step;
    }
  }
  _setIndicatorStep(step) {
    if (this.stepFlowIndicator) {
      this.stepFlowIndicator.step = step;
    } else {
      this.stepFlowIndicator = this._getElement('zui-step-flow-indicator');
      this.stepFlowIndicator.step = step;
    }
  }
  _setContentStep(step) {
    if (this.stepFlowContent) {
      this.stepFlowContent.step = step;
    } else {
      this.stepFlowContent = this._getElement('zui-step-flow-content');
      this.stepFlowContent.step = step;
    }
  }
  _setIndicatorHidden(shouldHide) {
    if (!this.stepFlowIndicator) {
      this.stepFlowIndicator = this._getElement('zui-step-flow-indicator');
    }
    if (this.stepFlowIndicator.hide !== shouldHide) {
      this.stepFlowIndicator.hide = shouldHide;
    }
  }
  _getElement(elementName) {
    const elements = this.getElementsByTagName(elementName);
    if (elements && elements.length > 0) {
      return elements[0];
    }
    return {};
  }
}
__decorate$3([property({
  type: Number,
  reflect: true
})], ZuiStepFlow.prototype, "step", void 0);
__decorate$3([property({
  type: String
})], ZuiStepFlow.prototype, "orientation", void 0);
window.customElements.define('zui-step-flow', ZuiStepFlow);

const style$3 = css`:host{position:relative;display:flex;flex-direction:row;flex-grow:1;justify-content:space-between;margin-bottom:15px;font-size:0;color:rgba(0,0,0,0);animation:indicator 250ms ease-in-out forwards;transition:width 100ms ease-in-out,font-size 100ms ease-in-out,color 50ms ease-in-out,margin 100ms ease-in-out}@media(min-width: 45em){:host{margin-bottom:30px}}@media(min-width: 60em){:host{justify-content:space-around;box-shadow:none;font-size:inherit;color:inherit}}:host .sub-text{display:block;font-size:0;font-style:italic;color:var(--zui-gray-300)}@media(min-width: 60em){:host .sub-text{font-size:.75rem}}:host ::slotted(zui-step-flow-indicator-item:first-of-type)::before{content:none}:host ::slotted(zui-step-flow-indicator-item:last-of-type)::after{content:none}:host(.hide){display:none}:host([orientation=vertical]){width:39px;flex-direction:column;flex-grow:0;justify-content:flex-start;margin-top:30px;margin-bottom:0}@media(min-width: 60em){:host([orientation=vertical]){width:200px}}`;

var __decorate$2 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class ZuiStepFlowIndicator extends ZuiBaseElement {
  constructor() {
    super(...arguments);
    this.step = 0;
    this.hide = false;
    this.orientation = 'horizontal';
    this.#indicatorItems = undefined;
  }
  #indicatorItems;
  firstUpdated() {
    this._setupChildren();
  }
  static get styles() {
    return [super.styles, style$3];
  }
  render() {
    if (this.hide) {
      this.classList.add('hide');
    } else {
      this.classList.remove('hide');
    }
    return html` <slot id="indicator-items"></slot> `;
  }
  updated(changedProps) {
    super.update(changedProps);
    const indicatorItems = this._getIndicatorItems();
    //Add/remove active on step change
    for (let i = 0; i < indicatorItems.length; i++) {
      const indicatorItem = indicatorItems[i];
      if (i === this.step) {
        indicatorItem.setAttribute('active', '');
      } else {
        indicatorItem.removeAttribute('active');
      }
    }
    if (changedProps.has('orientation')) {
      for (let i = 0; i < indicatorItems.length; i++) {
        const indicatorItem = indicatorItems[i];
        if (this.orientation && this.orientation === 'vertical') {
          indicatorItem.setAttribute('orientation', 'vertical');
        } else {
          indicatorItem.removeAttribute('orientation');
        }
      }
    }
  }
  _setupChildren() {
    const indicatorItems = this._getIndicatorItems();
    for (let i = 0; i < indicatorItems.length; i++) {
      const indicatorItem = indicatorItems[i];
      indicatorItem.index = i;
      indicatorItem.addEventListener('click', this._onItemClick.bind(this));
    }
  }
  _onItemClick(event) {
    const item = event.target;
    this.dispatchEvent(new CustomEvent('setstep', {
      bubbles: true,
      composed: true,
      detail: item.index
    }));
  }
  _getIndicatorItems() {
    const indicatorItemElements = this.querySelectorAll('zui-step-flow-indicator-item');
    if (indicatorItemElements) {
      this.#indicatorItems = indicatorItemElements;
    } else {
      this.#indicatorItems = [];
    }
    return this.#indicatorItems;
  }
}
__decorate$2([property({
  type: Number
})], ZuiStepFlowIndicator.prototype, "step", void 0);
__decorate$2([property({
  type: Boolean
})], ZuiStepFlowIndicator.prototype, "hide", void 0);
__decorate$2([property({
  type: String
})], ZuiStepFlowIndicator.prototype, "orientation", void 0);
window.customElements.define('zui-step-flow-indicator', ZuiStepFlowIndicator);

const style$2 = css`:host{position:relative;display:flex;flex:1 1 0;padding-bottom:0;cursor:not-allowed;pointer-events:none}:host::before,:host::after{position:absolute;top:7.5px;right:50%;display:block;content:"";width:50%;height:1px;background-color:var(--zui-gray-200)}@media(min-width: 60em){:host::before,:host::after{top:10px}}@media(min-width: 64em){:host::before,:host::after{top:12px}}:host::after{right:unset;right:auto;left:50%}:host .step{display:flex;flex-direction:column;flex:1 0 0;justify-content:flex-start;align-items:center;text-align:center}:host .indicator{display:flex;width:15px;height:15px;z-index:1;justify-content:center;align-items:center;background-color:#f4f4f4;border:2px solid var(--zui-gray-300);border-radius:100%;transition:border-top-color .15s linear,border-right-color .15s linear .1s,border-bottom-color .15s linear .2s,border-left-color .15s linear .3s}@media(min-width: 60em){:host .indicator{width:20px;height:20px;margin-bottom:10px}}:host .indicator .icon{display:none}:host .indicator .icon zui-icon{width:14px;height:14px;fill:#fff}@media(min-width: 64em){:host .indicator .icon zui-icon{width:16px;height:16px}}:host .label{width:0;min-width:100%}:host([complete]){cursor:pointer;pointer-events:auto}:host([complete]) .indicator{background-color:var(--zui-step-flow-indicator-item-complete-color, var(--zui-gray-800));border-color:var(--zui-step-flow-indicator-item-complete-color, var(--zui-gray-800))}:host([complete]) .indicator .icon{display:flex;justify-content:center;align-items:center}:host([active]){font-weight:600}:host([active]) .indicator{border-color:var(--zui-step-flow-indicator-item-active-color, var(--zui-gray-800))}:host([disabled]){cursor:not-allowed;color:var(--zui-gray-300);pointer-events:none}:host([disabled]) .indicator{border-color:var(--zui-gray-100)}:host([orientation=vertical]){display:block;flex:0 1 auto;padding-bottom:30px}:host([orientation=vertical])::before,:host([orientation=vertical])::after{top:0%;left:9px;width:2px;height:calc(50% - 8px)}@media(min-width: 60em){:host([orientation=vertical])::before,:host([orientation=vertical])::after{left:11.5px;height:calc(50% - 3px)}}:host([orientation=vertical])::after{top:calc(50% - 8px);height:calc(50% + 8px)}@media(min-width: 60em){:host([orientation=vertical])::after{top:calc(50% - 3px);height:calc(50% + 3px)}}:host([orientation=vertical]) .step{flex-direction:row;align-items:flex-start;text-align:left}:host([orientation=vertical]) .indicator{flex-shrink:0;margin-right:10px;margin-bottom:0}:host([orientation=vertical]) .label{width:auto;min-width:0;margin-right:20px;line-height:1.5rem}`;

var __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class ZuiStepFlowIndicatorItem extends ZuiBaseElement {
  constructor() {
    super(...arguments);
    this.active = false;
    this.complete = false;
    this.orientation = 'horizontal';
    this.index = undefined;
  }
  static get styles() {
    return [super.styles, style$2];
  }
  render() {
    return html`
      <div class="step">
        <div class="indicator">
          <div class="icon"> <zui-icon icon="zui-check" class="small"></zui-icon> </div>
        </div>
        <div class="label"><slot></slot></div>
      </div>
    `;
  }
}
__decorate$1([property({
  type: Boolean
})], ZuiStepFlowIndicatorItem.prototype, "active", void 0);
__decorate$1([property({
  type: Boolean
})], ZuiStepFlowIndicatorItem.prototype, "complete", void 0);
__decorate$1([property({
  type: String
})], ZuiStepFlowIndicatorItem.prototype, "orientation", void 0);
window.customElements.define('zui-step-flow-indicator-item', ZuiStepFlowIndicatorItem);

const style$1 = css`:host{display:flex;flex-direction:column;flex-grow:1;justify-content:space-between;background-color:#fff;box-shadow:0 1px 1px 0 #999;padding:1.25rem;transition:200ms padding ease-in-out;box-sizing:border-box}@media(min-width: 80em){:host{padding:1.875rem}}::slotted(*:not(.is-visible):not([slot=footer])){display:none}`;

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class ZuiStepFlowContent extends ZuiBaseElement {
  constructor() {
    super(...arguments);
    this.step = 0;
  }
  static get styles() {
    return [super.styles, style$1];
  }
  updated() {
    this._slottedContentItems.find(item => {
      if (item.classList.contains('is-visible')) {
        item.classList.remove('is-visible');
      }
    });
    this._slottedContentItems[this.step].classList.add('is-visible');
  }
  render() {
    return html`
      <slot></slot>
      <slot name="footer"></slot>
    `;
  }
}
__decorate([property({
  type: Number
})], ZuiStepFlowContent.prototype, "step", void 0);
__decorate([queryAssignedElements({
  slot: ''
})], ZuiStepFlowContent.prototype, "_slottedContentItems", void 0);
window.customElements.define('zui-step-flow-content', ZuiStepFlowContent);

const style = css`:host{display:flex;flex-direction:column;flex-grow:1}`;

class ZuiStepFlowContentItem extends ZuiBaseElement {
  static get styles() {
    return [super.styles, style];
  }
  render() {
    return html` <div><slot></slot></div> `;
  }
}
window.customElements.define('zui-step-flow-content-item', ZuiStepFlowContentItem);

class ZuiStepFlowFooter extends ZuiBaseElement {
  static get styles() {
    return [super.styles, style];
  }
  render() {
    return html`
      <slot id="previous-button" name="previous"></slot><slot id="next-button" name="next"></slot><slot></slot>
    `;
  }
}
window.customElements.define('zui-step-flow-footer', ZuiStepFlowFooter);

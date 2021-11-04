export class EventBus extends EventTarget {
    static #instance: EventBus;

    static get instance() {
        return this.#instance || (this.#instance = new this());
    }

    wasCopyToClipboardComponentAddedToDom = false;

    dispatchMarkupLoaded() {
        this.dispatchEvent(new CustomEvent('markup-loaded'));
    }
};

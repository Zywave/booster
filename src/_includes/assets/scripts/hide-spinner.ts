import { EventBus } from './event-bus.js';

function hideSpinner() {
    document.querySelector('zui-spinner').removeAttribute('active');
}

EventBus.instance.addEventListener(
    "markup-loaded",
    hideSpinner
);

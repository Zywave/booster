import { EventBus } from './event-bus.js';

function getUrlHash() {
    return window.location.href.split("#")[1];
}

function scrollToId() {
    // slow down 1 tick, otherwise scroll position relative to window top is off on some tabs
    setTimeout(() => {
        window.location.href.includes('#') && document.getElementById(getUrlHash()).scrollIntoView();
    }, 1);
}

EventBus.instance.addEventListener(
    "markup-loaded",
    scrollToId
);
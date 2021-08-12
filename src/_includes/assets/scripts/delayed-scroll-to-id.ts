import { EventBus } from './event-bus.js';

function getUrlHash() {
    return window.location.href.split("#")[1];
}

function scrollToId() {
    window.location.href.includes('#') && document.getElementById(getUrlHash()).scrollIntoView();
}

EventBus.instance.addEventListener(
    "markup-loaded",
    scrollToId
);
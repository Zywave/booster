// api-proxy must be loaded first
import "./components/api-proxy.js";
import "./components/analytics.js";
import "@zywave/zywave-shell";
import { ZywaveApiClient } from "@zywave/zywave-api-client";
import { UtilizationTracker } from "@zywave/zywave-base";

// eslint-disable-next-line no-prototype-builtins
const requiresPopoverPolyfill = !HTMLElement.prototype.hasOwnProperty("popover");

const currentUrl = import.meta.url.substring(0, import.meta.url.lastIndexOf("/"));
window.zywave = Object.assign({}, window.zywave, { ZywaveApiClient });
window.zywave.zapi = {
  ...window.zywave.zapi,
  analytics: UtilizationTracker,
  _popover: {
    requiresPolyfill: requiresPopoverPolyfill,
    loadPolyfill: () => import("@oddbird/popover-polyfill"),
    cssUri: `${currentUrl}/_polyfills/popover/popover.css`,
  },
};

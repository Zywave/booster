import { c as css, b as instance, p as property, Z as ZywaveBaseElement, e as configureHistory, h as html } from './_api-proxy-3fe71983.js';

const style = css`:host{position:absolute;display:none;width:0;height:0;border:0}`;

function loadScript(scriptSrc, opts) {
  return new Promise((resolve, reject) => {
    let scriptSrcUrl;
    if (typeof scriptSrc === "string") {
      scriptSrcUrl = new URL(scriptSrc);
    } else {
      scriptSrcUrl = scriptSrc;
    }
    if (opts?.preconfigureUrl) {
      scriptSrcUrl = opts.preconfigureUrl(scriptSrcUrl);
    }
    if (!document.querySelector(`script[src="${scriptSrcUrl}"]`)) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.defer = true;
      script.src = scriptSrcUrl.toString();
      if (opts?.preconfigureScriptElement) {
        opts.preconfigureScriptElement(script);
      }
      document.head.appendChild(script);
      script.addEventListener("load", () => resolve());
      script.addEventListener("error", () => reject());
    } else {
      resolve();
    }
  });
}

function getNetworkInfo() {
  if (!window.navigator.connection) {
    return undefined;
  }
  const networkConnectionType = window.navigator.connection.type === "unknown" ? undefined : window.navigator.connection.type;
  return {
    networkReducedData: window.navigator.connection.saveData ?? false,
    networkConnectionType,
    networkRtt: window.navigator.connection.rtt,
    networkDownlink: window.navigator.connection.downlink,
    networkDownlinkMax: window.navigator.connection.downlinkMax
  };
}

function getUserPreferences() {
  const prefersDarkMode = window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  return {
    prefersDarkMode
  };
}

function addComposedEventListener(element, type, listener) {
  if (!Event.prototype.composedPath) {
    return;
  }
  element.addEventListener(type, e => {
    const targets = e.composedPath();
    if (!targets || !targets.length) {
      return;
    }
    if (targets[0] === e.target) {
      return;
    }
    if (!(targets[0] instanceof Element)) {
      return;
    }
    listener(e, targets[0]);
  });
}
function getResolution() {
  return `${window.screen.width}x${window.screen.height}`;
}
async function configureHeap(appId, identity, userProperties, eventProperties, cdnHost) {
  eventProperties ??= {};
  const scriptSrc = new URL("cdn.heapanalytics.com/js/", cdnHost);
  function parseProperties(_, target) {
    return {
      "Target ID": target.id,
      "Target Class": target.className,
      "Target Tag": target.tagName,
      "Target Text": target.textContent,
      "Target Name": target.getAttribute("name"),
      "Target Type": target.getAttribute("type"),
      "Target Href": target.getAttribute("href"),
      "Target Action": target.getAttribute("action")
    };
  }
  function trackPage() {
    window.heap.track("View");
  }
  try {
    await loadScript(scriptSrc, {
      preconfigureUrl: url => {
        const heap = window.heap || [];
        window.heap = heap;
        heap.appid = appId;
        heap.config = {};
        if (identity) {
          heap.push(["identify", identity]);
        }
        const isImpersonating = eventProperties?.isImpersonating ?? false;
        if (userProperties) {
          if ("userPrincipalId" in userProperties) {
            userProperties["User Principal ID"] = userProperties.userPrincipalId;
            delete userProperties.userPrincipalId;
          }
          if (!isImpersonating) {
            const userPreferences = getUserPreferences();
            // hack to get TS happy
            userProperties = {
              ...userPreferences,
              ...userProperties
            };
          }
          heap.push(["addUserProperties", userProperties]);
        }
        const networkInfo = getNetworkInfo();
        const finalEventProps = {
          screenWidth: window.screen.width,
          screenHeight: window.screen.height,
          screenResolution: getResolution(),
          ...networkInfo,
          ...eventProperties
        };
        if ("userPrincipalId" in finalEventProps) {
          finalEventProps["User Principal ID"] = finalEventProps.userPrincipalId;
          delete finalEventProps.userPrincipalId;
        }
        if ("isImpersonating" in finalEventProps) {
          finalEventProps["User Profile Impersonated"] = (finalEventProps.isImpersonating ?? false).toString();
          delete finalEventProps.isImpersonating;
        }
        heap.clearEventProperties?.();
        heap.push(["addEventProperties", finalEventProps]);
        heap.track = (name, ...args) => {
          args.unshift(name, "track");
          heap.push(args);
        };
        url = new URL(`heap-${appId}.js`, url);
        return url;
      }
    });
    if (window.heap) {
      addComposedEventListener(window.document, "click", (e, target) => {
        window.heap.track(`Composed click`, parseProperties(e, target));
      });
      addComposedEventListener(window.document, "submit", (e, target) => {
        window.heap.track(`Composed submit`, parseProperties(e, target));
      });
      addComposedEventListener(window.document, "change", (e, target) => {
        window.heap.track(`Composed change`, parseProperties(e, target));
      });
      window.addEventListener("zapiReplaceState", trackPage);
      window.addEventListener("zapiPushState", trackPage);
    }
    return {
      track(eventName, payload) {
        window.heap?.track?.(eventName, payload);
      },
      trackerId: "Heap"
    };
  } catch {
    return undefined;
  }
}
async function configureAppcues(accountId, identity, userProperties, eventProperties, cdnHost) {
  function trackPage() {
    window.Appcues.page();
  }
  const scriptSrc = new URL("fast.appcues.com/", cdnHost);
  try {
    await loadScript(scriptSrc, {
      preconfigureUrl: url => {
        // AppCues has some AMD loader support; we're not using requirejs but standard script loading
        // https://docs.appcues.com/article/303-using-appcues-with-requirejs
        window.AppcuesSettings = Object.assign({}, window.AppcuesSettings, {
          skipAMD: true
        });
        return new URL(`${accountId}.js`, url);
      }
    });
    if (window.Appcues) {
      import('./_appcues-css-6611f366.js').then(exports => {
        if (exports.style.styleSheet) {
          document.adoptedStyleSheets = [...document.adoptedStyleSheets, exports.style.styleSheet];
        }
      });
      // do not call identify when a profile is being impersonated
      // Appcues identify appears to be a one-and-done call that does not update fields
      if (identity && !eventProperties?.isImpersonating) {
        let props;
        if (userProperties) {
          props = {
            ...userProperties,
            first_name: userProperties.givenName,
            last_name: userProperties.familyName
          };
          delete props.givenName;
          delete props.familyName;
        }
        window.Appcues.identify(identity, props);
      }
      window.addEventListener("zapiReplaceState", trackPage);
      window.addEventListener("zapiPushState", trackPage);
    }
    return {
      track(_eventName, _payload) {},
      trackerId: "Appcues"
    };
  } catch {
    return undefined;
  }
}

const EVENT_NAMES = {
  zui: "ZUI-Utilization",
  zapi: "ZAPI-Utilization"
};
class SdkTracker {
  #apiUrl;
  #apiClient;
  #trackTimeoutId;
  constructor(apiUrl, apiClient) {
    this.#apiUrl = apiUrl;
    this.#apiClient = apiClient;
    this.#configureSdkTracker();
  }
  #configureSdkTracker() {
    // we only want to track utilization on supported connection types (e.g. not using mobile data)
    if (window.navigator.connection?.saveData && window.navigator.connection?.effectiveType !== "4g") {
      return;
    }
    // if the document is already read, let's track
    if (document.readyState === "complete") {
      this.#trackUtilization();
    } else {
      document.addEventListener("readystatechange", () => {
        if (document.readyState === "complete") {
          this.#trackUtilization();
        }
      });
    }
    window.addEventListener("zapiPushState", () => this.#trackUtilization());
    window.addEventListener("zapiReplaceState", () => this.#trackUtilization());
  }
  #trackUtilization() {
    // implement a debounce to avoid duplicate tracks
    window.clearTimeout(this.#trackTimeoutId);
    this.#trackTimeoutId = window.setTimeout(() => {
      const zuiReport = window?.zywave?.zui?.analytics?.getReport("instance") ?? null;
      const zapiReport = instance?.getReport("instance") ?? null;
      return Promise.allSettled([this.#sendReport(EVENT_NAMES.zapi, zapiReport), this.#sendReport(EVENT_NAMES.zui, zuiReport)]);
    }, 300);
  }
  async #sendReport(eventName, report) {
    if (!report) {
      return;
    }
    const url = new URL("shell/v2.0/analyticsinfo/track", this.#apiUrl);
    const body = {
      eventName,
      payload: {},
      origin: window.location.origin,
      path: window.location.pathname,
      hash: window.location.hash
    };
    for (const k of report.keys()) {
      body.payload[k] = report.get(k);
    }
    await this.#apiClient.fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
  }
}

class Tracker {
  static get instance() {
    return this.#instance ??= new this();
  }
  static #instance;
  #trackers = [];
  constructor() {}
  track(eventName, payload) {
    for (const tracker of this.#trackers) {
      tracker.then(t => t?.track(eventName, payload));
    }
  }
  registerTracker(tracker) {
    if (tracker) {
      this.#trackers.push(Promise.resolve(tracker));
    }
  }
}
const AnalyticsTracker = Tracker.instance;

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let DEFAULT_CDN_HOST = new URL(import.meta.url).origin;
if (DEFAULT_CDN_HOST.includes("unpkg.com")) {
  DEFAULT_CDN_HOST = "https://cdn.zywave.com";
  // eslint-disable-next-line no-console
  console.warn("Loading the Zywave API Toolkit from unpkg.com is deprecated. Please use cdn.zywave.com instead. Your application is likely to break.");
}
const TRACK_WEB_SDK_UTILIZATION_FLAG = "track-web-sdk-utilization";
function getLanguages() {
  return navigator.languages.map(l => `[${l.toLowerCase()}]`).join(";");
}
/**
 * `ZywaveAnalyticsElement` defines a configurable way to communicate with our centralized analytics tracking. Note: it's highly preferred to use `ZywaveShellElement` to do this for you; this should only be used if you cannot use `ZywaveShellElement`.
 * @element zywave-analytics
 *
 * @event load - Fired when analytics scripts have finished loading
 *
 * @attr {string | null} [api-base-url=null] - Provide the base URL to the Zywave APIs e.g., https://api.zywave.com/ (Note: the trailing slash is critical, especially if the base URL includes a path.)
 * @attr {string | null} [bearer-token=null] - (optional) Provide a Zywave bearer token for authorization
 * @attr {string | null} [profile-token=null] - (optional) Provide the explicit profile token that your application understands this user to be accessing
 *
 * @prop {string | null} [apiBaseUrl=null] - Provide the base URL to the Zywave APIs e.g., https://api.zywave.com/ (Note: the trailing slash is critical, especially if the base URL includes a path.)
 * @prop {string | null} [bearerToken=null] - (optional) Provide a Zywave bearer token for authorization
 * @prop {string | null} [profileToken=null] - (optional) Provide the explicit profile token that your application understands this user to be accessing
 */
class ZywaveAnalyticsElement extends ZywaveBaseElement {
  constructor() {
    super(...arguments);
    /**
     * The app id to use when communicating with Heap.
     * If not specified, the `/shell/v2.0/analyticsinfo` API will be used.
     */
    this.heapAppId = null;
    /**
     * The account id to use when communicating with Appcues.
     * If not specified, the `/shell/v2.0/analyticsinfo` API will be used.
     */
    this.appcuesAccountId = null;
    /**
     * A uniquely identifying string for the authenticated user. For most apps, this should be in the form `${profileTypeCode}~${profileId}`.
     * If not specified, the `/shell/v2.0/analyticsinfo` API will be used.
     */
    this.identity = null;
    /**
     * An optional property to directly add `userProperties` to analytics utilities.
     * `givenName`, `familyName`, and `email` are common properties to be used across all platforms; you can provide more properties to this object where applicable.
     */
    this.userProperties = null;
    /**
     * If specified, will prevent scripts from loading and analytics being configured until after the document has been parsed
     */
    this.defer = false;
    /**
     * If provided, will set the CDN host for all external script loading.
     * @default new URL(import.meta.url).origin
     */
    this.cdnHost = DEFAULT_CDN_HOST;
    /**
     * UNSTABLE: DO NOT USE
     * @ignore
     */
    this.contextPath = null;
    this.#analyticsDataLoaded = false;
  }
  static get styles() {
    return [style];
  }
  #featureFlagData;
  #activityTrackingIntervalId;
  get #enableTrackUtilization() {
    return this.#featureFlagData?.[TRACK_WEB_SDK_UTILIZATION_FLAG] ?? false;
  }
  get #isConfigBased() {
    return !!(this.heapAppId || this.appcuesAccountId || this.identity);
  }
  // this property is not a JS private field to enable testing
  get _userProperties() {
    const analyticsUserProperties = this.#analyticsData?.userProperties;
    const userProperties = typeof this.userProperties === "object" ? this.userProperties : undefined;
    const result = {
      languages: getLanguages(),
      ...analyticsUserProperties,
      ...userProperties
    };
    // API is source of truth
    if (this.#userData) {
      result.email = this.#userData.email || result.email;
      result.givenName = this.#userData.given_name || result.givenName;
      result.familyName = this.#userData.family_name || result.familyName;
    }
    return result;
  }
  #analyticsData;
  #userData;
  #analyticsDataLoaded;
  // @ts-ignore - Keep this for future use cases
  #sdkTracker;
  connectedCallback() {
    super.connectedCallback();
    configureHistory();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.#activityTrackingIntervalId && clearInterval(this.#activityTrackingIntervalId);
    this.#activityTrackingIntervalId = undefined;
  }
  async firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    if (!this.#isConfigBased) {
      await this._apiClientReady;
    }
    await Promise.allSettled([this.#loadAnalyticsInfo(), this.#loadUserInfo(), this.#loadFeatureFlags()]);
    if (this.#analyticsDataLoaded) {
      if (this.defer && document.readyState !== "complete") {
        document.addEventListener("readystatechange", event => {
          if (event.target.readyState === "complete") {
            this.#configureAnalytics();
          }
        });
      } else {
        this.#configureAnalytics();
      }
      if (this.#enableTrackUtilization && this.apiUrl && this._apiClient) {
        this.#sdkTracker = new SdkTracker(this.apiUrl, this._apiClient);
      }
    }
  }
  render() {
    return html``;
  }
  async #loadFeatureFlags() {
    const flagInfo = await this._loadFeatureFlags();
    this.#featureFlagData = flagInfo?.flagValues;
    this.requestUpdate();
  }
  #configureAnalytics() {
    this.#configureActivityTracker();
    const {
      heapAppId,
      appcuesAccountId,
      identity,
      eventProperties
    } = this.#analyticsData ?? {};
    const cdnHost = this.cdnHost ?? "https://cdn.zywave.com";
    let heapPromise;
    let appcuesPromise;
    if (heapAppId) {
      heapPromise = configureHeap(heapAppId, identity, this._userProperties, eventProperties, cdnHost);
    }
    if (appcuesAccountId) {
      appcuesPromise = configureAppcues(appcuesAccountId, identity, this._userProperties, eventProperties, cdnHost);
    }
    AnalyticsTracker.registerTracker(heapPromise);
    AnalyticsTracker.registerTracker(appcuesPromise);
    Promise.allSettled([heapPromise, appcuesPromise]).then(() => {
      this.dispatchEvent(new CustomEvent("load"));
    });
  }
  /**
   * Method used to track custom events.
   * @param eventName Name of the event to track
   * @param payload Optional payload to pass to the event
   */
  track(eventName, payload) {
    AnalyticsTracker.track(eventName, payload);
  }
  async #loadAnalyticsInfo() {
    if (this.#isConfigBased) {
      this.#analyticsData = {
        heapAppId: this.heapAppId || "",
        appcuesAccountId: this.appcuesAccountId || "",
        identity: this.identity || "",
        contextPath: this.contextPath || ""
      };
      this.#analyticsDataLoaded = true;
    } else if (this._authorized && this._apiClient) {
      const url = new URL("shell/v2.0/analyticsinfo", this.apiUrl);
      url.searchParams.set("host", window.location.hostname);
      const resp = await this._apiClient.get(url);
      if (resp instanceof Response && resp.ok) {
        const data = await resp.json();
        this.#analyticsDataLoaded = true;
        this.#analyticsData = data;
        this.#analyticsData.contextPath ??= this.contextPath;
      }
    } else {
      this.#analyticsDataLoaded = true;
    }
  }
  async #loadUserInfo() {
    if (this._authorized && this._apiClient) {
      const url = new URL("userinfo", this.apiUrl);
      const resp = await this._apiClient.fetch(url);
      if (resp instanceof Response && resp.ok) {
        const data = await resp.json();
        this.#userData = data;
      }
    }
  }
  async #configureActivityTracker() {
    if (!this.#analyticsData?.contextPath) {
      return;
    }
    const {
      ActivityTracker
    } = await import('./_activity-tracker-9600ae9a.js');
    await ActivityTracker.connect({
      isImpersonated: this.#analyticsData.isImpersonating ?? false,
      cookieDomain: this.#analyticsData.cookieDomain
    });
    this.#activityTrackingIntervalId = window.setInterval(async () => {
      await this.#recordActivities(ActivityTracker);
    }, /* 5 seconds */this.#analyticsData?.activityTrackingInterval ?? 2_000);
    window.addEventListener("visibilitychange", async () => {
      if (document.visibilityState === "hidden") {
        await this.#recordActivities(ActivityTracker);
      }
    });
  }
  async #recordActivities(tracker) {
    const activity = await tracker.retrieveActivity();
    if (!(this.#analyticsData?.contextPath && activity.length)) {
      return;
    }
    // /a/e = /analytics/event, to cicumvent naive ad blockers
    const url = new URL(`v3/shell/v1.0${this.#analyticsData.contextPath}/a/e`, this.apiUrl);
    this._apiClient?.fetch(url, {
      method: "POST",
      body: JSON.stringify(activity),
      headers: {
        "Content-Type": "application/json"
      },
      keepalive: true
    });
  }
}
__decorate([property({
  type: String,
  attribute: "heap-app-id"
})], ZywaveAnalyticsElement.prototype, "heapAppId", void 0);
__decorate([property({
  type: String,
  attribute: "appcues-account-id"
})], ZywaveAnalyticsElement.prototype, "appcuesAccountId", void 0);
__decorate([property({
  type: String
})], ZywaveAnalyticsElement.prototype, "identity", void 0);
__decorate([property({
  type: Object,
  attribute: "user-properties"
})], ZywaveAnalyticsElement.prototype, "userProperties", void 0);
__decorate([property({
  type: Boolean
})], ZywaveAnalyticsElement.prototype, "defer", void 0);
__decorate([property({
  type: String,
  attribute: "cdn-host"
})], ZywaveAnalyticsElement.prototype, "cdnHost", void 0);
__decorate([property({
  type: String,
  attribute: "context-path"
})], ZywaveAnalyticsElement.prototype, "contextPath", void 0);
window.customElements.define("zywave-analytics", ZywaveAnalyticsElement);

export { AnalyticsTracker as A };

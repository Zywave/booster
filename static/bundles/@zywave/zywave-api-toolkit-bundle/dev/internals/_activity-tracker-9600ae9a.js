const BROWSER_FINGERPRINT_COOKIE_NAME = "zapi:bf";
async function sha256(source) {
  const sourceBytes = new TextEncoder().encode(source);
  const digest = await crypto.subtle.digest("SHA-256", sourceBytes);
  const resultBytes = [...new Uint8Array(digest)];
  return resultBytes.map(x => x.toString(16).padStart(2, "0")).join("");
}
function getRandomUUID() {
  if (crypto?.randomUUID) {
    return crypto.randomUUID();
  }
  const randomValues = new Uint32Array(4);
  crypto.getRandomValues(randomValues);
  return `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, function (c) {
    const r = (randomValues[0] + Math.random() * 16) % 16 | 0;
    randomValues[0] = Math.floor(randomValues[0] / 16);
    return (c === "x" ? r : r & 0x3 | 0x8).toString(16);
  });
}
function getCookieSliding(name, days, domain) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  const result = parts.length === 2 ? parts.pop()?.split(";").shift() : null;
  if (result) {
    setCookie(name, result, days, domain);
  }
  return result;
}
function setCookie(name, value, days, domain) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  domain = !domain || domain.startsWith(".") ? domain : `.${domain}`;
  let cookieValue = `${name}=${value}; expires=${date.toUTCString()};path=/;Secure;SameSite=Strict`;
  if (domain && window.location.hostname.endsWith(domain)) {
    cookieValue += `; domain=${domain}`;
  }
  document.cookie = cookieValue;
}
function getLocalStorageSliding(key, days) {
  const raw = localStorage.getItem(key);
  if (raw) {
    const data = JSON.parse(raw);
    if (data.expires < Date.now()) {
      localStorage.removeItem(key);
      return null;
    } else {
      setLocalStorage(key, data.value, days);
      return data.value;
    }
  }
  return null;
}
function setLocalStorage(key, value, days) {
  const expires = Date.now() + days * 24 * 60 * 60 * 1000;
  const data = JSON.stringify({
    value,
    expires
  });
  localStorage.setItem(key, data);
}
function matchMedia(query) {
  return window.matchMedia(`(${query})`).matches;
}
class Fingerprinter {
  static get instance() {
    return this.#instance ??= new this();
  }
  static #instance;
  #canvasFingerprint;
  #browserFingerprint;
  // increment this if the canvas fingerprinting method changes
  #canvasFingerprintVersion = 1;
  constructor() {}
  async getAttributes(opts) {
    this.#configureBrowserFingerprint(opts.storageTtlDays, opts.cookieDomain);
    await this.#configureCanvasFingerprint();
    return {
      canvas_: `v${this.#canvasFingerprintVersion}|${this.#canvasFingerprint}`,
      storage_: this.#browserFingerprint,
      screenWidth_: window.screen.width,
      screenHeight_: window.screen.height,
      timeZone_: Intl.DateTimeFormat().resolvedOptions().timeZone,
      prefersReducedMotion_: matchMedia("prefers-reduced-motion: reduce"),
      prefersColorScheme_: matchMedia("prefers-color-scheme: dark") ? "dark" : "light",
      gpc_: navigator.globalPrivacyControl ?? null,
      doNotTrack_: navigator.doNotTrack ?? null // webkit seems to yield undefined when the spec indicates null
    };
  }
  #configureBrowserFingerprint(ttlDays, cookieDomain) {
    if (this.#browserFingerprint) {
      return;
    }
    let fingerprint = getCookieSliding(BROWSER_FINGERPRINT_COOKIE_NAME, ttlDays, cookieDomain);
    if (!fingerprint) {
      fingerprint = getLocalStorageSliding(BROWSER_FINGERPRINT_COOKIE_NAME, ttlDays);
      if (fingerprint) {
        // restore cookie from localStorage
        setCookie(BROWSER_FINGERPRINT_COOKIE_NAME, fingerprint, ttlDays, cookieDomain);
      }
    }
    if (!fingerprint) {
      fingerprint = getRandomUUID();
      setLocalStorage(BROWSER_FINGERPRINT_COOKIE_NAME, fingerprint, ttlDays);
      setCookie(BROWSER_FINGERPRINT_COOKIE_NAME, fingerprint, ttlDays, cookieDomain);
    }
    this.#browserFingerprint = fingerprint;
  }
  async #configureCanvasFingerprint() {
    if (this.#canvasFingerprint) {
      return;
    }
    try {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        return;
      }
      const txt = "ZYWAVE";
      ctx.textBaseline = "top";
      ctx.textBaseline = "top";
      ctx.font = "14px 'Arial'";
      ctx.textBaseline = "alphabetic";
      ctx.fillStyle = "#f60";
      ctx.fillRect(125, 1, 62, 20);
      ctx.fillStyle = "#069";
      ctx.fillText(txt, 2, 15);
      ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
      ctx.fillText(txt, 4, 17);
      const dataUrl = canvas.toDataURL();
      const data = dataUrl.split(",")[1];
      this.#canvasFingerprint = await sha256(data);
    } catch (e) {
      // left empty on purpose
    }
  }
}
const fingerPrinter = Fingerprinter.instance;

const NAVIGATION_API_SUPPORTED = !!window.navigation;
class ActivityTracker {
  static get instance() {
    return this.#instance ??= new this();
  }
  static #instance;
  constructor() {
    this.#activity = [];
    this.#connected = false;
    this.isImpersonated = false;
  }
  #activity;
  #connected;
  #fingerprintAttributes;
  #boundNavigationHandler;
  async connect(init) {
    this.isImpersonated = init.isImpersonated;
    if (!this.#fingerprintAttributes) {
      this.#fingerprintAttributes = await fingerPrinter.getAttributes({
        cookieDomain: init.cookieDomain,
        storageTtlDays: 365
      });
    }
    if (!this.#connected) {
      // add initial navigation event
      this.#activity.push(this.#buildNavigationEvent());
      this.#configureNavigationWatchers();
    }
    this.#connected = true;
  }
  disconnect() {
    this.#activity = [];
    this.#connected = false;
    if (!this.#boundNavigationHandler) {
      return;
    }
    if (NAVIGATION_API_SUPPORTED) {
      window.navigation.removeEventListener("currententrychange", this.#boundNavigationHandler);
    } else {
      window.removeEventListener("zapiPushState", this.#boundNavigationHandler);
      window.removeEventListener("zapiReplaceState", this.#boundNavigationHandler);
    }
  }
  async retrieveActivity() {
    return new Promise(resolve => {
      const result = [...this.#activity];
      this.#activity = [];
      resolve(result);
    });
  }
  #configureNavigationWatchers() {
    if (NAVIGATION_API_SUPPORTED) {
      this.#boundNavigationHandler = this.#onNavigate.bind(this);
      window.navigation.addEventListener("currententrychange", this.#boundNavigationHandler);
    } else {
      window.addEventListener("zapiPushState", this.#onNavigate.bind(this));
      window.addEventListener("zapiReplaceState", this.#onNavigate.bind(this));
    }
  }
  #onNavigate() {
    this.#activity.push(this.#buildNavigationEvent());
  }
  #buildNavigationEvent() {
    return {
      type: "Navigation",
      location: window.location.href,
      eventDateTime: new Date(),
      isImpersonated: this.isImpersonated,
      // bf = browserFingerprint
      bf: this.#fingerprintAttributes?.storage_,
      // sw = screenWidth
      sw: this.#fingerprintAttributes?.screenWidth_,
      // sh = screenHeight
      sh: this.#fingerprintAttributes?.screenHeight_,
      // cf = canvasFingerprint
      cf: this.#fingerprintAttributes?.canvas_,
      // tz = timeZone
      tz: this.#fingerprintAttributes?.timeZone_,
      // dnt = doNotTrack
      dnt: this.#fingerprintAttributes?.doNotTrack_,
      // gpc = globalPrivacyControl
      gpc: this.#fingerprintAttributes?.gpc_,
      // prm = prefersReducedMotion
      prm: this.#fingerprintAttributes?.prefersReducedMotion_,
      // pcs = prefersColorScheme
      pcs: this.#fingerprintAttributes?.prefersColorScheme_
    };
  }
}
const activityTracker = ActivityTracker.instance;

export { activityTracker as ActivityTracker };

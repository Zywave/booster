export function loadScript(scriptSrc: string | URL, preconfigure?: (url: URL) => URL): Promise<void> {
  return new Promise((resolve, reject) => {
    let scriptSrcUrl: URL;
    if (typeof scriptSrc === "string") {
      scriptSrcUrl = new URL(scriptSrc);
    } else {
      scriptSrcUrl = scriptSrc;
    }
    if (preconfigure) {
      scriptSrcUrl = preconfigure(scriptSrcUrl);
    }

    if (!document.querySelector(`script[src="${scriptSrcUrl}"]`)) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.defer = true;
      script.src = scriptSrcUrl.toString();
      document.head.appendChild(script);
      script.addEventListener("load", () => resolve());
      script.addEventListener("error", () => reject());
    } else {
      resolve();
    }
  });
}

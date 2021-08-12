import { EventBus } from "../event-bus.js";
import { css as cssPrism } from "../prism/prism-css.js";
import "../prism/prism.js";
import "./clipboard-copy-icon.js";

const css = `
  :host,
    .demo {
      display: flex;
      flex-direction: column;
  }

  h3 clipboard-copy-icon {
    margin-left: 1rem;
    --message-text-color: var(--zui-gray-500);
  }

  .live-demo {
    background: white;
    padding: 10px;
    border: 1px solid var(--zui-gray-400);
    border-radius: 5px 5px 0 0;
    transition: padding 100ms ease-in-out;
  }

  @media screen and (min-width: 64em) {
    .live-demo {
      padding: 20px;
    }
  }

  @media screen and (min-width: 64em) {
    .live-demo {
      padding: 30px;
    }
  }

  @media screen and (min-width: 80em) {
    .live-demo {
      padding: 50px;
    }
  }

  .code-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    padding: 0.5rem;
    background: var(--docs-secondary-color);
  }

  clipboard-copy-icon {
    --button-background-color: transparent;
    --message-text-color: var(--zui-gray-200);
  }

  .demo:not(:first-of-type) {
    margin: 3rem 0 0 0;
  }

  pre[class*="language-"] {
    max-height: 29ex;
  }
`;

customElements.define(
  "docs-demos",
  class DocsDemos extends HTMLElement {
    demoUrl: string | null = null;
    demoList: string[] | null = null;
    codeOnly: boolean = false;
    demoSections: NodeListOf<Element> | null = null;
    componentName: string | null = null;

    async connectedCallback() {
      this.demoUrl = this.getAttribute("demo-url");
      const demoStr = await fetch(this.demoUrl).then((res) => res.text());

      this.componentName = this.getAttribute("component");
      const componentSection = new RegExp(
        '(?=<section component="' + this.componentName + '")'
      ); // should match current component page's component attr

      const demoElm = new DOMParser().parseFromString(demoStr, "text/html");
      this.demoSections = demoElm.documentElement.querySelectorAll(
        `[component="${this.componentName}"]`
      );

      this.demoList = demoStr
        .replace(/\n/g, "")
        .split(componentSection)
        .slice(1);

      this.codeOnly = this.hasAttribute("code-only");

      this.render();
      const codeBlocks = this.querySelectorAll("code");
      codeBlocks.forEach((item) => window.Prism.highlightElement(item));
      EventBus.instance.dispatchMarkupLoaded();
    }

    encodeHtml(str: string) {
      return str.replace(
        /[&<>'"]/g,
        (tag) =>
          ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "'": "&#39;",
            '"': "&quot;",
          }[tag])
      );
    }

    getUrlNoHash() {
      return window.location.href.includes("#")
        ? window.location.href.split("#")[0]
        : window.location.href;
    }

    async render() {
      const demoSectionsHtml = Array.from(this.demoSections).map(
        (demo, index) => {
          const demoHeading = demo.hasAttribute("heading")
            ? demo.getAttribute("heading")
            : `Demo ` + (index + 1);
          const demoCodeOnly = demo.hasAttribute("code-only");
          const demoCodeSnippet = demo.innerHTML.replace(/\n  /, "").replaceAll(/=\"\"/g, "");

          return `
            <div class="demo">
              <h3 id="demo-${index + 1}">${demoHeading}<clipboard-copy-icon icon="link" clipboard="${this.getUrlNoHash()}#demo-${index + 1}"></clipboard-copy-icon></h3>
              ${this.codeOnly || demoCodeOnly ? `` : `<div class="live-demo">${demo.innerHTML}</div>` }
              <div class="code-header">
                <clipboard-copy-icon position="left" clipboard="${this.encodeHtml(
                  demo.innerHTML
                )}"></clipboard-copy-icon>
              </div>
              <pre class="language-markup line-numbers zui skinny-scrollbar"><code>${demoCodeSnippet
                .replace(/[<>]/g, function (m) {
                  return { "<": "&lt;", ">": "&gt;" }[m];
                })
                .replaceAll(/\n\s\s/g, function (m) {
                  return m.replace("  ", "");
                })}</code></pre>
            </div>
          `;
        }
      );
      const templateStr = `
        <style>${cssPrism} ${css}</style>
        ${demoSectionsHtml.join("")}
      `;

      this.innerHTML = templateStr;
    }
  }
);

declare global {
  interface Window {
    Prism: {
      highlightElement(parameter: HTMLElement): void;
    };
  }
}

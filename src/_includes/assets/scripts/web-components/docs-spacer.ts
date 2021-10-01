const css = `
  .spacer {
    display: block;
    width: 100%;
    height: 1.875rem; /* 30 / 16 */
    transition: height 100ms ease-in-out;
  }

  .spacer.small {
    height: 0.9375rem; /* 15 / 16 */
  }

  @media (min-width: 60em) { /* 960 / 16 */
    .spacer {
      height: 3.75rem; /* 60 / 16 */ 
    }

    .spacer.small {
      height: 1.25rem; /* 20 / 16 */
    }
  }

  @media (min-width: 64em) { /* 1024 / 16 */
    .spacer {
      height: 5.625rem; /* 90 / 16 */
    }

    .spacer.small {
      height: 2.8125re,; /* 45 / 16 */
    }
  }
`;

const template = document.createElement("template");

customElements.define('docs-spacer',  class extends HTMLElement {
  static get observedAttributes() {
    return ['size'];
  }

  get size() {
    return this.getAttribute('size');
  }

  set size(val: DocsSpacerSize) {
    this.setAttribute('size', val);
  }

  get #spacer() {
    return this.shadowRoot?.querySelector('.spacer');
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const templateStr = `
      <style>${css}</style>
      <div class="spacer ${this.size ? this.size : ''}"></div>
    `;

    template.innerHTML = templateStr;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.#setSize(this.size);
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'size' && oldValue !== newValue) {
      this.#setSize(newValue);
    }
  }

  #setSize(size: string | null | undefined) {
    // remove className
    const spacerEl = this.#spacer;
    if (!spacerEl) {
      return;
    }
    spacerEl.className = "";
    spacerEl.classList.add("spacer");
    if (size) {
      spacerEl.classList.add(size);
    }
  }
});

type DocsSpacerSize = "small" | string | null | undefined;

export {};

const css = `
:host {
  display: grid;
  grid-template-columns: repeat(var(--docs-grid-columns, 1), 1fr);
  grid-gap: 1.25; /* 20 / 16 */
  width: 100%;
  margin: 0 auto;
  transition: grid-gap 100ms ease-in-out, grid-template-columns 100ms ease-in-out;
}

@media (min-width: 60em) { /* 960 / 16 */
  :host {
    grid-template-columns: repeat(var(--docs-grid-columns, 2), 1fr);
    grid-gap: 2.5rem; /* 40 / 16 */
  }
}
`;

customElements.define('docs-grid', class extends HTMLElement {

  static get observedAttributes() {
    return ['columns'];
  }

  get columns() {
    return this.getAttribute('columns');
  }

  set columns(val: DocsGridColumns) {
    this.setAttribute('columns', val);
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'columns' && oldValue !== newValue) {
      this.style.setProperty('--docs-grid-columns', newValue);
    }
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    const templateStr = `
      <style>${css}</style>
      <slot></slot>
    `;

    template.innerHTML = templateStr;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
});

type DocsGridColumns = string | null | undefined;

export {};

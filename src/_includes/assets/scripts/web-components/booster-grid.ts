const css = `
:host {
  display: grid;
  grid-template-columns: repeat(var(--booster-grid-cols, 1), 1fr);
  grid-gap: 1.25; /* 20 / 16 */
  width: 100%;
  margin: 0 auto;
  transition: grid-gap 100ms ease-in-out, grid-template-columns 100ms ease-in-out;
}

@media (min-width: 60em) { /* 960 / 16 */
  :host {
    grid-template-columns: repeat(var(--booster-grid-cols, 2), 1fr);
    grid-gap: 2.5rem; /* 40 / 16 */
  }
}
`;

customElements.define('booster-grid', class extends HTMLElement {

  static get observedAttributes() {
    return ['column'];
  }

  get column() {
    return this.getAttribute('column');
  }

  set size(val: BoosterGridColumn) {
    this.setAttribute('column', val);
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'column' && oldValue !== newValue) {
      this.style.setProperty('--booster-grid-cols', newValue);
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

type BoosterGridColumn = string | null | undefined;

export {};

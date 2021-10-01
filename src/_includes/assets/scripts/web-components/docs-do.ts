const css = `
  .do, .bar {
    display: flex;
    width: 100%;
  }
  .do {
    flex-direction: column;
  }
  .bar {
    padding: 0.625rem 0; /* 10 / 16 */
    font-size: 0.875rem; /* 14 / 16 */
    text-transform: uppercase;
    font-weight: bold;
    color: var(--zui-green-400);
    border-top: 0.75rem solid var(--zui-green-400); /* 12 / 16 */
  }
`;

const template = document.createElement('template');

customElements.define('docs-do', class extends HTMLElement {
  static get observedAttributes() {
    return ['heading'];
  }

  get heading() {
    return this.getAttribute('heading');
  }

  set heading(val: DocsDoHeading) {
    this.setAttribute('heading', val);
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const templateStr = `
      <style>${css}</style>
      <div class="do">
        <div class="bar">${this.heading ? this.heading : 'Do'}</div>
        <slot></slot>
      </div>
    `;

    template.innerHTML = templateStr;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'heading' && oldValue !== newValue) {
      this.shadowRoot.querySelector('.bar').innerHTML = newValue;
    }
  }
});

type DocsDoHeading = string;

export {};

const css = `
  .do-not, .bar {
    display: block;
    width: 100%;
  }
  .bar {
    padding: 0.625rem 0; /* 10 / 16 */
    font-size: 0.875rem; /* 14 / 16 */
    text-transform: uppercase;
    font-weight: bold;
    color: var(--zui-red-400);
    border-top: 0.75rem solid var(--zui-red-400); /* 12 / 16 */
  }
`;

const template = document.createElement('template');

customElements.define('docs-do-not', class extends HTMLElement {
  static get observedAttributes() {
    return ['heading'];
  }

  get heading() {
    return this.getAttribute('heading');
  }

  set heading(val: DocsDoNotHeading) {
    this.setAttribute('heading', val);
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const templateStr = `
      <style>${css}</style>
      <div class="do-not">
        <div class="bar">${this.heading ? this.heading : 'Do not'}</div>
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

type DocsDoNotHeading = string;

export {};

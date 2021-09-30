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

customElements.define('booster-do', class extends HTMLElement {
  heading: BoosterDoHeading = 'Do';

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    const templateStr = `
      <style>${css}</style>
      <div class="do">
        <div class="bar">${this.heading}</div>
        <slot></slot>
      </div>
    `;

    template.innerHTML = templateStr;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    if (this.hasAttribute('heading')) {
      this.heading = this.getAttribute('heading');
    }
  }
});

type BoosterDoHeading = string;

export {};

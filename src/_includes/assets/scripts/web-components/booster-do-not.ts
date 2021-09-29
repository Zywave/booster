const css = `
  .bar {
    display: flex;
    width: 100%;
    padding: 0.625rem 0; /* 10 / 16 */
    font-size: 0.875rem; /* 14 / 16 */
    text-transform: uppercase;
    font-weight: bold;
    color: var(--zui-red-400);
    border-top: 0.75rem solid var(--zui-red-400); /* 12 / 16 */
  }
`;

customElements.define('booster-do-not', class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const template = document.createElement("template");
    const templateStr = `
      <style>${css}</style>
      <div class="bar">Do not</div>
    `;

    template.innerHTML = templateStr;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
});

export {};
const css = `
  .do-not, .bar {
    display: flex;
    width: 100%;
  }
  .do-not {
    flex-direction: column;
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

customElements.define('booster-do-not', class extends HTMLElement {
  heading: string = "Do not";

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const customHeading = this.getAttribute("heading");
    if (customHeading) {
      this.heading = customHeading;
    }

    this.render();
  }

  render() {
    const template = document.createElement("template");
    const templateStr = `
      <style>${css}</style>
      <div class="do-not">
        <div class="bar">${this.heading}</div>
        <slot></slot>
      </div>
    `;

    template.innerHTML = templateStr;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
});

export {};

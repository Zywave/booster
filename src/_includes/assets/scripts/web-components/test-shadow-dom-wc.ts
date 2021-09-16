class testShadowDomWC extends HTMLElement{
    connectedCallback() {
        const templateStr = `
          <div>'test-shadow-dom-wc', content in the shadow DOM</div>
        `;

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = templateStr;
    }
}

customElements.define('test-shadow-dom-wc', testShadowDomWC);
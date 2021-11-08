customElements.define('test-shadow-dom-wc', 
    class TestShadowDomWc extends HTMLElement {
        connectedCallback() {
            const templateStr = `<div>'test-shadow-dom-wc', content is in the shadow DOM</div>`;
            this.attachShadow({ mode: 'open' });
            this.shadowRoot.innerHTML = templateStr;
        }
    }
);
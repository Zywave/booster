customElements.define('test-light-dom-wc', 
    class TestLightDomWc extends HTMLElement {
        connectedCallback() {
            const templateStr = `<div>'test-light-dom-wc', content is in the light DOM</div>`;
            this.innerHTML = templateStr;
        }
    }
);
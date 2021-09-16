class testLightDomWC extends HTMLElement{
    connectedCallback() {
        const templateStr = `
            <div>'test-light-dom-wc', content in the light DOM</div>
        `;
        this.innerHTML = templateStr;
    }
}

customElements.define('test-light-dom-wc', testLightDomWC);
export class DocsNote extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        const templateStr = `
            <style>
                :host {
                    display: block;
                    margin-bottom: 1rem;
                }
                div {
                    display: inline-block;
                    padding: 1.25rem 1.875rem;
                    background-color: hsl(167deg 74% 34% / 20%);
                    color: #505A61;
                    border-radius: 5px;
                }
                ::slotted(a) {
                    color: #17987C;
                }
            </style>
            <div>
                <slot></slot>
            </div>
        `;
        const template = document.createElement('template');
        template.innerHTML = templateStr;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('docs-note', DocsNote);
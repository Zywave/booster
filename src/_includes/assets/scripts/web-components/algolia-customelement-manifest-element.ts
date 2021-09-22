customElements.define(
    'algolia-customelement-manifest-element',
    class AlgoliaCrawlableContent extends HTMLElement {
        url: string | null = null;

        async connectedCallback() {
            this.url = this.getAttribute('url');
            const response = await fetch(this.url);
            const content = await response.text();
            const cleanStr = content
                .replaceAll('<', '')
                .replaceAll('>', '');
            this.innerHTML = cleanStr;
        }
    }
);
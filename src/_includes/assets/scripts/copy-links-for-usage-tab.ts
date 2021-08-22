window.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('#usage h1, #usage h2, #usage h3, #usage h4');

    function getUrlNoHash() {
        return window.location.href.includes("#")
            ? window.location.href.split("#")[0]
            : window.location.href;
    }

    function createClipboardCopyIconElement(clipboardVal: string) {
        const el = document.createElement('clipboard-copy-icon');
        el.setAttribute('icon', 'link');
        el.setAttribute('clipboard', clipboardVal);
        return el;
    }

    headers.forEach(function(header) {
        header.appendChild(
            createClipboardCopyIconElement(`${getUrlNoHash()}#${header.id}`)
        );
    });
});
const url = new URL(String(document.location));

export function hasQueryParam(queryParam: string) {
    return url.searchParams.has(queryParam);
}

export function getQueryParamValue(queryParam: string) {
    return url.searchParams.get(queryParam);
}

export function getTabElementById(id: string) {
    return document.getElementById(`tab-${id}`);
}

export function getIndexPosOfQueryWithinElement(parentElement: Element, queryParam: string) {
    return Array
        .from(parentElement?.children)
        .indexOf(
            getTabElementById(
                getQueryParamValue(queryParam)
            )
        );
}

export function hideAllTabContent() {
    document.querySelectorAll('#content > [id]')
        .forEach(function(el) {
            if (el.getAttribute('style')) return;
            el.setAttribute('style', 'display: none;');
            el.setAttribute('aria-hidden', 'true');
        }
    );
}

export function showApiTabContent(element: Element) {
    element.setAttribute('selected', '0');
    const el = document.querySelector('#api');
    el?.removeAttribute('style');
    el?.removeAttribute('aria-hidden');
}

export function getUrlNoHash() {
    return window.location.href.split("#")[0];
}

export function createClipboardCopyIconElement(clipboardVal: string) {
    const el = document.createElement('clipboard-copy-icon');
    el.setAttribute('icon', 'link');
    el.setAttribute('clipboard', clipboardVal);
    return el;
}
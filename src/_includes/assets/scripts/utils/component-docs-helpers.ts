const url = new URL(String(document.location));

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
            if (el.classList.contains('is-hidden')) return;
            el.classList.add('is-hidden');
        }
    );
}

export function showApiTabContent(element: Element) {
    element.setAttribute('selected', '0');
    document.querySelector('#api')?.classList.remove('is-hidden');
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
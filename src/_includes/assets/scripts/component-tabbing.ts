window.addEventListener('DOMContentLoaded', function() {
    const tabsEl = document.querySelector('zui-tabs');

    function getTabQueryParam() {
        return window.location.href.split('?tab=')[1].split('#')[0]
            ?? window.location.href.split('?tab=')[1];
    }

    function getTabWithMatchingVal(val: string) {
        return document.querySelector(`#tab-${val}`);
    }

    function getIndexPosOfQueryInTabs() {
        return Array
            .from(tabsEl.children)
            .indexOf(
                getTabWithMatchingVal(
                    getTabQueryParam()
                )
            );
    }

    function hideAllTabContent() {
        document.querySelectorAll('#content > [id]')
            .forEach(function(el) {
                if (el.classList.contains('is-hidden')) return;
                el.classList.add('is-hidden');
            }
        );
    }

    function showApiTabContent() {
        tabsEl.setAttribute('selected', '0');
        document.querySelector('#api')?.classList.remove('is-hidden');
    }

    if (window.location.href.includes('?tab=')) {
        // if ?tab=* val doesn't match a tab, show and highlight API as selected tab
        if (getIndexPosOfQueryInTabs() === -1) {
            showApiTabContent()
        } else {
            tabsEl.setAttribute('selected', String(getIndexPosOfQueryInTabs()));
            hideAllTabContent();
            document.querySelector(`#${getTabQueryParam()}`)?.classList.remove('is-hidden');
        }
    } else {
        showApiTabContent();
    }
});
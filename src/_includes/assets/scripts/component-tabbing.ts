window.addEventListener('DOMContentLoaded', function() {
    const tabsEl = document.querySelector('zui-tabs');
    
    function getTabQueryParam() {
        const tabVal = window.location.href.split('?tab=')[1].split('#')[0] ?? window.location.href.split('?tab=')[1];
        return tabVal;
    }
    
    function getTabWithMatchingVal(val: string) {
        return document.querySelector(`#tab-${val}`);
    }

    function showApiTabContent() {
        tabsEl.setAttribute('selected', '0');
        document.querySelector('#api').classList.remove('is-hidden');
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

    if (window.location.href.includes('?tab=')) {
        if (getIndexPosOfQueryInTabs() === -1) {
            showApiTabContent()
        } else {
            tabsEl.setAttribute('selected', String(getIndexPosOfQueryInTabs()));
            document.querySelectorAll('#content > [id]').forEach(function(el) {
                if (el.classList.contains('is-hidden')) return;
                el.classList.add('is-hidden');
            })
            document.querySelector(`#${getTabQueryParam()}`)?.classList.remove('is-hidden');
        }
    } else {
        showApiTabContent();
    }
});
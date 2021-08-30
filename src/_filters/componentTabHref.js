module.exports = function componentTabHref(pageUrl, tabName) {
    return `${pageUrl}?tab=${tabName.toLowerCase()}`;
}
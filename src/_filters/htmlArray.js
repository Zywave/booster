module.exports = function htmlArray(arr) {
  if (!arr?.length) {
    return "";
  }
  return `[${arr.map(x => `"${x}"`)}]`;
}
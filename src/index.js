module.exports = function reverse(n) {
  const positiveNumStr = Math.abs(n).toString();
  let result = '';
  for (let i = positiveNumStr.length - 1; i >= 0; i -= 1) {
    result += positiveNumStr[i];
  }
  return result;
};

// Given a non-empty string s, you may delete at most one character.
// Judge whether you can make it a palindrome.
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  if (!s) {
    return false;
  }
  const rs = (left, right, hasMissed) => {
    while (left <= right) {
      if (s[left] !== s[right]) {
        if (hasMissed) {
          return false;
        }
        return rs(left + 1, right, true) || rs(left, right - 1, true);
      }
      left++;
      right--;
    }
    return true;
  };
  return rs(0, s.length - 1, false);
};

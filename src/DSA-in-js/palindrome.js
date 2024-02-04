// Ques 1 - Palindrome Number
// Input: x = 121 ----> Output: true;
// Input: x = 120 ----> Output: false;

const isPalindrome = function (x) {
  if (x < 0) return false;
  return x === +x.toString().split("").reverse().join("");
};

const result = isPalindrome(121);
console.log(result);

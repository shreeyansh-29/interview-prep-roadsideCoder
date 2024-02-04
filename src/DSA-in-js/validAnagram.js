// Ques 3 - Valid Anagram

const isAnagram = function (s, t) {
  //  1st Approach
  //   s = s.split("").sort().join();
  //   t = t.split("").sort().join();
  //   return s === t;

  //2nd Approach
  if (s.length !== t.length) return false;
  let obj1 = {},
    obj2 = {};

  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
};

const result = isAnagram("", "");
console.log(result);

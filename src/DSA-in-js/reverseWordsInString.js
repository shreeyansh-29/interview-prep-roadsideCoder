// Ques 1 : Given an input string s, reverse the order of the words

// Input: "the sky is blue"     ----->>>>>     Output: "blue is sky the"
// Input: "  hello world  "     ----->>>>>     Output: "world hello"
// Input: "a good   example"    ----->>>>>     Output: "example good a"

// "the sky is blue" => [the,sky,is,blue]
// [] => [the,sky,is,blue] => blue is sky the

const reverseWords = function (n) {
  let splitS = n.split(" ");
  let stack = [];

  for (let i of splitS) stack.push(i);

  let result = "";
  while (stack.length) {
    let item = stack.pop();
    if (item) result += " " + item;
  }
  return result.trim();
};

console.log(reverseWords("the sky is blue"));

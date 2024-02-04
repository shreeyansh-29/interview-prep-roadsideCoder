// Ques 6 - Subsets ( Backtracking Algorithm using Recursion )
// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// Input: [1,2,3]  ----->>>>>  Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Input: [0]      ----->>>>>  Output: [[],[0]]

function recursiveFn(nums, i) {
  let results = [],
    temp = [];
  if (i === nums.length) return results.push([...temp]);

  temp.push(nums[i]);
  recursiveFn(nums, i + 1);
  temp.pop();
  recursiveFn(nums, i + 1);
}

console.log(recursiveFn([1, 2, 3], 0));

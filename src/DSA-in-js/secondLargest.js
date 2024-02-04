// Ques 1 - Second Largest Number
// Given an array Arr of size N, print second largest
// distinct element from an array.

// Input: [12, 35, 1, 10, 34, 1]  ----->>>>>  Output: 34
// Input: [10, 5, 10]             ----->>>>>  Output: 5

function secondLargestElement(nums) {
  //handling duplicate elements;
  //   let newArr = Array.from(new Set(nums));

  //   newArr.sort((a, b) => b - a);
  //   return newArr[1];

  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      secondLargest = largest;
      largest = nums[i];
    } else if (nums[i] !== largest && nums[i] > secondLargest) {
      secondLargest = nums[i];
    }
  }
  return secondLargest;
}

let res = secondLargestElement([12, 35, 1, 10, 34, 1]);

console.log(res);

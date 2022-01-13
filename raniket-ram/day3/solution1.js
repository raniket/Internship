/**
 * @param {number[]} nums
 * @return {number[]}
 */
function solution(nums) {
  let ans = []
  for (let i = 0; i < nums.length; i++) {
    let smallerNumbersCount = 0
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j] && i !== j) smallerNumbersCount++
    }
    ans[i] = smallerNumbersCount
  }
  return ans
};


// -------------------------------- Driver -------------------------------- //

let result1 = solution([8,1,2,2,3])
let expected1 = [4,0,1,1,3]

let result2 = solution([6,5,4,8])
let expected2 = [2,1,0,3]

let result3 = solution([6,5,4,8])
let expected3 = [2,1,0,3]

console.log(result1.toString() === expected1.toString() ? 'PASSED' : 'FAILED')
console.log(result2.toString() === expected2.toString() ? 'PASSED' : 'FAILED')
console.log(result3.toString() === expected3.toString() ? 'PASSED' : 'FAILED')
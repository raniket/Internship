// ------------------ Solution  ------------------

/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  let n = Math.floor(nums.length / 2)
  let table = {}

  for (let num of nums) {
    table[num] = table[num] ? table[num] + 1 : 1
  }

  for (let key of Object.keys(table)) {
    if (table[key] === n) return key
  }

  return -1
};



// ------------------------ Code Driver ---------------------------
let input1 = [1, 2, 3, 3]
let output1 = 3

let input2 = [2, 1, 2, 5, 3, 2]
let output2 = 2

let ans1 = repeatedNTimes(input1)
console.log('Expected : ', output1, '\nReceived : ', ans1)

console.log('\n')

let ans2 = repeatedNTimes(input2)
console.log('Expected : ', output2, '\nReceived : ', ans2)
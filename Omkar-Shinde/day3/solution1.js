/**
 * @param {number[]} nums
 * @return {number[]}
 */
// T.C O(max(100,N)) S.C O(max(100,N))
function solution(nums) {
    let countArray = new Array(101).fill(0); //HashMap to count freq of Number
    for (const number of nums) {
        countArray[number]++;
    }

    for (let i = 1; i <= 100; i++) {
        countArray[i] += countArray[i - 1]; //Prefix Sum
    }
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (countArray[nums[i] - 1] > 0) {
            result.push(countArray[nums[i] - 1]);
        } else {
            result.push(0);
        }
    }

    return result;
};


// -------------------------------- Driver -------------------------------- //

let result1 = solution([8, 1, 2, 2, 3])
let expected1 = [4, 0, 1, 1, 3]

let result2 = solution([6, 5, 4, 8])
let expected2 = [2, 1, 0, 3]

let result3 = solution([6, 5, 4, 8])
let expected3 = [2, 1, 0, 3]

console.log(result1.toString() === expected1.toString() ? 'PASSED' : 'FAILED')
console.log(result2.toString() === expected2.toString() ? 'PASSED' : 'FAILED')
console.log(result3.toString() === expected3.toString() ? 'PASSED' : 'FAILED')
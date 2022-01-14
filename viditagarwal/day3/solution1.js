/**
 * @param {number[]} nums
 * @return {number[]}
 */
function solution(nums) {
  table={};// table stores the no of elements smaller than the current numer in the array
  let arr=[];
  let nums2=[...nums];//dublicte of original array
  nums2.sort();// sorts the dublicate array
  for(let i=nums2.length-1;i>=0;i--){   //assigns the index(no of smaller numbers) to the elements of the array
    table[nums2[i]]=i;// stores the alloted values in table
  }
  for(let i=0;i<nums.length;i++){ //arranges the answer to arr
    arr.push(table[nums[i]]);
  }
  return arr;  //output
};
// time complexity - O(nlog(n))
// space complexity - O(n)

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

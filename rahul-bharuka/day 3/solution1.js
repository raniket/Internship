 function solution(nums) {
  ans=nums.slice();
  ans.sort();
  let map=[];
  for(let i=nums.length;i>=0;i--){
      map[ans[i]]=i;
  }
  for(let i=0;i<nums.length;i++){
      ans[i]=map[nums[i]];
  }
  return ans;// Write your code here
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

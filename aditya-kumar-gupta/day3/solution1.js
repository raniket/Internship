/**
 * @param {number[]} nums
 * @return {number[]}
 */
 

// T.C - O(N), S.C - O(N)
function solution(nums) {
    var countOfNum = new Array(101).fill(0);
    var resultArr = new Array(nums.length);

    for(let i=0; i<nums.length; i++){
        countOfNum[nums[i]]++;
    }

    for(let i=1; i<=100; i++){
        countOfNum[i] += countOfNum[i-1];
    }

    for(let i=0; i<nums.length; i++){
        if(nums[i] === 0){
            resultArr[i] = 0;
        } else{
            resultArr[i] = countOfNum[nums[i]-1];
        }
    }

    return resultArr;
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
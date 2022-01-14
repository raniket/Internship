/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Time complexity : o(m) where m is the max element in array nums
// Space complexity : o(m) where m is the max element in array nums

function solution(nums) {
    //array to keep count of all distinct items in array(count sort concept)
    const count = new Array(Math.max(...nums)+1).fill(0);
    
    nums.forEach(item => count[item]++);
    for(let i=1; i<count.length ; i++) {
        let curr = count[i]
        let prev = count[i-1]

        //adding the previous numbers
        if(i === count.length-1) count[i] = prev;
        else count[i] = curr + prev    
        
    }
    return nums.map(n => n==0 ? 0 : count[n-1])
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
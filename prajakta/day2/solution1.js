// --------------------------------- Solution 1 ---------------------------------

/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */


 function solution(arr, k) {
    let count = {};
    
    //if string already exists in the count obj //string doesn't exist
    arr.forEach( ele => count[ele] = count[ele] ? count[ele] + 1 : 1);
    //iterating to filter out the elements with count!=1
    const distinct = [];
    for (let ele in count) {
        if (count[ele] === 1) {
            distinct.push(ele);
        }
    }

    return  distinct[k - 1] ? distinct[k - 1] : "";
  };
  
  
  // --------------------------------- Code Driver ---------------------------------
  
  let result1 = solution(["d","b","c","b","c","a"], 2)
  let expected1 = "a"
  
  
  let result2 = solution(["aaa","aa","a"], 1)
  let expected2 = "aaa"
  
  let result3 = solution(["a","b","a"], 3)
  let expected3 = ""


  console.log(result1 === expected1 ? 'Test Passed' : 'Test Failed')
  console.log(result2 === expected2 ? 'Test Passed' : 'Test Failed')
  console.log(result3 === expected3 ? 'Test Passed' : 'Test Failed')
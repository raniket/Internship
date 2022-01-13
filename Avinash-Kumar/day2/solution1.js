// --------------------------------- Solution 1 ---------------------------------

/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
 function solution(arr, k) {
    let freq = {};
    //storing frequencies of given strings
    for(let str of arr){
        if(freq[str]) freq[str] = freq[str] + 1;
        else freq[str] = 1;
    }

    // console.log(Object.values(freq));
    //extracting an array of keys and values out of frequency object
    let uniqueStrings = Object.keys(freq);
    let uniqueStringsCount = Object.values(freq);
    
    //     console.log(uniqueStrings);
    //     console.log(uniqueStringsCount);
    
    for(let i=0;i<uniqueStrings.length;i++){
        if(uniqueStringsCount[i] == 1) {
            k--;
            //when k reaches zero that means the currentString is the kth disctinct string
            if(k == 0) return uniqueStrings[i];
        }
    }
    return "";
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
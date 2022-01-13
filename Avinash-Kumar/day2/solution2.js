// --------------------------------- Solution 1 ---------------------------------

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
 function solution(allowed, words) {
    let freqAllowed = {};
    //hashing all the characters of string allowed
    for(let ch of allowed){
        freqAllowed[ch] = (freqAllowed[ch]? freqAllowed[ch] + 1 : 1);
    }
    
    //count to count the number of consistent strings
    let count = 0;
    
    for(let word of words){
        let flag = true;
        let currentString = word;
        for(let ch of currentString){
            //if character is not present in allowed string flag is set to false
            if(!freqAllowed[ch]){
                flag = false;
                break;
            }
        }
        if(flag){
           count++; 
        }
    }
    return count;
    
  };
  
  
  // --------------------------------- Code Driver ---------------------------------
  
  let result1 = solution("ab", ["ad","bd","aaab","baa","badab"])
  let expected1 = 2
  
  let result2 = solution("abc", ["a","b","c","ab","ac","bc","abc"])
  let expected2 = 7
  
  let result3 = solution("cad", ["cc","acd","b","ba","bac","bad","ac","d"])
  let expected3 = 4
  
  console.log(result1 === expected1 ? 'Test Passed' : 'Test Failed')
  console.log(result2 === expected2 ? 'Test Passed' : 'Test Failed')
  console.log(result3 === expected3 ? 'Test Passed' : 'Test Failed')
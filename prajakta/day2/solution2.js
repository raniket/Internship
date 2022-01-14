// --------------------------------- Solution 1 ---------------------------------

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
 function solution(allowed, words) {
    // Write your code here
    let count = 0;
    let flag;
    for(let i=0;i<words.length;i++){
        flag = 0
        for(let j=0;j<words[i].length;j++){
            if(!(allowed.includes(words[i][j]))){
                flag = 1;
                break;
            }
        }
        if(flag === 0) count += 1;
    }

    return count
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
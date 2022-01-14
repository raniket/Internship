/**
 * @param {string[]} words
 * @return {number}
 */

// Time complexity : o(n) where n is the total number of characters in words array
// Space complexity : o(n) where n is the total number of characters in words array

function solution(words) {
    const morse_table = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const dist_codes = new Set(); //set to store the distinct codes

    words.forEach(str => {
        let code = '';
        for (let i = 0; i < str.length; i++) {
            code += morse_table[str.charCodeAt(i) - 97]
        }
        if(!dist_codes.has(code)) dist_codes.add(code);
    });
    return dist_codes.size
  };
  
  // -------------------------------- Driver -------------------------------- //
  
  let result1 = solution(["gin","zen","gig","msg"])
  let expected1 = 2
  
  let result2 = solution(["a"])
  let expected2 = 1
  
  console.log(result1 === expected1 ? 'PASSED' : 'FAILED')
  console.log(result2 === expected2 ? 'PASSED' : 'FAILED')
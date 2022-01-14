/**
 * @param {string[]} words
 * @return {number}
 */


// T.C - O(12*N), S.C - O(N), max word length is 12.
function solution(words) {
    const MorseCodeArr = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
    var resultSet = new Set();

    for(let word of words){
        let wordCode = "";
        for(let char of word){
            wordCode += MorseCodeArr[char.charCodeAt(0) - 'a'.charCodeAt(0)];
        }
        resultSet.add(wordCode);
    }

    return resultSet.size;
};
  
  // -------------------------------- Driver -------------------------------- //
  
  let result1 = solution(["gin","zen","gig","msg"])
  let expected1 = 2
  
  let result2 = solution(["a"])
  let expected2 = 1
  
  console.log(result1 === expected1 ? 'PASSED' : 'FAILED')
  console.log(result2 === expected2 ? 'PASSED' : 'FAILED')
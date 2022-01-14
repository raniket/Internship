/**
 * @param {string[]} words
 * @return {number}
 */
function solution(words) {
  let dist=[];// stores distinct combinations
  let arr=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

  for(let word of words){
    let str="";
    for(let i=0;i<word.length;i++){//converts word to morse code , stores it in str
      str=str+arr[(word.charCodeAt(i)-97)];
    }
    if(!dist.includes(str)){//checks if combination already exists in array dist
      dist.push(str);
    }
    str="";//for next morse code
  }
  return dist.length;
};

// -------------------------------- Driver -------------------------------- //

let result1 = solution(["gin","zen","gig","msg"])
let expected1 = 2

let result2 = solution(["a"])
let expected2 = 1

console.log(result1 === expected1 ? 'PASSED' : 'FAILED')
console.log(result2 === expected2 ? 'PASSED' : 'FAILED')

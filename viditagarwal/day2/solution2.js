// --------------------------------- Solution 1 ---------------------------------

/**
* @param {string} allowed
* @param {string[]} words
* @return {number}
*/
function solution(allowed, words) {
   let arr = allowed.split("");
   let n=0;
   for(let i of words){
       let arr2=i.split("");
       for(let j of arr2) {
           if(!arr.includes(j)){
               n++;
               break;
           }
       }
   }
   
   return (words.length-n);


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

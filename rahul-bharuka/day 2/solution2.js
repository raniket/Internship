function solution(allowed, words) {
  const allow=allowed.split("");
  let ans=words.length;
  for(let i=0;i<words.length;i++){
    let this_word=words[i].split("");  
    for(let j=0;j<this_word.length;j++){
        if(!allow.includes(this_word[j])){
        ans--;break;}
    }
}
  return ans;// Write your code here
  
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

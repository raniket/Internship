/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
 function solution(arr, k) {
  table={};
  for(let i of arr){
      if(table[i]==undefined){
          table[i]=1;
      }
      else{
          table[i]=table[i]+1;
      }
  }
  let k1=0;
  for(let j of Object.keys(table)){
      if(table[j]==1)  {
          k1++;
      }
      if(k1==k){
          return j;
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

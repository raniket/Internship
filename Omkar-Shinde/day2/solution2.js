/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
// T.C O(N) (N = Total Char in Words) S.C O(26)
var solution = function(allowed, words) {
    let isPresent = new Array(26).fill(0);
    for(let x of allowed){
        isPresent[x.charCodeAt(0)-'a'.charCodeAt(0)] = 1;
    }
    
    let ans = 0;
    for(const s of words){
        let ok = true;
        for(const c of s){
            if(!isPresent[c.charCodeAt(0)-'a'.charCodeAt(0)]){
                ok = false;
                break;
            }
        }
        if(ok)ans++;
    }
    return ans;
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
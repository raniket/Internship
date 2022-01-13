function solution(allowed, words) {
    var arr = new Array(26).fill(0);

    for(let chr of allowed){
        arr[chr.charCodeAt(0) -'a'.charCodeAt(0)] = 1;
    }

    var res = words.length;

    for(let str of words){
        for(let chr of str){
            if(!arr[chr.charCodeAt(0) -'a'.charCodeAt(0)]){
                res--;
                break;
            }
        }
    }

    return res;
    
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
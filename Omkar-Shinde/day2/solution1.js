// --------------------------------- Solution 1 ---------------------------------

/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
// T.C O(N) S.C O(N)
var solution = function(arr, k) {
    let cnt = {};
    for(const i of arr){
        cnt[i] = (cnt[i]) ? cnt[i]+1 : 1;
    }
    let j=0;
    for(let i=0;i<arr.length;i++){
        if(cnt[arr[i]]==1)j++;
        if(j==k)return arr[i];
    }
    return '';
};


// --------------------------------- Code Driver ---------------------------------

let result1 = solution(["d", "b", "c", "b", "c", "a"], 2)
let expected1 = "a"


let result2 = solution(["aaa", "aa", "a"], 1)
let expected2 = "aaa"

let result3 = solution(["a", "b", "a"], 3)
let expected3 = ""


console.log(result1 === expected1 ? 'Test Passed' : 'Test Failed')
console.log(result2 === expected2 ? 'Test Passed' : 'Test Failed')
console.log(result3 === expected3 ? 'Test Passed' : 'Test Failed')
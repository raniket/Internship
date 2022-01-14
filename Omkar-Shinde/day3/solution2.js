/**
 * @param {string[]} words
 * @return {number}
 */
// T.C O(N*M) (M== Avg char in Words) S.C O(N*M)
function solution(words) {
    let morse = 
        [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..",
        ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.",
        "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
    let transformations = new Set();

    for (let word of words) {
        let transformation = "";
        for (let char of word) {
            transformation += morse[char.charCodeAt(0) - 'a'.charCodeAt(0)];
        }
        transformations.add(transformation);
    }
    
    return transformations.size;
};

// -------------------------------- Driver -------------------------------- //

let result1 = solution(["gin", "zen", "gig", "msg"])
let expected1 = 2

let result2 = solution(["a"])
let expected2 = 1

console.log(result1 === expected1 ? 'PASSED' : 'FAILED')
console.log(result2 === expected2 ? 'PASSED' : 'FAILED')
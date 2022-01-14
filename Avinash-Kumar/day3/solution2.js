/**
 * @param {string[]} words
 * @return {number}
 */
function solution(words) {
    let charsRep = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let uniqueTransformations = new Set();
    for (let word of words) {
        let currentWord = word;
        let currString = "";
        for (let ch of currentWord) {
        currString += charsRep[ch.charCodeAt(0) - "a".charCodeAt(0)];
        }
        uniqueTransformations.add(currString);
    }

    let ans = uniqueTransformations.size;
    return ans;
}

// -------------------------------- Driver -------------------------------- //

let result1 = solution(["gin", "zen", "gig", "msg"]);
let expected1 = 2;

let result2 = solution(["a"]);
let expected2 = 1;

console.log(result1 === expected1 ? "PASSED" : "FAILED");
console.log(result2 === expected2 ? "PASSED" : "FAILED");

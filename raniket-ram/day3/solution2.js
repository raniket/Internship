/**
 * @param {string[]} words
 * @return {number}
 */
function solution(words) {
  let morseCodes = []
  let code = [
    ".-", "-...", "-.-.", "-..", ".",
    "..-.", "--.", "....", "..", ".---",
    "-.-", ".-..", "--", "-.", "---",
    ".--.", "--.-", ".-.", "...", "-",
    "..-", "...-", ".--", "-..-",
    "-.--", "--.."
  ]

  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    let morseCode = ''
    for (let j = 0; j < word.length; j++) {
      morseCode += code[word.charCodeAt(j) - 97]
    }
    if (morseCodes.indexOf(morseCode) < 0)
      morseCodes.push(morseCode)
  }

  return morseCodes.length
};

// -------------------------------- Driver -------------------------------- //

let result1 = solution(["gin", "zen", "gig", "msg"])
let expected1 = 2

let result2 = solution(["a"])
let expected2 = 1

console.log(result1 === expected1 ? 'PASSED' : 'FAILED')
console.log(result2 === expected2 ? 'PASSED' : 'FAILED')
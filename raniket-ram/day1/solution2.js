// ------------------ Solution  ------------------

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    reverse(image[i])
    flip(image[i])
  }

  function reverse(array) {
    let firstIndex = 0
    let secondIndex = array.length - 1
    while (firstIndex < secondIndex) {
      swap(array, firstIndex, secondIndex)
      firstIndex++
      secondIndex--
    }
  }

  function flip(array) {
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i] ^ 1
    }
  }

  function swap(array, firstIndex, secondIndex) {
    let tmp = array[firstIndex]
    array[firstIndex] = array[secondIndex]
    array[secondIndex] = tmp
  }

  return image
};


// ------------------------ Code Driver ---------------------------

let input1 = [[1,1,0],[1,0,1],[0,0,0]]
let output1 = [[1,0,0],[0,1,0],[1,1,1]]


let input2 = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
let output2 = [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]


let ans1 = flipAndInvertImage(input1)
console.log('Expected : ', output1, '\nReceived : ', ans1)

console.log('\n')

let ans2 = flipAndInvertImage(input2)
console.log('Expected : ', output2, '\nReceived : ', ans2)

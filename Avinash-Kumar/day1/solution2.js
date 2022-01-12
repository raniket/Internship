var flipAndInvertImage = function (image) {
  let rows = image.length;
  let cols = image[0].length;
  //reversing it horizontally
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols / 2; j++) {
      let temp = image[i][j];
      image[i][j] = image[i][cols - j - 1];
      image[i][cols - j - 1] = temp;
    }
  }

  //inverting i.e 0 to 1 and 1 to 0 using ! operator
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if(image[i][j]) image[i][j] = 0;
      else image[i][j] = 1;
    }
  }
  return image;
};

// ------------------------ Code Driver ---------------------------

let input1 = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];
let output1 = [
  [1, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
];

let input2 = [
  [1, 1, 0, 0],
  [1, 0, 0, 1],
  [0, 1, 1, 1],
  [1, 0, 1, 0],
];
let output2 = [
  [1, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 1],
  [1, 0, 1, 0],
];

let ans1 = flipAndInvertImage(input1);
console.log("Expected : ", output1, "\nReceived : ", ans1);

console.log("\n");

let ans2 = flipAndInvertImage(input2);
console.log("Expected : ", output2, "\nReceived : ", ans2);

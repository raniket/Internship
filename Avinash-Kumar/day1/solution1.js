var repeatedNTimes = function (nums) {
  let count = [];
  for (let num of nums) {
    count[num] = count[num] ? count[num] + 1 : 1;
  }
  let ans;
  for (let i = 0; i < count.length; i++) {
    if (count[i] == nums.length / 2) {
      ans = i;
      break;
    }
    // console.log(count[i]);
  }
  return ans;
};

// ------------------------ Code Driver ---------------------------
let input1 = [1, 2, 3, 3];
let output1 = 3;

let input2 = [2, 1, 2, 5, 3, 2];
let output2 = 2;

let ans1 = repeatedNTimes(input1);
console.log("Expected : ", output1, "\nReceived : ", ans1);

console.log("\n");

let ans2 = repeatedNTimes(input2);
console.log("Expected : ", output2, "\nReceived : ", ans2);

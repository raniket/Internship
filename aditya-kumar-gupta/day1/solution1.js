// ------------------ Solution  ------------------

/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
    var hashMap = {};
    for(let i of nums){
        if(i in hashMap){
            hashMap[i]++;
        }
        else{
            hashMap[i] = 1;
        }
    
        if(hashMap[i] > 1){
            return i;
        }
    }
};



// ------------------------ Code Driver ---------------------------
let input1 = [1, 2, 3, 3]
let output1 = 3

let input2 = [2, 1, 2, 5, 3, 2]
let output2 = 2

let ans1 = repeatedNTimes(input1)
console.log('Expected : ', output1, '\nReceived : ', ans1)

console.log('\n')

let ans2 = repeatedNTimes(input2)
console.log('Expected : ', output2, '\nReceived : ', ans2)
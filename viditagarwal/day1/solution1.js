

var repeatedNTimes = function (nums)
{
  var obj = {};
  for(let i=0;i<nums.length;i++)
  {
    if(nums[i] in obj ==false)
    {
     obj[nums[i]] = 1;
    }
    else
    {
      return(nums[i]);
    }

  }
};



let input1 = [1, 2, 3, 3]
let output1 = 3

let input2 = [2, 1, 2, 5, 3, 2]
let output2 = 2

console.log(input1[0]);
let ans1 = repeatedNTimes(input1)
console.log('Expected : ', output1, '\nReceived : ', ans1)

console.log('\n')

let ans2 = repeatedNTimes(input2)
console.log('Expected : ', output2, '\nReceived : ', ans2)

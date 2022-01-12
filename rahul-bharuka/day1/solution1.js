var repeatedNTimes = function (nums) {
    let len=nums.length;
    if(nums[len-1]==nums[len-2])
          {
              return nums[len-1];
          }
      else{
      for(var i=0;i<len-2;i++)
      {
          if(nums[i]==nums[i+1] || nums[i]==nums[i+2])
          {
              return nums[i];
          }
      }}// Write your code here
  };
  
  let input1 = [1, 2, 3, 3]
  let output1 = 3
  
  let input2 = [2, 1, 2, 5, 3, 2]
  let output2 = 2
  
  let ans1 = repeatedNTimes(input1)
  console.log('Expected : ', output1, '\nReceived : ', ans1)
  
  console.log('\n')
  
  let ans2 = repeatedNTimes(input2)
  console.log('Expected : ', output2, '\nReceived : ', ans2)

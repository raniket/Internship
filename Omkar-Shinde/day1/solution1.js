// ------------------ Solution  ------------------
// T.C O(N) S.C O(1)  Boyer-Moore Algo
var repeatedNTimes = function(nums) {
    let cnt1=0,cnt2=0;
    let num1=-1,num2=-1;
    let n = Math.floor(nums.length/2);
    for(const x of nums)
    {
        if(x==num1)
        {
            cnt1++;
        }
        else if(x==num2)   
        {
            cnt2++;
        }
        else if(cnt1==0)
        {
            num1=x;
            cnt1=1;
        }
        else if(cnt2==0)   
        {
            num2=x;
            cnt2=1;
        }
        else    
        {
            cnt1--;
            cnt2--;
        }
    }
    cnt1=0,cnt2=0;
    for(const x of nums)    
    {
        if(x==num1)cnt1++;
        else if(x==num2)cnt2++;
    }
    if(cnt1==n)return num1;
    if(cnt2==n)return num2;
    
    return -1;
};
/* T.C O(N) S.C O(N)
var repeatedNTimes = function(nums) {
    const len = Math.floor(nums.length/2);
    const cnt = {};
    for (const x of nums)
    {
        cnt[x] = (cnt[x]) ? cnt[x]+1 : 1;
        if(cnt[x]==len)
        {
            return x;
        }
    }
    return -1;
};
*/


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
function checkRepeated(nums){
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
}

var nums = [2,1,2,5,3,2];
console.log(checkRepeated(nums));
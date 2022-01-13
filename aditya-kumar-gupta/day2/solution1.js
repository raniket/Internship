function solution(arr, k) {
    var map = {};

    arr.forEach(element => {
        if(element in map){
            map[element]++;
        } else{
            map[element] = 1;
        }
    });

    for(let element in map){
        if(map[element] == 1 && --k == 0){
            return element;
        }
    };

    return "";
};

// --------------------------------- Code Driver ---------------------------------

let result1 = solution(["d","b","c","b","c","a"], 2)
let expected1 = "a"


let result2 = solution(["aaa","aa","a"], 1)
let expected2 = "aaa"

let result3 = solution(["a","b","a"], 3)
let expected3 = ""


console.log(result1 === expected1 ? 'Test Passed' : 'Test Failed')
console.log(result2 === expected2 ? 'Test Passed' : 'Test Failed')
console.log(result3 === expected3 ? 'Test Passed' : 'Test Failed')
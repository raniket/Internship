function solution(words) {
        let map=[];
        for(let i=0;i<words.length;i++){
            let word=words[i].split("");
            let code="";
            for(let j=0;j<word.length;j++){
                if(word[j] === 'a')
                code+=".-";
                else if(word[j] === 'b')
                code+="-...";
                else if(word[j] === 'c')
                code+="-.-.";
                else if(word[j] === 'd')
                code+="-..";
                else if(word[j] === 'e')
                code+=".";
                else if(word[j] === 'f')
                code+="..-.";
                else if(word[j] === 'g')
                code+="--.";
                else if(word[j] === 'h')
                code+="....";
                else if(word[j] === 'i')
                code+="..";
                else if(word[j] === 'j')
                code+=".---";
                else if(word[j] === 'k')
                code+="-.-";
                else if(word[j] === 'l')
                code+=".-..";
                else if(word[j] === 'm')
                code+="--";
                else if(word[j] === 'n')
                code+="-.";
                else if(word[j] === 'o')
                code+="---";
                else if(word[j] === 'p')
                code+=".--.";
                else if(word[j] === 'q')
                code+="--.-";
                else if(word[j] === 'r')
                code+=".-.";
                else if(word[j] === 's')
                code+="...";
                else if(word[j] === 't')
                code+="-";
                else if(word[j] === 'u')
                code+="..-";
                else if(word[j] === 'v')
                code+="...-";
                else if(word[j] === 'w')
                code+=".---";
                else if(word[j] === 'x')
                code+="-..-";
                else if(word[j] === 'y')
                code+="-.--";
                else if(word[j] === 'z')
                code+="--..";
            }map[code]=1;
        }
        let ans=0;
        for(let item in map)
        ans++;
        return ans;
  // Write your code here
};

// -------------------------------- Driver -------------------------------- //

let result1 = solution(["gin","zen","gig","msg"])
let expected1 = 2

let result2 = solution(["a"])
let expected2 = 1

console.log(result1 === expected1 ? 'PASSED' : 'FAILED')
console.log(result2 === expected2 ? 'PASSED' : 'FAILED')

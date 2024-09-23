var ispallindrome = function (x){
    return x=== x.toString().split("").reverse().join("")
};  
const res = ispallindrome(121);
res();
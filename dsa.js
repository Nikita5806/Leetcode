var ispallindrome = function (x){
    return x=== x.toString().split("").reverse().join("")
};  
const res = ispallindrome(121);
res();

const anagram = function(s , t){
    s= s.split("").sort().join("");
    t= t.split("").sort().join("");

return s===t;
 }



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

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */
let num = 0;

function fizzBuzz(num) {
    for( let i=0; i<=10; i++ ){
        console.log(num)
    }
    if(num= 3 && 5){
        console.log("fizzbuzz")
        
    }else if ( num = 1&&2&&4&&7&&8&&11&&13&&14 ){
        console.log (num)
    } 

}



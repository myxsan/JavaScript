/*
//checking the type
num = 111
str = "hello"
bool = true

console.log("num: " ,typeof(num))
console.log("str: ",typeof(str))
console.log("bool: ",typeof(bool))
*/

//Converting string to int and float
//Wirh Number() you can convert string to int or float but there can't be any string characters
let num = "111"
let wrong = "11px"
console.log(Number(num))
console.log(Number(wrong)) //NaN

let int = "111px"
let float = "1.11px"
//with parseInt() and parseFloat() you can convert string to int even there are anumeretic characters

console.log(parseInt(int))
console.log(parseFloat(float))




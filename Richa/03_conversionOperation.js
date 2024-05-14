let score = 33
console.log(typeof score);
console.log(typeof(score));

let score1 = "33"
console.log(typeof score1);

let score2 = "33abc"
console.log(typeof score2);

let valueInNumber = Number(score1)
console.log(typeof valueInNumber);

let valuInNumber1 = Number(score2)
console.log(valuInNumber1);

let score3 = null
let valuInNumber2 = Number(score3)
console.log(valuInNumber2);

let score4 = undefined
let valueInNumber3 = Number(score4)
console.log(valueInNumber3);

let score5 = true
let valueInNumber4 = Number(score5)
console.log(valueInNumber4);

let score6 = false
let valueInNumber5 = Number(score6)
console.log(valueInNumber5);

let score7 = "Richa"
let valueInNumber6 = Number(score7)
console.log(valueInNumber6);

// "33" => 33
//"3abc" => NaN -> Not a number but NaN ka type number hi h
//true =>1;
// false=0
//undefine => NaN
// let valueInNumber = Number(score1) here Number we use for change our variable type in number in place of number we want to change our variable type in string then we use String in place of Number

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1=> true
// 0=> false
// "" => false
//"Richa"=> true
let someNumber = 3
let stringNumber = String(someNumber)
console.log(stringNumber); // it gives output 3
console.log(typeof stringNumber); // here we check the type of someNumber that is string 
// the conclusion is the is gives number but it is a string.


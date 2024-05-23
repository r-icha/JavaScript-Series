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
// the conclusion is the is gives number but it is a string type.

// **************** Operations ****************

let value = 3
let negvalue = -value
console.log(negvalue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/3);
console.log(2**3);
console.log(2%3);

// if we want to merge two strings
let str1= "hello"
let str2= " Richa"
let str3 = str1+str2
console.log(str3);

console.log("1" + 2); // output is 12
console.log(1 + "2"); // output is 12
console.log("1" + 2 + 2); //output is 122 agar string phle hogi toh conversion ni hoga yeh add ni krega aur output strig ki trh hi 122  dega
console.log(1 + 2 + "2"); // output is 32  agar string last m hogi toh phle wale numbers m conversion ho jaega jaise ki 1+2 =3 diya h

console.log((3+4)*5%3); //  phle add hoga 7 after that 5 mutiply hoga 35 and iske bd 3 se % hoga toh answe milega 2

//*****don't use */
console.log(true); // output is true
console.log(+true); //output is 1
console.log(+"");//output is 0
let num1, num2, num3 
num1 = num2 = num3 = 2 + 2 

//***** prefix and postfir operator ******/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment   ---- link to study
 
let gameCounter = 100
gameCounter++;
//++gamecounter; it will also give output 101
console.log(gameCounter);

//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

// must study the above link


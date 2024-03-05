let score = 33
console.log(typeof score);

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
//"3abc" => NaN
//true =>1;
// false=0

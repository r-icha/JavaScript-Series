const userEmail = "rich@.com"
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values --- false,"",null, undefined, NaN 0, -0, BigInt 0n (BigInt ke andar 0n) likha jata h isko bhi falsy value mana jata h

/*-------truthy values ----

"0"- this is truthy values because yeh string ke andar likha h

'false'- this is truthy value beacause it written in string.

" " - space inside a string is truthy value

[]- empty array is truthy value

{}-empty object is truthy value

function(){} :-this function is also a truthy value. this function is called empty function no parameter no execution

*/


//-----array empty h ya ni kaise check kreneg-----
const userEmail1 = [] 
if(userEmail1.length === 0){
  console.log("Array is empty");
}

//------ object empty h ya ni kaise check krenge------------
const emptyobj = {}
if(Object.keys(emptyobj).length === 0){
console.log("Object is empty");
}

/* console m jaen toh
false == 0 then output is true

false == '' then output is true

0 == '' then output is true*/



//Nullish coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10
console.log(val1); // 5

// database se call krenge ya firebase waghra ka use krenge toh, app write ka use krenge toh directly response ni milta h balki two values milti hain toh chances h ki respose null aajae ya response aaye hi na undefined aajae tb is condition m hmara poora ka poora code structure preshan ho skta h toh aise cases ke liye specially yeh bnaya gya h ki values ko agae apko treate krna ki null ho toh null assign krdo us hisab se m  case ko adjust kr sku undefined ho toh thek h otherwise koi value aaye toh us value ko assign krdu

let val2;
val2 = null ?? 10
console.log(val2);//10

let val3;
val3 = undefined ?? 15
console.log(val3);//15

let val4;
val4 = null ?? 10 ?? 22
console.log(val4);// aise situation m jo null ke bd jo bhi phli value hogi whi aayegi
// null ?? function -- istype se hm bde coades m Nullih Coalescing Operator ka use krte h

// Terniary Operator 

/*
---syntax--
condition ? true : false
*/
const iceTeaPrice = 100
iceTeaPrice>=80 ? console.log("true: less than 80"):console.log("false more than 80");
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
const userEmail1 = [] 
if(userEmail1.length === 0){
  console.log("Array is empty");
}

const emptyobj = {}
if(Object.keys(emptyobj).length === 0){
console.log("Object is empty");
}

/* console m jaen toh
false == 0 then output is true

false == '' then output is true

0 == '' then output is true*/



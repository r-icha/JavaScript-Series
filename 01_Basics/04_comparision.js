console.log("2">1);// hhere one dataType is string and another is number 
console.log("02">1);

// we avoid these comparisons
console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true
// these outputs occurs because The reason is that an equality check == and comparisons > < >= <= work differently.
// comparision convert null to a number treating it as 0.
// that's why (3) null>=0 is true and (1) null>0 is false. 

console.log(undefined == 0); //output-false
console.log(undefined > 0); //output-false
console.log(undefined < 0); // output-false

// ===
// the triple equal to not only check values but it also check datatypes. iske liye dono datatype same hone chahiye
console.log("2" === 2); // false

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);// it gives us the length of a string.
console.log(balance.toFixed(2));// two decimal place tk value dega

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(2));// it gives precise value and it is roundoff value according to the number provide in()
const otherNumber1 = 123.8966
console.log(otherNumber1.toPrecision(3)) // it gives roundof value jitna bracket m number denge wahan tkhi
const otherNumber2 = 1123.431
console.log(otherNumber2.toPrecision(3));// it gives output like- 1.12e+3

const hundreds = 1000000
console.log(hundreds.toLocaleString());// here yeh comma lga dega us-standard ke hisab se but hme apne India ke according comma chahiye toh uske liye hm use krenge----console.log(hundreds.toLocaleString('en-IN'));
 console.log(hundreds.toLocaleString('en-IN'));


 // +++++++++++ MATHS +++++++++++
 console.log(Math);// when we run this line in our chrome - inspect- console- then we can find all the methods of this Math and Math ks prototype Object h

 console.log(Math.abs(-4));// here it gives absolute value output is 4 absolute m sirf negative value positive ho jati hain

 console.log(Math.abs(4));
 console.log(Math.round(4.6));// here hme yeh 4.6 ki round off value de dega output hoga 5
 console.log(Math.round(4.3));
 console.log(Math.ceil(4.2)); // ceil m agar no. jara sa bhi bda ho jaega toh aage wali jaise ki 4.2 h toh 5 aayegi.
 console.log(Math.floor(4.9));// here value thodi di bhi bdri h tb bhi same hi h value like 4.9 to iska output bss 4 hi aayega

 console.log(Math.min(4,2, 8, 9));
 console.log(Math.max(2,9, 3, 4));

 console.log(Math.random()); // Math.random ki value hmesha 0 and 1 ke beech aayegi 0 bhi hoskti h aur 1 bhi

 console.log((Math.random()*10) + 1);
 console.log(Math.floor(Math.random()*10)+1);

 const min = 10
 const max = 20
 console.log(Math.floor(Math.random() * (max - min +1)) + min)// again understand this line 

console.log(Math.sqrt(25));


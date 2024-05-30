if(true){
let a = 10
const b = 20
var c = 30
}
//console.log(a);// it gives-- ReferenceError: a is not defined
// jb isko comment krdenge toh b ke liye hm milega

//console.log(b);//it gives-- ReferenceError: a is not defined and jb is line ko comment krenge tb milega

//console.log(c);// it gives output- 30 and iski output dena ni chahiye tha kyunki loop ke wahar aana hi ni chahiye tha

/* var c= 300
if(true){
let a = 40
const b = 22
var c = 33
}
console.log(c);
krenge toh yahan hmesha output 30 hi dega jo ki wrong h */

// if ke andar jo likha h wo h block scope aur jo iske wahar h wo h global scope.
// global scope ki value block scope ke andar available hoti h
// but block  scope ke andar ki  value wahar global scope m available ni honi chahiye

/*-------------- */
let d = 300
if(true){
    let d = 10
    const e = 20
    var f = 30
    console.log("Inner: ", d);// 30
    }
    console.log
    (d);// 300

    // isme d ka value global scope m hmesha 300 rhega aur block scope m hmesha 10 hi rhega

    /*------------ */

    

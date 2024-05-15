// ****************primitive and non-primitive datatypes************//

// kis tarike se data ko memory m rakha jata h aur access kiya jata h us basis pr data ke 2 categorization hain- primitive and non-primitive

//*********PRIMITIVE*******//
// 7-types : String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // the output is false

const bigNumber = 3333333283784677673n


// REFERENCE type(Non-primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"]; //Arrays
//Objects
let myObj = {
 name: "Richa",
age: 24,
}
//Function
const myfunction = function(){
    console.log("Hello world");
}
// JavaScript is dynamically typed language or statically typed language? ----


//**************MEMORY***********************************************//
// Stack(Primitive), Heap(Non-Primitive)
 //  stack ke andar koi bhi value rakhte h toh hme copy hi milta h 
 // Heap ke andar kuch bhi valur rakhte h toh uska reference milta h
let myYoutubename = "hiteshchoudharydotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(myYoutubename); 
console.log(anothername); 
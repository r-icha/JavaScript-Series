// ****************primitive and non-primitive datatypes************//

// kis tarike se data ko memory m rakha jata h aur access kiya jata h us basis pr data ke 2 categorization hain- primitive and non-primitive

//*********PRIMITIVE*******//
// 7-types : String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // we can also define like let userEmail = undefined
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // the output is false Symbol ka kaam yhi h ki aap koi bhi value bhi same  pass krenge like string number tb bhi id and anotherId ki value same ni hogi

const bigNumber = 3333333283784677673n //BigInt example


// REFERENCE type(Non-primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"]; //Arrays
//Objects
/*{
   name: "Richa";
   age: "24"
} 
This syntax is for Objects*/

// the below syntax is for also Objects when we store our object in variable
let myObj = {
 name: "Richa", 
age: 24,
}
//Function -- Function(){} -> this is the definition of function and if we want to add this function in variable then the below synatx we use
const myfunction = function(){
    console.log("Hello world");
}

//DataTypes pta kaise kren kisi bhi value ka
console.log(typeof bigNumber);

console.log(typeof outsideTemp); // the output is object because of we find the type of our variable outsideTemp

console.log(typeof score);

console.log(typeof myfunction); // output is function but isko object function bolte hain

console.log(typeof id); // symbol ka typeof symbol hi aaata h

console.log(typeof heros); // array ka return type bhi object hi aata h

// jitne bhi non primitive type h sbka return type object hi aata h

// JavaScript is dynamically typed language or statically typed language? ---- Dynamically typed language (Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time).


//**************MEMORY***********************************************//
// Stack(Primitive), Heap(Non-Primitive)
 //  stack ke andar koi bhi value rakhte h toh hme copy hi milta h 
 // Heap ke andar kuch bhi value rakhte h toh uska reference milta h original value ka toh jo bhi change krenge wo originalvalue m change hoga
let myYoutubename = "hiteshchoudharydotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(myYoutubename); // here myYoutubename ki value is liye change ni hui bcoz copy m changes hote h stack m naki original value m
console.log(anothername);

let userOne = {
    email:"user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "hitesh@google.com" // objects ko hm dot se hi excess krte hain userTwo.email
console.log(userOne.email);
console.log(userTwo.email);
// Heap m jaenge toh hmari original value m hi changes honge

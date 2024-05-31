// iMMEDIATELY Invoked Function Expression(IIFE) 
//IIFE syntax-- (function)();

//IIFE-------Global Scope ke pollution se problem hoti h kayi bar toh us global scope ke Global variables 

// named iife
(function chai(){
    console.log(`DB CONNECTED`);
})(); // first parenthesis () is used jahan pr hm apne function ki definition likhne wale h and  second parenthesis() is used for its execution call

// unname iife
( () => {
    console.log(`DB CONNECTEd TWo`);
})();

// parameter pass kaise krenge iife m

( (name)/*aise iife m parameter pass krte h -name */ => {
    console.log(`DB CONNECTEd Three ${name}`);
})('hitesh');




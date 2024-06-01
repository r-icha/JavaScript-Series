// if statement 

/* syntax
if(condition){

}*/

/* 
if(true){

}*/


// condition true hogi toh andar ka code execute  krenge aur false hoggi toh nahi krenge

/*
if(false){

}*/ //---- agar condition false hogi toh if ke andar ka code execute hoga kya-- Ans:- toh line no. 11 se jahan tk scope h wo sara ka sara code execute nahi hota h


/* Comparision operators */
/*
<, >, <=, >=, ==
= this operator means assignment true value ko assign kiya h isUserloggedIn ke andar
!= 
=== this operators check the type of our operator
!== */

let temperature = 41
if(temperature === 50){
    console.log("temperature less than 50");
} else{
    console.log("temperature is greater than 49");
}

const score = 200
if(score> 100){
    const power = "fly"
    console.log(`User power ${power}`);
}
// console.log(`User power ${power}`);--- yahan power ka scope bss {} ke andar hi h
// var keyword use krenge to fly wahar bhi excess ho jaega isliye var use ni krte hain/\. var ka scope completely global

const  balance = 1000
if(balance > 500) console.log("test"); // it is implicit scope(man liya jata h ki scope h) iska mtlb h ki ek hi line m execute hota h hm yahan multiple lines ni likh skte h tarika h ki likh skte h

// else if

if(balance < 500) {
    console.log("less than 500");
}else if(balance < 900) {
    console.log("less than 800");
}else if(balance < 900) {
    console.log("less than 600");
}else{
        console.log("less than 800");
}


//-------------------

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
 if(userLoggedIn && debitCard && 2==2){
    console.log("Both are true");
 }
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User loggedIn");
}

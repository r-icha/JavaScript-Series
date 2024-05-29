// below are two types of object declaration
const tinderUser = new Object() //-- this  is a singleton object
 console.log(tinderUser); // it gives empty object - {}

 const tinderUser1 = {} // this is non- singleton object
 console.log(tinderUser1);// it gives empty object - {}

 //-------------------
tinderUser.id = "12abc"
tinderUser.name = "sham"
tinderUser.isLoggedIn = false
console.log(tinderUser);

// nesting of objects
const regularUser = {
    email: "richa@gmail.com",
    fullname:{
        userfullname: {
          firstname: "richa",
          lastname: "chaudhary",
        }
    }

}
// objects ko excess dot ke sth krte hain
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname); // hme hmare object ki jitni nesting open krni h utne dots lgate jaenge

//-------how can we merge two objects---------
const obj1 = {1: "a", 2: "b"} // isko console m krenge toh object ke bhhut sare method mil jaenge here keys are numbers and values are string.
const obj2 = {3: "a", 4:"b"}
const obj3 = { obj1, obj2 }// syntax to merge two objects isme ek problem aayegi ki object ke andar object aayega 
console.log(obj3);
const obj4 = Object.assign(obj1, obj2)
console.log(obj4);// we use this syntax 

// assign ke through hm objects ko assign krskte h
const obj5 = Object.assign({}, obj1, obj2)//syntax to merge two objects here {} is empty object ko target manlenge aur baki obj1 , obj2 ko source manlenge yeh syntax jyada acha h. {} yeh optinal parameter hota h. yeh {} ni denge toh sari value obj1 m hi jaengi
console.log(obj5)

// we always use the below sybtax in our code
const obj6 = {...obj1, ...obj2}// sari values ko spread kiya h phle phir obj6 m combined kiya h
console.log(obj6);

//data base se value aayegi tb hm jo syntax use krenge-- Array ke andar bhut  sare objects hain

const users = [
    {
       id: 1,
       email: "hi@gmail.com" 
    },
    {
        id: 2,
        email: "hi@gmail.com" 
     },

]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));//output;- [ 'id', 'name', 'isLoggedIn' ] so iska datatype ek array h
console.log(Object.values(tinderUser));// output--[ '12abc', 'sham', false ] isme hme values mili h object ki 

//----- kafi km use aata h below syntax ka - entries toh isme array ke andar array milta h output har ek key value ko aray m bna diya jata h phli first property key hogi and second value hogi
console.log(Object.entries(tinderUser));// output-- [ [ 'id', '12abc' ], [ 'name', 'sham' ], [ 'isLoggedIn', false ] ]

//kya hmare pass yeh value h ya ni usko check krna h toh hm below syntax ko use krenge
console.log(tinderUser.hasOwnProperty('isLoggedIn'));// true
console.log(tinderUser.hasOwnProperty('isLogged'));// false
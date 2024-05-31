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
    function one(){
        const username3 = "Richa"
        function two(){
            const website = "youTube"
            console.log(username3);
        }
        //console.log(website); -- is website ko excess ni krskte h kyunki website ka scope function two ke currly brackets ke andar hi tha bss ab isko hm {} brackets ke wahar execute ni krskte h
        two()
    }
    one()

    //jb hm nesting krte h toh jo child function parent function ke variables ko excess krpate h 

    if( true){
        const username = "richa"
        if(username === "richa"){
            const website = " youtube"
            console.log(username + website);
        }
        // console.log(website);--- yeh denge toh bss richa youtube ourput aaye uske bd error aayenge
    }
  //   console.log(username); --- yahan bhi error aayega kyunki userbname ke scope se wahar hm username ko print ni krwa skte h

/* ------------------Interesting---------------- */
    
function addone(num){
 return num+1
}
addone(5)


const addTwo = function(num){
    return num+2
}
addTwo(5)

// upar jaise function bnae h aise dono tarike se function bn skta h




//-------------
console.log(addonee(5));// addonee ko hm yahan bhi call skte h apne function se phle
function addonee(num){
    return num+1
   }
  // addone(5)
   
   
   const addTwoo = function(num){
       return num+2
   }
   addTwo(5)

//---------- IMPORTANT ------------

   console.log(addoneee(5));// addonee ko hm yahan bhi call krskte h apne function se phle below syntax ki wajah se
function addoneee(num){
    return num+1
   }
  // addone(5)
   
  // addTwooo(5) // yahan yeh error dega kyunki hme neeche wale syntax ka dhyan rakhna pdega jb syntax aise higa toh function ko call function ke khatam hone ke bd krenge naki phle
   const addTwooo = function(num){// yahan hmne declaration ke sth sth ek variable m hold bhi kiya h
       return num+2
   }
   console.log(addTwooo(5));
   





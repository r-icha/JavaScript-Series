const user = {
    username: "richa",
    price: 999,

    welcomeMessage: function(){
      //  console.log(`${this.username} , welcome to website` );// jb bhi current context ko refer kre h chahe username ho ya price toh uske sth lgate h this keyword ko.
        //current context ka mtlb jitne is block{} ke andar ke jitne bhi variables unko excess krne ke liye this keyword lga denge
        //console.log(this);//-- 
} 

}
//user.welcomeMessage()
//user.username = "sham"
//user.welcomeMessage()

//console.log(this); //yahan this refer krra h( it gives -- {}) here yeh node environment ke andar h toh hmara this refer krra h ek empty object ko  toh yeh ek empty object ko dera h .aur yahan hm upar wali line 12, 13, 14 wale console log ko comment krdenge.


// console.log(this); - isko agar browser m jake console m run krenge toh wahan yeh {} ni milega dega wahan yeh window dikhaega aisa isliye h kyunki phle ke time pr hm JS ko sirf browser ke andaar hi execute krskte the aur jo engine h jo JS ko execute krta tha wo simple bss browser m paya jata tha browser ke andar aB hmne us engine ko NIKALA  kr alag alag nam dia h jaise ki node, deno, bun etc.  aur ab hmare pass engine standalone h

//browser ke andar jo global object h wo  window object h isi ki help se hm windows ke sare event capture krpate h jaise click ho gya form submit ho gya etc.---------------------INTERVIEW



//----------------------------------------------------------//
function chai(){
    console.log(this);
}
//chai()

function chai1(){
   let  username = "richa"
    console.log(this.username);
}
chai1() // it gives undefined

// --- function ke andar yeh this wala context work ni krta h yeh bss object ke andar hi work krra h

const chai2 = function(){
    let username = "richa"
    console.log(this.username);
}
chai2()// it gives undefined



// ------------ Arrow function-----------------

const chai3 = ()=>{
    let username = "sir"
    console.log(this);//---- it gives {}
}
chai3()

// syntax of Arrow function :- () => {}
// is arrow function ko hm variable ke andar bhi hold krskte h aur () ke andar hm apne parameters dete h
const addTwo= (num1, num2) =>{
    return num1+ num2
}
console.log(addTwo(3, 4));// 7

// Implicit return - isme hme parenthesis use ni krne hote hain aur return ko bhi hta dete h  baki cheezon ko same line m likh dete h -- yeh hm use krte h jb ekhi line ka statement dena hota h 
const addTwo1 = (num1, num2)=> num1+ num2
console.log(addTwo(9, 4));


const addTwo2 = (num1, num2)=> (num1+ num2)// yahan agar () yeh lga denge parameter ke liye toh hme return ni likhna pdega but {} yeh bhi use krenge toh return dena pdega
console.log(addTwo2(9, 8));

// explicit return- isme hme jabarjasti return lgana hota h 

const addTwo3 = (num1, num2)=>{username: "Amit"}
console.log(addTwo3());// here it gives undefined isliye ayyi kyunki hm object ko is trh se return ni krskte h {username: "Amit"} uske liye hme usko () wrap krna hi pdega bhi use krne honge. yeh object return krne ka shi syntax ni h neeche wala syntax object ko retuen krne ka shi syntax h

const addTwo4 = (num1, num2)=>({username: "Amit"})
console.log(addTwo4());// this is the corrct synatx for  object return






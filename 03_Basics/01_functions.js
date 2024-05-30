// Syntex of function 
//function sayMyName(){}-- function is a keyword and SayMyName is function name

function sayMyName(){
    console.log("R");
    console.log("I");
    console.log("C");
    console.log("H");
    console.log("A");
}
sayMyName() // sayMyName is reference of function and if we want to execute our function than we use () and () is the execution.
//----------------
function addNumbers(){
   const a = 1
   const b = 2
   const c = a+b
   console.log(c) ; 
}
addNumbers()
//-----------
function addTwoNumbers(number1, number2)/*number1 and Number2 are parameters . jb hm function ki defination bnate h usme jo bhi input lete hain usko parameter bolte hain */{
console.log(number1 + number2);
}
addTwoNumbers()//output- NaN here we are not providing arguments
addTwoNumbers(2, 3);// 2,3 are arguments output - 5 and jb function ko call kraya jata h tb uske andar jo value pass krate h usko bolte h arguments
addTwoNumbers(3, "4")//34
addTwoNumbers(3, "a")// 3a
addTwoNumbers(3, null)// 3

//--------------

function addTwoNum(number1, number2){
    console.log(number1 + number2)
}
const result = addTwoNum(3, 5)// 8
console.log("Result is:", result);// it gives output Undefined


// ------------------------
function addNum(number1, number2){
    let result1 = number1 + number2
    return result1
    //console.log("RICHA"); --- yeh line kbhi execute ni hogi because by default function ki definition ka rule hota h ki return ke bd hmara function koi kaam ni krega uske neeche next jo bhi line hogi wo uspr jaega hi ni. yeh console.log("RICHA"); agar return ke upar hoga toh print hoga
}
const result1 = addNum(2, 4)
console.log("Result1 is:", result1)

//-------- aise bhi function ko likh skte h
function add(num1, num2){
    return num1+ num2
}
const result2 = add(2, 7) // retutn krenge toh hm usko kisi variable m store krskte h sirf consoli.log se ni krskte h 
console.log("REsult2 is:", result2); 

// arguments and parameters aur kitne type se leskte h
 function loginUserMessage(username){
    return `${username}just logged in`
 }
 loginUserMessage("Richa") // here it not give  any output but function execute hua h and function ne value return krdi h but hmne yeh ni bola ki is value ko khin print kro
 console.log(loginUserMessage("Richa") );// ab print krdega yeh kyunki istruction di h print krwane ki  
 console.log(loginUserMessage(" ") ); // just logged in - jb hm empty string denge tb
 console.log(loginUserMessage() );// output:- undefined just logged in jb hm kuch bhi ni denge toh argument m undefined aayega null nahi

 //-------


 
 // -----------
function loginUserMessage1(username1){
    if(username1 === undefined ){
        console.log("please enter a username");
    }
    return `${username1}just logged in`
}

console.log(loginUserMessage1());

//--------return `${username1}just logged in` -- yeh line execute na usek liye hm kua krenge iss line se phle jo neeche if statement use ki h usme return likh denge


//===============
function loginuserMessage3(username3 = "sham")/*here we give default value sham*/{
    if(!username3){
        console.log("please enter a username");
        return
    }
    return `${username3} just logged in`
}
console.log(loginuserMessage3());// argument ni denge toh jo parameter m username3 ki value di h whi output m aayegi aur tb hmhara if check ni hoga
console.log(loginuserMessage3("Richa")); //argument m value denge toh jo value di h whi output aayegi

//if(username1 === undefined ) {} and if(!username3) {} both are same


// like shping cart jisme hme pta hi ni hota h ki kitne items user add krregA TOH -- jahan hme pta ni hota h ki kitni arguments aane wale toh us hisab se hme apne parameters taiyar krne hote h
function calculateCartPrice(num5){
return num5
}
console.log(calculateCartPrice(3));
console.log(calculateCartPrice(300, 400, 500));// here hm bhut sari values pass krre h but only first value add hogi baki ki nhi -- 300

// agar hm chahate h ki aur bhi price add ho hmare cart m toh hm use krenge

//------- upar wali problem ko solve krne ke liye we use rest operator (...) three dots are rest operator yeh operator kya krta h sari values ko ek bundle m bandh ke de deta h
function calculateCartPrice1(...num6){
    return num6
    }
    console.log(calculateCartPrice1(300, 400, 500));// isse ek array milega

    //-----------
    function calculateCartPrice2(val1, val2, ...num7){
        return num7
        }
        console.log(calculateCartPrice2(300, 400, 500, 2000));//here output is-[500, 2000] wo isliye kyunki 300- val1 lo h and 400-val2 li h and baki jitni rest value bachi wo rest operator (...num7) m store hongi  

        //----use of objects in functions and how can we pass our objects in functions
        const user={
           username6: "Richa",
           price: 99 
        }
        function handleObject(anyobject){
            console.log(`username is ${anyobject.username6} and price is ${anyobject.price}`);
        }
        handleObject(user)

        
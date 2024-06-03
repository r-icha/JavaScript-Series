const coding = ["js", "ruby","python", "cpp", "java"]
const values = coding.forEach((item)=>{
console.log(item);
})
console.log(values);

// forEach loop koi bhi value return ni krta h


//------filter :- filter hme values return krdeta h ------
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum = myNums.filter((num) => num>4) // is syntex m khud hi return ho jata h
console.log(newNum); // OUTPUT:- [ 5, 6, 7, 8, 9, 10 ]

//const newNum = myNums.filter((num) => num>4)------- JB HM FILTER USE KRTE H USKE ANdar call back function milega jisme ki anadr har value ko each excess kiya jaega lekin uske bd hme deni pdti h ek condition(jo ki isme h num>4) jo jo is condition ko satisfied krenge aur true hogi condition wo wo value return ki jaengi otherwise wo value ni return ki ajengi 

const myNums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum1 = myNums.filter((num) => {
    num>4
})
console.log(newNum1); // it gives [] an empty array aur yeh isliye h kyunki hm upar parenthesis lgare the toh khud return hora tha but iswali m hmne {} yeh lga diye h toh hmne ek scope start krdia iski wajah se hme return keyword likhna hi pdega dena pdega correct iska solution neeche h

const myNum2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum2 = myNums.filter((num) => {
   return num>4
})
console.log(newNum2); // [ 5, 6, 7, 8, 9, 10 ]

//------yeh aur filter wala dono same hi h koi bhi use krskte h------
const myNums3  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = []
myNums3.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);

//---------

//-----------

//----map function:- this is a back function---
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 const newnumm = myNumbers.map((num) => num+10)
 console.log(newnumm);

 const myNumbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 const newnumm1 = myNumbers.map((num) => {
     return num+10})
 
 console.log(newnumm1);

 

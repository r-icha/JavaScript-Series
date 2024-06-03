// reduce method
const myNums = [1, 2, 3]
const myTotal = myNums.reduce(function (accumulator, currentvalue){
    console.log(`accumulator value: ${accumulator} and CurrentValue${currentvalue}`)
    return accumulator + currentvalue
}, 0)// yahan jo zero h wo hm accumulator ko dere h ki phli bar accumulator ki value zero hogi bd m wo change hoti jaegi 
console.log(myTotal); // 3+3 = 6 yeh last m output aayega
// current value jo h wo sbse phle 1 h phir 2 h and pjjhir 3 h array ki har ek value pr jaenge toh wo uski current value hogi


/* --Arrow function se aise hoga reduce function use--  */
const myNums1 = [1, 2, 3]
const myTotal1 = myNums1.reduce((acc, currval) => acc+currval, 0)
console.log(myTotal1);
// accumulator starting value is 0 and current value is 1


//-------shopping cart---
const shoppingCart = [
    {
        itemName: "Js course",
        price: 2999
    },
    {
        itemName: "Python course",
        price: 3999
    },
    {
        itemName: "DSA course",
        price: 29999
    },
]
// yeh jo shopping card ke andar jitne prices h un svko add krdo
const pricetoPay = shoppingCart.reduce((acc, item) => acc + item.price, 0 )
console.log(pricetoPay);

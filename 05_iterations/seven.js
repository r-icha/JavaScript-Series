//---- chaning :- two three methods ko ek sth lgate h usko chaning khte h
const myNumbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum3 = myNumbers3
              .map((num) => num*10) // phle is pr aayenge toh yahan value hongi - [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
              .map((num) =>num+1)// yahan value ho jaengi [11, 21, 31, 41, 51, 61, 71, 81, 91, 101]
              .filter((num) => num>=40)// here 40 ya usse bde value hongi and is line m jo hoga whi putput m print hoga [41, 51, 61, 71, 81, 91, 101]
console.log(newNum3);// output:-- [41, 51, 61, 71, 81, 91, 101]

 

const name ="richa"
const repoCount = 20
console.log(name + repoCount + " value"); // this is the old syntax
 
// we use backticks -> that is near button to 1, is new way se strinko ko likhne ko string interpolation bolte h hm isme  bnate h direct place holders unke andar jo bhi variable h usko direct inject krskte hain
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 

//declaration of sting aise bhi ho skta h
const gameName = new String('richac')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());// here we use method toUpperCase() - isme hmare string uppercase m likh ke aayegi
console.log(gameName.charAt(2));// is method m hm define krte h ki kis position pt kon sa character h
console.log(gameName.indexOf('i'));// yeh method btata h ki i ki position kya h

const newString = gameName.substring(0, 4) //substring m negative range nhi le skte hain
console.log(newString);

const anotherString = gameName.slice(-6, 3) // slice m negative range le skte h 
console.log(anotherString); 

const newStringOne = "  richa "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim ko hm use krte h starting and ending space ko remve krne ke liye

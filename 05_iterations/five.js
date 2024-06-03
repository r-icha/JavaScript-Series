const coding = ["js", "ruby", "java", "python"]// is line ko console m likhenge toh iske aur prototype mil jaenge

coding.forEach( function (val){
console.log(val);
})

//-------------
coding.forEach((item)=> {
console.log(item);
})

//----
function printme(item){
    console.log(item);
}
coding.forEach(printme)

//------
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "Js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "ruby",
        languageFileName: "ry"
    },

]

myCoding.forEach((item) =>{
    console.log(item.languageName);
})
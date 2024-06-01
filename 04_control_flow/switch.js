/* -----Syntax of switch

switch (key){    //key :- wo value h jisko hme check krna h
    case value:
        break;
        default:
            break;
}

*/ 

const month = 3
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("FEB");
        break;
    case 3:
        console.log("March");
        break;
        default:
            console.log("Not a month");
            break;    
        
}


const month1 = "mar"
switch(month1){
    case "jan":
        console.log("1");
        break;
    case "feb":
        console.log("2");
        break;
    case "mar":
        console.log("3");
        break;
        default:
            console.log("Not a month");
            break;    
        
}

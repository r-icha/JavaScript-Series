const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heroes  = ["Superman", "flash", "batman"]
 //marvel_heros.push(dc_heroes)// isme lgta aisa h ki dono array merge ho jaenge but yeh kya krta h array ke andar array dedeta h
// console.log(marvel_heros);//[ 'thor', 'Ironman', 'Spiderman', [ 'Superman', 'flash', 'batman' ] ]

 const allHeros = marvel_heros.concat(dc_heroes)//Combines two or more arrays. This method returns a new array without modifying any existing arrays.
 console.log(allHeros);//[ 'thor', 'Ironman', 'Spiderman', 'Superman', 'flash', 'batman' ] yeh output tbhi aayega jb upar ki 3 and 4 line ko comment krdenge anhi toh output m gadbadi hogi.


 //********Spread Operator********
 // yeh same concat ki trh hi work krta h but isko prefer hm jyada krenge apne code m
 const all_new_heros = [...marvel_heros, ...dc_heroes]
 console.log(all_new_heros);

 //******flat*****
 const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
 const real_another_array = another_array.flat(Infinity)//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. and depth baise toh exact btani chahiye but infinity depth m de denge toh wo khudse hi smjh lega ki kitne depth tk jana h 
 console.log(real_another_array); 

 console.log(Array.isArray("Richa")); // here it gives output - false because yeh string array nhi ho skti h but isko hm array bnaa skte h
 console.log(Array.from("Richa"));// Creates an array from an iterable object. here it makes Richa as an array so output is---[ 'R', 'i', 'c', 'h', 'a' ]

 console.log(Array.from({name: "Richa"}));// here it gives an empty array because {name: "Richa"} yeh is string ko array ni bna skta h and aise array ko bnane ke liye phle dena pdega ki keys ka array bnaun ya sirf iske values ka array bnaun agar array  ni bna paega toh empty string dega-------------------important for interview

 let score1 = 100
 let score2 = 200
 let score3 = 300
 console.log(Array.of(score1, score2, score3));//Returns a new array from a set of elements.



// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);






console.log("2" > 1);   //while comparing two or more values make sure that they are of the same data type.. => in this case the answer is true bcs it converts the string "2" to number
console.log("02" > 1);   // => here also the answer is true



//the below comparisons always create confusions so its best to avoid these types of comparisons
console.log(null > 0); // => false
console.log(null == 0); // => false
console.log(null >= 0); // => true

//for the above comparison cases the above two cases give false while the third gives true as an answer that is because equality check(==) and comparison check (> < >= <=) work differently

//comparison convert null to a number, treating as 0 that's why 
//(3)null >= 0 is true and (1) null > 0 is false

console.log(undefined == 0);  //false for all three cases
console.log(undefined > 0);
console.log(undefined < 0);




// === strictly check 
// the strictly check operator not only checks the value but also checks is the data types are also same

console.log("2" == 2); //true because "2" str is converted to 2 num and is equal  
console.log("2" === 2); // false because "2" is a string and 2 is a number

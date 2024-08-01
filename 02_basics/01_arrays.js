//Arrays

//ways to declare an array
const myArr = [0, 1, 2, 3, 4, 5]

const Heros = ["Iron Man", "Spiderman"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[2])

//Array Methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

//myArr.unshift(8) //adds an element to start of array by shifting all the other array elements

// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()  //join adds all elements of array into a string, type conversion

// console.log(myArr);
// console.log(newArr);

// Slice and Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 4); //slice returns a shallow copy of a portion of an array into a new array object from start to end (start, end) where end is not included

console.log("Slice => ", myn1);
console.log("Array after Slice => ", myArr);

const myn2 = myArr.splice(1, 4);
console.log("Splice => ", myn2);
console.log("Array after Splice => ", myArr); // in splice, original array is manipulated,  the selected portion of array is removed from original array
 
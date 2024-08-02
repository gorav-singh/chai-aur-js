const marvel_heros = ["Ironman", "spiderman", "thor"];
const dc_heros = ["superman", "batman", "flash"];

//marvel_heros.push(dc_heros);   //this takes the entire dc_heros array as a single element and pushes it into the marvel_heros array, another thing is that 'push' works on the original array itself

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);


//Array Concat
// const allHeros = marvel_heros.concat(dc_heros);  //"concat" method adds two or more arrays and returns a new array
// console.log(allHeros);

//Spread method  => spread is another method of adding two or more arrays and is one of the easier methods 

const all_new_heros =  [...marvel_heros, ...dc_heros];
//console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7]];
const usable_another_arr = another_array.flat(Infinity); //here flat returns a new array with all the sub-array elements inserted recursively upto a defined depth (here depth is given Infinity which is not the best/optimal depth)
// console.log(usable_another_arr);


console.log(Array.isArray("Gorav")) //checks whether the given data is an array or not
console.log(Array.from("Gorav")) //converts the given data into an array
console.log(Array.from({name:"Gorav"})) //interesting case => in this we have taken an object with a key and a value but we have not defined what to use to form an array (whether to form an array from key or value hence it gives an empty array)

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));



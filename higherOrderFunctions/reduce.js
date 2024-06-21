// Try to solve using reduce only
/// initial syntax :- let TtSum = mynums.reduce(function(preVal , currVal){} , iniVal);
//  1. Write a function that takes an array of numbers and returns the sum of all the numbers.
let  mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ];

// const iniVal = 0;
// let TtSum = mynums.reduce(function(preVal , currVal){
//     preVal = preVal+currVal;
//     return preVal;
// } , iniVal);

// console.log(TtSum);




//  2. Write a function that takes an array of numbers and returns the product of all the numbers.
const iniValforPro = 1;
// let TtPro = mynums.reduce(function( preVall , currVall){
//     preVall = preVall*currVall;
//     return preVall;
// } , iniValforPro);

// console.log(TtPro);




//  3. Write a function that takes an array of numbers and returns the average of those numbers.

let Avg = mynums.reduce(function(preValll , currValll , currIndex){
    preValll = preValll+currValll;
    const res = preValll/currIndex;
    return res;
} , iniValforPro)

console.log(Avg);

/// yeh undefined kiu aaraha hai ?

// lets try to add all the ages in an object using reduce 

const People = [
		{ name: "Angelina Jolie", age: 80 },
		{ name: "Eric Jones", age: 2 },
		{ name: "Paris Hilton", age: 5 },
		{ name: "Kayne West", age: 16 },
		{ name: "Bob Ziroll", age: 100 },
        { name: "Shahima", age: 23 },
		{ name: " Chandu", age: 25 },
		{ name: "Aqib", age: 12 },
		{ name: "Aadil", age: 18 },
		{ name: "Rosy", age: 27 }
	]

 let sumOfAllAges = People.reduce((prevPersonAge , person) => (prevPersonAge+person.age) , 0);
 console.log(sumOfAllAges);

 // yeh to thik hai ... upar wale ka kuch karo 
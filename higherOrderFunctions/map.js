// Try to solve using map only
//  1. Write a function that takes an array of numbers and returns an array where each number is squared.


// let  mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ];
// trying new syntax originatinating from my brain 
//  mynums = mynums.map((num) => {
//     const res = num*num;
//     return res;
// })
// console.log(mynums);

// reducing shit 
// const squaredd = mynums.map((num) => (num * num)); // could have used mynums to reduce var space
// console.log(squaredd); 

//  2. Write a function that takes an array of strings and returns a new array with all strings converted to uppercase.

// let  names = ["Rosyyy" , "Chanda" , "Shahima" , "khushii" , "sam" , "dam" ,"lam" , "kuku" , "reen" , "Aqib" , "Aadil"]
// names = names.map((nm)=>{
//     const res = nm.toUpperCase();
//     return res;
// });

// tyring to shorten it 

// names = names.map((num)=>(num.toUpperCase()))
// console.log(names);


//  3. Write a function that takes an array of strings and returns an array containing the lengths of those strings.
// let  names = ["Rosyyy" , "Chanda" , "Shahima" , "khushii" , "sam" , "dam" ,"lam" , "kuku" , "reen" , "Aqib" , "Aadil"]
// const lntgh = names.map((nm) => (nm.length));
// console.log(lntgh); // will try to solve in as less time as possible 

//  4. Write a function that takes an array of numbers and returns an array where each number is increased by its index in the array.
let  mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 let incIndex = mynums.map((nm , index) => (index++));
 console.log(incIndex);


//  5. Write a function that takes an array of numbers and returns an array with all values doubled.
 
 let dubINdex = mynums.map((nm) => (nm*2));

// also this is possible if u want syntax more diagnostic 

dubINdex = mynums.map((nm) => {
     const res = res*2;
     nm = res;
     return nm;
})
 


/// there is also something know as method chaining where we can use multiple map and filter and 
//any other arbitary methods together to get the desired result by chaining methods
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20,30,40,30,]
const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ]
const array2  = [ 1 , 9 , 4 , 5 ,8 , 2, 7 , 3 ,6 , 10] 


// Try to solve using filter only

//  1. Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
// const result = array.filter((i) => i>6);
// console.log(result);


// lets make it a littel more intiutive 
// const nums = mynums.filter((num)=>(num>3));
// console.log(nums);

//  2. Given an array of numbers, return a new array that only includes the even numbers.
// one more important thing we need to remember is that we have opned ethe socope here
// by using curly braces hence we will need to use the "return" keyword to return the result 
// const result1 = array.filter((i) => {
//     const mod = i%2;
//     if(mod == 0){
//         return i;
//     }else{      // the else function was not needed however just to maintain clarity 
//         return null;
//     }
// })
// console.log(result1)


// again lets make it more intutive 
const nums = mynums.filter((num) =>{
    const mod = num%2;
    if(mod ==0 ){
        return num;
    }
})
console.log(nums);



//  3. Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
// const names = ["Rosyyy" , "Chanda" , "Shahima" , "khushii" , "sam" , "dam" ,"lam" , "kuku" , "reen" , "Aqib" , "Aadil"]
// solution 
// const namesLessthan5 = names.filter((nm) => (nm.length <= 5));
// console.log(namesLessthan5);
// yeh kiya hai to yeh bhi kr lete hai !
// const namesGreaterthan5 = names.filter((nm) => (nm.length >= 5));
// console.log(namesGreaterthan5);


//  4.  Make a filtered list of all the people whose age is greater than 18.
	// const People = [
	// 	{ name: "Angelina Jolie", age: 80 },
	// 	{ name: "Eric Jones", age: 2 },
	// 	{ name: "Paris Hilton", age: 5 },
	// 	{ name: "Kayne West", age: 16 },
	// 	{ name: "Bob Ziroll", age: 100 },
    //     { name: "Shahima", age: 23 },
	// 	{ name: " Chandu", age: 25 },
	// 	{ name: "Aqib", age: 12 },
	// 	{ name: "Aadil", age: 18 },
	// 	{ name: "Rosy", age: 27 }
	// ]

    // const Adults = People.filter((person) => (person.age >= 18));
    // console.log(Adults);





//  5. Write a function that takes an array of numbers and returns a new array with only the numbers that are greater than 10.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20,30,40,30,]

// const numberGreaterThan10 = numbers.filter((numberr) => (numberr >10));

// console.log(numberGreaterThan10);


// Part 1 done !
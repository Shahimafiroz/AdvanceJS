// 1. Numeric Conversion

let score = 33;
let score1 = "shahima";
let socre2 = "33abc";
let score3 = null;

let valInNumber = Number(score1);

// console.log(typeof score);
// console.log(typeof score1);
// console.log(typeof valInNumber);
// console.log(valInNumber);

// NaN - Not a Number  ||  0- when conversion dosent happen for null then output is 0

// 33 => 33
// 33abc => NaN (although the type is a Number in JS )
// true => 1 ; false => 0

// 2. Boolean Conversion

let IsloggedIn = "Shahima";
let IsloggedIn1 = 1;
let IsloggedIn2 = "";
let booleanTypeConv = Boolean(IsloggedIn);

// console.log(typeof booleanTypeConv, booleanTypeConv);

// 1 => true ; 0 => false
// "" => false
// "Shahima" => true

// 3. String Conversion (why String to number conversion is confusing?)

let someNumber = 33;

let StringTypeConv = String(someNumber);
// console.table([StringTypeConv, booleanTypeConv, valInNumber]);
// console.log(typeof StringTypeConv, StringTypeConv);

// *******************************************************    OPERATIONS      *********************************************** //



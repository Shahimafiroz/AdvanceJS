

//  lets do a question on our own exploring method chaining 
// tak an array of numbers and for - all the numbers greater than 5 , square them , and add the sum of their squares and display it as result 


let  mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ];

let result = mynums
               .filter((nm)=>(nm>5))
               .map((nm)=>(nm*nm))
               .reduce(function(prev , nm){
                prev = prev+nm;
                return prev
               } ,0 );
console.log(result);


               // lets see if our method chain works 

            //    console.log(result);

            // didnt work lets try a small chain


// let smallChain = mynums.filter((nm) => (nm > 5)).map((nm) => (nm*nm));
// console.log(smallChain);

// okay this works !! the whats wring with reduce ?


// let result = smallChain.reduce(function(prev , n ){ return prev = prev+n} , 0);
// console.log(result);


// let  mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ];

// mynums.reduce((acc, curr) => {
//     acc = acc + curr // 1


//     return acc
// }, 0) 


// BRO U FORGORT TO RETURN !!
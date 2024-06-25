// guess a randomn number  -> 


// function match (){
// // const randomNUmber = Math.floor(Math.random() *10);
// const randomNUmber= 2;
// console.log (randomNUmber);
// let input = document.getElementById(random);
// const compareInput = input.value;
// if (compareInput === randomNUmber){
//     const result = document.createElement("h1");
//     result.textContent ="Yaayayayay Matched!!! Good guess"
//     document.body.appendChild(result);
// }else{
//     const result = document.createElement("h1");
//     result.textContent ="Better luck Next time !"
//     document.body.appendChild(result);
// }
// }


// function match() {
//     let input = document.getElementById("inputt");
//     console.log(input.value);
//     const val = input.value;
//     const dsplay = document.createElement('h1');
//     dsplay.innerText = val;
//     // dsplay.outerText = val;
//     // dsplay.textContent =val;
//     document.body.appendChild(dsplay);
   
// }




function  match( ){
    // generrating a random number 
     let random = Math.floor(Math.random() * 10);
     console.log(random);
     // catching  the input 
     let input = document.getElementById("inputt"); // document.getElementById
     let extractedInputValue = input.value;

     console.log(random, extractedInputValue)
    //  console.log(input);
    //  console.log(extractedInputValue);
     //comparing the generated random number and input & consequently displaying the output on the document 
     if(random == extractedInputValue){
        const result = document.createElement('h1');
        result.textContent = "Matched !!"
        document.body.appendChild(result);
     }else{
        const result = document.createElement('h1');
        result.textContent ="Opps!"
        document.body.appendChild(result);
     }
     //complete 
}

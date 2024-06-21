
// https://jsonplaceholder.typicode.com/todos

const { error } = require("console");



// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response =>response.json())
// .then(data => console.log(data.userId))
// .catch(error=>console.log(error));

// we are getting an undefined object cause getting all the ids would need some time to be displayed and js is synchronous 

// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response =>{
//     if (!response.ok){
//         throw new Error("could not fetch");
//     }
//     return response.json();
// })
// .then(data => console.log(data.userId))
// .catch(error=>console.log(error));

// the id itself is not getting logged in because of the  reason i stataed above


async function fetchUserIdAndTitle(){

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        const data = await response.json();

        if (response.ok){
           const userIds = await data.map((user)=> (user.userId));
           const titles = await data.map((user) => (user.title));
           
          
          console.log(data);
          console.log(userIds);
          console.log(titles);
        }else{
            throw  new Error("Respopnse error !")
        }
    }catch(error){
        console.log(error);
    }


}

fetchUserIdAndTitle();

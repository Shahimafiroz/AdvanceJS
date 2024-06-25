

// document.getElementById("Posts").addEventListener("click" , gettingUserPosts);



async function gettingUserPosts(){

    try{

       const postsUrlResponse = await fetch ('https://jsonplaceholder.typicode.com/posts');
       const postData =  await postsUrlResponse.json();
       if(postsUrlResponse.ok){
        console.log(postData);
        return postData;
       }else{
         throw new Error ("RESPONSE ERROR !");
       }

    }catch(error){
        console.log(error);
    }

}

gettingUserPosts();
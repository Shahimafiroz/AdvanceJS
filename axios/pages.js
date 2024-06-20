/* (not from the official doc) but from a blog what i know about axios is :
1. we dont seprately need to convert it into json (its automatically done)
2. error handling --> this one not clear though
https://medium.com/@thejasonfile/fetch-vs-axios-js-for-making-http-requests-2b261cdd3af5
 */

import axios from "axios";

// const postElement = document.getElementById("posts");
// postElement.addEventListener("click");

// window.getUserPosts = getUserPosts;
// async function for getting posts
async function getUserPosts() {
  try {
    const userPosts = await axios("https://jsonplaceholder.typicode.com/posts");
    console.log(userPosts);
    const IdAndPost = await userPosts.map((user) =>
      console.log(user.id, user.body)
    );
    console.log(IdAndPost);
  } catch (error) {
    console.log(error);
  }
}
// calling the function
getUserPosts();

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
document.getElementById(posts).addEventListener(onclick(), getUserPosts());

async function getUserPosts() {
  try {
    const res = await axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts",
    });
    const users = res.data;
    // console.log(users);
    const postsAndId = users.map((obj) => {
      return { id: obj.id, body: obj.body };
    });

    console.log(postsAndId);
    return postsAndId;
  } catch (error) {
    console.log(error.confg);
  }
}

// Attach the getUserPosts function to the window object to make it global
window.getUserPosts = getUserPosts;

// calling the function
// getUserPosts();

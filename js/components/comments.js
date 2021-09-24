const commentContainer = document.querySelector(".comment-container");

const queryStringComment = document.location.search;
const paramsComment = new URLSearchParams(queryStringComment);
const id = paramsComment.get("id");

const urlComments = `https://monicamunkvoldnikolaisen.no/treehugging/wp-json/wp/v2/comments?&posts=${id}/`;

async function getComments() {
  try {
    const response = await fetch(urlComments);
    const results = await response.json();
    console.log(results);

    commentContainer.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
      commentContainer.innerHTML += `<div class="comment-container">${results[i].content.rendered}</div>`;
    }
  } catch (error) {
    //console.log("something very strange here...");
  }
}
getComments();

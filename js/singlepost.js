const overlay = document.getElementById("overlay");
console.log(overlay);

const title = document.querySelector("title");

const singlePostContainer = document.querySelector(".singlepost");

//singlePostContainer.innerHTML = "whatever";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
//console.log(id);
//const relatedContainer = document.querySelector(".related");
const url = "https://monicamunkvoldnikolaisen.no/treehugging/wp-json/wp/v2/posts/" + id;
/* const url = `https://monicamunkvoldnikolaisen.no/treehugging/wp-json/wp/v2/posts/${id}?_embed`; */
//console.log(url);

async function getSinglePost() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    console.log(results);
    document.title = results.title.rendered;
    createHTML(results);
  } catch (error) {
    console.log("something is just not right");
    //singlePostContainer.innerHTML = displayError("Oh dear, something isn't working...");
  }
}
getSinglePost();

function createHTML(results) {
  console.log("just hlhl");

  singlePostContainer.innerHTML = `<div class="singlepost"><h1>${results.title.rendered}</h1><div>${results.content.rendered}</div></div>`;

  const openModal = document.querySelector(".wp-block-image");
  console.log(openModal);
  openModal.addEventListener("click", function () {
    console.log("image clicked");
    overlay.style.display = "block";
    overlay.innerHTML = `<div id="modal"><div>${results.content.rendered}</div></div>`;
  });
  window.addEventListener("click", function (event) {
    if (event.target == overlay) {
      /* console.log("close x clicked"); */
      overlay.style.display = "none";
    }
  });
}

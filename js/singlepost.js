const overlay = document.getElementById("overlay");
const title = document.querySelector("title");

const singlePostContainer = document.querySelector(".singlepost");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://monicamunkvoldnikolaisen.no/treehugging/wp-json/wp/v2/posts/" + id;

async function getSinglePost() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    document.title = results.title.rendered;
    createHTML(results);
  } catch (error) {
    singlePostContainer.innerHTML = displayError("Oh dear, something isn't working...");
  }
}
getSinglePost();

function createHTML(results) {
  singlePostContainer.innerHTML = `<div class="singlepost"><h1>${results.title.rendered}</h1><div>${results.content.rendered}</div></div>`;

  const openModal = document.querySelector(".wp-block-image");

  openModal.addEventListener("click", function () {
    overlay.style.display = "block";
    overlay.innerHTML = `<div id="modal"><div>${results.content.rendered}</div></div>`;
  });
  window.addEventListener("click", function (event) {
    if (event.target == overlay) {
      overlay.style.display = "none";
    }
  });
}

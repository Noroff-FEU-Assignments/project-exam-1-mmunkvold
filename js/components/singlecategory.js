//const title = document.querySelector("title");

const singleCategoryContainer = document.querySelector(".singlecategory");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
//console.log(id);

//const url = "https://monicamunkvoldnikolaisen.no/treehugging/wp-json/wp/v2/posts?categories=2/";
const url = "https://monicamunkvoldnikolaisen.no/treehugging/wp-json/wp/v2/posts?categories/" + id;
console.log(url);

async function getCategoryPosts() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    singleCategoryContainer.innerHTML = "";
    //document.title = results.title.rendered;

    for (let i = 0; i < results.length; i++) {
      console.log(results);
      //createHTML(results);
      singleCategoryContainer.innerHTML = `<div class="singlecategory"><p>Just whatever here</p><h2>${results[i].title.rendered}</h2><div></div></div>`;
    }
  } catch (error) {
    console.log("something is just not right");
    //singleCategoryContainer.innerHTML = displayError("Oh dear, something isn't working...");
  }
}
getCategoryPosts();

/* function createHTML(results) {
  console.log("just hlhl");

  singleCategoryContainer.innerHTML = `<div class="singlecategory"><p>Just whatever here</p><h1>${results.title.rendered}</h1><div></div></div>`;
} */

// Search bar
const searchResultsContainer = document.querySelector(".search-result");
const searchButton = document.querySelector(".search-btn");

/* searchButton.addEventListener("click", function () {
  window.location = "http://www.google.com/search?q=site:monicamunkvolnikolaisen.no/treehugging " + document.querySelector(".search").value;
  return false;
}); */
/* document.getElementById("search-form").onsubmit = function () {
  window.location = "http://www.google.com/search?q=site:monicamunkvoldnikolaisen.no/treehugging " + document.getElementById("search").value;
  return false;
}; */
// sjekk ut denne linken: https://rachelaemmer.medium.com/how-to-create-a-search-bar-in-a-basic-javascript-application-f031848079e9

/* fetch("https://monicamunkvoldnikolaisen.no/treehugging/wp-json/wp/v2/posts?per_page=100&_embed")
  .then((response) => response.json())
  .then((posts) => {
    createPostCards(posts);
    filteredPosts = posts;
  });
const nameForm = document.querySelector(".search-box");
let filteredPosts = [];

nameForm.addEventListener("input", (event) => {
  event.preventDefault();
  const term = event.target.value.toLowerCase();
  let searchResult = filteredPosts.filter((filteredPosts) => {
    return filteredPosts.name.toLowerCase().includes(term);
  });
  createPostCards(searchResult);
}); */
const url = "https://monicamunkvoldnikolaisen.no/treehugging/wp-json/wp/v2/posts?per_page=100&_embed";
async function searchPosts() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);
    searchResultsContainer.innerHTML = "";
    for (let i = 0; i < results.length; i++) {
      console.log("this html section works some");
      searchResultsContainer.innerHTML += `<div class="featured"><div class="featured-item "><a href="singlepost.html?id=${results[i].id}"><h3>${results[i].title.rendered}</h3></a><p>${results[i].excerpt.rendered}</p></div></div>`;
    }
  } catch (error) {
    //console.log("something very strange here...");
  }
}
searchPosts();

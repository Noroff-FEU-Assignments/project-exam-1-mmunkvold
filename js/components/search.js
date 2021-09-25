// Search bar
const searchResultsContainer = document.querySelector(".search-result");
/* const searchButton = document.querySelector(".search-btn"); */

const url = "https://monicamunkvoldnikolaisen.no/treehugging/wp-json/wp/v2/posts?per_page=100&_embed";

async function searchPosts() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);
    searchResultsContainer.innerHTML = "";
    for (let i = 0; i < results.length; i++) {
      console.log("this html section works some");
      searchResultsContainer.innerHTML += `<div class="search-result"><div class="search-result-item "><a href="singlepost.html?id=${results[i].id}"><h3>${results[i].title.rendered}</h3></a><p>${results[i].excerpt.rendered}</p></div></div>`;
    }
  } catch (error) {
    //console.log("something very strange here...");
  }
}
searchPosts();

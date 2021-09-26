// Search result on search page:

const searchResultsContainer = document.querySelector(".search-result");

const url = "https://monicamunkvoldnikolaisen.no/treehugging/wp-json/wp/v2/posts?per_page=100&_embed";

async function searchPosts() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    searchResultsContainer.innerHTML = "";
    for (let i = 0; i < results.length; i++) {
      searchResultsContainer.innerHTML += `<div class="search-result"><div class="search-result-item "><a href="singlepost.html?id=${results[i].id}"><h3>${results[i].title.rendered}</h3></a><p>${results[i].excerpt.rendered}</p></div></div>`;
    }
  } catch (error) {
    searchResultsContainer.innerHTML = displayError("Oh dear, something isn't working...");
  }
}
searchPosts();

const url = "https://monicamunkvoldnikolaisen.no/treehugging/wp-json/wp/v2/posts?per_page=100&_embed";

const resultsContainer = document.querySelector(".results");
const button = document.querySelector(".seemore-btn");

async function getAllPosts() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    resultsContainer.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
      if (i === 10) {
        break;
      }
      resultsContainer.innerHTML += `<div class="results"><div class="result-item result-item-noborder"><a href="singlepost.html?id=${results[i].id}"><div><img class="noborder" src="${results[i]._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url}" alt="${results[i]._embedded["wp:featuredmedia"][0].alt_text}"></div><div class="result-item"><div><h3>${results[i].title.rendered}</h3></a>${results[i].excerpt.rendered}</div></div></div>`;
    }
    button.addEventListener("click", function () {
      for (let i = 10; i < results.length; i++) {
        resultsContainer.innerHTML += `<div class="results"><div class="result-item result-item-noborder"><a href="singlepost.html?id=${results[i].id}"><div><img class="noborder" src="${results[i]._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url}" alt="${results[i]._embedded["wp:featuredmedia"][0].alt_text}"></div><div class="result-item"><div><h3>${results[i].title.rendered}</h3></a>${results[i].excerpt.rendered}</div></div></div>`;
        button.style.display = "none";
      }
    });
  } catch (error) {
    resultsContainer.innerHTML = displayError("Oh dear, something isn't working...");
  }
}
getAllPosts();

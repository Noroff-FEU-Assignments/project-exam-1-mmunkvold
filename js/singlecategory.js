const singleCategoryContainer = document.querySelector(".single-category");
const categoryName = document.querySelector(".category-name");
const title = document.querySelector("title");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = `https://monicamunkvoldnikolaisen.no/treehugging/wp-json/wp/v2/posts?_embed&categories=${id}&posts?_embed/`;

async function getSingleCategory() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    singleCategoryContainer.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
      document.title = results[i]._embedded["wp:term"][0][0].name + " | Hug a Tree";
      categoryName.innerHTML = `<h2>Posts in Category: </h2><h1>${results[i]._embedded["wp:term"][0][0].name}</h1>`;

      singleCategoryContainer.innerHTML += `<div class="results"><div class="result-item result-item-noborder"><a href="singlepost.html?id=${results[i].id}"><div><img class="noborder" src="${results[i]._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url}" alt="${results[i]._embedded["wp:featuredmedia"][0].alt_text}"></div><div class="result-item"><div><h3>${results[i].title.rendered}</h3></a>${results[i].excerpt.rendered}</div></div></div>`;
    }
  } catch (error) {
    singlePostContainer.innerHTML = displayError("Oh dear, something isn't working...");
  }
}
getSingleCategory();

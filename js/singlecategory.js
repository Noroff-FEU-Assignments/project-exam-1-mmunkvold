const singleCategoryContainer = document.querySelector(".single-category");
//console.log(singleCategoryContainer);
const categoryName = document.querySelector(".category-name");
//
const title = document.querySelector("title");
console.log(title);

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
//console.log(id);

const url = `https://monicamunkvoldnikolaisen.no/treehugging/wp-json/wp/v2/posts?_embed&categories=${id}&posts?_embed/`; /* + id; */ //KANSKJE IKKE TO EMBED HER...
/* const url = `https://monicamunkvoldnikolaisen.no/treehugging/wp-json/wp/v2/posts/${id}?_embed`; */
console.log(url);

//
/* const urlCategories = "https://monicamunkvoldnikolaisen.no/treehugging/wp-json/wp/v2/categories"; */

async function getSingleCategory() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    singleCategoryContainer.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
      console.log("whatever happens");
      document.title = results[i]._embedded["wp:term"][0][0].name;
      categoryName.innerHTML = `<h2>Posts in Category: </h2><h1>${results[i]._embedded["wp:term"][0][0].name}</h1>`;

      singleCategoryContainer.innerHTML += `<div class="single-category"><div class="results"><div class="result-item result-item-noborder"><a href="singlepost.html?id=${results[i].id}"><div><img class="noborder" src="${results[i]._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url}"></img></div><div class="result-item"><h3>${results[i].title.rendered}</h3> ${results[i].excerpt.rendered}</a></div></div>`;
    }
  } catch (error) {
    console.log("something very strange here...");
  }
}
getSingleCategory();

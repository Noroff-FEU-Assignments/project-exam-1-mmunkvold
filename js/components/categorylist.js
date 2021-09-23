//this code needs work, but just to show how to

const url = "https://monicamunkvoldnikolaisen.no/treehugging/wp-json/wp/v2/categories?";

const categoryListContainer = document.querySelector(".category-list");

async function getAllCategories() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    categoryListContainer.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
      categoryListContainer.innerHTML += `<div class="category-list"><a href="singlecategory.html?id=${results[i].id}"><div class="">${results[i].name} </div></a><div></div></div>`;
    }
  } catch (error) {
    console.log(error);
    //categoryListContainer.innerHTML = displayError("Oh dear, something isn't working...");
  }
}
getAllCategories();

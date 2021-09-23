//Top section with the "newest" post:

const newestPostContainer = document.querySelector(".newest");

/* const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const tags = params.get("tags"); */
//console.log(tags);

const urlNewest = "https://monicamunkvoldnikolaisen.no/treehugging/wp-json/wp/v2/posts?tags=6";
//console.log(urlNewest);

async function getNewestPost() {
  try {
    const response = await fetch(urlNewest);
    const results = await response.json();
    //console.log(results);

    results.forEach(function (result) {
      createHTML(result);
    });
  } catch (error) {
    console.log("something strange here...");
  }
}
getNewestPost();

function createHTML(result) {
  console.log("this html works");
  newestPostContainer.innerHTML = `<div class="newest"><div><a href="singlepost.html?id=${result.id}"><h1>${result.title.rendered}</h1></a></div><div>${result.content.rendered}</div></div></div>`;
}

//===========================================//
//THIS CODE NEEDS WORK!!
//Mid section with "4 latest posts" with slider/carousel:

//this code needs work, but just to show how to

const url = "https://monicamunkvoldnikolaisen.no/treehugging/wp-json/wp/v2/posts?per_page=100&_embed";

const latestPostContainer = document.querySelector(".latest-carousel");
const nextBtn = document.querySelector(".next-btn");
const previousBtn = document.querySelector(".prev-btn");

async function getLatestPosts() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);
    latestPostContainer.innerHTML = "";
    let firstPost = 0;

    for (let i = firstPost; i < firstPost + 4; i++) {
      console.log(i);
      //createHTML();
      latestPostContainer.innerHTML += `<div class="latest-carousel"><div class="carousel-item"><a href="singlepost.html?id=${results[i].id}"><h3>${results[i].title.rendered}</h3><img class="" src="${results[i]._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url}"></img></a><div>${results[i].excerpt.rendered}</div></div></div>`;
      /* previousBtn.style.display = "block";
      nextBtn.style.display = "block"; */
    }

    nextBtn.addEventListener("click", function () {
      latestPostContainer.innerHTML = "";
      firstPost = firstPost + 4;
      if (firstPost > results.length - 1) {
        firstPost = 0;
      } else if (firstPost < 0) {
        firstPost = results.length - 4;
      }

      for (let i = firstPost; i < firstPost + 4; i++) {
        console.log(i);
        latestPostContainer.innerHTML += `<div class="latest-carousel"><div class="carousel-item"><a href="singlepost.html?id=${results[i].id}"><h3>${results[i].title.rendered}</h3><img class="" src="${results[i]._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url}"></img></a><div>${results[i].excerpt.rendered}</div></div></div>`;
        /* previousBtn.style.display = "block";
        nextBtn.style.display = "block"; */
      }
    });

    previousBtn.addEventListener("click", function () {
      latestPostContainer.innerHTML = "";
      firstPost = firstPost - 4;
      if (firstPost > results.length - 1) {
        firstPost = 0;
      } else if (firstPost < 0) {
        firstPost = results.length - 4;
      }
      for (let i = firstPost; i < firstPost + 4; i++) {
        console.log(i);
        latestPostContainer.innerHTML += `<div class="latest-carousel"><div class="carousel-item"><a href="singlepost.html?id=${results[i].id}"><h3>${results[i].title.rendered}</h3><img class="" src="${results[i]._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url}"></img></a><div>${results[i].excerpt.rendered}</div></div></div>`;
        /*  previousBtn.style.display = "block";
        nextBtn.style.display = "block"; */
      }
    });
  } catch (error) {
    console.log(error);
    //latestPostContainer.innerHTML = displayError("Oh dear, something isn't working...");
  }
}
getLatestPosts();

//===========================================//

// Bottom section with "featured posts":
const featuredPostContainer = document.querySelector(".featured");

const urlFeatured = "https://monicamunkvoldnikolaisen.no/treehugging/wp-json/wp/v2/posts?_embed&tags=8";

async function getFeaturedPosts() {
  try {
    const response = await fetch(urlFeatured);
    const results = await response.json();
    console.log(results);
    featuredPostContainer.innerHTML = "";
    for (let i = 0; i < results.length; i++) {
      if (i === 2) {
        break;
      }
      console.log("this html section works at least");
      featuredPostContainer.innerHTML += `<div class="featured"><div class="featured-item "><a href="singlepost.html?id=${results[i].id}"><h3>${results[i].title.rendered}</h3><p>${results[i].excerpt.rendered}</p><div class="featured-item featured-item-noborder"><img class="" src="${results[i]._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url}"/></a></div></div></div>`;
    }
  } catch (error) {
    console.log("something very strange here...");
  }
}
getFeaturedPosts();

//===========================================//

// Aside section with "all categories":

const categoryContainer = document.querySelector(".categories");
console.log(categoryContainer);

const urlCategories = "https://monicamunkvoldnikolaisen.no/treehugging/wp-json/wp/v2/categories";

async function getCategories() {
  try {
    const response = await fetch(urlCategories);
    const results = await response.json();
    console.log(results);
    categoryContainer.innerHTML = "";
    for (let i = 0; i < results.length; i++) {
      console.log("this html section works at least");
      categoryContainer.innerHTML += `<div class="category"><a href="singlecategory.html?id=${results[i].id}"><h3>${results[i].name}</h3></a><p>${results[i].description}</p></div>`;
    }
  } catch (error) {
    console.log("something very strange here...");
  }
}
getCategories();

//===========================================//

// Aside section with "recent comments":

const recentCommentsContainer = document.querySelector(".comments");

const urlComments = "https://monicamunkvoldnikolaisen.no/treehugging/wp-json/wp/v2/comments?_embed";

async function getRecentComments() {
  try {
    const response = await fetch(urlComments);
    const results = await response.json();
    console.log(results);
    recentCommentsContainer.innerHTML = "";
    for (let i = 0; i < results.length; i++) {
      if (i === 4) {
        break;
      }
      console.log("wow html");
      recentCommentsContainer.innerHTML += `<div class="comments"><div class="recent-comments"><h3>${results[i].author_name}</h3><p>${results[i].content.rendered}</p></div></div>`;
    }
  } catch (error) {
    console.log("something very strange here...");
  }
}
getRecentComments();

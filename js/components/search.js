// Search bar
const searchButton = document.querySelector(".search-btn");

/* searchButton.addEventListener("click", function () {
  window.location = "http://www.google.com/search?q=site:monicamunkvolnikolaisen.no/treehugging " + document.querySelector(".search").value;
  return false;
}); */
document.getElementById("search-form").onsubmit = function () {
  window.location = "http://www.google.com/search?q=site:monicamunkvoldnikolaisen.no/treehugging " + document.getElementById("search").value;
  return false;
};
// sjekk ut denne linken: https://rachelaemmer.medium.com/how-to-create-a-search-bar-in-a-basic-javascript-application-f031848079e9

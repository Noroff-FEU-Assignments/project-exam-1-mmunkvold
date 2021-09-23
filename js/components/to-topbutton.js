const toTopButton = document.getElementById("totop");
console.log(toTopButton);

toTopButton.onclick = function () {
  window.scrollTo(0, 0);
};

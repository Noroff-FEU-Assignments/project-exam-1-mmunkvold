const randomContainer = document.querySelector(".random-quote");

const quotes = [
  "He who leans against a big tree will always find shade. ~ Albanian Proverb",
  "The best time to plant a tree was 20 years ago. The second best time is now. ~ Chinese saying",
  "If you want to be happy for a year, plant a garden; if you want to be happy for life, plant a tree. ~ English Proverb",
  "Let’s take our hearts for a walk in the woods and listen to the magic whispers of old trees. ~ Author Unknown",
  "If I knew I should die tomorrow, I would plant a tree today. ~ Stephen Girard",
  "If the tree doesn't hug you back, it's not a problem with the tree, it's a problem with your heart. ~ Donald L. Hicks, Look into the stillness",
];

function randomQuotes() {
  const randomQuote = Math.floor(Math.random() * quotes.length);
  randomContainer.innerHTML = quotes[randomQuote];
}

window.addEventListener("load", function () {
  randomQuotes();
});

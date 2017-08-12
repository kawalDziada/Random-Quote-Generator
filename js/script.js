
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


var quotes = [
  {
    quote: "The second half of a man's life is made up of nothing but the habits he has acquired during the first half.",
    source: "Fiodor Dostojewski",
    citation: "Ideas for Our Time",
    year: 1879,
    category: "wise"
  },
  {
    quote: "Taking a new step, uttering a new word, is what people fear most.",
    source: "Fiodor Dostojewski",
    citation: "Crime and Punishment",
    year: 1866,
    category: "sad"
  },
  {
    quote: "Nothing in this world is harder than speaking the truth, nothing easier than flattery.",
    source: "Fiodor Dostojewski",
    citation: "Crime and Punishment",
    year: 1866,
    category: "sad"
  },
  {
    quote: "There is nothing either good or bad, but thinking makes it so.",
    source: "William Shakespeare",
    citation: "Hamlet",
    year: 1602,
    category: "wise"
  },
  {
    quote: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    source: "William Shakespeare",
    citation: "As You Like It",
    year: 1600,
    category: "wise"
  },
  {
    quote: "Everything comes in time to him who knows how to wait.",
    source: "Leo Tolstoy",
    citation: "War and Peace",
    year: 1869,
    category: "happy"
  },
  {
    quote: "Thoughts are the shadows of our feelings — always darker, emptier, simpler.",
    source: "Friedrich Nietzsche",
    citation: "The Gay Science",
    year: 1882,
    category: "sad"
  },
  {
    quote: "One must pay dearly for immortality; one has to die several times while one is still alive.",
    source: "Friedrich Nietzsche",
    citation: "EcceHomo",
    year: 1888,
    category: "sad"
  },
  {
    quote: "I realize today that nothing in the world is more distasteful to a man than to take the path that leads to himself.",
    source: "Hermann Hesse",
    citation: "Demian",
    year: 1919,
    category: "wise"
  },
  {
    quote: "Oh, love isn't there to make us happy. I believe it exists to show us how much we can endure.",
    source: "Hermann Hesse",
    citation: "",
    year: 1904,
    category: "happy"
  },
  {
    quote: "You can't make an omelet without breaking a few eggs.",
    source: "Famous proverb",
    citation: "",
    year: "",
    category: "wise"
  }
]
var chossen = []


function getRandomQuote(quo) {
    var randomNumber = Math.floor(Math.random() * quo.length);
    quo.splice(quo[randomNumber], 1);
    chossen.push(quo[randomNumber]);
    console.log(quo);
    console.log(chossen);
  return quo[randomNumber]
}


function printQuote() {
  var rdQuote = getRandomQuote(quotes);

  if (rdQuote.category === "sad") {
    document.body.style.backgroundColor = "black";
    document.getElementById("loadQuote").style.backgroundColor = "black";
  } else if (rdQuote.category === "wise") {
    document.body.style.backgroundColor = "red";
    document.getElementById("loadQuote").style.backgroundColor = "red";
  } else {
    document.body.style.backgroundColor = "#36b55c";
    document.getElementById("loadQuote").style.backgroundColor = "#36b55c";
  }
  var html = "<p class=\"quote\">" + rdQuote.quote + "</p>";
  html += "<p class=\"source\">" + rdQuote.source;
  if (rdQuote.citation === "") {
    html += "";
  } else {
    html += "<span class=\"citation\">" + rdQuote.citation + "</span>";
  }
  if (rdQuote.year === "") {
    html += "";
  } else {
    html += "<span class=\"year\">" + rdQuote.year + "</spam>";
  }
  html += "</p>";
  document.getElementById("quote-box").innerHTML = html;
  return rdQuote
}



printQuote();

const quotes = [
  {
    quote: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe"
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    quote: "Everything you’ve ever wanted is on the other side of fear.",
    author: "George Addair"
  },
  {
    quote: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown"
  },
  {
    quote: "Great things never come from comfort zones.",
    author: "Unknown"
  },
  {
    quote: "Dream it. Wish it. Do it.",
    author: "Unknown"
  },
  {
    quote: "Do something today that your future self will thank you for.",
    author: "Unknown"
  },
  {
  quote: "Hardships often prepare ordinary people for an extraordinary destiny.",
  author: "C.S. Lewis"
},
{
  quote: "The only limit to our realization of tomorrow is our doubts of today.",
  author: "Franklin D. Roosevelt"
},
{
  quote: "Act as if what you do makes a difference. It does.",
  author: "William James"
},
{
  quote: "Keep your face always toward the sunshine—and shadows will fall behind you.",
  author: "Walt Whitman"
},
{
  quote: "Opportunities don't happen. You create them.",
  author: "Chris Grosser"
},
{
  quote: "It always seems impossible until it’s done.",
  author: "Nelson Mandela"
},
{
  quote: "Success usually comes to those who are too busy to be looking for it.",
  author: "Henry David Thoreau"
},
{
  quote: "If you want to achieve greatness stop asking for permission.",
  author: "Anonymous"
},
{
  quote: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
  author: "Roy T. Bennett"
},
{
  quote: "The future belongs to those who believe in the beauty of their dreams.",
  author: "Eleanor Roosevelt"
},
{
  quote: "Push yourself, because no one else is going to do it for you.",
  author: "Unknown"
},
{
  quote: "Dream bigger. Do bigger.",
  author: "Unknown"
},
{
  quote: "Don't watch the clock; do what it does. Keep going.",
  author: "Sam Levenson"
},
{
  quote: "Success is not in what you have, but who you are.",
  author: "Bo Bennett"
},
{
  quote: "Great things never come from comfort zones.",
  author: "Unknown"
},
{
  quote: "You are never too old to set another goal or to dream a new dream.",
  author: "C.S. Lewis"
},
{
  quote: "If it scares you, it might be a good thing to try.",
  author: "Seth Godin"
},
{
  quote: "Don’t wait for opportunity. Create it.",
  author: "Unknown"
},
{
  quote: "Start where you are. Use what you have. Do what you can.",
  author: "Arthur Ashe"
},
{
  quote: "The only way to achieve the impossible is to believe it is possible.",
  author: "Charles Kingsleigh"
},
{
  quote: "Be stronger than your strongest excuse.",
  author: "Unknown"
},
{
  quote: "You don’t have to be great to start, but you have to start to be great.",
  author: "Zig Ziglar"
},
{
  quote: "Success is what comes after you stop making excuses.",
  author: "Luis Galarza"
},
{
  quote: "Stay away from those people who try to disparage your ambitions.",
  author: "Mark Twain"
},
{
  quote: "Work hard in silence, let your success be the noise.",
  author: "Frank Ocean"
},
{
  quote: "Winners are not afraid of losing. But losers are. Failure is part of the process of success.",
  author: "Robert Kiyosaki"
},
{
  quote: "Success usually comes to those who are too busy to be looking for it.",
  author: "Henry David Thoreau"
},
{
  quote: "Your time is limited, so don’t waste it living someone else’s life.",
  author: "Steve Jobs"
},
{
  quote: "Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.'",
  author: "Mary Anne Radmacher"
},
{
  quote: "The best way to get started is to quit talking and begin doing.",
  author: "Walt Disney"
},
{
  quote: "Everything you’ve ever wanted is on the other side of fear.",
  author: "George Addair"
},
{
  quote: "Success is not how high you have climbed, but how you make a positive difference to the world.",
  author: "Roy T. Bennett"
},
{
  quote: "Do not wait to strike till the iron is hot, but make it hot by striking.",
  author: "William Butler Yeats"
},
{
  quote: "The man who moves a mountain begins by carrying away small stones.",
  author: "Confucius"
},
{
  quote: "Hard work beats talent when talent doesn’t work hard.",
  author: "Tim Notke"
},
{
  quote: "You were born to win, but to be a winner, you must plan to win, prepare to win, and expect to win.",
  author: "Zig Ziglar"
},
{
  quote: "Don't limit your challenges. Challenge your limits.",
  author: "Unknown"
},
{
  quote: "Discipline is the bridge between goals and accomplishment.",
  author: "Jim Rohn"
},
{
  quote: "Act as if what you do makes a difference. It does.",
  author: "William James"
},
{
  quote: "Opportunities don't happen. You create them.",
  author: "Chris Grosser"
}


];

let currentIndex = 0;
let likeCounts = new Array(quotes.length).fill(83756);

function getQuote() {
  currentIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').textContent = quotes[currentIndex].quote;
  document.getElementById('author').textContent = `— ${quotes[currentIndex].author}`;
  document.getElementById('feedback').textContent = "";
  document.getElementById('like-count').textContent = `Likes: ${likeCounts[currentIndex]}`;
}

function copyQuote() {
  const text = `${document.getElementById('quote').textContent} ${document.getElementById('author').textContent}`;
  navigator.clipboard.writeText(text).then(() => {
    document.getElementById('feedback').textContent = "✅ Quote copied to clipboard!";
  });
}

function likeQuote() {
  likeCounts[currentIndex]++;
  document.getElementById('feedback').textContent = "❤️ Thanks for the like!";
  document.getElementById('like-count').textContent = `Likes: ${likeCounts[currentIndex]}`;
}

document.addEventListener('DOMContentLoaded', getQuote);
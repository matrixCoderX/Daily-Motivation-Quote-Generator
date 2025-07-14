const quotes = [
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
  { text: "A room without books is like a body without a soul.", author: "Cicero" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "F.D. Roosevelt" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Don’t wait. The time will never be just right.", author: "Napoleon Hill" },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { text: "What we think, we become.", author: "Buddha" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Keep going. Everything you need will come to you.", author: "Unknown" },
  { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
  { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { text: "Great things never come from comfort zones.", author: "Unknown" },
  { text: "Don’t stop when you’re tired. Stop when you’re done.", author: "Marilyn Monroe" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Doubt kills more dreams than failure ever will.", author: "Suzy Kassem" },
  { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" }
];

function getQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = `"${random.text}"`;
  document.getElementById("author").innerText = `– ${random.author}`;
}

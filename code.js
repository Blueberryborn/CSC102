// =============================
// Name: Anthony Plass
// Unlimited XP Clicker Game + String Magic + Quote Generator
// =============================


// ---------- CLICKER GAME ----------
let score = 0;
const scoreBtn = document.getElementById("scoreBtn");
const scoreDiv = document.getElementById("score");
const msgDiv = document.getElementById("message");

function increaseScore() {
  score += 1;

  scoreDiv.innerHTML = `XP: ${score}`;

  if (score >= 1000) {
    msgDiv.innerHTML = "💎 LEGEND! You're in the hall of fame!";
  } else if (score >= 500) {
    msgDiv.innerHTML = " You’re a true XP master!";
  } else if (score >= 300) {
    msgDiv.innerHTML = " You're unstoppable!";
  } else if (score >= 200) {
    msgDiv.innerHTML = " You’ve surpassed mortal limits!";
  } else if (score >= 100) {
    msgDiv.innerHTML = " You’re a rising champion!";
  } else if (score >= 75) {
    msgDiv.innerHTML = " Amazing endurance!";
  } else if (score >= 50) {
    msgDiv.innerHTML = " Half a century of clicks!";
  } else if (score >= 25) {
    msgDiv.innerHTML = " Quarter century achieved!";
  } else if (score >= 10) {
    msgDiv.innerHTML = "You started strong!";
  }
}
scoreBtn.onclick = increaseScore;


// ---------- STRING MAGIC ----------
const stringForm = document.getElementById("stringForm");
const stringOutput = document.getElementById("stringOutput");

stringForm.onsubmit = function(event) {
  event.preventDefault();

  let text = document.getElementById("userInput").value;

  if (text.trim() === "") {
    stringOutput.innerHTML = "⚠️ Please enter something!";
    return;
  }

  let reversed = text.split("").reverse().join("");
  let upper = text.toUpperCase();
  let words = text.trim().split(/\s+/).length;
  let palindrome = (text.toLowerCase().replace(/\s+/g, "") === reversed.toLowerCase().replace(/\s+/g, "")) 
                   ? "Yes" : "No";

  let vowels = 0;
  for (let char of text.toLowerCase()) {
    if ("aeiou".includes(char)) vowels++;
  }

  stringOutput.innerHTML = `
    ✨ Original: ${text}<br>
    🔄 Reversed: ${reversed}<br>
    🔠 Uppercase: ${upper}<br>
    📏 Length: ${text.length} characters<br>
    📝 Word Count: ${words}<br>
    💡 Vowels: ${vowels}<br>
    🔁 Palindrome: ${palindrome}
  `;
};


// ---------- QUOTE GENERATOR ----------
const quotes = [
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Hard work beats talent when talent doesn’t work hard.", author: "Tim Notke" },
  { text: "Do what you can with all you have, wherever you are.", author: "Theodore Roosevelt" },
  { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" }
];

const quoteBtn = document.getElementById("quoteBtn");
const quoteOutput = document.getElementById("quoteOutput");

quoteBtn.onclick = function() {
  // Pick random quote
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let chosen = quotes[randomIndex];

  // Display quote
  quoteOutput.innerHTML = `
    💬 "${chosen.text}"<br>
    — <em>${chosen.author}</em>
  `;
};

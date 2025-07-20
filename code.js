function updateText(){
    document.getElementById("heading").innerHTML = "JavaScript is confusing! >:(";

}


// Button game logic
let score = 0;
const winScore = 10;

function increaseScore() {
  score++;
document.getElementById("score").innerText = "Score: " + score;


if (score >= 100) {
    document.getElementById("message").innerText = "Alright showoff no more button!";
    document.querySelector("button[onclick='increaseScore()']").disabled = true;
} else if (score >= 50) {
    document.getElementById("message").innerText = "Your're finger must be tired!";
} else if (score >= 25) {
    document.getElementById("message").innerText = "Wow! You're still going? I don't know how to stop the counter!";
} else if (score >= 10) {
    document.getElementById("message").innerText = "You Win! Congratulations!";
}
}


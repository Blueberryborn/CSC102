// Reference to image and buttons
const meme = document.getElementById("MEME");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

// Store interval ID for stopping later
let moveInterval = null;

// Function to move meme image randomly on the page
function moveMeme() {
    // Generate random top and left positions (within viewport)
    const top = Math.random() * (window.innerHeight - 150);
    const left = Math.random() * (window.innerWidth - 150);

    // Apply the new position using style
    meme.style.position = "absolute";
    meme.style.top = `${top}px`;
    meme.style.left = `${left}px`;
}

// Function to start image movement
function startMovement() {
    // Disable Start, enable Stop
    startBtn.disabled = true;
    stopBtn.disabled = false;

    // Move meme every 500ms
    moveInterval = setInterval(moveMeme, 500);
}

// Function to stop image movement
function stopMovement() {
    // Disable Stop, enable Start
    stopBtn.disabled = true;
    startBtn.disabled = false;

    // Stop movement
    clearInterval(moveInterval);
}


window.addEventListener("DOMContentLoaded", function () {
    // When start button is clicked
    startBtn.addEventListener("click", startMovement);

    // When stop button is clicked
    stopBtn.addEventListener("click", stopMovement);
});
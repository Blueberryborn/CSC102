// -----------------------------
// Palindrome Checker with Sound
// Author: Anthony Plass
// Date: 08/16/2025
// -----------------------------

// Create global AudioContext
let audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// Play a single tone
function playTone(frequency, duration, type, volume) {
    // Oscillator 
    const osc = audioCtx.createOscillator();
    // Gain 
    const gain = audioCtx.createGain();

    // Configure oscillator
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);

    // Configure gain
    gain.gain.setValueAtTime(volume, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration/1000);

    // Connect nodes
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    // Play sound
    osc.start();
    osc.stop(audioCtx.currentTime + duration/1000);
}

// Success chime 
function playSuccess() {
    playTone(523, 150, "triangle", 0.2);
    setTimeout(() => playTone(659, 150, "triangle", 0.2), 160);
    setTimeout(() => playTone(783, 150, "triangle", 0.2), 320);
}

// Error buzz 
function playError() {
    playTone(180, 250, "sawtooth", 0.1);
    playTone(190, 250, "sawtooth", 0.08);
}

// Normalize string 
function normalize(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}

// Check palindrome
function checkPalindrome(event) {
    // Stop form refresh
    event.preventDefault();

    // Get user input
    const input = document.getElementById("userString").value;
    // Clean it
    const cleaned = normalize(input);
    // Reverse it
    const reversed = cleaned.split("").reverse().join("");
    // Result element
    const result = document.getElementById("result");

    // Check palindrome
    if (cleaned && cleaned === reversed) {
        result.textContent = `"${input}" is a palindrome! 🎉`;
        result.style.color = "#2d7f4e";
        result.classList.add("glow");
        playSuccess();
    } else if (cleaned.length === 0) {
        result.textContent = "Please enter valid letters or numbers.";
        result.style.color = "#2c3440";
        playError();
    } else {
        result.textContent = `"${input}" is not a palindrome.`;
        result.style.color = "#b2413b";
        playError();
    }
}

// Attach form submit directly to function
document.getElementById("palindromeForm").onsubmit = checkPalindrome;
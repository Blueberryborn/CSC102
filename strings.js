// This function runs when the form is submitted
document.getElementById("infoForm").onsubmit = function(event) {
    // Stop the page from refreshing
    event.preventDefault();

    // Get the values from the input boxes
    var first = document.getElementById("firstName").value;
    var last = document.getElementById("lastName").value;
    var zip = document.getElementById("zipCode").value;

    // Make the full name
    var fullName = first + " " + last;

    // This is where we show messages
    var message = document.getElementById("message");

    // Hide the image at first
    document.getElementById("secretImage").style.display = "none";

    // Check if name is too long
    if (fullName.length > 20) {
        message.innerHTML = "Quite the name! Too long I'm afraid.";
        return;
    }

    // Check if zip is exactly 5 numbers
    if (zip.length != 5 || isNaN(zip)) {
        message.innerHTML = "Zip code must be 5 numbers only.";
        return;
    }

    // If everything is okay, show the secret message
    message.innerHTML = "UH-OH! " + fullName + "! Kitty thinks you're stinky!";
    document.getElementById("secretImage").style.display = "block";
};
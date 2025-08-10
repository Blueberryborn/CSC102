// Function to check if the entered text is a palindrome
function checkPalindrome() {
    let str = document.getElementById("userString").value;

    // Remove spaces and make lowercase for comparison
    let cleanStr = str.replace(/\s+/g, '').toLowerCase();

    // Reverse the cleaned string
    let reversedStr = cleanStr.split('').reverse().join('');

    // Compare the cleaned string with its reversed version
    if (cleanStr === reversedStr) {
        // If they match, it's a palindrome
        document.getElementById("result").innerHTML = `"${str}" is a palindrome! 🎉`;
        document.getElementById("result").style.color = "green";
    } else {
        // If not, tell the user it isn't a palindrome i hope :P
        document.getElementById("result").innerHTML = `"${str}" You are wrong!. ❌`;
        document.getElementById("result").style.color = "red";
    }

    // Keep the form on the page and allow re-entry without refreshing
    return false;
}
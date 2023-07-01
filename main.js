// This function generates a random number and updates the HTML page with the new number
function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('random-number').textContent = randomNumber;
}

// This event listener triggers the generateRandomNumber function when the button is clicked
document.getElementById('generate-button').addEventListener('click', generateRandomNumber);

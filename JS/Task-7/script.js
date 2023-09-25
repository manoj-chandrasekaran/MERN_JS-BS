// script.js

// Reference to the GIF image element
const gifElement = document.getElementById('gif');

// Function to start the GIF animation
function start() {
    gifElement.src = 'gif.gif'; // Reset the src to the original GIF file
}

// Function to stop/pause the GIF animation
function stop() {
    gifElement.src = ''; // Clear the src attribute to pause the animation
}

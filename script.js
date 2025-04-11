//your JS code here. If required.
// Get all buttons with the class 'btn'
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');
let currentAudio = null;

// Function to play sound
function playSound(soundFile) {
    // Stop the currently playing audio if there is one
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset to the start
    }

    // Create a new audio object and play the sound
    currentAudio = new Audio(soundFile);
    currentAudio.play();
}

// Add event listeners to each sound button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const soundFile = button.getAttribute('data-sound');
        playSound(soundFile);
    });
});

// Add event listener to the stop button
stopButton.addEventListener('click', () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset to the start
    }
});
//your JS code here. If required.
// List of sound files (assuming they are inside the 'sounds' folder)
const sounds = ["sound1.mp3", "sound2.mp3", "sound3.mp3"];

const buttonsContainer = document.getElementById("buttons");

// Create buttons dynamically
sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound.replace(".mp3", ""); // Show name without extension
    
    // Play sound when button is clicked
    btn.addEventListener("click", () => {
        stopSounds();
        const audio = new Audio(`sounds/${sound}`);
        audio.play();
        btn.dataset.audio = audio; // Store audio instance in the button
    });

    buttonsContainer.appendChild(btn);
});

// Stop all sounds
document.querySelector(".stop").addEventListener("click", stopSounds);

function stopSounds() {
    document.querySelectorAll(".btn").forEach((btn) => {
        if (btn.dataset.audio) {
            btn.dataset.audio.pause();
            btn.dataset.audio.currentTime = 0;
        }
    });
}

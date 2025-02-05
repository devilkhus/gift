document.getElementById("clickMeButton").addEventListener("click", function() {
    // Hide the button
    this.style.display = "none";
    
    // Show the video container
    const videoContainer = document.getElementById("videoContainer");
    videoContainer.style.display = "block";
    
    // Play the video
    const video = document.getElementById("bgVideo");
    video.play().catch(error => console.error("Autoplay failed:", error));

    // Start the audio
    const audio = document.getElementById("birthdayAudio");
    audio.play().catch(error => console.error("Audio playback failed:", error));

    // Show Happy Birthday text after video starts
    setTimeout(() => {
        const birthdayText = document.getElementById("birthdayText");
        birthdayText.style.display = "block";
        birthdayText.style.opacity = "1";
    }, 500);
    
    // Make the scroll message section visible when the user scrolls down
    window.addEventListener("scroll", function() {
        const messageSection = document.getElementById("messageSection");
        const messageTop = messageSection.getBoundingClientRect().top;

        // Reveal the scroll message when the user scrolls down
        if (messageTop <= window.innerHeight) {
            messageSection.style.display = "block";
            messageSection.style.opacity = "1";
        }
    });
});

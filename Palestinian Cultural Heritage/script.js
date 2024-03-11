// Music section audio controls
const audioElement = document.querySelector("audio");

function playMusic() {
  audioElement.play();
}

function pauseMusic() {
  audioElement.pause();
}

const musicContainer = document.querySelector(".music-container");
musicContainer.addEventListener("click", () => {
  if (audioElement.paused) {
    playMusic();
  } else {
    pauseMusic();
  }
});

// Tatreez image map - basic implementation using image coordinates
const tatreezImage = document.getElementById("tatreez-dress.jpg"); // Assuming the image ID is "tatreez-dress.jpg"

tatreezImage.addEventListener("click", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  // Define regions for different areas of the dress (replace with actual coordinates based on your image)
  if (x > 100 && x < 200 && y > 50 && y < 150) {
    alert("This click corresponds to the headpiece area of the tatreez dress.");
  } else if (x > 300 && x < 400 && y > 200 && y < 300) {
    alert("This click corresponds to the sleeve area of the tatreez dress.");
  } else {
    alert("You clicked on the tatreez dress.");
  }
});

// Interactive map (placeholder - integration with a mapping library recommended)
const mapContainer = document.getElementById("tatreez-map");

mapContainer.addEventListener("click", () => {
  alert(
    "Explore a detailed map of regions with distinct tatreez patterns (placeholder for future implementation)."
  );
});

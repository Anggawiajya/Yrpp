// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loadingScreen");
  const mainContent = document.getElementById("mainContent");

  // Simulate loading process
  setTimeout(() => {
    loadingScreen.style.display = "none"; // Hide loading screen
    mainContent.classList.remove("hidden"); // Show main content
  }, 3000); // Adjust time (in milliseconds) as needed
});
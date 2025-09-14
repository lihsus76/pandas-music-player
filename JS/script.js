

document.addEventListener("DOMContentLoaded", () => {
  const pages = {
    home: document.getElementById("homePage"),
    birthday: document.getElementById("bdPage"),
    playlist: document.getElementById("playlistPage"),
    gallery: document.getElementById("gallerypage")
  };

  function showPage(key) {
    for (const k in pages) {
      pages[k].style.display = (k === key) ? "block" : "none";
    }

    // Scroll to top after switching page
    window.scrollTo({
      top: 0,
      behavior: "smooth" // smooth scrolling effect
    });
  }

  // Button event listeners
  document.getElementById("homeBtn").addEventListener("click", () => showPage("home"));
  document.getElementById("galleryBtn").addEventListener("click", () => showPage("gallery"));
  document.getElementById("bdBtn").addEventListener("click", () => showPage("birthday"));
  document.getElementById("playlistBtn").addEventListener("click", () => showPage("playlist"));

  // Show home page on load
  showPage("home");
});

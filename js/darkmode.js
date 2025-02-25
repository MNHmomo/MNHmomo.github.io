document.getElementById("dark").addEventListener("click", function () {
    let icon = this;
    let body = document.body;
    
    // Toggle dark mode class
    body.classList.toggle("dark-mode");

    // Change icon based on mode
    icon.src = body.classList.contains("dark-mode")
        ? "media/icons/privacy copy.png"
        : "media/icons/now copy.png";
  });
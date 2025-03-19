document.addEventListener("DOMContentLoaded", function () {
    let icon = document.getElementById("dark");
    let body = document.body;

    // Check stored preference
    const isDarkMode = localStorage.getItem("darkMode") === "enabled";

    // Apply saved preference
    if (isDarkMode) {
        body.classList.add("dark-mode");
        icon.src = "media/icons/privacy copy.png";
    } else {
        body.classList.remove("dark-mode");
        icon.src = "media/icons/now copy.png";
    }

    // Toggle dark mode and save preference
    icon.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        const darkModeEnabled = body.classList.contains("dark-mode");

        // Save preference to localStorage
        localStorage.setItem("darkMode", darkModeEnabled ? "enabled" : "disabled");

        // Update icon based on mode
        icon.src = darkModeEnabled 
            ? "media/icons/privacy copy.png" 
            : "media/icons/now copy.png";
    });
});

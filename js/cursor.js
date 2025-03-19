const barX = document.querySelector(".cursor-bar-x");
        const barY = document.querySelector(".cursor-bar-y");
        const coordinates = document.querySelector(".cursor-coordinates");
        const toggleCheckbox = document.getElementById("toggleEffect");

        function disableOnMobile() {
            return 'ontouchstart' in window || window.innerWidth < 768;
        }

        function updateEffects(enabled) {
            if (enabled) {
                document.addEventListener("mousemove", trackCursor);
                barX.style.display = "block";
                barY.style.display = "block";
                coordinates.style.display = "block";
            } else {
                document.removeEventListener("mousemove", trackCursor);
                barX.style.display = "none";
                barY.style.display = "none";
                coordinates.style.display = "none";
            }
            localStorage.setItem("cursorEffects", enabled);
        }

        function trackCursor(e) {
            barX.style.transform = `translateX(${e.clientX}px)`;
            barY.style.transform = `translateY(${e.clientY}px)`;
            coordinates.textContent = `${e.clientX}, ${e.clientY}`;
            coordinates.style.transform = `translate(${e.clientX + 15}px, ${e.clientY + 15}px)`;
        }

        // Load stored preference
        const savedPreference = localStorage.getItem("cursorEffects");
        const isEnabled = savedPreference === "true";

        // Apply initial state
        toggleCheckbox.checked = isEnabled;
        updateEffects(isEnabled);

        // Toggle event listener
        toggleCheckbox.addEventListener("change", (e) => {
            updateEffects(e.target.checked);
        });

        // Disable effects on mobile by default
        if (disableOnMobile()) {
            toggleCheckbox.checked = false;
            updateEffects(false);
        }
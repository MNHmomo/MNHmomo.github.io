async function fetchCyberNews() {
    const url = "https://api.rss2json.com/v1/api.json?rss_url=https://thehackernews.com/feeds/posts/default";
    
    // Show a loading message before fetching data
    document.getElementById("news").innerHTML = "<p>Loading latest cybersecurity news...</p>";

    try {
        const response = await fetch(url);
        const data = await response.json();

        let output = "";
        data.items.slice(0, 6).forEach(article => {
            output += `
                <div class="news-item">
                    <h2>
                        <a href="${article.link}" target="_blank">
                            ${article.title}
                        </a>
                    </h2>
                    <p>${article.description.substring(0, 200)}...</p>
                </div>
            `;
        });

        // Replace "Loading..." with actual news
        document.getElementById("news").innerHTML = output;
    } catch (error) {
        console.error("Error fetching news:", error);
        document.getElementById("news").innerHTML = "<p>Failed to load news. Please try again later.</p>";
    }
}

// Display loading message immediately
document.getElementById("news").innerHTML = "<p>Loading...</p>";

// Load news on page load
fetchCyberNews();

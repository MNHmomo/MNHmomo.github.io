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
      // Redraw the map with the new color settings
      drawRegionsMap(darkModeEnabled);
  });
  // Initially draw the map
  drawRegionsMap(isDarkMode);
});


// Google Charts "https://developers.google.com/chart/interactive/docs/gallery/geochart"
google.charts.load('current', { packages: ['geochart'] });
function drawRegionsMap(isDarkMode) {
  // 🔹 Update this manually with countries + user density
  const activeCountries = [
      ["United States", 10],  // Numeric values for color mapping
      ["China", 20],
      ["Germany", 30],
      ["Canada", 40],
      ["Russia", 50],
      ["United Kingdom", 60],
      ["Singapore", 70],
      ["India", 80]
  ];
  
  // Prepare data with plus sign display
  const countryData = [['Country', 'User Density', { role: 'tooltip', type: 'string' }]];
  activeCountries.forEach(country => {
      countryData.push([
          country[0], 
          country[1], 
          ``  // Custom tooltip with plus sign ${country[1]}+
      ]);
  });
  
  const dataTable = google.visualization.arrayToDataTable(countryData);
  
  // Define color gradient based on mode
  const colorAxis = isDarkMode
      ? { colors: ['#08de94', '#00453b'] }  // Dark mode gradient (Light blue to Dark blue)
      : { colors: ['#08de94', '#00453b'] }; // Light mode gradient (Light gray to Blue)
  
  // Options for the chart
  const options = {
      colorAxis: colorAxis, // Dynamic color axis based on theme
      legend: 'none',
      datalessRegionColor: isDarkMode ? '#e8e3d3' : '#121212', // Dark mode: black, Light mode: light gray
      backgroundColor: 'transparent',
      defaultColor: 'transparent',
      tooltip: { isHtml: true, trigger: 'focus', textStyle: { fontSize: 14 } }
  };
  
  const chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
  chart.draw(dataTable, options);
}
google.charts.setOnLoadCallback(() => drawRegionsMap(localStorage.getItem("darkMode") === "enabled"));
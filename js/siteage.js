function calculateSiteAge() {
    const launchDate = new Date("2025-01-24");
    const today = new Date();
    
    let years = today.getFullYear() - launchDate.getFullYear();
    let months = today.getMonth() - launchDate.getMonth();
    let days = today.getDate() - launchDate.getDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    let ageString = "";
    if (years > 0) ageString += `${years} year${years > 1 ? 's' : ''}, `;
    if (months > 0) ageString += `${months} month${months > 1 ? 's' : ''}, `;
    ageString += `${days} day${days > 1 ? 's' : ''}`;

    document.getElementById("site-age").innerText = ageString;
}

calculateSiteAge();
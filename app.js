document.addEventListener("DOMContentLoaded", function () {
    const date = new Date();

    // Get the current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayOfWeek = daysOfWeek[date.getUTCDay()];

    // Get the current UTC time in milliseconds
    const utcTimeMillis = date.getTime();

    // Update the HTML elements with the specified data-testid attributes
    const currentDayOfTheWeekElement = document.querySelector("[data-testid='currentDayOfTheWeek']");
    const currentUTCTimeElement = document.querySelector("[data-testid='currentUTCTime']");

    currentDayOfTheWeekElement.textContent = `Current Day of the Week: ${currentDayOfWeek}`;
    currentUTCTimeElement.textContent = `Current UTC Time: ${utcTimeMillis} milliseconds`;
});


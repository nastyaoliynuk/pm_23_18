document.addEventListener("DOMContentLoaded", function () {
    fetchDataForDate('today');
    fetchDataForDate('6');
    fetchDataForDate('29');
});

function fetchDataForDate(date) {
    const url = `http://localhost:3000/data?date=${date}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            updateCalendar(date, data.color, data.message);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function updateCalendar(date, color, message) {
    const calendarElement = document.getElementById('calendar');
    const dayElement = document.createElement('div');
    dayElement.textContent = `Data for ${date}: ${message}`;
    dayElement.style.border = color === 'border' ? '2px solid black' : 'none';
    dayElement.style.backgroundColor = color === 'gray' ? 'gray' : 'none';

    calendarElement.appendChild(dayElement);
}

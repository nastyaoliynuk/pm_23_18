
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
app.use(cors());
// Обробник для статичних файлів (наприклад, HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'app')));

// Маршрут для отримання даних
app.get('/data', (req, res) => {
    const date = req.query.date;
    let calendarData;

    // Логіка отримання даних для календаря залежно від дати
    switch (date) {
        case 'today':
            calendarData = { color: 'blue', message: 'Data for today.' };
            break;
        case '6':
            calendarData = { color: 'border', message: 'Data for day 6.' };
            break;
        case '29':
            calendarData = { color: 'gray', message: 'Data for day 29.' };
            break;
        case '27':
            calendarData = { color: 'border', message: 'Data for day 27.' };
            break;
        case '13':
            calendarData = { color: 'border', message: 'Data for day 13.' };
                break;
        case '1':
            calendarData = { color: 'border', message: 'Data for day 1.' };
        break;
        default:
            calendarData = { color: 'none', message: 'Data not found.' };
            break;
    }

    res.json(calendarData);
});

// Додайте обробник для обробки всіх інших запитів
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'app', 'index.html'));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

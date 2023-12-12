const express = require('express');
const app = express();
const port = 3002;
const path = require('path');
const fs = require('fs');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Шлях до файлу data.json
const dataFilePath = path.join(__dirname, 'data.json');

// Масив імітованих даних календаря
let calendarData = [];

// Зчитуємо дані з data.json
try {
    const dataFileContent = fs.readFileSync(dataFilePath);
    const jsonData = JSON.parse(dataFileContent);

    // Додаємо поле date до кожного об'єкта в calendarData
    calendarData = jsonData.map(item => ({
        ...item,
        date: item.date // Забезпечте, що у вас є поле "date" в об'єкті
    }));
} catch (error) {
    console.error('Error reading data.json:', error);
}

// Обробник для отримання даних календаря
app.get('/data', (req, res) => {
    const dateParam = req.query.date;
    console.log('Received date parameter:', dateParam);

    // Фільтрація масиву за значенням date, якщо воно передано
    const filteredData = dateParam
        ? calendarData.filter(item => item.date === dateParam)
        : calendarData;

    console.log('Filtered data:', filteredData);

    res.json(filteredData);
});
app.put('/update', express.json(), (req, res) => {
    const { date, class: newClass } = req.body;

    // Знайти елемент календаря за датою
    const targetDay = calendarData.find(item => item.date === date);

    if (targetDay) {
        // Видалити клас попереднього числа
        const previousClass = targetDay.class;
        const previousDayElement = calendarData.find(item => item.class === previousClass);
        if (previousDayElement) {
            previousDayElement.class = '';
        }

        // Оновити клас нового числа
        targetDay.class = newClass;

        res.status(200).json({ message: 'Update successful' });
    } else {
        res.status(404).json({ message: 'Day not found' });
    }
});

// Запуск веб-сервера
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

document.addEventListener("DOMContentLoaded", function () {
    const btns = document.querySelectorAll('.btn-toggle');
    const pageContents = {
        'btn1': document.getElementById('page-content'),
    };

    let selectedButton = null;

    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Перевірка, чи кнопка вже активна
            const isActive = btn.classList.contains('active1');

            // Приховування контенту попередньої кнопки
            if (selectedButton !== null && !isActive) {
                const previousContent = pageContents[selectedButton.id];
                if (previousContent) {
                    previousContent.style.display = "none";
                }
            }

            // Видалення класу active1 з усіх кнопок
            btns.forEach(otherBtn => {
                otherBtn.classList.remove('active1');
            });

            // Відображення відповідного контенту
            const targetContent = pageContents[btn.id];
            if (targetContent) {
                targetContent.style.display = "block";
            }

            // Додавання/видалення класу active1 на поточній кнопці
            btn.classList.toggle('active1');

            // Оновлення вибраної кнопки
            selectedButton = btn;
        });
    });
});
var var1 = localStorage.getItem('savedVar1') || 1234;

// Функція для виведення alert та оновлення текстового вмісту при натисканні
function showAlert() {
  alert(parseInt(var1) + 1);
  var1 = parseInt(var1) + 1;

  // Збереження нового значення у localStorage
  localStorage.setItem('savedVar1', var1);

  // Оновлення текстового вмісту елементу з класом "item-views panel"
  document.querySelector('.item-views.panel.panel1').textContent = var1;
}

// Встановлення початкового значення при завантаженні сторінки
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.item-views.panel.panel1').textContent = var1;
});

var var2 = localStorage.getItem('savedVar2') || 987;
// Функція для виведення alert та оновлення текстового вмісту при натисканні
function showAlertFromButton() {
  alert(parseInt(var2) + 1);
  var2 = parseInt(var2) + 1;

  // Збереження нового значення у localStorage
  localStorage.setItem('savedVar2', var2);

  // Оновлення текстового вмісту елементу з класом "item-views panel"
  document.querySelector('.item-views.panel.panel2').textContent = var2;
}

// Встановлення початкового значення при завантаженні сторінки
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.item-views.panel.panel2').textContent = var2;
});

var var3 = localStorage.getItem('savedVar3') || 543;
// Функція для виведення alert та оновлення текстового вмісту при натисканні
function showAlertFromButton1() {
  alert(parseInt(var3) + 1);
  var3 = parseInt(var3) + 1;

  // Збереження нового значення у localStorage
  localStorage.setItem('savedVar3', var3);

  // Оновлення текстового вмісту елементу з класом "item-views panel"
  document.querySelector('.item-views.panel.panel3').textContent = var3;
}

// Встановлення початкового значення при завантаженні сторінки
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.item-views.panel.panel3').textContent = var3;
});
function showMessage() {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
  }
  document.addEventListener('DOMContentLoaded', function () {
    renderCalendar();

    const monthSelector = document.getElementById('monthSelector');
    monthSelector.addEventListener('change', function () {
      currentMonth = parseInt(monthSelector.value);
      renderCalendar();
    });
  });

  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();
  let useBorder = true;
  let selectedDay = null;

  function renderCalendar() {
    const calendarElement = document.getElementById('calendar');
    const currentDate = new Date();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

    const daysInMonth = lastDayOfMonth.getDate();
    const startingDay = (firstDayOfMonth.getDay() + 6) % 7; // Починаємо з понеділка

    const monthNames = [
      'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
      'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
    ];

    const table = document.createElement('table');
    const header = table.createTHead();

    const monthYearRow = header.insertRow(0);
   const monthYearCell = monthYearRow.insertCell(0);
    monthYearCell.colSpan = 7;
    monthYearCell.classList.add('month-year');

    const daysOfWeekRow = header.insertRow(1);

    for (let i = 1; i < 8; i++) {
      const cell = daysOfWeekRow.insertCell(i - 1);
      cell.innerHTML = ['S', 'M','T', 'W', 'T', 'F', 'S'][i % 7];
    }

    const body = table.createTBody();
    let day = 1;

    for (let i = 0; i < 6; i++) {
      const row = body.insertRow(i);

      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < startingDay) {
          const cell = row.insertCell(j);
          cell.innerHTML = '';
        } else if (day > daysInMonth) {
          break;
        } else {
          const cell = row.insertCell(j);
          const dayButton = document.createElement('div');
          dayButton.classList.add('day-button');
          dayButton.textContent = day;

          if ([1, 6, 13, 27].includes(day)) {
            dayButton.classList.add('current-month-day');
          }

          if (useBorder && day === currentDate.getDate() && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()) {
            dayButton.classList.add('today');
          }

          if (useBorder && selectedDay === day) {
            dayButton.classList.add('bordered');
          }

          if (!useBorder && selectedDay === day) {
            dayButton.classList.add('filled');
          }

         

          cell.appendChild(dayButton);
          day++;
        }
      }
    }

    calendarElement.innerHTML = '';
    calendarElement.appendChild(table);
  }

  function toggleFunction() {
    useBorder = !useBorder;
    renderCalendar();
  }

 

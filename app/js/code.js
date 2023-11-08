document.addEventListener("DOMContentLoaded", function () {
  const btns = document.querySelectorAll('.btn-toggle');
  const pageContent = document.getElementById('page-content');
  const pageContent2 = document.getElementById('page-content2');

  btns.forEach(btn => {
      btn.addEventListener('click', function () {
          // Перевірка, чи кнопка вже активна
          const isActive = btn.classList.contains('active1');

          // Сховування контенту при натисканні будь-якої іншої кнопки
          if (btn !== btn1) {
              pageContent.style.display = "none";
          }

          if (btn !== btn2) {
              pageContent2.style.display = "none";
          }

          // Видалення класу active1 з усіх кнопок
          btns.forEach(otherBtn => {
              otherBtn.classList.remove('active1');

          });

          // Додавання класу active1 на поточну кнопку, якщо вона не була активною
          if (!isActive) {
              btn.classList.add('active1');

          }

          // Відображення відповідного контенту
          if (btn === btn1) {
              pageContent.style.display = "block";
          } else if (btn === btn2) {
              pageContent2.style.display = "block";
          }
      });
  });
});

const btn1 = document.getElementById("btn1");
const rectangle = document.querySelector(".rectangle1");

btn1.addEventListener("click", function() {
  // Спочатку перевіряємо, чи прямокутник видимий
  if (rectangle.style.display === "none" || rectangle.style.display === "") {
    // Якщо прямокутник прихований, показуємо його
    rectangle.style.display = "block";
  } else {
    // Якщо прямокутник видимий, залишаємо його видимим
    rectangle.style.display = "block";
  }
});

const btn2 = document.getElementById("btn2"); // Додаємо іншу кнопку

btn2.addEventListener("click", function() {
  // При натисканні на іншу кнопку (btn2), ховаємо прямокутник
  rectangle.style.display = "none";
});


const btns = document.querySelectorAll('.btn-toggle');

btns.forEach(btn => {
  btn.addEventListener('click', function () {
    // Видалення класу 'active1' з усіх кнопок
    btns.forEach(otherBtn => {
      otherBtn.classList.remove('active1');
    });

    // Додавання класу 'active1' на поточну кнопку
    btn.classList.add('active1');
    
   
     
  });
});




  
  
  
  
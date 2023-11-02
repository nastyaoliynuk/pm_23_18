document.getElementById("btn1").addEventListener("click", function() {
    var pageContent = document.getElementById("page-content");
    
    if (pageContent.style.display === "none" || pageContent.style.display === "") {
        pageContent.style.display = "block";
    } else {
        pageContent.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll('.item-title.panel');

    elements.forEach(function (element) {
        var text = element.textContent;
        var maxWidth = 300; // Максимальна ширина контейнера

        if (element.scrollWidth > maxWidth) {
            while (element.scrollWidth > maxWidth && text.length > 0) {
                text = text.slice(0, -1); // Видаляємо останній символ тексту
                element.textContent = text + '...'; // Додаємо трійку крапок вкінці
                element.style.color = 'black'; // Встановлюємо білий колір для крапок
            }
        }
    });
});
const btn1 = document.getElementById("btn1");
const rectangle = document.querySelector(".rectangle1");

btn1.addEventListener("click", function() {
  if (rectangle.style.display === "none" || rectangle.style.display === "") {
    rectangle.style.display = "block";
  } else {
    rectangle.style.display = "none";
  }
});

const btns = document.querySelectorAll('.btn-toggle');
btns.forEach(btn => {
  btn.addEventListener('click', function () {
    // Приховання прямокутника при натисканні будь-якої іншої кнопки
    if (btn !== btn1) {
      rectangle.style.display = "none";
    }

    // Видалення класу active1 з усіх кнопок
    btns.forEach(otherBtn => {
      if (otherBtn !== btn) {
        otherBtn.classList.remove('active1');
      }
    });

    // Додавання або видалення класу active1 на поточній кнопці
    btn.classList.toggle('active1');
  });
}); 


  
  
  
  
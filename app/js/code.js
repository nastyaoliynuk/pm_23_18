document.addEventListener("DOMContentLoaded", function () {
    const btns = document.querySelectorAll('.btn-toggle');
    const pageContents = {
        'btn1': document.getElementById('page-content'),
        'btn2': document.getElementById('page-content2')
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





/*function changeClass(index) {
    const buttons = document.querySelectorAll('.btn-toggle');
    const rectangle = document.querySelector('.rectangle1');

    rectangle.classList.toggle('visible');

    if (selectedButton !== null) {
        selectedButton.classList.remove('active1', 'rectangle1');
        const previousContent = pageContents[selectedButton.id];
        if (previousContent) {
            previousContent.style.display = "none";
        }
    }

    buttons[index].classList.toggle('active1', 'rectangle1');
    const targetContent = pageContents[buttons[index].id];
    if (targetContent) {
        targetContent.style.display = "block";
    }

    selectedButton = buttons[index];
}*/

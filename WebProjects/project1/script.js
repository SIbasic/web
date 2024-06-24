let counter = 0;//задаем изначальное значение счетчика

//получаем доступ к элементам по из идентификатору:
const clickButton = document.getElementById("clickButton");//доступ к кнопке
const counterDisplay = document.getElementById("counter");//доступ к span со счетчиком

clickButton.addEventListener("click", function () {//добавляем слушатель, который отработает при нажатии кнопки
  counter++;//увеличиваем значение счетчсика на 1 при каждом нажатии
  counterDisplay.textContent = counter;//передаем это значение в наш span
});
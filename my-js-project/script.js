const button1 = document.getElementById('myButton'); // Находим кнопку на странице

button1.addEventListener('click', () => {
  console.log("Кнопка нажата!");
  alert("Ура! Получилось!");
});

const button2 = document.getElementById('background');

button2.addEventListener('click', () => {
  // Генерируем случайный цвет в формате #RRGGBB
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  
  // Меняем цвет фона страницы
  document.body.style.backgroundColor = randomColor;
});
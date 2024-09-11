// const nav = document.querySelector('nav')
// const div = document.createElement('div');
// div.className = 'nav__left__search-right';

// // Создаем <input> и задаем его атрибуты
// const input = document.createElement('input');
// input.type = 'text';
// input.placeholder = 'Mountain View, CA';

// // Создаем <button>
// const button = document.createElement('button');

// // Создаем <img> для <button>
// const img = document.createElement('img');
// img.src = './images/nav_img/search_right.svg';
// img.alt = 'search_right';

// // Добавляем <img> в <button>
// button.appendChild(img);

// // Добавляем <input> и <button> в <div>
// div.appendChild(input);
// div.appendChild(button);

// // Теперь переменная `div` содержит созданный элемент <div> и его содержимое
// console.log(div);
// if (div) {
//     if (window.innerWidth <= 393) {
//       // Проверяем, не содержится ли элемент уже в <nav>
//       if (!nav.contains(div)) {
//         // Добавляем элемент в контейнер <nav>
//         nav.appendChild(div);
//         console.log(window.innerWidth)
//       }
//     } else {
//       // Проверяем, содержится ли элемент в <nav>
//       if (nav.contains(div)) {
//         // Удаляем элемент из контейнера <nav>
//         nav.removeChild(div);
//         console.log(window.innerWidth)
//       }
//     }
//   }
// const windWidth = window.innerWidth; //define browser window width
// console.log(`Width is: ${windWidth}`);

// location.href = "https://youtube.com" // auto redirect on youtube

// alert('alskdfj') // надо удалить

// confirm('alskdfj')  // надо удалить

// const result = prompt("Ti kto?")// with input
// console.log(result);

// const htmlElement = document.documentElement;
// const headElement = document.head;
// const bodyElement = document.body;
// console.log(htmlElement);
// console.log(headElement);
// console.log(bodyElement);

// ----------------------------------------------------------------------

//QuerySelector - возвращает первый попавшийся элемент
// const item = document.querySelector('.posl'); //ПОИСК ПО КЛАССУ
// const tag = document.querySelector('h1'); //ПОИСК ПО ТЕГУ
// item.style.color = 'yellow' //цвет изменился только у одного элемента

//QuerySelectorAll - возвращает коллекцию(несколько элементов)
// const lis = document.querySelectorAll('li');// //ПОИСК ПО ТЕГУ
// const items = document.querySelectorAll('.posl'); //ПОИСК ПО КЛАССУ
// const lis_inners = document.querySelectorAll('li');
// const li_first = document.querySelectorAll('li')[0]; //ПОЛУЧЕНИЕ ОПРЕДЕЛЕННОГО(В ДАННОМ СЛУЧАЕ ПЕРВОГО) li
// for (let item of lis) { // перебор через for of
//     item.style.color = 'red'
// }
// for (let item of items) { // перебор через for of
//     item.style.color = 'yellow' //цвет изменился у двух элементов
// }
// lis_inners.forEach(item => { // перебор через forEach
//     console.log(item.innerHTML);
// })
// console.log(li_first);

// ---------------------------------------------------------------------------
// const elem = document.getElementById('list_elem')    // почти не используется, пишется без #
// const elems1 = document.getElementsByTagName('li')   // почти не используется
// const elems2 = document.getElementsByClassName('li') // почти не используется
// const elems3 = document.getElementsByName('li')      // почти не используется
// console.log(elem);
// console.log(elems1);
// console.log(elems2);
// console.log(elems3);
// -----------------------------------------------------------------------------

//Живая коллекция содержит актуальную инфу, а не живая содержит инфу на момент вызова

// const textElement = document.querySelector('li') //путь через querySelector
// console.log(textElement.innerHTML);
// textElement.innerHTML = 'Работает!!!'

// const izm = document.querySelectorAll('.posl')[0] //путь через querySelectorAll
// console.log(izm);
// izm.innerHTML = `${izm.innerHTML} <span style='color: blue'> added text to OOO</span>`

// const li_elem = document.querySelector('.li')
// li_elem.outerHTML = `<h5>${li_elem.innerHTML} поменялся сам тег</h5>`
// console.log(li_elem.outerHTML);
// console.log(li_elem);

// const elem = document.querySelectorAll('li')[4]
// console.log(elem.textContent);                  //игнорирует теги и выдает только текст
// elem.textContent = `<h1>теги не работают - безопасная вставка текста</h1>`

// ------------------------------------------------------------
// УДАЛЕНИЕ ОБЪЕКТА
// const element = document.querySelectorAll('.posl')[0]
// element.remove()

// ------------------------------------------------------------
// УПРАВЛЕНИЕ КЛАССАМИ - classList
// const elem = document.querySelector('.posl'); //получаем коллекцию элементов в переменную
// const elems = document.querySelectorAll('.posl'); //получаем коллекцию элементов в переменную
// const elemClassName = elem.className; // получаем имя класса в переменную

// for (let item of elems) { // для каждого элемента добавляем класс active
//     item.classList.add('active')
// }

// elem.className = 'big'; // меняем(ПЕРЕЗАПИСЫВАЕМ) имя класса
// elem.className = 'red'; // меняем(ПЕРЕЗАПИСЫВАЕМ) имя класса
// elem.classList.add('red') //ДОБАВЛЯЕМ ВТОРОЙ(ДОПОЛНИТЕЛЬНЫЙ) КЛАСС
// elem.classList.remove('posl') //УДАЛЕНИЕ класса
// elem.classList.toggle('active') //ДОБАВЛЕНИЕ ЕСЛИ ЕГО НЕТ, УДАЛЕНИЕ ЕСЛИ ОН ЕСТЬ
// elem.classList.contains('active') //проверка наличия, возвращает true/false

// ----------------------------------------------------------------------
// УПРАВЛЕНИЕ СТИЛЯМИ НАПРЯМУЮ
// const elem = document.querySelector('.posl'); //получаем элемент в переменную
// elem.style.color = 'red';

// -------------------------------------------------------------------------
//УПРАВЛЕНИЕ АТТРИБУТАМИ ЕЛЕМЕНТОВ
// getAttribute(attrName) - возвращает значение указанного аттрибута
// setAttribute(attrName) - добавляем указанный аттрибут и его значение к элементу
// hasAttribute(attrName) - возвращает true при наличии у элемента указанного аттрибута
// removeAttribute(attrName) - удаляет указанный аттрибут

const pic = document.querySelector('.picture') //получаем элемент img в переменную
// pic.setAttribute('src', './sun.jpg') // изменяем значение аттрубута src на ./sun.jpg
pic.setAttribute('width', '200px') //меняем(добавляем) значение аттрибута width на 400px
// pic.src = './car.jpg'; // так же можно менять аттрибуты и таким способом

// -------------------------------------------------------------------------
// ПРОСЛУШКА СОБЫТИЙ

// click ------------------
// const knopka = document.querySelector('.button')
// const img = document.querySelector('.picture')

// knopka.addEventListener('click', function () { // прослушка события c помощью addEventListener
//     img.remove()
// })
// knopka.onclick = function () { // прослушка события c помощью onclick, надо помнить разницу
//     img.remove()
// }

// input ------------------
const inputText = document.querySelector('#input-text')
const inputBlock = document.querySelector('#text-block')

inputText.addEventListener('input', function () {
    console.log(inputText.value);
    inputBlock.innerText = inputText.value
})

// -------------------------------------------------------------------------
// const textElement = document.querySelectorAll('li');
// for (const elem of textElement) {
//     const textElementContent = elem.innerHTML;
//     if (textElementContent === 'Йончи') {
//         console.log(textElementContent);
//     };
// };

// const elements = document.querySelectorAll('.like')
// for (let element of elements) {
//     const content = element.innerHTML
//     console.log(content);
// }


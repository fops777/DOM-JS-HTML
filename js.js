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
// const inputText = document.querySelector('#input-text')
// const inputBlock = document.querySelector('#text-block')

// inputText.addEventListener('input', function () {
//     inputBlock.innerText = inputText.value
// })

// Тоже самое(но мы просто передаем имя функции)

// const inputText = document.querySelector('#input-text')
// const blockText = document.querySelector('#text-block')

// inputText.addEventListener('input', typing)

// function typing() {
//     blockText.innerText = inputText.value
// }

// -------------------------------------------------------------------------
// ОБЪЕКТ EVENT в событиях
// const list = document.querySelector('#list')

// list.addEventListener('click', clickHandler)
// function clickHandler(event) { // вместо слова event можно написать что угодно
//     // console.log(event);
//     // console.log(this);
//     console.log(event.target);
// }

// const body = document.querySelector('.body') // на весь документ body
// body.addEventListener('click', (event) => {
//     console.log(event.target);
// })


// -------------------------------------------------------------------------
// РАБОТА С HTML ЭЛЕМЕНТАМИ
/*
Создать элемент
document.createElement('tag-name')

Изменить HTML содержимое внутри элемента
element.innerHTML = ''


Изменить текстовое содержимое внутри элемента
element.innerText = ''

Клонирование элемента
node.cloneNode() // если в () добавить true то скопируется со всем внутренним содержимым
false - без внутреннего содержимого

Вставить элемент внутрь другого элемента
element.append(nodeOrDOMString)

Удалить элемент
element.remove()

*/
// Выбор контейнера
// const container = document.querySelector('#elements-container')

// Создание заголовка
// const newHeader = document.createElement('h1')
// newHeader.innerText = 'New h1 element'
// container.append(newHeader)

// Клонирование элементов
// const mainHeader = document.querySelector('header')
// const headerCopy = mainHeader.cloneNode(true) // можно с true(скопируется со всеми внутренностями)
// container.append(headerCopy)

// Вставка html разметки через строки
// const htmlExample = '<h1>Еще один заголовок(добавлен через строку)</h1>'
// container.insertAdjacentHTML('beforeend', htmlExample)

// Вставка html разметки через шаблонные строки
// const text = '(добавлен через шаблонную строку)'
// const htmlExample2 = `<h1>Другой заголовок${text}</h1>`
// container.insertAdjacentHTML('beforeend', htmlExample2)


// -------------------------------------------------------------------------
// ПРАКТИКА - СПИСОК ЗАДАЧ

const todoList = document.querySelector('#todo-list')
const todoForm = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo-input')

todoForm.addEventListener('submit', onSubmint) // добавляем прослушку на форму

function onSubmint(event) {
    event.preventDefault(); //отменить отправку формы(отменить перезагрузку страницы)

    // Создаем элемент 
    const newTask = todoInput.value   // получаем значение из формы(инпута)
    const newElementLi = document.createElement('li') // создаем новый html элемент li
    newElementLi.innerHTML = newTask // в новосозданный пустой элемент li вставляем данные из input

    // Создаем кнопку удалить
    const deleteBtn = document.createElement('button') // создаем новый элемент button
    deleteBtn.setAttribute('role', 'button') // добавляем аттрибут
    deleteBtn.innerText = 'delete' // надпись внутри кнопки
    deleteBtn.style['margin-left'] = '7px' // добавляем margin-left
    newElementLi.append(deleteBtn); // добавляем кнопку(удалить) внутрь li элемента

    // Добавляем событие на кнопку удалить
    deleteBtn.addEventListener('click', deleteTask)
    function deleteTask() {
        this.closest('li').remove()
    }

    // Добавляем новый элемент li на странуцу
    todoList.append(newElementLi) // вставить <li>your task here</li> в todoList

    // Дополнительные действия
    todoInput.value = ' ' // очистить input
    todoInput.focus() // фокус на input
}
















// -------------------------------------------------------------------------
// Чуть чуть практики
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


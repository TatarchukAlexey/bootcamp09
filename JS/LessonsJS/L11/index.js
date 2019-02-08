
// /////----   Шаблонизация

// Этапы Шаблонизации:

// 1. Этап № 1 создать шаблон в HTML в невидимом теге
// 2. Этап № 2 стянуть шаблон в JS  через qweryStlector + обрезаем пробелы через innerHTML
// 3, Этап № 3 обработать его  в следующей функции Handlebars.compile(source) 
// 4. вставить через innerHTML функцию тег в HTML
// 5. Подлючаем библиотеку

// Особености массив не принимает, только объекты !!!!!!!!!!!!!!!!!!!

// Пример от Вовы

// <div class="content-placeholder"></div>

// <template id="example-template">
//     <ul>
//         {{#each people}}
//         <li>{{firstName}} {{lastName}}</li>
//         {{/each}}
//     </ul>
// </template>

// const data = {
// people: [
//     {firstName: 'Homer', lastName: 'Simpson'},
//     {firstName: 'Peter', lastName: 'Griffin'},
//     {firstName: 'Eric', lastName: 'Cartman'},
//     {firstName: 'Kenny', lastName: 'McCormick'},
//     {firstName: 'Bart', lastName: 'Simpson'}
// ],
// temp: ['a','b','c','d']
// };

// const source = document.querySelector('#example-template').innerHTML.trim();
// const templateFunc = Handlebars.compile(source);
// const markup = templateFunc(data);
// // console.log(markup);
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = markup;


///================================  Таже задача тольпо расписана (с Объектами)
// const data = {
//     people: [
//         {firstName: 'Homer', lastName: 'Simpson'},
//         {firstName: 'Peter', lastName: 'Griffin'},
//         {firstName: 'Eric', lastName: 'Cartman'},
//         {firstName: 'Kenny', lastName: 'McCormick'},
//         {firstName: 'Bart', lastName: 'Simpson'}
//     ],
//     temp: ['a','b','c','d']
//     };

// const source = document.querySelector('#example-template').innerHTML.trim();
// const templateFunc = Handlebars.compile(source);
// const container = document.querySelector('.content-placeholder');
// const markup = templateFunc(data);
// container.innerHTML = markup;


///================================  галерея

// const fire = {                       /////данные для шаблона
//     title: 'Gallery',
//     items: [
//         {img: 'https://placeimg.com/300/150/animals', text: 'animals'},
//         {img: 'https://placeimg.com/300/150/arch', text: 'architecture'},
//         {img: 'https://placeimg.com/300/150/nature', text: 'nature'},
//         {img: 'https://placeimg.com/300/150/people', text: 'people'},
//         {img: 'https://placeimg.com/300/150/tech', text: 'tech'},
//         {img: 'https://placeimg.com/300/150/any', text: 'random'}
//     ]
// };

// const container = document.querySelector('.gallery-content');  
// const source = document.querySelector('#example-template').innerHTML.trim();

// const template = Handlebars.compile(source);
// console.log(template);

// const markup = template(fire);  
// ////обязательно  передать аргументы, так как функция не поймет от куда брать данные и на основании чего строить дивы
// // <!-- Важно строить разметку можно или each или reduce , -->
// //именно здесь пишем редюс если не хотим использовать each 
// console.log(markup);

// container.innerHTML = markup;


///================================  Карточка юзера адаптивная с HTML

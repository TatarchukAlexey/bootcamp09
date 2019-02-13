
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


// ///================================  Регулярные выражения
// Регулярные выражения (РВ) - это особый язык для работы со строками с помощью шаблонов. 
// Способ найти определенные паттерны в строке и,
//  если необходимо, выполнить замену подстроки.

// Регурярные выражения встроены в JavaScript и создаются используя литерал регулярного выражения
// "" // "" или вызовом конструктора new RegExp()


/// самы популярный метод -метод регулярки или паттерна
// Для поиска точного соответствия объект RegExp имеет встроенный метод test, производящий 
// поиск подстроки и возвращающий true или false.


// метод  search  -- самы главный способ просто 2 косые //

// метод match - Ищет совпадение и возвращает первое совпадение

//replace -Метод replace возвращает новую строку в которой произошла 
// замена паттерна на строку-заменитель.

// Флаги
// i - ігнорує регістр*
// g - глобальний погук а не перший збіг*
// m - багатостроковий пошук*
// Класи
// \d - numbers 0-9*
// \D - not numbers*
// \w - word*
// \W - not word*
// \s - space*
// \S - not space*
// \b - word or symbol with spase around*  // ищу слово
// \B - not word*
// [] - набір *
// - діапазон *
// ^ - в [] це виключення за межами набору це початок строки*
// {} - показник кількості*
// () - група символів*
//  + - один або більше
//  ? - нуль або один
//  * - нуль або більше
//  . - будь - який символ*
//  $ - кінець строки*

//////////////// Пример

// let str = "Is am hello 55 5 7 oo 9 p i yyt rrr ew d q x z f g h SSS";
//  let reg = /am/gi;  // (i/gi/gin) i покажет тольько первое совпадение,  gi - по одной строке 
//  //gin по все строкам
//  const pattern = /HHHHHH/g;

//  console.log(str.match(reg));// получим массив ["am"]. вернет массив
//  console.log(reg.test(str));// получим массив ["hello"].  (true / false)
//  console.log(str.replace(pattern, "red"));// Is am hello 55 5 7 oo 9 p i yyt rrr ew d q x z f g h SSS
//  console.log(str.split(pattern));// ["Is am hello 55 5 7 oo 9 p i yyt rrr ew d q x z f g h SSS"]

////класы сокращают регулярки

 ///========  Якоря (спецсимволы )  ===========

 //     Знак каретки ^ и доллара $ называются якорями  ///


//  (?:) - виключення результату
//  x(?=y) - відповідність
//  x(?!y) - відплвідність якщо не йде у після х
//  x|y - або
// ?<=
//  ?<!


//////============================= Задачки

/*
  К pen уже подключен Handlebars.
  Используйте встроенные шаблоны и метод Handlebars.compile
  
  Создайте шаблон списка указаного во вкладке HTML.
  
  Отрендерите список в DOM по данным из массива listItems.
*/



 // //////////  (доп 1 задача) Задача №123  составить шаблон/////



// const products = [
//     { name: 'Apples', count: 50 },
//     { name: 'Grapes', count: 44 },
//     { name: 'Cheese', count: 128 },
//     { name: 'Milk', count: 293 },
//   ];
// //   const container = document.querySelector('.product');
// //   console.log(container);
// ///
// ////делаем из массива объект, так как функция const arr = ex(obj); 
// // по созданию лишек(разметки делает это только с объекта)!!! NO MASIV
// const obj = {
//     prod: products,
// }

// ///после создание объекта  (берем) шаблон с штмл шаблона темплейта
//   const source = document.querySelector('#example-template').innerHTML.trim();

//   const ex = Handlebars.compile(source);  //рендеринг шаблон, переводи из HTML в язык JS 
// //   console.log(ex);
//  // вызываем переменную куда будем записовать разметку 
//   const body = document.querySelector('body');
//   ////3.вызываем функцию которая запустит создание разметки через each
//   const arr = ex(obj);
//   body.innerHTML += arr;  ////делаем нужное количество строк



 // ////////// Задача #654   составить шаблон (допка №2)/////


/*
  К pen уже подключен Handlebars.
  Используйте встроенные шаблоны и метод Handlebars.compile
  
  Создайте шаблон поста указаного во вкладке HTML.
  Отрендерите список постов в DOM по данным из массива posts.
  
  Если в объекте поле isFav=true, в посте должна быть 
  разметка иконки избранного поста, в противном случае
  разметки иконки быть не должно.

  Используйте эту иконку для фона:
  https://image.flaticon.com/icons/svg/290/290413.svg
*/

const posts = [
    {
      title: "Phasellus volutpat metus",
      text:
        "Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Ut leo.",
      isFav: true
    },
    {
      title: "Nulla consequat massa",
      text:
        "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      isFav: false
    },
    {
      title: "In enim justo",
      text:
        "Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Suspendisse eu ligula. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus.",
      isFav: true
    },
    {
      title: "Vestibulum ante ipsum",
      text:
        "Vestibulum suscipit nulla quis orci. Praesent venenatis metus at tortor pulvinar varius. Nulla sit amet est.",
      isFav: false
    }
  ];

// ///после создание объекта  (берем) шаблон с штмл шаблона темплейта
  const source = document.querySelector('#example-template').innerHTML.trim();

  const result = Handlebars.compile(source);  //рендеринг шаблон, переводи из HTML в язык JS 
 console.log(result);
//  // вызываем переменную куда будем записовать разметку 
  const body = document.querySelector('body');
//   ////3.вызываем функцию которая запустит создание разметки через each

const mark = posTrue.reduce((acc, item) => acc + result(item), '');
body.innerHTML = mark;

console.log(mark);
// text (mark);
// function text (arr){

// }




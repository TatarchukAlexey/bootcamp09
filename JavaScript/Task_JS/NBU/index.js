// import { link } from "fs";

// import { link } from "fs";

// 1) Данні з інпута (по кліку, або на кнопку ЕНТЕР і інпут чиститься)
// 2) Створити силку з данними з інпута
// 3) Посилаємо запит
// 4) Перевести з JSON формата
// 5) Намалювати розмітку

// // затем `& ` затем `image_type` затем `=` затем(чтобы не прилетало ALL) `photo`  и снова `& `

//     let input = document.querySelector('.input');
//     let form = document.querySelector('.box');
//     let container = document.querySelector('#container');
    
//       // эта функция будет считывать даннные
//     function readValue(e) {  
//         e.preventDefault();  /// это метод чтобы страница не перезагружалась
//         let url = `https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&q=${input.value}&per_page=9`; //создаем ссылку запуска на картинки
//         fetchData(url);   //привязываем функцию 
//         form.reset();  /// метод который чистить форму инпут после ввода от юзера
//     }
//      /// эта функция отвечает за прием и обработку фотографий 
//     function fetchData(link) {
//         fetch(link)                ///функция вызова 
//             .then(res => res.json())   //// перевод фоток с json в  код JS
//             .then(data => createGallery(data.hits))    ///берем ссылки на каждую фотку
//             .catch(err => console.log(err))
//     }
    
//     ///эта функция создает дивы с фотками
//     function createGallery (arr) {
//         let string = arr.reduce((acc, el) => 
//         acc + `<div class="one"><p>Photographer is ${el.user}</p><img src=${el.webformatURL}></div>`,'');  
//         // эта формула создает 9 дивов с описанием и фотками
//         container.innerHTML = string;   /// результат перменой string будет записан в глобальный контейнер через метод innerHTML
//     }
    
//     form.addEventListener('submit', readValue); /// вызываем функцию после ввода запроса
//     //клик вешаем на форму , не на инпут. Моя частая ошибка!

//     window.addEventListener('DOMContentLoaded',readValue);

//     //убираем перезагрузку страницы


////================================= 2 задача по API

// Отримати масив валют з сайта НБУ 
// Силка для запиту 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
// Вивести інформацію на екран в форматі списка. Пункт списку має мати 3 спана:
// Спан №1 показує текстову назву валюти
// Спан №2 показує курс
// Спан №3 показує позначку валюти (наприклад USD)
// Створити на екрані 3 кнопки та інпут.
// 1)Кнопка №1 сортує від дорожчого до дешевшого
// 2)Кнопка №2 сортує від дешевшого до дорощого
// 3)Кнопка №3 сортує по алфавіту

// 1 при загрузке получаем список валют - fetch
// 2, создать разметку в штмл - inner
// - создать цыкл который будет создавать теги+ брать ключи в объектах + записывать их в спаны
// 3, привязать кнопку от дорогого к дешевому к списку валют - sort    
// 4, привязать кнопку от ДЕШЕВОГО К ДОРОГОМУ   sort 
// 5, привязать кнопку от а-я    sort
// 6, сделать фильтр по валюте через кнопку инпут   фильтр


let ul = document.querySelector(`ul`);
let form = document.querySelector(`.box`);
let div = document.querySelector(`.div`);
let input = document.querySelector(`.input`);
let button1 = document.querySelector(`.button1`);
let button2 = document.querySelector(`.button2`);
let button3 = document.querySelector(`.button3`);
let submitBtn = document.querySelector('.btn')

function mainBox (e){

const url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`;
fetch(url)
.then(response=>response.json())  
.then(arr =>{            /// при Апи все пишем в зене, масив приходит в зис поэтому надо все связывать с ним
    
if (e.target === button1) { arr.sort((a,b) => a.rate-b.rate); createList(arr);}  
//тут  делаем проверку на слушателя, если тру запускае сортировку списка, и вызываем функцию по созданию лишек
else if (e.target === button2){ arr.sort((a,b) => b.rate-a.rate ); createList(arr);}   // также 
else if (e.target === button3){ arr.sort((a,b) => a.txt>b.txt ? 1 :-1); createList(arr);}  //также
else if (e.target === submitBtn) {
//здесь логика кнопки сабмит и формы по импуту
    let submit = input.value;    ///берем значения которые вводит юзер в видет текста
    if (submit==="") {return;}   // делаем так чтобы не выдавало пустую строку
    // console.log(submit);
    // console.log(arr);
    
    let find = arr.find (el => el.cc  === submit || el.txt === submit ); 
    // запускаем поиск, сравниваем текст юзера с масивом объектов, и ищем нужное значения ключа. Ищем уникальный объект из списка объектов
    console.log(find);
   
let str = `<li><span>${find.txt}</span><span>${find.rate}</span><span>${find.cc}</span></li>`;//создаем список лишек с нужными ключами по значению
ul.innerHTML = str;   ///метод создание активации нтмл тегов.
form.reset();   /// делаемчтобы форма в конце очисчялась
}


})   ////////////  конец зена
.catch(err=>console.log(err));
}

function submitInput (e){  ///   //сюда вешаем событие клика на кнопку сабмит
    e.preventDefault();    
}

form.addEventListener("submit", submitInput);  //// активируем событие и привязываем его к функции
 div.addEventListener("click", mainBox);
// window.addEventListener(`DOMContentLoaded`, mainBox);

function createList (arr) {   // фун. которая берет объект в масиве и создает лишки из него в HTML. Обязательно ей нужно передать аргументы в ввиде массива API
for (let el of arr)
{
let str = `<li><span>${el.txt}</span><span>${el.rate}</span><span>${el.cc}</span></li>`;
ul.innerHTML += str;
}  
}














   



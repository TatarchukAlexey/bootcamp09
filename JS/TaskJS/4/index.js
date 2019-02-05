
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
// 4)В інпут вводимо назву валюти текст або cc і отримуємо курс конкретної валюти. 

// 1 при загрузке получаем список валют - fetch
// 2, создать разметку в штмл - inner
// - создать цыкл который будет создавать теги+ брать ключи в объектах + записывать их в спаны
// 3, привязать кнопку от дорогого к дешевому к списку валют - sort    
// 4, привязать кнопку от ДЕШЕВОГО К ДОРОГОМУ   sort 
// 5, привязать кнопку от а-я    sort
// 6, сделать фильтр по валюте через кнопку инпут   фильтр

let ul = document.querySelector(`ul`);
const url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`;
fetch(url)
.then(response=>response.json())  
.then(arr => {
for (let el of arr){
let str = `<li><span>${el.txt}</span><span>${el.rate}</span><span>${el.cc}</span></li>`;
    ul.innerHTML += str;
}

let sortInexpensiv = arr.sort((a,b) =>  a.rate-b.rate );
console.log(sortInexpensiv);

let sortExpensiv = arr.sort((v,r) => r.rate-v.rate );
console.log(sortExpensiv);


 })  
.catch(err=>console.log(err));




///////////////====================== Продолжение лекции


















   



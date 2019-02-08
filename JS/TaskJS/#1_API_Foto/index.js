
//////////////================= API

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






   



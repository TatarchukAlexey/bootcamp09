///////////////====================== Часть 1
        
//=================    API/REST/HTTP-метод/ JSON / fetch   ======================

   //  формат запроса
   //  HTTP-метод — определяет какую операцию выполнять
   //  Заголовок — позволяет клиенту передавать информацию о запросе
   //  Путь — путь к ресурсу. Доступные пути описываются в документации REST-сервиса
   //  Тело — дополнительный блок запроса, содержащий данные

// 1) точка входа  https://pixabay.com/api/          ///ссылка куда будет звпрос, вытягиваем с документации
// 2) source   https://pixabay.com/api/videos/    //тут ставим ресурс от куда будем сскачивать, конкретную часть
//3) параметры    // тут мы скачиваем не все что может дать апи а например только картинки, или тему картинки и размер
// -- key (required) обязательно записываем

//  const URL = `https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6 &image_type=photo`;
// ///после ссылки ставим `?` затем `key` затем `=` затем ключ авторизации
// затем `& ` затем `image_type` затем `=` затем(чтобы не прилетало ALL) `photo`  и снова `& `

// Виды запросов:
// GET запрос  -  READ  -  получить ответ на свой запрос от сервера
 // POST запрос  -  CREATE - отправка нового запроса, нового пользователя.
 // DELETE запрос - DEL -  удалили  информацию на сервере
 //  PUT запрос -  хочу обновить инфу на сервере

 ///////========================== REST
// REST (Representational state transfer) — представляет собой стиль архитектуры, основанный на наборе принципов, 
// которые описывают как сетевые ресурсы определяются и адресуются.
// RESTful API — работает как веб-сайт, мы посылаем запрос с клиента на сервер, но в ответ получаем запрошенные данные.

////////////////////////==================== JSON
// JSON - представляет собой формат данных
// Javascript и JSON отлично работают вместе благодаря методам JSON.stringify() и JSON.parse()
// JSON.stringify() - объект  преобразовывает в строку  Пример: // {"name":"Mango","age":3,"isHappy":true}
// JSON.parse() - преобразовывает объект в JSON  формат, т.е. строку. метод наоборот
//   задача  фронтенчика перевести в JSOn, перед отправкой на сервер 

///================ fetch(URL) (Это асинхронный код)
//   Особенности: он возвращаем промис. и делает GET запрос на сервер по умолчанию 

 //  fetch(URL)  /// он возвращаем промис. GET по умолчанию у него
//  так запускается функция по API в JS по ссылке выше. По умолчанию идет GET запрос.

//     .then(response=>response.json())  //здесь мы делаем полчаем ответ от сервера и проверяем его, если все ок формат жсон принимаем ответ в виде строки формата JSON
// другими словами  /response/ - это ответ от сервера!!!
//     .then(data=>console.log(data))  //здесь браузер парсит строку и создает рабочий объект для JS
//     .catch(err=>console.log(err)); // если ошибка будет ошибка на пути клиент сервер тогда сюда прийдет ошибка

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// САМОЕ ГЛАВНОЕ: ВСЕ ДЕЙСТВИЯ ДЕЛАЕМ ВО ВТОРОМ ЗЕНЕ. Все данные по объекту находятся в колбек функции цен-дата


 
///////////////====================== Часть 2

// localStorage - это ...хранилище, позволяет хранить пары ключ:значение на
//  компьютере пользователя и читать их,
//  когда пользователь снова вернется на страницу.

// localStorage.setItem(`test`, JSON.stringify([1,2,3,4,5]));  ///записует
// // localStorage.getItem(`test`);  //считует
// let str = JSON.parse(localStorage.getItem(`test`));    ///считует
// console.log(str);

// localStorage.setItem(`test`, JSON.stringify(8));  ///перезаписует если есть если нет создат

// localStorage.removeItem(`test`);  /// удаляет 1 элемент 

// localStorage.clear(); ///удаляет все объекты, всю историю , по всему сайту



////////////////////пример от Вовы



// let form = document.querySelector ("#form");
// let selectors = document.querySelectorAll("select");
// let body = document.querySelector("body");

// function readData(e) {
//     e.preventDefault();
//     let settings = {};
//     selectors.forEach(el => settings[el.name] = el.value);
//     localStorage.setItem('settings', JSON.stringify(settings));
//     changeStyle();
// }
// console.log(localStorage);

// function changeStyle () {
//     let obj = JSON.parse(localStorage.getItem('settings'));   ///pfgbcetv
//     if (!obj){      // если фолс тогда останови функцию
//         return
//     }
//     body.style.color = obj.color;
//     body.style.fontSize = obj.fontSize + 'px';
//     body.style.fontFamily = obj.fontFamily;
// }

// form.addEventListener ("submit", readData);
// window.addEventListener("DOMContentLoaded", changeStyle);


// API
// 1) точка входа  https://pixabay.com/api/          ///ссылка куда будет звпрос, вытягиваем с документации
// 2) source   https://pixabay.com/api/videos/    //тут ставим ресурс от куда будем сскачивать, конкретную часть
//3) параметры    // тут мы скачиваем не все что может дать апи а например только картинки, или тему картинки и размер
// -- key (required) обязательно записываем

//  const URL = `https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6 &image_type=photo`;
// ///после ссылки ставим `?` затем `key` затем `=` затем ключ авторизации
// затем `& ` затем `image_type` затем `=` затем(чтобы не прилетало ALL) `photo`  и снова `& `

 //  fetch(URL)
//  /// так запускается функция по API в JS по ссылке выше. По умолчанию идет GET запрос.
//     .then(response=>response.json())  //сервер шлю тебе запрос = а ты мне дай ответ в жсон формате
//     .then(data=>console.log(data))  //
//     .catch(err=>console.log(err)); // если
 
 // GET запрос  -  READ  -  получить ответ на свой запрос от сервера
 // POST запрос  -  CREATE - отправка нового запроса, нового пользователя.
 // DELETE запрос - DEL -  удалили  информацию на сервере
 //  PUT запрос -  хочу обновить инфу на сервере


 // Вся инфа с сервака хранится в формате JSOn (он хранится в формате строки).
 //CVS - формат данных в виде екселя, где вся инфа через запятую перечисляется.
 // XML - формат похож на HTML.  создается у ввиде тегов

//  Наша задача перевести в JSOn, перед отправкой на сервер


///////////////====================== Продолжение лекции

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


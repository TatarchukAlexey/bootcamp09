/////////////////////  События . Лекция

// Важные методы:

// element.addEventListener(event, handler); создать слушателя
// element.addEventListener(event, handler); удалить слушателя
// event.preventDefault() - отмена перезагрузки
// event.type -	Тип события ( например click )
// event.target - Целевой элемент при событии 
// event.stopImmediatePropagation() - прекращения всплытия полностью


// Дополнительные события:
// - DOMContentLoaded – браузер полностью загрузил HTML и построил DOM-дерево.
//  document.addEventListener("DOMContentLoaded", callback);
// - load – браузер загрузил все ресурсы.
// - beforeunload/unload – уход со страницы.

// window.onbeforeunload -стандарт для того, чтобы проверить, 
// сохранил ли посетитель данные, действительно ли он хочет покинуть страницу.


// События мыши:
// mousedown - кнопка мыши нажата над элементом.
// mouseup - кнопка мыши отпущена над элементом.
// mouseover - курсор мыши появился над элементом. /// при движении мыши по элементам
// mouseout - курсор мыши ушел с элемента.
// mousemove - каждое движение мыши над элементом генерирует это событие.

// event.target – элемент, на который пришла мышь, то есть на котором возникло событие.
// event.relatedTarget – элемент, с которого пришла мышь.

// click - Вызывается при клике мышью, то есть при mousedown, 
// а затем mouseup на одном элементе
// contextmenu - Вызывается при клике правой кнопкой мыши на элементе.
// dblclick - Вызывается при двойном клике по элементу.
///клик вызывает сначала mousedown, а затем mouseup и click. 

/////////// ================ НКоординаты ============

// Свойства clientX/clientY содержат координаты курсора относительно текущего окна.
// Свойства pageX/pageY содержат координаты курсора относительно документа

//////////==========Скан-коды
// при нажатии клавиши S (не важно, каков регистр и раскладка) её скан-код будет
//  равен "S".charCodeAt(0).Скан-код хранится в KeyboardEvent.key
// 

//////////////// submit //////////////////////










 ////////////////===========================================================
/* ///////////////////// задачка сайтик *////////////////////

// 1) При скролі сайту на велечину хедера фбо більше меню стає фіксованим
// 2) При скролі сайту меньше ніж висота хедера меню стає на почвткову позицію


// let header = document.querySelector (`.header`);
// let nav = document.querySelector (`#navigation`);

// let result = function(){
//     if (pageYOffset>header.offsetHeight){
//         nav.classList.add(`fixed-nav`);}
//         else {nav.classList.remove(`fixed-nav`);
//     return result;
//     }
// }

// window.addEventListener('scroll',result);

// // header.addEventListener (`scroll`,result);
// // navigation.addEventListener (`scroll`,result);



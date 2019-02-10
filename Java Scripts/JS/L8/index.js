/////////////////////  Србытия  

// Простые:

// mousedown - кнопка мыши нажата над элементом.
// mouseup - кнопка мыши отпущена над элементом.
// mouseover - курсор мыши появился над элементом. /// при движении мыши по элементам
// mouseout - курсор мыши ушел с элемента.
// mousemove - каждое движение мыши над элементом генерирует это событие.

// / Комплексные:
// click - Вызывается при клике мышью, то есть при mousedown, 
// а затем mouseup на одном элементе
// contextmenu - Вызывается при клике правой кнопкой мыши на элементе.
// dblclick - Вызывается при двойном клике по элементу.

///клик вызывает сначала mousedown, а затем mouseup и click. 

///////////  Нужная штука , для игр особенно
// Свойства clientX/clientY содержат координаты курсора относительно текущего окна.
// Свойства pageX/pageY содержат координаты курсора относительно документа

// Есть всего три события клавиатуры: keyup, keydown, keypress


// Event   
// window.addEventListener(`keyboard`,функция)
// console.log(e.code);

// нужно отслеживать ключ key в списке который дает event

// let box = document.querySelector (`.box`);
// box.style.rigth = "100 px";
// console.log(box.style);
 
/* ///////////////////// задачка сайтик */

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



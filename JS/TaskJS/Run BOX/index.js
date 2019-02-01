// 2) Написати скрипт який при ховері буде міняти позицію кнопок на екрані,
//  щоб не можна було по них клікнути
// 3) Нова позиція кнопок має бути випадковою
// 4) Кнопки не повинні виїжати за межі екрану
// 5) Позиція кнопок має вираховуватися відносно висоти і ширини вікна браузера
// 6) Переміщення кнопок зробити плавним за допомогою transition
// 7) Визначати кнопку на якій відбулася подія можна двома способами:
// 7.1) event
// 7.2) this

// 8) Корисні команди:
// window.innerWidth
// window.innerHeight
// clientHeight
// clientWidth
// mouseenter

let box = document.querySelector (`.container`); 
let box2 = document.querySelector(`.win`)  // вызываем любой контейнер, для того чтобы померять его высоту и ширину
let x = window.innerWidth-box2.clientWidth;  /// отнимаеш шиирину экрана от ширины бокса
let y = window.innerHeight-box2.clientHeight;  /// отнимаеш высоту экрана от ширины бокса
    
const result = function (e){   /// вызываем список event, в котором мы сможем выбрать необходимые свойства ссs
    let a =  Math.round((Math.random()*y));  // получаем случайное число приведенное к целому и множем на результат отнимание ширин экрана и бокса
    let b =  Math.floor((Math.random()*x));
   
    e.target.style.left=`${b}px`;   // берем нужное свойство со списка евент и приравниваем к получаемому числу + добовляем пиксели. 
    e.target.style.top=`${a}px`;   
    e.target.style.transition = `0.1s`; //обращаемся к свойству CSS и меняем его 
    // e.target.style.fontSize = `10px`; //обращаемся к свойству CSS и меняем его 
   
    console.log(e);
    console.log(a);
 
}

box.addEventListener(`mouseover`,result);
 //оживляем HtML через addEventListener. 
// Говорим диву box => сделай то, что написано в функции result при таком то событии





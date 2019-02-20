/*
  Реализуйте форму фильтра товаров в каталоге и список отфильтрованных товаров.
  Используйте шаблонизацию для создания карточек товаров.
  
  Есть массив объектов (дальше в задании), каждый из которых описывает 
  ноутбук с определенными характеристиками.
  
  Поля объекта по которым необходимо производить фильтрацию: size, color, release_date.
  Поля объекта для отображения в карточке: name, img, descr, color, price, release_date.
    
  Изначально есть форма с 3-мя секциями, состоящими из заголовка и группы 
  чекбоксов (разметка дальше в задании). После того как пользователь выбрал 
  какие либо чекбоксы и нажал кнопку Filter, необходимо собрать значения чекбоксов по группам. 
  
  🔔 Подсказка: составьте объект формата
      const filter = { size: [], color: [], release_date: [] }
    
  После чего выберите из массива только те объекты, которые подходят 
  под выбраные пользователем критерии и отрендерите список карточек товаров.
  
  🔔 Каждый раз когда пользователь фильтрует товары, список карточек товаров очищается, 
      после чего в нем рендерятся новые карточки товаров, соответствующих текущим критериям фильтра.
*/
//   Поля объекта по которым необходимо производить фильтрацию: size, color, release_date.
//  +1. Сделать шаблон
//  +2.  собрать значения чекбоксов по группам. 
//  const filter = { size: [], color: [], release_date: [] }
//  3.выберите из массива только те объекты, которые подходят 
//  под выбраные пользователем критерии и отрендерите список карточек товаров.
//  4,Каждый раз когда пользователь фильтрует товары, список карточек товаров очищается, 
//  после чего в нем рендерятся новые карточки товаров, соответствующих текущим критериям фильтра.

const laptops = [
    {
      size: 13,
      color: 'white',
      price: 28000,
      release_date: 2015,
      name: 'Macbook Air White 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 13,
      color: 'gray',
      price: 32000,
      release_date: 2016,
      name: 'Macbook Air Gray 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 13,
      color: 'black',
      price: 35000,
      release_date: 2017,
      name: 'Macbook Air Black 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'white',
      price: 45000,
      release_date: 2015,
      name: 'Macbook Air White 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'gray',
      price: 55000,
      release_date: 2016,
      name: 'Macbook Pro Gray 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'black',
      price: 45000,
      release_date: 2017,
      name: 'Macbook Pro Black 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'white',
      price: 65000,
      release_date: 2015,
      name: 'Macbook Air White 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'gray',
      price: 75000,
      release_date: 2016,
      name: 'Macbook Pro Gray 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'black',
      price: 80000,
      release_date: 2017,
      name: 'Macbook Pro Black 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
  ];
 

  const form = document.querySelector(".form");
  const submit = document.querySelector(".submit");
 
  form.addEventListener("submit", take);



function take (e){
e.preventDefault();
const input = Array.from (document.querySelectorAll('.js-form input:checked')); 
// 1способ сделать из псевдомассива массив для работы с методами;
// const input = [...document.querySelectorAll('.js-form input:checked')]; 
 // 2 способ сделать из псевдомассива массив для работы с методами;
// console.log(input); 
let size = input.filter(el=> el.name === "size").map(el => el.value);
// filter покажет все елементы массива с ключами size - в данном случае это ипуты
// map выберет в инпутах-елементах значения этих сайзев 
// console.log(size); // ["number"]
let color = input.filter(elem => elem.name === 'color').map(el=> el.value);
let release_date = input.filter(elem => elem.name === 'release_date').map(el=> el.value); 
// console.log(sizeM);

const filter = { size, color, release_date}; // делаем объект с ключами ( значения вподтягиваются от переменных)
console.log(filter);

// ( 3.выберите из массива laptops  только те объекты, которые подходят под выбраные пользователем критерии filter
const result = laptops.filter(el => filter.size.includes(String(el.size)) || filter.size.length === 0)
.filter(el =>filter.color.includes(String(el.color)) || filter.color.length===0)
.filter(el =>filter.release_date.includes(String(el.release_date)) || filter.release_date.length === 0);
//Логика : выбери или нужный масив или пустой, без пустого массива функция дальше не пойдет поэтому он нужен
// console.log(result);  // тут мы полуаем массив с объектами 
createBox(result); 
}
// console.log(take()); // результат [{…}, {…}, {…}]

const box = document.querySelector(".box");

function createBox (arr){  //функция построения карточки выбора изера
  // console.log(arr);  
  const source = document.querySelector('#example-template').innerHTML.trim();
  const template = Handlebars.compile(source);
  const str = arr.reduce((acc, item) => acc + template(item), '');
  box.innerHTML += str;
  }

form.addEventListener('reset', clearForm); 

function clearForm (e){  // функция очистки выбора юзера

console.log(e.target.nextElementSibling);

const arrRemove = e.target.nextElementSibling
 arrRemove.innerHTML = '';  //чистить внутренности тега
}

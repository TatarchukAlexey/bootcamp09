// Методы 


// Let numbers = [10,2,4];
//       /////////////////Общий Шаблон
// let result =  arr.method (function (num, index, arr)){
// }

// method - Map, reduce, и т.д.

// (num, index, arr)  
//num - попадает элемент массива, первый параметр. Он обязателен  // это 10
// index (не обязатален)- всегда попадает порядкой номер елемента который в первом параметре /// это 0 при первом круе
//(не обязатален) - это сам массив с которым работаем. // это весь массив  [10,2,4];


/////////////////// Метод Map

// Аналог цыкла for (если надо перебрать массив, и седлать что то с ним тогда отлично можно использовать)
/// Он всегда делает копию массива

// первый вариант
// let money = [500, 500, 500];
//  let result = money.map(function(el){  // возьми массив и умнож все елементы на 0,7
//   return  el * 0.7;
//  });
//  console.log(result);

// второй вариант, упрощенный. 

// let money = [500, 500, 500];
//  let result = money.map(el=>el * 0.7)  // возьми и перебери масив и сделай то что в теле
//  console.log(result);
 
////////////////// Метод filter  ////////////////

// Задача его отфильтровать масив по каким то параметрам. Ищем  елемент или элементы по параметру
//Выведет все элементы которые подпадают под параметры поиска

  // Раньше отфильтровывали через такой цыкл 
//  let result = [];
//  for (let el of numbers){
//    if (el<=10)
//    result.push(el);
//  }

// Теперь через команду filter (в фильтре всегда есть условие, проверка)

// let numbers = [1, 15, 25];

//  let result = numbers.filter(function(el){  // возьми массив и умнож все елементы на 0,7
//   if (el > 10)
//   {              //// После ифа всегда ковычки фигурные!!!!!!!!!!!!!1не забывать!!!!!!
//   return el;
// }  // будет ритернится только, то что дает проверку true, фолсы в ретерн не попадают!
//  });
//  console.log(result);

// Краткая запись
// let numbers = [1, 15, 25];
// let result = numbers.filter(el=>{  // возьми массив и умнож все елементы на 0,7
//     if (el > 10) { return el;}  
//    })
//  console.log(result);


// Фильтрами можно удалять елементы

////////////////// Метод find  ////////////////

// Придуман для оптимизации. Если мы знаем что с милионна есть одни унивкальный элемент (типа ид)
// тогда мы найдем его через этот идишник. Файнд и фильтр похохие методы.
// Если не знаем сколько элементов тогда используем фильтр , если знаем тогда файнд.
// Файнд работает пока не найдет этот одни элемент, и затем выведет его.

////////////////// Метод reduce  ////////////////

// Он иммет уже 4 параметрa
// Суть метода. Взять каждый элемент массива и сделать какуе то операцию. сплюсовать отнять или еще что то.Взять
//ВЫполняет такие задачи: объеденить 2 масива(как конкат),
// Используется например в корзинах интернет магазинов


/// Пример функции, в которой можно сплюсовать все елементы

// let numbers = [1,10, 15, 25];
// let result = numbers.reduce (function(acc,el){ 
  // acc - сюда записывается действие кот. идет в теле
//    return acc+el;
// },0)               //////////по дефолту(изначально) надо указывать 0. за пределами функции
// console.log(result);


////////////////// Метод sort  ////////////////

// Делает список в алфавитном порядке

// let numbers = [1,10, 15, 25];
// //  Сначала в а попадет 1 а в б 10

// let result = numbers.sort (function(a,b){ // acc - сюда записывается действие кот. идет в теле
//  if (a>b){
//   return 1          ////////результат [1, 10, 15, 25] Делаее по списку
//  }  else {
//   return -1         ////////результат [1, 10, 15, 25]. Меняем 1 и - 1 и тогда все наоборот.
//  } 
// })               
// console.log(result);

// a-b  это сортирует от меньшего к большому
// b-a  это сортирует от большому к меньшему

// Сорт он мутирует оригинал, он не копирует его для работы

// Как осортировать строки(текст)?
// Первый пвариант
// const words = ["c", "b", "a", "f", "k"];
// console.log(words.sort());   /// только за алфавитным порядком
// console.log(words.sort().reverse());  /// только за алфавитным порядком , обратно надо делать реверс

// второй вариант
//  words.sort(a,b) => a>b

////////////////// Метод every / some  ////////////////

// every / some делают проверки. Возвращают тру или фолс / true || false

//Эти методы не меняют оригинал, только проверка на подлдиность условия

// let numbers = [1,10, 15, 25, 0];

// let result = numbers.every (el => el > 0);

// console.log(result);


// let numberSome = [1,10, 15, 25, 0];    // если не прошел переверку

// let result1 = numberSome.some (el => el < 0);

// console.log(result1);



////////////////////////////// Задачки для практикума /////////////////////////

// const scientist = [{
//   first: 'Albert',
//   last: 'Einstein',
//   year: 1879,
//   passed: 1955
// },
// {
//   first: 'Isaac',
//   last: 'Newton',
//   year: 1643,
//   passed: 1727
// },
// {
//   first: 'Galileo',
//   last: 'Galilei',
//   year: 1564,
//   passed: 1642
// },
// {
//   first: 'Marie',
//   last: 'Curie',
//   year: 1867,
//   passed: 1934
// },
// {
//   first: 'Johannes',
//   last: 'Kepler',
//   year: 1571,
//   passed: 1630
// },
// {
//   first: 'Nicolaus',
//   last: 'Copernicus',
//   year: 1473,
//   passed: 1543
// },
// {
//   first: 'Max',
//   last: 'Planck',
//   year: 1858,
//   passed: 1947
// },
// {
//   first: 'Katherine',
//   last: 'Blodgett',
//   year: 1898,
//   passed: 1979
// },
// {
//   first: 'Ada',
//   last: 'Lovelace',
//   year: 1815,
//   passed: 1852
// },
// {
//   first: 'Sarah E.',
//   last: 'Goode',
//   year: 1855,
//   passed: 1905
// },
// {
//   first: 'Lise',
//   last: 'Meitner',
//   year: 1878,
//   passed: 1968
// },
// {
//   first: 'Hanna',
//   last: 'Hammarström',
//   year: 1829,
//   passed: 1909
// }
// ];

// 1) отримати масив вчених що народилися в 19 ст

// let result = scientist.filter(function(el){
//   return (el.year < 1900 && el.year >1800);
// });
// console.log(result);


// 2) знайти суму років скільки прожили всі вченні

// let result = scientist.map(function(el){
//   return (el.passed-el.year);
// });
// console.log(result);  // (12) [76, 84, 78, 67, 59, 70, 89, 81, 37, 50, 90, 80]
// let result2 = result.reduce(function(acc,el){
//   return acc+el;
// },0);
// console.log(result2);    ///861 

// 3) Відсортувати вчених по алфавіту

// let result = scientist.sort(function(a,b){
//   if (a>b){
//     return -1;
//   } else {
//     return 1;
//   }
// });
// console.log(result);

// 4) Відсортувати вчених по даті народження

// let result = scientist.sort(function(a,b){
//   if (a.year<b.year){
//     return -1;
//   } else {
//     return 1;
//   }
// });
// console.log(result);

// // 5) Відсортувати вчених по кількості прожитих років
// let result = scientist.map(function(el){
//   return (el.passed-el.year);
// });
// console.log(result);  // (12) [76, 84, 78, 67, 59, 70, 89, 81, 37, 50, 90, 80]

// let result2 = result.sort(function(a,b){
//   if (a<b){
//         return -1;
//       } else {
//         return 1;
//       }
//     });
// console.log(result2);    ///(12) [37, 50, 59, 67, 70, 76, 78, 80, 81, 84, 89, 90]

// 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті
// let result = scientist.filter(function(el){
//   if (el.year>1800){   /// оставь всех кто старше 1800 г.
//     return el.year;
//   };
// });
// console.log(result);

// 7) Знайти вченого який народився найпізніше.

// let result = scientist.sort(function(a,b){
//   if (a.year>b.year){
//             return -1;
//           } else {
//             return 1;
//           }
//         });
  
// console.log(result[0]);  //чтобы вывести первый или последний нужно просто взять в квадр кавычки

// 8) Знайти рік народження Albert Einstein

// let result = scientist.find(function(a){
//  return a.last==="Einstein";  // возьми все ключи с именем last и найди среди них Eнштейна
// });
// console.log(result.passed);

// 9) Знайти вчених прізвище яких починається на літеру С

// let result = scientist.filter(function(el){
//   return el.last[0] === "C"   
// });
// console.log(result);

// 10) Видалити з масива всіх вчених імя яких починається на A

// let result = scientist.filter(function(el){
//   return el.first[0] === "A"   
// });
// console.log(result);



////////////// Доп задание по 5 модулю ////////////////////

//////////////////////1

/*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

/* 
  Функция findGreaterThan получает два аргумента - число и массив.
  Возвращает новый массив, содержащий элементы которые больше числа.
*/

// новый вариант:

// const findGreaterThan = (num, arr) => {

//   let result = arr.filter (function(el){
//    if (el>num){
//      return el;
//    }
//   })
//   return result;
// };

// //   Старый вариант через цыкл
// // const result = [];

// // //   for (let i = 0, max = arr.length; i < max; i += 1) {
// // //     if (arr[i] > num) {
// // //       result.push(arr[i]);
// // //     }
// // //   }

// console.log( findGreaterThan(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
// console.log( findGreaterThan(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
// console.log( findGreaterThan(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]


////////////////////// 1,2
// /* 
//   Функция multiplyBy принимает два аргумента - число и массив. 
//   Возвращает массив все значения которого умножены на число.
// */
// const multiplyBy = (num, arr) => {
//   let result = arr.map(function(el){
//     return el*num;
//   });
//   return result;
// }
// console.log( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
// console.log( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
// console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]

// старый вариант

//   let result = [];
//   for (let i = 0, max = arr.length; i < max; i += 1) {
//     result.push(arr[i] * num);
//   }
// return result;

////////////////////// 1,3


// /* 
//   Функция summAllNumbers принимает любое число аргументов.
//   Возвращает число - сумму всех аргументов.
// */
  // Новый вариант с методами

// function summAllNumbers(...args) {
//   let result = args.reduce(function(acc,el){
//    return acc+el;
//   },0);
//   // for (let i = 0, max = args.length; i < max; i += 1) {
//   //   accumulator += args[i];
//   // }
//   return result;
// }

// console.log( summAllNumbers(1, 2, 3) ); // 6
// console.log( summAllNumbers(1, 2, 3, 4) ); // 10
// console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15


///////// Старый вариант

// function summAllNumbers(...args) {
//   let accumulator = 0;

//   for (let i = 0, max = args.length; i < max; i += 1) {
//     accumulator += args[i];
//   }

//   return accumulator;
// }

// console.log( summAllNumbers(1, 2, 3) ); // 6
// console.log( summAllNumbers(1, 2, 3, 4) ); // 10
// console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15


////////////////////// 1,4

// /* 
//   Функция findEvery получает два аргумента - число и массив.
//   Возвращает true если все элементы массива больше или равны числу.
//   Иначе если есть хоть один элемент меньше числа, то возвращается false.
// */

// Новый вариант 

// const findEvery = (num, arr) => {
//   let result = arr.every(function(el){
//     if (num<=el){
//       return el;
//     }
//   });
//   return result;
// };

// console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
// console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
// console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true


//////////////////////////////////////C   Старый вариант
// const findEvery = (num, arr) => {
//   for (let i = 0, max = arr.length; i < max; i += 1) {
//     if (arr[i] < num) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
// console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
// console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true




///////////////////         2   доп задача   ////////////////

/*
  Напишите функию getPropValues(arr, prop), принимающую 
  параметры arr - массив, и prop - имя ключа в объекте. 
  
  Функция должна возвращать массив всех значений этого ключа из arr.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//   { name: "Mango", age: 20, isActive: true },
//   { name: "Poly", age: 18, isActive: false },
//   { name: "Ajax", age: 30, isActive: true },
//   { name: "Chelsey", age: 45, isActive: false }
// ];

// // Вызовы функции для проверки
// console.log( getPropValues(guests, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']

// console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]

// console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]
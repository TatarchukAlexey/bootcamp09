/////////////Функциональные методы массивов///////

//Шаблон

// array.method (item => {
//     // логика которая будет применяться на каждой итерации
//     });

 //////////////////////forEach/////////////////// 

// array.forEach(callback[currentValue, index, array]);

//     Перебирает
// Может изменять
// Не возвращает

// numbers.forEach(
//     (num, idx) => console.log(`index ${idx}, value ${num}`)
//   );

////////////////////    Map  ////////////////

// array.map(callback[currentValue, index, array]);

// Используется для транформации массива.
//  Применяет callback-функцию к каждому элементу исходного массива,
//   результат работы callback-функции записывает в новый массив,
//  который и будет результатом выполнения метода.

// const numbers = [1, 2, 3];

//  const doubledNumbers = numbers.map(num => num * 2);

//  console.log(doubledNumbers); // [2, 4, 6]

///////////////// filter //////////////////

//Если ничего не найдено, вернет пустой массив. 

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//   console.log(
//     numbers.filter(num => num > 5)
//   ); // [6, 7, 8, 9]

// console.log(
//     numbers.filter(num => num < 5)
//   ); // [0, 1, 2, 3, 4]

///////////////////find///////////////////

// Используется для поиска уникального элемента массива
// Перебирает
// Не изменяет
// Возвращает элемент

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let x =  numbers.find(el => el<5);
// console.log(x);

// const users = [
//   { id: "000", name: "Mango", isActive: true },
//   { id: "001", name: "Poly", isActive: false },
//   { id: "002", name: "Ajax", isActive: true },
//   { id: "003", name: "Chelsey", isActive: false }
// ];

// // 2 одинаковых метода по разному записаны:

// const user = users.find(user => user.id === "001"); 
//  console.log(user);
// //метод поиска в массиве нужного элемента или в объекте
// const getUserById = (arr, id) => arr.find(x => x.id === id);
//  console.log( getUserById(users, "001") );
//перменная в которой записана функция с 2 параметрами(объекты users и значения ключа)
// и поставлена задача через файнд найти в масиве с такими объектами ключи с такми значениями

// первый вариант - длинный
// const arr = users.find(function(el){
//     return  el.id ==="002"; 
//   })
//   console.log(arr);
  
  // второй вариант - короткий
//   const arr = users.find(arr => arr.id === "002");
// console.log(arr);


///////////////////   every/some   ////////////////////

// Метод every проверяет, прошли ли все элементы массива тест,
//  Возвращает true или falce

// Перебирает
// Не изменяет
// Возвращает true или false

// const isBigEnough = val => val >= 10;

// console.log(
//   [12, 5, 8, 130, 44].every(isBigEnough)
// ); // false

// console.log(
//   [12, 54, 18, 130, 44].every(isBigEnough)
// ); // true


/////////////////////   reduce ///////////////////
// array.reduce(
//     callback[previousValue, currentItem, index, array],
//     initialValue
//   )
// previousValue - промежуточный результат (аккумулятор)
// currentItem - текущий элемент массива
// index - индекс текущего элемента массива
// array - оригинальный массив

// Используется при подсчетах , в корзинах интерент магазинов
//Функция reduce создаст новую переменную, называемую аккумулятор.
// let arr = numbers.reduce(function(acc,el){
    //      return acc+el;
    //  },0);       /// ставим 0 обязательно  

// const numbers = [1, 2, 3, 4, 5];
//1
// const summ = numbers.reduce((acc, value) => acc + value, 0);
//   console.log(summ); // 15
//2
//  let result = numbers.reduce(function(acc,el){
//      return acc+el;
//  },0);             
// console.log(result);


/////////////////////  sort  ///////////////////

// Перебирает
// Изменяет
// Возвращает коллекцию

// Положительное значение, если a > b
// Отрицательное значение, если a < b
// Если равны – можно 0, но вообще – не важно, 
// что возвращать, если их взаимный порядок не имеет значения.






//   const sortByActiveDays = (a, b) => a.daysActive - b.daysActive;
  
//   console.log(
//     users.sort(sortByActiveDays)
//   )


/////////////////////      Цепочки вызовов методов массива

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = numbers
//   .filter(x => x % 2 === 0)
//   .map(x => x * 2)
//   .reverse();

// console.log(result);


////////////////////// Задачки ///////////////////





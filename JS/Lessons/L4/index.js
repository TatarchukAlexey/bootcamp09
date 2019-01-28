////////////////////////  Объекты  //////////////////////////
// const hotel = {
//     name : "Resort Hotel",
//     stars: 5,
//     capacity: 100,
//   };

//1 Это способ как увидить свойства (весь объект с ключами и их значениями)
//   for (let keys in hotel){   
//   }
//   console.log(hotel); 

// 2 Это способ как увидить только ключи, вызывается через любую переменную
// let x = Object.keys(hotel);
// console.log(x);

// 3 Это способ как увидить только значения ключей, вызывается через любую переменную
// let x = Object.values(hotel);
// console.log(x);

// 4 Это способ как увидить только ключи, вызывается через любую переменную
// let x = Object.entries(hotel);
// console.log(x);

// Вот что будет в консоле
// (3) [Array(2), Array(2), Array(2)]
// 0: (2) ["name", "Resort Hotel"]
// 1: (2) ["stars", 5]
// 2: (2) ["capacity", 100]

// Object.assign(target, ...sources) -  //это слияние объектов



// Это важная функция для работы с прайсами с меню и юзарами, с асортиментом

// // let a = {}  //// Это объект
// let a = {                      // Это объект              
// name :"Resort Hotel",          ///ключ
// status: "Lux",                 ///ключ
// stars: 5,                       ///ключ
// }

/// Ключ передается только в формает строки!!!!!!!!!!!!!!!!!1

// let coffe = {
//   name: "Americano",
//   type: "Arct",
//   size: "Medium",
//   sugar: true,
//   price: 25,
//   currency: "UAH",
//   id: 35,
  
// }
// console.log(coffe);
// // delete coffe.price;   //удаляем ключ

// const val = Object.values(coffe); // выведет все ключи
// console.log(val);

// const keys = Object.keys(coffe); // выведет все значения объекта
// console.log(keys);


// let spx = "price" in coffe;  /// проверка есть ли в объекте ключ
// console.log(spx);             /// ответ : true bkb false


// console.log(coffe.name);
// console.log(coffe.price);  // когда мы знаем точно какой есть ключ
// console.log(coffe.price);  // покажет значение ключа

// coffe.price = 50;     // так мы изменяем ключ
// coffe.id = 5;         // так мы добовляем ключ если его нету

// console.log(coffe);  // 


// Сокращенная форма при вводе переменной
// let x ="Americano";
// let coffe = {
//   x,          

//////////////////Удаление

// delete(пробел)название объекта.ключ

////////////Проверка на есть ли ключ в объекте?

// let spx = "price" in hotel;  проверь если прайс в объекте
// Выдает болем тру или фолс

////////////////////////////////Как вывести все ключи в объекте? вот так
//  for (let price in cofee){          ///в первую перемееную попадает ключ объекта
//   console.log(cofee);

// for (const key in user) {   ///команда которая выводит все ключи. Логика:
// Создаем любую переменную
// и проверяем ее в объекте, и говорим выведи мне все ключи.
// Возьми ключи и покажи их в консоле
//     console.log('Key: ', key);  
 ///////key писать не обязательно, можно любуюу другую переменную!!
//   }

////////////// Перевод в масив объектов

// const keys = Object.keys(hotel);       // ["name", и т.д]  перевод в массив по ключам
// const values = Object.values(hotel);  // перевод  по значением ключей
// const entries = Object.entries(hotel);

////////////// Копию объекта делает так

// let copy = Object.assign({}.cofee)         // Это точная копия объекта cofee
// console.log(copy);

////////// копируем все ключи

// let copy {
//   ...cofee,    /// ... - это спред оператор
// }

///////////////////////Слияние объектов //////////////////

// Object.assign(target, ...sources), который получает список объектов sources и копирует 
// в первый target все собственные (не унаследованные) свойства из остальных
// const first = {name: 'Tony'};
// const last = {lastName: 'Stark'};

// const person = Object.assign(first, last); // кв дужках просто указываем именна объектов
// console.log(person); // {name: 'Tony', lastName: 'Stark'}




//////////////////////////////// Практика //////////////////////////

/////////////////////////////////////////#1
/*  
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy' 
    - заменяет значение hobby на 'javascript'
    - удаляет свойство premium

    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in

    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of

    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/
// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
//   };

//   user.mood ="Happy";
//   console.log(user);
  
//   user.hobby ="javascript";
//   console.log(user);

//   delete user.premium;
//   console.log(user);

// for (const key in user) {  
//      ///команда которая выводит все ключи. Возьми ключи и покажи их в консоле
//     console.log('Key: ', key);
//   }

// let keys  = Object.keys(user);
// console.log(keys);

// for (const mmm of keys) {
//     console.log(mmm);
//   }



/////////////////////////////////////////////2
//   /*
//   Напиште скрипт который определит и выведет в консоль 
//   имя сотрудника который выполнил больше всех задач.

//   Сотрудники и кол-во выполненых задач содержатся 
//   как свойства объекта в формате "имя":"кол-во задач"
// */

// const tasksCompleted = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99
//   };
  
  /////////////////////////////////////////////////3
  
/*  
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// // Вызовы функции для проверки
// console.log(
//     countProps({})
//   ); // 0
  
//   console.log(
//     countProps({a: 1, b: 3, c: 'hello'})
//   ); // 3

///////////////////////////////////////////////////4

/*  
  Создайте функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

// // Вызовы функции для проверки
// console.log(
//     isObjectEmpty({})
//   ); // true
  
//   console.log(
//     isObjectEmpty({a: 1})
//   ); // false
  
//   console.log(
//     isObjectEmpty({a: 1, b: 2})
//   ); // false
  

///////////////////////////////////////////5

/*  
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.
*/

// // Вызовы функции для проверки
// console.log(
//     countTotalSalary({})
//   ); // 0
  
//   console.log(
//     countTotalSalary({
//       mango: 100,
//       poly: 150,
//       alfred: 80
//     })
//   ); // 330


////////////////// 4.2  Контекст исполнения  и Конструкторы ///////////////////////

// let car = {
//   wheels: 4,
//   enginer: true,
//   color: "red",
//   model: "Tesla",
//   price: "free"
//   power: 5,
//   speed: 0,
//   maxSpeed: 425,
//   start(){
//     car.engine = true;
//     console.log("car started");
//   }
//   move(0){

//     if(a<car.maxSpeed && a>0 && car.engine){ 
//       //каспид тогда увеличится, когда пройдется проверка
//       //пока иф не будет тру тело не выполнится, он всегда true!!
//       car.speed =a;
//     }
//     console.log("car started");
//   },
//    showThis(){
//      console.log(this); 
//    }
// }

// car.move(50);
// car.showThis();

// второй пример

// const petya = {
//   name: 'Petya',
//   showName() {
//     console.log(petya.name);
//   }
// };

// petya.showName();

///////////  THIS  - это встроеная функция. Кто зис включает тот и активирует объкт.
// он выводит весь объект. Он является ссылкой на объект.

// функция свойство this - переменную со ссылкой на объект, this всегда ссылается на объект.

// this нам нужен для доступа к методам и свойствам объекта,
//  который вызывает функцию, тем более, что мы не всегда знаем, имя вызывающего объекта.
// значение this, внутри функции, определятся не в момент создания функции, а в момент ее вызова.

// Если нету объекта мы получаем или undefind(при не строгом тоже ) или Window (при строгом тоже)

// для стрелочной функции зис она получает в момент створення,

// let showThis = () => {
//   console.log(this);
// }
// showThis();
                          //////       Call & array   /////////////////

//////////// Callом мы вызываем функцию, которая уже была раньше создана///////////////

// название функции.call(первый объект) -
// название функции.call(второй объект)
// название функции.call(третий объект)

// Call (объект который мы хоти чтобы попал в зиз, а адальше через , пишем другие аргументы)

// apply -array (второй способ)

// когда используется, когда просто приходят объекты без функций. 
// огда пишем одну функцию эти методы
// Call он сразу вызывается а байд можно потом использовать (сначала сделав ее в переменной )


//////////// Метод .bind /////////////

// let arr = showInfo.bind(hotel); //arr будет копия функции showInfo с привязкой к объектом hotel

// 1) намертво привязывается к объекту
// 2) копирует объект без изменения
// Его нужно делать макс 1 раз, делать как можно реже, грузит браузер.

/////////////////// Конструкторы ////////////////////

// "new" - если перед именем функции поставить будет функция конструктор


////////////////  Задачки по this ///////////////////////
// #1
// *  
//   Напишите код, который бы  с помощью 
//   функции-конструкора User, позволял создавать 
//   объекты пользователя со следующим свойствами:
//     - name - строка (имя)
//     - isActive - буль (активен)
//     - age - число (возраст)
//     - friends - число (кол-во друзей)

//   Имя, активность, возраст и друзей, необходимо передать 
//   как аргументы при вызове конструктора.
  
//   Добавить метод getUserInfo(), которая, выводит строку:
//   `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

//   Создать несколько объектов пользователя User и с помощью 
//   функции getUserInfo вывести строку в консоль.
// */

//  function Arr (name,isActive,age,friends){  // создаем конструктор на основании функции
//       this.name = name;
//       this.isActive = isActive;
//       this.age = age;
//       this.friends = friends;
//  }
//  let user = new Arr("Alex",true,25,5); // Здесь user  уже объект(не функция)
//  console.log(user);
 
/////////////////////// #2
//   Расставьте отсутствующие this в методах объекта store

// const store = {
//   products: ['bread', 'cheese', 'milk', 'apples'],
//   managers: ['poly', 'mango', 'ajax'],
//   addManager(manager) {
//     this.managers.push(manager);
    
//     console.log(this.managers);
//   },
//   removeManager(manager) {
//     const idx = this.managers.indexOf(manager);
    
//     this.managers.splice(idx, 1);
    
//     console.log(this.managers);
//   },
//   getProducts() {
//     console.log(this.products);
//     return this.products;
//   }
// }

// store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']
// store.removeManager('mango'); // ['poly', ajax', 'chelsey']
// store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']

// #3
// /*  
//   Расставьте отсутствующие this в конструкторе объектов Account
// */

// function Account(login, password, type = "regular") {
//   this.login = login;
//   this.password = password;
//   this.type = type;

//   this.changePassword = function(newPassword) {
//     this.password = newPassword;
//     console.log(this.password);
//   };

//   this.getAccountInfo = function() {
//     console.log (`
//     Login: ${this.login}, 
//     Pass: ${this.password}, 
//     Type: ${this.type}
//     `);
//   };
// }

// const account = new Account("Mango", "qwe123", "premium");

// console.log(account.login); // 'Mango'
// console.log(account.password); // 'qwe123'
// console.log(account.type); // 'premium'

// account.changePassword("asdzxc"); // 'asdzxc'

// account.getAccountInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'


///////////////////// задача калькулятор ///////////////////////

// Написати калькулятор за допомогою ф-ї конструктора. 

//Ця ф-я створює обєкт з  методами read(), sum(), mul(), addMethod(name, function);

// Метод read() запитує в користувача числа за допомогою prompt і запамятовує їх.
// Метод read() працює до тих пір поки користувач не натисне Cancel;

// Метод sum() виводить в консоль суму всіх чисел що ввели в процесі роботи метода read().
// Метод console.log(calculator.sum()) // 15() виводить в консоль добуток всіх чисел.


/// Решение:

// let calculator = new Calculator();
// function Calculator() {
//    this.result = [];

//   this.read = function(){
//     let userNumber;
//     do {
//       userNumber = prompt("Введите число!");
      
//       if (userNumber !== null){
//       this.result.push(Number(userNumber));}
  
//     } while (userNumber!==null)
//   };
//   this.sum = function(){
//     console.log(this.result.reduce((acc,el) => acc+el,0)); 
//   };

//   this.mul = function(){
//     console.log(this.result.reduce((acc,el) => acc*el,1)); 
//   };
  

// this.addMethod = function(name, function1){
//   this[name]=function1;
// };
    
// }

// let minus = function(){
//   console.log(this.result.reduce((acc,el) => acc-el,0));
// }
// calculator.addMethod("start", minus);

// console.log(calculator);

// calculator.read();
// //  вводимо 5 цифр (1,2,3,4,5) після цього натискаємо Cancel і метод read() зупиняє роботу
// calculator.sum() // 15
// calculator.mul() // 120
// console.log(addMethod(minus, function)); // додається метод на віднімання
// calculator.minus() // -1


/////////////////// Калькулятор через прототип 

// function Calculator(){
//   this.data = [];
// }

// Calculator.prototype.read = function(){
// let input;
// while(input!==null){
// input = prompt("Введите число");
// if (input === null){breake;}
// this.data.push(Number(input));
// }
// }
// Calculator.prototype.sum = function(){
//   return this.data.reduce((acc,el) => acc+el, 0);
// }
// Calculator.prototype.mul = function(){
//   return this.data.reduce((acc,el) => acc*el, 1);
// }
// Calculator.prototype.addMethod = function(name,code){
//  Calculator.prototype[name] = code;
// }

// function sub (){
//   return this.data.reduce((acc,el) => acc-el);
// }
// // console.log(sub);
// Calculator.addMethod = function("minus",sub){

// }
// console.log(calculator.minus());


// let calculator = new Calculator();
// console.log(calculator);
// console.log(calculator.sum());
// console.log(calculator.mul());
// calculator.read();



////////// Выполненно.

// Метод addMethod(name, function) вчить калькулятор нової операції. 
// параметр name - назва нового метода
// параметр function - код нового метода.
// За допомогою метода addMethod(name, function) 
//додати в калькулятор новий функціонал який буде знаходити різницю всіх введених цифр 
//які отримали при використанні метода read();


// Collapse 
// Bootcamp 9 is on a roll
// Your team’s now 25 members strong, with 2052 messages sent across 11 channels.
// You can track your team’s progress via the main menu.
// Show Me
// Message Input

//////////////////////// Пицерия ////////////////////////

// Написать ф-ю конструктор Pizza который создает обэкты пиццы.
// Обект должен иметь такие поля:
// 1) Название пиццы // через параметр
// 2) Размер пиццы // чеерз параметр
// 3) набор начинок // масив
// 4) набор соусов // масив
// 5) метод totalPrice который возвращает цену пиццы // размер + начинки + соусы
// 6) метод totalCallories который возвращает суму калорий пиццы // размер + начинки + соусы

// 7) метод addToppings котрый принимает обект начинки и добавляет его а масив начинок если ее нету
// 8) метод addSouces котрый принимает обект соуса и добавляет его в масив соусов если его нету
// 9) метод deleteToppings который удаляет начинку из масива если она там есть
// 10) метод deleteSousess который удаляет соус из масива если он там есть
// Размеры,(sizes) начинки,(topings) соусы (souces) это обекты. 

// sies


// const BIG = {
// price: 80,
// callories: 150
// }
// const SMALL = {
// price: 50,
// callories: 100,
// }
// // topings
// const MEAT = {
// name: 'meat',
// price: 20,
// callories: 85
// }
// const CHEESE = {
// name: 'cheese',
// price: 15,
// callories: 50
// }
// const SALAT = {
// name: 'salat',
// price: 12,
// callories: 5
// }
// const corn = {
// name: 'corn',
// price: 10,
// callories: 5
// }
// // souces
// const SOUSE = {
// name: 'souce',
// price: 8,
// callories: 30
// }
// const mustard = {
// name: 'mustard',
// price: 13,
// callories:10
// }
// const ketchup = {
// name: 'ketchup',
// price: 8,
// callories: 7
// }

// function Pizza (name,size){
// this.name = name;
// this.size = size;
// this.topings = [];
// this.souces = [];
// }

// Pizza.prototype.addToppings=function(toping){ ///
// if(!this.topings.includes(toping)){
// this.topings.push(toping);}
// }
// Pizza.prototype.deleteToppings=function(toping){
// if(this.topings.includes(toping)){
// } else {return;}
// }
// Pizza.prototype.addSouces=function(souce){
//   if(!this.souces.includes(souce)){
//   this.souces.push(souce);}
// }
// Pizza.prototype.deleteSouces=function(souce){
//   if(this.souces.includes(souce)){
//   } else {return;}
//   }
//   Pizza.prototype.totalPrice=function(){
//     let size = this.size.price;
//     let topings = this.topings.reduce((acc,el)=>acc+el.price,0);
//     let souces = this.souces.reduce((acc,el)=>acc+el.price,0);
//     let sum = size + topings +souces;
//     return sum;
//   }
//   Pizza.prototype.totalCallories=function(){
//     let size = this.size.callories;
//     let topings = this.topings.reduce((acc,el) => acc+el.callories, 0);
//     let souces = this.souces.reduce((acc,el) => acc+el.callories, 0);
//     let sum = size + topings +souces;
//     return sum;
//   }

// let order = new Pizza ("margarita", 816);

// order.addToppings(MEAT);
// order.addToppings(SALAT);
// order.addSouces(SOUSE);
// order.totalPrice(SOUSE);
// order.totalCallories(SOUSE);
// order.deleteToppings(MEAT);
// order.deleteSouces(MEAT);
// order.deleteSouces(SALAT);

// console.log(order);

// console.log(order.totalPrice);
// console.log(order.addToppings(MEAT));
// console.log(addToppings());
// console.log(deleteToppings());
// console.log(deleteSousess());


// создвть 2 разных пицы большую и маленькую. 
//Для каждой из них добавить по одной начинке и соус. Потом вывести цену и калории.
// Дальше добавить еще по одному соусу и 2 начинки.
// Потом удалить одну начинку и вывести цену и калории новой пицы



/////////////////////////
// ///////////////////// Прототипы //////////////////
// // Объекты в JavaScript можно организовать в цепочки так, чтобы свойство,
// //  не найденное в одном объекте, автоматически искалось бы в другом. 

// // Прототай нужен для взаимодействия между объектами.

// // let animal ={

// // };

// // let dog = Object.create(animal) // сделай новый объект с параметрами, ключами объекта animal

// // прототайп содержить только один метод - конструктор.
// // Я могу использовать прототайп только в методе - функции. 

// //////// Основные правила:

// // __proto__  = [[Prototype]] это !!!!ключ!!!! в жаве который он сам делаем в объекте или массиве
// // prototype -это ключ в средине функции конструктора. тут записан объект будет с ключем.

// //Суть прототайпа это оптимизация кода, места серверного и мощности, не надоделать  млрд функций и 
// // и оббъекто для каждого юзера.

// // Human.prototype.name = function(){ -- это универсальный "ключ от замка", ссылка на ключ объекта.
// //Это универсальный объект для всех функций и методов.
// //     console.log("I walk");
//  // этой функцией мы сделали конструктор со свойством name универсальным. раньше эти методы
// // были только в объекте конструктора а теперь метод стал универсальным для всех объектов и массивов.
// // протатай делает из значений ключчей или ключей  функции этих ключей и делает их универсльными.

// // Можно создавать в прототипах не только функции а и строки или массивы

// // По факту прототайп  это простая передача по ссылке


// //////////////////// Задачи с помощью прототипа ///////////////////////////

// // Написати конструктор обєкта Account який буде описувати рахунок користувача.
// // Обєкт має мати такі унікальні ключі:
// // 1) Імя юзера
// // 2) id юзера
// // 3) ключ balance
// // 4) ключ credits // список кредитів
// // 5) ключ deposits // список депозитів
// // 6) ключ depositIncome // загальний прибуток від депозитів
// // 7) ключ creditCosts // загальні затрати по кредитах
// // 8) ключ charity // сума яку виділили на благодійність

// // Також мають бути такі методи
// // 1) countDepositsIncome
//  // метод що приймає суму депозита
//  // і та збільшує поле depositIncome в задежності від типу
//  // і ставки і періоду депозиту.
// // 2) openDeposit 
// // метод, що додає депозит в список deposits і запускає метод countDepositsIncome

// // 3) countCreditCost  // метод що приймає суму кредиту і його тип та збільшує поле creditCosts
// // 4) openCredit // метод що додає кредит в список credits і запускає метод countCreditCost

// // 5) showIncome // метод що показує загальний дохід від депозитів

// // 6) showCost // метод що показує загальні затрати на кредити

// // 7) showProfit //метод що показує прибуток (різниця доходів і витрат)

// // 8) getCash //метод що приймає число і зменьшує баланс юзера так як він знімає готівку з рахwкнку

// // 9) addition // метод що приймає число і збільшує баланс юзера (поповнення через термінал)

// // 10)closeCredit метод що закриває кредит в банку і видаляє його з поля c redits та забирає суму з creditCosts
// // 11) closeDeposit метод що закриває депозит в банку 
// // і видаляє його з поля deposits та забирає суму з depositIncome

// // let depositBody = {
// // dep1: 500,
// // dep2: 1000,
// // dep3: 2000,
// // }
// // depositBody.dep4 = 500;

// // let sumDeposit =Object.values(depositBody).reduce((acc,el) =>acc+el);

// // console.log(sumDeposit);

// // function Account (name, id){
// //     this.userName = name;
// //     this.userId = id;
// //     this.balance = 0;
// //     this.credits =[];
// //     this.deposits = [];
// //     this.depositIncome = 0;
// //     this.creditCosts = 0;
// //     this.charity = 0;
// //  }
 
// //  // addition пополнет баланс
// //  Account.prototype.addition = function(sumDeposit){
// //     this.balance =this.balance + sumDeposit;
// //  }
// //  //openDeposit метод що додає депозит в список deposits і запускає метод countDepositsIncome
// //  Account.prototype.openDeposit = function(obj){
// //     this.deposits.push(obj);
// //     this.countDepositsIncome(obj);
// //  }
// //  // метод подсчета дохода
// //  Account.prototype.countDepositsIncome = function(obj){
// //      if(obj.type === 'simple') this.depositIncome += ( obj.amount * ((Number.parseInt(obj.percent) / 100) / 12 ) * obj.period );
// //      if(obj.type === 'compound') this.depositIncome += ( obj.amount * ((Number.parseInt(obj.percent) / 100) / 12 ) * obj.period );
// //  }
// //  // метод подсчета кредита
// //  Account.prototype.countCreditCost = function(obj){
// //     if(obj.type === 'annuity') this.creditCosts += ( obj.amount * ((Number.parseInt(obj.percent) / 100) / 12 ) * obj.period );
// //     if(obj.type === 'simple') this.creditCosts += ( obj.amount * ((Number.parseInt(obj.percent) / 100) / 12 ) * obj.period );
// //  }
// //  // openCredit метод открывает кредит
// //  Account.prototype.openCredit = function(obj){
// //     this.credits.push(obj);
// //     this.countCreditCost(obj);
// //  }
// //  // метод который показывает доход от депозитов
// //  Account.prototype.showIncome = function(){
// //  console.log(`Доход от депозитов ${this.depositIncome}`);
// //  }
// //  // метод который показывает затраты на кредиты
// //  Account.prototype.showCost = function(){
// //  console.log(`Затраты на кредиты ${this.creditCosts}`);
// //  }
// //  // Сальдо
// //  Account.prototype.showProfit = function(){
// //  console.log(`Сальдо  ${this.depositIncome - this.creditCosts }`);
// //  }
// //  // Снятие с баланса
// //  Account.prototype.getCash = function(cash){
// //     this.balance -=cash;
// //     console.log(`Баланс после снятия  ${this.balance}`);
// //  }
// // //  / Закрытие кредита
// // Account.prototype.closeCredit = function(id){
// //    let removedCredit = this.credits.filter(elem => elem.id === id);
// //    let creditCost = removedCredit[0].amount * ((Number.parseInt(removedCredit[0].percent) / 100) / 12 ) * removedCredit[0].period;
// //    this.creditCosts -= creditCost;
// //    this.credits = this.credits.filter(elem => elem.id !== id);
// // }

// // // Закрытие депозита
// // Account.prototype.closeDeposit = function(id){
// //    let removedDeposit = this.deposits.filter(elem => elem.id === id);
// //    let depositCost = removedDeposit[0].amount * ((Number.parseInt(removedDeposit[0].percent) / 100) / 12 ) * removedDeposit[0].period;
// //    this.depositIncome -= depositCost;
// //    this.deposits = this.deposits.filter(elem => elem.id !== id);
// // }
// //  const account = new Account('Sam', '#555');


// //  account.addition(depositBody);
// //  account.openDeposit({amount: 50000, type: 'simple', percent: '15%', period: 24, id: '#depo1'});
// //  account.openDeposit({amount: 20000, type: 'compound', percent: '20%', period: 12, id: '#depo2'});
// //  account.openCredit({amount: 500000 ,type: 'annuity', percent: '5%', period:10, id: '#credit1'});
// //  account.openCredit({amount:10000 ,type: 'simple', percent: '25%', period:3, id: '#credit2'});
// //  account.showIncome();
// //  account.showCost();
// //  account.showProfit();
// //  account.getCash(1000);
// //  account.addition(5000);
// // //  account.closeDeposit();
// //  account.closeCredit('#credit1');
// //  console.log(account);



// //  let  arr = function(id){
// //   let x = this.dep1 + this.dep2;
// //  console.log(x);
// // }

// // arr.call(depositBody);

// // console.log(closeCredit());
// // 1) створюємо обєкт запуском new Account(name, id);
// // 2) Запускаєм метод addition() // для поповнення балансу
// // 3) Запускаєм метод openDeposit({amount: 50000, type: 'simple', percent: '15%', period: 24}) // відкриваємо по депозиту різного типу
// // 4) Запускаєм метод openDeposit({amount: 20000, type: 'compound', percent: ;'20%', period: 12}) //  відкриваємо по депозиту різного типу
// // 5)Запускаєм метод openCredit({ammount: 500000 ,type: 'annuity', percent: '5%', period:10})
// // 6)Запускаєм метод openCredit({ammount:10000 ,type: 'simple', percent: '25%', period:3})
// // 7) Запускаєм метод showIncome()
// // 8) Запускаєм метод showCost()
// // 9) Запускаєм метод showProfit()
// // 10) Запускаєм метод getCash(1000)
// // 11) Запускаєм метод addition(5000)
// // 12)Запускаєм метод closeCredit(id)
// // 13)Запускаєм метод closeDeposit(id)
// // В якому порядку перевіряти роботу кода.
// // Рахуємо депозити помісячно

// // simple deposit formula https://www.rapidtables.com/calc/finance/simple-interest-calculation.html 

// // compound deposit formula https://www.rapidtables.com/calc/finance/compound-interest-formula.html

// // annuity credit formula
// // Дивитися Приклад 4.
// // https://uk.wikibooks.org/wiki/%D0%A4%D1%96%D0%BD%D0%B0%D0%BD%D1%81%D0%B8/%D0%9E%D0%B1%D1%87%D0%B8%D1%81%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F_%D0%B2%D1%96%D0%B4%D1%81%D0%BE%D1%82%D0%BA%D1%96%D0%B2_%D0%B7%D0%B0_%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%BE%D0%BC_%D0%B0%D0%B1%D0%BE_%D0%B4%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D0%BC

// // simple credit formula
// // Дивитися Приклад 3.
// // https://uk.wikibooks.org/wiki/%D0%A4%D1%96%D0%BD%D0%B0%D0%BD%D1%81%D0%B8/%D0%9E%D0%B1%D1%87%D0%B8%D1%81%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F_%D0%B2%D1%96%D0%B4%D1%81%D0%BE%D1%82%D0%BA%D1%96%D0%B2_%D0%B7%D0%B0_%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%BE%D0%BC_%D0%B0%D0%B1%D0%BE_%D0%B4%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D0%BC

// ////////////////     Игра в корабли    /////////////////////////// 


// //////// Создаем конструктор корабля(шаблон) на базе которого будет создавать другие корабли,
// ////он имеет параметры которые будут и у всех других кораблей 

// // function Ship(name, life, armor, color, x, y, amunition) {
// //     this.speed = 0;
// //     this.name = name;
// //     this.life = life;
// //     this.armor = armor;
// //     this.color = color;
// //     this.x = x;
// //     this.y = y;
// //     this.amunition = amunition;
// //   }
//   //// Создаем методы этого конструктора
// //   Ship.prototype.move = function (a, b) {
// //     if (this.speed > 0) {
// //       this.x = a;
// //       this.y = b;
// //     }
// //   }
// //   Ship.prototype.acselerate = function (speed) {
// //     this.speed = speed;
// //   }
  
// //   Ship.prototype.stop = function () {
// //     this.speed = 0;
// //   }
  
// //   Ship.prototype.fire = function () {
// //     if (this.amunition > 0) {
// //       this.amunition--;
// //     }
// //   }

   
//   ///////// создаем первый клон-конструктора и называем его ES от основного корабля Ship

// //   function ES (name, life, armor, color, x, y, amunition, torpeds, smokeAmunition) {
// //     // this = {}
// //     Ship.call(this, name, life, armor, color, x, y, amunition);
// //     this.torpeds = torpeds;
// //     this.smokeAmunition = smokeAmunition;
// //   } 
// //   ES.prototype = Object.create(Ship.prototype);

// //   ES.prototype.constructor = ES;
  
// //   ES.prototype.launchTorpeds = function() {
// //     if(this.torpeds > 0) {
// //       this.torpeds--;
// //     }
// //   } 
// //   ES.prototype.launchSmoke = function() {
// //     if(this.smokeAmunition > 0) {
// //       this.smokeAmunition--;
// //     }
// //   }
  
// //   let player1 = new ES('Bob', 5000, 500, 'red', 45, 12, 50, 30,5);
  
// //   // Выведем результат работы конструктора в консоль
// //   console.log(player1);


// //   ///// создаем второй корабль Авианосец AV от основного корабля Ship
// // //   с такими же параметрами как  Ship+ 2 новых torpeds / smokeAmunition

// //   function AV (name, life, armor, color, x, y, amunition, torpeds, smokeAmunition) {
// //       // this = {}
// //    Ship.call(this, name, life, armor, color, x, y, amunition);
// //    // мы добавили все неймы и их значения от Ship
// //    this.torpeds = torpeds;
// //    this.smokeAmunition = smokeAmunition;
// //   }
// //   ////Создаем новый объект пустой и прототипом (родителем) этого объетка сделай Ship.prototype 
// //   AV.prototype = Object.create (Ship.prototype);   
// // //   console.log(AV);
// //   /// пусть функции м методы прототипа наполнятся в ново созданный объект
// //   AV.prototype.constructor = AV;

// //   AV.prototype.launchTorpeds = function(){
// //     if(this.torpeds > 0) {
// //         this.torpeds--;
// //       }
// //     }
// //   AV.prototype.launchSmoke = function (){
// //     if(this.smokeAmunition > 0) {
// //         this.smokeAmunition--;
// //       }
// //   }

// //   let player2 = new AV('Serg', 100, 20, 'blue', 45, 20, 20, 10,5);
  
// //   // Выведем результат работы конструктора в консоль
// //   console.log(player2);

// //    player2.torpeds = 10;
  

// /////////////////////  Классы //////////////////////////////

// // Задача переписать Корабли на классы

// // class Ship {           /////////////логика у него как и у логики прототипа
// // constructor(name, life, armor, color, x, y, amunition) {  
// //              //// метод в средине класса с параметрами 
// //         this.speed = 0;
// //         this.name = name;
// //         this.life = life;
// //         this.armor = armor;
// //         this.color = color;
// //         this.x = x;
// //         this.y = y;
// //         this.amunition = amunition;
// // }           
// //     move(a,b){ /////// функция, после конструктора пишем все методы в виде функций     
// //       if (this.speed > 0) {
// //         this.x = a;
// //         this.y = b;
// //       }
// //     }
// //     acselerate (speed) {
// //     this.speed = speed;
// //     }
// //     stop(){
// //     this.speed = 0;
// //     }
// //     fire(){
// //         if (this.amunition > 0) {
// //             this.amunition--;
// //           } 
// //     }

// // }

// // class ES extends Ship {
// //   constructor(name, life, armor, color, x, y, amunition,torpeds,smokeAmunition) {
// //     super(name, life, armor, color, x, y, amunition)
// //     this.torpeds = torpeds;
// //     this.smokeAmunition = smokeAmunition;
// //     }
// //     launchTorpeds(){
// //       if(this.torpeds > 0) {
// //         this.torpeds--;
// //       }
// //     }
// //     launchSmoke() {
// //       if(this.smokeAmunition > 0) {
// //         this.smokeAmunition--;
// //       }
// //     }
// //   }

// // let player1 = new ES('Bob', 5000, 500, 'red', 45, 12, 50, 30,5);

// // console.log(player1);


// ///////////////////// дополнительные Задачи к 6 модулю


// ////////////////////1
// /*
//   Создать функцию-конструктор Account, которая добавляет будущему
//   объекту поля login, email и friendsCount. 
  
//   В prototype функции-конструктора добавить метод getAccountInfo(), 
//   который выводит в консоль значения полей login, email и friendsCount. 
//   Обратите внимание, метод будет всего один, в поле prototype функции-конструктора, 
//   а использовать его смогут все экземпляры, по ссылке.
  
//   Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
// */

// // class Account {
// //     constructor(login,email,friendsCount){
// //     this.login = login;
// //     this.email = email;
// //     this.friendsCount = friendsCount;
// //     }
// //     getAccountInfo(){
// //         console.log(`${this.login}${this.email}${this.friendsCount}`);   
// //     }
// // }
// //  class AV extends Account {
// //      constructor (login,email,friendsCount,cost){
// //      super(login,email,friendsCount);   ////такие же параметры как в конструкторе
// //      this.cost = cost;
// //      }
// //  }

// //  let x = new AV(`qwerty`, `alexey@ist.com`,5,15 )
// //  console.log(x);

// //  class BTC extends AV {
// //     constructor (login,email,friendsCount,cost,price1,price2){
// //     super(login,email,friendsCount,cost);   ////такие же параметры как в конструкторе
// //     this.price1 = price1;
// //     this.price2 = price2;
// // }
// // }

// // let bitcoin = new BTC (`tytyty`, `rtrtr@ist.com`,105,1500, 40,40 ) //это аргументы для конструктора
// //  console.log(bitcoin);

 
// /////////////////////////2
// /*
//   Напишите ES6 класс StringBuilder.
//   На вход (в конструкторе) он получает один параметр string - строку,
//   которую записывает в поле value.
//   Добавьте классу следующие методы:
//     - getValue() - возвращает текущее значение поля value
//     - append(str) - получает парметр str - строку и добавляет 
//       ее в конец значения поля value
//     - prepend(str) - получает парметр str - строку и добавляет 
//       ее в начало значения поля value
//     - pad(str) - получает парметр str - строку и добавляет 
//       ее в начало и в конец значения поля value
// */
// // class StringBuilder {
// //     constructor (string){
// //         this.value = string;
// //     }
// //     getValue(){
// //         return this.value;
// //     }
// //     append(str){
// //     this.value=str+this.value;
// //     }
// //     prepend(str){
// //     this.value=this.value+str;  
// //     }
// //     pad(str){ 
// //     this.value=str+this.value+str;  
// //     }
// // }

// // const builder = new StringBuilder('.');
// // builder.append('^'); 
// // console.log(builder.getValue()); // '.^'

// // builder.prepend('^'); 
// // console.log(builder.getValue()); // '^.^'

// // builder.pad('='); 
// // console.log(builder.getValue()); // '=^.^='


// //////////////////////////////////3

// /*
//   Создайте класс Car с указанными полями и методами.
// */

// class Car {
//     constructor(maxSpeed) {
//         // Добавьте свойства:
//         //   - speed - для отслеживания текущей скорости, изначально 0.
//         this.speed =0;
//         //   - maxSpeed - для хранения максимальной скорости 
//         this.maxSpeed =maxSpeed;
//         this.running = false;
//         //   - running - для отслеживания заведен ли автомобиль, 
//         //     возможные значения true или false. Изначально false. 
//         //   - distance - содержит общий киллометраж, изначально с 0 
//         this.distance =0; 
//         this._value = 2000;
//     }
//     turnOn() {
//       // Добавьте код для того чтобы завести автомобиль
//       // Просто записывает в свойство running значание true
//      this.running = true;
//     }
  
//     turnOff() {
//       // Добавьте код для того чтобы заглушить автомобиль
//       // Просто записывает в свойство running значание false
//       this.running = false;
//       this.speed =0;
//     }
    
//     accelerate(spd) {
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed
//       if (spd<this.maxSpeed && this.running === true ){
//         this.speed=this.speed+spd;  
//       }
//     }
//     decelerate(spd) {
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed и не меньше нуля
//       if (this.speed>0 && this.speed<this.maxSpeed){
//           this.speed=this.speed-spd;  
//         }
//     }
//     static getSpecs (obj){  /// 
//     console.log(`${obj.maxSpeed}${obj.running}${obj.distance}`);
//     // Особенности:
//     // 1, Вызывается через класс,  не через переменную экземпляра, через нее  он будет не доступен.
//     // 2, Он принимает аргументы как внутрение так и внешние
//     // 3, Он работает в средине класса-конструктора как и другие функции
//     // 3. Используется как правило ради того чтобы спрятать некие функции в средине конструктора

//     }
//     drive(hours) {
//       // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//       // но только в том случае если машина заведена!
//       if (this.running === true){
//      this.distance =hours*this.speed;
//       }
//     }
//     get value (){     
//        return this._value;
//        // Пишется сразу с изменением ключя нижним подчеркиванием
//     }
//     set value (value){   
//         /// особенности сета:
//     //     1. у него обязательно должен быть 1 параметр
//     //     2. К нему должен заходить мин 1 аргумент, новый,
//     //     3, Сет позволяет нам передумать и все таки поменять значение нужного ключа.
//     //  this._value = value;
//         //   4, Если гет пишут сразу то сет добовляют в клас только когда уже решили поменять.
//     }
//   }

//   let result = new Car(100);
//   console.log(result);

//   result.turnOn();  //включили машину
// //   result.turnOff();   //выключили машину
//   result.accelerate(50);   //дали скорости 
//   result.decelerate(20);   // скокрость изменилась на 20
//   result.drive(2);         // установили сколько часов проехали

// //   result.turnOff(); // при вызове обратно этой функции машина выключается

// // //   Добавьте к классу Car из предыдущего задания статический
// // //   метод getSpecs, который получает объект-машину как аргумент
// // //   и выводит в консоль значения полей maxSpeed, running и distance
// Car.getSpecs(result); // maxSpeed: 100, running: true, distance: 200
// result.value = 4000; // maxSpeed: 100, running: true, distance: 200

// // /*
// //   Добавьте классу Car свойство value - цена автомобиля.

// //   Добавьте классу Car использование геттеров и сеттеров для свойства value. 

// console.log(result.value);

//   Геттер вернет текущее значение поля this._value
//   Сеттер запишет в поле this._value то что ему присвоят

//   PS: имя геттера и сеттера не может совпадать с полем, поэтому используйте
//     не this.value а this._value
    
//   Использование выглядит следующим образом:
//   const myCar = new Car(50, 2000);
//   myCar.value; // 2000
//   myCar.value = 4000;
//   myCar.value; // 4000


//                                               ТЕРНАРНИК

// let tenarnic = x === y ? (?- если true /тогда и стоп проверка)  btc :(:-если false, тогда это ) eth;

//                Стрелочная функция 

// Стандартная запись        let add = function (a,b)( return a+b;);
// Сокращенная(стрелочная)   let add = (a,b) => a+b;


///////////// Статические методы гетеры и сетеры  /////////////

// суть метода - мы прячим метод. Он запускается только с названием класса !! не с контекстом объета.
// Объект (юзер ) не имеет доступа к этому методу.

//  Гет это функция с новым именем, защищенное от перезаписи. В нее мы ложим ключ.
//сет пишется с гетом, но меняет гет.

// гет и сет это обходные пути, при ошибок или захода случайно не туда, так как будущее мы не знаем.


// ///////////////////// Прототипы //////////////////
// // Объекты в JavaScript можно организовать в цепочки так, чтобы свойство,
// //  не найденное в одном объекте, автоматически искалось бы в другом. 

// // Прототай нужен для взаимодействия между объектами.

// // let animal ={

// // };

// // let dog = Object.create(animal) // сделай новый объект с параметрами, ключами объекта animal

// // прототайп содержить только один метод - конструктор.
// // Я могу использовать прототайп только в методе - функции. 

// //////// Основные правила:

// // __proto__  = [[Prototype]] это !!!!ключ!!!! в жаве который он сам делаем в объекте или массиве
// // prototype -это ключ в средине функции конструктора. тут записан объект будет с ключем.

// //Суть прототайпа это оптимизация кода, места серверного и мощности, не надоделать  млрд функций и 
// // и оббъекто для каждого юзера.

// // Human.prototype.name = function(){ -- это универсальный "ключ от замка", ссылка на ключ объекта.
// //Это универсальный объект для всех функций и методов.
// //     console.log("I walk");
//  // этой функцией мы сделали конструктор со свойством name универсальным. раньше эти методы
// // были только в объекте конструктора а теперь метод стал универсальным для всех объектов и массивов.
// // протатай делает из значений ключчей или ключей  функции этих ключей и делает их универсльными.

// // Можно создавать в прототипах не только функции а и строки или массивы

// // По факту прототайп  это простая передача по ссылке


// //////////////////// Задачи с помощью прототипа ///////////////////////////

// // Написати конструктор обєкта Account який буде описувати рахунок користувача.
// // Обєкт має мати такі унікальні ключі:
// // 1) Імя юзера
// // 2) id юзера
// // 3) ключ balance
// // 4) ключ credits // список кредитів
// // 5) ключ deposits // список депозитів
// // 6) ключ depositIncome // загальний прибуток від депозитів
// // 7) ключ creditCosts // загальні затрати по кредитах
// // 8) ключ charity // сума яку виділили на благодійність

// // Також мають бути такі методи
// // 1) countDepositsIncome
//  // метод що приймає суму депозита
//  // і та збільшує поле depositIncome в задежності від типу
//  // і ставки і періоду депозиту.
// // 2) openDeposit 
// // метод, що додає депозит в список deposits і запускає метод countDepositsIncome

// // 3) countCreditCost  // метод що приймає суму кредиту і його тип та збільшує поле creditCosts
// // 4) openCredit // метод що додає кредит в список credits і запускає метод countCreditCost

// // 5) showIncome // метод що показує загальний дохід від депозитів

// // 6) showCost // метод що показує загальні затрати на кредити

// // 7) showProfit //метод що показує прибуток (різниця доходів і витрат)

// // 8) getCash //метод що приймає число і зменьшує баланс юзера так як він знімає готівку з рахwкнку

// // 9) addition // метод що приймає число і збільшує баланс юзера (поповнення через термінал)

// // 10)closeCredit метод що закриває кредит в банку і видаляє його з поля c redits та забирає суму з creditCosts
// // 11) closeDeposit метод що закриває депозит в банку 
// // і видаляє його з поля deposits та забирає суму з depositIncome

// // let depositBody = {
// // dep1: 500,
// // dep2: 1000,
// // dep3: 2000,
// // }
// // depositBody.dep4 = 500;

// // let sumDeposit =Object.values(depositBody).reduce((acc,el) =>acc+el);

// // console.log(sumDeposit);

// // function Account (name, id){
// //     this.userName = name;
// //     this.userId = id;
// //     this.balance = 0;
// //     this.credits =[];
// //     this.deposits = [];
// //     this.depositIncome = 0;
// //     this.creditCosts = 0;
// //     this.charity = 0;
// //  }
 
// //  // addition пополнет баланс
// //  Account.prototype.addition = function(sumDeposit){
// //     this.balance =this.balance + sumDeposit;
// //  }
// //  //openDeposit метод що додає депозит в список deposits і запускає метод countDepositsIncome
// //  Account.prototype.openDeposit = function(obj){
// //     this.deposits.push(obj);
// //     this.countDepositsIncome(obj);
// //  }
// //  // метод подсчета дохода
// //  Account.prototype.countDepositsIncome = function(obj){
// //      if(obj.type === 'simple') this.depositIncome += ( obj.amount * ((Number.parseInt(obj.percent) / 100) / 12 ) * obj.period );
// //      if(obj.type === 'compound') this.depositIncome += ( obj.amount * ((Number.parseInt(obj.percent) / 100) / 12 ) * obj.period );
// //  }
// //  // метод подсчета кредита
// //  Account.prototype.countCreditCost = function(obj){
// //     if(obj.type === 'annuity') this.creditCosts += ( obj.amount * ((Number.parseInt(obj.percent) / 100) / 12 ) * obj.period );
// //     if(obj.type === 'simple') this.creditCosts += ( obj.amount * ((Number.parseInt(obj.percent) / 100) / 12 ) * obj.period );
// //  }
// //  // openCredit метод открывает кредит
// //  Account.prototype.openCredit = function(obj){
// //     this.credits.push(obj);
// //     this.countCreditCost(obj);
// //  }
// //  // метод который показывает доход от депозитов
// //  Account.prototype.showIncome = function(){
// //  console.log(`Доход от депозитов ${this.depositIncome}`);
// //  }
// //  // метод который показывает затраты на кредиты
// //  Account.prototype.showCost = function(){
// //  console.log(`Затраты на кредиты ${this.creditCosts}`);
// //  }
// //  // Сальдо
// //  Account.prototype.showProfit = function(){
// //  console.log(`Сальдо  ${this.depositIncome - this.creditCosts }`);
// //  }
// //  // Снятие с баланса
// //  Account.prototype.getCash = function(cash){
// //     this.balance -=cash;
// //     console.log(`Баланс после снятия  ${this.balance}`);
// //  }
// // //  / Закрытие кредита
// // Account.prototype.closeCredit = function(id){
// //    let removedCredit = this.credits.filter(elem => elem.id === id);
// //    let creditCost = removedCredit[0].amount * ((Number.parseInt(removedCredit[0].percent) / 100) / 12 ) * removedCredit[0].period;
// //    this.creditCosts -= creditCost;
// //    this.credits = this.credits.filter(elem => elem.id !== id);
// // }

// // // Закрытие депозита
// // Account.prototype.closeDeposit = function(id){
// //    let removedDeposit = this.deposits.filter(elem => elem.id === id);
// //    let depositCost = removedDeposit[0].amount * ((Number.parseInt(removedDeposit[0].percent) / 100) / 12 ) * removedDeposit[0].period;
// //    this.depositIncome -= depositCost;
// //    this.deposits = this.deposits.filter(elem => elem.id !== id);
// // }
// //  const account = new Account('Sam', '#555');


// //  account.addition(depositBody);
// //  account.openDeposit({amount: 50000, type: 'simple', percent: '15%', period: 24, id: '#depo1'});
// //  account.openDeposit({amount: 20000, type: 'compound', percent: '20%', period: 12, id: '#depo2'});
// //  account.openCredit({amount: 500000 ,type: 'annuity', percent: '5%', period:10, id: '#credit1'});
// //  account.openCredit({amount:10000 ,type: 'simple', percent: '25%', period:3, id: '#credit2'});
// //  account.showIncome();
// //  account.showCost();
// //  account.showProfit();
// //  account.getCash(1000);
// //  account.addition(5000);
// // //  account.closeDeposit();
// //  account.closeCredit('#credit1');
// //  console.log(account);



// //  let  arr = function(id){
// //   let x = this.dep1 + this.dep2;
// //  console.log(x);
// // }

// // arr.call(depositBody);

// // console.log(closeCredit());
// // 1) створюємо обєкт запуском new Account(name, id);
// // 2) Запускаєм метод addition() // для поповнення балансу
// // 3) Запускаєм метод openDeposit({amount: 50000, type: 'simple', percent: '15%', period: 24}) // відкриваємо по депозиту різного типу
// // 4) Запускаєм метод openDeposit({amount: 20000, type: 'compound', percent: ;'20%', period: 12}) //  відкриваємо по депозиту різного типу
// // 5)Запускаєм метод openCredit({ammount: 500000 ,type: 'annuity', percent: '5%', period:10})
// // 6)Запускаєм метод openCredit({ammount:10000 ,type: 'simple', percent: '25%', period:3})
// // 7) Запускаєм метод showIncome()
// // 8) Запускаєм метод showCost()
// // 9) Запускаєм метод showProfit()
// // 10) Запускаєм метод getCash(1000)
// // 11) Запускаєм метод addition(5000)
// // 12)Запускаєм метод closeCredit(id)
// // 13)Запускаєм метод closeDeposit(id)
// // В якому порядку перевіряти роботу кода.
// // Рахуємо депозити помісячно

// // simple deposit formula https://www.rapidtables.com/calc/finance/simple-interest-calculation.html 

// // compound deposit formula https://www.rapidtables.com/calc/finance/compound-interest-formula.html

// // annuity credit formula
// // Дивитися Приклад 4.
// // https://uk.wikibooks.org/wiki/%D0%A4%D1%96%D0%BD%D0%B0%D0%BD%D1%81%D0%B8/%D0%9E%D0%B1%D1%87%D0%B8%D1%81%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F_%D0%B2%D1%96%D0%B4%D1%81%D0%BE%D1%82%D0%BA%D1%96%D0%B2_%D0%B7%D0%B0_%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%BE%D0%BC_%D0%B0%D0%B1%D0%BE_%D0%B4%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D0%BC

// // simple credit formula
// // Дивитися Приклад 3.
// // https://uk.wikibooks.org/wiki/%D0%A4%D1%96%D0%BD%D0%B0%D0%BD%D1%81%D0%B8/%D0%9E%D0%B1%D1%87%D0%B8%D1%81%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F_%D0%B2%D1%96%D0%B4%D1%81%D0%BE%D1%82%D0%BA%D1%96%D0%B2_%D0%B7%D0%B0_%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%BE%D0%BC_%D0%B0%D0%B1%D0%BE_%D0%B4%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D0%BC

// ////////////////     Игра в корабли    /////////////////////////// 


// //////// Создаем конструктор корабля(шаблон) на базе которого будет создавать другие корабли,
// ////он имеет параметры которые будут и у всех других кораблей 

// // function Ship(name, life, armor, color, x, y, amunition) {
// //     this.speed = 0;
// //     this.name = name;
// //     this.life = life;
// //     this.armor = armor;
// //     this.color = color;
// //     this.x = x;
// //     this.y = y;
// //     this.amunition = amunition;
// //   }
//   //// Создаем методы этого конструктора
// //   Ship.prototype.move = function (a, b) {
// //     if (this.speed > 0) {
// //       this.x = a;
// //       this.y = b;
// //     }
// //   }
// //   Ship.prototype.acselerate = function (speed) {
// //     this.speed = speed;
// //   }
  
// //   Ship.prototype.stop = function () {
// //     this.speed = 0;
// //   }
  
// //   Ship.prototype.fire = function () {
// //     if (this.amunition > 0) {
// //       this.amunition--;
// //     }
// //   }

   
//   ///////// создаем первый клон-конструктора и называем его ES от основного корабля Ship

// //   function ES (name, life, armor, color, x, y, amunition, torpeds, smokeAmunition) {
// //     // this = {}
// //     Ship.call(this, name, life, armor, color, x, y, amunition);
// //     this.torpeds = torpeds;
// //     this.smokeAmunition = smokeAmunition;
// //   } 
// //   ES.prototype = Object.create(Ship.prototype);

// //   ES.prototype.constructor = ES;
  
// //   ES.prototype.launchTorpeds = function() {
// //     if(this.torpeds > 0) {
// //       this.torpeds--;
// //     }
// //   } 
// //   ES.prototype.launchSmoke = function() {
// //     if(this.smokeAmunition > 0) {
// //       this.smokeAmunition--;
// //     }
// //   }
  
// //   let player1 = new ES('Bob', 5000, 500, 'red', 45, 12, 50, 30,5);
  
// //   // Выведем результат работы конструктора в консоль
// //   console.log(player1);


// //   ///// создаем второй корабль Авианосец AV от основного корабля Ship
// // //   с такими же параметрами как  Ship+ 2 новых torpeds / smokeAmunition

// //   function AV (name, life, armor, color, x, y, amunition, torpeds, smokeAmunition) {
// //       // this = {}
// //    Ship.call(this, name, life, armor, color, x, y, amunition);
// //    // мы добавили все неймы и их значения от Ship
// //    this.torpeds = torpeds;
// //    this.smokeAmunition = smokeAmunition;
// //   }
// //   ////Создаем новый объект пустой и прототипом (родителем) этого объетка сделай Ship.prototype 
// //   AV.prototype = Object.create (Ship.prototype);   
// // //   console.log(AV);
// //   /// пусть функции м методы прототипа наполнятся в ново созданный объект
// //   AV.prototype.constructor = AV;

// //   AV.prototype.launchTorpeds = function(){
// //     if(this.torpeds > 0) {
// //         this.torpeds--;
// //       }
// //     }
// //   AV.prototype.launchSmoke = function (){
// //     if(this.smokeAmunition > 0) {
// //         this.smokeAmunition--;
// //       }
// //   }

// //   let player2 = new AV('Serg', 100, 20, 'blue', 45, 20, 20, 10,5);
  
// //   // Выведем результат работы конструктора в консоль
// //   console.log(player2);

// //    player2.torpeds = 10;
  

// /////////////////////  Классы //////////////////////////////

// // Задача переписать Корабли на классы

// // class Ship {           /////////////логика у него как и у логики прототипа
// // constructor(name, life, armor, color, x, y, amunition) {  
// //              //// метод в средине класса с параметрами 
// //         this.speed = 0;
// //         this.name = name;
// //         this.life = life;
// //         this.armor = armor;
// //         this.color = color;
// //         this.x = x;
// //         this.y = y;
// //         this.amunition = amunition;
// // }           
// //     move(a,b){ /////// функция, после конструктора пишем все методы в виде функций     
// //       if (this.speed > 0) {
// //         this.x = a;
// //         this.y = b;
// //       }
// //     }
// //     acselerate (speed) {
// //     this.speed = speed;
// //     }
// //     stop(){
// //     this.speed = 0;
// //     }
// //     fire(){
// //         if (this.amunition > 0) {
// //             this.amunition--;
// //           } 
// //     }

// // }

// // class ES extends Ship {
// //   constructor(name, life, armor, color, x, y, amunition,torpeds,smokeAmunition) {
// //     super(name, life, armor, color, x, y, amunition)
// //     this.torpeds = torpeds;
// //     this.smokeAmunition = smokeAmunition;
// //     }
// //     launchTorpeds(){
// //       if(this.torpeds > 0) {
// //         this.torpeds--;
// //       }
// //     }
// //     launchSmoke() {
// //       if(this.smokeAmunition > 0) {
// //         this.smokeAmunition--;
// //       }
// //     }
// //   }

// // let player1 = new ES('Bob', 5000, 500, 'red', 45, 12, 50, 30,5);

// // console.log(player1);


// ///////////////////// дополнительные Задачи к 6 модулю


// ////////////////////1
// /*
//   Создать функцию-конструктор Account, которая добавляет будущему
//   объекту поля login, email и friendsCount. 
  
//   В prototype функции-конструктора добавить метод getAccountInfo(), 
//   который выводит в консоль значения полей login, email и friendsCount. 
//   Обратите внимание, метод будет всего один, в поле prototype функции-конструктора, 
//   а использовать его смогут все экземпляры, по ссылке.
  
//   Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
// */

// // class Account {
// //     constructor(login,email,friendsCount){
// //     this.login = login;
// //     this.email = email;
// //     this.friendsCount = friendsCount;
// //     }
// //     getAccountInfo(){
// //         console.log(`${this.login}${this.email}${this.friendsCount}`);   
// //     }
// // }
// //  class AV extends Account {
// //      constructor (login,email,friendsCount,cost){
// //      super(login,email,friendsCount);   ////такие же параметры как в конструкторе
// //      this.cost = cost;
// //      }
// //  }

// //  let x = new AV(`qwerty`, `alexey@ist.com`,5,15 )
// //  console.log(x);

// //  class BTC extends AV {
// //     constructor (login,email,friendsCount,cost,price1,price2){
// //     super(login,email,friendsCount,cost);   ////такие же параметры как в конструкторе
// //     this.price1 = price1;
// //     this.price2 = price2;
// // }
// // }

// // let bitcoin = new BTC (`tytyty`, `rtrtr@ist.com`,105,1500, 40,40 ) //это аргументы для конструктора
// //  console.log(bitcoin);

 
// /////////////////////////2
// /*
//   Напишите ES6 класс StringBuilder.
//   На вход (в конструкторе) он получает один параметр string - строку,
//   которую записывает в поле value.
//   Добавьте классу следующие методы:
//     - getValue() - возвращает текущее значение поля value
//     - append(str) - получает парметр str - строку и добавляет 
//       ее в конец значения поля value
//     - prepend(str) - получает парметр str - строку и добавляет 
//       ее в начало значения поля value
//     - pad(str) - получает парметр str - строку и добавляет 
//       ее в начало и в конец значения поля value
// */
// // class StringBuilder {
// //     constructor (string){
// //         this.value = string;
// //     }
// //     getValue(){
// //         return this.value;
// //     }
// //     append(str){
// //     this.value=str+this.value;
// //     }
// //     prepend(str){
// //     this.value=this.value+str;  
// //     }
// //     pad(str){ 
// //     this.value=str+this.value+str;  
// //     }
// // }

// // const builder = new StringBuilder('.');
// // builder.append('^'); 
// // console.log(builder.getValue()); // '.^'

// // builder.prepend('^'); 
// // console.log(builder.getValue()); // '^.^'

// // builder.pad('='); 
// // console.log(builder.getValue()); // '=^.^='


// //////////////////////////////////3

// /*
//   Создайте класс Car с указанными полями и методами.
// */

// class Car {
//     constructor(maxSpeed) {
//         // Добавьте свойства:
//         //   - speed - для отслеживания текущей скорости, изначально 0.
//         this.speed =0;
//         //   - maxSpeed - для хранения максимальной скорости 
//         this.maxSpeed =maxSpeed;

//         this.running = false;
//         //   - running - для отслеживания заведен ли автомобиль, 
//         //     возможные значения true или false. Изначально false. 
//         //   - distance - содержит общий киллометраж, изначально с 0 
//         this.distance =0; 
//     }
//     turnOn() {
//       // Добавьте код для того чтобы завести автомобиль
//       // Просто записывает в свойство running значание true
//      this.running = true;
//     }
  
//     turnOff() {
//       // Добавьте код для того чтобы заглушить автомобиль
//       // Просто записывает в свойство running значание false
//       this.running = false;
//       this.speed =0;
//     }
    
//     accelerate(spd) {
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed
//       if (spd<this.maxSpeed && this.running === true ){
//         this.speed=this.speed+spd;  
//       }
//     }
//     decelerate(spd) {
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed и не меньше нуля
//       if (this.speed>0 && this.speed<this.maxSpeed){
//           this.speed=this.speed-spd;  
//         }
//     }
//     drive(hours) {
//       // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//       // но только в том случае если машина заведена!

//       if (this.running === true){
//      this.distance =hours*this.speed;
//       }
//     }
//   }
//   let result = new Car(100);
//   console.log(result);

//   result.turnOn();  //включили машину
// //   result.turnOff();   //выключили машину
//   result.accelerate(50);   //дали скорости 
//   result.decelerate(20);   // скокрость изменилась на 20
//   result.drive(5);         // установили сколько часов проехали
// //   result.turnOff(); // при вызове обратно этой функции машина выключается
  
  
//   /////////////////////////////////4
  
// //   Добавьте к классу Car из предыдущего задания статический
// //   метод getSpecs, который получает объект-машину как аргумент
// //   и выводит в консоль значения полей maxSpeed, running и distance.
  
// //   Использование будет выглядеть следующим образом:
  
//   const someCar = new Car(100);
//   someCar.turnOn();
//   someCar.drive(2);
  
//   Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200


// ////////////////////////////5


// /*
//   Добавьте классу Car свойство value - цена автомобиля.
  
//   Добавьте классу Car использование геттеров и сеттеров для свойства value.
  
//   Геттер вернет текущее значение поля this._value
//   Сеттер запишет в поле this._value то что ему присвоят
  
//   PS: имя геттера и сеттера не может совпадать с полем, поэтому используйте
//     не this.value а this._value
    
//   Использование выглядит следующим образом:
  
//   const myCar = new Car(50, 2000);
  
//   myCar.value; // 2000
//   myCar.value = 4000;
//   myCar.value; // 4000
// */

// // class Car {
// //     constructor(maxSpeed, value) {
// //       // ... код
// //       this._value = value;
// //     }
// //     // ... код
// //   }
  


//                                               ТЕРНАРНИК

// let tenarnic = x === y ? (?- если true /тогда и стоп проверка)  btc :(:-если false, тогда это ) eth;

//                Стрелочная функция 

// Стандартная запись        let add = function (a,b)( return a+b;);
// Сокращенная(стрелочная)   let add = (a,b) => a+b;


///////////// Статические методы гетеры и сетеры  /////////////



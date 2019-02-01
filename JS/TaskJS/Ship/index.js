
//////////////     Игра в корабли    /////////////////////////// 


////// Создаем конструктор корабля(шаблон) на базе которого будет создавать другие корабли,
//он имеет параметры которые будут и у всех других кораблей 

function Ship(name, life, armor, color, x, y, amunition) {
    this.speed = 0;
    this.name = name;
    this.life = life;
    this.armor = armor;
    this.color = color;
    this.x = x;
    this.y = y;
    this.amunition = amunition;
  }
  // Создаем методы этого конструктора
  Ship.prototype.move = function (a, b) {
    if (this.speed > 0) {
      this.x = a;
      this.y = b;
    }
  }
  Ship.prototype.acselerate = function (speed) {
    this.speed = speed;
  }
  
  Ship.prototype.stop = function () {
    this.speed = 0;
  }
  
  Ship.prototype.fire = function () {
    if (this.amunition > 0) {
      this.amunition--;
    }
  }

   
  /////// создаем первый клон-конструктора и называем его ES от основного корабля Ship

  function ES (name, life, armor, color, x, y, amunition, torpeds, smokeAmunition) {
    // this = {}
    Ship.call(this, name, life, armor, color, x, y, amunition);
    this.torpeds = torpeds;
    this.smokeAmunition = smokeAmunition;
  } 
  ES.prototype = Object.create(Ship.prototype);

  ES.prototype.constructor = ES;
  
  ES.prototype.launchTorpeds = function() {
    if(this.torpeds > 0) {
      this.torpeds--;
    }
  } 
  ES.prototype.launchSmoke = function() {
    if(this.smokeAmunition > 0) {
      this.smokeAmunition--;
    }
  }
  
  let player1 = new ES('Bob', 5000, 500, 'red', 45, 12, 50, 30,5);
  
  // Выведем результат работы конструктора в консоль
  console.log(player1);


  ///// создаем второй корабль Авианосец AV от основного корабля Ship
//   с такими же параметрами как  Ship+ 2 новых torpeds / smokeAmunition

  function AV (name, life, armor, color, x, y, amunition, torpeds, smokeAmunition) {
      // this = {}
   Ship.call(this, name, life, armor, color, x, y, amunition);
   // мы добавили все неймы и их значения от Ship
   this.torpeds = torpeds;
   this.smokeAmunition = smokeAmunition;
  }
  ////Создаем новый объект пустой и прототипом (родителем) этого объетка сделай Ship.prototype 
  AV.prototype = Object.create (Ship.prototype);   
//   console.log(AV);
  /// пусть функции м методы прототипа наполнятся в ново созданный объект
  AV.prototype.constructor = AV;

  AV.prototype.launchTorpeds = function(){
    if(this.torpeds > 0) {
        this.torpeds--;
      }
    }
  AV.prototype.launchSmoke = function (){
    if(this.smokeAmunition > 0) {
        this.smokeAmunition--;
      }
  }

  let player2 = new AV('Serg', 100, 20, 'blue', 45, 20, 20, 10,5);
  
  // Выведем результат работы конструктора в консоль
  console.log(player2);

   player2.torpeds = 10;
  



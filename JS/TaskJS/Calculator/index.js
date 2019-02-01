const startBtn = document.querySelector (`.get-Value`);
const sumBtn = document.querySelector (`.sum`);
const minusBtn = document.querySelector (`.minus`);
const multBtn = document.querySelector (`.mult`);
const divideBtn = document.querySelector (`.divide`);
const powBtn = document.querySelector (`.pow`);

let a = document.querySelector (`#a`);
let b = document.querySelector (`#b`);
let sum = document.querySelector (`#sum`);
let minus = document.querySelector (`#minus`);
let mult = document.querySelector (`#mult`);
let divide = document.querySelector (`#divide`);
let pow = document.querySelector (`#pow`);

class Calculator {
    constructor() {
         // this = {}
         this.a = null;
         this.b = null;

         this.getValue = this.getValue.bind(this);
         this.sum = this.sum.bind(this);
         this.minus = this.minus.bind(this);
         this.mult = this.mult.bind(this);
         this.divide = this.divide.bind(this);
         this.pow = this.pow.bind(this);
    }

    getValue() {
         console.log(this);
         this.a = Number(prompt('Enter number'));
         this.b = Number(prompt('Enter number'));
         a.textContent = this.a;
         b.textContent = this.b;
    }
    sum() {
        //  console.log(this);
         sum.textContent = this.a + this.b;
    }
    minus() {
        //  console.log(this);
         minus.textContent = this.a - this.b;
    }
    mult() {
        //  console.log(this);
         mult.textContent = this.a * this.b;
    }
    divide() {
        //  console.log(this);
         divide.textContent = this.a / this.b;
    }
    pow() {
        //  console.log(this);
         pow.textContent =  Math.pow(this.a, this.b);
    }
}

let machine = new Calculator();

startBtn.addEventListener('click',machine.getValue);
sumBtn.addEventListener('click', machine.sum);
minusBtn.addEventListener('click', machine.minus);
multBtn.addEventListener('click', machine.mult);
divideBtn.addEventListener('click', machine.divide);
powBtn.addEventListener('click', machine.pow);
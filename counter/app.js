function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(`Please check "${selection}" selector, no such element exists`);
}
/* 
// Class Counter
class Counter {
  constructor(element, value) {
    this.counter = element;
    this.value = value;
    this.resetBtn = element.querySelector('.reset');
    this.increaseBtn = element.querySelector('.increase');
    this.decreaseBtn = element.querySelector('.decrease');
    this.valueDOM = element.querySelector('.value');
    this.valueDOM.textContent = this.value;

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);

    this.increaseBtn.addEventListener('click', this.increase);
    this.decreaseBtn.addEventListener('click', this.decrease);
    this.resetBtn.addEventListener('click', this.reset);
  }
  increase() {
    this.value++;
    this.valueDOM.textContent = this.value;
  }
  decrease() {
    this.value--;
    this.valueDOM.textContent = this.value;
  }
  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
  }
}

// Using class
const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);
 */
/*
// Counter prototype object
function Counter(element, value) {
  this.counter = element;
  this.value = value;
  this.resetBtn = element.querySelector('.reset');
  this.increaseBtn = element.querySelector('.increase');
  this.decreaseBtn = element.querySelector('.decrease');
  this.valueDOM = element.querySelector('.value');
  this.valueDOM.textContent = this.value;

  this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);

  this.increaseBtn.addEventListener('click', this.increase);
  this.decreaseBtn.addEventListener('click', this.decrease);
  this.resetBtn.addEventListener('click', this.reset);
}
// Using prototype object
Counter.prototype.increase = function () {
  this.value++;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.decrease = function () {
  this.value--;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDOM.textContent = this.value;
};

const firstCounter = new Counter(getElement('.first-counter'), 100);

const secondCounter = new Counter(getElement('.second-counter'), 200);
*/

// function Couter way
function Counter(element, value) {
  let counterValue = value;
  const resetBtn = element.querySelector('.reset');
  const increaseBtn = element.querySelector('.increase');
  const decreaseBtn = element.querySelector('.decrease');
  const valueDOM = element.querySelector('.value');
  valueDOM.textContent = counterValue;

  function increase() {
    counterValue++;
    valueDOM.textContent = counterValue;
  }

  function decrease() {
    counterValue--;
    valueDOM.textContent = counterValue;
  }

  function reset() {
    counterValue = 0;
    valueDOM.textContent = counterValue;
  }

  increaseBtn.addEventListener('click', increase);
  decreaseBtn.addEventListener('click', decrease);
  resetBtn.addEventListener('click', reset);
}

// Using function
const firstCouterFunction = Counter(getElement('.first-counter'), 100);
const secondCouterFunction = Counter(getElement('.second-counter'), 200);

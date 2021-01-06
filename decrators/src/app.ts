//decorators
function Loggers(_: Function) {
  console.log('Logging...');
}
//decorators factory
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    console.log('Rendering template');
    const p = new constructor();
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl!.querySelector('h1')!.textContent = p.name;
    }
  };
}

@Logger('Logging - person')
@WithTemplate('<h1>My Person Object </h1>', 'app')
class Person {
  name = 'max';
  constructor() {
    console.log('creating person object');
  }
}

const pers = new Person();
console.log(pers);

//-------
// propert decorator
function Log(target: any, propertyName: string | symbol) {
  console.log('PropertyDecorator ');
  console.log(target, propertyName);
}

// accessor decorator
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor Decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// method decorator
function Log3(
  target: any,
  name: string | symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method Decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// perameter decorator
function Log4(target: any, name: string | symbol, position: number) {
  console.log('Perameter Decorator');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('invalid price');
    }
  }
  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

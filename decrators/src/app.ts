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

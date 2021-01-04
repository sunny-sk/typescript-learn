type Admin = {
  name: string;
  privilages: string[];
};
type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
  name: 'sunny',
  privilages: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

// type gaurd
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(`name ${emp.name}`);
  if ('privilages' in emp) {
    console.log(`name ${emp.privilages}`);
  }
  if ('startDate' in emp) {
    console.log(`name ${emp.startDate}`);
  }
}

printEmployeeInformation({ name: 'sunny', startDate: new Date() });

class Car {
  drive() {
    console.log('driving car ....');
  }
}

class Truck {
  drive() {
    console.log('driving truck ....');
  }

  loadCargo(amount: number) {
    console.log('loading truck ', amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if ('loadCargo' in vehicle) {
  //   vehicle.loadCargo(1000);
  // }
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

// useVehicle(v1);
// useVehicle(v2);

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}
interface Horse {
  type: 'horse';
  runningHorse: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningHorse;
      break;
  }
  console.log('moving at speed ', speed);
}

// moveAnimal({ type: 'bird', flyingSpeed: 10 });

// const pera = <HTMLInputElement>document.getElementById('user-input')!;
const pera = document.getElementById('user-input')! as HTMLInputElement;
pera.value = 'Hi there';

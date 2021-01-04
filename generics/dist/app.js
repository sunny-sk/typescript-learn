"use strict";
const el = {
    name: 'sunny',
    privilages: ['create-server'],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
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
    loadCargo(amount) {
        console.log('loading truck ', amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
function moveAnimal(animal) {
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
const pera = document.getElementById('user-input');
pera.value = 'Hi there';
//# sourceMappingURL=app.js.map
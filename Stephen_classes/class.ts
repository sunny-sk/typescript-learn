class Vehicle {
  color: string = 'white';
  constructor() {}

  public drive() {
    console.log('drive');
  }
  public honk() {
    console.log('honk');
  }
  protected filled() {
    console.log('fuel filled');
  }
}

class Car extends Vehicle {
  public drive() {
    console.log('drive car');
  }
}

const car = new Car();
// car.drive();
car.honk();

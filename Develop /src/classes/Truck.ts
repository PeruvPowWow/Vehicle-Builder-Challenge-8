// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  vin: string = '';
  color: string = '';
  make: string = '';
  model: string = '';
  year?: number;
  weight: number = 0;
  topSpeed: number = 0;
  wheels: Wheel[] = [];
  towingCapacity: number = 0;

  constructor(
      vin: string,
      color: string,
      make: string,
      model: string,
      year: number,
      weight: number,
      topSpeed: number,
      wheels: Wheel[] = [new Wheel(32), new Wheel(18)],
      towingCapacity: number
    ) {
  
      super();

    this.color = color;
    this.topSpeed = topSpeed;
    this.wheels = wheels.length === 4 ? wheels : [new Wheel(18), new Wheel(18), new Wheel(18), new Wheel(18)];
    this.towingCapacity = towingCapacity;
  }

  tow(vehicle: Truck | Motorbike | Car): void {
    const make = vehicle.make;
    const model = vehicle.model;
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`The ${make} ${model} is being towed.`);
    } else {
      console.log(`The ${make} ${model} is too heavy to be towed.`);
    }
  }

  override printDetails(): void {
    super.printDetails();
    console.log(`Color: ${this.color}`);
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
    console.log(`Wheels: ${this.wheels.map(wheel => `${wheel.brand} ${wheel.getDiameter}"`).join(', ')}`);
  }
}

export default Truck;


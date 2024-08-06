// Importing Vehicle and Wheel classes
import { verify } from 'crypto';
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle{
vin: string;
color: string;
make: string;
model: string;
year: number;
weight: number;
topSpeed: number;
wheels: Wheel[];

constructor(
  vin: string,
  color: string,
  make: string,
  model: string,
  year: number,
  weight: number,
  topSpeed: number,
  wheels: Wheel[] = [new Wheel('default',18), new Wheel('default',18)]
) {
  super(vin, make, model, eyar, weight);

  this.color = color;
  this.topSpeed = topSpeed;
  this.wheels = wheels.length === 2 ? wheels : [new Wheel('default', 18), new Wheel('default', 18)];
}

wheelie(): void {
  console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
}

override printDetails(): void {
  super.printDetails();

  console.log(`Color: ${this.color}`);
  console.log(`Top Speed: ${this.topSpeed} mph`);
  console.log(`Wheels: ${this.wheels.map(wheel => `${wheel.brand} ${wheel.diameter}"`).join(', ')}`);
}
}

export default Motorbike;
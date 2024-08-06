// Importing Vehicle and Wheel classes
import { verify } from 'crypto';
import Vehicle from './Vehicle.js';
import ImportedWheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle{
override vin: string = '';
color: string;
override make: string = ''; // Add an initializer to the 'make' property
override model: string = '';
override year: number = 0;
override weight: number = 0;
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
  wheels: Wheel[] = [new Wheel(32), new Wheel(18)]
) {
  super(vin, make, model, year, weight);

  this.color = color;
  this.topSpeed = topSpeed;
  this.wheels = wheels.length === 2 ? wheels : [new Wheel(18), new Wheel(18)];
}

wheelie(): void {
  console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
}

override printDetails(): void {
  super.printDetails();

  console.log(`Color: ${this.color}`);
  console.log(`Top Speed: ${this.topSpeed} mph`);
  console.log(`Wheels: ${this.wheels.map(wheel => `${wheel.brand} ${wheel.getDiameter()}"`).join(', ')}`);
}
}
class Wheel {
  public brand: string;
  private diameter: number;

  constructor(diameter: number, brand: string = 'Generic') {
    this.brand = brand;
    this.diameter = diameter;
  }
  getDiameter(): number {
    return this.diameter;
  }
  getBrand(): string {
    return this.brand;
  }
}

export default Motorbike;
// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  // Declare properties of the Motorbike class
  // The properties should include vin, color, make, model, year, weight, top speed, and wheels
  // The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  // Create a constructor that accepts the properties of the Motorbike class
    // The constructor should call the constructor of the parent class, Vehicle
    // The constructor should initialize the properties of the Motorbike class
    // The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[] = [new Wheel(), new Wheel()]
  ) {
    super()

    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;
  }
  // Implement the wheelie method
    // The method should log the message "Motorbike [make] [model] is doing a wheelie!"
    wheelie(): void {
      console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
    }
  // Override the printDetails method from the Vehicle class
  // The method should call the printDetails method of the parent class
  // The method should log the details of the Motorbike
  // The details should include the VIN, make, model, year, weight, top speed, color, and wheels
  override printDetails(): void {
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Wheels: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`);
    console.log(`Wheels: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`);
}
}

// Export the Motorbike class as the default export
export default Motorbike;
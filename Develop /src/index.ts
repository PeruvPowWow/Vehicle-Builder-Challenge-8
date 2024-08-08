// import classes
import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";

class Cli {
  generateVin(): string {
    return "VIN123456789";
  }

  startCli(): void {
    // Add your code here to start the CLI
  }
}

// create an instance of the Cli class
const cli = new Cli();

// create an array of vehicles
const vehicles: (Car | Truck | Motorbike)[] = [];

// TODO: uncomment once trucks are implemented
// const truck1 = new Truck(
//   Cli.generateVin(), // Generate a unique VIN for the truck
//   "red", // Color of the truck
//   "Ford", // Make of the truck
//   "F-150", // Model of the truck
//   2021, // Year of the truck
//   5000, // Payload capacity
//   120, // Top speed
//   [], // Array of wheels (to be defined)
//   10000 // Towing capacity
// );

// will use default wheels
const car1 = new Car(
  cli.generateVin(), // Generate a unique VIN for the car
  'blue', // Color of the car
  'Toyota', // Make of the car
  'Camry', // Model of the car
  2021, // Year of the car
  3000, // Payload capacity
  130, // Top speed
  [] // Array of wheels (to be defined)
);

// TODO: uncomment once motorbikes are implemented
// const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
// const motorbike1 = new Motorbike(
//   Cli.generateVin(), // Generate a unique VIN for the motorbike
//   "black", // Color of the motorbike
//   "Harley Davidson", // Make of the motorbike
//   "Sportster", // Model of the motorbike
//   2021, // Year of the motorbike
//   500, // Payload capacity
//   125, // Top speed
//   motorbike1Wheels // Array of wheels
// );

// push vehicles to array
// TODO: uncomment once trucks are implemented
// vehicles.push(truck1);
vehicles.push(car1);
// TODO: uncomment once motorbikes are implemented
// vehicles.push(motorbike1);

// start the cli
cli.startCli();

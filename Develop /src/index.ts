// import classes
import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";

// create an array of vehicles
const vehicles: (Car | Truck | Motorbike)[] = [];

// TODO: uncomment once trucks are implemented
// const truck1 = new Truck
// (Cli.generateVin(), // Generate a unique VIN for the truck
// "red", // Color of the truck
//  "Ford", // Make of the truck
// "F-150",// Model of the truck
//  2021, // Year of truck
//  5000, // Payload capacity
//  120, // top speed
//  [], // Array of wheels (to be defined)
//  10000 // Towing capacity
// );

// will use default wheels
const car1 = new Car(
  Cli.generateVin(), // Generate a unique VIN for the car
  'blue', // Color of the car
  'Toyota', // Make of the car
  'Camry', // Model of the car
  2021, // Year of car
  3000, // Payload capacity
  130, // top speed
  [] // Array of wheels (to be defined)
);

// TODO: uncomment once motorbikes are implemented
// const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
// const motorbike1 = new Motorbike(Cli.generateVin(), "black", "Harley Davidson", "Sportster", 2021, 500, 125, motorbike1Wheels);

// push vehicles to array
// TODO: uncomment once trucks are implemented
// vehicles.push(truck1);
vehicles.push(car1);
// TODO: uncomment once motorbikes are implemented
// vehicles.push(motorbike1);

// create a new instance of the Cli class
const cli = new Cli(vehicles);

// start the cli
cli.startCli();

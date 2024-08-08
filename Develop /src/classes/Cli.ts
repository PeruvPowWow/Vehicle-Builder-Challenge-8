// Importing required modules and classes
import inquirer from 'inquirer';
import Vehicle from './Vehicle.js';
import Car from './Car.js';
import Truck from './Truck.js';
import Motorbike from './Motorbike.js';
import Wheel from './Wheel.js';

// Defining the CLI class
class Cli {
  vehicles: Vehicle[];
  selectedVehicleVin: string | null;
  exit: boolean;

  constructor() {
    this.vehicles = [];
    this.selectedVehicleVin = null;
    this.exit = false;
  }

  // Method to create a vehicle
  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleType',
          message: 'Select a vehicle type to create',
          choices: ['Car', 'Truck', 'Motorbike'],
        },
      ])
      .then((answers) => {
        switch (answers.vehicleType) {
          case 'Car':
            this.createCar();
            break;
          case 'Truck':
            this.createTruck();
            break;
          case 'Motorbike':
            this.createMotorbike();
            break;
        }
      });
  }

  // Method to create a car
  createCar(): void {
    inquirer
      .prompt([
        { type: 'input', name: 'vin', message: 'Enter VIN' },
        { type: 'input', name: 'color', message: 'Enter Color' },
        { type: 'input', name: 'make', message: 'Enter Make' },
        { type: 'input', name: 'model', message: 'Enter Model' },
        { type: 'input', name: 'year', message: 'Enter Year' },
        { type: 'input', name: 'weight', message: 'Enter Weight' },
        { type: 'input', name: 'topSpeed', message: 'Enter Top Speed' },
        { type: 'input', name: 'wheelDiameter', message: 'Enter Wheel Diameter' },
        { type: 'input', name: 'tireBrand', message: 'Enter Tire Brand' },
      ])
      .then((answers) => {
        const wheels: Wheel[] = [
          new Wheel(answers.wheelDiameter, answers.tireBrand),
          new Wheel(answers.wheelDiameter, answers.tireBrand),
          new Wheel(answers.wheelDiameter, answers.tireBrand),
          new Wheel(answers.wheelDiameter, answers.tireBrand),
        ];
        const car = new Car(
          answers.vin,
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          wheels
        );
        this.vehicles.push(car);
        this.selectedVehicleVin = car.vin;
        this.performActions();
      });
  }

  // Method to create a truck
  createTruck(): void {
    inquirer
      .prompt([
        { type: 'input', name: 'vin', message: 'Enter VIN' },
        { type: 'input', name: 'color', message: 'Enter Color' },
        { type: 'input', name: 'make', message: 'Enter Make' },
        { type: 'input', name: 'model', message: 'Enter Model' },
        { type: 'input', name: 'year', message: 'Enter Year' },
        { type: 'input', name: 'weight', message: 'Enter Weight' },
        { type: 'input', name: 'topSpeed', message: 'Enter Top Speed' },
        { type: 'input', name: 'towingCapacity', message: 'Enter Towing Capacity' },
        { type: 'input', name: 'wheelDiameter', message: 'Enter Wheel Diameter' },
        { type: 'input', name: 'tireBrand', message: 'Enter Tire Brand' },
      ])
      .then((answers) => {
        const wheels: Wheel[] = [
          new Wheel(answers.wheelDiameter, answers.tireBrand),
          new Wheel(answers.wheelDiameter, answers.tireBrand),
          new Wheel(answers.wheelDiameter, answers.tireBrand),
          new Wheel(answers.wheelDiameter, answers.tireBrand),
        ] as Wheel[];
        const truck = new Truck(
          answers.vin,
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          wheels,
          parseInt(answers.towingCapacity)
        );
        const vehicle: Vehicle = new Truck(
          truck.vin,
          truck.color,
          truck.make,
          truck.model,
          truck.year || 0, // Provide a default value for 'year' if it is not provided
          truck.weight,
          truck.topSpeed,
          truck.wheels,
          truck.towingCapacity
        ) as Vehicle; // Cast the instance of 'Truck' to 'Vehicle' to satisfy the type requirement.
        this.vehicles.push(vehicle);
        this.selectedVehicleVin = truck.vin;
        this.performActions();
      });
  }

  // Method to create a motorbike
  createMotorbike(): void {
    inquirer
      .prompt([
        { type: 'input', name: 'vin', message: 'Enter VIN' },
        { type: 'input', name: 'color', message: 'Enter Color' },
        { type: 'input', name: 'make', message: 'Enter Make' },
        { type: 'input', name: 'model', message: 'Enter Model' },
        { type: 'input', name: 'year', message: 'Enter Year' },
        { type: 'input', name: 'weight', message: 'Enter Weight' },
        { type: 'input', name: 'topSpeed', message: 'Enter Top Speed' },
        { type: 'input', name: 'frontWheelDiameter', message: 'Enter Front Wheel Diameter' },
        { type: 'input', name: 'frontWheelBrand', message: 'Enter Front Wheel Brand' },
        { type: 'input', name: 'rearWheelDiameter', message: 'Enter Rear Wheel Diameter' },
        { type: 'input', name: 'rearWheelBrand', message: 'Enter Rear Wheel Brand' },
      ])
      .then((answers) => {
        const frontWheel = new Wheel(answers.frontWheelDiameter, answers.frontWheelBrand);
        const rearWheel = new Wheel(answers.rearWheelDiameter, answers.rearWheelBrand);
        const wheels = [frontWheel, rearWheel];
        const motorbike = new Motorbike(
          answers.vin,
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed), 
        );
        this.vehicles.push(motorbike);
        this.selectedVehicleVin = motorbike.vin;
        this.performActions();
      });
  }

  // Method to find a vehicle to tow
  findVehicleToTow(truck: Truck): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleToTow',
          message: 'Select a vehicle to tow',
          choices: this.vehicles.map((vehicle) => ({
            name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
            value: vehicle,
          })),
        },
      ])
      .then((answers) => {
        const vehicleToTow = answers.vehicleToTow;
        if (vehicleToTow === truck) {
          console.log('The truck cannot tow itself.');
          this.performActions();
        } else {
          truck.tow(vehicleToTow);
          this.performActions();
        }
      });
  }

  // Method to perform actions on a vehicle
  performActions(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Select an action',
          choices: [
            'Print details',
            'Start vehicle',
            'Accelerate 5 MPH',
            'Decelerate 5 MPH',
            'Stop vehicle',
            'Turn right',
            'Turn left',
            'Reverse',
            'Tow a vehicle',
            'Do a wheelie',
            'Select or create another vehicle',
            'Exit',
          ],
        },
      ])
      .then((answers) => {
        const selectedVehicle = this.vehicles.find(
          (vehicle) => vehicle.vin === this.selectedVehicleVin
        );

        if (!selectedVehicle) {
          console.log('No vehicle selected.');
          this.performActions();
          return;
        }

        switch (answers.action) {
          case 'Print details':
            selectedVehicle.printDetails();
            break;
          case 'Start vehicle':
            selectedVehicle.start();
            break;
          case 'Accelerate 5 MPH':
            selectedVehicle.accelerate(5);
            break;
          case 'Decelerate 5 MPH':
            selectedVehicle.decelerate(5);
            break;
          case 'Stop vehicle':
            selectedVehicle.stop();
            break;
          case 'Turn right':
            selectedVehicle.turn('right');
            break;
          case 'Turn left':
            selectedVehicle.turn('left');
            break;
          case 'Reverse':
            selectedVehicle.reverse();
            break;
          case 'Tow a vehicle':
            if (selectedVehicle instanceof Truck) {
              this.findVehicleToTow(selectedVehicle);
              return;
            } else {
              console.log('Only trucks can tow vehicles.');
            }
            break;
          case 'Do a wheelie':
            if (selectedVehicle instanceof Motorbike) {
              (selectedVehicle as Motorbike).wheelie();
            } else {
              console.log('Only motorbikes can do wheelies.');
            }
            break;
          case 'Select or create another vehicle':
            this.createVehicle();
            return;
          case 'Exit':
            this.exit = true;
            break;
        }

        if (!this.exit) {
          this.performActions();
        }
      });
  }

  // Method to start the CLI
  startCli(): void {
    this.createVehicle();
  }
}

// Export the Cli class as the default export
export default Cli;

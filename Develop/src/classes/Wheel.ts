// Wheel class that defines the properties of a wheel
class Wheel {
  // Declare properties of the Wheel class using private access modifier
  private diameter: number;
  private tireBrand: string;
  brand: any;

  // Constructor for the Wheel class
  constructor(diameter: number = 18, tireBrand: string = "GoodYear") {
    this.diameter = diameter;
    this.tireBrand = tireBrand;
  }

  // Getter methods for the properties of the Wheel class
 getDiameter(): number {
    return this.diameter;
  }

  // Setter method for the diameter property
 setDiameter(diameter: number): void {
  this.diameter = diameter;
}

 getTireBrand(): string {
    return this.tireBrand;
  }

setTireBrand(tireBrand: string): void {
  this.tireBrand = tireBrand;
  }
}

// Export the Wheel class
export default Wheel;

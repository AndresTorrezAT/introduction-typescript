// Establezca el modificador de acceso de las propiedades _color, _doors y _make y la función worker en private
// public, private, protecd
class Car2 {
    // Properties
    private _make: string;
    private _color: string;
    private _doors: number;


    // Constructor
        constructor(make: string, color: string, doors = 4) {
            this._make = make;
            this._color = color;
            if ((doors % 2) === 0) {
                this._doors = doors;
            } else {
                throw new Error('Doors must be an even number');
            }
        }

    // Accessors
      get make() {
         return this._make;
      }

      set make(make) {
         this._make = make;
      }

      get color() {
         return 'The color of the car is ' + this._color;
      }

      set color(color) {
         this._color = color;
      }

      get doors() {
         return this._doors;
      }

      set doors(doors) {
         if ((doors % 2) === 0) {
            this._doors = doors;
         } else {
            throw new Error('Doors must be an even number');
         }
      }


    // Methods
    accelerate(speed: number): string {
        return `${this.worker()} is accelerating to ${speed} MPH.`
    }
    brake(): string {
        return `${this.worker()} is braking with the standard braking system.`
    }
    turn(direction: 'left' | 'right'): string {
        return `${this.worker()} is turning ${direction}`;
    }

    // This function performs work for the other method functions
    private worker(): string {
        return this._make;
    }

}

//Lab1
let myCar22 = new Car('Cool Car Company', 'blue', 2);  // Instantiates the Car object with all parameters

// myCar22.
// Pruebe de nuevo el acceso a los miembros de la clase escribiendo myCar1. y observe que las propiedades y la función worker ahora no están disponibles. 
// Cualquier intento de utilizar estos miembros de la clase generará un error en tiempo de compilación.
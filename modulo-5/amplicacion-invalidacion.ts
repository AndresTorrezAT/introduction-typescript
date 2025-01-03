//Invalidación de un método
// Cuando una clase derivada tiene una definición diferente para una de las funciones miembro de la clase base, 
// se dice que la función base está invalidada. La invalidación es lo que sucede cuando se crea una función en 
// una subclase con el mismo nombre que la función de la clase base, pero con una funcionalidad diferente.

class Car {
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
      protected worker(): string {
         return this._make;
      }
 
 }
 
 
 class ElectricCar extends Car {
     // Properties unique to ElectricCar
     private _range: number;
 
     // Constructor
         // La lista de parámetros puede incluir cualquiera de las propiedades de la clase base y la subclase. (Al igual que con todas las listas de parámetros en TypeScript, recuerde que los parámetros obligatorios deben aparecer antes de los opcionales).
         // En el cuerpo de constructor, debe agregar la palabra clave super() para incluir los parámetros de la clase base. La palabra clave super ejecuta el elemento constructor de la clase base cuando se ejecuta.
         // La palabra clave super debe aparecer antes de cualquier referencia a this. cuando se refiera a las propiedades de la subclase.
 
         constructor(make: string, color: string, range: number, doors = 2) {
             super(make, color, doors);
             this._range = range;
         }
     // Accessors
         // Defina los descriptores de acceso get y set para el parámetro range
 
         get range() {
             return this._range;
         }
 
         set range(range) {
             this._range = range;
         }
 
     // Methods
 
         // En la clase Car, cambie el modificador de acceso de la función worker de private a protected. 
         // Esto permite a las subclases de la clase Car utilizar la función, mientras que la mantienen 
         // oculta de los miembros disponibles para los objetos de los que se ha creado una instancia desde 
         // la clase. Ya debería estar resuelto el error del método charge
 
         charge() {
             console.log(this.worker() + " is charging.")
         }
 
         // Overrides the brake method of the Car class
         brake(): string {
             return `${this.worker()}  is braking with the regenerative braking system.`
         }
 
 }
 
 let spark = new ElectricCar('Spark Motors','silver', 124, 2);
 let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
 console.log(eCar.doors);         // returns the default, 2
 spark.charge();                  // returns "Spark Motors is charging"
 console.log(spark.brake());  // returns "Spark Motors is braking with the regenerative braking system"
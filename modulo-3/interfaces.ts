// Todo: Tipado Estructural
interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string;
}

//ejemplo
let employee: Employee = {
    firstName : "Emil",
    lastName: "Andersson",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

employee.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string'

//A menudo, las interfaces son el principal punto de contacto entre dos fragmentos de código TypeScript, 
// sobre todo cuando se trabaja con código JavaScript existente o con objetos de JavaScript integrados.

// Todo: ¿En qué se diferencia una interfaz de un alias de tipo?
// La diferencia clave entre una interfaz y un alias de tipo en TypeScript es:

// Extensibilidad:

// Una interfaz puede ampliarse (extenderse) o combinarse con otras interfaces, incluso después de su definición inicial:

interface Persona {
    nombre: string;
}

interface Persona {
    edad: number;
}

// Ahora Persona tiene ambas propiedades: nombre y edad.
// Un alias de tipo no se puede "reabrir" para agregar propiedades:

type Persona = {
    nombre: string;
};

// Esto no es posible:
// type Persona = { edad: number }; // Error


// Tipos complejos (uniones, tuplas, intersecciones):
// Los alias de tipo pueden describir tipos complejos como uniones o tuplas:

type ID = string | number; // Unión
type Punto = [number, number]; // Tupla

// Las interfaces no pueden describir uniones o tuplas directamente.

// Uso general:

// Usa interfaces para describir la forma de objetos y mantener extensibilidad.
// Usa alias de tipo para definir tipos complejos o si no necesitas extensibilidad.


//Todo: Por convención, los nombres de interfaces están en PascalCase.
// Las instrucciones de codificación de TypeScript sugieren que las interfaces no empiecen por la letra I.
//Después, defina las propiedades (o los miembros) de la interfaz y su tipo. Las propiedades pueden ser obligatorias, opcionales o de solo lectura.

// Obligatorio -    firstName: string;
// Opcional    -   firstName?: string;
// Solo lectura -   readonly firstName: string;

interface IceCream {
    flavor: string;
    scoops: number;
    instructions?: string;// se agrega (?) y pasa a ser opcional, de lo contracio es obligatorio pasar ese parametro
 }
 
 let myIceCream: IceCream = {
    flavor: 'vanilla',
    scoops: 2
 }
 
 console.log(myIceCream.flavor);
 
 function tooManyScoops(dessert: IceCream) {
    if (dessert.scoops >= 4) {
       return dessert.scoops + ' is too many scoops!';
    } else {
       return 'Your order will be ready soon!';
    }
 }
 
 console.log(tooManyScoops({flavor: 'vanilla', scoops: 5}));
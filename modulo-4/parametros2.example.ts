// AMBAS FORMAS DE DECLARAR TIPOS SON VALIDOS
// type calculator = (x: number, y: number) => number;
interface Calculator {
    (x: number, y: number): number;
}

let addNumbers: Calculator = (x: number, y: number): number => x + y;
let subtractNumbers: Calculator = (x: number, y: number): number => x - y;

let doCalculation = (operation: 'add' | 'subtract'): Calculator => {
    if (operation === 'add') {
        return addNumbers;
    } else {
        return subtractNumbers;
    }
}

console.log(doCalculation('add')(1, 2))


//Inferencia de tipos de funciones

// Al definir una función, no es necesario que los nombres de los parámetros de la función coincidan con los nombres del tipo de función.

// EN LO QUE RESPECTA A TYPESCRIPT, ESTAS TRES INSTRUCCIONES SON IDÉNTICAS.
let addNumbers: Calculator = (x: number, y: number): number => x + y;
let addNumbers: Calculator = (number1: number, number2: number): number => number1 + number2;
let addNumbers: Calculator = (num1, num2) => num1 + num2; // USAR ESTE
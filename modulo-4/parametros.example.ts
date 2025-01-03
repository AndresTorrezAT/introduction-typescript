//PARÁMETROS OBLIGATORIOS
let addThreeNumbers = (x: number, y: number, z: number): number => x + y + z;

addThreeNumbers(10, 20)
addThreeNumbers(10, 20, 30, 40)


//PARÁMETROS OPCIONALES
let addThreeNumbers = (x: number, y: number, z?: number): number => {
    if((z === undefined)) {
        return x + y;
    } else {
        return x + y + z;
    }
};

addThreeNumbers(10, 20)
addThreeNumbers(10, 20, 30)


//PARÁMETROS PREDETERMINADOS
let subtractThreeNumbers = (x: number, y: number, z = 100): number => x - y - z;

subtractThreeNumbers(10, 20);       // returns -110 because 'z' has been assigned the value 100
subtractThreeNumbers(10, 20, 15);   // returns -25


// Puede definir los tipos de funciones y usarlos al crear las funciones. Este diseño resulta útil si desea aplicar la misma signatura de tipo de función a más de una función.

//DEFINA UN TIPO DE FUNCIÓN LLAMADO CALCULATOR MEDIANTE UN ALIAS DE TIPO.
type calculator = (x: number, y: number) => number;

let addNumbers: calculator = (x: number, y: number): number => x + y;
let subtractNumbers: calculator = (x: number, y: number): number => x - y;

console.log(addNumbers(1, 2));
console.log(subtractNumbers(1, 2));


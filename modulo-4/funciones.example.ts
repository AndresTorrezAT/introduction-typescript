// FUNCIONES CON NOMBRE

function sum(input: number[]): number {        
    let total: number =  0;
    for(let count = 0; count < input.length; count++) {
        if(isNaN(input[count])){
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}

sum([1,2,3])

// PARAMETROS OBLIGATORIOS

function addNumbers (x: number, y: number): number {
    return x + y;
 }
 
 addNumbers(1, 2); // Returns 3
 addNumbers(1);    // Returns an error


 //PARÁMETROS OPCIONALES
// Los parámetros de ruta se pueden convertir en opcionales si se anexa un signo de interrogación (?) al final del nombre del parámetro.

// En este ejemplo, x es necesario y y es opcional. El parámetro opcional debe ir después de los parámetros obligatorios en la lista de parámetros. 
// Además, para que esta función devuelva el valor correcto, debe abordar la posibilidad de que y se pueda pasar como un valor indefinido.

function addNumbers (x: number, y?: number): number {
    if (y === undefined) {
        return x;
    } else {
        return x + y;
    }
}

addNumbers(1, 2); // Returns 3
addNumbers(1);    // Returns 1


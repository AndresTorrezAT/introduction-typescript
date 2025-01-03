// Las funciones de flecha (también denominadas "expresión lambda" o "funciones de flecha Fat" debido al operador => usado para definirlas) 
// proporcionan una sintaxis abreviada para definir una función anónima. Debido a su naturaleza concisa, las funciones de flecha se usan a 
// menudo con funciones sencillas y en algunos escenarios de control de eventos.


// Anonymous function
let addNumbers1 = function (x: number, y: number): number {
    return x + y;
 }
 
 // Arrow function
 let addNumbers2 = (x: number, y: number): number => x + y;


//  En este ejemplo, observe también que las llaves se han quitado y no hay ninguna instrucción return. Las funciones de flecha de una sola línea 
//  pueden usar una sintaxis de cuerpo concisa o una devolución implícita, que permite la omisión de llaves y la palabra clave return.


// Si el cuerpo de la función tiene más de una línea, enciérrelo entre llaves e incluya la declaración return (si procede). En este ejemplo se muestra 
// el aspecto de la función anónima del ejemplo anterior cuando se escribe como una función de flecha.

let total2 = (input: number[]): number => {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}
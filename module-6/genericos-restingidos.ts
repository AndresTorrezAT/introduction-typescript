// Uso de restricciones genéricas para limitar los tipos

// La función identity puede aceptar cualquier tipo que decida pasar a las variables de tipo. Pero, en este caso, 
// debe restringir los tipos que el parámetro value puede aceptar a un intervalo de tipos en el que puede realizar
//  una operación de adición, en lugar de aceptar cualquier tipo posible. Esto se denomina restricción genérica.

function getPets<T, K extends keyof T>(pet: T, key: K) {
    return pet[key];
  }
  
  let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
  let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish"}
  
  console.log(getPets(pets1, "fish"));  // Returns 6
  console.log(getPets(pets2, "3"));     // Error



  // TIPO 2

  type ValidTypes = string | number;
function identity<T extends ValidTypes, U> (value: T, message: U) {   // Return type is inferred
    let result: ValidTypes = '';
    let typeValue: string = typeof value;

    if (typeof value === 'number') {           // Is it a number?
        result = value + value;                // OK
    } else if (typeof value === 'string') {    // Is it a string?
        result = value + value;                // OK
    }

    console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);

    return result
}

let numberValue = identity<number, string>(100, 'Hello');
let stringValue = identity<string, string>('100', 'Hello');

console.log(numberValue);       // Returns 200
console.log(stringValue);       // Returns 100100


// Solo se puede usar una restricción de tipos typeof para comprobar los tipos primitivos string, 
// number, bigint, function, boolean, symbol, object y sin definir. Para comprobar el tipo de una 
// clase, use una restricción de tipos instanceof.
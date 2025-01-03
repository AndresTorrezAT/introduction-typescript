## Funciones con nombre

La sintaxis para declarar una función con nombre en TypeScript es la misma que para definir una en JavaScript. La única diferencia con TypeScript es que puede proporcionar una anotación de tipo para los parámetros de la función y el valor devuelto.

Esta función acepta dos parámetros de tipo number y devuelve un valor number.

```
    function addNumbers (x: number, y: number): number {
    return x + y;
    }
    addNumbers(1, 2);
```

## Funciones anónimas

Una expresión de función (o función anónima) es una función que no está cargada previamente en el contexto de ejecución y solo se ejecuta cuando el código la encuentra. Las expresiones de función se crean en tiempo de ejecución y se deben declarar antes de que se puedan llamar. No se elevan, a diferencia de las declaraciones de función con nombre que se elevan en cuanto se inicia la ejecución del programa y se pueden llamar antes de su declaración.

```
    let addNumbers = function (x: number, y: number): number {
    return x + y;
    }
    addNumbers(1, 2);

    ---

    let sum = function (input: number[]): number {
    let total: number =  0;

    for(let i = 0; i < input.length; i++) {
            if(isNaN(input[i])) {
                continue;
            }
            total += Number(input[i]);
        }
        return total;
    }

    console.log(sum([1, 2, 3]));

```

## Funciones de flecha
Las funciones de flecha (también denominadas "expresión lambda" o "funciones de flecha Fat" debido al operador => usado para definirlas) proporcionan una sintaxis abreviada para definir una función anónima. Debido a su naturaleza concisa, las funciones de flecha se usan a menudo con funciones sencillas y en algunos escenarios de control de eventos.

```
    // Anonymous function
    let addNumbers1 = function (x: number, y: number): number {
    return x + y;
    }

    // Arrow function
    let addNumbers2 = (x: number, y: number): number => x + y;
```
En este ejemplo, observe también que las llaves se han quitado y no hay ninguna instrucción return. Las funciones de flecha de una sola línea pueden usar una sintaxis de cuerpo concisa o una devolución implícita, que permite la omisión de llaves y la palabra clave return.

```
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
```

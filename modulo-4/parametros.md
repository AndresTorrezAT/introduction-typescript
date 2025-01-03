## Parámetros obligatorios
Todos los parámetros de función son necesarios, a menos que se especifique lo contrario, y el número de argumentos pasados a una función debe coincidir con el número de parámetros necesarios que espera la función.

```

    function addNumbers (x: number, y: number): number {
    return x + y;
    }

    addNumbers(1, 2); // Returns 3
    addNumbers(1);    // Returns an error
    
```

## Parámetros opcionales
Los parámetros de ruta se pueden convertir en opcionales si se anexa un signo de interrogación (?) al final del nombre del parámetro.

En este ejemplo, x es necesario y y es opcional. El parámetro opcional debe ir después de los parámetros obligatorios en la lista de parámetros. Además, para que esta función devuelva el valor correcto, debe abordar la posibilidad de que y se pueda pasar como un valor indefinido.

```

function addNumbers (x: number, y?: number): number {
    if (y === undefined) {
        return x;
    } else {
        return x + y;
    }
}

addNumbers(1, 2); // Returns 3
addNumbers(1);    // Returns 1

```

## Parámetros predeterminados
También puede asignar valores predeterminados a los parámetros opcionales. Si se pasa un valor como argumento al parámetro opcional, se le asignará ese valor. De lo contrario, se le asignará el valor predeterminado. Al igual que con los parámetros opcionales, los parámetros predeterminados deben aparecer después de los parámetros necesarios en la lista de parámetros.

En este ejemplo, x es necesario y y es opcional. Si el valor no se pasa a y, el valor predeterminado es 25.

```
    function addNumbers (x: number, y = 25): number {
    return x + y;
    }

    addNumbers(1, 2);  // Returns 3
    addNumbers(1);     // Returns 26
```

## Parámetros de REST
Si desea trabajar con varios parámetros como un grupo (por ejemplo, pasarlos en una matriz). O bien, si no sabe cuántos parámetros tomará una función en última instancia. Puede usar parámetros rest. Los parámetros de REST se tratan como un número sin límite de parámetros opcionales. Puede dejarlos desactivados o tener tantos como desee.

Este ejemplo tiene un parámetro necesario y un parámetro opcional denominado restOfNumbers que puede aceptar cualquier número de números adicionales. Los puntos suspensivos (...) antes de restOfNumbers indican al compilador que compile una matriz de los argumentos pasados a la función y le asigna el nombre que le sigue para poder usarse en la función.

```
let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
   let total: number =  firstNumber;
   for(let counter = 0; counter < restOfNumbers.length; counter++) {
      if(isNaN(restOfNumbers[counter])){
         continue;
      }
      total += Number(restOfNumbers[counter]);
   }
   return total;
}

addAllNumbers(1, 2, 3, 4, 5, 6, 7);  // returns 28
addAllNumbers(2);                    // returns 2
addAllNumbers(2, 3, "three");        // flags error due to data type at design time, returns 5

```

## Parámetros de objeto desconstruido
Los parámetros de función son posicionales y deben pasarse en el orden en el que se definen en la función. Los parámetros posicionales pueden provocar que el código sea menos legible al llamar a una función con varios parámetros que son opcionales o el mismo tipo de datos.

Para habilitar los parámetros con nombre, puede usar una técnica denominada "parámetros de objeto desconstruido". Esta técnica permite usar una interfaz para definir parámetros con nombre, en lugar de posicionales, en las funciones.

En el ejemplo siguiente se define una clase base abstracta denominada Message que define dos propiedades. En la función displayMessage, el objeto Message se pasa como parámetro y proporciona acceso a las propiedades como si fueran parámetros normales.

```
    interface Message {
    text: string;
    sender: string;
    }

    function displayMessage({text, sender}: Message) {
        console.log(`Message from ${sender}: ${text}`);
    }

    displayMessage({sender: 'Christopher', text: 'hello, world'});
```


## Parámetros de objeto desconstruido
Los parámetros de función son posicionales y deben pasarse en el orden en el que se definen en la función. Los parámetros posicionales pueden provocar que el código sea menos legible al llamar a una función con varios parámetros que son opcionales o el mismo tipo de datos.

Para habilitar los parámetros con nombre, puede usar una técnica denominada "parámetros de objeto desconstruido". Esta técnica permite usar una interfaz para definir parámetros con nombre, en lugar de posicionales, en las funciones.

En el ejemplo siguiente se define una clase base abstracta denominada Message que define dos propiedades. En la función displayMessage, el objeto Message se pasa como parámetro y proporciona acceso a las propiedades como si fueran parámetros normales.

```
    interface Message {
    text: string;
    sender: string;
    }

    function displayMessage({text, sender}: Message) {
        console.log(`Message from ${sender}: ${text}`);
    }

    displayMessage({sender: 'Christopher', text: 'hello, world'});

```
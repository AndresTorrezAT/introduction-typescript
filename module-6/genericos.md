
## SIN GENERICOS

```
    function getArray(items : any[]) : any[] {
        return new Array().concat(items);
    }

```




## CON GENERICOS
En este ejemplo se vuelve a escribir la función getArray mediante genéricos. De este modo, la matriz puede aceptar 
cualquier tipo que se especifique al llamar a la función.

```
function getArray<T>(items : T[]) : T[] {
    return new Array<T>().concat(items);
}

```

Los genéricos definen una o varias variables de tipo entre corchetes angulares (< >) para identificar
el tipo o los tipos que se van a pasar al componente. Como verá, las variables de tipo también se conocen 
como parámetros de tipo o parámetros genéricos. En el ejemplo anterior, a la variable de tipo de la función 
se le denomina <T>. T es un nombre común para un genérico, pero puede asignarle el nombre que quiera.

```
    let numberArray = getArray<number>([5, 10, 15, 20]);
    numberArray.push(25);                      // OK
    numberArray.push('This is not a number');  // Generates a compile time type check error

    let stringArray = getArray<string>(['Cats', 'Dogs', 'Birds']);
    stringArray.push('Rabbits');               // OK
    stringArray.push(30);                      // Generates a compile time type check error
```

## USAR MAS DE UN GENERICO
```
    function identity<T, U> (value: T, message: U) : T {
        console.log(message);
        return value
    }

    let returnNumber = identity<number, string>(100, 'Hello!');
    let returnString = identity<string, string>('100', 'Hola!');
    let returnBoolean = identity<boolean, string>(true, 'Bonjour!');

    returnNumber = returnNumber * 100;   // OK
    returnString = returnString * 100;   // Error: Type 'number' not assignable to type 'string'
    returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'
```


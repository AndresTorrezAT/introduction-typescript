
// Las declaraciones de función con nombre se cargan enel contexto de ejecución antes de que se ejecute el código.
//  Este proceso se conoce como "elevación", y significa que puede usar la función antes de declararla.

function addNumbers (x: number, y: number): number {
    return x + y;
 }
 addNumbers(1, 2);
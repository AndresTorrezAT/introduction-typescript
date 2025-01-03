// Una expresión de función (o función anónima) es una función que no está cargada previamente 
// en el contexto de ejecución y solo se ejecuta cuando el código la encuentra. Las expresiones 
// de función se crean en tiempo de ejecución y se deben declarar antes de que se puedan llamar

let addNumbers = function (x: number, y: number): number {
    return x + y;
 }
 addNumbers(1, 2);


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
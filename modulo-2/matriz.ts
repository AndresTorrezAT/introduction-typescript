/* EXERCISE 4
   TODO: Declare the array as the type to match the type of the items in the array. */

   let randomNumbers: number[] = []; // Declarar e inicializar la matriz como un array de números
   let nextNumber: number; // Declarar la variable nextNumber como un número
   
   for (let i = 0; i < 10; i++) {
       nextNumber = Math.floor(Math.random() * (100 - 1)) + 1; // Generar un número aleatorio entre 1 y 99
       randomNumbers.push(nextNumber); // Agregar el número al array
   }
   
   console.log(randomNumbers);
   
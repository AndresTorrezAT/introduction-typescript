/*  EXERCISE 1
    TODO: Modify the code to add types to the variable declarations. 
    The resulting JavaScript should look the same as the original example when you're done. */

    let firstName: string; // Declarado como string
    let lastName: string;  // Declarado como string
    let fullName: string;  // Declarado como string
    let age: number;       // Declarado como número
    let ukCitizen: boolean; // Declarado como booleano
    
    firstName = 'Rebecca';
    lastName = 'Smith';
    age = 42;
    ukCitizen = false;
    fullName = firstName + " " + lastName;
    
    if (ukCitizen) {
        console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
    } else {
        console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
    }
    

/* EXERCISE 2
   TODO: Run the code as is and then modify it to have strongly typed variables. 
   Then, address any errors you find so that the result returned to a is 12. */

   let x: number; // Declarar x como un número
   let y: number; // Declarar y como un número
   let a: number; // Declarar a como un número
   
   x = 5; // Asignar un valor numérico a x
   y = 7; // Asignar un valor numérico a y
   a = x + y; // Sumar los valores de x y y
   
   console.log(a); // Resultado: 12
   
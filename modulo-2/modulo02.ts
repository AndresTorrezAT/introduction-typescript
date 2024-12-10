// Tipos de variable en TS

//Todo: Tipo booleano
let flag: boolean;
let yes = true;
let no = false;

//Todo: Tipos numéricos y BigInteger
let x: number;
let y = 0;
let z: number = 123.456;
let big: bigint = 100n;

//Todo: Tipo de cadena
let s: string;
let empty = "";
let abc = 'abc';

//cadenas de plantilla
let firstName: string = "Mateo";
let sentence: string = `My name is ${firstName}.
    I am new to TypeScript.`;
console.log(sentence);

//Todo: Enumeraciones
// De forma predeterminada, los valores enum comienzan con un valor de 0, por lo que Permanent es 0, Temp es 1 y Apprentice es 2. 
// Si quiere que los valores empiecen con un valor diferente, en este caso 1, especifíquelo en la declaración enum. 
// Realice las ediciones siguientes para que enum empiece los valores en 1.
enum ContractStatus {
    Permanent,
    Temp,
    Apprentice
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);// 1

enum ContractStatus1 {
    Permanent = 1,
    Temp,
    Apprentice
}
let employeeStatus1: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);// 2

console.log(ContractStatus[employeeStatus1]);// Temp

//Todo: Tipo any
let randomValue1: any = 10;
randomValue1 = 'Mateo';   // OK
randomValue1 = true;      // OK

//Todo: Tipo unknown
//El tipo unknown es similar al tipo any en que cualquier valor se puede asignar al tipo unknown. Sin embargo, 
//no se puede acceder a las propiedades de un tipo unknown; tampoco se pueden llamar ni construir.

//En este ejemplo se cambia el tipo any del ejemplo anterior a unknown. Ahora generará errores de comprobación de tipos 
//y evitará que compile el código hasta que tome las medidas adecuadas para resolverlos.

let randomValue2: unknown = 10;
randomValue2 = true;
randomValue2 = 'Mateo';

console.log(randomValue2.name);  // Error: Object is of type unknown
randomValue2();                  // Error: Object is of type unknown
randomValue2.toUpperCase();      // Error: Object is of type unknown


//Todo: Aserción de tipos
//Las aserciones de tipos en TypeScript permiten tratar una variable como si tuviera un tipo diferente, diciéndole al compilador: "confía en mí, sé lo que estoy haciendo". 
//Es similar a una conversión de tipos en otros lenguajes, pero sin modificar los datos ni realizar comprobaciones adicionales. 
//Esto solo afecta al compilador y no al tiempo de ejecución.
let randomValue: unknown = 10;

randomValue = true;
randomValue = 'Mateo';

if (typeof randomValue === "string") {
    console.log((randomValue as string).toUpperCase());    //* Returns MATEO to the console.
    //Aquí, estás asegurando que randomValue es un string, para usar métodos como .toUpperCase(). Es útil cuando el compilador no puede determinar el tipo exacto por sí mismo.
} else {
    console.log("Error - A string was expected here.");    //* Returns an error message.
}

//Todo: Restricciones de tipos
//Restricciones de tipos en TypeScript son reglas que se aplican para limitar o identificar el tipo de una variable en un momento específico del código, normalmente dentro de bloques if. Esto se hace para garantizar que ciertas operaciones sean seguras según el tipo de la variable.

//Por ejemplo, puedes usar typeof o instanceof para verificar el tipo en tiempo de ejecución. TypeScript entiende estas verificaciones y automáticamente ajusta su inferencia de tipos dentro del bloque donde se cumple la condición.

let randomValue3: unknown = 'Hello';

if (typeof randomValue3 === 'string') {
    // Dentro de este bloque, TypeScript sabe que randomValue3 es un string
    console.log(randomValue3.toUpperCase()); // Resultado: "HELLO"
} else {
    console.log('randomValue is not a string');
}

//Todo: Tipos de unión
// Un tipo de unión describe un valor que puede ser uno de entre varios tipos. Esta flexibilidad puede ser útil cuando no tenga controlado un valor

let multiType: number | boolean;
multiType = 20;         //* Valid
multiType = true;       //* Valid
multiType = "twenty";   //* Invalid

//

function add(x: number | string, y: number | string) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two'));  //* Returns "onetwo"
console.log(add(1, 2));          //* Returns 3
console.log(add('one', 2));      //* Returns error

//Todo: Tipos de intersección

//Los tipos de intersección están estrechamente relacionados con los tipos de unión, pero se usan de manera muy diferente. 
//Un tipo de intersección combina dos o más tipos para crear uno que tiene todas las propiedades de los tipos existentes. 
//Una intersección permite agregar tipos existentes de forma conjunta para obtener un tipo único que tenga todas las características que necesita.

//Un tipo de intersección usa el símbolo de y comercial (&) para separar cada tipo.

//Los tipos de intersección se usan con mayor frecuencia con las interfaces. En el ejemplo siguiente se definen dos interfaces, Employee y Manager, 
//y luego se crea un tipo de intersección llamado ManagementEmployee que combina las propiedades en ambas interfaces.

interface Employee {
    employeeID: number;
    age: number;
}

interface Manager {
    stockPlan: boolean;
}

type ManagementEmployee = Employee & Manager;

let newManager: ManagementEmployee = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};


//Todo: Tipos literales
//Los tipos literales se escriben como objetos, matrices, funciones o literales de tipo constructor, y se usan para crear tipos a partir de otros.
// Mediante el uso de tipos literales, puede especificar un valor exacto que debe tener una cadena, un número o un valor booleano (por ejemplo, "yes", "no" o "maybe").

type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";    //* Valid
myResult = "pass";          //* Valid
myResult = "failure";       //* Invalid

type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1;    //* Valid
diceRoll = 2;    //* Valid
diceRoll = 7;    //* Invalid


// Todo: Matrices
// Las matrices se pueden escribir de dos maneras. En la primera, se usa el tipo de los elementos seguidos de corchetes ([ ]) para denotar una matriz de ese tipo de elemento:

let list1: number[] = [1, 2, 3];

//En el segundo caso, se usa un tipo Array genérico con la sintaxis Array<type>:

let list2: Array<number> = [1, 2, 3];

// Todo: Tuplas
//Tener una matriz de los mismos tipos de valor es útil, pero a veces tiene una matriz que contiene valores de tipos mixtos. 
//Para ese propósito, TypeScript proporciona el tipo de tupla. Para declarar una tupla, use la sintaxis variableName: [type, type, ...].

let person1: [string, number] = ['Marcia', 35];//OK

let person2: [string, number] = ['Marcia', 35, true];//ERROR

let person3: [string, number] = [35, 'Marcia'];//ERROR

let person4: [string, number] = ['Marcia', 35, 36];//ERROR

//el orden de los valores debe coincidir con el orden de los tipos.


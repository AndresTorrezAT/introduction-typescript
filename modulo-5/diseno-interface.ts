interface Dog {
    id?: number;
    name: string;
    age: number;
    description: string;
}


class DogRecord implements Dog {
    id: number;
    name: string;
    age: number;
    description: string;

    constructor({name, age, description, id = 0}: Dog) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.description = description;
    }

    static load(id: number): DogRecord {
        // code to load dog from database
        return dog;
    }

    save() {
        // code to save dog to database
    }
}

// async loadDog(id: number): Dog {
//     return await (await fetch('demoUrl')).json() as Dog;
// }


//RESUMEN
// Mientras utilice TypeScript, encontrará muchos nuevos casos en los que las interfaces, en particular, 
// le facilitarán la vida como desarrollador. Una característica clave de TypeScript para recordar sobre 
// las interfaces es que no requieren una clase. Por ello, puede utilizarlas siempre que necesite la capacidad 
// de definir una estructura de datos sin tener que crear una implementación de clase completa
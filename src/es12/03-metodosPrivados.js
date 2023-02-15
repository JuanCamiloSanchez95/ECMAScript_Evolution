//declaracion de una clase
class User{
    constructor(){
        console.log("Nuevo usuario Creado");
    }
//metodos
    #greeting(){
        return "Hola mundo";
    }   
}


const daju =  new User();
console.log(daju.greeting());


class Usuario{
    constructor(edad,nombre){
        this.nombre = nombre;
        this.edad = edad;
        this.country = "Colombia";
        console.log("Nuevo usuario Creado");
    }
//metodos
    greeting(){
        return `Hola mundo soy ${this.nombre} y soy de ${this.country}`;
    }   

    get #uAge(){
        return this.edad;
    }

    set uAge(n){
        this.edad = n;
    }
}

const jacob =  new Usuario(25,'Jacob');
console.log(jacob.greeting());
console.log(jacob.uAge);
console.log(jacob.uAge = 39);
var lastname = "Dada";
lastname = "Jonas";
console.log(lastname);

let fruit = "Apple";
fruit = "Kiwi";
console.log(fruit);

const animal  = "dog";
animal = "cat";
console.log(animal);

const fruits = ()=>{
    if(true){
        var fruit1 = "Apple"; //FUNCTION SCOPE
        let fruit2 = "kiwi"; //BLOCK SCOPE
        const fruit3 = "banana"; //BLOCK SCOPE
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();
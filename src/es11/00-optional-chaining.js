const users = {
    gndx:{
        country: 'MX'
    },
    Juan:{
        country: "COL"
    }
}

console.log(users.gndx.country);
console.log(users.Aleja?.edad); // MANEJA CON UNDEFINED
console.log(users.Aleja.edad); // ROMPE LA APLICACION
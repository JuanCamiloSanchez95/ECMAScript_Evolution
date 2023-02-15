const nombres = ["Andres", "Valeria", "Ana", "Ramiro", "Richard"]


//  CON NUMEROS > 0 : [0,1,2,3, ...., lenght-1]
//  CON NUMEROS < 0 : [-lenght, ...,  -3, -2, -1]

nombres.at(-1) // "Richard"
nombres[-1] // undefined
nombres.at(-3) // "Ana"
nombres[nombres.length -1] // "Richard"
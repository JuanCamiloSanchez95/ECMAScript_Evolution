//ARRAY  => OBJETO
const arrayEntries = [
    [ 'name', 'Andres' ],
    [ 'email', 'andres@correo.com' ],
    [ 'age', 23 ]
  ] 
  
  const usuario = Object.fromEntries(arrayEntries) 
  console.log(usuario)


  const entries = new Map ([["name", "alexa"], ["age", 24]]);
  //MAPA  => OBJETO
console.log(entries);
console.log(Object.fromEntries(entries));
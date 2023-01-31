/* PROMESAS */

const anotherFunction = (num)=>{
   return new Promise((resolve,reject) =>{
        console.log(`el numero es ${num}`);
        if(num > 10){
            resolve ("Se logro");
        }else{
            reject ("No se logro");;
        }
   }) 
}

anotherFunction(5)
    .then(response => console.log(response))
    .catch(err => console.log(err));